// Импортируем плагины.
import dartSass from "sass";
import gulpSass from "gulp-sass";
// Переименование файла.
import rename from "gulp-rename";
// Сжатие CSS файла.
import cleanCss from "gulp-clean-css";
// Вывод WEBP изображений.
import webpcss from "gulp-webpcss";
// Добавление вендорных префиксов.
import autoprefixer from "gulp-autoprefixer";
// Группировка медиа запросов.
import groupCssMediaQueries from "gulp-group-css-media-queries";

// Делаем вызов плагина с передачей ему компилятора.
const sass = gulpSass(dartSass);

// Функция для сборки файлов-стилей css.
export const scss = () => {
  return (
    app.gulp
      // Получаем доступ к файлу. app.isDev (режим разработки) нужно как true.
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      // Оброботка ошибок и подключение уведомлений.
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // Меняем путь картинки в файле сборки.
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      // Вызов компилятора из SCSS в CSS.
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      // Группировка медиа запросов.
      .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
      // Вывод WEBP изображений.
      .pipe(
        app.plugins.if(
          app.isBuild,
          webpcss({
            webpClass: ".webp",
            noWebpClass: ".no-webp",
          })
        )
      )
      // Добавление вендорных префиксов.
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true,
          })
        )
      )
      // Раскоментировать если нужен не сжатый дубль файла стилей.
      // .pipe(app.gulp.dest(app.path.build.css))
      // Сжатие CSS файла.
      .pipe(app.plugins.if(app.isBuild, cleanCss()))
      // Переименовать файлы в нужный формат.
      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      // Выгружаем в папку с результатом.
      .pipe(app.gulp.dest(app.path.build.css))
      // Обновляем браузер.
      .pipe(app.plugins.browsersync.stream())
  );
};
