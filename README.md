# Fluent New Tab 

A clean (kinda) customizable New Tab page, inspired heavily by Microsoft Fluent Design System and macOS Sequoia (the one that came before Tahoe). 

## How does it look?
### Light Mode:
<img width="1920" height="1032" alt="LMScrnSht" src="https://github.com/user-attachments/assets/e3c21368-0f78-4eda-8a63-6473f2f8c5a9" />

### Dark Mode:
<img width="1920" height="1080" alt="DMScrnSht" src="https://github.com/user-attachments/assets/dc68ec45-37df-41ac-b2dc-4e53aee7fac4" />

[![Give it a Try](https://img.shields.io/badge/test-drive-brightgreen?style=for-the-badge)](https://tonystark965-404.github.io/Fluent-New-Tab/)

## How to install this as an extension?
- Download the latest Release and extract it to wherever you want
- Go to your browser's extension page and enable Developer Mode
- Click "Load Unpacked", head to where you extracted the .zip file and click Select folder

## What features does it have?
- A consistent design language, inspired by Windows 11 and MacOS Sequoia
- Widgets showcasing current date and time
- Dock style Recent and Pinned Sites
- Another widget that tells you about Today's Astronomy Picture of The Day (provided by NASA)
- Uses NASA APOD as wallpaper, so it's updated daily (unless the APOD is a video, then you only get to know about it)
- "Ctrl+K" to instantly activate the Search Bar, so you can start searching without even touching your mouse.
- No special browser permissions needed
- 
## How can I run it locally and modify it?
   Easy, just do this:
   ```bash
   git clone https://github.com/TonyStark965-404/Fluent-New-Tab.git
   cd fluent-new-tab
   npm install
   npm run dev
```
You'll find that the page will be running at a localhost:####, open it in your browser to see.
P.S.- This requires a NASA API Key, and a .env file, so you'll need to get one for yourself and put it in a .env file with the syntax from .env.example(already added here)

[![Get your own NASA API here](https://img.shields.io/badge/NASA-api-blue?style=for-the-badge)](https://api.nasa.gov/)

To create an unpacked extension:
   ```bash
   npm run build
```
   and follow the steps to install my extension normally but this time select the generated dist folder in your project directory.
   
## How does it work?
Fluent New Tab is built with Vite and JavaScript, where user preferences and pinned/recent sites are stored locally using localStorage. The daily wallpaper and APOD information are fetched using NASA's APOD API. The website logos for the pinned/recent sites are fetched from Google.
   
## Whom to Credit for the assets?
- [Mykyta Martynenko](https://unsplash.com/@prostotakphoto) on Unsplash for the Default leaves wallpaper
- [Icons8](https://icons8.com) for the "Settings" and "+" icons

## Are There some issues?
Yes
- Your previous query may show up for a moment if you do a search and go back
- There is no support for a Video wallpaper provided by NASA APOD, so it falls back to the default wallpaper
- The APOD server takes some time to connect, so you might see a blank background for a couple of seconds
- Search Engine is stuck to Google
- In order to pin a site, you need to put its full url. For example, if you want to pin Google, you write 
Site name: Google
Site URL: https://www.google.com
