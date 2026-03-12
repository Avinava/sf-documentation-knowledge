---
title: "refreshObject() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: refreshobject-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.889Z
estimatedTokens: 312
keywords: [refreshObject, Salesforce, Classic, Visualforce, pages, want, custom, publishers, Case, Feed, Usage, Arguments, Sample, Code–JavaScript]
---

# refreshObject() for Salesforce Classic for Salesforce Classic

> Use this method with Visualforce pages you want to use as custom
publishers in Case Feed.

# refreshObject() for Salesforce Classic for Salesforce Classic

## Usage

Notifies a page that uses a feed-based layout, that fields, the feed, or related list data has changed, and forces an update of these on the page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

Use this method with Visualforce pages you want to use as custom publishers in Case Feed.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| objectId | string | The record ID of the case object. |
| refreshFields | boolean | Indicates that one or more fields on the case have changed. |
| refreshRelatedLists | boolean | Indicates that one or more case-related lists have changed. |
| refreshFeed | boolean | Indicates that the case feed has changed. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| result | boolean | true if the Case Feed page was successfully updated, false if it was not. |

## Code Examples

```
sforce.interaction.entityFeed.refreshObject(
      objectId:string,
      refreshFields:boolean,
      refreshRelatedLists:boolean,
      refreshFeed:boolean,callback:function)
```

```
<apex:page standardController="Case">
    <apex:includeScript value="/support/api/26.0/interaction.js"/>
    <a href="javascript:void(0);" onclick="sforce.interaction.entityFeed.refreshObject('{!case.id}', true, true, true, function(response) {alert('Case was updated: ' + response.result);});">Refresh Case</a>
</apex:page>
```
