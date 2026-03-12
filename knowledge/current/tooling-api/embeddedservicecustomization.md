---
title: "EmbeddedServiceCustomization"
domain: tooling-api
topic: embeddedservicecustomization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.385Z
estimatedTokens: 303
keywords: [EmbeddedServiceCustomization, mapping, record, parent, EmbeddedServiceConfiguration, EmbeddedServiceMenuSettings, Embedded, Service, resources, resource, customizations, applied, via, uploaded, Chat]
---

# EmbeddedServiceCustomization

> Represents a mapping between the EmbeddedServiceCustomization record parent
         and the EmbeddedServiceConfiguration or EmbeddedServiceMenuSettings, for a set of Embedded
         Service resources. Each resource is set of customizations applied via an uploaded static
         resource for your Embedded Chat. This object is available in API version 52.0 and
      later.

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
