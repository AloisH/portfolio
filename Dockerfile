FROM node:19-bullseye-slim as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx
WORKDIR /app
COPY --from=build-stage /app/dist/portfolio /app
