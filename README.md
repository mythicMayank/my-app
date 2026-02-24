# My App

This is a minimal TypeScript Express app scaffolded with tests and CI.

Quick start

```bash
cd project
npm install
npm run dev    # start in dev mode
npm test       # run tests
npm run build  # build to dist
npm start      # start built app
```

Endpoints

- `GET /health` — returns { status: "ok" }
- `GET /hello?name=Alice` — returns greeting
