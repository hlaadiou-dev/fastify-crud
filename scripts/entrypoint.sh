#!/bin/sh
set -e

echo "Waiting for database..."
npx wait-port "${DB_HOST}:${DB_PORT}" --timeout 30000

echo "Running migrations..."
npx sequelize-cli db:migrate

echo "Running seeds..."
npx sequelize-cli db:seed:all || true

echo "Starting Fastify..."
npm run dev
