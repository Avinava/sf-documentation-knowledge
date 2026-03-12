---
title: "ConfigurationItem"
domain: agentforce
topic: configurationitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.428Z
estimatedTokens: 369
keywords: [ConfigurationItem, Represents, record, core, Salesforce, system, refers, configuration, item, stored, external, system., API, version, 65.0, later., Supported, Calls, Fields]
---

# ConfigurationItem

> Represents a record in the core Salesforce system that refers to a
         configuration item record stored in an external system. This object is available in
      API version 65.0 and later.

# ConfigurationItem

Represents a record in the core Salesforce system that refers to a configuration item record stored in an external system. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset related to a configuration item.This field is a relationship field.Relationship NameAssetRefers ToAsset |
| ConfigurationItem | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reference to an external configuration item stored in an external system. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
