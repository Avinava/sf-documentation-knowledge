---
title: "refreshSubtabByNameAndPrimaryTabId()"
domain: service-cloud
topic: refreshsubtabbynameandprimarytabid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.624Z
keywords: [refreshSubtabByNameAndPrimaryTabId, Syntax, Arguments, Sample, Code–Visualforce, Note, Response]
---

# refreshSubtabByNameAndPrimaryTabId()

# refreshSubtabByNameAndPrimaryTabId()

Refreshes a subtab with the last known URL with the specified name and primary tab ID. This method can't refresh a subtab if the last known URL is an external page or a Visualforce page. This method is only available in API version 22.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| name | string | Name of the subtab to refresh. |
| primaryTabId | string | ID of the primary tab in which the subtab opened. |
| active | boolean | If true, the refreshed subtab displays immediately. If false, the refreshed subtab displays in the background. |
| callback | function | JavaScript method that’s called upon completion of the method. |
| fullRefresh | boolean | Enables a full refresh of the entire case feed. |

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
| success | boolean | true if the subtab refreshed successfully; false if the subtab didn't refresh. |