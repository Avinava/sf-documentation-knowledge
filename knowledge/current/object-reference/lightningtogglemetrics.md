---
title: "LightningToggleMetrics"
domain: object-reference
topic: lightningtogglemetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.833Z
estimatedTokens: 222
keywords: [LightningToggleMetrics, users, switched, Lightning, Experience, back, Salesforce, Classic, API, version, 43.0, later, Calls, Special, Access]
---

# LightningToggleMetrics

> Represents users who switched from Lightning Experience back to
			Salesforce Classic. This object is available in API version 43.0 and
		later.

# LightningToggleMetrics

Represents users who switched from Lightning Experience back to Salesforce Classic. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Not available in sandbox orgs.

## Fields

| Field Name | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUser switched from Lightning Experience to Salesforce Classic or from Salesforce Classic to Lightning Experience. |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionDate user switched. |
| RecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of user switches. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionUserId of user who switched.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
