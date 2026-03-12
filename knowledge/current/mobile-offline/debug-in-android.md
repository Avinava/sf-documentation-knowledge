---
title: "Debug in Android"
domain: mobile-offline
topic: debug-in-android
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.481Z
estimatedTokens: 456
keywords: [Debug, Android, Follow, steps, attach, Chrome, DevTools, browser, webview, Test, Harness, app, Connect, desktop, WebView, Service, mobile, LWC, running]
---

# Debug in Android

> Connect Chrome DevTools on your desktop to the WebView in the Field Service mobile app
    where your LWC is running.

# Debug in Android

Connect Chrome DevTools on your desktop to the WebView in the Field Service mobile app where your LWC is running.

To run the Field Service mobile app in an Android emulator, download and install the [Salesforce Field Service mobile app APK file.](https://sfdc.co/fieldservice-mobile-app-android-simulator "HTML (New Window)")

1.  On your emulated Android device, open the Settings app.
2.  Enter About emulated device into the search bar and click it.
3.  Scroll to the bottom of the page and click **Build number** seven times.

    The message “You are now a developer!” appears when you click it enough, indicating that developer mode is enabled for the emulator.

4.  Launch Chrome on your desktop.
5.  In the location bar, enter chrome://inspect/#devices.
6.  Click **Inspect** for the WebView under the Remote Target emulator you’re using.

A window appears containing your emulator with Chrome DevTools connected to it. You can use Chrome DevTools to inspect the LWC element, set breakpoints, and see the console output. As with iOS, you can use the standard web development techniques for working with HTML, JavaScript, and CSS to run, test, debug, and improve your LWC.

![Chrome DevTools connected to the Field Service mobile app on Android, running our sample LWC](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_debugging_devtools.png&folder=mobile_offline)

See [Remote debugging WebViews](https://developer.chrome.com/docs/devtools/remote-debugging/webviews/ "HTML (New Window)") for additional basics, and [Debugging embedded JavaScript in an Android app using Chrome DevTools](https://engineering.salesforce.com/debugging-embedded-javascript-in-an-android-app-using-chrome-devtools-8553864ee09c "HTML (New Window)") for a deep dive on debugging JavaScript in an embedded WebView of an Android mobile app.
