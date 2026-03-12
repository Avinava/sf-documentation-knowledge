---
title: "CarePgmEnrolleeWkOrdStep"
domain: sfFieldRef
topic: carepgmenrolleewkordstep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.581Z
estimatedTokens: 419
keywords: [CarePgmEnrolleeWkOrdStep, step, work, order, that's, executed, care, program, enrollee, API, version, 58.0, later]
---

# CarePgmEnrolleeWkOrdStep

> Represents information about the step in a work order that's executed for the
         care program enrollee. This object is available in API version 58.0 and later.

# CarePgmEnrolleeWkOrdStep

Represents information about the step in a work order that's executed for the care program enrollee. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CarePgmEnrolleeWkOrdStep in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionPlanTemplateId | Action Plan Template ID | reference |  | 18 |  |  |
| AreAllTasksCompleted | All Tasks Completed | boolean |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndDateTime | End Date | datetime |  |  |  |  |
| Id | Care Program Enrollee Work Order Step ID | id |  | 18 |  |  |
| IsCustodyCompleted | Custody Completed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentEnrolleeWorkOrderId | Care Program Enrollee Work Order ID | reference |  | 18 |  |  |
| SequenceNumber | Sequence Number | int | 9 |  |  |  |
| StartDateTime | Start Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkTypeStepId | Work Type Step ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
