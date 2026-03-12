---
title: "Party Income Result"
domain: omnistudio
topic: party-income-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.197Z
estimatedTokens: 557
keywords: [Party, Income, Result, Output, representation]
---

# Party Income Result

> Output representation of the party income result.

# Party Income Result

Output representation of the party income result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applicationFormId | String | ID of the application form related to the party income. | Small, 61.0 | 61.0 |
| createdById | String | ID of the user who created the record. | Small, 61.0 | 61.0 |
| createdDate | String | Date when the record was created. | Small, 61.0 | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Small, 61.0 | 61.0 |
| customFields | Custom Fields Result[] | Custom fields related to the party income. | Small, 61.0 | 61.0 |
| id | String | Unique identifier of the party income. | Small, 61.0 | 61.0 |
| incomeAmount | Double | Amount of the party income. | Small, 61.0 | 61.0 |
| incomeAsOfDate | String | Timestamp for when the income was last retrieved from an external data source. | Small, 61.0 | 61.0 |
| incomeFrequency | String | Frequency of the party’s income. | Small, 61.0 | 61.0 |
| incomeSourceId | String | Source of the party’s income. | Small, 61.0 | 61.0 |
| incomeType | String | Type of income such as salary, commissions, and rentals. | Small, 61.0 | 61.0 |
| isReadOnly | Boolean | Indicates whether the party income is read only (true) or not (false). | Small, 61.0 | 61.0 |
| lastModified​ById | String | ID of the user who last modified this record. | Small, 61.0 | 61.0 |
| lastModified​Date | String | Date and time when a user last modified this record. | Small, 61.0 | 61.0 |
| name | String | Name of the party income. | Small, 61.0 | 61.0 |
| ownerId | String | ID of the user who owns this record. | Small, 61.0 | 61.0 |
| partyId | String | ID of the party record of the party income. | Small, 61.0 | 61.0 |
| partyProfileId | String | ID of the party profile record of the party income. | Small, 61.0 | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Small, 61.0 | 61.0 |
| usageType | String | Usage type of the party income. | Small, 61.0 | 61.0 |
| verification​Status | String | Verification status of the party income. | Small, 61.0 | 61.0 |

## Related Topics

- Custom Fields Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_digital_lending_custom_fields_result.htm)
