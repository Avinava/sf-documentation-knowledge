---
title: "BrandingSetProperty"
domain: tooling-api
topic: brandingsetproperty
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.303Z
keywords: [BrandingSetProperty, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# BrandingSetProperty

# BrandingSetProperty

Represents a branding set property in the Theme panel in Experience Builder. This object is available in API version 40.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| BrandingSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the BrandingSet. |
| PropertyName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the branding set property, such as TextColor. |
| PropertyValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value of the branding set property, such as #333. |