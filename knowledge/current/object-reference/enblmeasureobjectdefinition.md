---
title: "EnblMeasureObjectDefinition"
domain: object-reference
topic: enblmeasureobjectdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.603Z
estimatedTokens: 1198
keywords: [EnblMeasureObjectDefinition, criteria, tracks, job-related, activity, Enablement, measure, program, separate, measure's, source, API, version, 56.0, later]
---

# EnblMeasureObjectDefinition

> Represents the criteria for an object that tracks the job-related
         activity for an Enablement measure in an Enablement program. A separate
         EnblMeasureObjectDefinition is used for a measure's source object and each optional related
         object. This object is available in API version 56.0 and later.

# EnblMeasureObjectDefinition

Represents the criteria for an object that tracks the job-related activity for an Enablement measure in an Enablement program. A separate EnblMeasureObjectDefinition is used for a measure's source object and each optional related object. This object is available in API version 56.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| EnablementMeasureDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe measure that the EnblMeasureObjectDefinition applies to. This field is a relationship field.Relationship NameEnablementMeasureDefinitionRelationship TypeLookupRefers ToEnablementMeasureDefinition |
| FilterLogic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn expression that determines how to evaluate the optional field filters for the object. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReserved for future use. Don’t edit this field. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the EnblMeasureObjectDefinition value. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.Available in API version 62.0 and later. |
| ObjectApiName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unique name in the API for the measure's source object or optional related object that the EnblMeasureObjectDefinition describes.For example, if you're measuring the number of deals won for a specific product, this field on one EnblMeasureObjectDefinition references the API name of the Opportunity source object and this field on another EnblMeasureObjectDefinition references the API name of the Opportunity Product related object. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA number that specifies the order of the EnblMeasureObjectDefinition, relative to other EnblMeasureObjectDefinition records under the same EnablementMeasureDefinition, starting at 1. |

## Usage

An EnablementMeasureDefinition can have multiple EnblMeasureObjectDefinition references, depending on the number of related objects in the measure. Consider an example measure that tracks activity on the Opportunity source object and the Account related object.

-   The EnablementMeasureDefinition identifies the Opportunity source object.
-   An EnblMeasureObjectDefinition specifies the criteria on the Opportunity source object.
-   An EnblMeasureObjectDefinition specifies the criteria on the Account related object.
