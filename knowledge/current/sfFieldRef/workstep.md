---
title: "WorkStep"
domain: sfFieldRef
topic: workstep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.602Z
estimatedTokens: 550
keywords: [WorkStep, work, step, plan, API, version, 52.0, later]
---

# WorkStep

> Represents a work step in a work plan. This object is available in API
    version 52.0 and later.

# WorkStep

Represents a work step in a work plan. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WorkStep](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workstep.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionDefinition | Action Definition | picklist |  | 255 |  |  |
| ActionType | Action Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 500 |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| ExecutionOrder | Execution Order | int | 9 |  |  |  |
| Id | Work Step ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentRecordId | Parent Record ID | reference |  | 18 |  |  |
| ParentRecordType | Parent Record Type | string |  | 50 |  |  |
| PausedFlowInterviewId | Paused Flow Interview ID | reference |  | 18 |  |  |
| ProcessType | Process Type | picklist |  | 255 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCategory | Status Category | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkOrderId | Work Order ID | reference |  | 18 |  |  |
| WorkOrderLineItemId | Work Order Line Item ID | reference |  | 18 |  |  |
| WorkPlanExecutionOrder | Work Plan Execution Order | int | 9 |  |  |  |
| WorkPlanId | Work Plan ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
