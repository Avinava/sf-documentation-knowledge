---
title: "Using a Custom Template to Create Apps"
domain: mobile-sdk
topic: using-a-custom-template-to-create-apps
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:29.608Z
estimatedTokens: 1829
keywords: [Custom, Template, Apps, Mobile, SDK, architecture, supports, iOS, Android, templates, maintained, github.com, forcedotcom, SalesforceMobileSDK-Templates, repo, Wishing, own—or, someone, else’s—custom, app]
---

# Using a Custom Template to Create Apps

> Wishing you could use your own—or someone else’s—custom app as a template? Good idea!
  Custom templates promote reuse of code, rapid development, and internal consistency. Beginning in
   Mobile SDK 5.0, you can use either
  forceios or forcedroid to create apps with custom templates. To turn a Mobile SDK app into a template, you
  perform a few steps to prepare the app’s repo for Mobile SDK consumption.

# Using a Custom Template to Create Apps

Wishing you could use your own—or someone else’s—custom app as a template? Good idea! Custom templates promote reuse of code, rapid development, and internal consistency. Beginning in Mobile SDK 5.0, you can use either forceios or forcedroid to create apps with custom templates. To turn a Mobile SDK app into a template, you perform a few steps to prepare the app’s repo for Mobile SDK consumption.

## About Mobile SDK Templates

Mobile SDK defines a template for each architecture it supports on iOS and Android. These templates are maintained in the [github.com/forcedotcom/SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates "HTML (New Window)") repo. When a customer runs the forcedroid or forceios create command, the script copies the appropriate built-in template from the repo and transforms this copy into the new app. Apps created this way are basic Mobile SDK apps with little functionality.

Perhaps you’d like to create your own template, with additional functionality, resources, or branding. You can harness the same Mobile SDK mechanism to turn your own app into a template. You can then tell forcedroid or forceios to use that template instead of its own.

## How to Use a Custom Template

In addition to forcedroid and forceios create, Mobile SDK defines a createWithTemplate command.When you run forcedroid or forceios createWithTemplate, you specify a template app repo instead of an app type, followed by the remaining app creation parameters. The template app repo contains a Mobile SDK app that the script recognizes as a template. To create a new Mobile SDK app from this template, the script copies the template app to a new folder and applies your parameter values to the copied code.

## The template.js File

To accept your unknown app as a template, forceios and forcedroid require you to define a template.js configuration file. You save this file in the root of your template app repo. This file tells the script how to perform its standard app refactoring tasks—moving files, replacing text, removing and renaming resources. However, you might have even more extensive changes that you want to apply. In such cases, you can also adapt template.js to perform customizations beyond the standard scope. For example, if you insert your app name in classes other than the main entry point class, you can use template.js to perform those changes.

A template.js file contains two parts: a JavaScript “prepare” function for preparing new apps from the template, and a declaration of exports.

## The template.js Prepare Funtion

Most of a template.js file consists of the “prepare” function. By default, prepare functions use the following signature:

```

```

You can rename this function, as long as you remember to specify the updated name in the list of exports. The Mobile SDK script calls the function you export with the following arguments:

-   config: A dictionary identifying the platform (iOS or Android), app name, package name, organization, and Mobile SDK version.
-   replaceInFiles: Helper function to replace a string in files.
-   moveFile: Helper function to move files and directories.
-   removeFile: Helper function to remove files and directories.

The default prepare function found in Mobile SDK templates replaces strings and moves and removes the files necessary to personalize a standard template app. If you intend to add functionality, place your code within the prepare function. Note, however, that the helper functions passed to your prepare function can only perform the tasks of a standard template app. For custom tasks, you’ll have to implement and call your own methods.

## Exports Defined in template.js

Each template.js file defines the following two exports.

appType

Assign one of the following values:

-   'native'
-   'native\_kotlin' (forcedroid only)
-   'native\_swift' (forceios only)
-   'react\_native'
-   'hybrid\_local'
-   'hybrid\_remote'

prepare

The handle of your prepare function (listed without quotation marks).

Here’s an example of the export section of a template.js file. This template is for a native app that defines a prepare function named prepare:

```

```

In this case, the prepare function’s handle is, in fact, “prepare”:

```

```

## Template App Identification in template.js (Native and React Native Apps)

For native and React native apps, a template app’s prepare function defines an app name, a package name, and an organization or company name. These values identify the template app itself—not a new custom app created from the template. At runtime, the Mobile SDK script uses these values to find the strings to be replaced with the script’s input values. Here’s an example of the settings for these iOSNativeTemplate template app:

```

```

## Examples of template.js Files

Mobile SDK defines its own templates in the [github.com/forcedotcom/SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates "HTML (New Window)") repo. Each template directory includes a template.js file. Templates include:

-   iOSNativeTemplate (forceios only)
-   iOSNativeSwiftTemplate (forceios only)
-   ReactNativeTemplate
-   HybridLocalTemplate
-   HybridRemoteTemplate
-   AndroidNativeTemplate (forcedroid only)
-   AndroidNativeKotlinTemplate (forcedroid only)

These templates are "bare bones" projects used by the Mobile SDK npm scripts to create apps; hence, their level of complexity is intentionally low. If you're looking for more advanced templates, see

-   MobileSyncExplorerReactNative
-   MobileSyncExplorerSwift
-   AndroidIDPTemplate
-   iOSIDPTemplate

You can get a list of these templates with their repo paths from the listtemplates command. All Mobile SDK npm scripts—forcedroid, forceios, forcehybrid, and forcereact—support this command.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Always match the script command to the template. Use iOS-specific templates with forceios createWithTemplate only, and Android-specific templates with forcedroid createWithTemplate only. This restriction doesn’t apply to hybrid and React native templates.

## Define a Basic template.js File

The following steps describe the quickest way to create a basic template.js file.

1.  Copy a template.js file from the [github.com/forcedotcom/SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates "HTML (New Window)") repo to the root of your custom template app repo. Be sure to choose the template that matches the type of app your template should build.
2.  For native or React native apps only, update the app name, package name, and organization to reflect your template app.
3.  If necessary, update the appType and prepare settings in the module.exports object, as described earlier. Although this step isn’t required for this basic example, you might need it later if you create your own template.js files.

## Restrictions and Guidelines

A few restrictions apply to custom templates.

-   The template app can be any valid Mobile SDK app that targets any supported platform and architecture.
-   A primary requirement is that the template repo and your local Mobile SDK repo must be on the same Mobile SDK version. You can use git version tags to sync both repos to a specific earlier version, but doing so isn’t recommended.
-   Always match the script command to the template. Use iOS-specific templates with forceios createWithTemplate only, and Android-specific templates with forcedroid createWithTemplate only. This restriction doesn’t apply to hybrid and React native templates.

## Code Examples

```
function prepare(config, replaceInFiles, moveFile, removeFile)
```

```
//
// Exports
//
module.exports = {
    appType: 'native',
    prepare: prepare
};
```

```
// Values in template
var templateAppName = 'iOSNativeTemplate';
var templatePackageName = 'com.salesforce.iosnativetemplate';
var templateOrganization = 'iOSNativeTemplateOrganizationName';
```
