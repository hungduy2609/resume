# How to Run the CV Landing Page

## Quick Start

### Option 1: Using Python (Recommended - Built-in)

**Python 3:**

```bash
python -m http.server 8000
```

**Python 2:**

```bash
python -m SimpleHTTPServer 8000
```

Then open your browser and go to:

```
http://localhost:8000
```

### Option 2: Using Node.js (http-server)

**Install http-server globally:**

```bash
npm install -g http-server
```

**Run the server:**

```bash
http-server -p 8000
```

Then open:

```
http://localhost:8000
```

### Option 3: Using Node.js (npx - No Installation)

**Run without installing:**

```bash
npx http-server -p 8000
```

### Option 4: Using VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 5: Using PHP (if installed)

```bash
php -S localhost:8000
```

## Why Do I Need a Local Server?

Due to browser security restrictions (CORS policy), you cannot open `index.html` directly in the browser when using:

-   Fetch API to load external files
-   ES6 modules
-   MVC architecture with separate JS files

A local server is required to serve the files properly.

## Step-by-Step Instructions

### Windows:

1. **Open Command Prompt or PowerShell**

    - Press `Win + R`
    - Type `cmd` or `powershell`
    - Press Enter

2. **Navigate to project directory**

    ```bash
    cd D:\Automation\CV
    ```

3. **Start Python server**

    ```bash
    python -m http.server 8000
    ```

4. **Open browser**
    - Go to: `http://localhost:8000`
    - Or: `http://127.0.0.1:8000`

### Mac/Linux:

1. **Open Terminal**

2. **Navigate to project directory**

    ```bash
    cd /path/to/CV
    ```

3. **Start Python server**

    ```bash
    python3 -m http.server 8000
    ```

4. **Open browser**
    - Go to: `http://localhost:8000`

## Troubleshooting

### Port Already in Use

If port 8000 is already in use, try a different port:

```bash
python -m http.server 8080
```

Then access: `http://localhost:8080`

### Python Not Found

**Windows:**

-   Download Python from [python.org](https://www.python.org/downloads/)
-   Make sure to check "Add Python to PATH" during installation

**Mac:**

-   Python 3 is usually pre-installed
-   If not: `brew install python3`

**Linux:**

```bash
sudo apt-get install python3
```

### Check if Server is Running

You should see output like:

```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

### Stop the Server

Press `Ctrl + C` in the terminal to stop the server.

## File Structure Check

Make sure you have these files:

```
CV/
├── index.html
├── styles.css
├── js/
│   ├── model.js
│   ├── view.js
│   ├── controller.js
│   └── app.js
└── sections/ (optional - legacy files)
```

## Browser Compatibility

-   ✅ Chrome (latest)
-   ✅ Firefox (latest)
-   ✅ Safari (latest)
-   ✅ Edge (latest)

## Development Tips

1. **Auto-reload**: Use VS Code Live Server for automatic page refresh
2. **Debug**: Open Developer Tools (F12) to see console logs
3. **Hot Reload**: Some servers support hot reload - check server documentation

## Quick Commands Reference

```bash
# Start server (Python 3)
python -m http.server 8000

# Start server (Python 2)
python -m SimpleHTTPServer 8000

# Start server (Node.js - npx)
npx http-server -p 8000

# Start server (Node.js - installed)
http-server -p 8000

# Start server (PHP)
php -S localhost:8000
```

## Next Steps

Once the server is running:

1. Open `http://localhost:8000` in your browser
2. The CV landing page should load automatically
3. All sections will be rendered using MVC architecture
4. Navigate using the menu or scroll through sections

Enjoy! 🚀
