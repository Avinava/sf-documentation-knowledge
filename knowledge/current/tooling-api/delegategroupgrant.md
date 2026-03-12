---
title: "DelegateGroupGrant"
domain: tooling-api
topic: delegategroupgrant
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.152Z
estimatedTokens: 257
keywords: [DelegateGroupGrant, Represents, Delegate, Group, Grant, indicating, permissions, granted, delegate, group., Tooling, API, version, 57.0, later., Supported, SOAP, Calls, REST, Fields]
---

# DelegateGroupGrant

> Represents a Delegate Group Grant, indicating permissions granted to a
         delegate group. This object is available in Tooling API version 57.0 and later.

# DelegateGroupGrant

Represents a Delegate Group Grant, indicating permissions granted to a delegate group. This object is available in Tooling API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DelegateGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe id for the associated delegate group. |
| GrantedId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe id for the associated object granted to the delegate group.This field is a polymorphic relationship field.Relationship NamenullRelationship TypeLookupRefers ToCustomObject, Group, PermissionSet, PermissionSetGroup, Profile, User, UserRole |
| KeyPrefix | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionThe prefix of the object id that designates the object type. |
