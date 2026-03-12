---
title: "Award"
domain: life-sciences-dev-guide
topic: award
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.136Z
estimatedTokens: 1294
keywords: [Award, person's, organization's, professional, awards, Calls, Associated, Objects]
---

# Award

> Represents a person's or organization's professional awards.

# Award

Represents a person's or organization's professional awards.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the organization receiving the award.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AwardDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate award was received. |
| AwardedBy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the issuing organization. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPerson who received the award and is listed as a contact.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHealthcare provider that this award is associated with.This field is a relationship field.Relationship NameHealthcareProviderRelationship TypeLookupRefers ToHealthcareProvider |
| Identifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIssuing organization's identifier for the award recipient. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAward name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAward status. Example values:InactiveRevokedDraftVerified |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the person who received the award and is listed as a user.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent award status. Example values:AuthorizedPendingUnverified |
| VerifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAward was validated on this date. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AwardChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

[AwardFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AwardHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AwardOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AwardShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AwardChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AwardFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AwardHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- AwardOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- AwardShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
