---
title: "Displaying Related Lists for Custom Objects"
domain: pages
topic: displaying-related-lists-for-custom-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.964Z
estimatedTokens: 288
keywords: [Displaying, Custom, Objects, possible, changed, noninclusive, terms, align, company, Equality, maintained, certain, avoid, any, effect]
---

# Displaying Related Lists for Custom Objects

> Where possible, we changed noninclusive terms to align with our
  company value of Equality. We maintained certain terms to avoid any effect on
  customer implementations.

# Displaying Related Lists for Custom Objects

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Displaying custom objects and their related lists with Visualforce is very simple.

Suppose you have three custom objects: MyChildObject, MyMasterObject, and MyLookupObject. MyChildObject has a master-detail relationship with MyMasterObject (which is the master). MyLookupObject also has a Lookup relationship with MyChildObject.

If you want to create a Visualforce page that displays the related list for MyMasterObject, use the following markup:

```

```

For this page to display the related list data, the ID of a valid custom object record with a custom relationship must be specified as a query parameter in the URL for the page, for example, http://MyDomain\_login\_URL/myCustomRelatedList?id=a00x00000003ij0.

Although MyLookupObject uses a different type of relationship, the syntax is identical:

```

```

## Code Examples

```
<apex:page standardController="MyMasterObject__c">
	<apex:relatedList list="MyChildObjects__r" />
</apex:page>
```

```
<apex:page standardController="MyLookupObject__c">
	<apex:relatedList list="MyChildObjects__r" />
</apex:page>
```
