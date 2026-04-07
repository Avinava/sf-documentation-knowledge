---
title: "Filter Definition Functions"
domain: mc-programmatic-content
topic: filter-definition-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.137Z
estimatedTokens: 176
keywords: [Load, Filter, Definition, Functions, Server-side, JavaScript, allow, manipulate, filters, via, ways]
---

> The Filter Definition Server-side JavaScript functions allow you to manipulate data filters via server-side JavaScript in these ways:

# Filter Definition Functions

The Filter Definition Server-side JavaScript functions allow you to manipulate data filters via server-side JavaScript in these ways:

-   Create
-   Retrieve
-   Update
-   Delete

## Load

In your server-side JavaScript code, first load the core library using this syntax:

```
Platform.Load("core","1");
```

Initialize To interact with a filter definition via server-side JavaScript, you must first initialize the object. The code below initializes a filter definition with the external key of myFilterDef.

```
var fd = FilterDefinition.Init("myFilterDef");
```

Once you initialize the filter definition, you can use the applicable server-side JavaScript functions.
