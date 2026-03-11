---
title: "Territory2SupportedObject"
domain: tooling-api
topic: territory2supportedobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.866Z
keywords: [Territory2SupportedObject, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# Territory2SupportedObject

# Territory2SupportedObject

Represents the object type supported by territories. This object is available in API version 57.0 and later.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API Methods

GET, HEAD, Query

## Special Access Rules

Enable the Manage Territories user permission.

## Fields

| Field | Details |
| --- | --- |
| DefaultAccessLevel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDefault access level for objects assigned to territories. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier of the field. |
| ObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionObject type supported by the territory. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStatus of the support activation of the object type. |