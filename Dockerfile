# Використовуємо офіційний образ Cypress як базовий
FROM cypress/included:12.0.0

# Встановлюємо залежності
WORKDIR /app

# Копіюємо всі файли проекту у контейнер
COPY . .

# Встановлюємо залежності проекту
RUN npm install

# Запуск тестів Cypress
CMD ["npx", "cypress", "run"]
