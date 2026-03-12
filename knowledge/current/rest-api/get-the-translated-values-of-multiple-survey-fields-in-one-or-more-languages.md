---
title: "Get the Translated Values of Multiple Survey Fields in One or More Languages"
domain: rest-api
topic: get-the-translated-values-of-multiple-survey-fields-in-one-or-more-languages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.135Z
estimatedTokens: 310
keywords: [Translated, Multiple, Survey, Languages, view, resource, REST, API, versions, 48.0, later]
---

# Get the Translated Values of Multiple Survey Fields in One or More Languages

> After survey fields are translated into one or more languages, you can view the
		translated values of multiple survey fields in the translated languages. This resource is
		available in REST API versions 48.0 and later.

# Get the Translated Values of Multiple Survey Fields in One or More Languages

After survey fields are translated into one or more languages, you can view the translated values of multiple survey fields in the translated languages. This resource is available in REST API versions 48.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This URI can only be used for the flow process type Survey.

## Syntax

URI

/services/data/vXX.X/localizedvalue/records/get

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
| language | Required. Language into which the flow field was translated. |

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
[
  {
     "developerName": "Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel",
     "language": "en_US"
  },
  {
     "developerName": "Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel",
     "language": "zh_CN"
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
    "isOutOfDate": true
  },
  {
    "createdBy": "005xxx",
    "createdDate": "2018-09-14T00:10:30Z",
    "developerName": "Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel",
    "language": "zh_CN",
    "value": "中國",
    "isOutOfDate": true
  }
]
```
