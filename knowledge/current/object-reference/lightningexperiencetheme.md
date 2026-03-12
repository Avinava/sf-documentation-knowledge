---
title: "LightningExperienceTheme"
domain: object-reference
topic: lightningexperiencetheme
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.765Z
estimatedTokens: 802
keywords: [LightningExperienceTheme, theme, Lightning, Experience, API, Version, 42.0, later, Calls]
---

# LightningExperienceTheme

> Represents information for a theme in Lightning Experience. This
      object is available in API Version 42.0 and later.

# LightningExperienceTheme

Represents information for a theme in Lightning Experience. This object is available in API Version 42.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DefaultBrandingSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the default branding set.This is a relationship field.Relationship NameDefaultBrandingSetRelationship TypeLookupRefers ToBrandingSet |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the theme. Limit: 1,000 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the theme in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. The label corresponds to the theme name in the user interface. Limit: 70 characters.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Language of the label. Possible values are:da (Danish)de (German)en_US (English)es (Spanish)es_MX (Spanish - Mexico)fi (Finnish)fr (French)it (Italian)ja (Japanese)ko (Korean)nl_NL (Dutch)no (Norwegian)pt_BR (Portuguese (Brazil))ru (Russian)sv (Swedish)th (Thai)zh_CN (Chinese - Simplified)zh_TW (Chinese - Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The name of the theme. Specify up to 70 characters. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ShouldOverrideLoadingImage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a custom image overrides the Salesforce loading image (true) or not (false). |
