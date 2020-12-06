FROM node:10.23.0-alpine as build

ENV BUILD_PATH /build
WORKDIR $BUILD_PATH
COPY package.json $BUILD_PATH
RUN yarn install
COPY . $BUILD_PATH
RUN yarn run build --prod
RUN ls $BUILD_PATH/dist/bookLibrary

FROM nginx:alpine
COPY --from=build /build/dist/bookLibrary/* /usr/share/nginx/html/
COPY deploy/default.conf.template /etc/nginx/templates/default.conf.template