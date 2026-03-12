---
title: "GiftTribute"
domain: edu-cloud-dev-guide
topic: gifttribute
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:25.613Z
estimatedTokens: 1374
keywords: [GiftTribute, status, gift, tribute, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GiftTribute

> Represents the details and status of the gift tribute. This object is
      available in API version 59.0 and later.

# GiftTribute

Represents the details and status of the gift tribute. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| GiftCommitmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift commitment associated with this tribute.This field is a relationship field.Relationship NameGiftCommitmentRelationship TypeLookupRefers ToGiftCommitment |
| GiftTransactionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift transaction associated with this tribute.This field is a relationship field.Relationship NameGiftTransactionRelationship TypeLookupRefers ToGiftTransaction |
| HonoreeContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact (person account) associated with the tribute gift transaction.This field is a relationship field.Relationship NameHonoreeContactRelationship TypeLookupRefers ToAccount |
| HonoreeInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional details of the tribute recipient. |
| HonoreeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the person being honored by the tribute gift transaction. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique, auto-numbered name of the gift tribute. |
| NotificationChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how to notify the tribute notification contact should be notified.Possible values are:EmailMail |
| NotificationContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact (person account) who should be notified of the tribute gift transaction.This field is a relationship field.Relationship NameNotificationContactRelationship TypeLookupRefers ToAccount |
| NotificationContactName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the person who should be notified of the tribute gift transaction. |
| NotificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the recipient was notified about the tribute. |
| NotificationEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email that's used to notify a person about the tribute gift transaction. |
| NotificationInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the person who should be notified of the tribute gift transaction. |
| NotificationMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe notification message that's sent for the tribute gift transaction. |
| NotificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the notification sent to the tribute recipient.Possible values are:Don't SendSentTo Be Sent |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TributeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of tribute when a gift is given on behalf of someone else.Possible values are:HonorMemorial |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftTributeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm) (API Version 64.0)

Change events are available for the object.

[GiftTributeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftTributeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftTributeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.html) (API Version 64.0)

Sharing rules are available for the object.

[GiftTributeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
