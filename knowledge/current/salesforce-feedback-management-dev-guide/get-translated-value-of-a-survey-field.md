---
title: "Get Translated Value of a Survey Field"
domain: salesforce-feedback-management-dev-guide
topic: get-translated-value-of-a-survey-field
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.560Z
estimatedTokens: 338
keywords: [Translated, Survey, particular, language, resource, REST, API, version, 48.0, later]
---

# Get Translated Value of a Survey Field

> After a survey field is translated into a particular language, you can use this resource
		to get the translated value of the survey field. This resource is available in REST API
		version 48.0 and later.

# Get Translated Value of a Survey Field

After a survey field is translated into a particular language, you can use this resource to get the translated value of the survey field. This resource is available in REST API version 48.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

This URI can only be used for the flow process type Survey.

## Syntax

URI

/services/data/vXX.X/localizedvalue/record/developerName/language

Formats

JSON

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None

Request parameters

| Path Parameter | Description |
| --- | --- |
| developerName | Required. The developer name of the flow field. For example, Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel |
| language | Required. Language of the translated field. Possible values are:danl_NLfifrde |

Response parameters

| Parameter | Description |
| --- | --- |
| createdBy | ID of the user who translated the flow field. |
| createdDate | Date and time the flow field was translated. |
| developerName | Developer name of the flow field. |
| language | Language into which the flow field was translated. |
| value | Translated value of the flow field. |
| isOutofDate | Indicates if the flow field is out of date. |

## Example

```

```

## Code Examples

```
{
  "createdBy": "005xxx",
  "createdDate": "2018-09-14T00:10:30Z",
  "developerName": "Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel",
  "language": "zh_CN",
  "value": "中國",
  "isOutOfDate": true
}
```
