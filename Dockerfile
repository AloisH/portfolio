FROM node:19-bullseye-slim as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.23.2-alpine
WORKDIR /app
COPY --from=build-stage /app/dist/portfolio /app
