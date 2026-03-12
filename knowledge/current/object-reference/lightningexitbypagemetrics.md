---
title: "LightningExitByPageMetrics"
domain: object-reference
topic: lightningexitbypagemetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.757Z
estimatedTokens: 242
keywords: [LightningExitByPageMetrics, frequency, metrics, standard, pages, users, switched, Lightning, Experience, Salesforce, Classic, API, version, 44.0, later]
---

# LightningExitByPageMetrics

> Represents frequency metrics about the standard
			pages within which users switched from Lightning Experience to
			Salesforce Classic. This object is available in API version
		44.0 and later.

# LightningExitByPageMetrics

Represents frequency metrics about the standard pages within which users switched from Lightning Experience to Salesforce Classic. This object is available in API version 44.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Not available in sandbox orgs.

## Fields

| Field Name | Details |
| --- | --- |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionThe date that the data was recorded. |
| PageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the page from which the user switched from Lightning Experience to Salesforce Classic. |
| RecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records per user and page. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionUserId of the user who views page.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
