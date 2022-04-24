# Stage 1 - Here we are going to build the whole app
FROM node:16-alpine as build-stage

WORKDIR /frontendcodebase
COPY package.json .
RUN npm install --force
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN npm run build

# Stage 2 - Here we are going to copy the build and run it using NGINX
FROM nginx:1.17.0-alpine

COPY --from=build-stage /frontendcodebase/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'
