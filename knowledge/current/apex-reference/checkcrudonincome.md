---
title: "CheckCrudOnIncome"
domain: apex-reference
topic: checkcrudonincome
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.545Z
keywords: [CheckCrudOnIncome, Signature, Return, Value, Examples]
---

# CheckCrudOnIncome

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