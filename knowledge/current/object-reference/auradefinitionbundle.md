---
title: "AuraDefinitionBundle"
domain: object-reference
topic: auradefinitionbundle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.275Z
estimatedTokens: 746
keywords: [AuraDefinitionBundle, Lightning, Aura, component, definition, bundle, application, resources, API, version, 32.0, later, Calls, Usage]
---

# AuraDefinitionBundle

> Represents a Lightning Aura component definition bundle, such as a
			component or application bundle. A bundle contains a Lightning Aura component definition
			and all its related resources. This object is available in API version 32.0 and
		later.

# AuraDefinitionBundle

Represents a Lightning Aura component definition bundle, such as a component or application bundle. A bundle contains a Lightning Aura component definition and all its related resources. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe API version for this bundle. Every bundle has an API version specified at creation. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe text description of the bundle. Maximum size of 255 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the record in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the MasterLabel. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMaster label for the Lightning bundle. This internal label doesn’t get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Usage

For more information, see the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/ "HTML (New Window)").
