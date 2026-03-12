---
title: "RegulatoryAuthorizationType"
domain: psc-api
topic: regulatoryauthorizationtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.458Z
estimatedTokens: 994
keywords: [RegulatoryAuthorizationType, authorization, issued, regulatory, Calls, Associated, Objects]
---

# RegulatoryAuthorizationType

> Represents the authorization issued by the regulatory body.

# RegulatoryAuthorizationType

Represents the authorization issued by the regulatory body.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing the license or permit that can be issued. |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDuration of the service type.Possible values are:DayHourMonth |
| IssuingDepartmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the regulatory authority that can issue this license or permit. |
| Jurisdiction | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing the geographical area or legal jurisdiction for which this license or permit is authorized. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this license or permit type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| ProcessingDuration | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing the standard amount of time it takes to process an application for this permit or license. |
| RegulatoryAuthCategory (Service Category) | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of this regulatory authorization.Possible values are:Emergency ServiceLicensePermitService Request |
| RegulatoryAuthCode (Service Code) | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service code for this regulatory authorization. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[RegulatoryAuthorizationTypeFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object. This object is available in API version 51.0 and later.

[RegulatoryAuthorizationTypeHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object. This object is available in API version 51.0 and later.

[RegulatoryAuthorizationTypeOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[RegulatoryAuthorizationTypeShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Share is available for the object.

## Related Topics

- RegulatoryAuthorizationTypeFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- RegulatoryAuthorizationTypeHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- RegulatoryAuthorizationTypeOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- RegulatoryAuthorizationTypeShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
