---
title: "setSidebarVisible()"
domain: service-cloud
topic: setsidebarvisible
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.710Z
keywords: [setSidebarVisible, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setSidebarVisible()

# setSidebarVisible()

Shows or hides a console sidebar based on tabId and region. This method is available in API version 33.0 or later. This method isn’t supported in Lightning Console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| visible | boolean | true to show the sidebar or false to hide the sidebar. |
| tabId | string | The ID of the tab on which to show or hide the sidebar. |
| region | string | The region on the console where the sidebar is located, such as left or right, top or bottom. Regions are represented as:sforce.console.Region.LEFTsforce.console.Region.RIGHTsforce.console.Region.TOPsforce.console.Region.BOTTOM |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the method call was successful; false otherwise. |