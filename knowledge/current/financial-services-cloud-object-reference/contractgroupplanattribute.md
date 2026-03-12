---
title: "ContractGroupPlanAttribute"
domain: financial-services-cloud-object-reference
topic: contractgroupplanattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.875Z
estimatedTokens: 301
keywords: [ContractGroupPlanAttribute, API, version, XX.0, later, Calls, Special, Access, Rules]
---

# ContractGroupPlanAttribute

> This object is available in API version XX.0 and later.

# ContractGroupPlanAttribute

This object is available in API version XX.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameAttributeDefinitionRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescription |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameAttributePicklistValueRefers ToAttributePicklistValue |
| ContractGroupPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field.Relationship NameContractGroupPlanRelationship TypeMaster-detailRefers ToContractGroupPlan (the master object) |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
