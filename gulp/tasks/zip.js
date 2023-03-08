// Удаление папки.
import { deleteAsync } from "del";
// Для формирования ZIP архива.
import zipPlugin from "gulp-zip";

// Функция для сборки ZIP архива.
export const zip = () => {
  // Удаляем zip архив который возможно существует.
  deleteAsync(`./${app.path.rootFolder}.zip`);
  return (
    app.gulp
      // Получаем все файлы в папке с результатом.
      .src(`${app.path.buildFolder}/**/*.*`, {})
      // Обробатываем ошибки.
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "ZIP",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // Формируем zip архив.
      .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
      // Выводим результат.
      .pipe(app.gulp.dest("./"))
  );
};
