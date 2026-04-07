---
title: "Query Definition Functions"
domain: mc-programmatic-content
topic: query-definition-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:28.313Z
estimatedTokens: 178
keywords: [Query, Definition, Functions, server-side, JavaScript, allow, manipulate, queries, via, ways, Load, Initialize]
---

# Query Definition Functions

> The Query Definition server-side JavaScript functions allow you to manipulate queries via server-side JavaScript in the following ways:

# Query Definition Functions

The Query Definition server-side JavaScript functions allow you to manipulate queries via server-side JavaScript in the following ways:

-   Create
-   Retrieve
-   Update
-   Delete
-   Run

## Load

In your server-side JavaScript code, first load the core library using this syntax:

```
Platform.Load("core","1");
```

## Initialize

To interact with a query definition via server-side JavaScript, you must first initialize the object. The code below initializes a query definition with the external key of 'myQueryDef'.

```
var qd = QueryDefinition.Init("myQueryDef");
```

Once you initialize the query definition, you can use the applicable server-side JavaScript functions.
