---
title: "wkdw__OnboardingTask__c"
domain: workdotcom-dev-guide
topic: wkdwonboardingtaskc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.483Z
estimatedTokens: 605
keywords: [wkdw__OnboardingTask__c, Custom, reusable, task, definition, assigned, employee, transition, plan, template, wkdw, _OnboardingTask, Calls]
---

# wkdw__OnboardingTask__c

> Custom object that represents a reusable task definition that defines
         the task assigned to an employee in a transition plan template.

# wkdw\_\_OnboardingTask\_\_c

Custom object that represents a reusable task definition that defines the task assigned to an employee in a transition plan template.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date for when a user last did something related to the record |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that the record was only referenced and not viewed. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe task name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API who ran create().Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| wkdw__Description__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description for the task assigned to an employee in the transition checklist. This field is available in API version 56.0 and later.If left blank, the text in the Task Description field is shown. |
| wkdw__DisplayDescription__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDisplays the description for the task assigned to an employee in the transition checklist. This field is available in API version 56.0 and later.If left blank, the Description is used. |
| wkdw__DisplayName__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe task name that employees see in the onboarding checklist. This field is available in API version 56.0 and later.If left blank, the Task Name is used. |
| wkdw__FlowAPIName__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAPI name of the flow associated with this task. This field is available in API version 56.0 and later.A flow is optional in order to complete an assigned Task. |
