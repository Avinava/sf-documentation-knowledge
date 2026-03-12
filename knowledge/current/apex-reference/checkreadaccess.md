---
title: "CheckReadAccess"
domain: apex-reference
topic: checkreadaccess
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.727Z
estimatedTokens: 87
keywords: [CheckReadAccess, Checks, read, access, partyIncome, partyExpense, entities., Examples]
---

# CheckReadAccess

> Checks for read access on the partyIncome and partyExpense
            entities.

# CheckReadAccess

Checks for read access on the partyIncome and partyExpense entities.

## Signature

call(String action, Map<String, Object\> args

## Return Value

Returns True or False based on whether read access is granted or not.

## Examples

Output JSON example of the action are as follows.

Output format:

{ "isAccessible" : "true" }
