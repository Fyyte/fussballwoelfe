FROM node:alpine
ARG POCKETBASE_URL=""
ARG POCKETBASE_ADMIN_USERNAME=""
ARG POCKETBASE_ADMIN_PASSWORD=""

COPY . ./
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD ["node", "./build/index.js"]





