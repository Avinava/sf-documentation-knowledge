---
title: "ServicePresenceStatus"
domain: tooling-api
topic: servicepresencestatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.765Z
keywords: [ServicePresenceStatus, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# ServicePresenceStatus

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