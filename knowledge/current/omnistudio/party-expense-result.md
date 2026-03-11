---
title: "Party Expense Result"
domain: omnistudio
topic: party-expense-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.658Z
keywords: [Party, Expense, Result]
---

# Party Expense Result

# Party Expense Result

Output representation of the party expense result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| application​FormId | String | ID of the application form associated with the party expense. | Small, 61.0 | 61.0 |
| createdById | String | ID of the user who created the record. | Small, 61.0 | 61.0 |
| createdDate | String | Date when the record was created. | Small, 61.0 | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Small, 61.0 | 61.0 |
| customFields | Custom Fields Result[] | Custom fields related to the application form product. | Small, 61.0 | 61.0 |
| expenseAs​OfDate | String | Date of the expense. | Small, 61.0 | 61.0 |
| id | String | Record ID of the party expense. | Small, 61.0 | 61.0 |
| isReadOnly | Boolean | Indicates whether the party expense is read only (true) or not (false). | Small, 61.0 | 61.0 |
| lastModified​ById | String | ID of the user who last modified this record. | Small, 61.0 | 61.0 |
| lastModified​Date | String | Date and time when a user last modified this record. | Small, 61.0 | 61.0 |
| name | String | Name of the party expense. | Small, 61.0 | 61.0 |
| ownerId | String | ID of the user who owns this record. | Small, 61.0 | 61.0 |
| partyFinancial​LiabilityId | String | ID of the party financial liability. | Small, 61.0 | 61.0 |
| partyId | String | ID of the party record. | Small, 61.0 | 61.0 |
| partyProfileId | String | ID of the party profile record. | Small, 61.0 | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Small, 61.0 | 61.0 |
| recurrence​Interval | String | Interval after which the expense is incurred. | Small, 61.0 | 61.0 |
| totalAmount | Double | Total amount of the expense. | Small, 61.0 | 61.0 |
| type | String | Type of expense. | Small, 61.0 | 61.0 |
| usageType | String | Usage type of the party expense. | Small, 61.0 | 61.0 |
| verification​Status | String | Indicates whether the party expense is verified (true) or not (false). | Small, 61.0 | 61.0 |