---
title: "ContentTaxonomyTerm"
domain: object-reference
topic: contenttaxonomyterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.163Z
estimatedTokens: 749
keywords: [ContentTaxonomyTerm, term, content, taxonomy, Terms, describe, how, it's, they’re, organized, parent-child, relationships, hierarchy, API, version]
---

# ContentTaxonomyTerm

> Represents a term in a content taxonomy. Terms describe what content is or
         how it's used, and they’re organized in parent-child relationships in the taxonomy
         hierarchy. This object is available in API version 63.0 and later.

# ContentTaxonomyTerm

Represents a term in a content taxonomy. Terms describe what content is or how it's used, and they’re organized in parent-child relationships in the taxonomy hierarchy. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To view this object, users need the permission View Content Taxonomy enabled. To edit this object, users need View Content Taxonomy and Manage Content Taxonomy enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the content taxonomy term. This description appears in the API and in the Content Taxonomy tab in the Digital Experiences App. The maximum length is 255 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique name of the content taxonomy term in the API. This field is unique within your organization. The name:must be 80 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan't include spacescan't end with an underscorecan't contain 2 consecutive underscores |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external ID of the content taxonomy term. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the content taxonomy term. The name must be between 2 and 255 characters long. |

## Usage

To include a term in a taxonomy, you must also use the objects ContentTaxonomyRelatedTerm and ContentTaxonomy. If you create only a ContentTaxonomyTerm, then the term isn’t considered part of the taxonomy, and isn't visible. To relate this term to another term in your taxonomy, use the object ContentTaxonomyTermRelatedTerm.

#### See Also

-   [ContentTaxonomy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomy.htm "Represents a content taxonomy, which is used to classify and organize Salesforce CMS content. To create a hierarchy of terms in a content taxonomy, use this object in addition to the ContentTaxonomyTerm, ContentTaxonomyRelatedTerm, and ContentTaxonomyTermRelatedTerm objects. This object is available in API version 63.0 and later.")

-   [ContentTaxonomyRelatedTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyrelatedterm.htm "Represents the relationship between a term and the content taxonomy to which the term belongs. This object is available in API version 63.0 and later.")

-   [ContentTaxonomyTermRelatedTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomytermrelatedterm.htm "Represents the relationship between two terms in a content taxonomy. This object is available in API version 63.0 and later.")

## Related Topics

- ContentTaxonomy (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomy.htm)
- ContentTaxonomyRelatedTerm (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyrelatedterm.htm)
- ContentTaxonomyTermRelatedTerm (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomytermrelatedterm.htm)
