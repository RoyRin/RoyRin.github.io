# Photo Upload Tool

Quick tool to add drone photos to the website.

## Usage

1. Drop photos into `upload_photos/` directory
2. Run: `cd upload_photos && ./upload_drone_photos.sh`
3. Follow prompts for title, location, category
4. Commit and push: `git add -A && git commit -m "Add drone photos" && git push`

## What it does

- Optimizes photos for web (resizes, compresses, strips metadata)
- Archives originals to GitHub
- Updates website component automatically
- Generates safe filenames

**Requirements:** ImageMagick (`brew install imagemagick`)