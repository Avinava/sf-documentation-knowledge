---
title: "CheckCrudOnExpense"
domain: apex-reference
topic: checkcrudonexpense
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.722Z
estimatedTokens: 108
keywords: [CheckCrudOnExpense, Checks, create, update, delete, access, partyExpense, entity., Examples]
---

# CheckCrudOnExpense

> Checks create, update and delete access on partyExpense
            entity.

# CheckCrudOnExpense

Checks create, update and delete access on partyExpense entity.

## Signature

call(String action, Map<String, Object\> args

## Return Value

Returns True or False based on whether create, update and delete access on the partyExpense entity is given.

## Examples

Output JSON example of the action are as follows.

Output format:

{ "isCreatable" : "true", "isUpdateable" : "true", "isDeletable": "true" }
