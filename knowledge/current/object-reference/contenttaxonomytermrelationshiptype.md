---
title: "ContentTaxonomyTermRelationshipType"
domain: object-reference
topic: contenttaxonomytermrelationshiptype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.172Z
estimatedTokens: 242
keywords: [ContentTaxonomyTermRelationshipType, relationship, two, terms, content, taxonomy, API, version, 63.0, later, Calls, Special, Access, Rules, Usage]
---

# ContentTaxonomyTermRelationshipType

> Represents the type of relationship between two terms in a content
         taxonomy. This object is available in API version 63.0 and later.

# ContentTaxonomyTermRelationshipType

Represents the type of relationship between two terms in a content taxonomy. This object is available in API version 63.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To view this object, users need the permission View Content Taxonomy enabled.

## Fields

| Field | Details |
| --- | --- |
| ContentTaxonomyTrmRelaCatg | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionCategory of the relationship type.Possible values are:HasBroader |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDescription of the relationship type. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the relationship type. |

## Usage

ContentTaxonomyRelationshipType can’t be created, updated, or deleted. In API version 63.0, the default category for the relationship type is HasBroader.
