---
title: "ContextTag"
domain: omnistudio
topic: contexttag
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.065Z
estimatedTokens: 322
keywords: [ContextTag, shortened, attribute, node, instead, fully, qualified, tag, structure, API, version, 59.0, later, SOAP, Calls]
---

# ContextTag

> Represents a shortened name of an attribute or node instead of its fully
         qualified tag structure name. This object is available in API version 59.0 and later.

# ContextTag

Represents a shortened name of an attribute or node instead of its fully qualified tag structure name. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextAttributeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context attribute record that's associated with the context tag.This field is a relationship field.Relationship NameContextAttributeRelationship TypeLookupRefers ToContextAttribute |
| ContextNodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context node record that's associated with the context tag.This field is a relationship field.Relationship NameContextNodeRelationship TypeLookupRefers ToContextNode |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the context tag. |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent context tag that's used to derive the current context tag.This field is available in API version 60.0 and later. |
