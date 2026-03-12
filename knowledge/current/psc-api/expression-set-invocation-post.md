---
title: "Expression Set Invocation (POST)"
domain: psc-api
topic: expression-set-invocation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.310Z
estimatedTokens: 338
keywords: [Expression, Invocation, POST, Invokes, Business, Rule, Engine]
---

# Expression Set Invocation (POST)

> Invokes expression sets in Business Rule Engine.

# Expression Set Invocation (POST)

Invokes expression sets in Business Rule Engine.

Resource

```

```

Resource Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

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

Response body for POST

[Business Rules Result](atlas.en-us.psc_api.meta/psc_api/connect_responses_business_rules_result.htm "Output representation of executing an expression set.")

## Code Examples

```
/connect/business-rules/expressionSet/${expressionSetName}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/business-rules/expressionSet/${expressionSetName}
```

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
- Business Rules Result (atlas.en-us.psc_api.meta/psc_api/connect_responses_business_rules_result.htm)
