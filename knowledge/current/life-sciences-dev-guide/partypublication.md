---
title: "PartyPublication"
domain: life-sciences-dev-guide
topic: partypublication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:57.858Z
estimatedTokens: 1386
keywords: [PartyPublication, party's, publication]
---

> Represents the details of a party's publication.

# PartyPublication

Represents the details of a party's publication.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CitationCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of citations the publication has. This field is available in Account Management feature in API version 65.0 and later. |
| ImpactFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of times the publication is listed. This field is available in Account Management feature in API version 65.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| ListingPlatformType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe listing platform the publication is listed on. This field is available in Account Management feature in API version 65.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the party publication. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID associated with party publication.This field is a polymorphic relationship field.Relationship NamePartyRefers ToAccount, HealthcareProvider, Individual |
| PartyRoleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role of the author of the publication. Examples include the primary or secondary author. This field is available in Account Management feature in API version 65.0 and later. |
| PublicationCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe publication category of where the publication was published. This field is available in Account Management feature in API version 65.0 and later. |
| PublicationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the publication is available. |
| PublicationIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external ID associated with the publication. |
| PublishedOn | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source where the publication was published, if it appears in multiple journals. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThat status of the publication. This field is available in Account Management feature in API version 65.0 and later. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe summary of the publication. |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe full title of the publication. |
| Url | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe link or URL to the publication. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyPublicationChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyPublicationFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyPublicationHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyPublicationShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyPublicationChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- PartyPublicationFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PartyPublicationHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- PartyPublicationShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
