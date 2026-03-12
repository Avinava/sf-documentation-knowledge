---
title: "ContentTaxonomy"
domain: object-reference
topic: contenttaxonomy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.153Z
estimatedTokens: 620
keywords: [ContentTaxonomy, content, taxonomy, classify, organize, Salesforce, CMS, hierarchy, terms, addition, ContentTaxonomyTerm, ContentTaxonomyRelatedTerm, ContentTaxonomyTermRelatedTerm, objects, API]
---

# ContentTaxonomy

> Represents a content taxonomy, which is used to classify and organize
         Salesforce CMS content. To create a hierarchy of terms in a content taxonomy, use this
         object in addition to the ContentTaxonomyTerm, ContentTaxonomyRelatedTerm, and
         ContentTaxonomyTermRelatedTerm objects. This object is available in API version 63.0
      and later.

# ContentTaxonomy

Represents a content taxonomy, which is used to classify and organize Salesforce CMS content. To create a hierarchy of terms in a content taxonomy, use this object in addition to the ContentTaxonomyTerm, ContentTaxonomyRelatedTerm, and ContentTaxonomyTermRelatedTerm objects. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To view this object, users need the permission View Content Taxonomy enabled. To edit this object, users need View Content Taxonomy and Manage Content Taxonomy enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the content taxonomy. This description appears in the API and in the Content Taxonomy tab in the Digital Experiences App. The maximum length is 255 characters. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the content taxonomy. |

#### See Also

-   [ContentTaxonomyRelatedTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyrelatedterm.htm "Represents the relationship between a term and the content taxonomy to which the term belongs. This object is available in API version 63.0 and later.")

-   [ContentTaxonomyTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyterm.htm "Represents a term in a content taxonomy. Terms describe what content is or how it's used, and they’re organized in parent-child relationships in the taxonomy hierarchy. This object is available in API version 63.0 and later.")

-   [ContentTaxonomyTermRelatedTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomytermrelatedterm.htm "Represents the relationship between two terms in a content taxonomy. This object is available in API version 63.0 and later.")

-   [ContentTaxonomyTermRelationshipType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomytermrelationshiptype.htm "Represents the type of relationship between two terms in a content taxonomy. This object is available in API version 63.0 and later.")

## Related Topics

- ContentTaxonomyRelatedTerm (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyrelatedterm.htm)
- ContentTaxonomyTerm (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyterm.htm)
- ContentTaxonomyTermRelatedTerm (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomytermrelatedterm.htm)
- ContentTaxonomyTermRelationshipType (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomytermrelationshiptype.htm)
