---
title: "Portfolio Functions"
domain: mc-programmatic-content
topic: portfolio-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.725Z
estimatedTokens: 165
keywords: [Load, Initialization, Portfolio, Functions, allow, via, server-side, JavaScript, contained, Marketing, Cloud, account]
---

> Portfolio functions allow access via server-side JavaScript to the Portfolio contained in your Marketing Cloud account.

# Portfolio Functions

Portfolio functions allow access via server-side JavaScript to the Portfolio contained in your Marketing Cloud account.

## Load

Use the Portfolio Server-Side JavaScript Functions In your server-side JavaScript code, first load the core library using this syntax:

```
Platform.Load("core","1");
```

## Initialization

To interact with a portfolio object via server-side JavaScript, you must first initialize the object. The code below initializes an email with the external key of myPortfolioCK:

```
var portObj = Portfolio.Init('myPortfolioCK');
```

Once you initialize the portfolio object, you can use the applicable functions.
