---
title: "PresenceDeclineReason"
domain: tooling-api
topic: presencedeclinereason
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.582Z
estimatedTokens: 227
keywords: [PresenceDeclineReason, reason, agent, select, declining, Omni-Channel, work, API, version, 65.0, later, SOAP, Calls, REST, Special]
---

# PresenceDeclineReason

> Represents the reason an
         agent can select when declining an Omni-Channel work request. This object
         is available in API version 65.0 and later.

# PresenceDeclineReason

Represents the reason an agent can select when declining an Omni-Channel work request. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available only if Omni-Channel is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the presence decline reason. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the presence decline reason. |
