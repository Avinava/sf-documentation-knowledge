---
title: "ProductAttributeSet"
domain: object-reference
topic: productattributeset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.284Z
estimatedTokens: 327
keywords: [ProductAttributeSet, group, attributes, associated, product, API, version, 50.0, later, Calls, Special, Access, Rules]
---

# ProductAttributeSet

> Represents a group of attributes that can be associated with a
         product. This object is available in API version 50.0 and later.

# ProductAttributeSet

Represents a group of attributes that can be associated with a product. This object is available in API version 50.0 and later.

## Supported Calls

create, delete, describeSObjects(), query(), retrieve(), update, upsert

## Special Access Rules

You must have the B2B Commerce license and a CMS workspace to access products.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the product attribute set. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:da—Danishde—Germanen_US—EnglishesSpanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the product attribute set. |
