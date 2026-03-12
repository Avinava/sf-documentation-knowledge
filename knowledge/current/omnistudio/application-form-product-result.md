---
title: "Application Form Product Result"
domain: omnistudio
topic: application-form-product-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.397Z
estimatedTokens: 789
keywords: [Application, Form, Product, Result, Output, representation]
---

# Application Form Product Result

> Output representation of the application form product result.

# Application Form Product Result

Output representation of the application form product result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applicant​VisibleStatus | String | Status that specifies the visibility of the application form product record. | Small, 61.0 | 61.0 |
| createdById | String | ID of the user who created the record. | Small, 61.0 | 61.0 |
| createdDate | String | Date the record was created. | Small, 61.0 | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Small, 61.0 | 61.0 |
| customFields | Custom Fields Result[] | Custom fields related to the application form product. | Small, 61.0 | 61.0 |
| disbursement​Method | String | Method of disbursement for the loan amount. | Small, 61.0 | 61.0 |
| downPayment | Double | Value for the upfront partial payment amount that the applicant paid. | Small, 61.0 | 61.0 |
| hasAutomatic​Payment | Boolean | Indicates whether the applicant opted in for automatic payments (true) or not (false). | Small, 61.0 | 61.0 |
| hasElectronic​Statement | Boolean | Indicates whether the customer opted in for electronic statements (true) or not (false). | Small, 61.0 | 61.0 |
| id | String | Unique identifier of the application form product. | Small, 61.0 | 61.0 |
| isAtmCard​Required | Boolean | Indicates whether an ATM card is required (true) or not (false). | Small, 61.0 | 61.0 |
| isCheckbook​Required | Boolean | Indicates whether a checkbook is required (true) or not (false) for the application form product. | Small, 61.0 | 61.0 |
| lastModified​ById | String | ID of the user who last modified this record. | Small, 61.0 | 61.0 |
| lastModified​Date | String | Date and time when a user last modified this record. | Small, 61.0 | 61.0 |
| loanPurpose | String | Reason or purpose for the loan. | Small, 61.0 | 61.0 |
| loanType | String | Type of loan being requested. | Small, 61.0 | 61.0 |
| name | String | Name of the application form product record. | Small, 61.0 | 61.0 |
| ownerId | String | ID of the user who owns this record. | Small, 61.0 | 61.0 |
| ownershipType | String | Type of ownership for the application form product. | Small, 61.0 | 61.0 |
| productId | String | Product associated with the application form product. | Small, 61.0 | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Small, 61.0 | 61.0 |
| requestedAmount | Double | Amount requested as part of the application. | Small, 61.0 | 61.0 |
| requested​MonthlyPayment | Double | Monthly payment amount requested by an applicant. | Small, 61.0 | 61.0 |
| requestedTerm | Integer | Length of the loan in months. | Small, 61.0 | 61.0 |
| stage | String | Stage of the application form product that the applicant submitted. | Small, 61.0 | 61.0 |
| totalBrand​OwnedItemAmt | Double | Total value of the brand-owned seller items requested for financing. | Small, 61.0 | 61.0 |
| totalVendor​OwnedItemAmt | Double | Total value of vendor-owned seller items requested for financing. | Small, 61.0 | 61.0 |

## Related Topics

- Custom Fields Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_digital_lending_custom_fields_result.htm)
