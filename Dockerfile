FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./scripts/entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
COPY . .
EXPOSE 3000
ENTRYPOINT ["/app/entrypoint.sh"]