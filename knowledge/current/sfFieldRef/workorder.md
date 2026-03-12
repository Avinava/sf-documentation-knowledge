---
title: "WorkOrder"
domain: sfFieldRef
topic: workorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.345Z
estimatedTokens: 1236
keywords: [WorkOrder, service, work, performed, customer, API, version, 36.0, later]
---

# WorkOrder

> Represents field service work to be performed for a customer. This object is available in API version 36.0 and later.

# WorkOrder

Represents field service work to be performed for a customer. This object is available in API version 36.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WorkOrder](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorder.htm "HTML (New Window)") in the Energy and Utilities Cloud Developer Guide, Field Service Developer Guide, Object Reference for the Salesforce Platform, and Work.com Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Address | Address | address |  |  |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| AssetWarrantyId | Asset Warranty ID | reference |  | 18 |  |  |
| BusinessHoursId | Business Hours ID | reference |  | 18 |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| City | City | string |  | 40 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
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
| EntitlementId | Entitlement ID | reference |  | 18 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| GrandTotal | Grand Total | currency |  |  | 18 | 2 |
| Id | Work Order ID | id |  | 18 |  |  |
| IsClosed | Is Closed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsGeneratedFromMaintenancePlan | Generated from maintenance plan | boolean |  |  |  |  |
| IsStopped | Stopped | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| LineItemCount | Line Items | int | 9 |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| Longitude | Longitude | double |  |  | 18 | 15 |
| MaintenancePlanId | Maintenance Plan ID | reference |  | 18 |  |  |
| MaintenanceWorkRuleId | Maintenance Work Rule ID | reference |  | 18 |  |  |
| MilestoneStatus | Milestone Status | string |  | 30 |  |  |
| MinimumCrewSize | Minimum Crew Size | int | 9 |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentWorkOrderId | Parent Work Order ID | reference |  | 18 |  |  |
| PostalCode | Zip/Postal Code | string |  | 20 |  |  |
| PreWorkBriefPromptTemplate | Pre-Work Brief Prompt Template ID | string |  | 255 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| ProductServiceCampaignId | Product Service Campaign ID | reference |  | 18 |  |  |
| ProductServiceCampaignItemId | Product Service Campaign Item ID | reference |  | 18 |  |  |
| RecommendedCrewSize | Recommended Crew Size | int | 9 |  |  |  |
| ReturnOrderId | Return Order ID | reference |  | 18 |  |  |
| ReturnOrderLineItemId | Return Order Line Item ID | reference |  | 18 |  |  |
| RootWorkOrderId | Root Work Order ID | reference |  | 18 |  |  |
| ServiceAppointmentCount | Service Appointment Count | int | 9 |  |  |  |
| ServiceContractId | Service Contract ID | reference |  | 18 |  |  |
| ServiceReportLanguage | Service Report Language | picklist |  | 255 |  |  |
| ServiceReportTemplateId | Service Report Layout ID | reference |  | 18 |  |  |
| ServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| SlaExitDate | Sla Policy End Time | datetime |  |  |  |  |
| SlaStartDate | Sla Policy Start Time | datetime |  |  |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| State | State/Province | string |  | 80 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusCategory | Status Category | picklist |  | 255 |  |  |
| StopStartDate | Stopped Since | datetime |  |  |  |  |
| Street | Street | textarea |  | 255 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| Subtotal | Subtotal | currency |  |  | 18 | 2 |
| SuggestedMaintenanceDate | Suggested Maintenance Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Tax | Tax | currency |  |  | 18 | 2 |
| TotalPrice | Total Price | currency |  |  | 18 | 2 |
| WorkOrderNumber | Work Order Number | string |  | 255 |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
