// Разворачиваем локальный сервер.
export const server = (done) => {
  // Запуск browsersync
  app.plugins.browsersync.init({
    server: {
      // Базовая папка откуда нужно запустить файлы.
      baseDir: `${app.path.build.html}`,
    },
    // Убираем сообщения в браузере если не нужны.
    notify: false,
    port: 3000,
  });
};
