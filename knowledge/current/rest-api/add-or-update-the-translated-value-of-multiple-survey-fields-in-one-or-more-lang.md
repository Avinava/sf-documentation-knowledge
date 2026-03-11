---
title: "Add or Update the Translated Value of Multiple Survey Fields in One or More
		Languages"
domain: rest-api
topic: add-or-update-the-translated-value-of-multiple-survey-fields-in-one-or-more-lang
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.146Z
keywords: [Add, Update, Translated, Value, Multiple, Survey, Fields, Languages, Note, Syntax, Example]
---

# Add or Update the Translated Value of Multiple Survey Fields in One or More
		Languages

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