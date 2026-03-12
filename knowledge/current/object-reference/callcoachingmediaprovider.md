---
title: "CallCoachingMediaProvider"
domain: object-reference
topic: callcoachingmediaprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.958Z
estimatedTokens: 170
keywords: [CallCoachingMediaProvider, media, provider, call, recordings, API, version, 49.0, later, Calls]
---

# CallCoachingMediaProvider

> Represents the media provider for call recordings. This object is available in API version 49.0 and later.

# CallCoachingMediaProvider

Represents the media provider for call recordings. This object is available in API version 49.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the connection with the provider is active or not. |
| ProviderDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the media provider. |
| ProviderName | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the media provider. |
