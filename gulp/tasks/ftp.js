// Конфигурационный файл.
import { configFTP } from "../config/ftp.js";
// Плагин для отправки проекта на ftp сервер.
import vinylFTP from "vinyl-ftp";
// Утилита позволяющая отображать ход копирования файлов на ftp сервер.
import util from "gulp-util";

export const ftp = () => {
  // Плагин для вывода состояния копирования.
  configFTP.log = util.log;
  const ftpConnect = vinylFTP.create(configFTP);
  return (
    app.gulp
      // Получаем все файлы результата.
      .src(`${app.path.buildFolder}/**/*.*`, {})
      // Оброботка ошибок.
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FTP",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`))
  );
};
