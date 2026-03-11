---
title: "generateConsoleUrl()"
domain: service-cloud
topic: generateconsoleurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.955Z
keywords: [generateConsoleUrl, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# generateConsoleUrl()

# generateConsoleUrl()

Generates a URL to a tab, or group of related tabs, in the Salesforce console. If any tabs include external URLs, then add the external URLs to the console’s allowlist so that they can display correctly.This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| urls | string | An array of URLs. The first URL is a primary tab and subsequent URLs are subtabs. Note that the last URL is the subtab on which the console is focused. These URLs can be standard Salesforce URLs or relative URLs. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| consoleUrl | string | Console URL that represents the array of URLs passed into Salesforce. |
| success | boolean | true if the URL was generated successfully, false if otherwise. |
| callback | function | JavaScript method that’s called upon completion of the method. |