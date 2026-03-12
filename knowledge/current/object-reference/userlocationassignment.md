---
title: "UserLocationAssignment"
domain: object-reference
topic: userlocationassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.820Z
estimatedTokens: 344
keywords: [UserLocationAssignment, assignment, location, user, API, version, 57.0, later, Calls, Special, Access, Rules, Usage]
---

# UserLocationAssignment

> Represents the assignment between a location and a user. This object
		is available in API version 57.0 and later.

# UserLocationAssignment

Represents the assignment between a location and a user. This object is available in API version 57.0 and later.

## Supported Calls:

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules:

This object is only available in Salesforce Order Management orgs.

## Fields

| Field | Details |
| --- | --- |
| UserLocationAssignmentNumber | TypetextPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number for the association |
| AssignedTo | Typeforeignkey (user)PropertiesCreate, Filter, Group, Sort, UpdateDescriptionUser being associated with the location |
| Location | Typeforeignkey (location)PropertiesCreate, Filter, Group, Sort, UpdateDescriptionLocation being associated to the User |
| Username | Typestring (derived)PropertiesFilter, SortDescriptionUsername of the User that is associated to the Location |
| IsActive | TypebooleanPropertiesCreate, Filter, Group, Sort, UpdateDescriptionWhether the location is active or not |

## Usage:

The UserLocationAssignment object associates a user to specified work locations. To assign a user to multiple locations, create Multiple UserLocationAssignment objects. Use the isActive field to indicates the user's current active location.
