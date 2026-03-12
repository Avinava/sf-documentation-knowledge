---
title: "Add or Change the Translation of a Survey Field"
domain: rest-api
topic: add-or-change-the-translation-of-a-survey-field
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.114Z
estimatedTokens: 329
keywords: [Add, Change, Translation, Survey, translated, already, particular, language, resource, REST, API, version, 48.0, later]
---

# Add or Change the Translation of a Survey Field

> If a survey field can be translated or is already translated into a particular language,
		you can add or change the translated value of the survey field. This resource is available
		in REST API version 48.0 and later.

# Add or Change the Translation of a Survey Field

If a survey field can be translated or is already translated into a particular language, you can add or change the translated value of the survey field. This resource is available in REST API version 48.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This URI can only be used for the flow process type Survey.

## Syntax

URI

/services/data/vXX.X/localizedvalue/record/developerName/language

Formats

JSON

HTTP methods

POST

Authentication

Authorization: Bearer token

Request body JSON example

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| developerName | Optional. Developer name of the flow field. |
| language | Optional Translated language of the flow field. |
| value | Required. Translated value of the flow field. |

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
"value": "China"
}
```

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
