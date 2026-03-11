---
title: "PerformExpenseValidation"
domain: apex-reference
topic: performexpensevalidation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.559Z
keywords: [PerformExpenseValidation, Signature, Return, Value, Examples]
---

# PerformExpenseValidation

# PerformExpenseValidation

Performs validations on Party Income records.

## Signature

call(String action, Map<String, Object\> args

## Return Value

Returns a list of picklist labels for Party Income frequency.

## Examples

Output JSON example of the actions are as follows.

Output format:

{ "Required fields": "Expense Type, Member, Amount, Start Date, Frequency" }