---
title: "ContractGrpPlanGrpClsAttr"
domain: financial-services-cloud-object-reference
topic: contractgrpplangrpclsattr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.887Z
estimatedTokens: 447
keywords: [ContractGrpPlanGrpClsAttr, view, attributes, selected, contract, group, plan, API, version, 64.0, later, Calls]
---

# ContractGrpPlanGrpClsAttr

> Represents a view of the attributes selected for each contract group plan
         group class. This object is available in API version 64.0 and later.

# ContractGrpPlanGrpClsAttr

Represents a view of the attributes selected for each contract group plan group class. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition associated with the contract group plan group class attribute.This field is a relationship field.Relationship NameAttributeDefinitionRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the attribute in the contract group plan group class. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn attribute associated with the contract group plan group class when the attribute is of type Picklist.This field is a relationship field.Relationship NameAttributePicklistValueRefers ToAttributePicklistValue |
| ContractGroupPlanGroupClassId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent contract group plan group class that's associated with the contract group plan group class attribute.This field is a relationship field.Relationship NameContractGroupPlanGroupClassRelationship TypeMaster-detailRefers ToContractGroupPlanGroupClass (the master object) |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Id of the attribute in a contract group plan group class. |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of an attribute in the contract group plan group class. |
