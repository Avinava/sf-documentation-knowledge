---
title: "Deep Clone (POST)"
domain: revenue-cloud
topic: deep-clone-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.261Z
keywords: [Deep, Clone, POST]
---

# Deep Clone (POST)

# Deep Clone (POST)

Copy related records of an object along with the main product record.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| mainObject​ApiName | String | API name of the object. The supported object is Product2. | Required | 63.0 |
| mainRecord​Field​Values | Map<String, String> | Mapping of the API name of the field to its value. The values passed through this map are set for the created record. You can pass the Name field only through this map. | Optional | 63.0 |
| mainRecord​Id | String | ID of the record. | Required | 63.0 |

Response body for POST

[Deep Clone Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_deep_clone_response.htm "Output representation of the details of the cloned record.")