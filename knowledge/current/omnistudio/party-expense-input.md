---
title: "Party Expense Input"
domain: omnistudio
topic: party-expense-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.379Z
keywords: [Party, Expense, Input]
---

# Party Expense Input

# Party Expense Input

Input representation of the party expense.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the party expense. | Optional | 61.0 |
| expenseAs​OfDate | String | Date of the expense. | Optional | 61.0 |
| isReadOnly | Boolean | Indicates whether the party expense is read only (true) or not (false). | Optional | 61.0 |
| partyFinancial​LiabilityId | String | ID of the party financial liability record. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| recurrence​Interval | String | Interval after which the expense is incurred. | Optional | 61.0 |
| relatedPerson | String | Indicates whether to associate the record to an Applicant or Party Profile record. | Required | 61 |
| totalAmount | Double | Total expense amount. | Required | 61.0 |
| type | String | Type of expense. | Required | 61.0 |
| usageType | String | Usage type of the party expense. | Required | 61.0 |
| verification​Status | String | Indicates whether the party expense is verified (true) or not (false). | Optional | 61.0 |