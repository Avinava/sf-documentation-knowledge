---
title: "Single
    Achievement Mapping Input"
domain: edu-cloud-dev-guide
topic: single-achievement-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.734Z
estimatedTokens: 314
keywords: [Achievement, Mapping, Input, representation, that’s, associated, learning, record]
---

# Single
    Achievement Mapping Input

> Input representation of a mapping that’s associated with an existing learning achievement
    record.

# Single Achievement Mapping Input

Input representation of a mapping that’s associated with an existing learning achievement record.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| course​ExternalId | Edu External ID Details Input | External ID of the course that’s associated with the learning achievement. | Optional | 62.0 |
| duration | Double | Allocated duration to complete the learning achievement. | Optional | 62.0 |
| durationUnit | String | Unit of the duration that’s allocated to complete the learning achievement. | Optional | 62.0 |
| isPrimary | Boolean | Indicates whether the outcome is primary (true) or not (false). | Optional | 62.0 |
| learning​AchievementId | String | ID of the learning achievement record that refers to an existing learning achievement. | Optional | 62.0 |
| learningId | String | ID of the learning course or program that the learning achievement is associated with. | Required | 62.0 |
| learning​OutcomeId | String | ID of the outcome record that’s associated with the learning achievement. | Optional | 62.0 |
| minimumGrade | Double | Minimum grade point average required for an achievement. | Optional | 62.0 |

## Code Examples

```
{
  "courseExternalId": {
    "fieldName": "external_course_id",
    "fieldValue": "12345"
  },
  "duration": 4,
  "durationUnit": "Credit Hours",
  "isPrimary": true,
  "learningAchievementId": "0u9xx000000026fAAA",
  "learningId": "0tyxx000000123dABC",
  "learningOutcomeId": "0ttxx0000000456ABC",
  "minimumGrade": 3.5
}
```

## Related Topics

- Edu External ID
                        Details Input (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_edu_external_id_detail.htm)
