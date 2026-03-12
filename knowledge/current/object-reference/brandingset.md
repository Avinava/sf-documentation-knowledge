---
title: "BrandingSet"
domain: object-reference
topic: brandingset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.609Z
estimatedTokens: 551
keywords: [BrandingSet, definition, branding, Experience, Builder, site, defined, Theme, panel, API, version, 40.0, later, Calls, Special]
---

# BrandingSet

> Represents the definition of a set of branding properties for an
         Experience Builder site, as defined in the Theme panel in Experience Builder. This
      object is available in API version 40.0 and later.

# BrandingSet

Represents the definition of a set of branding properties for an Experience Builder site, as defined in the Theme panel in Experience Builder. This object is available in API version 40.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

The BrandingSet type is available when at least one of the following is enabled in your org: Digital Experiences, Surveys, or Lightning Experience. All users, including unauthenticated guest users, can access this type.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the set of branding properties. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. API name of the BrandingSet object. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language used in the branding set. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The user-facing label of the set of branding properties. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix with a 15 character limit. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. NamespacePrefix is null if the publisher is Salesforce. |
