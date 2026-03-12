---
title: "LifeScienceMobileApp"
domain: life-sciences-dev-guide
topic: lifesciencemobileapp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.403Z
estimatedTokens: 975
keywords: [LifeScienceMobileApp, mobile, device, associated, user, API, version, 65.0, later, Calls, Objects]
---

# LifeScienceMobileApp

> Represents information about a mobile device associated with a user.
      This object is available in API version 65.0 and later.

# LifeScienceMobileApp

Represents information about a mobile device associated with a user. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version of the mobile app. |
| DeviceLastLocation | TypelocationPropertiesNillableDescriptionThe latitude and longitude coordinates of the most recent sync location. |
| DeviceMetadataVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version of the metadata that's used by the mobile app. |
| IsDownloadSyncSuccessful | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the most recent download succeeded (true) or not (false).The default value is false. |
| IsFullSyncEnforced | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to force a full synchronization for the mobile app (true) or not (false).The default value is false. |
| IsUploadSyncSuccessful | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the most recent upload succeeded (true) or not (false).The default value is false. |
| LastDownloadSyncDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp of the most recent download. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastUploadSyncDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp of the most recent upload. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the mobile app record. |
| UserDeviceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The user device associated with the mobile app.This field is a relationship field.Relationship NameUserDeviceRelationship TypeMaster-detailRefers ToUserDevice (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeScienceMobileAppFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LifeScienceMobileAppHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LifeScienceMobileAppFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeScienceMobileAppHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
