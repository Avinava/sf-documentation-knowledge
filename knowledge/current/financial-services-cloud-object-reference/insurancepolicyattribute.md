---
title: "InsurancePolicyAttribute"
domain: financial-services-cloud-object-reference
topic: insurancepolicyattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.704Z
estimatedTokens: 301
keywords: [InsurancePolicyAttribute, attributes, insurance, policy, API, version, 63.0, later, Calls]
---

# InsurancePolicyAttribute

> Represents attributes for insurance policy. This object is available in
      API version 63.0 and later.

# InsurancePolicyAttribute

Represents attributes for insurance policy. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition associated with the Insurance Policy Attribute.This field is a relationship field.Relationship NameAttributeDefinitionRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe attribute picklist value associated with the Insurance Policy Attribute.This field is a relationship field. |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the attribute. |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe insurance policy associated with the Insurance Policy Attribute.This field is a relationship field. |
