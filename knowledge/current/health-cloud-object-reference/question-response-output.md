---
title: "Question Response Output"
domain: health-cloud-object-reference
topic: question-response-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.738Z
estimatedTokens: 185
keywords: [Question, Output, assessment, metadata]
---

# Question Response Output

> Contains the response values and assessment metadata for a single question.

# Question Response Output

Contains the response values and assessment metadata for a single question.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assessment​Details | Assessment Details Output | Details of the assessment record, including name, ID, and timestamps. | Small, 66.0 | 66.0 |
| parent​Question​Identifier | String | The identifier of the parent question, if applicable. | Small, 66.0 | 66.0 |
| previous​Responses | Response Value Output[] | The list of response values provided for the specific question. | Small, 66.0 | 66.0 |
| question​Identifier | String | The unique identifier of the assessment question. | Small, 66.0 | 66.0 |

## Related Topics

- Assessment Details Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_assessment_details_output.htm)
- Response Value Output[] (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_response_value_output.htm)
