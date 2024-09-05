# use build image to optimize storage
FROM node:20 as BUILD_IMAGE
WORKDIR /app

# restore pagackage first for better caching
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

# build app
RUN yarn build

# copy to production image
FROM node:20
WORKDIR /app

# make a dedicated node user for security
RUN chown -R node:node /app
USER node

# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/dist ./dist

# run app
EXPOSE 3000
CMD npm start