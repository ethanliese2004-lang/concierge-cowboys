# Concierge Cowboys — Claude Code Guide

This file tells Claude Code everything it needs to know about this project.
It also serves as a step-by-step guide for anyone setting this up for the first time.

---

## What Is This Project?

This is the website for **Concierge Cowboys**, a firearm training business.
The website is built with **React** (a JavaScript framework). All the visible sections
of the site are individual files called "components" located in the `src/components/` folder.

**GitHub repo:** `https://github.com/ethanliese2004-lang/concierge-cowboys`
**GitHub account:** `ethanliese2004-lang`

---

## What Is Claude Code?

Claude Code is an AI coding assistant that runs in your terminal. You talk to it in plain
English and it makes changes to your code, then you can push those changes to GitHub so
the live website updates.

Think of it like texting instructions to a developer — but the developer is AI and works instantly.

---

## PART 1 — First-Time Setup (Do This Once Per Computer)

### Step 1: Install Claude Code

1. Go to **https://claude.ai/code** in your browser
2. Download and install the Claude Code desktop app for Mac
3. Open the app — it will ask you to log in with your Anthropic/Claude account
4. Once logged in, you'll see a terminal-style chat window

### Step 2: Open the Project Folder

Claude Code needs to be pointed at the right folder on your computer.

The project lives at:
```
/Users/ethanliese/Downloads/cc/concierge-cowboys
```

To open it:
- In the Claude Code app, click **"Open Folder"** or **"Open Project"**
- Navigate to: `Downloads` → `cc` → `concierge-cowboys`
- Select that folder

> **Important:** Always open the `concierge-cowboys` folder specifically — NOT the outer `cc` folder.
> The `concierge-cowboys` folder is the actual project connected to GitHub.

### Step 3: Set Up GitHub Authentication (So You Can Push Changes)

GitHub requires a special password called a **Personal Access Token (PAT)** to push code.
This is different from your regular GitHub password. Here's how to get one:

#### Getting a Personal Access Token:

1. Go to **https://github.com** and log in to the `ethanliese2004-lang` account
2. Click your **profile picture** in the top-right corner
3. Click **"Settings"**
4. Scroll all the way down the left sidebar and click **"Developer settings"**
5. Click **"Personal access tokens"** → **"Tokens (classic)"**
6. Click the green **"Generate new token"** button → **"Generate new token (classic)"**
7. Fill in:
   - **Note:** Type anything, like `Claude Code`
   - **Expiration:** Choose `No expiration` (or a date far in the future)
   - **Scopes:** Check the box next to **`repo`** (this gives full access to your repos)
8. Scroll down and click the green **"Generate token"** button
9. **COPY THE TOKEN IMMEDIATELY** — it starts with `ghp_...` — you will never see it again after leaving this page
10. Paste it somewhere safe (like Notes) for now

#### Telling Git Who You Are:

In the Claude Code chat window, type each of these one at a time (hit Enter after each):

```
! git config --global user.name "Your Name"
```
```
! git config --global user.email "youremail@example.com"
```
```
! git config --global credential.helper store
```

> The `!` at the start tells Claude Code to run it as a terminal command.
> Replace "Your Name" and "youremail@example.com" with real values.

#### Authenticating the First Push:

The first time you push to GitHub, your terminal will ask for:
- **Username:** your GitHub username (e.g. `ethanliese2004-lang`)
- **Password:** paste your **Personal Access Token** here (NOT your GitHub password)

After that, your credentials are saved and you won't be asked again on this computer.

---

## PART 2 — How to Make Changes to the Website

### How to Tell Claude What to Change

Just describe what you want in plain English. Examples:

> "Remove the testimonials section"

> "Change the heading in the hero to say 'Train With Confidence'"

> "Delete the pricing cards section"

> "Add a new section after the hero that says 'Now accepting new students'"

You can also **take a screenshot** of the section you want changed and paste it into the chat,
then say what you want done to it.

### What Files Do What

All website sections are in `src/components/`. Here's what each file controls:

| File | What It Shows on the Site |
|------|--------------------------|
| `Nav.jsx` | The navigation bar at the top |
| `Hero.jsx` | The big banner/intro at the top of the page |
| `Classes.jsx` | The classes and pricing section |
| `FirstClass.jsx` | The "What to expect in your first class" section |
| `BringSection.jsx` | The "What to bring" section |
| `Testimonials.jsx` | Customer reviews/testimonials |
| `QuoteForm.jsx` | The contact / quote request form |
| `FinalCTA.jsx` | The final call-to-action at the bottom |
| `Footer.jsx` | The footer at the very bottom |

The file `src/App.jsx` controls **which sections appear and in what order**.
When Claude removes a section, it edits both the component file and `App.jsx`.

---

## PART 3 — How to Push Changes to GitHub

After Claude makes changes to the site, you need to **push** them to GitHub so the
live website updates. Pushing = uploading your changes.

### The Easy Way (Just Ask Claude)

After any changes are made, type in the chat:

> "push to git"

Claude will handle everything — staging the files, writing a commit message, and pushing to GitHub.

### What "Pushing" Actually Does

1. **Commit** — Saves a snapshot of your changes with a message describing what changed
2. **Push** — Uploads that snapshot to GitHub
3. If your site is connected to **Netlify**, it will automatically rebuild and deploy the live site within a minute or two after the push

### If GitHub Asks for a Password

If you see a prompt asking for a username/password while pushing:
- **Username:** `ethanliese2004-lang`
- **Password:** your Personal Access Token (`ghp_...`) — NOT your GitHub password

---

## PART 4 — Checking the Live Site

If your site is deployed on Netlify:
1. Go to **https://app.netlify.com** and log in
2. Find the `concierge-cowboys` site
3. After a push, it usually takes 1–2 minutes to rebuild
4. Click "Open production deploy" to see the live site

---

## PART 5 — Common Tasks (Quick Reference)

| What you want to do | What to type in Claude Code |
|--------------------|-----------------------------|
| Remove a section | "Remove the [section name] section" or paste a screenshot |
| Change text | "Change the text that says X to say Y" |
| Save and publish changes | "push to git" |
| See what files were changed | `! git status` |
| Undo the last change (before pushing) | Ask Claude: "undo that last change" |

---

## PART 6 — Troubleshooting

**"Not a git repository" error**
- Make sure you opened the `concierge-cowboys` folder, not the outer `cc` folder

**"Authentication failed" when pushing**
- Your Personal Access Token may have expired — go to GitHub and generate a new one (see Step 3)
- Make sure you're pasting the token as the password, not your GitHub account password

**Changes aren't showing on the live site**
- Check Netlify — it may still be building (wait 1–2 minutes)
- Make sure the push actually succeeded (Claude will confirm in the chat)

**"rejected / non-fast-forward" error when pushing**
- Tell Claude: "there's a push conflict, help me fix it"
- Claude will pull the latest changes from GitHub and merge them before pushing

---

## Project Structure (For Reference)

```
concierge-cowboys/
├── src/
│   ├── App.jsx          ← Controls which sections appear
│   ├── main.jsx         ← App entry point (don't touch)
│   ├── components/      ← All website sections live here
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── Classes.jsx
│   │   ├── FirstClass.jsx
│   │   ├── BringSection.jsx
│   │   ├── Testimonials.jsx
│   │   ├── QuoteForm.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   └── index.css        ← Global styles
├── public/              ← Static assets (images, favicon)
├── index.html           ← App shell (don't touch)
└── CLAUDE.md            ← This file
```
