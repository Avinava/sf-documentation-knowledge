---
title: "Using the  Plugin Plugin"
domain: mobile-sdk
topic: using-the-plugin-plugin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.502Z
estimatedTokens: 255
keywords: [Plugin, Beginning, Mobile, SDK, 3.0, Sync, plug-in, JavaScript, access, native, library’s, “sync, up”, down”, functionality]
---

# Using the  Plugin Plugin

> Beginning with Mobile SDK 3.0,
   the Mobile Sync plug-in provides
   JavaScript access to the native Mobile Sync library’s “sync up” and “sync down” functionality. As a result, performance-intensive
   operations—network negotiations, parsing, SmartStore management—run on native
   threads that do 

# Using the Plugin Plugin

Beginning with Mobile SDK 3.0, the Mobile Sync plug-in provides JavaScript access to the native Mobile Sync library’s “sync up” and “sync down” functionality. As a result, performance-intensive operations—network negotiations, parsing, SmartStore management—run on native threads that do not affect web view operations.

Adding the Mobile Sync plug-in to your hybrid project is a function of the Mobile SDK npm scripts:

-   For forceios version 3.0 or later, the plug-in is automatically included.
-   For forcedroid version 3.0 or later, answer “yes” when asked if you want to use SmartStore.

If you’re adding the Mobile Sync plug-in to an existing hybrid app, it’s best to re-create the app using the latest version of forcedroid or forceios. When the new app is ready, copy your custom HTML, CSS, and JavaScript files from your old project into the new project.

-   **[Plugin Methods Plugin Methods](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_plugin_methods.htm)**

## Related Topics

- Plugin Methods Plugin Methods (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_plugin_methods.htm)
