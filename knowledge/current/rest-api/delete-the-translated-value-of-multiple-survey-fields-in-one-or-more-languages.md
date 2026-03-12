---
title: "Delete the Translated Value of Multiple Survey Fields in One or More Languages"
domain: rest-api
topic: delete-the-translated-value-of-multiple-survey-fields-in-one-or-more-languages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.261Z
estimatedTokens: 194
keywords: [Delete, Translated, Multiple, Survey, Fields, Languages, After, survey, fields, translated, languages, delete, values, multiple, fields., resource, REST, API, version, 48.0]
---

# Delete the Translated Value of Multiple Survey Fields in One or More Languages

> After survey fields are translated into one or more languages, you can delete the
		translated values of multiple survey fields. This resource is available in REST API version
		48.0 and later.

# Delete the Translated Value of Multiple Survey Fields in One or More Languages

After survey fields are translated into one or more languages, you can delete the translated values of multiple survey fields. This resource is available in REST API version 48.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This URI can only be used for the flow process type Survey.

## Syntax

URI

/services/data/vXX.X/localizedvalue/records/delete

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
