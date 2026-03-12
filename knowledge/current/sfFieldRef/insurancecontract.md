---
title: "InsuranceContract"
domain: sfFieldRef
topic: insurancecontract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.346Z
estimatedTokens: 428
keywords: [InsuranceContract, insurance-specific, contract, Extension, specifically, insurance, industry, API, version, 55.0, later]
---

# InsuranceContract

> Represents insurance-specific contract information. Extension of Contract object, specifically for the insurance industry. This object is available in API version 55.0 and later.

# InsuranceContract

Represents insurance-specific contract information. Extension of Contract object, specifically for the insurance industry. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsuranceContract in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BrokerageAgencyId | Producer ID | reference |  | 18 |  |  |
| BusinessLicenseId | Business License ID | reference |  | 18 |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EnrollmentCensusId | Group Census ID | reference |  | 18 |  |  |
| EnrollmentEndDate | Enrollment End Date | date |  |  |  |  |
| EnrollmentStartDate | Enrollment Start Date | date |  |  |  |  |
| EnrollmentWaitingPeriod | Enrollment Waiting Period | int | 9 |  |  |  |
| Id | Insurance Contract ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProducerId | Producer ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnderwriterId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
