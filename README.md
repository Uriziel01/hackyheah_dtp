# hackyheah_dtp

HACKYEAH 2023
30 wrz - 1 paź 2023, TAURON Arena Kraków

# TEAM

1. Paweł Borecki
2. Izabela Luka
3. Katarzyna Lazar
4. Kamil Wojtasiński
5. Karol Rydwelski

# Installation guide

1. Install **WSL 2** - **(Ubuntu 22LTS)**
2. Install **bun**, command `curl -fsSL https://bun.sh/install | bash`
3. Install **node** version greater than 16, prefer 18 on WSL

# Running the app (FROM INSIDE OF UBUNTU IN WSL2)

1. cd hackyeah_dtp
2. npm install (or pnpm install, etc)
3. node ./src/runMigrations.cjs
4. npm run dev -- --open
