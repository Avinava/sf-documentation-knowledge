---
title: "WorkOrder"
domain: field-service
topic: workorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.027Z
estimatedTokens: 4506
keywords: [WorkOrder, service, work, performed, customer, API, version, 36.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# WorkOrder

> Represents field service work to be performed for a customer. This object is available in API version 36.0 and later.

# WorkOrder

Represents field service work to be performed for a customer. This object is available in API version 36.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Work orders or Field Service must be enabled.
-   The following fields can’t be edited, regardless of your field-level security settings:
    -   Discount
    -   GrandTotal
    -   IsGeneratedFromMaintenancePlan
    -   RootWorkOrderId

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the work order.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the address where the work order is completed. |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset associated with the work order.This is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AssetWarrantyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset warranty term associated with the work order. This field is available in API version 50.0 and above. |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business hours associated with the work order.This is a relationship field.Relationship NameBusinessHoursRelationship TypeLookupRefers ToBusinessHours |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the work order.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the work order is completed. Maximum length is 40 characters. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the work order.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the work order is completed. Maximum length is 80 characters. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. The label in the user interface is Currency ISO Code. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the work order. Try to include the steps needed to change the work order’s status to Completed. |
| Discount | TypepercentPropertiesFilter, Nillable, SortDescriptionRead only. The weighted average of the discounts on all line items in the work order. It can be any positive number up to 100. |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated time required to complete the work order. Specify the duration unit in the Duration Type field. If the Duration field on a Work Order is null, it adopts the duration value from the Work Type object when the work type is updated or inserted.Work order duration and work order line item duration are independent of each other. If you want work order duration to automatically show the sum of the work order line items’ duration, replace the Duration field on work orders with a custom roll-up summary field. |
| DurationInMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe estimated duration in minutes. For internal use only. |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of the duration: Minutes or Hours. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the work order is completed. This field is blank unless you set up an Apex trigger or quick action to populate it. For example, you can create a quick action that sets the EndDate to 365 days after the StartDate. |
| EntitlementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe entitlement associated with the work order. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| GrandTotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRead only. The total price of the work order with tax added. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the work order is closed (true) or open (false). |
| IsGeneratedFromMaintenancePlan | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescription(Read Only) Indicates that the work order was generated from a maintenance plan (true), rather than manually created (false). |
| IsStopped | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a milestone is paused (true) or counting down (false). This field is available only if Enable stopped time and actual elapsed time is selected on the Entitlement Settings page. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the work order was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the work order was last viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the work order is completed. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| LineItemCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of work order line items in the work order. Its label in the user interface is Line Items. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location associated with the work order. For example, a work site.This is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the work order is completed. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| MaintenancePlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maintenance plan associated with the work order. When the work order is auto-generated from a maintenance plan, this field automatically lists the related plan. |
| MaintenanceWorkRuleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the maintenance work rule that generated this work order. This field is available in API version 50.0 and above. |
| MilestoneStatus | TypestringPropertiesGroup, Nillable, SortDescriptionIndicates the status of a milestone. This field is visible if an entitlement process is applied to a work order. |
| MinimumCrewSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum crew size allowed for a crew assigned to the work order.If you’re not using the Field Service managed package, this field serves as a suggestion rather than a rule. If you are using the managed package, the scheduling optimizer counts the number of service crew members on a service crew to determine whether it fits a work order’s minimum crew size requirement. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe work order’s assigned owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentWorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order’s parent work order, if it has one. Create a custom report to view a work order’s child work orders.This is a relationship field.Relationship NameParentWorkOrderRelationship TypeLookupRefers ToWorkOrder |
| PostWorkSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe summary of a completed work order that’s either entered manually or created by an AI agent. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code where the work order is completed. Maximum length is 20 characters. |
| PreWorkBriefPromptTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the activated Pre-Work Brief prompt template. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe price book associated with the work order. Adding a price book to the work order lets you assign different price book entries to the work order’s line items. This is only available if Product2 is enabled.This is a relationship field.Relationship NamePricebook2Relationship TypeLookupRefers ToPricebook2 |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the work order. The picklist includes the following values, which can be customized:LowMediumHighCritical |
| ProductServiceCampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product service campaign associated with the work order. |
| ProductServiceCampaignItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product service campaign item associated with the work order. |
| RecommendedCrewSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recommended number of people on the service crew assigned to the work order. For example, you might have a Minimum Crew Size of 2 and a Recommended Crew Size of 3. |
| ReturnOrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe return order associated with the work order. |
| ReturnOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe return order line item associated with the work order. |
| RootWorkOrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read only) The top-level work order in a work order hierarchy. Depending on where a work order lies in the hierarchy, its root could be the same as its parent. View a work order’s child work order in the Child Work Orders related list.This is a relationship field.Relationship NameRootWorkOrderRelationship TypeLookupRefers ToWorkOrder |
| ServiceAppointmentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of service appointments on the work order. |
| ServiceContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service contract associated with the work order. |
| ServiceDocumentTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe template ID which sets the template for each service document for the Document Builder feature. |
| ServiceReportLanguage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language used for all service reports and service report previews created for the work order, its service appointments, and its work order line items and their service appointments. If the field is blank, service reports are generated in the default language in Salesforce of the person creating the report.To appear as an option in the ServiceReportLanguage field, a language must be set up in Translation Workbench or be one of Salesforce’s 18 fully supported languages. Rich text fields and service report section names aren’t translated. |
| ServiceReportTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service report template that the work order uses. If you don’t specify a service report template on a work order, it uses the service report template listed on its work type. If the work type doesn’t list a template or no work type is specified, the work order uses the default service report template. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory where the work order is taking place.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| SlaExitDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time that the work order exits the entitlement process. |
| SlaStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time that the work order enters the entitlement process. You can update or reset the time if you have “Edit” permission on work orders. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the work order goes into effect. This field is blank unless you set up an Apex trigger or quick action to populate it. For example, you can create a quick action that sets the StartDate to the date when the Status changes to In Progress. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the work order is completed. Maximum length is 80 characters. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the work order. The picklist includes the following values, which can be customized:New—Work order was created, but there hasn’t yet been any activity.In Progress—Work has begun.On Hold—Work is paused.Completed—Work is complete.Cannot Complete—Work could not be completed.Closed—All work and associated activity is complete.Canceled—Work is canceled, typically before any work began.Changing a work order’s status does not affect the status of its work order line items or associated service appointments. |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category that each Status value falls into. The Status Category field has eight default values: seven values which are identical to the default Status values, and a None value for statuses without a status category.If you create custom Status values, you must indicate which category it belongs to. For example, if you create a Waiting for Response value, you may decide that it belongs in the On Hold category. To learn which processes reference StatusCategory, see How are Status Categories Used? |
| StopStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the milestone was paused. The label in the user interface is Stopped Since. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street number and name where the work order is completed. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subject of the work order. Try to describe the nature and purpose of the job to be completed. For example, “Annual On-Site Well Maintenance.” Maximum length is 255 characters. |
| Subtotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRead only. The total of the work order line items’ subtotals before discounts and taxes are applied. |
| SuggestedMaintenanceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe suggested date that the work order is completed. When the work order is auto-generated from a maintenance plan, this field is automatically populated based on the maintenance plan’s settings. |
| Tax | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total tax on the work order. You can enter a number with or without the currency symbol and use up to two decimal places. For example, in a work order whose total price is $100, enter $10 to apply a 10% tax. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRead only. The total of the work order line items’ prices. This value has discounts applied but not tax. |
| WorkOrderNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn eight-digit, auto-generated number that identifies the work order. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type associated with the work order. When a work type is selected, the work order automatically inherits the work type’s Duration, Duration Type, and required skills. If the Duration field for the work type is null, enter the duration value.This is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

WorkOrderChangeEvent (API version 48.0)

Change events are available for the object.

WorkOrderFeed

Feed tracking is available for the object.

WorkOrderHistory

History is available for tracked fields of the object.

WorkOrderOwnerSharingRule

Sharing rules are available for the object.

WorkOrderShare

Sharing is available for the object.
