---
title: "ContentTaxonomyRelatedTerm"
domain: object-reference
topic: contenttaxonomyrelatedterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.157Z
estimatedTokens: 505
keywords: [ContentTaxonomyRelatedTerm, relationship, term, content, taxonomy, belongs, API, version, 63.0, later, Calls, Special, Access, Rules, Usage]
---

# ContentTaxonomyRelatedTerm

> Represents the relationship between a term and the content taxonomy
         to which the term belongs. This object is available in API version 63.0 and
      later.

# ContentTaxonomyRelatedTerm

Represents the relationship between a term and the content taxonomy to which the term belongs. This object is available in API version 63.0 and later.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

To view this object, users need the permission View Content Taxonomy enabled. To edit this object, users need View Content Taxonomy and Manage Content Taxonomy enabled.

## Fields

| Field | Details |
| --- | --- |
| ContentTaxonomyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the content taxonomy to which the term belongs.This field is a relationship field.Relationship NameContentTaxonomyRelationship TypeLookupRefers ToContentTaxonomy object |
| ContentTaxonomyTermId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the term that belongs to the content taxonomy.This field is a relationship field.Relationship NameContentTaxonomyTermRelationship TypeLookupRefers ToContentTaxonomyTerm object |

## Usage

To include a term in a taxonomy, you must use this object in addition to the ContentTaxonomyTerm and ContentTaxonomy objects.

#### See Also

-   [ContentTaxonomy](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomy.htm "Represents a content taxonomy, which is used to classify and organize Salesforce CMS content. To create a hierarchy of terms in a content taxonomy, use this object in addition to the ContentTaxonomyTerm, ContentTaxonomyRelatedTerm, and ContentTaxonomyTermRelatedTerm objects. This object is available in API version 63.0 and later.")

-   [ContentTaxonomyTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyterm.htm "Represents a term in a content taxonomy. Terms describe what content is or how it's used, and they’re organized in parent-child relationships in the taxonomy hierarchy. This object is available in API version 63.0 and later.")

## Related Topics

- ContentTaxonomy (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomy.htm)
- ContentTaxonomyTerm (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyterm.htm)
