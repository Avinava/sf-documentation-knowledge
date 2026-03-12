---
title: "Delete the Translated Value of a Survey Field"
domain: rest-api
topic: delete-the-translated-value-of-a-survey-field
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.257Z
estimatedTokens: 196
keywords: [Delete, Translated, Survey, Field, After, survey, field, translated, particular, language, delete, field., resource, REST, API, version, 48.0, later., Note, Syntax]
---

# Delete the Translated Value of a Survey Field

> After a survey field is translated into a particular language, you can delete the
		translated value of the survey field. This resource is available in REST API version 48.0
		and later.

# Delete the Translated Value of a Survey Field

After a survey field is translated into a particular language, you can delete the translated value of the survey field. This resource is available in REST API version 48.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This URI can only be used for the flow process type Survey.

## Syntax

URI

/services/data/vXX.X/localizedvalue/record/developerName/language

Formats

JSON

HTTP methods

DELETE

Request parameters

| Parameter | Description |
| --- | --- |
| developerName | The developer name of the flow field. For example, Flow.Flow.MyFlow.1.Choice.Choice_1_Master.InputLabel |
| language | Language of the translated field. Possible values are:danl_NLfifrde |
