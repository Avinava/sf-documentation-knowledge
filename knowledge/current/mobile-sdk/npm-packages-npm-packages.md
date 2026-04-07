---
title: "npm Packages npm
         Packages"
domain: mobile-sdk
topic: npm-packages-npm-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:30.878Z
estimatedTokens: 705
keywords: [npm, Packages, mobile, developers, want, SDK, “black, box”, begin, creating, apps, quickly, possible, case, Salesforce]
---

# npm Packages npm
         Packages

> Most mobile developers want to use Mobile SDK as a “black
      box” and begin creating apps as quickly as possible. For this use case Salesforce
      provides a set of npm packages. Each package installs a command line tool that you can use at
      a Terminal window or in a Windows command prompt.

# npm Packages npm Packages

Most mobile developers want to use Mobile SDK as a “black box” and begin creating apps as quickly as possible. For this use case Salesforce provides a set of npm packages. Each package installs a command line tool that you can use at a Terminal window or in a Windows command prompt.

Mobile SDK command line tools provide a static snapshot of an SDK release. For iOS, the npm package installs binary modules rather than uncompiled source code. For Android, the npm package installs a snapshot of the SDK source code rather than binaries. You use the npm scripts not only to access Mobile SDK libraries, but also to create projects.

Mobile SDK provides the following command line tools:

forcedroid

Creates native Android projects in Java or Kotlin.

forceios

Creates native iOS projects in Swift or Objective-C.

forcehybrid

Creates a hybrid project based on Cordova with build targets for iOS, Android, or both.

forcereact

Creates a React Native project with build targets for iOS, Android, or both.

Npm packages reside at [https://www.npmjs.org](https://www.npmjs.org "HTML (New Window)"). We recommend installing Mobile SDK packages globally using the following command:

-   **On Windows:**
    -   ```

        ```

        where npm-package-name is one of the following:
        -   forcedroid
        -   forceios
        -   forcehybrid
        -   forcereact
    -   To install a package locally, omit \-g.
-   **On Mac OS X:**
    -   ```

        ```

        where npm-package-name is one of the following:
        -   forcedroid
        -   forceios
        -   forcehybrid
        -   forcereact
    -   If you have read-write permissions to /usr/local/bin/, you can omit sudo.
    -   To install a package locally in a user-owned directory, omit sudo and \-g.
-   If npm doesn’t exist on your system, install the latest release of Node.js from [nodejs.org](https://www.nodejs.org).
-   Npm packages do not support source control, so you can’t update your installation dynamically for new releases. Instead, you install each release separately. To upgrade to new versions of the SDK, go to the [npmjs.org](https://www.npmjs.org "HTML (New Window)") website and download the new package.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

The forceios npm utility is provided as an optional convenience. CocoaPods, node.js, and npm are required for forceios but are not required for Mobile SDK iOS development. To learn how to create Mobile SDK iOS native projects without forceios, see [Creating an iOS Swift Project Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm "If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode.").

## Code Examples

```
npm install -g <npm-package-name>
```

```
sudo npm install -g <npm-package-name>
```

## Related Topics

- Creating an iOS Swift Project Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm)
