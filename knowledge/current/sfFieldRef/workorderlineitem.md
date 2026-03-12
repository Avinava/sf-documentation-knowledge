---
title: "WorkOrderLineItem"
domain: sfFieldRef
topic: workorderlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.373Z
estimatedTokens: 1075
keywords: [WorkOrderLineItem, subtask, work, order, service, API, version, 36.0, later]
---

# WorkOrderLineItem

> Represents a subtask on a work order in field service. This
		object is available in API version 36.0 and later.

# WorkOrderLineItem

Represents a subtask on a work order in field service. This object is available in API version 36.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WorkOrderLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorderlineitem.htm "HTML (New Window)") in the Energy and Utilities Cloud Developer Guide, Field Service Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Address | Address | address |  |  |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| AssetWarrantyId | Asset Warranty ID | reference |  | 18 |  |  |
| City | City | string |  | 40 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Discount | Discount | percent |  |  | 5 | 2 |
| Duration | Duration | double |  |  | 18 | 2 |
| DurationInMinutes | Duration in Minutes | double |  |  | 18 | 2 |
| DurationType | Duration Type | picklist |  | 255 |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| Id | Work Order Line Item ID | id |  | 18 |  |  |
| IsClosed | Is Closed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsGeneratedFromMaintenancePlan | Generated from maintenance plan | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| LineItemNumber | Work Order Line Item Number | string |  | 255 |  |  |
| ListPrice | List Price | currency |  |  | 18 | 2 |
| LocationId | Location ID | reference |  | 18 |  |  |
| Longitude | Longitude | double |  |  | 18 | 15 |
| MaintenancePlanId | Maintenance Plan ID | reference |  | 18 |  |  |
| MaintenanceWorkRuleId | Maintenance Work Rule ID | reference |  | 18 |  |  |
| MinimumCrewSize | Minimum Crew Size | int | 9 |  |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| ParentWorkOrderLineItemId | Parent Work Order Line Item ID | reference |  | 18 |  |  |
| PostalCode | Zip/Postal Code | string |  | 20 |  |  |
| PricebookEntryId | Product ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductServiceCampaignId | Product Service Campaign ID | reference |  | 18 |  |  |
| ProductServiceCampaignItemId | Product Service Campaign Item ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 12 | 2 |
| RecommendedCrewSize | Recommended Crew Size | int | 9 |  |  |  |
| ReturnOrderId | Return Order ID | reference |  | 18 |  |  |
| ReturnOrderLineItemId | Return Order Line Item ID | reference |  | 18 |  |  |
| RootWorkOrderLineItemId | Root Work Order Line Item ID | reference |  | 18 |  |  |
| ServiceAppointmentCount | Service Appointment Count | int | 9 |  |  |  |
| ServiceReportTemplateId | Service Report Layout ID | reference |  | 18 |  |  |
| ServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| State | State/Province | string |  | 80 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCategory | Status Category | picklist |  | 255 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| Subtotal | Subtotal | currency |  |  | 18 | 2 |
| SuggestedMaintenanceDate | Suggested Maintenance Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalPrice | Total Price | currency |  |  | 18 | 2 |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |
| WorkOrderId | Work Order ID | reference |  | 18 |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
