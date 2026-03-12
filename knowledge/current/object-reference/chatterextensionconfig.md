---
title: "ChatterExtensionConfig"
domain: object-reference
topic: chatterextensionconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.534Z
estimatedTokens: 311
keywords: [ChatterExtensionConfig, Configuration, Chatter, extension, Experience, Cloud, sites, API, version, 41.0, later, Calls]
---

# ChatterExtensionConfig

> Configuration for the Chatter extension for Experience Cloud sites. This
    object is available in API version 41.0 and later.

# ChatterExtensionConfig

Configuration for the Chatter extension for Experience Cloud sites. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CanCreate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the ChatterExtension can create an instance that appears by rendering. |
| CanRead | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the ChatterExtension can be viewed. |
| ChatterExtensionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ChatterExtension.This is a relationship field.Relationship NameChatterExtensionRelationship TypeLookupRefers ToChatterExtension |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Experience Cloud site where the ChatterExtension is deployed. |
| Position | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe position of the ChatterExtension icon in the Chatter publisher. |
