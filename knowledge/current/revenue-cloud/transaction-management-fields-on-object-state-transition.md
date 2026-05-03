---
title: "Transaction Management Fields on Object State Transition"
domain: revenue-cloud
topic: transaction-management-fields-on-object-state-transition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-03T00:28:15.834Z
estimatedTokens: 148
keywords: [Transaction, Management, State, Transition, Standard, extend, define, two, statuses, API, 60.0]
---

> Standard and custom fields extend the standard Object State Transition object
         for use in Transaction Management to define the valid transition between two statuses.
      This object is available in API version 60.0 and later.

# Transaction Management Fields on Object State Transition

Standard and custom fields extend the standard Object State Transition object for use in Transaction Management to define the valid transition between two statuses. This object is available in API version 60.0 and later.

## Fields

| Field | Details |
| --- | --- |
| CustomPermissionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the associated custom permission.This field is a relationship field.Relationship NameCustomPermissionRelationship TypeLookupRefers ToCustomPermission |
