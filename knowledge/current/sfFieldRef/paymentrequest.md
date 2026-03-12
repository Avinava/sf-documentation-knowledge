---
title: "PaymentRequest"
domain: sfFieldRef
topic: paymentrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:07.382Z
estimatedTokens: 598
keywords: [PaymentRequest, financial, compensation, goods, services, provided, third, party, API, version, 60.0, later]
---

# PaymentRequest

> Represents a financial compensation request for goods or services provided by
         a third party. This object is available in API version 60.0 and later.

# PaymentRequest

Represents a financial compensation request for goods or services provided by a third party. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PaymentRequest in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ClaimId | Claim ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DueDate | Due Date | datetime |  |  |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| FacilityId | Facility ID | reference |  | 18 |  |  |
| Id | Payment Request ID | id |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReceivedDate | Received Date | datetime |  |  |  |  |
| ReceivedMethod | Received Method | picklist |  | 40 |  |  |
| ReferenceNumber | Reference Number | string |  | 255 |  |  |
| RemittanceAccountId | RemittanceAccount ID | reference |  | 18 |  |  |
| ServiceProviderId | ServiceProvider ID | reference |  | 18 |  |  |
| ServiceRecipientId | ServiceRecipient ID | reference |  | 18 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SubmissionType | Submission Type | picklist |  | 40 |  |  |
| SubmittedDate | Submitted Date | datetime |  |  |  |  |
| SubmittingAccountId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | Total Adjustment Amount | currency |  |  | 18 | 2 |
| TotalRequestedAmount | Total Requested Amount | currency |  |  | 18 | 2 |
| TotalServiceAmount | Total Service Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
