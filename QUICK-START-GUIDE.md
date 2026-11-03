# 🚀 Quick Start Guide - telespace.io

## Problem: Server Not Starting from Kiro

The development server needs to run in a **persistent terminal window**. 

---

## ✅ SOLUTION: Use One of These Methods

### **Method 1: Double-Click Batch File (EASIEST)** ⭐

1. **Find this file in your project folder:**
   ```
   START-SERVER.bat
   ```

2. **Double-click it**
   - A black command window will open
   - Wait 5-10 seconds
   - You'll see: `➜  Local:   http://localhost:5173/`

3. **Open browser:**
   ```
   http://localhost:5173
   ```

4. **To stop server:**
   - Press `Ctrl + C` in the black window
   - Or just close the window

---

### **Method 2: VS Code Integrated Terminal**

1. **Open VS Code Terminal:**
   - Press `` Ctrl + ` `` (backtick key)
   - Or: Menu → View → Terminal

2. **Make sure you're in project folder:**
   ```powershell
   cd c:\Users\infrasys1\Downloads\telespace-io-fixed\telespace-io-fixed
   ```

3. **Run server:**
   ```powershell
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:5173
   ```

5. **To stop:**
   - Press `Ctrl + C` in terminal

---

### **Method 3: Windows PowerShell**

1. **Right-click in project folder**
   - Hold `Shift` + Right-click
   - Click "Open PowerShell window here"

2. **Run:**
   ```powershell
   npm run dev
   ```

3. **Open browser:**
   ```
   http://localhost:5173
   ```

---

## 🔍 Troubleshooting

### Issue: Port 5173 already in use

**Solution:**
```powershell
# Kill any process using port 5173
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F

# Then restart server
npm run dev
```

### Issue: "npm: command not found"

**Solution:**
1. Install Node.js from: https://nodejs.org
2. Restart computer
3. Try again

### Issue: Browser shows "Connection Refused"

**Solutions:**
1. Wait 10 seconds after starting server
2. Refresh browser (Ctrl + F5)
3. Try different browser
4. Check if server is actually running (terminal should show "ready in X ms")

### Issue: Firewall Blocking

**Solution:**
1. Windows Security notification will appear
2. Click "Allow access"
3. Restart server

---

## ✅ Success Indicators

When server starts correctly, you'll see:

```
VITE v5.4.21  ready in 1556 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.96:5173/
➜  press h + enter to show help
```

**This means server is running! ✅**

---

## 📝 What You Should See in Browser

1. **Homepage:**
   - Black background with stars animation
   - "telespace.io" logo
   - "YOUR ICT PARTNER" tagline

2. **Sections:**
   - Mission Statement
   - Why Telespace
   - 5 Domains (Infrastructure, Hardware, etc.)
   - Approach
   - Contact Form
   - **NEW: Public Comments Section**

3. **Features to Test:**
   - Click domain cards → Opens detailed view
   - Scroll to Comments → Post a comment
   - Click "TEC IN TELECOM" → Opens government site
   - Fill contact form → See success message

---

## 🎯 For Client Meeting

**Share this URL with client (when server is running):**

**Local (your computer only):**
```
http://localhost:5173
```

**Network (same WiFi):**
```
http://192.168.1.96:5173
```

**For remote clients:**
- Use ngrok: https://ngrok.com
- Or deploy to Vercel/Netlify (5 minutes setup)

---

## 📦 Production Deployment

**When ready to go live:**

```powershell
# Build for production
npm run build

# Test production build
npm run preview
```

**Deploy to:**
- Vercel (easiest)
- Netlify
- Any web hosting (upload `dist` folder)

---

## 🆘 Still Not Working?

**Try this complete reset:**

```powershell
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install

# Start server
npm run dev
```

**Or contact me with:**
1. Screenshot of terminal
2. Screenshot of browser error
3. What step you're stuck on
