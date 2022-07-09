FROM node :16.14.2-buster as build

WORKDIR /MEDIKOVE

ENV PATH = "./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]https://github.com/sshashidhar15/Medikove.git