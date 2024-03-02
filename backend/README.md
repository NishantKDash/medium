```
use db url DATABASE_UR in .env
use connection pool url DATABASE_URL in wrangler.toml // wrangler is a cli for cloudflare workers
use a jwt secret in wrangler.toml
npm install
migrate db -
npx prisma migrate dev --name init_schema
generate client - npx prisma generate --no-engine

npm run dev
```

```
npm run deploy
```
