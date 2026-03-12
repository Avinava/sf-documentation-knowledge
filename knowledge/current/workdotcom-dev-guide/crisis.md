---
title: "Crisis"
domain: workdotcom-dev-guide
topic: crisis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.247Z
estimatedTokens: 622
keywords: [Crisis, major, event, affects, Employee, InternalOrganizationUnit, API, version, 48.0, later, 49.0, supports, reports, criteria-based, sharing]
---

# Crisis

> Represents a major crisis event that affects an Employee in an
      InternalOrganizationUnit. This object is available in API version 48.0 and later. In API
    version 49.0 and later, this object supports reports, criteria-based sharing rules, and history
    tracking, plus you can exclude individual fields from custom page layouts.

# Crisis

Represents a major crisis event that affects an Employee in an InternalOrganizationUnit. This object is available in API version 48.0 and later. In API version 49.0 and later, this object supports reports, criteria-based sharing rules, and history tracking, plus you can exclude individual fields from custom page layouts.

Work.com uses this object to track and describe crisis situations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access this object, you must be assigned a Workplace Command Center permission set license and the Provides access to Workplace Command Center features system permission.

## Fields

| Field | Details |
| --- | --- |
| CrisisType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The type or category of crisis.Possible values are:Economic CrisisNatural DisasterPandemicWar |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe crisis description. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the crisis ended. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The crisis record name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API to perform the create operation. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date the crisis started. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

CrisisHistory (API version 49.0)

History is available for tracked fields of the object.

CrisisOwnerSharingRule

Sharing rules are available for the object.

CrisisShare (API version 49.0)

Sharing is available for the object.
