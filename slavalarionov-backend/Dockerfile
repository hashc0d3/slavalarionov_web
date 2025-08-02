# Используем официальный Node.js образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --production

# Копируем остальные файлы проекта
COPY . .

# Собираем TypeScript
RUN npm run build

# Открываем порт (замените на ваш, если другой)
EXPOSE 3000

# Запускаем приложение
CMD ["node", "dist/main.js"]