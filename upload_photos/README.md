# Drone Photo Upload Tool

This directory contains tools to streamline adding new drone photos to your website.

## Quick Start

1. **Add photos**: Drop your new drone photos (JPG, JPEG) into this `upload_photos/` directory
2. **Run the script**: `./upload_drone_photos.sh`
3. **Follow prompts**: Enter title, location, and category for each photo
4. **Review and commit**: Check changes, then commit and push

## What the script does

### Automatic Processing
- ✅ Strips metadata from photos for privacy
- ✅ Creates optimized web versions (resized, compressed)
- ✅ Copies originals to archive directory
- ✅ Updates the website component automatically
- ✅ Generates safe filenames (lowercase, no spaces)

### Interactive Input
For each photo, you'll be prompted for:
- **Title**: Custom title or auto-generated from filename
- **Location**: Choose from predefined list or custom
- **Category**: Choose from predefined categories or custom

### Predefined Options

**Locations:**
- North Carolina
- Seattle
- Toronto
- Tobermory
- Other (custom)

**Categories:**
- Beach, Wildlife, Maritime
- Infrastructure, Industrial, Urban
- Winter, Transportation, Landscape
- People, Other (custom)

## File Structure After Processing

```
original_website/assets/drone_photos/     # Full-size originals (for GitHub)
roy-portfolio/public/assets/drone_photos_optimized/  # Web-optimized versions
roy-portfolio/src/pages/DronePhotos.jsx  # Updated component
```

## Example Workflow

```bash
# 1. Copy photos to upload directory
cp ~/Downloads/new_drone_*.jpg upload_photos/

# 2. Run the upload script
cd upload_photos
./upload_drone_photos.sh

# 3. Follow prompts for each photo
# 4. Test locally
npm run dev

# 5. Commit and push
git add -A
git commit -m "Add new drone photos from [location]"
git push
```

## Requirements

- ImageMagick (`brew install imagemagick` on macOS)
- Bash shell
- Git (for version control)

## Troubleshooting

**Script not executable:**
```bash
chmod +x upload_drone_photos.sh
```

**ImageMagick not found:**
```bash
brew install imagemagick
```

**Photos not found:**
- Ensure photos have extensions: .jpg, .JPG, .jpeg, .JPEG
- Check that files are in the `upload_photos/` directory

## Safety Features

- ✅ Confirms before processing
- ✅ Strips all metadata for privacy
- ✅ Backs up originals
- ✅ Safe filename generation
- ✅ Automatic cleanup of upload directory