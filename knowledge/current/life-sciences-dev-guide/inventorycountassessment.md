---
title: "InventoryCountAssessment"
domain: life-sciences-dev-guide
topic: inventorycountassessment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.206Z
estimatedTokens: 1062
keywords: [InventoryCountAssessment, inventory, count, performed, location, API, version, 65.0, later, Calls]
---

# InventoryCountAssessment

> Represents an inventory count performed at a location. This object is
      available in API version 65.0 and later.

# InventoryCountAssessment

Represents an inventory count performed at a location. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual end date and time for the inventory count. |
| ActualStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual start date and time for the inventory count. |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who counts the inventory.This field is a polymorphic relationship field.Relationship NameAssigneeRefers ToContact, User |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comment, note, or instruction that gives additional context for the inventory count. |
| InventoryCountPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe inventory count plan associated with the inventory count.This field is a relationship field.Relationship NameInventoryCountPlanRefers ToInventoryCountPlan |
| IsBlindCount | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the expected inventory quantity is visible to the assignee when they count the inventory (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location associated with the inventory count.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| LocationPrimaryUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe primary user of the location associated with the inventory count.This field is a relationship field.Relationship NameLocationPrimaryUserRefers ToUser |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the inventory count assessment record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the inventory count assessment record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PlannedEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned end date and time for the inventory count. |
| PlannedStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned start date and time for the inventory count. |
| Purpose | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the purpose of the inventory count. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the inventory count.Possible values are:AssignedAuditorApproved—Auditor ApprovedComplete—CompletedInProgress—In Progress |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the inventory count.Possible values are:AdhocAuditedInitialPeriodic |
| VerificationSubmittedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the inventory count is submitted for verification. |
| VerifierComment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comment, note, or instruction for the verification of inventory count. |
| VerifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who verifies the inventory count.This field is a polymorphic relationship field.Relationship NameVerifierRefers ToContact, User |
