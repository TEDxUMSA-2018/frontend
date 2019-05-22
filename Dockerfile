FROM node:8.11.1 as builder

LABEL bo.umsa.promes.version="0.0.1-beta"
LABEL vendor="TEDxUMSA"
LABEL org.tedxumsa.release-date="2018-12-05"

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install --silent
RUN npm install yarn serve -g
RUN yarn build
RUN yarn global add serve

EXPOSE 5000
CMD ["serve","-s","build"]