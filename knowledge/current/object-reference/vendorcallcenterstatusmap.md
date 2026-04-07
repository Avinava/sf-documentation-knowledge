---
title: "VendorCallCenterStatusMap"
domain: object-reference
topic: vendorcallcenterstatusmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:43.971Z
estimatedTokens: 279
keywords: [VendorCallCenterStatusMap, Stores, mapping, call, center, vendor, agent, status, Salesforce, presence, API, 54.0]
---

> Stores a mapping between a call center vendor agent status and a Salesforce
         presence status for an associated call center. This object is available in API version
      54.0 and later.

# VendorCallCenterStatusMap

Stores a mapping between a call center vendor agent status and a Salesforce presence status for an associated call center. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, Omni-Channel and Service Cloud Voice must be enabled.

## Fields

| Field | Details |
| --- | --- |
| CallCenterId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to a call center.This is a relationship field.Relationship NameCallCenterRelationship TypeLookupRefers ToCallCenter |
| ExternalStatus | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionStatus value to set for the call center vendor agent. |
| ServicePresenceStatusId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to a presence status that can be assigned to a service channel.This is a relationship field.Relationship NameServicePresenceStatusRelationship TypeLookupRefers ToServicePresenceStatus |
