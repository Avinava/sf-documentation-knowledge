---
title: "MaintenancePlan"
domain: field-service
topic: maintenanceplan
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:56.205Z
estimatedTokens: 2686
keywords: [MaintenancePlan, Represents, preventive, maintenance, schedule, assets, field, service., Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# MaintenancePlan

> Represents a preventive maintenance schedule for one or more assets in field
		service.

# MaintenancePlan

Represents a preventive maintenance schedule for one or more assets in field service.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated account, which typically represents the customer receiving the maintenance service. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated contact. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA brief description of the plan. |
| DoesAutoGenerateWorkOrders | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTurns on auto-generation of work order batches for a maintenance plan and prohibits the manual generation of work orders via the Generate Work Orders action. If this option is selected, a new batch of work orders is generated for the maintenance plan on the NextSuggestedMaintenanceDate listed on each maintenance asset, or on the maintenance plan if no assets are included. If a GenerationHorizon is specified, the date of generation is that many days earlier. |
| DoesGenerateUponCompletion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf both this option and DoesAutoGenerateWorkOrders are set to true, a new batch of work orders isn’t generated until the last work order generated from the maintenance plan is completed. A work order is considered completed when its status falls into one of the following status categories: Cannot Complete, Canceled, Completed, or Closed.If a maintenance plan covers multiple assets, work orders are generated per asset. If a maintenance asset’s final work order is completed late, its work order generation is delayed, which may cause a staggered generation schedule between maintenance assets. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last day the maintenance plan is valid. |
| Frequency | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescription(Optional) Amount of time between work orders. The unit is specified in the FrequencyType field. |
| FrequencyType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescription(Optional) The unit of frequency:DaysWeeksMonthsYearsFor example, to perform monthly maintenance visits you need a work order for each visit, so enter 1 as the Frequency and select Months. |
| GenerationHorizon | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMoves up the timing of batch generation if DoesAutoGenerateWorkOrders is set to true. A generation horizon of 5 means the new batch of work orders is generated 5 days before the maintenance asset’s (or maintenance plan’s, if there are no assets) NextSuggestedMaintenanceDate. The generation horizon must be a whole number. |
| GenerationTimeframe | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescription(Required) How far in advance work orders are generated in each batch. The unit is specified in the GenerationTimeframeType field. |
| GenerationTimeframeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescription(Required) The generation timeframe unit:DaysWeeksMonthsYearsFor example, if you need work orders for six months, enter 6 and select Months. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhere the service takes place. |
| MaintenancePlanNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescription(Read Only) An auto-assigned number that identifies the maintenance plan. |
| MaintenancePlanTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA name for the maintenance plan. |
| MaintenanceWindowEndDays | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDays after the suggested service date on the work order that its service appointment can be scheduled. |
| MaintenanceWindowStartDays | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDays before the suggested service date on the work order that its service appointment can be scheduled.The maintenance window start and end fields affect the Earliest Start Permitted and Due Date fields on the maintenance plan’s work orders’ service appointments. For example, if you enter 3 for both the maintenance window start and end, the Earliest Start Permitted and the Due Date will be 3 days before and 3 days after, respectively, the Suggested Maintenance Date on each work order. If the maintenance window fields are left blank, the service appointment date fields list their work order’s suggested maintenance date. |
| NextSuggestedMaintenanceDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe suggested date of service for the first work order (not the date the work order is created). This corresponds to the work order’s SuggestedMaintenanceDate. You can use this field to enforce a delay before the first maintenance visit (for example, if monthly maintenance should begin one year after the purchase date). Its label in the user interface is Date of the first work order in the next batch.For example, if you want the first maintenance visit to take place on May 1, enter May 1. When you generate work orders, the earliest work order will list a suggested maintenance date of May 1, and the dates on the later work orders will be based on the GenerationTimeframe and Frequency.ImportantMaintenance assets also list a NextSuggestedMaintenanceDate, which is initially inherited from the maintenance plan. If the plan has maintenance assets, this date auto-updates on the maintenance assets after each batch is generated, but doesn’t update on the maintenance plan itself because batch timing is calculated at the maintenance asset level. If the plan doesn’t have maintenance assets, this date auto-updates on the maintenance plan after each batch is generated. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the maintenance plan. |
| ServiceContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service contract associated with the maintenance plan. The service contract can’t be updated if any child maintenance asset is associated with a contract line item from the service contract. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe first day the maintenance plan is valid. |
| SvcApptGenerationMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe service appointment generation method.One service appointment per work orderOne service appointment per work order line itemIf your existing maintenance plans have work orders or work order line items associated with them, you can’t change their generation methods. To change pre-existing maintenance plan generation methods, either delete the work orders and regenerate them or delete the maintenance plan and recreate it with the needed generation methods.If Work Order Generation Method is set to One work order per asset, you can’t set a Service Appointment Generation Method.If Work Order Generation Method is set to One work order line item per asset, you must select a Service Appointment Generation Method. |
| WorkOrderGenerationMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe work order generation method.One work order per assetOne work order line item per assetIf your existing maintenance plans have work orders or work order line items associated with them, you can’t change their generation methods. To change pre-existing maintenance plan generation methods, either delete the work orders and regenerate them or delete the maintenance plan and recreate it with the needed generation methods.If Work Order Generation Method is left as None, the generation is defaulted to one work order per asset.When One work order line item per asset is set, and all maintenance assets have the same Next Suggested Maintenance Date on the maintenance plan, they are grouped in one work order. However, if maintenance assets have different Next Suggested Maintenance Dates, multiple work orders are created for each date.If Work Order Generation Method is set to One work order per asset, you can’t set a Service Appointment Generation Method. |
| WorkOrderGenerationStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescription(Read Only) Indicates the status of work order generation:NotStarted—the default value, work order generation has not startedInProgress—work order generation is underwayCompleted—work order generation is completeUnsuccessful—it was not possible to generate work ordersYou can generate only one batch at a time. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated work type. Work orders generated from the maintenance plan inherit its work type’s duration, required skills and products, and linked articles. Maintenance assets covered by the plan use the same work type, though you can update them to use a different one. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

MaintenancePlanChangeEvent (API version 48.0)

Change events are available for the object.

MaintenancePlanFeed

Feed tracking is available for the object.

MaintenancePlanHistory

History is available for tracked fields of the object.

MaintenancePlanOwnerSharingRule

Sharing rules are available for the object.

MaintenancePlanShare

Sharing is available for the object.
