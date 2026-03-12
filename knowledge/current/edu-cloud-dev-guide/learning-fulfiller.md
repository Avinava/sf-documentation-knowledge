---
title: "Learning Fulfiller"
domain: edu-cloud-dev-guide
topic: learning-fulfiller
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.082Z
estimatedTokens: 155
keywords: [Learning, Fulfiller, Output, representation, fulfillment, options, foundation, items]
---

# Learning Fulfiller

> Output representation of the types of fulfillment options for the learning foundation
    items.

# Learning Fulfiller

Output representation of the types of fulfillment options for the learning foundation items.

Sample Output

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| learning | Learning | Details about the learning course or program that fulfills the requirement. | Small, 62.0 | 62.0 |
| learning​OutcomeItem | Learning Outcome Item | Details about the learning outcome that fulfills the requirement. | Small, 62.0 | 62.0 |
| learning​Status | Learning Status | Status of a learning foundation item. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "fulfilledBy": [
    {
      "learningOutcome": {
        "learningOutcomeId": "0uESB00000000WI2AY",
        "duration": 4,
        "durationUnit": "Credit Hours"
      },
      "learning": {
        "type": "Learning Course",
        "learningCourseId": "0tyxx00000002ppAAA",
        "name": "Basic Calculus 1",
        "subjectAbbreviation": "CALC",
        "courseNumber": 1011,
        "minimumGrade": 3
      }
    }
  ]
}
```

## Related Topics

- Learning (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_outpu.htm)
- Learning Outcome Item (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_outcome_item_outpu.htm)
- Learning
                  Status (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_learning_statu.htm)
