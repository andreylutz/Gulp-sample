import svgSprite from "gulp-svg-sprite";

// Функция для задачи сборки файлов svg спрайт.
export const svgSprive = () => {
  return (
    app.gulp
      // Получение доступа к файлам и папкам по указаному пути методом src().
      .src(app.path.src.svgicon, {})
      // Оброботка ошибок и подключение уведомлений.
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SVG",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(
        svgSprite({
          mode: {
            stack: {
              sprite: `../icons/icons.svg`,
              // Создавать страничку с перечнем иконок
              example: true,
            },
          },
        })
      )
      // Выгружаем файл в папку с результатом.
      .pipe(app.gulp.dest(app.path.build.images))
  );
};
