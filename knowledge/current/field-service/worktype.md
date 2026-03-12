---
title: "WorkType"
domain: field-service
topic: worktype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:55.126Z
estimatedTokens: 1655
keywords: [WorkType, work, performed, Service, Lightning, Scheduler, templates, applied, order, line, items, API, version, 38.0, later]
---

# WorkType

> Represents a type of work to be performed in Field Service and
			Lightning Scheduler. Work types are templates that can be applied to work order or work
			order line items. This object is available in API version 38.0 and
		later.

# WorkType

Represents a type of work to be performed in Field Service and Lightning Scheduler. Work types are templates that can be applied to work order or work order line items. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the work type. Try to add details about the task or tasks that this work type represents. |
| DurationType | TypepicklistPropertiesCreate, Filter, Group, Defaulted on create, Restricted picklist, Sort, UpdateDescriptionThe unit of the Estimated Duration: Minutes or Hours. |
| EstimatedDuration | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe estimated length of the work. The estimated duration is in minutes or hours based on the value selected in the Duration Type field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the work type was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the work type was last viewed by the current user. |
| MinimumCrewSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum crew size allowed for a crew assigned to the work. Work orders and work order line items inherit their work type’s minimum crew size.If you’re not using the Field Service managed package, this field serves as a suggestion rather than a rule. If you are using the managed package, the scheduling optimizer counts the number of service crew members on a service crew to determine whether it fits the minimum crew size requirement. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the work type. Try to use a name that helps users quickly understand the type of work orders that can be created from the work type. For example, “Annual Refrigerator Maintenance” or “Valve Replacement.” |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe work type’s owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecommendedCrewSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recommended number of people on the service crew assigned to the work. For example, you might have a Minimum Crew Size of 2 and a Recommended Crew Size of 3. Work orders and work order line items inherit their work type’s recommended crew size. |
| SaDocumentTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe document template ID. If ServiceDocumentTemplateId isn’t specified, this document template ID determines which service document template is used for service documents generated from a service appointment. The ID is 15 to 18 characters long. |
| ServiceReportTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service report template associated with the work type. When users create service reports from a work order or work order line item that uses this work type, the reports use this template. |
| ShouldAutoCreateSvcAppt | TypebooleanPropertiesCreate, Filter, Group, Defaulted on create, Sort, UpdateDescriptionSelect this option to have a service appointment automatically created on work orders and work order line items that use the work type.NoteBy default, the Due Date on auto-created service appointments is seven days after the created date. Admins can adjust this offset from the Field Service Settings page in Setup.If a work type with the Auto-Create Service Appointment option selected is added to an existing work order or work order line item, a service appointment is only created for the work order or work order line item if it doesn’t yet have one.If someone updates an existing work type by selecting the Auto-Create Service Appointment option, service appointments aren’t created on work orders and work order line items that were already using the work type. |
| WoDocumentTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe document template ID. If ServiceDocumentTemplateId isn’t specified, this document template ID determines which service document template is used for service documents generated from a work order. The ID is 15 to 18 characters long. |
| WoliDocumentTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe document template ID. If ServiceDocumentTemplateId isn’t specified, this document template ID determines which service document template is used for service documents generated from a work order line item. The ID is 15 to 18 characters long. |

## Usage

Adding a work type to a work order or work order line item causes the record to inherit the work type’s duration values and required skills and products.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

-   If needed, you can update the duration values and required skills and products on a work order or work order line item after they’re inherited from the work type.
-   If a work order or work order line item already has required skills or products, associating it with a work type doesn’t cause it to inherit the work type’s requirements.
-   If a work order or work order line item already has a duration value in its Duration field, associating it with a work type doesn’t cause it to inherit the work type’s duration value.
-   Customizations to required skills or products, such as validation rules or Apex triggers, are not carried over from work types to work orders and work order line items.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

WorkTypeChangeEvent (API version 48.0)

Change events are available for the object.

WorkTypeFeed

Feed tracking is available for the object.

WorkTypeHistory

History is available for tracked fields of the object.

WorkTypeOwnerSharingRule

Sharing rules are available for the object.

WorkTypeShare

Sharing is available for the object.
