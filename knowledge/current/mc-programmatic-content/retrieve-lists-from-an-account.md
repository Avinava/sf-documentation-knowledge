---
title: "Retrieve Lists from an Account"
domain: mc-programmatic-content
topic: retrieve-lists-from-an-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.795Z
estimatedTokens: 53
keywords: [Retrieve, Account]
---

# Retrieve Lists from an Account

```
var lists = List.Retrieve({Property:"Name",SimpleOperator:"equals",Value:"All Subscribers"});
for(var i in lists) {
    Write(lists[i].ID + " | " + lists[i].Name + "");
}
```
