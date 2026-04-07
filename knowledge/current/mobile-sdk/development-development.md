---
title: "Development Development"
domain: mobile-sdk
topic: development-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.189Z
estimatedTokens: 1671
keywords: [Development, React, Native, third-party, framework, lets, directly, JavaScript, style, sheets, markup, combine, technology, Mobile, SDK, modules, rapid, resources, Getting, Started, Environment]
---

> React Native is a third-party framework that lets you access native UI elements
    directly with JavaScript, style sheets, and markup. You can combine this technology with special
      Mobile SDK native modules for rapid development using native resources.

# Development Development

React Native is a third-party framework that lets you access native UI elements directly with JavaScript, style sheets, and markup. You can combine this technology with special Mobile SDK native modules for rapid development using native resources.

Since its inception, Mobile SDK has supported two types of mobile apps:

-   **Native apps** provide the best user experience and performance. However, you have to use a different development technology for each mobile platform you support.
-   **Hybrid apps** let you share your JavaScript and style sheets code across platforms, but the generic underlying web view can comprise the user experience.

In Mobile SDK 4.0 and later, you have a third option: React Native. React Native couples the cross-platform advantages of JavaScript development with the platform-specific "look and feel" of a native app. At the same time, the developer experience matches the style and simplicity of hybrid development.

-   You use flexible, widely known web technologies (JavaScript, style sheets, and markup) for layout and styling.
-   No need to recompile to check your code updates. You simply refresh the browser to see your changes.
-   To debug, you use your favorite browser’s developer tools.
-   All views are rendered natively, so your customers get the user experience of a native app.

Mobile SDK 11.1 uses React Native 0.70.14. You can find React Native 0.70.14 source code and documentation at [github.com/facebook/react-native/releases/](https://github.com/facebook/react-native/releases/) under the 0.70.14 tag.

## Getting Started

React Native requires some common Mobile SDK components and at least one native development environment—iOS or Android. On a macOS machine, you can develop both iOS and Android versions of your app. On Windows, you’re limited to developing for Android.

In Mobile SDK 9.0, you have the option of developing your React Native app using plain JavaScript (ES2015) or TypeScript. TypeScript gives you compile-time static type checking and custom types in a standard JavaScript environment. To learn more, see [TypeScript Documentation](https://www.staging-typescript.org/docs/).

Your best bet for getting started is the React Native [Trailhead module](https://trailhead.salesforce.com/trails/mobile_sdk_intro/modules/mobile_sdk_react_native). See you back here afterwards.

## Set Up Your React Native Development Environment

Mobile SDK provides forcereact, a command-line script for installing React Native and Mobile SDK libraries, and creating projects from template apps. To support this tool, install the following packages.

1.  Install git.
    1.  To check if git is already installed, at the operating system command prompt type git version and press Return.
    2.  If you get a “command not found” error message, download and install the git package for your operating system at [git-scm.com/downloads](https://git-scm.com/downloads).
2.  Install Node.js and npm.
    1.  To check if these tools are already installed, at the command prompt type npm -v and press Return.
    2.  If you get a “command not found” error message, download and install the Node.js package for your operating system at [https://nodejs.org/en/](https://nodejs.org/en/).
3.  Install yarn.

    ```

    ```

    For more information, see **Getting Started** | **Installation** at [https://yarnpkg.com/](https://yarnpkg.com/)
4.  Install the TypeScript compiler.

    ```

    ```

    For more information, see **Download** at [https://www.typescriptlang.org](https://www.typescriptlang.org "HTML (New Window)").

    ![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=mobile_sdk)

    #### Warning

    Don’t use npm install -g tsc. This variation installs an incompatible version of TypeScript that causes forcereact to fail.

5.  Install forcereact.

    ```

    ```


![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

To satisfy Google Play requirements, Mobile SDK 7.2 upgrades its React Native component to a version that supports 64-bit builds. Starting **August 1, 2019**, *new* and *updated* Mobile SDK React Native apps that will be published on the Google Play store must be built with Mobile SDK 7.2 or later. See [https://android-developers.googleblog.com/2019/01/get-your-apps-ready-for-64-bit.html?m=1](https://android-developers.googleblog.com/2019/01/get-your-apps-ready-for-64-bit.html?m=1 "HTML (New Window)") for full details.

-   **[Creating a React Native Project with Forcereact](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_new_project.htm)**
    After you’ve successfully installed a native Mobile SDK environment, you can begin creating React Native apps.
-   **[Using TypeScript in React Native Projects](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_typescript.htm)**
    TypeScript brings useful advantages to React Native apps. Not only does it help you write safer code—it also coexists seamlessly with vanilla JavaScript. You can use as much or as little TypeScript as you like.
-   **[Using Mobile SDK Components in React Native Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_components.htm)**
    React Native apps access the same Mobile SDK libraries as Mobile SDK native apps. For React Native, Mobile SDK provides JavaScript components, or bridges, that execute your JavaScript code as native Mobile SDK instructions.
-   **[Native Modules for React Native Apps Native Modules for React Native Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_ref.htm)**
    Mobile SDK provides native modules for React Native that serve as JavaScript bridges to native Mobile SDK functionality.
-   **[Sample App Using React Native Sample App Using React Native](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_samples.htm)**
    The best way to get up-to-speed on React Native in Mobile SDK is to study the sample code.
-   **[Defer Login](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_deferred_login.htm)**
    Apps built with early versions of React Native for Mobile SDK always present a Salesforce login screen at startup. Sometimes, however, these apps can benefit from deferring authentication until some later point. Beginning with React Native for Mobile SDK 4.2, you can defer login to any logical place in your app.
-   **[Upload Binary Content](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_binary_upload.htm)**
    You can upload binary content to any force.com endpoint that supports the binary upload feature.

## Code Examples

```
[sudo] npm install -g yarn
```

```
[sudo] npm install -g typescript
```

```apex
[sudo] yarn global add forcereact
```

## Related Topics

- Creating a React Native Project with Forcereact (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_new_project.htm)
- Using TypeScript in React Native Projects (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_typescript.htm)
- Using Mobile SDK Components in React Native Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_components.htm)
- Native Modules for React Native Apps Native Modules for React Native Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_ref.htm)
- Sample App Using React Native Sample App Using React Native (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_samples.htm)
- Defer Login (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_deferred_login.htm)
- Upload Binary Content (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_binary_upload.htm)
