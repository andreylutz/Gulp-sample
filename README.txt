Создание package.json : npm init
Устанавливаем gulp глобально: npm i gulp-cli -g
устанавливаем gulp в проект: npm i gulp -D
Запуск сборки: gulp (npm run dev если прописан скрипт)

<!!!====================================================================================!!!>

Плагин для удаления папки с результатом: npm i -D del   
Плагин для сборки HTML: npm i -D gulp-file-include
Плагин для поиска и замены: npm i -D gulp-replace
Плагин для преформатирования в webp изоброжений: npm i -D gulp-webp-html-nosvg
Плагин для избегания кэширования: npm i -D gulp-version-number
Плагин для обработки ошибок: npm i -D gulp-plumber
Плагин для сообщений (подсказок): npm i -D gulp-notify
Локальный сервер: npm i -D browser-sync
Плагины для работы с предпроцессорами SASS : npm i -D gulp-sass sass
Плагин для переименования файлов: npm i -D gulp-rename
Плагин для сжатие CSS файла: npm i -D gulp-clean-css
Плагин для вывода .webp изображений: npm i -D gulp-webpcss ( требует доустановки конвертора !!!ВАЖНА ИМЕННО ВЕРСИЯ (2.2.3)!!!: npm i -D webp-converter@2.2.3 )
Плагин для добавления вендорных префиксов: npm i -D gulp-autoprefixer
Плагин для гркппировки медиа запросов: npm i -D gulp-group-css-media-queries
Установка webpack: npm i -D webpack
Плагин для работы с webpack: npm i -D webpack-stream
Плагин для сжатия изображений: npm i -D gulp-imagemin
Плагин для создания .webp: npm i -D gulp-webp
Плагин для проверки обновлений изображений: npm i -D gulp-newer
Плагин для преобразования шрифтов из формата .otf в формат .ttf и .woff: npm i -D gulp-fonter (если не работает используем gulp-fonter-fix)
Плагин для преобразования шрифтов из формата .otf в формат .ttf2 и .woff2: npm i -D gulp-ttf2woff2
Плагин для svg спрайта: npm i -D gulp-svg-sprite
Плагин условного ветвления: npm i -D gulp-if
Плагин для создания ZIP архива: npm i -D gulp-zip
Плагин для отправки проекта на ftp сервер: npm i -D vinyl-ftp
Утилита позволяющая отображать ход копирования файлов на ftp сервер: npm i -D gulp-util

<!!!========================================================================================!!!>

Для повторного использования данной сборки в файле package.json в объекте "devDependencies" убераем символ в виде домика ("webp-converter": "2.2.3")
версию сборки можно исправить на слово "latest" ( например "browser-sync": "latest" и т.д. )
Нужно быть готовым что с изменением версии плагина он может перестать работать или потребуеться коррекция кода
Дериктории и файлы которые могут потребоваться для нового проекта ( gulp, src, gulpfile.js, package.json )
После копирования нужных файлов и папок выполняем команду npm i и запускаем нужный режим работы проекта например npm run dev (режим разработки)

<!!!========================================================================================!!!>