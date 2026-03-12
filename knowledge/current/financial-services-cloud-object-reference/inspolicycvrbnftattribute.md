---
title: "InsPolicyCvrBnftAttribute"
domain: financial-services-cloud-object-reference
topic: inspolicycvrbnftattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.593Z
estimatedTokens: 393
keywords: [InsPolicyCvrBnftAttribute, view, attributes, insurance, policy, coverage, benefit, API, version, later, Calls]
---

# InsPolicyCvrBnftAttribute

> Represents a view of the attributes on an insurance policy coverage benefit.
      This object is available in API version 62 and later.

# InsPolicyCvrBnftAttribute

Represents a view of the attributes on an insurance policy coverage benefit. This object is available in API version 62 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition associated with the insurance policy coverage benefit attribute.This field is a relationship field.Relationship NameAttributeDefinitionRefers ToAttributeDefinition |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe attribute picklist value associated with the insurance policy coverge benefit attribute.This field is a relationship field.Relationship NameAttributePicklistValueRefers ToAttributePicklistValue |
| InsPolicyCoverageBenefitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent insurance policy coverage benefit associated with the insurance policy coverage benefit attribute.This field is a relationship field.Relationship NameInsPolicyCoverageBenefitRelationship TypeMaster-detailRefers ToInsPolicyCoverageBenefit (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the insurance policy coverage benefit attribute. |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy coverage benefit attribute value. |
