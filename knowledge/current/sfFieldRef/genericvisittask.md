---
title: "GenericVisitTask"
domain: sfFieldRef
topic: genericvisittask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.357Z
estimatedTokens: 413
keywords: [GenericVisitTask, task, performed, visit]
---

# GenericVisitTask

> Represents information about a task that can be performed during a
         visit.

# GenericVisitTask

Represents information about a task that can be performed during a visit.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GenericVisitTask in the Automotive Cloud Developer Guide, Manufacturing Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefinitionReferenceId | Generic Visit Task ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| Id | Generic Visit Task ID | id |  | 18 |  |  |
| IsDefinition | Is Definition | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRequired | Required | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Sequence | Sequence | int | 9 |  |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCode | Status Code | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VisitId | Visit ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
