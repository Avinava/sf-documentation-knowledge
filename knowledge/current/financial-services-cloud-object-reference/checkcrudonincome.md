---
title: "CheckCrudOnIncome"
domain: financial-services-cloud-object-reference
topic: checkcrudonincome
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.043Z
estimatedTokens: 107
keywords: [CheckCrudOnIncome, Checks, access, partyIncome, entity, Examples]
---

# CheckCrudOnIncome

> Checks create, update and delete access on partyIncome
            entity.

# CheckCrudOnIncome

Checks create, update and delete access on partyIncome entity.

## Signature

call(String action, Map<String, Object\> args

## Return Value

Returns True or False based on whether create, update and delete access on the partyIncome entity is given.

## Examples

Output JSON example of the action are as follows.

Output format:

{ "isCreatable" : "true", "isUpdateable" : "true", "isDeletable": "true" }
