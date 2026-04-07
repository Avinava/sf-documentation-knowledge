---
title: "UI Classes"
domain: mobile-sdk
topic: ui-classes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.960Z
estimatedTokens: 132
keywords: [Classes, Activities, com.salesforce.androidsdk.ui, package, represent, resources, common, Mobile, SDK, apps, style, skin, theme, otherwise, customize, XML, override, you’re, responsible, maintaining]
---

> Activities in the com.salesforce.androidsdk.ui package
   represent the UI resources that are common to all Mobile SDK apps. You can style, skin, theme, or
   otherwise customize these resources through XML. If you override these resources, you’re
   responsible for maintaining them when Mobile SDK 

# UI Classes

Activities in the com.salesforce.androidsdk.ui package represent the UI resources that are common to all Mobile SDK apps. You can style, skin, theme, or otherwise customize these resources through XML. If you override these resources, you’re responsible for maintaining them when Mobile SDK breaks compatibility. With the exceptions of SalesforceActivity, SalesforceListActivity, and SalesforceExpandableListActivity, do not override these activity classes with intentions of replacing the resources at runtime.
