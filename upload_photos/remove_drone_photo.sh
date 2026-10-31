#!/bin/bash

# Script to remove drone photos from multiple locations
# Usage: ./remove_drone_photo.sh <photo_name>

# Check if photo name was provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <photo_name>"
    echo "Example: $0 dji_0641.jpg"
    exit 1
fi

PHOTO_NAME="$1"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Define paths (script is now in upload_photos directory)
ORIGINAL_PATH="$SCRIPT_DIR/../drone_photos/$PHOTO_NAME"
OPTIMIZED_PATH="$SCRIPT_DIR/../roy-portfolio/public/assets/drone_photos_optimized/$PHOTO_NAME"
JSX_FILE="$SCRIPT_DIR/../roy-portfolio/src/pages/DronePhotos.jsx"

echo "================================================"
echo "Drone Photo Removal Script"
echo "================================================"
echo "Photo to remove: $PHOTO_NAME"
echo ""

# Check which files exist
echo "Checking for files..."
echo ""

found_files=false

if [ -f "$ORIGINAL_PATH" ]; then
    echo "✓ Found in drone_photos/"
    found_files=true
else
    echo "✗ Not found in drone_photos/"
fi

if [ -f "$OPTIMIZED_PATH" ]; then
    echo "✓ Found in roy-portfolio/public/assets/drone_photos_optimized/"
    found_files=true
else
    echo "✗ Not found in roy-portfolio/public/assets/drone_photos_optimized/"
fi

# Check for reference in JSX file
if grep -q "$PHOTO_NAME" "$JSX_FILE" 2>/dev/null; then
    echo "✓ Found reference in DronePhotos.jsx"
    found_files=true
    
    # Show the line that will be removed
    echo ""
    echo "The following line(s) will be removed from DronePhotos.jsx:"
    echo "------------------------------------------------"
    grep -n "$PHOTO_NAME" "$JSX_FILE" | while IFS=: read -r line_num content; do
        echo "Line $line_num: $content"
    done
    echo "------------------------------------------------"
else
    echo "✗ No reference found in DronePhotos.jsx"
fi

if [ "$found_files" = false ]; then
    echo ""
    echo "No files found for photo: $PHOTO_NAME"
    exit 0
fi

# Ask for confirmation
echo ""
read -p "Do you want to proceed with removal? (y/N): " -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Operation cancelled."
    exit 0
fi

# Perform removals
echo "Removing files..."
echo ""

# Remove from original location
if [ -f "$ORIGINAL_PATH" ]; then
    rm "$ORIGINAL_PATH"
    if [ $? -eq 0 ]; then
        echo "✓ Removed from drone_photos/"
    else
        echo "✗ Failed to remove from drone_photos/"
    fi
fi

# Remove from optimized location
if [ -f "$OPTIMIZED_PATH" ]; then
    rm "$OPTIMIZED_PATH"
    if [ $? -eq 0 ]; then
        echo "✓ Removed from roy-portfolio/public/assets/drone_photos_optimized/"
    else
        echo "✗ Failed to remove from roy-portfolio/public/assets/drone_photos_optimized/"
    fi
fi

# Remove from JSX file
if grep -q "$PHOTO_NAME" "$JSX_FILE" 2>/dev/null; then
    # Use sed to remove the line containing the photo
    sed -i '' "/$PHOTO_NAME/d" "$JSX_FILE"
    
    if [ $? -eq 0 ]; then
        echo "✓ Removed reference from DronePhotos.jsx"
    else
        echo "✗ Failed to remove reference from DronePhotos.jsx"
    fi
fi

echo ""
echo "================================================"
echo "Removal complete!"
echo "================================================"