// Функция для задачи копирования файлов.
export const copy = () => {
  return (
    app.gulp
      // Получение доступа к файлам и папкам по указаному пути методом src().
      .src(app.path.src.files)
      // dest() - Пункт назначения копируемых файлов.
      .pipe(app.gulp.dest(app.path.build.files))
  );
};
