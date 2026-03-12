---
title: "ServicePresenceStatus"
domain: tooling-api
topic: servicepresencestatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.898Z
estimatedTokens: 215
keywords: [ServicePresenceStatus, presence, status, assigned, service, channel, API, version, 65.0, later, SOAP, Calls, REST, Special, Access]
---

# ServicePresenceStatus

> Represents a presence status that can be assigned to a service channel. This
         object is available in API version 65.0 and later.

# ServicePresenceStatus

Represents a presence status that can be assigned to a service channel. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available only if Omni-Channel is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the presence status. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the presence status. |
