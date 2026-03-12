---
title: "Territory2SupportedObject"
domain: tooling-api
topic: territory2supportedobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.957Z
estimatedTokens: 217
keywords: [Territory2SupportedObject, Represents, supported, territories., API, version, 57.0, later., Supported, SOAP, Calls, REST, Special, Access, Rules, Fields]
---

# Territory2SupportedObject

> Represents the object type supported by territories. This object is
      available in API version 57.0 and later.

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
