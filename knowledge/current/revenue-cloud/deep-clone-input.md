---
title: "Deep Clone Input"
domain: revenue-cloud
topic: deep-clone-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.945Z
estimatedTokens: 166
keywords: [Deep, Clone, Input, representation, associated, record, cloned]
---

# Deep Clone Input

> Input representation of the details of the object and associated record to be
    cloned.

# Deep Clone Input

Input representation of the details of the object and associated record to be cloned.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| mainObject​ApiName | String | API name of the object. The supported object is Product2. | Required | 63.0 |
| mainRecord​Field​Values | Map<String, String> | Mapping of the API name of the field to its value. The values passed through this map are set for the created record. You can pass the Name field only through this map. | Optional | 63.0 |
| mainRecord​Id | String | ID of the record. | Required | 63.0 |

## Code Examples

```
{
  "mainRecordId": "01tSG0000028kcSYAQ",
  "mainObjectApiName": "Product2",
  "mainRecordFieldValues": {
    "Name": "New Cloud Storage"
  }
}
```
