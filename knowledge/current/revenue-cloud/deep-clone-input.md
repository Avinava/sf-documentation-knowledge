---
title: "Deep Clone Input"
domain: revenue-cloud
topic: deep-clone-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.131Z
keywords: [Deep, Clone, Input]
---

# Deep Clone Input

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