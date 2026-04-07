---
title: "Remove"
domain: mc-programmatic-content
topic: remove
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.506Z
estimatedTokens: 69
keywords: [Remove, **Overview**, **Syntax**, Examples, Function, Ordinal]
---

# Remove

# Remove

## **Overview**

Removes a previously initialized send classification and returns the status of the action

### **Syntax**

Remove()

## Example

This sample code deletes the send classification with the external key mySendClassification:

```
var sc = SendClassification.Init('mySendClassification');
var status = sc.Remove();
```

Last Updated: Jun 8, 2021

## Code Examples

```
var obj = ContentAreaObj.Init('myCA');
var status = obj.Remove();
```

```
var myProfile = DeliveryProfile.Init('myDeliveryProfile');
var status = myProfile.Remove();
```

```
var myEmail = Email.Init("myEmail");
myEmail.Remove();
```

```
var myFD = FilterDefinition.Init("myFilterDef");

myFD.Remove();
```

```
var myFolder = Folder.Init("myFolder");
myFolder.Remove();
```
