---
title: "ProblemConfigurationItem"
domain: agentforce
topic: problemconfigurationitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:16.127Z
estimatedTokens: 405
keywords: [ProblemConfigurationItem, relationship, problem, configuration, item, API, version, 65.0, later, Calls]
---

# ProblemConfigurationItem

> Represents the relationship between a problem and a configuration item
         reference. This object is available in API version 65.0 and later.

# ProblemConfigurationItem

Represents the relationship between a problem and a configuration item reference. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConfigurationItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe configuration item that represents the external configuration item record that's related to a problem.This field is a relationship field.Relationship NameConfigurationItemRefers ToConfigurationItem |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ProblemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe problem with which a configuration item is related.This field is a relationship field.Relationship NameProblemRelationship TypeMaster-detailRefers ToProblem (the master object) |
| RelationshipType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSpecifies the type of relationship between a configuration item and the problem.Possible values are:AffectedImpacted |
