---
title: "DelegateGroupMember"
domain: tooling-api
topic: delegategroupmember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.156Z
estimatedTokens: 219
keywords: [DelegateGroupMember, Represents, users, assigned, delegate, group, Tooling, API, version, 57.0, later., Supported, SOAP, Calls, REST, Fields]
---

# DelegateGroupMember

> Represents users assigned to the delegate group This object is available
      in Tooling API version 57.0 and later.

# DelegateGroupMember

Represents users assigned to the delegate group This object is available in Tooling API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DelegateGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe id of the associated delegate group. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe reference indicating the user id of the delegated administrator for the delegate group.NoteUser is the only valid value for this field. Group is reserved for future development.This field is a polymorphic relationship field.Relationship NamenullRelationship TypeLookupRefers ToGroup, User |
