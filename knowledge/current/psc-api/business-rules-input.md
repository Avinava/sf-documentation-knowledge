---
title: "Business Rules Input"
domain: psc-api
topic: business-rules-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.848Z
estimatedTokens: 253
keywords: [Business, Rules, Input, representation, expression]
---

# Business Rules Input

> Input representation of an expression set.

# Business Rules Input

Input representation of an expression set.

JSON example 1

```

```

JSON example 2

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

You can use more than one actionContextCode for multiple sets of inputs, passed in a single API call.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputs | Map<String, Object>[] | List of inputs passed to an expression set. An input may contain multiple variables.NoteIf the expression set uses a field alias as a variable, append Id to the object alias to which the field alias belongs, and pass the ID of the source object linked to the object alias.If the expression set uses a context definition, append Id to the context definition developer name and pass the context ID as the value. | Required | 55.0 |
| options | Expression Set Options Input | The options for executing an expression set. | Optional | 55.0 |

## Code Examples

```
{
  "inputs": [
    {
      "age": "25",
      "state": "CA",
      "PatientId": "001xx000003GYjnAAG"
    }
  ],
  "options": {
    "effectiveDate": "2022-12-03T10:15:30Z",
    "useDatesOnly": "true",
    "actionContextCode": "9QLxx0000004C92GAE",
    "explainabilitySpecName": "ES_One_Explainability"
  }
}
```

```
{
  "inputs": [
    {
      "age": "25",
      "state": "CA",
      "PatientId":"001xx000003GYjnAAG",
      "__actionContextCode":"001xx000003GYjnAAG"
    }
  ],
  "options": {
    "effectiveDate": "2022-12-03T10:15:30Z",
    "useDatesOnly": "true"
  }
}
```

## Related Topics

- Expression Set Options Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_options.htm)
