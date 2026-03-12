---
title: "BillingMilestonePlan"
domain: revenue-cloud
topic: billingmilestoneplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.959Z
estimatedTokens: 634
keywords: [BillingMilestonePlan, structured, approach, invoicing, invoices, scheduled, predefined, milestones, API, version, 63.0, later, Calls, Special, Access]
---

# BillingMilestonePlan

> Represents a structured approach to invoicing where invoices are
         scheduled based on predefined milestones. This object is available in API version 63.0
      and later.

# BillingMilestonePlan

Represents a structured approach to invoicing where invoices are scheduled based on predefined milestones. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

You need Revenue Cloud Billing license and the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BillingTreatmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The billing treatment associated with the billing milestone plan.This field is a relationship field.Relationship NameBillingTreatmentRefers ToBillingTreatment |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the billing milestone plan. |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external reference item that links a billing milestone plan item to the original transaction item. Available in API version 65.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a billing milestone plan record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a billing milestone plan record. If this value is null, it’s possible that the user only accessed the billing milestone plan record or a related list view (LastReferencedDate), but not viewed the billing milestone plan record itself. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the billing milestone plan. |
| ReferenceItemAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total reference item amount to be billed. |
| ReferenceItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the reference item that links a billing milestone plan item to the original order item.This field is a polymorphic relationship field.Relationship NameReferenceItemRefers ToBillingSchedule, OrderItem |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the billing milestone plan.Valid values are:ActiveCancelledCompletely BilledDraft |
