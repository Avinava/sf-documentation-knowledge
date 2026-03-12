---
title: "MessagingEndUser"
domain: object-reference
topic: messagingenduser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.833Z
estimatedTokens: 1841
keywords: [MessagingEndUser, address—such, phone, number, Facebook, page—communicating, Messaging, channel, API, version, 40.0, later, Calls, Associated, Objects]
---

# MessagingEndUser

> Represents a single address—such as a phone number or Facebook
      page—communicating with a single Messaging channel. This object is available in API
    version 40.0 and later.

# MessagingEndUser

Represents a single address—such as a phone number or Facebook page—communicating with a single Messaging channel. This object is available in API version 40.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available for Einstein Conversation Insights customers whose data is stored natively on the Salesforce Platform. If you turned on Einstein Conversation Insights for the first time starting in Spring ’26, this object is available to query and access using Salesforce tools. For existing ECI customers, data migration and access to related Salesforce Platform objects is scheduled to begin in Summer ’26.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Account associated with this Messaging end user. Available in API version 43.0 and later.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated Contact. Available in API version 43.0 and later.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| HasInitialResponseSent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an initial response has been sent to the Messaging end user (true) or not (false). |
| IsFullyOptedIn | TypebooleanPropertiesDefaulted on create, Filter, SortDescriptionIndicates whether the Messaging end user has opted in to receiving messages (true) or not (false). This field compares the related messaging channel’s consent requirement to the user’s consent status; if the user’s status meets the channel’s required consent level, IsFullyOptedIn is set to true. Available in API version 48.0 and later. |
| IsOptedOut | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Messaging end user has opted out of receiving messages. Available in API version 48.0 and earlier. Use MessagingConsentStatus and IsFullyOptedIn instead. |
| IsoCountryCode | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ISO country code associated with the Messaging end user. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated lead. Available in API version 57.0 and later.This field is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| Locale | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionReserved for future use. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe preferred language of the messaging user who participated in the messaging session. SUpported for Messaging for In-App and Web and Apple Messages for Business only. |
| MessageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionType of message. Possible values are:AppleBusinessChat—Represents Apple Messages for Business.Custom—Represents Bring Your Own Channel. Available in API version 58.0 and later.EmbeddedMessaging—Represents Messaging for In-App and Web. Available in API version 50.0 and later.FacebookPhoneTextVoiceWhatsApp |
| MessagingChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Messaging channel associated with the Messaging end user.This is a relationship field.Relationship NameMessagingChannelRelationship TypeLookupRefers ToMessagingChannel |
| MessagingConsentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe consent status of the messaging user. This field is available in API version 48.0 and later. Possible values are:DoublyOptedInExplicitlyOptedInImplicitlyOptedInOptedOut |
| MessagingPlatformKey | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe phone number, Facebook page ID, or unique key associated with this Messaging end user. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Messaging end user. Because this field is editable, we don’t recommend referencing it in automation. Instead, use the Messaging Platform Key. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner associated with this Messaging end user.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProfilePictureUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe URL of the Messaging end user's profile picture. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[MessagingEndUserChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[MessagingEndUserHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MessagingEndUserOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[MessagingEndUserShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MessagingEndUserChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- MessagingEndUserHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- MessagingEndUserOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- MessagingEndUserShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
