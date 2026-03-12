---
title: "GiftStewardship"
domain: edu-cloud-dev-guide
topic: giftstewardship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.255Z
estimatedTokens: 885
keywords: [GiftStewardship, stewardship, gift, contact, organization, isn't, donor, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# GiftStewardship

> Represents stewardship of a gift by a contact or an organization that isn't a
         donor. This object is available in API version 65.0 and later.

# GiftStewardship

Represents stewardship of a gift by a contact or an organization that isn't a donor. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of a person, household, or organization involved in the stewardship of the gift.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contact for the stewardship of the gift.This field is a relationship field.Relationship NameContactRefers ToContact |
| DonorPreferences | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe donor's preferences for channels for communicating about the gift.Possible values are:Annual Giving SummaryAnonymous RecognitionCustom Stewardship PlanNamed RecognitionNewsletterPhysical Recognition ItemQuarterly Impact Report |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of stewardship activities for the gift. |
| GiftAgreementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the agreement associated with the stewardship of the gift.This field is a relationship field.Relationship NameGiftAgreementRefers ToGiftAgreement |
| GiftId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the gift under stewardship.This field is a polymorphic relationship field.Relationship NameGiftRefers ToGiftCommitment, GiftTransaction, PlannedGift |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the gift stewardship record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of stewardship activities for the gift. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the gift stewardship record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

GiftStewardshipChangeEvent

Change events are available for the object.

GiftStewardshipFeed

Feed tracking is available for the object.

GiftStewardshipHistory

History is available for tracked fields of the object.

GiftStewardshipOwnerSharingRule

Sharing rules are available for the object.

GiftStewardshipShare

Sharing is available for the object.
