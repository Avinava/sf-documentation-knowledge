---
title: "ExtendedRewardDefinition"
domain: referral-marketing
topic: extendedrewarddefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.129Z
estimatedTokens: 815
keywords: [ExtendedRewardDefinition, definition, extended, reward, associated, loyalty, program, API, version, 64.0, later, Calls, Objects]
---

# ExtendedRewardDefinition

> Represents the definition of an extended reward that is associated with a
         loyalty program. This object is available in API version 64.0 and later.

# ExtendedRewardDefinition

Represents the definition of an extended reward that is associated with a loyalty program. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription about the reward definition. |
| ImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL of the image location for the reward definition. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the reward defintion is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the reward definition. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the extended reward definition.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PartnerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the partner associated with the reward definition.This field is a relationship field.Relationship NamePartnerAccountRefers ToAccount |
| SourceReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the loyalty program associated with the rewards.This field is a relationship field.Relationship NameSourceReferenceRefers ToLoyaltyProgram |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the reward.Possible values are:BOGOCashbackVacation |
| UnitCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCost per reward indicating the liability incurred per issued reward. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ExtendedRewardDefinitionChangeEvent](atlas.en-us.referral_marketing.meta/referral_marketing/referral_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- ExtendedRewardDefinitionChangeEvent (atlas.en-us.referral_marketing.meta/referral_marketing/referral_associated_objects_change_event.htm)
