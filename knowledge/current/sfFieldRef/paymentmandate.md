---
title: "PaymentMandate"
domain: sfFieldRef
topic: paymentmandate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.339Z
estimatedTokens: 969
keywords: [PaymentMandate, payment, mandates, customer, their, bank, financial, institution, authorize, third, party, collect, payments, account, API]
---

# PaymentMandate

> Represents information about the payment mandates given by a customer
         to their bank or financial institution to authorize a third party to collect payments from
         their account. This object is available in API version 61.0 and later.

# PaymentMandate

Represents information about the payment mandates given by a customer to their bank or financial institution to authorize a third party to collect payments from their account. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PaymentMandate in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicantId | Applicant ID | reference |  | 18 |  |  |
| ApplicationFormId | Application Form ID | reference |  | 18 |  |  |
| ApplicationFormProductId | Application Form Product ID | reference |  | 18 |  |  |
| AuthorizationType | Authorization Type | picklist |  | 40 |  |  |
| BankAccountNumber | Bank Account Number | string |  | 255 |  |  |
| BankAccountType | Account Type | picklist |  | 40 |  |  |
| BankBranchAddress | Bank Branch Address | address |  |  |  |  |
| BankBranchCity | Bank Branch City | string |  | 40 |  |  |
| BankBranchCountry | Bank Branch Country | string |  | 80 |  |  |
| BankBranchGeocodeAccuracy | Bank Branch Geocode Accuracy | picklist |  | 40 |  |  |
| BankBranchLatitude | Bank Branch Latitude | double |  |  | 18 | 15 |
| BankBranchLongitude | Bank Branch Longitude | double |  |  | 18 | 15 |
| BankBranchName | Bank Branch Name | string |  | 50 |  |  |
| BankBranchPostalCode | Bank Branch Postal Code | string |  | 20 |  |  |
| BankBranchState | Bank Branch State | string |  | 80 |  |  |
| BankBranchStreet | Bank Branch Street | textarea |  | 255 |  |  |
| BankName | Bank Name | string |  | 40 |  |  |
| BankRoutingNumber | Bank Routing Number | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DisbursementAddress | Disbursement Address | address |  |  |  |  |
| DisbursementCity | Disbursement City | string |  | 40 |  |  |
| DisbursementCountry | Disbursement Country | string |  | 80 |  |  |
| DisbursementGeocodeAccuracy | Disbursement Geocode Accuracy | picklist |  | 40 |  |  |
| DisbursementLatitude | Disbursement Latitude | double |  |  | 18 | 15 |
| DisbursementLongitude | Disbursement Longitude | double |  |  | 18 | 15 |
| DisbursementPostalCode | Disbursement Postal Code | string |  | 20 |  |  |
| DisbursementState | Disbursement State | string |  | 80 |  |  |
| DisbursementStreet | Disbursement Street | textarea |  | 255 |  |  |
| Id | Payment Mandate ID | id |  | 18 |  |  |
| IsAccountValidated | Account Validated | boolean |  |  |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MandateAmount | Mandate Amount | currency |  |  | 18 | 2 |
| MandateEffectiveDate | Mandate Effective date | date |  |  |  |  |
| MandateEndDate | Mandate End Date | date |  |  |  |  |
| MandateExternalIdentifier | Mandate External Identifier | string |  | 255 |  |  |
| MandateFrequency | Mandate Frequency | picklist |  | 40 |  |  |
| MandateInternalIdentifier | Mandate Internal Identifier | string |  | 255 |  |  |
| MandateStatus | Mandate Status | picklist |  | 40 |  |  |
| MandateSubmissionDate | Mandate Submission Date | date |  |  |  |  |
| MandateType | Mandate Type | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PersonAccountId | Account ID | reference |  | 18 |  |  |
| Ratio | Ratio | percent |  |  | 5 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
