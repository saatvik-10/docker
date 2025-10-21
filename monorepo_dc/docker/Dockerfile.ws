FROM oven/bun:latest

WORKDIR /usr/src/mono

COPY ./packages ./packages
COPY ./bun.lockb ./bun.lockb

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws ./apps/ws

RUN bun install

RUN bun run db:generate

EXPOSE 8081

CMD [ "bun", "run", "start:ws" ]