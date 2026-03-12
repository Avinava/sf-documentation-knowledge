---
title: "BrandingSetProperty"
domain: tooling-api
topic: brandingsetproperty
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.763Z
estimatedTokens: 191
keywords: [BrandingSetProperty, Represents, branding, set, Theme, panel, Experience, Builder., API, version, 40.0, later., Supported, SOAP, Calls, REST, Fields]
---

# BrandingSetProperty

> Represents a branding set property in the Theme panel in Experience
      Builder. This object is available in API version 40.0 and later.

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

## Related Topics

- BrandingSet (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_brandingset.htm)
