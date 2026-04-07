---
title: "LightningUsageByFlexiPageMetrics"
domain: object-reference
topic: lightningusagebyflexipagemetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:34.441Z
estimatedTokens: 200
keywords: [LightningUsageByFlexiPageMetrics, pages, users, viewed, frequently, Lightning, Experience, API, 43.0]
---

> Represents custom pages users viewed most frequently in Lightning
			Experience. This object is available in API version 43.0 and later.

# LightningUsageByFlexiPageMetrics

Represents custom pages users viewed most frequently in Lightning Experience. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Not available in sandbox orgs.

## Fields

| Field Name | Details |
| --- | --- |
| FlexiPageNameOrId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName or Id of custom page user viewed in Lightning Experience. |
| FlexiPageType | TypestringPropertiesFilter, Group, SortDescriptionCustom page type. |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionDate user viewed page in Lightning Experience. |
| TotalCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of custom pages viewed. |
