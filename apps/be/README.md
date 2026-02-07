# crush-tip-be

A NestJS application

## Installation

```bash
pnpm install
```

## Running the app

### With Docker

```bash
# Start with docker-compose
docker-compose up

# Start in detached mode
docker-compose up -d

```

### Without Docker

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Test

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

## CI/CD

This project includes GitHub Actions workflows for:
- Automated testing on push and pull requests
- Code quality checks (linting, formatting)
- Test coverage reporting

---
Generated with nestify 
