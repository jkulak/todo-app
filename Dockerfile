FROM mhart/alpine-node:7.6

RUN mkdir /app
WORKDIR /app
ENV NODE_ENV development

RUN echo -e 'http://dl-cdn.alpinelinux.org/alpine/edge/main\nhttp://dl-cdn.alpinelinux.org/alpine/edge/community\nhttp://dl-cdn.alpinelinux.org/alpine/edge/testing' > /etc/apk/repositories && \
    apk add --no-cache yarn

COPY package.json /app
RUN yarn install --production

COPY . /app

# Add shell aliases
RUN echo 'alias l="ls -la"' >> /etc/profile

# All npm packages are installed locally in /app/node_modules
# to make them available from the command line, we add the local
# /app/node_modules/.bin to the global PATH variable
RUN echo 'export PATH="/app/node_modules/.bin:${PATH}"' >> /etc/profile

CMD ["npm", "start"]
