---
title: "Learning Equivalency (GET)"
domain: edu-cloud-dev-guide
topic: learning-equivalency-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:42.256Z
estimatedTokens: 191
keywords: [Learning, Equivalency, Retrieves, record, along, source, target, mappings]
---

# Learning Equivalency (GET)

> Retrieves  a learning equivalency record along
    with its source and target learning mappings.

# Learning Equivalency (GET)

Retrieves a learning equivalency record along with its source and target learning mappings.

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
| isActive | Boolean | Indicates if the equivalency is active. | Optional | 66.0 |
| sourceExternalLearningIds | String | The ID of source external learning. | Required | 66.0 |

Response body for GET

[Learning Equivalency Result](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_equivalency_result.htm "Output representation of the response for learning equivalency.")

## Code Examples

```
/connect/education/academic-operations/learning-equivalency
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/education/academic-operations/learning-equivalency
```

## Related Topics

- Learning Equivalency Result (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_equivalency_result.htm)
