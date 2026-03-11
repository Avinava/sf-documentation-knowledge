---
title: "Party Financial Liability Input"
domain: omnistudio
topic: party-financial-liability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.399Z
keywords: [Party, Financial, Liability, Input]
---

# Party Financial Liability Input

# Party Financial Liability Input

Input representation of the details of the party financial liability.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applicantId | String | Applicant ID of the party financial liability. | Optional | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the party financial liability. | Optional | 61.0 |
| estimated​MonthlyPayment | Double | Estimated monthly payment. | Optional | 61.0 |
| interestRate | Double | Interest rate for the product. | Optional | 61.0 |
| isReadOnly | Boolean | Indicates whether the party financial liability is read only (true) or not (false). | Optional | 61.0 |
| isRepayment​Active | Boolean | Indicates whether the party financial liability is being paid (true) or not (false). | Optional | 61.0 |
| lender | String | Branch unit that owns the party financial liability. | Optional | 61.0 |
| liabilityAccount​Identifier | String | Unique identifier of the liability account. | Optional | 61.0 |
| outstanding​Balance | Double | Remaining amount of the liability that the party owes. | Optional | 61.0 |
| partyFinancial​LiabilityBorrower | Party Financial Liability Borrower Input[] | Details of the borrower associated with the party financial liability. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| relatedPerson | String | Indicates whether to associate the record to an Applicant or Party Profile record. | Required | 61 |
| sharePercent | Double | Percentage of the asset shared between the primary and additional owner. | Optional | 61.0 |
| shareType | String | Share type of the liability. | Optional | 61.0 |
| sourceSystem​Identifier | String | Unique identifier of the record in an external system. | Optional | 61.0 |
| startDate | String | Start date of the party financial liability. | Optional | 61.0 |
| status | String | Status of the party financial liability. | Optional | 61.0 |
| term | String | Term of the party financial liability. | Optional | 61.0 |
| type | String | Type of the party financial liability. | Optional | 61.0 |
| usageType | String | Usage type of the party financial liability. | Required | 61.0 |
| verification​Status | String | Verification status of the party financial liability. | Optional | 61.0 |