---
title: "Add or Update the Translated Value of Multiple Survey Fields in One or More
		Languages"
domain: rest-api
topic: add-or-update-the-translated-value-of-multiple-survey-fields-in-one-or-more-lang
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.118Z
estimatedTokens: 339
keywords: [Add, Translated, Multiple, Survey, Languages, already, resource, REST, API, version, 48.0, later]
---

# Add or Update the Translated Value of Multiple Survey Fields in One or More
		Languages

> If one or more survey fields can be translated or are already translated, you can add or
		update the translated values of the survey fields in the languages into which survey fields
		can be translated. This resource is available in REST API version 48.0 and
		later.

# Add or Update the Translated Value of Multiple Survey Fields in One or More Languages

If one or more survey fields can be translated or are already translated, you can add or update the translated values of the survey fields in the languages into which survey fields can be translated. This resource is available in REST API version 48.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This URI can only be used for the flow process type Survey.

## Syntax

URI

/services/data/vXX.X/localizedvalue/records/upsert

Formats

JSON

HTTP methods

POST

Request body JSON example

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| developerName | Required. Developer name of the flow field. |
| language | Required. Language into which the flow field is translated. |
| value | Required. New or updated value of the flow field. |

Response parameters

| Parameter | Description |
| --- | --- |
| createdBy | ID of the user who translated the flow field. |
| createdDate | Date and time the flow field was translated. |
| developerName | Developer name of the flow field. |
| language | Language into which the flow field was translated. |
| value | Updated value of the flow field. |
| isOutofDate | Indicates if the flow field is out of date. |

## Example

```

```

## Code Examples

```
[
  {
    "developerName": "Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel",
    "language": "en_US",
    "value": "China"
  },
  {
    "developerName": "Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel",
    "language": "zh_CN",
    "value": "中國"
  }
]
```

```
[
  {
    "createdBy": "005xxx",
    "createdDate": "2018-09-14T00:10:30Z",
    "developerName": "Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel",
    "language": "en_US",
    "value": "China",
    "isOutOfDate": false
  },
  {
    "createdBy": "005xxx",
    "createdDate": "2018-09-14T00:10:30Z",
    "developerName": "Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel",
    "language": "zh_CN",
    "value": "中國",
    "isOutOfDate": false
  }
]
```
