---
title: "ApplicationFormProductFee"
domain: sfFieldRef
topic: applicationformproductfee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.527Z
estimatedTokens: 362
keywords: [ApplicationFormProductFee, fees, associated, application, form, API, version, 61.0, later, Digital, Lending, permission]
---

# ApplicationFormProductFee

> Represents the fees associated with an application form. This
      object is available in API version 61.0 and later. Available with Digital Lending permission
      set.

# ApplicationFormProductFee

Represents the fees associated with an application form. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ApplicationFormProductFee in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationFormProductId | Application Form Product ID | reference |  | 18 |  |  |
| ApplicationFormProductProposalId | Application Form Product Proposal ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FeeAmount | Fee Amount | currency |  |  | 18 | 2 |
| FeeType | Fee Type | picklist |  | 40 |  |  |
| Id | Application Form Product Fee ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProductFeeId | Product Fee ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
