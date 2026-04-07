---
title: "Learning Equivalency ID (GET)"
domain: edu-cloud-dev-guide
topic: learning-equivalency-id-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:29.363Z
estimatedTokens: 167
keywords: [Learning, Equivalency]
---

> Returns a single learning equivalency by its ID.

# Learning Equivalency ID (GET)

Returns a single learning equivalency by its ID.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| learningEquivalencyId | String | The ID of the learning equivalency. | Required | 66.0 |

Response body for GET

[Learning Equivalency Item](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_equivalency_output_item.htm "Output representation of a single learning equivalency with its source and target mappings.")

## Code Examples

```
/connect/education/academic-operations/learning-equivalency/learningEquivalencyId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/academic-operations/learning-equivalency/1VXSG000000015l4AA
```

## Related Topics

- Learning Equivalency Item (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_equivalency_output_item.htm)
