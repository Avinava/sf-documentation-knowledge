---
title: "Delete Context Cache Action"
domain: omnistudio
topic: delete-context-cache-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.332Z
estimatedTokens: 220
keywords: [Context, Cache, Action, instance, in-memory, provided, removes, cached, data, maintained, service, performing, any, database, write]
---

# Delete Context Cache Action

> Delete the specified context instance from the in-memory context cache using the
        provided context ID. This action removes the cached data maintained by the context cache
        service without performing any database write operations.

# Delete Context Cache Action

Delete the specified context instance from the in-memory context cache using the provided context ID. This action removes the cached data maintained by the context cache service without performing any database write operations.

This action is available in API version 63.0 and later.

## Special Access Rules

Available in Developer, Enterprise, Professional, and Unlimited editions for Industries clouds where Context Service is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/deleteContextCache

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contextId | TypestringDescriptionRequired. ID of the context instance. |

## Outputs

None.

## Example

POST

This sample request is for the Delete Context Cache action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "contextId": "0000000a07da09100251752497651022c35b6150a4d04cd6a84bf1a0439cc609"
    }
  ]
}
```
