---
title: "JavaScript Files for Hybrid Apps"
domain: mobile-sdk
topic: javascript-files-for-hybrid-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.091Z
estimatedTokens: 250
keywords: [JavaScript, Files, Hybrid, Apps, Mobile, SDK, uses, external, dependencies, various, features, Include]
---

> Mobile SDK uses the following
    external dependencies for various features of hybrid apps.

# JavaScript Files for Hybrid Apps

## External Dependencies

Mobile SDK uses the following external dependencies for various features of hybrid apps.

| External JavaScript File | Description |
| --- | --- |
| jquery.js | Popular HTML utility library |
| underscore.js | Mobile Sync support |
| backbone.js | Mobile Sync support |

## Which JavaScript Files Do I Include?

Beginning with Mobile SDK 2.3, the Cordova utility copies the Cordova plug-in files your application needs to your project’s platform directories. You don’t need to add those files to your www/ folder.

Files that you include in your HTML code (with a <script> tag> depend on the type of hybrid project. For each type described here, include all files in the list.

**For basic hybrid apps:**

-   cordova.js

**To make REST API calls from a basic hybrid app:**

-   cordova.js
-   force.js

**To use Mobile Sync in a hybrid app:**

-   jquery.js
-   underscore.js
-   backbone.js
-   cordova.js
-   force.js
-   mobilesync.js
