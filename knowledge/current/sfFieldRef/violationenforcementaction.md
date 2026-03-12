---
title: "ViolationEnforcementAction"
domain: sfFieldRef
topic: violationenforcementaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.637Z
estimatedTokens: 442
keywords: [ViolationEnforcementAction, action, regulatory, authority, address, violations, API, version, 49.0, later]
---

# ViolationEnforcementAction

> Represents the action that a regulatory authority takes to address violations. This object is available in API version 49.0 and later.

# ViolationEnforcementAction

Represents the action that a regulatory authority takes to address violations. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ViolationEnforcementAction in the Emergency Response Management Object Reference and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ComplianceDueDate | Compliance Due Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DateCreated | Date Created | datetime |  |  |  |  |
| DateResolved | Date Resolved | datetime |  |  |  |  |
| DaysOpen | Days Open | int | 9 |  |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Violation Enforcement Action ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Violation Enforcement Action Name | string |  | 255 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| ResolutionNotes | Resolution Notes | textarea |  | 1000 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |
| ViolationId | Regulatory Code Violation ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
