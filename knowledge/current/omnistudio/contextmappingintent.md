---
title: "ContextMappingIntent"
domain: omnistudio
topic: contextmappingintent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.409Z
keywords: [ContextMappingIntent, Supported, Calls, REST, API, Methods, Fields]
---

# ContextMappingIntent

# ContextMappingIntent

Represents the purpose associated to a context mapping. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextMappingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context mapping that's associated with usage intent.This field is a relationship field.Relationship NameContextMappingRelationship TypeMaster-detailRefers ToContextMapping (the master object) |
| MappingIntent | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the purpose to identify the type of context mapping required.Possible values are:association—Associationhydration—Hydrationpersistence—Persistencetranslation—Translation |