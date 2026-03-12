---
title: "Mobile Development Preview Environments"
domain: mobile-offline
topic: mobile-development-preview-environments
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.569Z
estimatedTokens: 1420
keywords: [Mobile, Development, Preview, Environments, iterate, components, real-time, Local, Dev, Developers, context, Salesforce, app, virtual, device]
---

# Mobile Development Preview Environments

> To preview and iterate on components in a real-time preview, use Local Dev. Developers can also preview components in context in the Salesforce mobile app, or
    in a virtual device build of the Salesforce mobile app. Salesforce admins can preview Lightning
    Experience on mobile from Lightning App Builder.

# Mobile Development Preview Environments

To preview and iterate on components in a real-time preview, use Local Dev. Developers can also preview components in context in the Salesforce mobile app, or in a virtual device build of the Salesforce mobile app. Salesforce admins can preview Lightning Experience on mobile from Lightning App Builder.

## Administrators

[Salesforce Administrators](https://trailhead.salesforce.com/credentials/administratoroverview "HTML (New Window)") work with stakeholders to define requirements and to customize their org, using the full variety of tools available in Salesforce. When customizing pages, administrators should validate their changes for both desktop and mobile.

**App Builder Mobile Previews**

Admins can use Lightning App Builder to build apps and pages to customize Lightning Experience on mobile. App Builder provides previews for both desktop and mobile. Admins can specify certain components as mobile- or desktop-only. See [Visibility Rules on Lightning Pages](https://help.salesforce.com/s/articleView?id=platform.lightning_page_components_visibility.htm&type=5&language=en_US "HTML (New Window)") for available filtering options.

For more information about building and previewing pages in App Builder, see [Build a Mobile App Page](https://admin.salesforce.com/blog/2019/build-a-mobile-app-page "HTML (New Window)") and [Get Ready for Lightning — 5 step-by-step videos](https://admin.salesforce.com/blog/2019/get-ready-for-lightning-experience-on-mobile-with-these-5-step-by-step-videos "HTML (New Window)").

![Preview components in Lightning App Builder](/docs/resources/img/en-us/260.0?doc_id=images%2Fmobile_preview_app_builder.png&folder=mobile_offline)

If admins need more than a preview, they can run Lightning applications and components in the Salesforce mobile app on their devices. Testing in the mobile app helps validate that users have the best experience on mobile.

## Developers

[Salesforce developers](https://trailhead.salesforce.com/credentials/developeroverview "HTML (New Window)") building Lightning web components have many options available to validate their components for mobile.

**Preview Components Using Local Dev**

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

Starting on September 5, 2025, [the Local Development Server](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/lwclocaldev.html) will not be available to use. To continue testing your Lightning web components in a real-time browser preview, migrate to [the new Local Dev experience](https://developer.salesforce.com/docs/platform/lwc/guide/get-started-test-components.html).

With Local Dev, you can preview your Lightning web components in isolation or within a Lightning app or Experience Cloud Lightning Web Runtime site. When you save changes to your source code on your local machine, Local Dev automatically updates your browser preview. This lets you iterate quickly on your components without deploying code or manually refreshing the preview in your browser.

![Preview a component, app, or site in a desktop or mobile environment using Local Dev.](/docs/resources/img/en-us/260.0?doc_id=images%2Flocaldevcomprehensive.png&folder=mobile_offline)

You can use Local Dev to test a Lightning app in different mobile environments. This requires some setup of mobile development tools, like Xcode and Android Studio. For a hands-on walkthrough of this setup, complete the Trailhead project [Set Up Your Salesforce Mobile Developer Tools for Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/set-up-your-salesforce-mobile-developer-tools-for-lightning-web-components).

To learn more about Local Dev, check out [Lightning Web Components Developer Guide: Preview Components with Local Dev](https://developer.salesforce.com/docs/platform/lwc/guide/get-started-test-components.html).

**Preview in the Salesforce Mobile App**

Previews using Local Dev are great for seeing your changes in real-time. After your component is validated locally, publish it to a Salesforce development org and validate it on pages with other components in the Salesforce mobile app. You can run the Salesforce mobile app on physical devices and on virtual devices.

-   **Physical Devices**

    You can run your Lightning applications and components using the Salesforce mobile app on your device. Use the mobile app to review issues your applications and components encounter on mobile. The Salesforce mobile app is available for download from the App Store and Google Play.

    ![Preview components in the Salesforce mobile app](/docs/resources/img/en-us/260.0?doc_id=images%2Fmobile_preview_mobile_app.png&folder=mobile_offline)

-   **Virtual Device Builds**

    You can run your Lightning applications and components using virtual device builds of the Salesforce mobile app. These builds make it possible to run Salesforce on iOS simulators and Android emulators so you can validate and debug your components on many devices. To learn how to download virtual device builds, see [Preview Components in the Salesforce Mobile App](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews_salesforce_app.htm "To verify your Lightning web components in Salesforce on many devices, use virtual device builds of the Salesforce mobile app. These builds make it possible to run Salesforce on iOS simulators and Android emulators.").

    ![Preview components using virtual device builds](/docs/resources/img/en-us/260.0?doc_id=images%2Fmobile_preview_virtual_device_build.png&folder=mobile_offline)

## Related Topics

- Preview Components in the Salesforce Mobile App (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews_salesforce_app.htm)
