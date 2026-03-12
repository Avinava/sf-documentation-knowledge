---
title: "LightningUsageByPageMetrics"
domain: object-reference
topic: lightningusagebypagemetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.852Z
estimatedTokens: 279
keywords: [LightningUsageByPageMetrics, standard, pages, users, viewed, frequently, Lightning, Experience, API, version, 43.0, later, Calls, Special, Access]
---

# LightningUsageByPageMetrics

> Represents standard pages users viewed most frequently in Lightning
			Experience. This object is available in API version 43.0 and later.

# LightningUsageByPageMetrics

Represents standard pages users viewed most frequently in Lightning Experience. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Not available in sandbox orgs.

## Fields

| Field Name | Details |
| --- | --- |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionDate user viewed page in Lightning Experience. |
| PageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of page user viewed. |
| TotalCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of pages viewed. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionUserId of user who viewed page.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## See Also

For more information about LightningUsageByPageMetrics syntax and considerations, see [REST API Developer Guide: Lightning Usage by Page](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_lightning_usagebypagemetrics.htm).
