---
title: "StampAssignment"
domain: object-reference
topic: stampassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:41.707Z
estimatedTokens: 185
keywords: [StampAssignment, assignment, User, Specialty, API, 39.0]
---

> Represents assignment of a User Specialty
				to a user. This object is available in API version 39.0 and
		later.

# StampAssignment

Represents assignment of a User Specialty to a user. This object is available in API version 39.0 and later.

Assign a User Specialty to users. This label appears beneath their profile photo.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| StampId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique id generated when creating a user specialty.This is a relationship field.Relationship NameStampRelationship TypeLookupRefers ToStamp |
| SubjectId | TypereferencePropertiesFilter, Group, SortDescriptionThe id for the user getting the User Specialty label.This is a relationship field.Relationship NameSubjectRelationship TypeLookupRefers ToUser |
