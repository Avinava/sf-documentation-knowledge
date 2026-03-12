---
title: "SiteIframeWhitelistUrl"
domain: object-reference
topic: siteiframewhitelisturl
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.236Z
estimatedTokens: 313
keywords: [SiteIframeWhitelistUrl, external, domains, allow, frame, Salesforce, site, Experience, Cloud, pages, API, version, 44.0, later, Calls]
---

# SiteIframeWhitelistUrl

> Represents a list of external domains that you allow to frame your
			Salesforce site or Experience Cloud site pages. This object is available in API
		version 44.0 and later.

# SiteIframeWhitelistUrl

Represents a list of external domains that you allow to frame your Salesforce site or Experience Cloud site pages. This object is available in API version 44.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

-   Customer Portal users can’t access this object.
-   To view this object, you must have the “View Setup and Configuration” permission.

## Fields

| Field Name | Details |
| --- | --- |
| SiteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the site to include in the inline frame.This is a relationship field.Relationship NameSiteRelationship TypeLookupRefers ToSite |
| Url | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe domain allowed to frame your Salesforce site or Experience Cloud site page. Accepts these formats: example, example.com, *example.com, and https://example.com. |
