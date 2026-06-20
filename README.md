# TextTranslateApp

Desktop translation app wrapping 有道翻译 and 腾讯翻译 in a native window.

## Features
- Tab switching between 有道翻译 and 腾讯翻译
- Persistent tab memory (last selected tab saved)
- System tray with show/hide toggle
- F9 global shortcut to toggle window
- ESC to hide window
- X button hides instead of closing
- Single instance lock

## Development
```bash
npm install
npm start
```

## Build
```bash
npm run build
```

## Release
Push a tag to trigger GitHub Actions build:
```bash
npm version patch  # or minor / major
git push --follow-tags
```
