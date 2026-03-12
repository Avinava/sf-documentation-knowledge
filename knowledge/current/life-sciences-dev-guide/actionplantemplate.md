---
title: "ActionPlanTemplate"
domain: life-sciences-dev-guide
topic: actionplantemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.942Z
estimatedTokens: 732
keywords: [ActionPlanTemplate, instance, action, plan, template, Calls, actionplantemplate, different, assessment, tasks, visit, API, version, 49.0, later]
---

# ActionPlanTemplate

> Represents the instance of an action plan template.

# ActionPlanTemplate

Represents the instance of an action plan template.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe action plan template’s type.Possible values are:PrvdEngmtCompliance—Provider Engagement Compliance |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of this action plan template. |
| IsAdHocItemCreationEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether users can add tasks or other items to generated action plans (true) or not (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this action plan template. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this action plan template.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent template associated with the action plan template.This field is a relationship field.Relationship NameParentTemplateRefers ToActionPlanTemplate |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionView the status of a task.Possible values are:DraftFinal—PublishedObsoleteRead Only |
| TargetEntityType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe parent object this action plan template relates to.Possible values are:RelatedListValidation__c—RelatedListValidationomnistudio__VlocityScheduledJob__c—Vlocity Scheduled Job |
| UniqueName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for this action plan template.This field is unique within your organization. |
