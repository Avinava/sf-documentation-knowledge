---
title: "PerformIncomeValidation"
domain: apex-reference
topic: performincomevalidation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.779Z
estimatedTokens: 658
keywords: [PerformIncomeValidation, Performs, validations, Party, Income, records, Ensure, start, date, earlier, end, Examples]
---

# PerformIncomeValidation

> Performs validations on Party Income records. Ensure that the
            start date is not earlier than the end date.

# PerformIncomeValidation

Performs validations on Party Income records. Ensure that the start date is not earlier than the end date.

## Signature

call(String action, Map<String, Object\> args

## Return Value

Returns a list of picklist labels for Party Income type.

## Examples

Input and output JSON example of the actions are as follows.

Input format:

\[ { "IncomeFrequency": "Weekly", "IncomeFrequencyLabelObject": { "value": "Weekly", "label": "Weekly" }, "MemberOptionsList": \[ { "value": "001OG00000xx6gAYAQ", "label": "Okee PA" }, { "value": "id2", "label": "Name2" } \], "IsHousehold": true, "IncomeAmount": 100, "IncomeStatusOptions": \[ { "value": "Active", "label": "Active" }, { "value": "Inactive", "label": "Inactive" } \], "PartyId": "001OG00000xx6gAYAQ", "IncomeStatus": "Active", "Party": { "Name": "Okee PA", "Id": "001OG00000xx6gAYAQ" }, "IncomeTypeOptions": \[ { "value": "Salary", "label": "Salary" }, { "value": "Commission", "label": "Commission" }, { "value": "Fees", "label": "Fees" }, { "value": "Rent", "label": "Rent" } \], "StartDate": "2024-02-02T00:00:00.000Z", "Name": "PI-0000000009", "FrequencyOptions": \[ { "value": "Weekly", "label": "Weekly" }, { "value": "Monthly", "label": "Monthly" }, { "value": "Yearly", "label": "Yearly" } \], "UsageType": "CashFlow", "IncomeId": "2m3OG000000009xxAQ", "IsPersonAccount": false, "IncomeTypeLabelObject": { "value": "Salary", "label": "Salary" } } \]

Output format:

\[ { "dateErrorMessage": null, "IncomeFrequency": "Weekly", "IncomeFrequencyLabelObject": { "value": "Weekly", "label": "Weekly" }, "MemberOptionsList": \[ { "value": "001OG000003f6gAYAQ", "label": "Okee PA" }, { "value": "id2", "label": "Name2" } \], "requiredFieldErrorMessage": "Required fields:Type", "IsHousehold": true, "IncomeAmount": 100, "PartyId": "001OG000003f6gAYAQ", "IncomeStatusOptions": \[ { "value": "Active", "label": "Active" }, { "value": "Inactive", "label": "Inactive" } \], "Party": { "Name": "Okee PA", "Id": "001OG000003f6gAYAQ" }, "IncomeStatus": "Active", "hasUpsertError": false, "IncomeTypeOptions": \[ { "value": "Salary", "label": "Salary" }, { "value": "Commission", "label": "Commission" }, { "value": "Fees", "label": "Fees" }, { "value": "Rent", "label": "Rent" } \], "StartDate": "2024-02-02T00:00:00.000Z", "Name": "PI-0000000009", "FrequencyOptions": \[ { "value": "Weekly", "label": "Weekly" }, { "value": "Monthly", "label": "Monthly" }, { "value": "Yearly", "label": "Yearly" } \], "UsageType": "CashFlow", "IncomeId": "2m3OG000000009IYAQ", "IsPersonAccount": false, "IncomeTypeLabelObject": { "value": "Salary", "label": "Salary" } } \]
