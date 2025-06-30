#!/bin/bash

# Drone Photo Upload Script
# This script processes new drone photos and adds them to your website

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Directories
UPLOAD_DIR="."
ORIGINAL_DIR="../original_website/assets/drone_photos"
OPTIMIZED_DIR="../roy-portfolio/public/assets/drone_photos_optimized"
COMPONENT_FILE="../roy-portfolio/src/pages/DronePhotos.jsx"

echo -e "${BLUE}🚁 Drone Photo Upload Tool${NC}"
echo "================================"

# Check if upload directory has photos (exclude README and script files)
photo_count=$(find $UPLOAD_DIR -maxdepth 1 \( -name "*.jpg" -o -name "*.JPG" -o -name "*.jpeg" -o -name "*.JPEG" \) 2>/dev/null | wc -l)
if [ "$photo_count" -eq 0 ]; then
    echo -e "${RED}No photos found in $UPLOAD_DIR/${NC}"
    echo "Please add photos (.jpg, .JPG, .jpeg, .JPEG) to the upload_photos/ directory first."
    exit 1
fi

# Check dependencies
if ! command -v magick &> /dev/null; then
    echo -e "${RED}ImageMagick not found. Please install it first.${NC}"
    echo "On macOS: brew install imagemagick"
    exit 1
fi

echo -e "${GREEN}Found photos to process:${NC}"
# Create temporary array for listing
temp_photos=()
while IFS= read -r -d '' photo; do
    temp_photos+=("$photo")
done < <(find $UPLOAD_DIR -maxdepth 1 \( -name "*.jpg" -o -name "*.JPG" -o -name "*.jpeg" -o -name "*.JPEG" \) -print0 2>/dev/null)

for photo in "${temp_photos[@]}"; do
    echo "  - $(basename "$photo")"
done

echo ""
read -p "Continue with processing? (y/N): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 1
fi

# Location options
locations=(
    "North Carolina"
    "Seattle" 
    "Toronto"
    "Tobermory"
    "Other"
)

# Category options
categories=(
    "Beach"
    "Wildlife"
    "Maritime"
    "Infrastructure" 
    "Industrial"
    "Urban"
    "Winter"
    "Transportation"
    "Landscape"
    "People"
    "Other"
)

# Function to select from options
select_option() {
    local prompt="$1"
    shift
    local options=("$@")
    
    echo -e "${YELLOW}$prompt${NC}"
    for i in "${!options[@]}"; do
        echo "  $((i+1)). ${options[$i]}"
    done
    echo "  $((${#options[@]}+1)). Custom"
    
    while true; do
        echo -n "Select option (1-$((${#options[@]}+1))): "
        read -r choice < /dev/tty
        if [[ "$choice" =~ ^[0-9]+$ ]] && [ "$choice" -ge 1 ] && [ "$choice" -le $((${#options[@]}+1)) ]; then
            if [ "$choice" -eq $((${#options[@]}+1)) ]; then
                echo -n "Enter custom value: "
                read -r selected_value < /dev/tty
            else
                selected_value="${options[$((choice-1))]}"
            fi
            break
        else
            echo "Invalid selection. Please try again."
        fi
    done
}

# Create array of photos
photos=()
while IFS= read -r -d '' photo; do
    photos+=("$photo")
done < <(find $UPLOAD_DIR -maxdepth 1 \( -name "*.jpg" -o -name "*.JPG" -o -name "*.jpeg" -o -name "*.JPEG" \) -print0 2>/dev/null)

# Process each photo
for photo in "${photos[@]}"; do
    
    filename=$(basename "$photo")
    echo ""
    echo -e "${BLUE}Processing: $filename${NC}"
    
    # Get metadata for the photo
    echo "Enter details for this photo:"
    echo -n "Title (or press Enter for auto-generated): "
    read -r title < /dev/tty
    echo "DEBUG: Received title: '$title'"
    
    if [ -z "$title" ]; then
        # Auto-generate title from filename
        title=$(basename "$filename" | sed 's/\.[^.]*$//' | sed 's/_/ /g' | sed 's/\b\w/\U&/g')
        echo "DEBUG: Auto-generated title: '$title'"
    fi
    
    echo "DEBUG: About to select location..."
    select_option "Select location:" "${locations[@]}"
    location="$selected_value"
    echo "DEBUG: Selected location: '$location'"
    
    echo "DEBUG: About to select category..."
    select_option "Select category:" "${categories[@]}"
    category="$selected_value"
    echo "DEBUG: Selected category: '$category'"
    
    # Generate safe filename (lowercase, underscores)
    safe_filename=$(echo "$filename" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9.]/_/g' | sed 's/__*/_/g')
    safe_name="${safe_filename%.*}"
    
    echo ""
    echo -e "${YELLOW}Processing $filename...${NC}"
    
    # Step 1: Copy original to archive (strip metadata)
    echo "  1. Archiving original (stripping metadata)..."
    magick "$photo" -strip "$ORIGINAL_DIR/${safe_filename}"
    
    # Step 2: Create optimized version
    echo "  2. Creating optimized version..."
    magick "$photo" \
        -resize "1920x>" \
        -quality 85 \
        -strip \
        -interlace Plane \
        "$OPTIMIZED_DIR/${safe_name}.jpg"
    
    # Step 3: Add to component file
    echo "  3. Adding to website component..."
    
    # Create the new photo entry
    new_entry="    { src: '/assets/drone_photos_optimized/${safe_name}.jpg', location: '$location', category: '$category', title: '$title' },"
    
    # Find the line with "// Other" and add before it
    if grep -q "// Other" "$COMPONENT_FILE"; then
        # Add before "// Other" section
        sed -i '' "/\/\/ Other/i\\
$new_entry\\
    \\
" "$COMPONENT_FILE"
    else
        # Add at the end of the photos array (before the closing bracket)
        sed -i '' "/^  ];/i\\
$new_entry\\
" "$COMPONENT_FILE"
    fi
    
    echo -e "  ${GREEN}✓ Successfully processed $filename${NC}"
    
    # Remove from upload directory
    rm "$photo"
done

echo ""
echo -e "${GREEN}🎉 All photos processed successfully!${NC}"
echo ""
echo "Next steps:"
echo "1. Review the changes in your code"
echo "2. Test locally: npm run dev"
echo "3. Commit and push: git add -A && git commit -m 'Add new drone photos' && git push"
echo ""
echo "Your photos are now available at:"
echo "  - Original archive: $ORIGINAL_DIR/"
echo "  - Website display: $OPTIMIZED_DIR/"
echo "  - Component updated: $COMPONENT_FILE"