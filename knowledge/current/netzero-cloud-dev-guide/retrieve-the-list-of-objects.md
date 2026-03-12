---
title: "Retrieve the List of Objects"
domain: netzero-cloud-dev-guide
topic: retrieve-the-list-of-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.309Z
estimatedTokens: 338
keywords: [Retrieve, Objects, feature]
---

# Retrieve the List of Objects

> Retrieve the list of objects for a specified
    feature.

# Retrieve the List of Objects

Retrieve the list of objects for a specified feature.

Resource

```

```

Resource Example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entityType | String | The type of objects. The API returns only the objects filtered by the object type. | Optional | 58.0 |
| limit | Integer | The maximum number of objects that are returned for a single request.NoteTo configure pagination, either provide values for the offset and limit parameters together, or provide no values, at all. If neither offset nor limit parameters are provided, then all of the available records are returned. | Optional | 58.0 |
| offset | Integer | The starting point within the sorted list of objects.NoteTo configure pagination, either provide values for the offset and limit parameters together, or provide no values, at all. If neither offset nor limit parameters are provided, then all of the available records are returned. | Optional | 58.0 |

Response body for GET

[Feature Objects Result](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_feature_objects_result.htm "Output representation of the fetch feature object request.")

## Code Examples

```
/connect/industries/${featureName}/objects
```

```
/connect/industries/dataloading/objects?entityType=standard&offset=0&limit=100
```

## Related Topics

- Feature Objects Result (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_feature_objects_result.htm)
