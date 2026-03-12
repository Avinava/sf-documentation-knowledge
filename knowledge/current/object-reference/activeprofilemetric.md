---
title: "ActiveProfileMetric"
domain: object-reference
topic: activeprofilemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.981Z
estimatedTokens: 265
keywords: [ActiveProfileMetric, profile, associated, active, assigned, purchased, user, licenses, API, version, 52.0, later, Calls]
---

# ActiveProfileMetric

> Represents the profile associated with the active, assigned, and purchased
         user licenses. This object is available in API version 52.0 and later.

# ActiveProfileMetric

Represents the profile associated with the active, assigned, and purchased user licenses. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActiveUserCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of users assigned this profile who have logged in within the last 30 days. |
| AssignedUserCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of users assigned this profile. |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionDate that profile metrics were collected. |
| ProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the profile.This is a relationship field.Relationship NameProfileRelationship TypeLookupRefers ToProfile |
| UserLicenseId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user license.This is a relationship field.Relationship NameUserLicenseRelationship TypeLookupRefers ToUserLicense |
