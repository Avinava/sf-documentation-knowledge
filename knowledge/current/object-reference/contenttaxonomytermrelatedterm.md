---
title: "ContentTaxonomyTermRelatedTerm"
domain: object-reference
topic: contenttaxonomytermrelatedterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.168Z
estimatedTokens: 559
keywords: [ContentTaxonomyTermRelatedTerm, relationship, two, terms, content, taxonomy, API, version, 63.0, later, Calls, Special, Access, Rules, Usage]
---

# ContentTaxonomyTermRelatedTerm

> Represents the relationship between two terms in a content
         taxonomy. This object is available in API version 63.0 and later.

# ContentTaxonomyTermRelatedTerm

Represents the relationship between two terms in a content taxonomy. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

To view this object, users need the permission View Content Taxonomy enabled. To edit this object, users need View Content Taxonomy and Manage Content Taxonomy enabled.

## Fields

| Field | Details |
| --- | --- |
| ContentTaxonomyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the content taxonomy to which the term belongs.This field is a relationship field.Relationship NameContentTaxonomyRelationship TypeLookupRefers ToContentTaxonomy object |
| ContentTaxonomyTermId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the primary term that has a relationship with another term.This field is a relationship field.Relationship NameContentTaxonomyTermRelationship TypeLookupRefers ToContentTaxonomyTerm object |
| ContentTaxonomyTrmRelaTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the type of relationship between the two taxonomy terms.This field is a relationship field.Relationship NameContentTaxonomyTrmRelaTypeRelationship TypeLookupRefers ToContentTaxonomyTermRelationshipType object |
| RelatedContentTaxonomyTermId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the term that is related to the primary term.This field is a relationship field.Relationship NameRelatedContentTaxonomyTermRelationship TypeLookupRefers ToContentTaxonomyTerm object |

## Usage

To relate a term to another term in a content taxonomy, use this object in addition to the ContentTaxonomyTerm object. This object can’t be updated. You can only create and delete it.

#### See Also

-   [ContentTaxonomyTerm](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyterm.htm "Represents a term in a content taxonomy. Terms describe what content is or how it's used, and they’re organized in parent-child relationships in the taxonomy hierarchy. This object is available in API version 63.0 and later.")

## Related Topics

- ContentTaxonomyTerm (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomyterm.htm)
