---
title: "onObjectUpdate() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: onobjectupdate-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.884Z
estimatedTokens: 267
keywords: [onObjectUpdate, Salesforce, Classic, Visualforce, pages, want, custom, publishers, Case, Feed, Usage, Arguments, Sample, Code–JavaScript]
---

# onObjectUpdate() for Salesforce Classic for Salesforce Classic

> Use this method with Visualforce pages you want to use as custom
publishers in Case Feed.

# onObjectUpdate() for Salesforce Classic for Salesforce Classic

## Usage

Registers a function to call when case fields, the feed, or related list data have changed on records that are displayed with a feed-based layout.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

Use this method with Visualforce pages you want to use as custom publishers in Case Feed.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| fieldsUpdated | boolean | true if one or more case fields were updated. |
| relatedListsUpdated | boolean | true if one or more case related lists were updated. |
| feedUpdated | boolean | true if the case feed was updated. |

## Code Examples

```
sforce.interaction.entityFeed.onObjectUpdate(callback:function)
```

```
<apex:page standardController="Case">
    <apex:includeScript value="/support/api/26.0/interaction.js"/>
    <script type="text/javascript">
        var callback = function(response) {
            alert('Case was updated. Fields = ' + response.fieldsUpdated +
            ' Related lists = ' + response.relatedListsUpdated + ' Feed = ' + 
              response.feedUpdated);
        };
        //Invokes API method
        sforce.interaction.entityFeed.onObjectUpdate(callback);
    </script>    
</apex:page>
```
