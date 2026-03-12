---
title: "wkdw__TransitionPlan__c"
domain: workdotcom-dev-guide
topic: wkdwtransitionplanc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.503Z
estimatedTokens: 694
keywords: [wkdw__TransitionPlan__c, Custom, transition, plan, associated, employee, user, API, version, 56.0, later, wkdw, _TransitionPlan, Calls]
---

# wkdw__TransitionPlan__c

> Custom object for a transition plan that is associated with an employee user. This
      object is available in API version 56.0 and later.

# wkdw\_\_TransitionPlan\_\_c

Custom object for a transition plan that is associated with an employee user. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date for when a user last did something related to the record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe transition plan name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API who ran create().This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| wkdw__CompletedDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date a transition plan is completed. |
| wkdw__Description__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProvides a description for the transition plan. |
| wkdw__EffectiveDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe effective date for the transition plan that is used to calculate the due date based on the task’s offset date. |
| wkdw__Employee__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee that is in a transition and is assigned the transition plan.This field is a relationship field.Relationship Namewkdw__Employee__rRelationship TypeLookupRefers ToEmployee |
| wkdw__Manager__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is reserved for future use.This field is a relationship field.Relationship Namewkdw__Manager__rRelationship TypeLookupRefers ToUser |
| wkdw__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the transition plan.Possible values are:CompletedIn ProgressNot Started |
| wkdw__TransitionPlanTemplate__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA template that contains a set of tasks related to a specific transition which is assigned to employees.This field is a relationship field.Relationship Namewkdw__TransitionPlanTemplate__rRelationship TypeLookupRefers Towkdw__OnboardingTemplate__c |
| wkdw__WelcomeText__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe greeting users see when viewing a transition plan. |
