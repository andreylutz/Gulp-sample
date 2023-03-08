// Плагин для создание формата webp.
import webp from "gulp-webp";
// Плагин для сжатия изображений.
import imagemin from "gulp-imagemin";

// Функция для задачи сборки изображений.
export const images = () => {
  return (
    app.gulp
      // Получение доступа к файлам и папкам по указаному пути методом src().
      .src(app.path.src.images)
      // Оброботка ошибок и подключение уведомлений.
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "IMAGES",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // Проверка папки изображений на обновления.
      .pipe(app.plugins.newer(app.path.build.images))
      // Создаем изображение в webp.
      .pipe(app.plugins.if(app.isBuild, webp()))
      // Выгружаем файл в папку с результатом.
      .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
      // Повторно получаем доступ к папке изоброжений.
      .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images)))
      // Повторно проверяем папку с изображений на обновления.
      .pipe(
        app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images))
      )
      // Сжимаем картинки.
      .pipe(
        app.plugins.if(
          app.isBuild,
          imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3, // 0 to 7 ( На сколько сильно нужно сжимать изображение )
          })
        )
      )
      // Повторно выгружаем файл в папку с результатом.
      .pipe(app.gulp.dest(app.path.build.images))
      // Получаем доступ к папке изоброжений.
      .pipe(app.gulp.src(app.path.src.svg))
      // Повторно выгружаем файл в папку с результатом.
      .pipe(app.gulp.dest(app.path.build.images))
      // Обновляем браузер.
      .pipe(app.plugins.browsersync.stream())
  );
};
