---
title: "StandardSetController(controllerSObjects)"
domain: pages
topic: standardsetcontrollercontrollersobjects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.562Z
estimatedTokens: 90
keywords: [StandardSetController, controllerSObjects, Creates, instance, ApexPages.StandardSetController, standard, custom, objects]
---

# StandardSetController(controllerSObjects)

> Creates an instance of the ApexPages.StandardSetController class for the specified list of standard or custom
  objects.

# StandardSetController(controllerSObjects)

Creates an instance of the ApexPages.StandardSetController class for the specified list of standard or custom objects.

## Signature

public StandardSetController(List<sObject> controllerSObjects)

## Parameters

controllerSObjects

Type: List<sObject>

A List of standard or custom objects.

## Example

```

```

## Code Examples

```apex
List<account> accountList = [SELECT Name FROM Account LIMIT 20];
ApexPages.StandardSetController ssc = new ApexPages.StandardSetController(accountList);
```
