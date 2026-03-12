---
title: "ContractPaymentAgreement"
domain: sfFieldRef
topic: contractpaymentagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.500Z
estimatedTokens: 417
keywords: [ContractPaymentAgreement, Stores, contract, payment, agreement, associated]
---

# ContractPaymentAgreement

> Stores information about the contract payment agreement associated with a
         contract.

# ContractPaymentAgreement

Stores information about the contract payment agreement associated with a contract.

For more information, see ContractPaymentAgreement in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AgreementType | Agreement Type | picklist |  | 40 |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| ContractPaymentAgreementKey | Contract Payment Agreement Key | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EligibleProcedureCodeList | Eligible Procedure Code List | textarea |  | 32000 |  |  |
| EndDateTime | End Date | datetime |  |  |  |  |
| FeeScheduleDefinitionId | Fee Schedule Definition ID | reference |  | 18 |  |  |
| Id | ContractPaymentAgreement ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LineofBusiness | Line of Business | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| StandardFeeCalculationPercentage | Standard Fee Calculation Percentage | percent |  |  | 5 | 2 |
| StartDateTime | Start Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
