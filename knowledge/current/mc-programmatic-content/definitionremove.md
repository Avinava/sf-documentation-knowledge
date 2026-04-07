---
title: "DefinitionRemove"
domain: mc-programmatic-content
topic: definitionremove
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.865Z
estimatedTokens: 88
keywords: [DefinitionRemove, Examples, **Overview**, **Syntax**]
---

# DefinitionRemove

## **Overview**

Remove a previously initialized send definition and return the status of the removal

### **Syntax**

DefinitionRemove()

## Examples

This sample code removes a send definition with an external key of myESD:

```
var esd = Send.Definition.Init('myESD');
var status = esd.Remove();
```

Last Updated: Jun 8, 2021
