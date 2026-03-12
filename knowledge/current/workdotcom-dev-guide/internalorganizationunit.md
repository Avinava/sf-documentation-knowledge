---
title: "InternalOrganizationUnit"
domain: workdotcom-dev-guide
topic: internalorganizationunit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.286Z
estimatedTokens: 713
keywords: [InternalOrganizationUnit, organization, Employee, belongs, API, version, 48.0, later, 49.0, supports, reports, criteria-based, sharing, rules, history]
---

# InternalOrganizationUnit

> Represents an organization that an Employee belongs to. This object is
    available in API version 48.0 and later. In API version 49.0 and later, this object supports
    reports, criteria-based sharing rules, and history tracking, plus you can exclude individual
    fields from custom page layouts.

# InternalOrganizationUnit

Represents an organization that an Employee belongs to. This object is available in API version 48.0 and later. In API version 49.0 and later, this object supports reports, criteria-based sharing rules, and history tracking, plus you can exclude individual fields from custom page layouts.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access this object, you have either a Workplace Command Center permission set license and the Provides access to Workplace Command Center features system permission, or the Employee Management and Employee User add-on licenses. This object is also available with the Referral Marketing license.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the organization the Employee is working in. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| OrganizationCode | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The code of the organization the Employee is working in. |
| OrganizationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the organization the Employee is working in. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API to perform the create operation. |
| ParentOrganizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the parent organization. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the record is for an internal or an external organization. This field is available in API version 60.0 and later.Possible values are:EXTERNAL_BUSINESS_UNITINTERNAL_ORGANIZATION |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

InternalOrganizationUnitHistory (API version 49.0)

History is available for tracked fields of the object.

InternalOrganizationUnitOwnerSharingRule

Sharing rules are available for the object.

InternalOrganizationUnitShare (API version 49.0)

Sharing is available for the object.
