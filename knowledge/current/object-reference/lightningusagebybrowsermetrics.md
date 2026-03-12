---
title: "LightningUsageByBrowserMetrics"
domain: object-reference
topic: lightningusagebybrowsermetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.840Z
estimatedTokens: 197
keywords: [LightningUsageByBrowserMetrics, Lightning, Experience, usage, grouped, user’s, browser, API, version, 43.0, later, Calls, Special, Access, Rules]
---

# LightningUsageByBrowserMetrics

> Represents Lightning Experience usage grouped by user’s browser.
		This object is available in API version 43.0 and later.

# LightningUsageByBrowserMetrics

Represents Lightning Experience usage grouped by user’s browser. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Not available in sandbox orgs.

## Fields

| Field Name | Details |
| --- | --- |
| Browser | TypestringPropertiesFilter, Group, Nillable, SortDescriptionBrowser used to access Lightning Experience. |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionDate user accessed Lightning Experience. |
| PageName | TypestringPropertiesFilter, Group, SortDescriptionPage user viewed in Lightning Experience. |
| TotalCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of pages accessed in Lightning Experience. |
