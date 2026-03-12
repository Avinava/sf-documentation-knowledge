---
title: "PresentationPartyAccess"
domain: life-sciences-dev-guide
topic: presentationpartyaccess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.733Z
estimatedTokens: 942
keywords: [PresentationPartyAccess, access-sharing, presentation, healthcare, professional, including, expiration, date, access, API, version, 65.0, later, Calls, Associated]
---

# PresentationPartyAccess

> Represents the access-sharing details of a presentation with a healthcare
         professional, including an expiration date for that access. This object is available
      in API version 65.0 and later.

# PresentationPartyAccess

Represents the access-sharing details of a presentation with a healthcare professional, including an expiration date for that access. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccessIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA UUID that identifies the presentation to show and the user who the link is intended for when sales representatives send presentations as links in email content. |
| AccessRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Represents the role of the party (Account) in relation to the presentation, and define their level of access and permissions.Possible values are:ApproverAuthorViewer |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when access to the presentation expires. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when access to the presentation begins. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the presentation party access. |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Identifies the party with whom this record is shared, granting access to the presentation associated with this record.This field is a polymorphic relationship field.Relationship NamePartyRefers ToAccount |
| PresentationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Indicates the reference to the presentation.This field is a relationship field.Relationship NamePresentationRelationship TypeMaster-detailRefers ToPresentation (the master object) |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PresentationPartyAccessFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PresentationPartyAccessHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PresentationPartyAccessFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PresentationPartyAccessHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
