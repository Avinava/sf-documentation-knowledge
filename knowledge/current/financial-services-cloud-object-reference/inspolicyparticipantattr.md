---
title: "InsPolicyParticipantAttr"
domain: financial-services-cloud-object-reference
topic: inspolicyparticipantattr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.603Z
estimatedTokens: 303
keywords: [InsPolicyParticipantAttr, attributes, insurance, policy, participant, API, version, 63.0, later, Calls]
---

# InsPolicyParticipantAttr

> Represents attributes for insurance policy participant. This object is
      available in API version 63.0 and later.

# InsPolicyParticipantAttr

Represents attributes for insurance policy participant. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition associated with the Insurance Policy Participant Attribute.This field is a relationship field. |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe attribute picklist value associated with the Insurance Policy Participant Attribute.This field is a relationship field. |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the attribute. |
| InsurancePolicyParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe insurance policy participant associated with the Insurance Policy Participant Attribute.This field is a relationship field. |
