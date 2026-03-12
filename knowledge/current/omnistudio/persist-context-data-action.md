---
title: "Persist Context Data Action"
domain: omnistudio
topic: persist-context-data-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.329Z
estimatedTokens: 423
keywords: [Persist, Context, Data, Action, Store, cached, context, data, associated, mapping, Salesforce, record., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs]
---

# Persist Context Data Action

> Store cached context data associated with a context mapping ID in a Salesforce
        record.

# Persist Context Data Action

Store cached context data associated with a context mapping ID in a Salesforce record.

This action is available in API version 59.0 and later.

## Special Access Rules

Available in Developer, Enterprise, Professional, and Unlimited editions for Industries clouds where Context Service is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/persistContextData

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contextId | TypestringDescriptionRequired. The ID of the context data record with cached data that's to be stored in the database. |
| contextMappingId | TypestringDescriptionOptional. The Context Mapping record ID or Name that's used to transform cached context data into the associated fields of the related Salesforce record. |
| trackingId | TypestringDescriptionOptional. The ID of a Context Mapping record that's used to transform cached context data into the associated fields of the related Salesforce record. |

## Outputs

| Output | Details |
| --- | --- |
| referenceId | TypestringDescriptionThe ID of a response event that's used to track the request processing status and to get the full request response. |

## Usage

Persist Context Data invocable action is a wrapper over Persist Context data Connect API. It provides the ability to store the context data present in cache to database. Any update in context data can be persisted in database, if required.

## Example

POST

This sample request is for the Persist Context Data action.

```

```

This sample response is for the Persist Context Data action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "contextId": "0000000a07da09100251752497651022c35b6150a4d04cd6a84bf1a0439cc609",
      "contextMappingId": "16Pxx0000004CCGEA2",
      "trackingId": "16Pxx0000004CCGEA2"
    }
  ]
}
```

```
{
  "actionName": "persistContextData",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outputValues": {
    "referenceId": "16Pxx0000004CAeEAM"
  },
  "sortOrder": -1,
  "version": 1
}
```
