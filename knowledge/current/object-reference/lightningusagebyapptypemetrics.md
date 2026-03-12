---
title: "LightningUsageByAppTypeMetrics"
domain: object-reference
topic: lightningusagebyapptypemetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.837Z
estimatedTokens: 205
keywords: [LightningUsageByAppTypeMetrics, number, users, Lightning, Experience, Salesforce, Mobile, API, version, 43.0, later, Calls, Special, Access, Rules]
---

# LightningUsageByAppTypeMetrics

> Represents number of users on Lightning Experience and Salesforce
			Mobile. This object is available in API version 43.0 and later.

# LightningUsageByAppTypeMetrics

Represents number of users on Lightning Experience and Salesforce Mobile. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Not available in sandbox orgs.

## Fields

| Field Name | Details |
| --- | --- |
| AppExperience | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUser’s app (Lightning Experience or Salesforce Mobile). |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionDate user accessed Lightning Experience or Salesforce Mobile. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionUserId for user accessing Lightning Experience or Salesforce Mobile.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
