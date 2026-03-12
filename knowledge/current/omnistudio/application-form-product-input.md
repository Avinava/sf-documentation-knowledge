---
title: "Application Form Product Input"
domain: omnistudio
topic: application-form-product-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.063Z
estimatedTokens: 655
keywords: [Application, Form, Product, Input, representation]
---

# Application Form Product Input

> Input representation of the  application form product.

# Application Form Product Input

Input representation of the application form product.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applicant​VisibleStatus | String | Status that specifies the visibility of the application form product record. | Optional | 61.0 |
| application​FormSellerItem | Application Form Seller Item Input | Application form seller item related to the application form product input. | Optional | 61.0 |
| currency​IsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 59.0 |
| customFields | Custom Fields Input[] | Custom fields related to the application form product. | Optional | 59.0 |
| disbursement​Method | String | Method of disbursement for the loan amount. | Optional | 59.0 |
| downPayment | Double | Value for the upfront partial payment amount that the applicant paid. | Optional | 61.0 |
| hasAutomatic​Payment | Boolean | Indicates whether the applicant opted in for automatic payments (true) or not (false). | Optional | 59.0 |
| hasElectronic​Statement | Boolean | Indicates whether the customer opted in for electronic statements (true) or not (false). | Optional | 59.0 |
| isAtmCard​Required | Boolean | Indicates whether an ATM card is required (true) or not (false). | Optional | 59.0 |
| isCheckbook​Required | Boolean | Indicates whether a checkbook is required (true) or not (false) for the application form product. |  | 59.0 |
| loanPurpose | String | Reason or purpose for the loan. | Optional | 61.0 |
| loanType | String | Type of loan being requested. | Optional | 59.0 |
| ownershipType | String | Type of ownership for the application form product. | Optional | 61.0 |
| productId | String | Product associated with the application form product. | Optional | 59.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 59.0 |
| requested​Amount | Double | Amount requested as part of the application. | Optional | 59.0 |
| requested​MonthlyPayment | Double | Monthly payment amount requested by an applicant. | Optional | 61.0 |
| requestedTerm | Integer | Length of the loan in months. | Optional | 59.0 |
| stage | String | Stage of the application form product that the applicant submitted. | Optional | 61.0 |
| totalBrand​OwnedItemAmt | Double | Total value of the brand-owned seller items requested for financing. | Optional | 61.0 |
| totalVendor​OwnedItemAmt | Double | Total value of the vendor-owned seller items requested for financing. | Optional | 61.0 |

## Related Topics

- Application Form Seller Item Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_application_form_seller_item_input.htm)
- Custom Fields Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_digital_lending_custom_fields_input.htm)
