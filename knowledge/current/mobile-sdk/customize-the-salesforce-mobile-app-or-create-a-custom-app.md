---
title: "Customize the Salesforce Mobile App, or Create a Custom
    App?"
domain: mobile-sdk
topic: customize-the-salesforce-mobile-app-or-create-a-custom-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.208Z
estimatedTokens: 824
keywords: [Customize, Salesforce, Mobile, App, you’re, developing, apps, org, users, options, customizable, developed, built, distributed, standalone, iOS, Android, scratch, SDK, Although, deals, development, differences, Customizing]
---

> When you’re developing mobile apps for Salesforce org users, you have options. The
    Salesforce mobile app is the customizable mobile app developed, built, and distributed by
    Salesforce. Custom apps are standalone iOS or Android apps built from scratch on Salesforce
    Mobile SDK. Although this guide deals only with Mobile SDK development, here are some
    differences between the Salesforce mobile app and custom apps.

# Customize the Salesforce Mobile App, or Create a Custom App?

When you’re developing mobile apps for Salesforce org users, you have options. The Salesforce mobile app is the customizable mobile app developed, built, and distributed by Salesforce. Custom apps are standalone iOS or Android apps built from scratch on Salesforce Mobile SDK. Although this guide deals only with Mobile SDK development, here are some differences between the Salesforce mobile app and custom apps.

## Customizing the Salesforce Mobile App

-   Has a pre-defined, customizable user interface.
-   Has full access to Salesforce org data.
-   You can create an integrated experience with functionality developed in the Salesforce Platform.
-   The Action Bar gives you a way to include your own apps and functionality.
-   You can customize the Salesforce mobile app with either point-and-click or programmatic customizations.
-   Functionality can be added programmatically through Lightning web components and Visualforce pages.
-   Salesforce mobile customizations or apps adhere to the Salesforce mobile navigation. So, for example, a Visualforce page can be called from the navigation menu or from the Action Bar.
-   You can use existing Salesforce development experience, both point-and-click and programmatic.
-   Included in all Salesforce editions and supported by Salesforce.

## Developing Custom Mobile Apps

Custom apps can be free-standing apps built on Salesforce Mobile SDK, or browser apps using plain HTML5 and JavaScript with Ajax. With custom apps, you can:

-   Define a custom user experience.
-   Access data from Salesforce orgs using REST APIs in native and hybrid local apps, or with Visualforce in hybrid apps using JavaScript Remoting. In HTML apps, do the same using JQueryMobile and Ajax.
-   Brand your user interface for customer-facing exposure.
-   Create standalone mobile apps with native iOS or Android APIs, or through a hybrid container using JavaScript and HTML, or with React Native (Mobile SDK only).
-   Distribute apps through mobile industry channels, such as the App Store or Google Play (Mobile SDK only).
-   Configure and control complex offline behavior (Mobile SDK only).
-   Use push notifications.
-   Design a custom security container using your own OAuth module (Mobile SDK only).
-   Other important Mobile SDK considerations:
    -   Open-source SDK, downloadable for free through npm installers as well as from GitHub.
    -   You develop and compile your apps in an external development environment (Xcode for iOS, Android Studio for Android) instead of a browser window.
    -   Development costs depend on your app and your platform.

Mobile SDK integrates Salesforce Platform cloud architecture into mobile apps by providing:

-   Implementation of Salesforce Connected App policy.
-   Salesforce org login and OAuth credentials management, including persistence and refresh capabilities.
-   Secure offline storage with SmartStore.
-   Syncing between the Salesforce cloud and SmartStore through Mobile Sync.
-   Support for Salesforce Communities.
-   Wrappers for Salesforce REST APIs with implicit networking.
-   Fast switching between multiple users.
-   Cordova-based containers for hybrid apps.
-   React Native bridges to Mobile SDK native APIs.
