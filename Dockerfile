FROM node:alpine3.15 AS builder
WORKDIR /app

COPY ./package.json ./package.json

RUN npm i -g vite && npm i --legacy-peer-deps

COPY ./ ./

RUN vite build

FROM nginx:1.21.0-alpine as production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]