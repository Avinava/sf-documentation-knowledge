---
title: "wkdw__OnboardingTemplateTask__c"
domain: workdotcom-dev-guide
topic: wkdwonboardingtemplatetaskc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.496Z
estimatedTokens: 755
keywords: [wkdw__OnboardingTemplateTask__c, custom, junction, serves, join, transition, task, plan, wkdw, _OnboardingTemplateTask, Calls]
---

# wkdw__OnboardingTemplateTask__c

> Represents a custom object that is a junction object which serves to
         join a transition task to a transition plan.

# wkdw\_\_OnboardingTemplateTask\_\_c

Represents a custom object that is a junction object which serves to join a transition task to a transition plan.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that the record was only referenced and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the junction record. This is a system field and not explicitly created. |
| wkdw__Description__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the template and associated tasks that comprise a transition plan. This field is available in API version 56.0 and later. |
| wkdw__EffectiveDateOffset__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe number of offset days relative to the transition plan's effective date that is used to set the due date for the transition tasks. Positive and negative numbers are allowed. This field is available in API version 56.0 and later.Possible values are:EmployeeManagerThe default value is Employee. |
| wkdw__IndividualUser__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is reserved for future use.Relationship Namewkdw__OnboardingTemplate__rRelationship TypeLookupRefers ToUser |
| wkdw__OnboardingTask__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe onboarding task that is joined to the transition plan template. This field is available in API version 56.0 and later.Relationship Namewkdw__OnboardingTask__rRelationship TypeLookupRefers Towkdw__OnboardingTask__c |
| wkdw__OnboardingTemplate__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe template ID used to join the task with the template. This field is available in API version 56.0 and later.Relationship Namewkdw__OnboardingTemplate__rRelationship TypeMaster-detailRefers Towkdw__OnboardingTemplate__c (the master object) |
| wkdw__Queue__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is reserved for future use. |
| wkdw__TaskOwnerType__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of user who completes a task assigned to them. This field is available in API version 56.0 and later.Possible values are:EmployeeManagerThe default value is Employee. This field is available in API version 56.0 and later. |
