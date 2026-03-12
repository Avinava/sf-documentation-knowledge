---
title: "EnablementProgramDefinition"
domain: object-reference
topic: enablementprogramdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.595Z
estimatedTokens: 729
keywords: [EnablementProgramDefinition, Enablement, program, Metadata, API, version, 61.0, later, Calls, Special, Access, Rules]
---

# EnablementProgramDefinition

> Represents Enablement program information in Metadata API. This object
      is available in API version 61.0 and later.

# EnablementProgramDefinition

Represents Enablement program information in Metadata API. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To access this object, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| EnablementProgramId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Enablement program to reference in Metadata API.This field is a relationship field.Relationship NameEnablementProgramRelationship TypeLookupRefers ToEnablementProgram |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionReserved for future use. Don’t edit this field. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for this EnablementProgramDefinition value. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.Available in API version 62.0 and later. |
