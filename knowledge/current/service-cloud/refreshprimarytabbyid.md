---
title: "refreshPrimaryTabById()"
domain: service-cloud
topic: refreshprimarytabbyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.613Z
keywords: [refreshPrimaryTabById, Syntax, Arguments, Sample, Code–Visualforce, Note, Response]
---

# refreshPrimaryTabById()

# refreshPrimaryTabById()

Refreshes a primary tab specified by ID, including its subtabs. This method can't refresh subtabs with URLs to external pages or Visualforce pages. This method is only available in API version 22.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | string | ID of the primary tab to refresh. |
| activate | boolean | If true, the refreshed primary tab displays immediately. If false, the refreshed primary tab displays in the background. |
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
| success | boolean | true if the primary tab refreshed successfully; false if the primary tab didn't refresh. |