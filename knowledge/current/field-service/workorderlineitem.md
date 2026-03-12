---
title: "WorkOrderLineItem"
domain: field-service
topic: workorderlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.057Z
estimatedTokens: 3993
keywords: [WorkOrderLineItem, subtask, work, order, service, API, version, 36.0, later, Calls, Special, Access, Rules, Usage, Associated]
---

# WorkOrderLineItem

> Represents a subtask on a work order in field service. This
		object is available in API version 36.0 and later.

# WorkOrderLineItem

Represents a subtask on a work order in field service. This object is available in API version 36.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Work orders or Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the address where the line item is completed. |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset associated with the work order line item. The asset is not automatically inherited from the parent work order.This is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AssetWarrantyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset warranty term associated with the work order line item. This field is available in API version 50.0 and above. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the line item is completed. Maximum length is 40 characters. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the line item is completed. Maximum length is 80 characters. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. The label in the user interface is Currency ISO Code. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the work order line item. Try to describe the steps needed to mark the line item Completed. |
| Discount | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percent discount to apply to the line item. You can enter a number with or without the percent symbol, and you can use up to two decimal places. |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated time required to complete the line item. Specify the duration unit in the Duration Type field. If the Duration field on a Work Order is null, it adopts the duration value from the Work Type object when the work type is updated or inserted.NoteWork order duration and work order line item duration are independent of each other. If you want work order duration to automatically show the sum of the work order line items’ duration, replace the Duration field on work orders with a custom roll-up summary field. |
| DurationInMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe estimated duration in minutes. For internal use only. |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of the duration: Minutes or Hours. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the line item is completed. This field is blank unless you set up an Apex trigger or quick action to populate it. For example, you can create a quick action that sets the EndDate to 365 days after the StartDate. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. Usually provided by a geocoding service based on the address’s latitude and longitude coordinates.NoteThis field is available in the API only.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the line item has been closed. Changing the line item’s status to Closed causes this checkbox to be selected in the user interface (sets IsClosed to true).TipUse this field to report on closed versus open work order line items. |
| IsGeneratedFromMaintenancePlan | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIdentifies whether the work order line item is generated from a maintenance plan. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the line item was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the line item was last viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the line item is completed. Acceptable values are numbers between –90 and 90 with up to 15 decimal places.NoteThis field is available in the API only. |
| LineItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number that identifies the work order line item. Each work order’s line items start at 1. |
| ListPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe price of the line item (product) as listed in its corresponding price book entry. If a price book entry isn’t specified, the list price defaults to zero. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA location associated with the work order line item. For example, a work site.This is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the line item is completed. Acceptable values are numbers between –180 and 180 with up to 15 decimal places.NoteThis field is available in the API only. |
| MaintenancePlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maintenance plan associated with the work order line item. |
| MaintenanceWorkRuleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the maintenance work rule that generated this line item. This field is available in API version 50.0 and above. |
| MinimumCrewSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum crew size allowed for a crew assigned to the line item.If you’re not using the Field Service managed package, this field serves as a suggestion rather than a rule. If you are using the managed package, the scheduling optimizer counts the number of service crew members on a service crew to determine whether it fits a work order line item’s minimum crew size requirement. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order associated with the line item. For example, you may need to order replacement parts before you can complete the line item.This is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| ParentWorkOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe line item’s parent work order line item, if it has one.TipCreate a custom report to view a line item’s child line items.This is a relationship field.Relationship NameParentWorkOrderLineItemRelationship TypeLookupRefers ToWorkOrderLineItem |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code where the line item is completed. Maximum length is 20 characters. |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe price book entry (product) associated with the line item. The label in the user interface is Product. This field’s lookup search only returns products that are included in the work order’s price book.This is a relationship field.Relationship NamePricebookEntryRelationship TypeLookupRefers ToPricebookEntry |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the line item. The picklist includes the following values, which can be customized:LowMediumHighCritical |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription(Read only) The product associated with the price book entry. This field is not available in the user interface. For best results, use the PricebookEntryId field in any custom code or layouts.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductServiceCampaignId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product service campaign associated with the work order line item. |
| ProductServiceCampaignItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product service campaign item associated with the work order line item. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of units of the line item included in the associated work order. |
| RecommendedCrewSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recommended number of people on the service crew assigned to the line item. For example, you might have a Minimum Crew Size of 2 and a Recommended Crew Size of 3. |
| ReturnOrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe return order associated with the work order line item. |
| ReturnOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe return order line item associated with the work order line item. |
| RootWorkOrderLineItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read only) The top-level line item in a work order line item hierarchy. Depending on where a line item lies in the hierarchy, its root could be the same as its parent.NoteView a line item’s child line items in the Child Work Order Line Items related list.This is a relationship field.Relationship NameRootWorkOrderLineItemRelationship TypeLookupRefers ToWorkOrderLineItem |
| ServiceAppointmentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of service appointments on the work order line item. |
| ServiceDocumentTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe template ID which sets the template for each service document for the Document Builder feature. |
| ServiceReportTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service report template that the line item uses. If you don’t specify a service report template on a work order line item, it uses the service report template listed on its work type. If the work type doesn’t list a template or no work type is specified, the line item uses the default service report template. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory where the line item is completed.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the line item goes into effect. This field is blank unless you set up an Apex trigger or quick action to populate it. For example, you can create a quick action that sets the StartDate to the date when the Status changes to In Progress. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the line item is completed. Maximum length is 80 characters. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the line item. The picklist includes the following values, which can be customized:New—Line item was created, but there hasn’t yet been any activity.In Progress—Work has begun.On Hold—Work is paused.Completed—Work is complete.Cannot Complete—Work could not be completed.Closed—All work and associated activity is complete.Canceled—Work is canceled, typically before any work began. |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category that each Status value falls into. The Status Category field has eight default values: seven values which are identical to the default Status values, and a None value for statuses without a status category.If you create custom Status values, you must indicate which category it belongs to. For example, if you create a Waiting for Response value, you may decide that it belongs in the On Hold category. To learn which processes reference StatusCategory, see How are Status Categories Used? |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street number and name where the line item is completed. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA word or phrase describing the line item. |
| Subtotal | TypecurrencyPropertiesFilter, Nillable, SortDescription(Read only) The line item’s unit price multiplied by the quantity. |
| SuggestedMaintenanceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when maintenance work is planned. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRead only. The line item’s subtotal with discounts applied. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInitially, the unit price for a work order line item is the line item’s list price from the price book, but you can change it. |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe line item’s parent work order. Because work order line items must be associated with a work order, this is a required field.This is a relationship field.Relationship NameWorkOrderRelationship TypeLookupRefers ToWorkOrder |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type associated with the line item. When a work type is selected, the line item automatically inherits the work type’s Duration, Duration Type, and required skills. If the Duration field for the work type is null, enter the duration value.This is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Usage

A work order line item is a child record of a work order. It represents a specific subtask on a work order.

For example, suppose a customer purchased a truck from you. The truck is represented as an asset in your Salesforce org. After some time, the truck needs both headlight bulbs replaced. Here’s one way that you can use work orders and work order line items to track the repair.

1.  Create a work order named “Replace Headlight Bulbs” from the asset record detail page.
2.  Add three work order line items to the work order: “Replace Left Headlight Bulb,” “Replace Right Headlight Bulb,” and “Test Headlights.”
3.  Assign the work order to a technician via a queue.
4.  As the technician completes each line item, he or she marks the item Completed.
5.  When all the line items are complete, the technician marks the work order Completed.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

WorkOrderLineItemChangeEvent (API version 48.0)

Change events are available for the object.

WorkOrderLineItemFeed

Feed tracking is available for the object.

WorkOrderLineItemHistory

History is available for tracked fields of the object.
