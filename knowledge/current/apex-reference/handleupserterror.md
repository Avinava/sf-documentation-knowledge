---
title: "HandleUpsertError"
domain: apex-reference
topic: handleupserterror
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.775Z
estimatedTokens: 173
keywords: [HandleUpsertError, Helper, constructs, error, upsert, partyIncome, partyExpense, record, Examples]
---

# HandleUpsertError

> Helper method that constructs the error response for upsert of a
            partyIncome or partyExpense record.

# HandleUpsertError

Helper method that constructs the error response for upsert of a partyIncome or partyExpense record.

## Signature

call(String action, Map<String, Object\> args

## Return Value

Returns a list of errors encountered while upserting the record in the database.

## Examples

Input and output JSON example of the action are as follows.

Input format:

\[ { "Name": "PI-0000000003", "UsageType": "CashFlow", "IncomeFrequency": "Monthly", "IncomeType": "Salary", "Id": "2m3SG000007dkxxYAA", "IncomeAmount": 999.99, "PartyId": "001SG000004TCxxYAG", "IncomeStatus": "Active", "StartDate": "2024-01-29T08:00:00.000Z" } \]

Output format:

\[ { "UpsertError“: "Invalid Id“ } \]
