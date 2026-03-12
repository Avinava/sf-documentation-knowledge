---
title: "BusinessLicenseCodeSet"
domain: psc-api
topic: businesslicensecodeset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.303Z
estimatedTokens: 600
keywords: [BusinessLicenseCodeSet, junction, business, license, code, API, version, 66.0, later, Calls, Associated, Objects]
---

# BusinessLicenseCodeSet

> Represents a junction between a business license and a code set. This
      object is available in API version 66.0 and later.

# BusinessLicenseCodeSet

Represents a junction between a business license and a code set. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessLicenseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe business license associated with the business license code set.This field is a relationship field.Relationship NameBusinessLicenseRelationship TypeMaster-detailRefers ToBusinessLicense (the master object) |
| CodeSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe code set associated with the business license code set.This field is a relationship field.Relationship NameCodeSetRefers ToCodeSet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the business license code set. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BusinessLicenseCodeSetFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BusinessLicenseCodeSetHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BusinessLicenseCodeSetFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BusinessLicenseCodeSetHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
