# <img src="logo.svg" width="32" align="left"> BAT翻译

桌面翻译工具，集成有道翻译和腾讯翻译，支持 Tab 一键切换。

## 功能特性

- 🔄 有道翻译 + 腾讯翻译双 Tab，一键切换
- 💾 Tab 选择持久化记忆（localStorage）
- ⌨️ F9 全局快捷键切换窗口显隐
- 🖱️ 系统托盘图标，左键点击切换
- 🚫 ESC 隐藏窗口，X 按钮隐藏不退出
- 🔒 单实例锁，防止重复启动

## 系统要求

| 项目 | 要求 |
|------|------|
| 操作系统 | Ubuntu 22.04 / 24.04 / 26.04 |
| 桌面环境 | GNOME（Wayland / X11） |
| 架构 | x86_64 (amd64) |

## 截图

### 有道翻译

![有道翻译](Snipaste_2026-06-20_19-25-18.png)

### 腾讯翻译

![腾讯翻译](Snipaste_2026-06-20_19-25-31.png)

## 下载

📦 [最新 Release](https://github.com/tutusiji/TextTranslateApp/releases)

或直接下载：
- 🟢 [BAT翻译.AppImage](https://github.com/tutusiji/TextTranslateApp/releases/latest/download/BAT%E7%BF%BB%E8%AF%91-1.0.0.AppImage)
- 📦 [bat-translate.deb](https://github.com/tutusiji/TextTranslateApp/releases/latest/download/bat-translate_1.0.0_amd64.deb)

## 快捷键配置

F9 全局快捷键需在 GNOME 设置中注册：

```bash
gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom2/ name "BAT翻译 (F9)"
gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom2/ command "curl -s http://127.0.0.1:19876/toggle"
gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom2/ binding "F9"
```

## 开发

```bash
npm install
npm start
npm run build
```

## 发布

```bash
npm version patch
git push --tags
```
