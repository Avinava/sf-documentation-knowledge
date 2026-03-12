---
title: "ActivePermSetLicenseMetric"
domain: object-reference
topic: activepermsetlicensemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.976Z
estimatedTokens: 401
keywords: [ActivePermSetLicenseMetric, number, active, assigned, purchased, permission, licenses, org, API, version, 52.0, later, Calls]
---

# ActivePermSetLicenseMetric

> Represents the number of active, assigned, and purchased permission set
         licenses in the org. This object is available in API version 52.0 and later.

# ActivePermSetLicenseMetric

Represents the number of active, assigned, and purchased permission set licenses in the org. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActiveUserCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of users assigned this permission set license who have logged in within the last 30 days. |
| AssignedUserCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of users assigned this permission set license. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of this permission set license object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the permission set license. |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionDate that permission set license metrics were collected. |
| PermissionSetLicenseId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the permission set license.This is a relationship field.Relationship NamePermissionSetLicenseRelationship TypeLookupRefers ToPermissionSetLicense |
| TotalLicenses | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of this permission set licenses that are available to your org. |
