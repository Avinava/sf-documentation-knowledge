---
title: "Add Subscribers to a List"
domain: mc-programmatic-content
topic: add-subscribers-to-a-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.916Z
estimatedTokens: 34
keywords: [Add, Subscribers]
---

# Add Subscribers to a List

```
var l = List.Init('MyList');
l.Subscribers.Add(Request.GetQueryStringParameter('Email Address'));
```
