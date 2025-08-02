FROM node:20

WORKDIR /opt/build
COPY . .
RUN npm install
RUN npm run build

CMD ["npm", "run", "preview"]