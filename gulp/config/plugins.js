// Поиск и замена.
import replace from "gulp-replace";
// Оброботка ошибок.
import plumber from "gulp-plumber";
// Сообщения (подсказки).
import notify from "gulp-notify";
// Локальный сервер.
import browsersync from "browser-sync";
// Проверка обновлений. (изображений)
import newer from "gulp-newer";
// Условное ветвление.
import ifPlugin from "gulp-if";

// Экспортируем объект.
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
