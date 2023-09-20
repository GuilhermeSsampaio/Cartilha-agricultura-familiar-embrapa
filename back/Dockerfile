FROM node:16
# Installing libvips-dev for sharp Compatibility
# RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json yarn.lock ./
# RUN yarn config set network-timeout 600000 -g && yarn install
# ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
# Copie o código-fonte do aplicativo para o diretório de trabalho
COPY . .

# Expõe a porta em que o Strapi estará em execução (por padrão, o Strapi usa a porta 1337)
EXPOSE 1337

# Comando para iniciar o Strapi quando o contêiner for iniciado
CMD ["yarn", "develop"]
