---
title: "ContextNodeAttrDictionary"
domain: omnistudio
topic: contextnodeattrdictionary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.700Z
estimatedTokens: 318
keywords: [ContextNodeAttrDictionary, Represents, relationship, between, ContextNodeMapping, ContextDictionary, objects, junction, table., API, version, 62.0, later., Supported, SOAP, Calls, REST, Fields]
---

# ContextNodeAttrDictionary

> Represents
         the
         relationship between
         the
         ContextNodeMapping and ContextDictionary
         objects
         as a junction table. This object is available in API version 62.0
      and later.

# ContextNodeAttrDictionary

Represents the relationship between the ContextNodeMapping and ContextDictionary objects as a junction table. This object is available in API version 62.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextAttrrDictIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the context attribute dictionary. |
| ContextNodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the context node.This field is a relationship field.Relationship NameContextNodeRelationship TypeLookupRefers ToContextNode |
| ContextNodeMapingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the context node mapping.This field is a relationship field.Relationship NameContextNodeMappingRelationship TypeLookupRefers ToContextNodeMapping |
| ContextNodeTagPrefix | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe tag prefix of the context node that's used to create the unique identifier of the parent context node. |
