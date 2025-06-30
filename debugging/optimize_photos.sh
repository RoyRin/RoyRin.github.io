#!/bin/bash

# Script to optimize drone photos for web deployment

SOURCE_DIR="original_website/assets/drone_photos"
DEST_DIR="roy-portfolio/public/assets/drone_photos_optimized"

echo "Optimizing drone photos..."

# Loop through all images in source directory
for img in "$SOURCE_DIR"/*.{JPG,jpeg}; do
    # Skip if no files match
    [ -f "$img" ] || continue
    
    # Get filename without path
    filename=$(basename "$img")
    
    # Convert to lowercase extension and optimize
    output_file="$DEST_DIR/${filename%.*}.jpg"
    
    echo "Processing $filename..."
    
    # Convert and optimize:
    # - Resize to max width 1920px (maintains aspect ratio)
    # - Set quality to 85%
    # - Strip metadata
    # - Progressive JPEG for better loading
    convert "$img" \
        -resize "1920x>" \
        -quality 85 \
        -strip \
        -interlace Plane \
        "$output_file"
done

# Show results
echo "Optimization complete!"
echo "Original size:"
du -sh "$SOURCE_DIR"
echo "Optimized size:"
du -sh "$DEST_DIR"