// Получаем имя папки проекта.
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

// Путь к папке с результатом, так же можно использовать rootFolder.
const buildFolder = `./dist`;
// Путь к папке  с исходниками.
const srcFolder = `./src`;

export const path = {
  // Объект путей к папке с результатом.
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
  },
  // Объект путеей к исходным файлам.
  // ** - Проверяем файлы в любых вложеных папках внутри папки files.
  // *.* - Абсолютно любые файлы с любым названием и любым расширением.
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    svgicon: `${srcFolder}/svgicons/*.svg`,
  },
  // Объект путей к файлам и папкам за которыми должен следить Gulp.(Наблюдатель)
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg, jpeg, png, svg, gif, webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`, // Имя папки на удаленном сервере.
};
