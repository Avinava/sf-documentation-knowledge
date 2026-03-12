---
title: "ContractGroupPlan"
domain: sfFieldRef
topic: contractgroupplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.315Z
estimatedTokens: 620
keywords: [ContractGroupPlan, plans, part, contract, insurance, carrier, group, corresponds, included, quote, Line, Items, Child, API, version]
---

# ContractGroupPlan

> Represents a set of plans as part of the contract between the insurance carrier and the group. This set of plans corresponds to the plans included in the quote (as Quote Line Items). Child object of Contract. This object is available in API version 55.0 and later.

# ContractGroupPlan

Represents a set of plans as part of the contract between the insurance carrier and the group. This set of plans corresponds to the plans included in the quote (as Quote Line Items). Child object of Contract. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ContractGroupPlan in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ContractGroupParentPlanId | Contract Group Plan ID | reference |  | 18 |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveEndDate | Effective End Date | datetime |  |  |  |  |
| EffectiveStartDate | Effective Start Date | datetime |  |  |  |  |
| EligibilityCriteria | Eligibility Criteria | string |  | 255 |  |  |
| EnrollmentEndDate | Enrollment End Date | date |  |  |  |  |
| EnrollmentRatingType | Enrollment Rating Type | picklist |  | 255 |  |  |
| EnrollmentStartDate | Enrollment Start Date | date |  |  |  |  |
| EnrollmentWaitingPeriod | Enrollment Waiting Period | int | 9 |  |  |  |
| GroupNumber | Group Number | string |  | 255 |  |  |
| Id | Contract Group Plan ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOptional | Is Optional | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OriginalContractPlanId | Contract Group Plan ID | reference |  | 18 |  |  |
| PlanType | Plan Type | string |  | 255 |  |  |
| PricingStructure | Pricing Structure | textarea |  | 131072 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductCategoryId | Category ID | reference |  | 18 |  |  |
| ProductNumber | Product Number | int | 9 |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitPrice | Unit Price | currency |  |  | 18 | 0 |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
