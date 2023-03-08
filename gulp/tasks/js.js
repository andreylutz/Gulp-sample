// Подключаем webpack
import webpack from "webpack-stream";

// Функция для задачи сборки файлов js. { sourcemaps: true } - Для включение возможности понять в каком файле ошибка.
export const js = () => {
  return (
    app.gulp
      // Получение доступа к файлам и папкам по указаному пути методом src(). app.isDev (режим разработки) нужно как true.
      .src(app.path.src.js, { sourcemaps: app.isDev })
      // Оброботка ошибок и подключение уведомлений.
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // Настройки webpack
      .pipe(
        webpack({
          mode: app.isBuild ? "production" : "development",
          output: {
            filename: "app.min.js",
          },
        })
      )
      // Выгружаем файл в папку с результатом.
      .pipe(app.gulp.dest(app.path.build.js))
      // Обновляем браузер.
      .pipe(app.plugins.browsersync.stream())
  );
};
