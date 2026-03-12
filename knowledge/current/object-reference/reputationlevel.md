---
title: "ReputationLevel"
domain: object-reference
topic: reputationlevel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.247Z
estimatedTokens: 261
keywords: [ReputationLevel, reputation, level, defined, Experience, Cloud, site, API, version, 32.0, later, Calls, Special, Access, Rules]
---

# ReputationLevel

> Represents a
					reputation level defined for an Experience Cloud site.
			This object is available in API version 32.0 and later.

# ReputationLevel

Represents a reputation level defined for an Experience Cloud site. This object is available in API version 32.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

This object is available only if digital experiences is enabled in your org. Only users with permissions to create or manage an Experience Cloud site can view the ReputationPointsRule records.

## Fields

| Field Name | Details |
| --- | --- |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for the reputation level. |
| LevelNumber | TypeintPropertiesFilter, Group, SortDescriptionThe rank of the reputation level. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the parent Experience Cloud site the reputation level applies to. |
| Threshold | TypedoublePropertiesFilter, SortDescriptionThe lower limit of reputation points associated with this reputation level. The maximum number of reputation points a user can accrue is 999,999,999,999,999. |
