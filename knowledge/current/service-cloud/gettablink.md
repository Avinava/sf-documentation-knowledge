---
title: "getTabLink()"
domain: service-cloud
topic: gettablink
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.061Z
keywords: [getTabLink, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getTabLink()

# getTabLink()

Retrieves the URL to a tab, or group of related tabs, from the Salesforce console. This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| level | string | Level that matches one of the Link to Share options in the Salesforce console user interface. The options are:All primary tabs and subtabs — sforce.console.TabLink.PARENT_AND_CHILDREN.Only the specified tab — sforce.console.TabLink.TAB_ONLYA standard Salesforce URL — sforce.console.TabLink.SALESFORCE_URL |
| tabId | string | Optional tab ID of the tab from which you’re retrieving the URL. If you do not pass a tab ID, the URL to the current tab is returned. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| tabLink | string | The retrieved URL. |
| success | boolean | true if the link was retrieved successfully, false if retrieving was unsuccessful. |
| callback | function | JavaScript method that’s called upon completion of the method. |