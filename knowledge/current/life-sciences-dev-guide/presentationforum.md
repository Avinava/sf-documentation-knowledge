---
title: "PresentationForum"
domain: life-sciences-dev-guide
topic: presentationforum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.699Z
estimatedTokens: 961
keywords: [PresentationForum, forums, call, meetings, order, presentation, presented, API, version, 65.0, later, Calls, Associated, Objects]
---

# PresentationForum

> Represents the details of the forums (call, meetings, order) where the
         presentation was presented. This object is available in API version 65.0 and
      later.

# PresentationForum

Represents the details of the forums (call, meetings, order) where the presentation was presented. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ForumReferenceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. A reference to either the visit or account record that represents the forum in which the presentation was delivered.This field is a polymorphic relationship field.Relationship NameForumReferenceRefers ToAccount, Visit |
| Geolocation | TypelocationPropertiesNillableDescriptionCaptures the geographical location where the presentation was opened. |
| GeolocationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the location was last successfully acquired. |
| GeolocationLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCaptures the geographical latitude where the presentation was opened. |
| GeolocationLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCaptures the geographical longitude where the presentation was opened. |
| GeolocationMissingReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies why the location could not be retrieved, with possible reasons.Possible values are:BadDataDeviceRestrictedOfflineUserRestricted |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. A unique identifier for the record, automatically generated in the format PF-{0000000000}. |
| PresentationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Indicates the reference to the presentation.This field is a relationship field.Relationship NamePresentationRelationship TypeMaster-detailRefers ToPresentation (the master object) |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PresentationForumFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PresentationForumHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PresentationForumFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PresentationForumHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
