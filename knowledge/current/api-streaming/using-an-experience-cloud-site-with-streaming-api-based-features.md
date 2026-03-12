---
title: "Using an Experience Cloud Site with Streaming API-Based Features"
domain: api-streaming
topic: using-an-experience-cloud-site-with-streaming-api-based-features
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.467Z
estimatedTokens: 183
keywords: [Experience, Cloud, Site, Streaming, API-Based, Features, enable, API, background, in-app, push, notifications, HTTP, POST, requests]
---

# Using an Experience Cloud Site with Streaming API-Based Features

> If you use an Experience Cloud site and enable features that use Streaming API in the
        background, such as in-app or push notifications, HTTP POST requests are sent to the /cometd/ endpoint. Sending many CometD requests can be
        problematic sometimes and can cause hitting HTTP request rate limits. If your Experience
        Cloud site is hosted on a third-party Content Delivery Network (CDN), the HTTP POST requests
        will be sent to the CDN. The volume of requests depends on the number of users that are
        simultaneously logged in to the site. Each logged-in user gets their own Streaming API
        session so the more users are logged in, the more POST requests are generated.

# Using an Experience Cloud Site with Streaming API-Based Features

If you use an Experience Cloud site and enable features that use Streaming API in the background, such as in-app or push notifications, HTTP POST requests are sent to the /cometd/ endpoint. Sending many CometD requests can be problematic sometimes and can cause hitting HTTP request rate limits. If your Experience Cloud site is hosted on a third-party Content Delivery Network (CDN), the HTTP POST requests will be sent to the CDN. The volume of requests depends on the number of users that are simultaneously logged in to the site. Each logged-in user gets their own Streaming API session so the more users are logged in, the more POST requests are generated.
