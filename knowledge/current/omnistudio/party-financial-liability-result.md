---
title: "Party Financial Liability Result"
domain: omnistudio
topic: party-financial-liability-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.178Z
estimatedTokens: 809
keywords: [Party, Financial, Liability, Result, Output, representation]
---

# Party Financial Liability Result

> Output representation of the party financial liability result.

# Party Financial Liability Result

Output representation of the party financial liability result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applicantId | String | Applicant ID of the party financial liability. | Small, 61.0 | 61.0 |
| application​FormId | String | ID of the application form of the party financial liability. | Small, 61.0 | 61.0 |
| createdById | String | ID of the user who created the record. | Small, 61.0 | 61.0 |
| createdDate | String | Date when the record was created. | Small, 61.0 | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Small, 61.0 | 61.0 |
| customFields | Custom Fields Result[] | Custom fields related to the application form product. | Small, 61.0 | 61.0 |
| estimated​MonthlyPayment | Double | Estimated monthly payment. | Small, 61.0 | 61.0 |
| id | String | Unique identifier of the product financial liability. | Small, 61.0 | 61.0 |
| interestRate | Double | Interest rate for the product. | Small, 61.0 | 61.0 |
| isReadOnly | Boolean | Indicates whether the party financial liability is read only (true) or not (false). | Small, 61.0 | 61.0 |
| isRepayment​Active | Boolean | Indicates whether the party financial liability is being paid (true) or not (false). | Small, 61.0 | 61.0 |
| lastModified​ById | String | ID of the user who last modified this record. | Small, 61.0 | 61.0 |
| lastModified​Date | String | Date and time when a user last modified this record. | Small, 61.0 | 61.0 |
| lender | String | Branch unit that owns the party financial liability. | Small, 61.0 | 61.0 |
| liabilityAccount​Identifier | String | Unique identifier of the liability account. | Small, 61.0 | 61.0 |
| name | String | Name of the application form product record. | Small, 61.0 | 61.0 |
| outstanding​Balance | Double | Remaining amount of the liability that the party owes. | Small, 61.0 | 61.0 |
| ownerId | String | ID of the user who owns this record. | Small, 61.0 | 61.0 |
| partyFinancial​LiabilityBorrower | Party Financial Liability Borrower Result[] | Details of the borrower associated with the party financial liability. | Small, 61.0 | 61.0 |
| partyId | String | ID of the party record associated with the party financial liability. | Small, 61.0 | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Small, 61.0 | 61.0 |
| sharePercent | Double | Percentage of the asset shared between the primary and additional owner. | Small, 61.0 | 61.0 |
| shareType | String | Details of the share type. | Small, 61.0 | 61.0 |
| sourceSystem​Identifier | String | Unique identifier of the record in an external system. | Small, 61.0 | 61.0 |
| startDate | String | Start date of the liability. | Small, 61.0 | 61.0 |
| status | String | Status of the liability. | Small, 61.0 | 61.0 |
| term | String | Term of the liability. | Small, 61.0 | 61.0 |
| type | String | Type of the liability. | Small, 61.0 | 61.0 |
| usageType | String | Usage type of the liability. | Small, 61.0 | 61.0 |
| verification​Status | String | Verification status of the liability. | Small, 61.0 | 61.0 |

## Related Topics

- Custom Fields Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_digital_lending_custom_fields_result.htm)
- Party Financial Liability Borrower Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_party_financial_liability_borrower_result.htm)
