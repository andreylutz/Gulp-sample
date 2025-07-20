## ⚙️ Project Setup with Gulp

This project uses **Gulp** as a task runner and build automation tool. Below are the steps and required plugins to configure and run the build process.

### 📦 Initialize the Project

```bash
npm init              # Create package.json
npm i gulp-cli -g     # Install Gulp CLI globally
npm i gulp -D         # Install Gulp locally as a dev dependency
```

### 🔌 Recommended Gulp Plugins

| Purpose                                      | Plugin                                                |
| -------------------------------------------- |:-----------------------------------------------------:|
| Delete output folders                        | npm i -D del                                          |
| HTML file includes                           | npm i -D gulp-file-include                            |
| String replacement                           | npm i -D gulp-replace.                                |
| WebP conversion in HTML                      | npm i -D gulp-webp-html-nosvg                         |
| Cache busting/versioning                     | npm i -D gulp-version-number                          |
| Error handling                               | npm i -D gulp-plumber                                 |
| Notifications                                | npm i -D gulp-notify                                  |
| Local development server                     | npm i -D browser-sync                                 |
| SCSS/SASS preprocessing                      | npm i -D gulp-sass sass                               |
| Rename files                                 | npm i -D gulp-rename                                  |
| CSS minification                             | npm i -D gulp-clean-css                               |
| WebP support in CSS                          | npm i -D gulp-webpcss + npm i -D webp-converter@2.2.3 |
| Autoprefixer                                 | npm i -D gulp-autoprefixer                            |
| Group media queries in CSS.                  | npm i -D gulp-group-css-media-queries                 |
| Webpack integration                          | npm i -D webpack + npm i -D webpack-stream            |
| Image optimization                           | npm i -D gulp-imagemin                                |
| WebP image conversion                        | npm i -D gulp-webp                                    |
| Check if images are new.                     | npm i -D gulp-newer                                   |
| Font format conversion (.otf to .ttf/.woff)  | npm i -D gulp-fonter (or gulp-fonter-fix)             |
| Convert .ttf to .woff2.                      | npm i -D gulp-ttf2woff2                               |
| SVG sprite creation                          | npm i -D gulp-svg-sprite                              |
| Conditional logic in tasks                   | npm i -D gulp-if                                      |
| Create ZIP archives                          | npm i -D gulp-zip                                     |
| Upload via FTP                               | npm i -D vinyl-ftp                                    |
| Show FTP progress logs                       | npm i -D gulp-util                                    |



### 🧠 Notes for Reusability
	•	When reusing this setup in a new project, copy the following directories and files:
	•	gulp/
	•	src/
	•	gulpfile.js
	•	package.json
	•	Then install dependencies:

`npm i`

	•	And run the appropriate command (e.g. for development):

`npm run dev`

### ⚠️ Version Management Tips

	•	In package.json, remove the caret (^) symbol in this line: "webp-converter": "2.2.3" to lock the exact version.
	•	You may use "latest" instead of fixed versions (e.g. "browser-sync": "latest"), but be careful:
	•	Plugins might stop working after updates
	•	You may need to refactor code when using newer versions

### ✅ With this setup, you’ll have a flexible, automated frontend build environment ready to use or extend.