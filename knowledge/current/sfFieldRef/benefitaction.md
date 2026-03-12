---
title: "BenefitAction"
domain: sfFieldRef
topic: benefitaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.560Z
estimatedTokens: 369
namespace: NamespacePrefix
keywords: [BenefitAction, action, triggered, benefit]
---

# BenefitAction

> Represents details of an action that can be triggered for a benefit.

**Namespace:** `NamespacePrefix`

# BenefitAction

Represents details of an action that can be triggered for a benefit.

For more information, see BenefitAction in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| FlowDefinition | Interaction Definition ID | picklist |  | 255 |  |  |
| FlowInstance | Flow Instance | string |  | 80 |  |  |
| Id | Benefit Action ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsBenefitExpirationAllowed | Allow Benefit Expiration | boolean |  |  |  |  |
| IsBenefitUpdateAllowed | Allow Benefit Update | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MemberBenefitVariableName | Member Benefit Variable Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| ProcessType | Process Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
