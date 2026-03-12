---
title: "actionplantemplate"
domain: health-cloud-object-reference
topic: actionplantemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.130Z
estimatedTokens: 493
keywords: [actionplantemplate, template, different, assessment, tasks, visit, API, version, 49.0, later, Calls]
---

# actionplantemplate

> Defines a template for different assessment tasks in a visit. This object
    is available in API version 49.0 and later.

# actionplantemplate

Defines a template for different assessment tasks in a visit. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the type of action plan you’re creating.Possible values are:IndustriesVisit ExecutionFor Intelligent Sales, select only Visit Execution. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description for your action plan template. |
| IsAdHocItemCreationEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether ad-hoc creation of tasks is possible. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp for the last time this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp for the last time this record was viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for your action plan template |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReference to the owner of the record. |
| TargetEntityType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionIndicates which entity this template is being created for.Possible values are:AccountBusinessMilestone—Business MilestoneCaseContactContractLeadOpportunityPersonLifeEventPerson Life EventVisitFor Intelligent Sales, use only Visit. |
| UniqueName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for your action plan template. |
