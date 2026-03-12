---
title: "Party Income Input"
domain: omnistudio
topic: party-income-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.634Z
estimatedTokens: 356
keywords: [Party, Income, Input, representation, details, party, income.]
---

# Party Income Input

> Input representation of the details of the party income.

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

## Related Topics

- Custom Fields Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_digital_lending_custom_fields_input.htm)
