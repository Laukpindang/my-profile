FROM node:16-alpine

# create destination directory
WORKDIR /usr/src/app

# copy "package.json" and "package-lock.json" before other files
# utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# install dependencies
RUN yarn install

# copy the rest of the files
COPY ./ ./
# COPY ./env-production ./.env


# build is necessary, even if no static files are needed,
# since it builds the server as well
# RUN yarn build --max-old-space-size=1024
RUN yarn build
# expose 80 on container
EXPOSE 80

# set app port
ENV PORT=80

# start the app
CMD [ "serve", "-s", "build" ]
