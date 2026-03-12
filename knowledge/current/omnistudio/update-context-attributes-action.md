---
title: "Update Context Attributes Action"
domain: omnistudio
topic: update-context-attributes-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.401Z
estimatedTokens: 211
keywords: [Context, Attributes, Action, instance, tags, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Update Context Attributes Action

> Update the attributes in the context instance using tags.

# Update Context Attributes Action

Update the attributes in the context instance using tags.

This action is available in API version 63.0 and later.

## Special Access Rules

Available in Developer, Enterprise, Professional, and Unlimited editions for Industries clouds where Context Service is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/updateContextAttributes

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
| nodePathAndUpdatedValues | TypestringDescriptionOptional. The JSON containing the node path and its updated values. |

## Outputs

None.

## Example

POST

This sample request is for the Update Context Attributes action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "contextId": "0000000a07da09100251752497651022c35b6150a4d04cd6a84bf1a0439cc609",
      "NodePathAndUpdatedValues": [
        {
          "nodePath": {
            "dataPath": [
              "account1",
              "contact1"
            ]
          },
          "tagValues": [
            {
              "tagName": "Contact_LastName",
              "tagValue": "UPDATED_MILLER"
            }
          ]
        }
      ]
    }
  ]
}
```
