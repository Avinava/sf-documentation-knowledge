---
title: "Understand the Mobile Development Cycle"
domain: mobile-offline
topic: understand-the-mobile-development-cycle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.609Z
estimatedTokens: 2111
keywords: [Understand, Mobile, Development, Cycle, basics, components, including, essential, tasks, tools, productive, building, LWCs, devices, Code]
---

# Understand the Mobile Development Cycle

> Learn the basics of the development cycle for mobile components, including the essential
    tasks and tools that you need to be productive while building LWCs for use on mobile
    devices.

# Understand the Mobile Development Cycle

Learn the basics of the development cycle for mobile components, including the essential tasks and tools that you need to be productive while building LWCs for use on mobile devices.

Everyone’s development process is different, in ways large and small. But no matter how different, there are common aspects of the active development cycle — the “lather, rinse, repeat” — that every productive developer uses. Developing mobile components is no different in that regard, but there are some differences in the details. In particular, there are unique challenges in examining code during development that require some specialized tools and techniques.

The Active Development Cycle ![The active development cycle for mobile developers: Code, Preview, Test, Debug](/docs/resources/img/en-us/260.0?doc_id=images%2Fdx_active_dev_cycle.png&folder=mobile_offline)

## Code

You know what this part is. Actually writing code in your development editor of choice. Coding is the fun part of every developer’s job, and the more time you can spend doing it, the happier you are (usually). For LWC developers working on mobile apps, the editor of choice is VS Code. Salesforce provides multiple extensions for VS Code to make your mobile dev work easier, including Salesforce DX extensions, mobile extensions, and code validation.

-   [Visual Studio Code](https://developer.salesforce.com/docs/platform/lwc/guide/get-started-editor-linter-org.html "HTML (New Window)")
-   [Salesforce DX](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm "HTML (New Window)")
-   [Salesforce Extensions for VS Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode "HTML (New Window)")
-   [Salesforce Mobile Extensions](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup.htm "To use Mobile Extensions, install the lwc-dev-mobile Salesforce CLI plug-in. After it’s installed, use it to check for the required Android and iOS configurations. If the plug-in finds problems, the command output gives you hints for how to fix your environment. After your environment is set up, preview your components from the command line or from Visual Studio Code.")
-   [Code Validation](atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline.htm "Use the Komaci Static Analyzer (or static analyzer for short) during component development to validate your Lightning web components for offline use. Using the static analyzer helps you ensure that code dependencies and data your component depends on can be primed when a network connection is available, making the component and its data available offline when the network has limited or no connectivity.")

## Preview

Get the current version of your code into a container that can run it. Previews need to be a fast, lightweight process, not a release ceremony. Salesforce mobile extensions for VS Code make this happen, whether you want to preview your components in development in a local preview environment, in the Test Harness app, or in an official Salesforce mobile app on a virtual or physical device.

-   [Preview Lightning Web Components on Mobile](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews.htm "When you’re developing Lightning web components, it’s important to inspect your components’ presentation not only on the desktop, but also on mobile devices. To preview your components on virtual mobile devices and see changes as you code, use Local Dev. You can also download and run virtual device builds of the Salesforce mobile app to preview how your components coexist with other components in Salesforce.")
-   [Salesforce Extensions for VS Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode "HTML (New Window)")
-   [Salesforce Mobile Extensions](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup.htm "To use Mobile Extensions, install the lwc-dev-mobile Salesforce CLI plug-in. After it’s installed, use it to check for the required Android and iOS configurations. If the plug-in finds problems, the command output gives you hints for how to fix your environment. After your environment is set up, preview your components from the command line or from Visual Studio Code.")
-   [Test Harness App](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app.htm "The LWC Offline Test Harness (Test Harness, for short) is a lightweight testing, debugging, and inspection app. It enables developers to debug Lightning web components for use in their LWC Offline-based mobile apps. Use Test Harness to execute Quick Actions on selected SObjects from your Salesforce org, debug component JavaScript, and inspect drafts and draft queue behavior.")

## Test

Testing is an overloaded term in software development. There are many different kinds of testing. For your daily, interactive development work, the focus is on manually testing the behavior of the code you just added or changed. Once your component is in a preview environment, being able to tap on the app, navigate the user interface, and interactively play with your component or app is straightforward.

-   [Test Harness App](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app.htm "The LWC Offline Test Harness (Test Harness, for short) is a lightweight testing, debugging, and inspection app. It enables developers to debug Lightning web components for use in their LWC Offline-based mobile apps. Use Test Harness to execute Quick Actions on selected SObjects from your Salesforce org, debug component JavaScript, and inspect drafts and draft queue behavior.")
-   [Virtual Device Builds](atlas.en-us.mobile_offline.meta/mobile_offline/dx_debug_mobile_components.htm "To debug your components, connect your desktop browsers to the Salesforce mobile app running on your virtual devices. Then use Safari (iOS) or Chrome (Android) developer tools to view and interact with HTML markup, step through JavaScript code, and see console logging and error messages.")
-   [Salesforce Mobile App Betas](https://help.salesforce.com/s/articleView?id=000382422&type=1&language=en_US "HTML (New Window)")

## Debug

“Where did it all go wrong?” is a question every developer asks, usually many times a day. Debugging is how you answer that question.

“Why doesn’t *X* happen when I do *Y*?” and “What *does* happen when I do *Y*?” are questions you need real debugging tools to help answer. LWC developers depend on standard debugging tools like Chrome DevTools and Safari Web Inspector to look inside their components to understand behavior. Mobile developers can use these same tools but, because LWC Offline code runs inside a mobile app instead of a web browser, it’s a bit trickier to attach a JavaScript console to the web view. The mobile Test Harness app gives you not only a debuggable web view, but also a collection of specialized tools and functions to inspect the underlying behavior of your component code while running offline.

-   [Debug Lightning Web Components](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_debugging.htm "The best way to develop and debug your Lightning web components is the same way you develop and debug anything built with HTML, CSS, and JavaScript: with the debugging tools built into your web browser.")
-   [Virtual Device Builds](atlas.en-us.mobile_offline.meta/mobile_offline/dx_debug_mobile_components.htm "To debug your components, connect your desktop browsers to the Salesforce mobile app running on your virtual devices. Then use Safari (iOS) or Chrome (Android) developer tools to view and interact with HTML markup, step through JavaScript code, and see console logging and error messages.")
-   [Test Harness App](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app.htm "The LWC Offline Test Harness (Test Harness, for short) is a lightweight testing, debugging, and inspection app. It enables developers to debug Lightning web components for use in their LWC Offline-based mobile apps. Use Test Harness to execute Quick Actions on selected SObjects from your Salesforce org, debug component JavaScript, and inspect drafts and draft queue behavior.")
-   [Chrome DevTools](https://developer.chrome.com/docs/devtools/ "HTML (New Window)")
-   [Safari Web Inspector](https://developer.apple.com/safari/tools/ "HTML (New Window)")

## Related Topics

- Salesforce Mobile
            Extensions (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup.htm)
- Code Validation (atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline.htm)
- Preview Lightning Web Components on Mobile (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews.htm)
- Salesforce Mobile Extensions (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup.htm)
- Test Harness App (atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app.htm)
- Virtual Device Builds (atlas.en-us.mobile_offline.meta/mobile_offline/dx_debug_mobile_components.htm)
- Debug Lightning Web Components (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_debugging.htm)
