---
title: "RegulatoryCodeViolation"
domain: sfFieldRef
topic: regulatorycodeviolation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.089Z
estimatedTokens: 585
keywords: [RegulatoryCodeViolation, transactional, violation, data, identified, inspection, entity, ties, question, violated, reason, regulatory, code, API, version]
---

# RegulatoryCodeViolation

> Represents the transactional violation data that has been identified during an inspection. This entity ties the inspection question that is violated, violation
		reason and the regulatory code details. This object is available in API version 49.0 and later.

# RegulatoryCodeViolation

Represents the transactional violation data that has been identified during an inspection. This entity ties the inspection question that is violated, violation reason and the regulatory code details. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RegulatoryCodeViolation in the Emergency Response Management Object Reference and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ComplianceDueDate | Compliance Due Date | datetime |  |  |  |  |
| CorrectiveActionDescription | Corrective Action Description | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DateCreated | Date Created | datetime |  |  |  |  |
| DateResolved | Date Resolved | datetime |  |  |  |  |
| DaysOpen | Days Open | int | 9 |  |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Regulatory Code Violation ID | id |  | 18 |  |  |
| InspectionAssmntIndId | Inspection Assessment Indicator ID | reference |  | 18 |  |  |
| InspectionId | Visit ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Violation ID | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| RecurrenceCount | Recurrence | int | 9 |  |  |  |
| RegulatoryCodeId | Regulatory Code ID | reference |  | 18 |  |  |
| ResolutionNotes | Resolution Notes | textarea |  | 1000 |  |  |
| ResponseContextId | Response Context ID | reference |  | 18 |  |  |
| ResponseId | Response ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ViolationTypeId | Violation Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
