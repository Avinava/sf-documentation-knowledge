---
title: "IndividualApplicationTask"
domain: edu-cloud-dev-guide
topic: individualapplicationtask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.292Z
estimatedTokens: 888
keywords: [IndividualApplicationTask, task, application, API, version, 59.0, later, Calls]
---

# IndividualApplicationTask

> Represents a task related to an application. This object is available in
      API version 59.0 and later.

# IndividualApplicationTask

Represents a task related to an application. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationDecisionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Application Decision associated with the Individual Application Task.This field is a relationship field.Relationship NameApplicationDecisionRefers ToApplicationDecision |
| ApplicationReviewId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Application Review associated with the Individual Application Task.This field is a relationship field.Relationship NameApplicationReviewRefers ToApplicationReview |
| ApplicationStageDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Application Stage Definition associated with the Application Task.This field is a relationship field.Relationship NameApplicationStageDefinitionRelationship TypeLookupRefers ToApplicationStageDefinition |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the Individual Application Task. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the Individual Application Task must be completed. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the Individual Application Task ends. |
| IndividualApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Individual Application associated with the Individual Application Task.This field is a relationship field.Relationship NameIndividualApplicationRelationship TypeLookupRefers ToIndividualApplication |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Individual Application Task is required (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Individual Application Task. |
| PreliminaryApplicationRefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Preliminary Application Reference associated with the Individual Application Task.This field is a relationship field.Relationship NamePreliminaryApplicationRefRelationship TypeLookupRefers ToPreliminaryApplicationRef |
| SavedApplicationUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of a saved application that's associated with the Individual Application Task. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence in which the Individual Application Task must be performed. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the Individual Application Task starts. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the Individual Application Task. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the Individual Application Task.Possible values are:Recruitment and Admissions |
