---
title: "Retrieve Lists from an Account"
domain: mc-programmatic-content
topic: retrieve-lists-from-an-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:28.366Z
estimatedTokens: 53
keywords: [Retrieve, Account]
---

# Retrieve Lists from an Account

# Retrieve Lists from an Account

```
var lists = List.Retrieve({Property:"Name",SimpleOperator:"equals",Value:"All Subscribers"});
for(var i in lists) {
    Write(lists[i].ID + " | " + lists[i].Name + "");
}
```
