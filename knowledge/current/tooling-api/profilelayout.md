---
title: "ProfileLayout"
domain: tooling-api
topic: profilelayout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.626Z
estimatedTokens: 209
keywords: [ProfileLayout, profile, layout, SOAP, Calls, REST, HTTP, Special, Access, Rules]
---

# ProfileLayout

> Represents a profile
        layout.

# ProfileLayout

Represents a profile layout.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

query(), retrieve()

## Supported REST HTTP Methods

GET

## Special Access Rules

As of Summer ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| LayoutId | TypeIDPropertiesFilter, Group, SortDescriptionThe unique identifier for this layout. |
| ProfileId | TypeIDPropertiesFilter, Group, SortDescriptionThe unique identifier for this profile. |
| RecordTypeId | TypeIDPropertiesFilter, Group, SortDescriptionThe unique identifier for the record. |
| TableEnumOrId | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionThe enum (for example, Account) or ID of the object this field is on. |
