# SARA AI — Talking Female Avatar Agent

This repository is the new working home for the SARA AI agent.

## What is included

- Female avatar interface.
- Microphone conversation.
- OpenAI-powered Urdu/Roman-Urdu replies.
- Browser voice fallback so SARA can speak even without LiveAvatar.
- LiveAvatar session-token endpoint for a real talking avatar when LiveAvatar credentials are configured.
- ElevenLabs Urdu voice support.
- TikTok OAuth scaffold using official TikTok endpoints.
- Android/Capacitor project configuration and a GitHub Actions workflow that builds a debug APK.

## Required server secrets

Copy .env.example and configure the server environment. Never put API keys in public JavaScript.

At minimum:
- OPENAI_API_KEY
- For premium voice: ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID
- For the real talking avatar: LIVEAVATAR_API_KEY and LIVEAVATAR_AVATAR_ID
- For TikTok: TIKTOK_CLIENT_KEY, TIKTOK_CLIENT_SECRET and the exact HTTPS TIKTOK_REDIRECT_URI

## Test

`npm install`
`npm start`

Open the server URL. If no backend URL is configured in the UI, the fallback avatar is shown. In the APK, open Settings and enter the deployed Node backend URL.

## APK

Every push to main also triggers .github/workflows/android.yml. In GitHub Actions, open the successful workflow run and download the `sara-ai-debug-apk` artifact.

The APK is a mobile shell around the same SARA UI. The backend still needs to be online for OpenAI, ElevenLabs, LiveAvatar and TikTok features.

## Important TikTok limitation

The app uses official TikTok OAuth/API endpoints. Starting or controlling arbitrary TikTok LIVE sessions and receiving every LIVE event is subject to the TikTok products, scopes and approvals actually available to the developer account. The app does not pretend private or undocumented LIVE APIs are available.
