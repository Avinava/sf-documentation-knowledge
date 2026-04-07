---
title: "Using  in Hybrid and React Native Apps in Hybrid and React
   Native Apps"
domain: mobile-sdk
topic: using-in-hybrid-and-react-native-apps-in-hybrid-and-react-native-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:30.099Z
estimatedTokens: 727
keywords: [Hybrid, React, Native, Apps, Mobile, Sync, JavaScript, SDK, library, Salesforce, objects, models, manipulate, underlying, records]
---

# Using  in Hybrid and React Native Apps in Hybrid and React
   Native Apps

> Mobile Sync for JavaScript is a Mobile SDK library that represents
   Salesforce objects as JavaScript objects. To use Mobile Sync in JavaScript, you
   create models of Salesforce objects and manipulate the underlying records just by changing the
   model data. If you perform a SOQL or SOSL query, 

# Using in Hybrid and React Native Apps in Hybrid and React Native Apps

Mobile Sync for JavaScript is a Mobile SDK library that represents Salesforce objects as JavaScript objects. To use Mobile Sync in JavaScript, you create models of Salesforce objects and manipulate the underlying records just by changing the model data. If you perform a SOQL or SOSL query, you receive the resulting records in a model collection rather than as a JSON string.

In hybrid apps, Mobile SDK provides two options for using Mobile Sync.

-   com.salesforce.plugin.mobilesync: The Mobile Sync plug-in offers basic “sync up” and “sync down” functionality. This plug-in exposes part of the native Mobile Sync library. For simple syncing tasks, you can use the plug-in to sync records rapidly in a native thread, rather than in the web view.
-   mobilesync.js: The Mobile Sync JavaScript library provides a Force.SObject data framework for more complex syncing operations. This library is based on backbone.js, an open-source JavaScript framework that defines an extensible data modeling mechanism. To understand this technology, browse the examples and documentation at [backbonejs.org](http://www.backbonejs.org "HTML (New Window)").

A set of sample hybrid applications demonstrate how to use Mobile Sync. Sample apps in the hybrid/SampleApps/AccountEditor/assets/www folder demonstrate how to use the Force.SObject library in mobilesync.js:

-   Account Editor (AccountEditor.html)
-   User Search (UserSearch.html)
-   User and Group Search (UserAndGroupSearch.html)

The sample app in the hybrid/SampleApps/SimpleSync folder demonstrates how to use the Mobile Sync plug-in.

-   **[Which Hybrid Version of Should I Use? Should I Use?](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_js_vs_plugin.htm)**

-   **[About Backbone Technology](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_backbone.htm)**

-   **[Models and Model Collections](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_types.htm)**

-   **[Using the Plugin Plugin](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_mobilesync_plugin.htm)**

-   **[Using Mobile Sync in JavaScript](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_javascript.htm)**

-   **[Offline Caching](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_caching.htm)**

-   **[Conflict Detection](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_conflict_detection.htm)**

-   **[Accessing Custom API Endpoints](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_endpoints_custom.htm)**

-   **[Tutorial: Creating a Hybrid Application Application](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_tut_intro.htm)**

-   **[Mobile Sync Sample Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/samples_intro.htm)**

## Related Topics

- Which Hybrid Version of Should I Use? Should I Use? (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_js_vs_plugin.htm)
- About Backbone Technology (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_backbone.htm)
- Models and Model Collections (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_types.htm)
- Using the Plugin Plugin (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_mobilesync_plugin.htm)
- Using Mobile Sync in JavaScript (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_javascript.htm)
- Offline Caching (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_caching.htm)
- Conflict Detection (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_conflict_detection.htm)
- Accessing Custom API Endpoints (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_endpoints_custom.htm)
- Tutorial: Creating a Hybrid Application Application (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_tut_intro.htm)
- Mobile Sync Sample Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/samples_intro.htm)
