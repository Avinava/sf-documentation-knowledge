---
title: "Party Income Input"
domain: omnistudio
topic: party-income-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.410Z
keywords: [Party, Income, Input]
---

# Party Income Input

# Party Income Input

Input representation of the details of the party income.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the party income. | Optional | 61.0 |
| incomeAmount | Double | Amount of the party income. | Required | 60.0 |
| incomeAsOfDate | String | Timestamp for when the income was last retrieved from an external data source. | Optional | 61.0 |
| incomeFrequency | String | Frequency of the party’s income. | Optional | 61.0 |
| incomeSourceId | String | Source of the party’s income. | Optional | 61.0 |
| incomeType | String | Type of income such as salary, commissions, and rentals. | Required | 60.0 |
| isReadOnly | Boolean | Indicates whether the party income is read only (true) or not (false). | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| relatedPerson | String | Indicates whether to associate the record to an Applicant or Party Profile record. | Required | 61 |
| usageType | String | Usage type of the party income. | Required | 61.0 |
| verification​Status | String | Status of the information verification. | Optional | 61.0 |