---
title: "Presentation"
domain: life-sciences-dev-guide
topic: presentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.672Z
estimatedTokens: 1585
keywords: [Presentation, collection, presentations, various, attributes, activation, dates, ability, sent, email, associated, tags, gestures, API, version]
---

# Presentation

> Represents a collection of presentations, each with various attributes such
         as activation dates, the ability to be sent by email, associated tags, and gestures.
      This object is available in API version 65.0 and later.

# Presentation

Represents a collection of presentations, each with various attributes such as activation dates, the ability to be sent by email, associated tags, and gestures. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which active presentations become available to sales representatives. If the field is empty, the start date limit is not applied to the presentation. |
| CanSendByEmail | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the presentation can be sent via email.The default value is false. |
| DeactivationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date limit during which active presentations are available to sales representatives. If the field is empty, the end date limit isn't applied to the presentation. |
| IsCustom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIdentifies whether the presentation was created by a user.The default value is false. |
| IsDoubleTapZoomEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the double-tap zoom feature is activated for the presentation. Available only for html presentations.The default value is false. |
| IsPDFIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the presentation includes a PDF file, which can be sent as an attachment via email. If set to true, it means that the presentation contains PDF files ready for email delivery.The default value is false. |
| IsPinchZoomEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionEnables or disables the pinch-to-zoom functionality in the presentation.The default value is false. |
| IsPresentationLocked | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the presentation has been locked by an admin, meaning it can no longer be edited.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the presentation. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PlayerGestureSectionSide | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe gesture with which sales representatives open the Presentation Player menu.Possible values are:SwipeDownSwipeUpTapBottomTapTop |
| PublicDisclaimerContentName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the public content that will be accessible during remote interactions and tied to the presentation. This content is typically linked to important public documents, such as product information or legal disclaimers, which the healthcare professional can view through their browser. |
| PublicDisclaimerContentUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL pointing to the public disclaimer. |
| ReactionSectionSide | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines the location of the sequence rating zone in the presentation player.Possible values are:LeftRight |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired.Possible values are:ActiveDeletedInactive |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe presentation file type.Possible values are:PDFZIP |
| Version | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA text field to store the presentation’s version. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PresentationFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PresentationHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PresentationShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PresentationFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PresentationHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- PresentationShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
