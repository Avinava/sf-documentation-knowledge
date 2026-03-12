---
title: "Stamp"
domain: object-reference
topic: stamp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.411Z
estimatedTokens: 253
keywords: [Stamp, User, Specialty, API, version, 39.0, later, Calls]
---

# Stamp

> Represents a User Specialty.
		This object is available in API version 39.0
					and later.

# Stamp

Represents a User Specialty. This object is available in API version 39.0 and later.

Create User Specialty labels. Specialties can be any term you want, up to 50 characters, including spaces and underscores.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Description |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUse this field to describe what the user specialty means and how it applies to a user. You have a 255 character maximum including spaces and underscores. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe User Specialty label that appears under the user’s profile picture. You can create any label you want as long as it’s within the 50 character maximum, including spaces and underscores. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionThe id of the org or network.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToOrganization |
