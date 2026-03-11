---
title: "CheckReadAccess"
domain: apex-reference
topic: checkreadaccess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.546Z
keywords: [CheckReadAccess, Signature, Return, Value, Examples]
---

# CheckReadAccess

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