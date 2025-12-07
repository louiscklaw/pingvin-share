# <div align="center"><img  src="https://user-images.githubusercontent.com/58886915/166198400-c2134044-1198-4647-a8b6-da9c4a204c68.svg" width="40"/> </br>Pingvin Share</div>

<!-- [![](https://dcbadge.limes.pink/api/server/wHRQ9nFRcK)](https://discord.gg/wHRQ9nFRcK) [![](https://img.shields.io/badge/Crowdin-2E3340.svg?style=for-the-badge&logo=Crowdin&logoColor=white)](https://crowdin.com/project/pingvin-share) [![](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)](https://github.com/sponsors/stonith404) -->

---

Pingvin Share is a self-hosted file sharing platform and an alternative for WeTransfer.

## ✨ Features

- Share files using a link
- Unlimited file size (restricted only by disk space)
- Set an expiration date for shares
- Secure shares with visitor limits and passwords
- Email recipients
- Reverse shares
- OIDC and LDAP authentication
- Integration with ClamAV for security scans
- Different file providers: local storage and S3

## 🐧 Get to know Pingvin Share

- [Demo](https://pingvin-share.dev.eliasschneider.com)
- [Review by DB Tech](https://www.youtube.com/watch?v=rWwNeZCOPJA)

<img src="https://raw.githubusercontent.com/louiscklaw/pingvin-share/refs/heads/main/docs/static/img/image.png" width="700"/>

## ⌨️ Setup

### Installation with Docker (recommended)

1. Download the `docker-compose.yml` file
2. Run `docker compose up -d`

The website is now listening on `http://localhost:3000`, have fun with Pingvin Share 🐧!

> [!TIP]
> Checkout [Pocket ID](https://github.com/stonith404/pocket-id), a user-friendly OIDC provider that lets you easily log in to services like Pingvin Share using Passkeys.

### Development Setup

```bash
# Start development containers
docker compose -f docker-compose.dev.yml up -d

# Backend setup
cd backend
npm install -D
npm run dev

# Frontend setup
cd frontend
npm install -D
npm run dev
```

### Production Deployment

```bash
# Build and push Docker images
./build.sh
docker compose push

# On production server:
docker compose pull
docker compose up -d
docker compose logs -f
```

## 📚 Documentation

For more installation options and advanced configurations, please refer to the [documentation](https://stonith404.github.io/pingvin-share).

## 🖤 Contribute

We would love it if you want to help make Pingvin Share better! You can either [help to translate](https://stonith404.github.io/pingvin-share/help-out/translate) Pingvin Share or [contribute to the codebase](https://stonith404.github.io/pingvin-share/help-out/contribute).

## ❤️ Sponsors

Thank you for supporting Pingvin Share 🙏

- [@COMPLEXWASTAKEN](https://github.com/COMPLEXWASTAKEN)
