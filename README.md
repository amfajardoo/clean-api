## Getting Started
App made with Elysiajs, Prisma and Postresql

## Development
1. Define env variables in a .env
2. Initialize Docker run: 
```bash
docker-compose up -d
```
3. run bunx or npx prisma migrate dev
4. To start the development server run:
```bash
bun dev
```

> [!NOTE]
> run ```bash docker-compose down``` after development done

# PGAdmin
> [!TIP]
> If you want to check db connection in pgadmin follow the next steps:

1. Register new Server
2. server name for localhost: **host.docker.internal**

# Prisma visualizer
1. run bunx or npx prisma studio

Open http://localhost:3000/ with your browser to see the result.