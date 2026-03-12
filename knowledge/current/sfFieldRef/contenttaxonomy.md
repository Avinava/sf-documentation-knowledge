---
title: "ContentTaxonomy"
domain: sfFieldRef
topic: contenttaxonomy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.184Z
estimatedTokens: 353
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

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContentTaxonomy](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contenttaxonomy.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| Id | Content Taxonomy ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Content Taxonomy Language | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Content Taxonomy Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
