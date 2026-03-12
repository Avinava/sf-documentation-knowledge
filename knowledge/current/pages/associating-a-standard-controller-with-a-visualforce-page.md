---
title: "Associating a Standard Controller with a Visualforce Page"
domain: pages
topic: associating-a-standard-controller-with-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.407Z
estimatedTokens: 163
keywords: [Associating, Standard, Controller, Visualforce, associate, standardController, attribute, <apex, page>, tag, assign, any, Salesforce, queried, Lightning]
---

# Associating a Standard Controller with a Visualforce Page

> To associate a standard controller with a Visualforce page, use the standardController attribute on the <apex:page> tag and assign it the name of any Salesforce
   object that can be queried using the Lightning Platform API.

# Associating a Standard Controller with a Visualforce Page

To associate a standard controller with a Visualforce page, use the standardController attribute on the <apex:page\> tag and assign it the name of any Salesforce object that can be queried using the Lightning Platform API.

For example, to associate a page with the standard controller for a custom object named MyCustomObject, use the following markup:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

When you use the standardController attribute on the <apex:page\> tag, you cannot use the controller attribute at the same time.

## Code Examples

```
<apex:page standardController="MyCustomObject__c">
</apex:page>
```
