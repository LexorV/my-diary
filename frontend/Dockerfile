FROM node:16-alpine AS builder
RUN apk add g++ make py3-pip
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
FROM nginx:1.23.1-alpine as production
WORKDIR /app
COPY --from=builder /app/package*.json ./
#RUN  npm i ---omit=dev
RUN rm -rf /usr/share/nginx/html/* \
&& rm -rf /etc/nginx/conf.d/*
COPY --from=builder /app/dist /usr/share/nginx/html/
COPY --from=builder /app/nginx/conf.d/* /etc/nginx/conf.d/


EXPOSE 8081
CMD [ "nginx", "-g", "daemon off;" ]
