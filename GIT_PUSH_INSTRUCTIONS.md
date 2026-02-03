# Git Push Instructions

## ✅ What's Already Done

- ✅ Git repository initialized
- ✅ All files staged and committed
- ✅ Branch renamed to `main`
- ✅ Remote origin added: `https://github.com/AljazKralj/BledBike.com.git`
- ✅ Git user configured (aljaz@bledbike.com)

## 🔐 Complete the Push (Requires Authentication)

### Option 1: GitHub Desktop (Easiest)

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Add existing repository: `C:\Users\kralj\clawd\bledbike`
4. Click "Publish branch" → Done!

### Option 2: GitHub CLI (Recommended)

```powershell
# Install GitHub CLI
winget install --id GitHub.cli

# Login
gh auth login

# Push
cd bledbike
git push -u origin main
```

### Option 3: Personal Access Token

1. Go to GitHub: Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Copy the token

Then push:
```powershell
cd bledbike
git push -u origin main
# Enter username: AljazKralj
# Enter password: [paste your token]
```

### Option 4: SSH Key (Most Secure)

```powershell
# Generate SSH key
ssh-keygen -t ed25519 -C "aljaz@bledbike.com"

# Add to ssh-agent
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
```

Then:
1. Go to GitHub: Settings → SSH and GPG keys → New SSH key
2. Paste your public key
3. Update remote to use SSH:
   ```powershell
   cd bledbike
   git remote set-url origin git@github.com:AljazKralj/BledBike.com.git
   git push -u origin main
   ```

## ✅ Verify Success

After pushing, check:
- https://github.com/AljazKralj/BledBike.com
- You should see all 22 files

## 🚀 Next: Deploy to Vercel

Once pushed to GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Import Git Repository
3. Select `AljazKralj/BledBike.com`
4. Click Deploy
5. Done! Live in 2 minutes.

Custom domain setup:
- Vercel Dashboard → Domains → Add `bledbike.com`
- Update DNS records as Vercel instructs
