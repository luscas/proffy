FROM node:16.20.0-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16.20.0-alpine

WORKDIR /app

COPY --from=builder /app/.next .

COPY package.json ./

RUN npm install --production
EXPOSE 3000

CMD ["node", ".next/start"]