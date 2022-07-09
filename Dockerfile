FROM node :16.14.2-buster as build

WORKDIR /MEDIKOVE

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production


COPY . .

RUN npm run build

FROM nginx:1.20-alpine as prod

COPY --from=build /MEDIKOVE/build /usr/share/nginx/html

EXPOSE 80


CMD ["nginx","-g", "daemon off;"]