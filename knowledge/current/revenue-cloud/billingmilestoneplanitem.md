---
title: "BillingMilestonePlanItem"
domain: revenue-cloud
topic: billingmilestoneplanitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.971Z
estimatedTokens: 1348
keywords: [BillingMilestonePlanItem, specific, billing, milestone, plan, that’s, manage, track, completion, certain, deliverables, stages, API, version, 63.0]
---

# BillingMilestonePlanItem

> Represents a specific billing milestone within the billing milestone
         plan that’s used to manage and track billing based on the completion of certain
         deliverables or stages. This object is available in API version 63.0 and later.

# BillingMilestonePlanItem

Represents a specific billing milestone within the billing milestone plan that’s used to manage and track billing based on the completion of certain deliverables or stages. This object is available in API version 63.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

You need Revenue Cloud Billing license and the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BillingMilestonePlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe billing milestone plan associated with the billing milestone plan item.This field is a relationship field.Relationship NameBillingMilestonePlanRelationship TypeMaster-detailRefers ToBillingMilestonePlan (the master object) |
| BillingScheduleGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing schedule group that's related to the billing milestone plan item. Available in API version 64.0 and later.This field is a relationship field.Relationship NameBillingScheduleGroupRefers ToBillingScheduleGroup |
| CommencementDate | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe action that triggers the start of the billing milestone plan for a date-based milestone.Valid value is:OrderProductActivation |
| CommencementDateOffset | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe offset applied to the commencement date to determine the milestone achievement date for a date-based milestone. |
| CommencementDateOffsetUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of time for the commencement date offset.Valid values are:DaysMonthsYears |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the billing milestone plan item. |
| FlatAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount in terms of units of currency, such as $10 or $21.52, to invoice from the order item. Used only when Type field has a value of FlatAmount. |
| IsMilestoneAccomplished | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the billing treatment is for milestone billing (true) or not (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a billing milestone plan item record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a billing milestone plan item record. If this value is null, it’s possible that the user only accessed the billing milestone plan item record or a related list view (LastReferencedDate), but not viewed the billing milestone plan item record itself. |
| MilestoneAccomplishmentDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date the milestone is achieved for date-based milestones. For event-based milestones, this field indicates the date when the milestone is manually marked as completed. |
| MilestoneAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that’s billed when the milestone is reached or completed. |
| MilestoneType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe milestone type for the billing treatment item.Valid values are:DateEvent |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the billing milestone plan item. |
| Percentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage,such as 10% or 12.5%, to invoice from the order item. Used only when Type field has a value of Percentage. |
| ServicePeriodEnd | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe end date of the service associated with the milestone.Valid value is:Order Product End Date |
| ServicePeriodStart | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe start date of the service associated with the milestone.Valid value is:Order Product Start Date |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the billing milestone plan item.Valid values are:CancelledDraftErrorInvoicedReady for InvoicingWaiting for Milestone Accomplishment |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies whether billing schedules created from this billing treatment item are based on a flat amount or a percentage of the order item's total amount.Valid values are:FlatAmountPercentageRemainder |
