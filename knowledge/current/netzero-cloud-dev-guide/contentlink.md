---
title: "ContentLink"
domain: netzero-cloud-dev-guide
topic: contentlink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.660Z
estimatedTokens: 948
keywords: [ContentLink, content, source, API, version, 62.0, later, Calls, Associated, Objects]
---

# ContentLink

> Represents a reference object with information about its content source.
      This object is available in API version 62.0 and later.

# ContentLink

Represents a reference object with information about its content source. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContentSourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe content source associated with the content. The content source could be a Salesforce record or an Omnistudio Data Mapper.This field is a relationship field.Relationship NameContentSourceRefers ToContentSource |
| ContentSourceType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the type of content source.Possible values are:OmnistudioDataMapper—Omnistudio Data MapperSingleRecord—Single Record |
| LastCntntUpdateDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the last content update. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe value that identifies this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reference object that's associated with the content source.This field is a polymorphic relationship field.Relationship NameReferenceObjectRefers ToContentDocument, Disclosure, DocumentClause, InfoLibraryExternalDocument |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the association between the reference object and content source.Possible values are:ActiveInActive—InactivePaused |
| UpdatedContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the last content update. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContentLinkFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ContentLinkHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContentLinkShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ContentLinkFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- ContentLinkHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- ContentLinkShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
