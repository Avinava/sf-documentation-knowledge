---
title: "Debugging a Hybrid App On an Android Device"
domain: mobile-sdk
topic: debugging-a-hybrid-app-on-an-android-device
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.702Z
estimatedTokens: 269
keywords: [Debugging, Hybrid, App, Android, Device, debug, apps, devices, Google, Chrome]
---

# Debugging a Hybrid App On an Android Device

> To debug hybrid apps on Android devices, use Google
            Chrome.

# Debugging a Hybrid App On an Android Device

To debug hybrid apps on Android devices, use Google Chrome.

The following steps summarize the full instructions posted at [https://developer.chrome.com/devtools/docs/remote-debugging](https://developer.chrome.com/devtools/docs/remote-debugging "HTML (New Window)")

1.  Enable USB debugging on your device: [https://developer.chrome.com/devtools/docs/remote-debugging](https://developer.chrome.com/devtools/docs/remote-debugging "HTML (New Window)")
2.  Open Chrome on your desktop (development) machine and navigate to: chrome://inspect
3.  Select **Discover USB Devices**.
4.  Select your device.
5.  To use your device to debug a web application that’s running on your development machine:
    1.  Click **Port forwarding…**.
    2.  Set the device port and the localhost port.
    3.  Select **Enable port forwarding**. See [https://developer.chrome.com/devtools/docs/remote-debugging#port-forwarding](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/local-server "HTML (New Window)") for details.
