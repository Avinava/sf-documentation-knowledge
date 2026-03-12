---
title: "Associating a Standard List Controller
with a Visualforce Page"
domain: pages
topic: associating-a-standard-list-controller-with-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.367Z
estimatedTokens: 209
keywords: [Associating, Standard, Controller, Visualforce, similar, standardController, attribute, <apex, page>, component, recordSetVar]
---

# Associating a Standard List Controller
with a Visualforce Page

> Using a standard list controller is very similar to using a standard
controller. First you set the standardController attribute on the <apex:page> component, then you set the recordSetVar attribute on the same component.

# Associating a Standard List Controller with a Visualforce Page

Using a standard list controller is very similar to using a standard controller. First you set the standardController attribute on the <apex:page\> component, then you set the recordSetVar attribute on the same component.

For example, to associate a page with the standard list controller for accounts, use the following markup:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

When you use the standardController attribute on the <apex:page\> tag, you can’t use the controller attribute at the same time.

The recordSetVar attribute not only indicates that the page uses a list controller, it sets the variable name of the record collection. This variable can be used to access data in the record collection.

## Code Examples

```
<apex:page standardController="Account" recordSetVar="accounts">
```
