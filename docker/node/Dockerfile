FROM node:22.14.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.example .env

EXPOSE 3000

CMD ["node", "--run", "dev"]
