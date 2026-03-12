---
title: "wkdw__OnboardingTemplate__c"
domain: workdotcom-dev-guide
topic: wkdwonboardingtemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.488Z
estimatedTokens: 565
keywords: [wkdw__OnboardingTemplate__c, custom, reusable, task, definition, assigned, employee, transition, plan, template, wkdw, _OnboardingTemplate, Calls]
---

# wkdw__OnboardingTemplate__c

> Represents a custom object that represents a reusable task definition
         that defines the task assigned to an employee in a transition plan
      template.

# wkdw\_\_OnboardingTemplate\_\_c

Represents a custom object that represents a reusable task definition that defines the task assigned to an employee in a transition plan template.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date for when a user last did something related to the record |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that the record was only referenced and not viewed. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe template name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API who ran create().Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| wkdw__Description__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the template that contains the transition tasks. This field is available in API version 56.0 and later. |
| wkdw__IsActive__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the template is active, turns access to transition plan templates on or off, and controls whether a plan template is available for assignment. This field is available in API version 56.0 and later.The default value is false. |
| wkdw__PlanOwner__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates if the template is active, turns access to transition plan templates on or off, and controls whether a plan template is available for assignment. This field is available in API version 56.0 and later.The default value is false. |
