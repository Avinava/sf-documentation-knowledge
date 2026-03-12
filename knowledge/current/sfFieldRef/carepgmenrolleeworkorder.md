---
title: "CarePgmEnrolleeWorkOrder"
domain: sfFieldRef
topic: carepgmenrolleeworkorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.601Z
estimatedTokens: 421
keywords: [CarePgmEnrolleeWorkOrder, work, order, that's, executed, care, program, enrollee, API, version, 58.0, later]
---

# CarePgmEnrolleeWorkOrder

> Represents information about the work order that's executed for the care
         program enrollee. This object is available in API version 58.0 and later.

# CarePgmEnrolleeWorkOrder

Represents information about the work order that's executed for the care program enrollee. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CarePgmEnrolleeWorkOrder in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CareProgramEnrolleeId | Care Program Enrollee ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndDateTime | End Date | datetime |  |  |  |  |
| Id | Care Program Enrollee Work Order ID | id |  | 18 |  |  |
| IsCustodyCompleted | Custody Completed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NextWorkOrderId | Care Program Enrollee Work Order ID | reference |  | 18 |  |  |
| PreviousWorkOrderId | Care Program Enrollee Work Order ID | reference |  | 18 |  |  |
| ServiceAppointmentId | Service Appointment ID | reference |  | 18 |  |  |
| StartDateTime | Start Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
