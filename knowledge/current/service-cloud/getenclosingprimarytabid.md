---
title: "getEnclosingPrimaryTabId()"
domain: service-cloud
topic: getenclosingprimarytabid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.013Z
keywords: [getEnclosingPrimaryTabId, Syntax, Arguments, Sample, Code–Visualforce, Note, Response]
---

# getEnclosingPrimaryTabId()

# getEnclosingPrimaryTabId()

Returns the ID of the current primary tab. This method works within a primary tab or subtab, not within the navigation tab or custom console components. This method is only available in API version 20.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the current primary tab that contains this tab. |