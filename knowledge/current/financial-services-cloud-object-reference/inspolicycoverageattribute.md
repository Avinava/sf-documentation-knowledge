---
title: "InsPolicyCoverageAttribute"
domain: financial-services-cloud-object-reference
topic: inspolicycoverageattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.575Z
estimatedTokens: 299
keywords: [InsPolicyCoverageAttribute, attributes, insurance, policy, coverage, API, version, 63.0, later, Calls]
---

# InsPolicyCoverageAttribute

> Represents attributes for insurance policy coverage. This object is
      available in API version 63.0 and later.

# InsPolicyCoverageAttribute

Represents attributes for insurance policy coverage. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition associated with the Insurance Policy Coverage Attribute.This field is a relationship field. |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe attribute picklist value associated with the Insurance Policy Coverage Attribute.This field is a relationship field. |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the attribute. |
| InsurancePolicyCoverageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe insurance policy coverage associated with the Insurance Policy Coverage Attribute.This field is a relationship field. |
