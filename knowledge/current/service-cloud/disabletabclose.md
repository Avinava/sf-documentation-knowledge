---
title: "disableTabClose()"
domain: service-cloud
topic: disabletabclose
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.819Z
keywords: [disableTabClose, Note, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# disableTabClose()

# disableTabClose()

Prevents a user from closing a tab or a subtab. If the ID parameter doesn’t specify a tab, the enclosing tab is used. You can also use this method to re-enable a tab that has been disabled. Available in API version 36.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

-   If you disable subtabs from closing, the primary tab is also disabled from closing.
-   If a record is deleted whose primary tab is disabled, the tab is forcibly closed.
-   If a record is deleted whose subtab is disabled, the subtab is not closed.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| disable | boolean | Specifies whether to disable the tab. If true, the user can’t close the tab. If false, the user can close the tab. |
| tabId | string | The tabId for the tab to enable or disable. Use false to automatically select the enclosing tab or subtab without needing to specify a tabId. The enclosing tabId can’t be inferred when this call is made from outside a sidebar component. For example, if you call this method from a footer widget, specify the tabId. If the tabId is for a “Details” subtab of a primary tab, the primary tabId is used instead. |
| callback | function | JavaScript method that’s called upon completion of the method. The callback is passed a response object. See response information below. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the action completed successfully, false otherwise. |
| message | string | If the action completed successfully, message contains the affected tabId. If the action failed, message contains the error message. |