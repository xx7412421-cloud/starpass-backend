# Contributing to StarPass Backend

This project participates in the [Stellar Wave Program](https://drips.network/wave/stellar) on Drips. Contributors earn USDC rewards for resolving issues.

## Prerequisites

- Node.js 20+
- PostgreSQL (or Docker)
- npm

## Setup

```bash
git clone https://github.com/YOUR_USERNAME/starpass-backend
cd starpass-backend
npm install
cp .env.example .env
# Fill in DATABASE_URL and JWT_SECRET in .env
npx prisma generate
npx prisma migrate dev
npm run start:dev
```

## Workflow

1. Browse open issues and comment to express interest
2. Wait to be assigned before starting work
3. Fork and create a branch: `git checkout -b feat/your-feature`
4. Make your changes
5. Run checks:

```bash
npm run lint    # ESLint
npm test        # Jest tests
npm run build   # TypeScript build
```

6. Open a Pull Request against `main`

## Commit Format

Use conventional commits:
- `feat: add pass expiry notification endpoint`
- `fix: correct fan address lookup in passes service`
- `test: add unit tests for indexer service`
- `docs: update API endpoint documentation`

## PR Requirements

- [ ] `npm run lint` passes
- [ ] `npm test` passes
- [ ] `npm run build` passes
- [ ] New features have tests
- [ ] PR references the issue it closes (`Closes #123`)
