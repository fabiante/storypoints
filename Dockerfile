FROM oven/bun:1 as build

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run build-only

FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html
