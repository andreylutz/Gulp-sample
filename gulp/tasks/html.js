// Импорт плагина для сборки html.
import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

// Функция для задачи сборки файлов html.
export const html = () => {
  return (
    app.gulp
      // Получение доступа к файлам и папкам по указаному пути методом src().
      .src(app.path.src.html)
      // Оброботка ошибок и подключение уведомлений.
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // Сборка html.
      .pipe(fileinclude())
      // Меняем путь картинки в файле сборки.
      .pipe(app.plugins.replace(/@img\//g, "img/"))
      // Меняем условия в зависимости от режима разаработки продакшен или девелопер
      .pipe(
        app.plugins.if(
          // Если в режиме продакшена.
          app.isBuild,
          // Меняем формат изоброжений на webp.
          webpHtmlNosvg()
        )
      )
      // Меняем условия в зависимости от режима разаработки продакшен или девелопер
      .pipe(
        app.plugins.if(
          // Если в режиме продакшена.
          app.isBuild,
          // Добавляем ключ для отмены кэштрования в браузере.
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
            output: {
              file: "gulp/version.json",
            },
          })
        )
      )
      // Выгружаем файл в папку с результатом.
      .pipe(app.gulp.dest(app.path.build.html))
      // Обновляем браузер.
      .pipe(app.plugins.browsersync.stream())
  );
};
