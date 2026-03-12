---
title: "Deactivating a Push Topic"
domain: api-streaming
topic: deactivating-a-push-topic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.305Z
estimatedTokens: 54
keywords: [Deactivating, Push, Topic, temporarily, deactivate, PushTopic, rather, deleting, setting, isActive]
---

# Deactivating a Push Topic

> You can temporarily deactivate a PushTopic, rather than deleting it, by setting the isActive field to false.

# Deactivating a Push Topic

You can temporarily deactivate a PushTopic, rather than deleting it, by setting the isActive field to false.

To deactivate a PushTopic by Id, execute the following Apex code:

```

```

## Code Examples

```
PushTopic pt = new PushTopic(Id='0IFD0000000008jOAA', IsActive = false);
update(pt);
```
