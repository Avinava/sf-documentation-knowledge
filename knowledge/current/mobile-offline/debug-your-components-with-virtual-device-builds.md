---
title: "Debug Your Components with Virtual Device Builds"
domain: mobile-offline
topic: debug-your-components-with-virtual-device-builds
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.463Z
estimatedTokens: 1101
keywords: [Debug, Components, Virtual, Device, Builds, connect, desktop, browsers, Salesforce, mobile, app, running, devices, Safari, iOS]
---

# Debug Your Components with Virtual Device Builds

> To debug your components, connect your desktop browsers to the Salesforce mobile app
    running on your virtual devices. Then use Safari (iOS) or Chrome (Android) developer tools to
    view and interact with HTML markup, step through JavaScript code, and see console logging and
    error messages.

# Debug Your Components with Virtual Device Builds

To debug your components, connect your desktop browsers to the Salesforce mobile app running on your virtual devices. Then use Safari (iOS) or Chrome (Android) developer tools to view and interact with HTML markup, step through JavaScript code, and see console logging and error messages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

You can debug the web-based code of your component, but you can’t debug the platform native code of the mobile app.

Virtual device builds of the Salesforce mobile app let you preview your mobile Lightning web components on a wide range of simulated Android and iOS devices. To install a build into a simulated device, see [Preview Components in the Salesforce Mobile App](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews_salesforce_app.htm "To verify your Lightning web components in Salesforce on many devices, use virtual device builds of the Salesforce mobile app. These builds make it possible to run Salesforce on iOS simulators and Android emulators.").

## Debug on iOS Using Safari Developer Tools

To verify your component when running on iOS, use Safari Web Inspector.

To enable Safari’s developer tools, including Web Inspector, follow these steps.

1.  On your desktop development machine, open the Safari browser.
2.  Select **Safari** | **Preferences…**.
3.  Select **Advanced**.
4.  Enable **Show Develop menu in menu bar**.

Safari developer tools are located in the **Develop** menu, and are active until you turn them off by reversing the preceding steps.

To debug a mobile component, connect your desktop instance of Safari to the Salesforce mobile app running on your virtual device.

1.  On your desktop development machine, select **Safari** | **Develop** | **Simulator — device — version**, where device is the simulated hardware, and version is the operating system installed on it. For example, **Simulator — iPhone 11 Pro — iOS 13.3 (17C45)**.
2.  Select **Automatically Show Web Inspector for JSContexts**.

When you interact with your component in the simulated device, a new Web Inspector window opens. Use Web Inspector to debug your component in much the same way you debug it when it’s running directly in Safari on your desktop.

To learn more about using Safari Web Inspector, see [webkit.org/web-inspector/enabling-web-inspector/](https://webkit.org/web-inspector/enabling-web-inspector/ "HTML (New Window)").

## Debug on Android Using Chrome DevTools

To debug your components when running on Android, use Chrome DevTools. First, enable Developer Mode on your emulated device.

1.  On your emulated Android device, open **Settings** | **About Emulated Device**.
2.  Scroll down to the build number. To enable Developer Mode, click the build number seven times. You see the message “You are now a developer!”
3.  Return to the home screen, and open the Salesforce mobile app. Navigate to a page where your component is displayed.

To debug a mobile component, connect your desktop instance of Google Chrome to the Salesforce mobile app running on your virtual device.

1.  In Chrome on your desktop development machine, enter this URL into the location bar: chrome://inspect/#devices.
2.  You see a list of available remote debugging targets with names similar to “Android SDK built for x86\_64 #EMULATOR-5554”.
3.  Find the item for your active emulated device. Under the Remote Target item, click **inspect**.

Chrome opens a remote debugging window. On the left is the current webview in the Android emulator, which is the page holding your mobile component. On the right is Chrome DevTools, which you can use to debug your component as if it were running in Chrome on your desktop.

To learn more about using Chrome DevTools, see [developers.google.com/web/tools/chrome-devtools/remote-debugging](https://developers.google.com/web/tools/chrome-devtools/remote-debugging "HTML (New Window)").

#### See Also

-   [Salesforce Help: Salesforce Mobile App](https://help.salesforce.com/articleView?id=salesforce_app.htm&language=en_US "Salesforce Help: Salesforce Mobile App - HTML (New Window)")

-   [Trailhead: Salesforce Mobile App Customization](https://trailhead.salesforce.com/en/content/learn/modules/salesforce1_mobile_app "Trailhead: Salesforce Mobile App Customization - HTML (New Window)")

## Related Topics

- Preview Components in the Salesforce Mobile App (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews_salesforce_app.htm)
