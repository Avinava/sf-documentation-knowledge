---
title: "InsurancePolicyProductClause"
domain: sfFieldRef
topic: insurancepolicyproductclause
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:01.531Z
estimatedTokens: 532
keywords: [InsurancePolicyProductClause, clauses, associated, products, applicable, specific, insurance, policy, record, clause, product, API, version, 65.0, later]
---

# InsurancePolicyProductClause

> Represents all clauses associated with the products that are applicable to a
         specific insurance policy. The object contains one record for each clause associated with a
         product that is applicable to a policy.  This object is available in API version 65.0
      and later.

# InsurancePolicyProductClause

Represents all clauses associated with the products that are applicable to a specific insurance policy. The object contains one record for each clause associated with a product that is applicable to a policy. This object is available in API version 65.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsurancePolicyProductClause in the Insurance Policy Administration Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicableObjectType | Applicable Object Type | picklist |  | 255 |  |  |
| ClauseText | Clause Text | textarea |  | 32000 |  |  |
| ConstraintModelDeveloperName | Constraint Model Developer Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreationMethod | Creation Method | picklist |  | 255 |  |  |
| Description | Description | string |  | 255 |  |  |
| EffectiveDate | Effective Date | date |  |  |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| Id | Insurance Policy Product Clause ID | id |  | 18 |  |  |
| InsurancePolicyAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| InsurancePolicyCoverageId | Insurance Policy Coverage ID | reference |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| InsurancePolicyParticipantId | Insurance Policy Participant ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
