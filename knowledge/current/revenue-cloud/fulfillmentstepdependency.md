---
title: "FulfillmentStepDependency"
domain: revenue-cloud
topic: fulfillmentstepdependency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.483Z
estimatedTokens: 432
keywords: [FulfillmentStepDependency, dependency, tasks, defining, order, task, depends, API, version, 61.0, later, Calls]
---

# FulfillmentStepDependency

> Represents a dependency between tasks by defining the order between a
         task and one that depends on it. This object is available in API version 61.0 and
      later.

# FulfillmentStepDependency

Represents a dependency between tasks by defining the order between a task and one that depends on it. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DependencyDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the fulfillment step dependency definition.This field is a relationship field.Relationship NameDependencyDefinitionRefers ToFulfillmentStepDependencyDef |
| DependentStepId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe name of a fulfillment step that depends on this step.This field is a relationship field.Relationship NameDependentStepRelationship TypeMaster-detailRefers ToFulfillmentStep |
| DependsOnStepId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the fulfillment step that this step depends on. That is, the name of the step that must be executed before this one can run.This field is a relationship field.Relationship NameDependsOnStepRefers ToFulfillmentStep |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionAn automatically generated name for the fulfillment step dependency. |
