# Nestegg — setup guide

Nestegg is your household budgeting app. It runs on both PCs, your Redmi and her iPhone from **one web address**, works offline, and costs **R0** — no hosting fees, no subscriptions.

- **The app** lives free on GitHub Pages.
- **Your data** lives on each device and syncs through a private file in **your own Google Drive** (free 15 GB), passed between devices by a small script in your own Google account. Nobody else sees it, and it survives losing a PC or phone.

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

## Step 3 — Automatic sync between your devices (free, ~10 min, once)

A small script in **your own Google account** keeps the data file in your Drive and passes it between your devices. No device ever has to sign in to Google, so it keeps syncing by itself — on the iPhone too.

1. **On a computer**, sign in to the Google account you want your budget kept in (one shared household Gmail is simplest).
2. In Nestegg on that computer: ⚙️ **Settings → Sync → Set up automatic sync**, and follow the five steps on screen:
   open **script.new** → paste the code (📋 *Copy the code*) → **Deploy → New deployment → Web app**, *Execute as: Me*, *Who has access: Anyone* → authorise it (**Advanced → Go to … (unsafe) → Allow** — it's your own script) → paste the **Web app URL** (ends in `/exec`) back into Nestegg → **Connect this device**.
3. Nestegg shows a **join code**. Send it to your own phone and your partner (WhatsApp is fine — only to each other: anyone with it can see your budget).
4. **Every other device:** open Nestegg → **Join my partner's household** (or ⚙️ Settings → Sync → **I have a join code**) → paste the code → choose who's using it.

**Receipt reading** uses the same script. If you set it up before 26 Oct 2026, it needs a 3-minute update first: ⚙️ Settings → Sync → **Turn on receipt reading**, and follow the steps (paste the new code, run *authorize* once, then *Manage deployments → New version*). Then tap **+ → 📷 Scan receipt**.

From then on Nestegg syncs when it opens, a few seconds after every entry, when you switch back to it, and every minute and a half while it's open. If you'd already been syncing with Google Drive, the script picks up that same file, so nothing is lost.

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
Open your address → install → **Join my partner's household** → paste the join code (⚙️ Settings → Sync → Share join code on any connected device). Everything comes back.
No sync set up? ⚙️ Settings → **Export a backup** on the old device, then **Restore from a backup file** on the new one.

## Good to know
- **Cost:** R0. GitHub Pages, Google Drive and Apps Script are free at this size.
- **Older iPhone SE (2016 model, iOS 15):** everything works. Use the calendar reminders, because web apps can't send notifications on iOS 15.
- **Old Google Drive sign-in:** still available under ⚙️ Settings → Sync → *Old way*, but Google ends those sign-ins after an hour, so automatic sync is the one to use.
- **Updating the app later:** replace the files in your GitHub repository. Your data isn't touched.
- **Backups:** export one now and then (⚙️ Settings → Export a backup) and keep it somewhere safe.
