---
title: "EntityMilestone"
domain: field-service
topic: entitymilestone
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:56.065Z
estimatedTokens: 2396
keywords: [EntityMilestone, Represents, required, step, customer, support, process, work, order., Salesforce, user, uses, term, “object, milestone., API, version, 37.0, later., Note]
---

# EntityMilestone

> Represents a required step in a customer support process on a work
			order. The Salesforce user interface uses the term “object milestone. This object
		is available in API version 37.0 and later.

# EntityMilestone

Represents a required step in a customer support process on a work order. The Salesforce user interface uses the term “object milestone. This object is available in API version 37.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Milestones on cases use the CaseMilestone object type.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update()

## Special Access Rules

-   As of Summer ’20 and later, only Salesforce admins, users with access to the Case, Entitlement, or Work Order objects, and users with the View Setup and Configuration permission can access this object.
-   Entitlement management must be enabled.
-   Work orders or Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| ActualElapsedTimeInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of days that it took to complete a milestone. (Elapsed Time) – (Stopped Time) = (Actual Elapsed Time)NoteTo display this field, select Enable stopped time and actual elapsed time on the Entitlement Settings page and add the field to the object milestone page layout. |
| ActualElapsedTimeInHrs | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of hours that it took to complete a milestone. (Elapsed Time) – (Stopped Time) = (Actual Elapsed Time)NoteTo display this field, select Enable stopped time and actual elapsed time on the Entitlement Settings page and add the field to the object milestone page layout. |
| ActualElapsedTimeInMins | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of minutes that it took to complete a milestone. (Elapsed Time) – (Stopped Time) = (Actual Elapsed Time)NoteTo display this field, select Enable stopped time and actual elapsed time on the Entitlement Settings page and add the field to the object milestone page layout. |
| BusinessHoursId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe business hours on the milestone. If business hours aren’t specified, the entitlement process business hours are used. If business hours are also not specified on the entitlement process, the business hours on the record are used. |
| CompletionDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe date and time the milestone was completed. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| ElapsedTimeInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of days it took to complete a milestone, including time during which the milestone was stopped. Automatically calculated to include the business hours on the record. Elapsed time is calculated only after the Completion Date field is populated. (Elapsed Time) – (Stopped Time) = (Actual Elapsed Time). |
| ElapsedTimeInHrs | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of hours it took to complete a milestone, including time during which the milestone was stopped. Automatically calculated to include the business hours on the record. Elapsed time is calculated only after the Completion Date field is populated. (Elapsed Time) – (Stopped Time) = (Actual Elapsed Time). |
| ElapsedTimeInMins | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of minutes it took to complete a milestone, including time during which the milestone was stopped. Automatically calculated to include the business hours on the record. Elapsed time is calculated only after the Completion Date field is populated. (Elapsed Time) – (Stopped Time) = (Actual Elapsed Time). |
| IsCompleted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionGreen checkmark icon that indicates a milestone completion. |
| IsViolated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRed exclamation point icon that indicates a milestone violation. |
| MilestoneTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the milestone (for instance, First Response). |
| Name | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionThe name of the milestone. |
| ParentEntityId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the record—for example, a work order—that contains the milestone. |
| SlaProcessId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe entitlement process associated with the milestone. |
| StartDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe date and time that milestone tracking started. |
| StoppedTimeInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of days that an agent has been blocked from completing a milestone. For example, an agent may be waiting for a customer to reply with more information.NoteTo display this field, select Enable stopped time and actual elapsed time on the Entitlement Settings page and add the field to the object milestone page layout. |
| StoppedTimeInHrs | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of hours that an agent has been blocked from completing a milestone. For example, an agent may be waiting for a customer to reply with more information.NoteTo display this field, select Enable stopped time and actual elapsed time on the Entitlement Settings page and add the field to the object milestone page layout. |
| StoppedTimeInMins | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of minutes that an agent has been blocked from completing a milestone. For example, an agent may be waiting for a customer to reply with more information.NoteTo display this field, select Enable stopped time and actual elapsed time on the Entitlement Settings page and add the field to the object milestone page layout. |
| TargetDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time to complete the milestone. |
| TargetResponseInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of days to complete the milestone. Automatically calculated to include the business hours on the record. |
| TargetResponseInHrs | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of hours to complete the milestone. Automatically calculated to include the business hours on the record. |
| TargetResponseInMins | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of minutes to complete the milestone. Automatically calculated to include the business hours on the record. |
| TimeRemainingInDays | TypestringPropertiesFilter, Nillable, SortDescriptionThe days that remain before a milestone violation. Automatically calculated to include the business hours on the record. |
| TimeRemainingInHrs | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe hours that remain before a milestone violation. Automatically calculated to include the business hours on the record. |
| TimeRemainingInMins | TypestringPropertiesGroup, Nillable, SortDescriptionThe minutes that remain before a milestone violation. Automatically calculated to include the business hours on the record. |
| TimeSinceTargetInDays | TypestringPropertiesFilter, Nillable, SortDescriptionThe days that have elapsed since a milestone violation. Automatically calculated to include the business hours on the record. |
| TimeSinceTargetInHrs | TypestringPropertiesFilter, Nillable, SortDescriptionThe hours that have elapsed since a milestone violation. Automatically calculated to include the business hours on the record. |
| TimeSinceTargetInMins | TypestringPropertiesGroup, Nillable, SortDescriptionThe minutes that have elapsed since a milestone violation. Automatically calculated to include the business hours on the record. |

## Usage

When you create an entitlement process, you select its type based on the type of record that you want the process to run on: Case or Work Order. Processes created before Summer ’16 use the Case type. When a Work Order entitlement process runs on a work order, the resulting milestones on the work order are object milestones. Conversely, when a Case entitlement process runs on a case, the resulting milestones are case milestones, a separate standard object.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=field_service_dev)

#### Tip

If an entitlement has an entitlement process associated with it, don’t use the entitlement for multiple types of support records. An entitlement process works only on records that match the process’s type. For example, when a Case entitlement process is applied to an entitlement, the process runs only on cases associated with that entitlement. If a work order is also associated with the entitlement, the process doesn’t run on the work order. To ensure that the milestones you set up work as expected, associate a customer’s work orders and cases with different entitlements.

Customize page layouts, validation rules, and more for object milestones from the Object Milestones node in Setup under Entitlement Management.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

EntityMilestoneFeed

Feed tracking is available for the object.

EntityMilestoneHistory

History is available for tracked fields of the object.
