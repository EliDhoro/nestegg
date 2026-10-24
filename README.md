# Nestegg — setup guide

Nestegg is your household budgeting app. It runs on both PCs, your Redmi and her iPhone from **one web address**, works offline, and costs **R0** — no hosting fees, no subscriptions.

- **The app** lives free on GitHub Pages.
- **Your data** lives on each device and syncs through a private file in **your own Google Drive** (free 15 GB). Nobody else sees it, and it survives losing a PC or phone.

Setup takes about 30 minutes once. You need a GitHub account (free) and a Google account.

> **Want to try it right now?** Double-click `index.html` on your PC — it opens in your browser and works fully on that one computer. Install and sync need the steps below.

---

## Step 1 — Put the app online (free, ~10 min)

1. Go to **github.com** and sign up (free), or sign in.
2. Click **+** (top right) → **New repository**.
   - Name: `nestegg`
   - Choose **Public** (free Pages needs public; only the app's code is public — **never your money data**).
   - Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Drag in **everything** from this folder: `index.html`, `sw.js`, `manifest.webmanifest`, `README.md` and the whole `icons` folder. Click **Commit changes**.
5. Go to **Settings** → **Pages** (left menu).
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → **Save**.
6. Wait 1–2 minutes and refresh. Your address appears at the top, e.g.
   **`https://EliDhoro.github.io/nestegg/`**
   Open it — you'll see the Nestegg welcome screen.

## Step 2 — Install it on each device

| Device | How |
|---|---|
| **PC (Chrome or Edge)** | Open your address → click the **install icon** at the right of the address bar (or menu ⋮ → *Install Nestegg*). |
| **Android (Redmi)** | Open the address in **Chrome** → menu ⋮ → **Add to Home screen / Install app**. |
| **iPhone (SE)** | Open the address in **Safari** → **Share** button → **Add to Home Screen**. |

It then opens full-screen from its own icon, like a normal app.

**Set up the household on ONE device first (yours).** Your wife joins in Step 3 — don't set up separately on her phone.

## Step 3 — Sync between your devices with Google Drive (free, ~15 min)

### 3a. Choose the Google account
The simplest is **one shared household Google account** that you both sign in with inside Nestegg — create a new free Gmail, for example `dhoro.household@gmail.com`. (You can use your own Gmail on both devices instead.) Both of you must use the **same** account in Nestegg.

### 3b. Create a free Google "Client ID"
This lets *your* copy of the app ask Google for permission to save its file in Drive. No billing or card is needed.

1. Go to **console.cloud.google.com** and sign in with the household account.
2. Top bar → project picker → **New project** → name it `Nestegg` → **Create**. Make sure it's selected.
3. Menu ☰ → **APIs & Services** → **Library** → search **Google Drive API** → **Enable**.
4. Menu ☰ → **Google Auth Platform** (older screens: *APIs & Services → OAuth consent screen*) → **Get started**:
   - App name: `Nestegg`; support email: the household account
   - Audience: **External**
   - Contact email: the household account → **Create**
5. Still in Google Auth Platform → **Audience** → under *Test users* click **Add users** and add the household Gmail (and any other Gmail you'll sign in with).
6. **Clients** (older screens: *Credentials → Create credentials → OAuth client ID*) → **Create client**:
   - Application type: **Web application**
   - Name: `Nestegg`
   - **Authorized JavaScript origins** → Add: `https://EliDhoro.github.io`
   - **Authorized redirect URIs** → Add: `https://EliDhoro.github.io/nestegg/` ← include the slash at the end
   - **Create**, then copy the **Client ID** (ends in `.apps.googleusercontent.com`).

> Nestegg only asks for the narrowest Drive permission (`drive.file`): it can see **only the one file it creates**, nothing else in your Drive.

### 3c. Put the Client ID into the app (once, for every device)
1. In your GitHub repository, click `index.html` → the **pencil ✏️ (Edit)** button.
2. Press Ctrl+F and find `GOOGLE_CLIENT_ID: ''`.
3. Paste your ID between the quotes: `GOOGLE_CLIENT_ID: '1234-abc.apps.googleusercontent.com'`
4. **Commit changes**. Wait a minute. Close and reopen Nestegg on your devices (sometimes twice — it updates in the background).

*(Alternative: paste it on each device under ⚙️ Settings → Sync → Google Client ID.)*

### 3d. Connect
- **Your device:** ⚙️ Settings → **Connect Google Drive** → sign in with the household account → allow. You'll see "☁️ Connected".
  If Google says *"Google hasn't verified this app"*, tap **Advanced → Go to Nestegg** — it's your own app.
- **Her iPhone:** open Nestegg → **Join my partner's household** → **Sign in with Google** (same household account) → choose her name. Your household downloads to her phone.

From then on, every entry syncs. Tap the ☁️ at the top to sync on demand.

---

## Daily use (the habit)

- **Every day:** log a spend (tap **+**, amount, category — about 10 seconds) or tap **No spend today**. That keeps your streak 🔥 alive.
- **Didn't buy something you wanted?** Tap **+ → Skipped 💪**. It earns points and adds to "money not spent".
- **Payday (26th):** log your income, then **move your savings first** — this earns bonus points.
- **Sunday:** 15-minute **money date** together (Rewards tab), worth +50 points.
- **Monthly:** update net worth (Wealth tab) and import statements if you like.
- **Reminders:** ⚙️ Settings → Reminders adds a daily 20:00 check-in, a Sunday money date and a payday reminder to your phone calendar, free.

### How rewards work
Points move you up the tiers: 🥉 Bronze → 🥈 Silver (400) → 🥇 Gold (900) → 💎 Diamond (1500). Tiers reset each budget month, so every month is a fresh start. When a month ends, your tier decides how much of your **surplus** (income minus spending) goes into the **Reward Pot**: Bronze 10%, Silver 20%, Gold 25%, Diamond 30%. You can change these in ⚙️ Settings → Household. Spend the pot guilt-free on something you both enjoy — the rest of the surplus is for savings.

## Importing bank statements
⚙️ Settings or Budget → **Import bank statements**.
- **FNB:** Online Banking → account → Transaction History → Download → **CSV**. PDF statements also work.
- **GoTyme:** download your **PDF statement**. If it's password-protected, you'll be asked for the password. The password and the file never leave your device.
- Re-importing is safe because duplicates are skipped.
- Rows highlighted in yellow need a look: usually transfers between your own accounts. Mark them as **Transfer** so they don't count. When you fix a shop's category, Nestegg remembers it for next time.

## New PC or new phone
Open your address → install → **Join my partner's household** → sign in. Everything comes back.
No sync set up? ⚙️ Settings → **Export a backup** on the old device, then **Restore from a backup file** on the new one.

## Good to know
- **Cost:** R0. GitHub Pages, Google Drive and Google Cloud's sign-in are free at this size.
- **Older iPhone SE (2016 model, iOS 15):** everything works. Use the calendar reminders, because web apps can't send notifications on iOS 15.
- **iPhone sign-in:** if Google sign-in opens but doesn't come back to the home-screen app, tell Claude. There's a fix that changes how sign-in opens. Meanwhile, Nestegg in Safari works the same.
- **Updating the app later:** replace the files in your GitHub repository. Your data isn't touched.
- **Backups:** export one now and then (⚙️ Settings → Export a backup) and keep it somewhere safe.
