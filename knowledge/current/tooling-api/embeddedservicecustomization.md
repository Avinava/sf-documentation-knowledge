---
title: "EmbeddedServiceCustomization"
domain: tooling-api
topic: embeddedservicecustomization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.685Z
keywords: [EmbeddedServiceCustomization, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# EmbeddedServiceCustomization

# EmbeddedServiceCustomization

Represents a mapping between the EmbeddedServiceCustomization record parent and the EmbeddedServiceConfiguration or EmbeddedServiceMenuSettings, for a set of Embedded Service resources. Each resource is set of customizations applied via an uploaded static resource for your Embedded Chat. This object is available in API version 52.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CustomizationName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the custom set of resources you create for your embedded component. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed to describe a set of custom resources. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the EmbeddedServiceConfig or EmbeddedServiceMenuSettings parent record. This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToEmbeddedServiceConfig, EmbeddedServiceMenuSettings |