## Manual Installation

    -Instal node js locally ()
    -Clone the repo
    -Install dependencies (pnpm install)
    -Start the db locally
        -docker run -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432 postgres
        -Go to neon.tech and get a new DB connection
    -Update the .env credentials
    -pnpm prisma migrate dev
    -pnpm prisma generate
    -pnpm build
    -pnpm start

## Docker Installation

    -Install Docker
    -Create a network 'docker network create dc-network'
    -Start postgres
        -docker run --network dc-network --name postgres -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432 postgres
    -Build the image - 'docker build --network=host -t dc-project .'
    -Start the image - 'docker run -e DATABASE_URL=postgresql://postgres:mysecret@postgres:5432/postgres --network dc-network -p 3000:3000 user-project'

## Docker Compose Steps

    -Install docker, docker-compose
    -Run 'docker compose up'
