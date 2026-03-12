---
title: "Query Context Tags Action"
domain: omnistudio
topic: query-context-tags-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.382Z
estimatedTokens: 250
keywords: [Query, Context, Tags, Action, tag, instance, associated, definition, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Query Context Tags Action

> Query the tag values from an instance that are associated with a context
        definition.

# Query Context Tags Action

Query the tag values from an instance that are associated with a context definition.

This action is available in API version 63.0 and later.

## Special Access Rules

Available in Developer, Enterprise, Professional, and Unlimited editions for Industries clouds where Context Service is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/queryContextTags

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contextId | TypestringDescriptionRequired. The ID of the context instance. |
| tagsList | TypestringDescriptionRequired. A collection of tags to be queried. |

## Outputs

| Output | Details |
| --- | --- |
| queryResult | TypestringDescriptionThe output of the queried context instance. |

## Example

POST

This sample request is for the Query Context Tags action.

```

```

This sample response is for the Query Context Tags action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "contextId": "0000000a07da09100251752497651022c35b6150a4d04cd6a84bf1a0439cc609",
      "tagList": [
        "Account_Name",
        "Contact_LastName"
      ]
    }
  ]
}
```

```
{
  "actionName": "queryContextTags",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outputValues": {
    "queryResult": {
      "Contact_LastName": [
        {
          "tagValue": "Miller",
          "dataPath": [
            "0000000a07da09100251752497651022c35b6150a4d04cd6a84bf1a0439cc609",
            "account1",
            "contact1"
          ],
          "eTag": "fba12e2955bf4a46354fee73ee8b238c",
          "weakEtag": 0
        }
      ],
      "Account_Name": [
        {
          "tagValue": "AcmeFlow",
          "dataPath": [
            "0000000a07da09100251752497651022c35b6150a4d04cd6a84bf1a0439cc609",
            "account1"
          ],
          "eTag": "fa0867f98939f191957687c1456715f7",
          "weakEtag": 0
        }
      ]
    }
  },
  "sortOrder": -1,
  "version": 1
}
```
