---
title: "PromTmplExtdRewardDef"
domain: referral-marketing
topic: promtmplextdrewarddef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:10.219Z
estimatedTokens: 594
keywords: [PromTmplExtdRewardDef, junction, promotion, template, extended, reward, definition, API, 64.0]
---

> Represents a junction between promotion template and extended reward
         definition. This object is available in API version 64.0 and later.

# PromTmplExtdRewardDef

Represents a junction between promotion template and extended reward definition. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AudienceType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionIndicates the reward type for the Advocate or Friend.Possible values are:AdvocateFriend—For B2B referral programs friend represents referred partyThe default value is Advocate. |
| ExtendedRewardDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the reward definition associated with the promotion template.This field is a relationship field.Relationship NameExtendedRewardDefinitionRefers ToExtendedRewardDefinition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number of the promotion template extended reward definition. |
| PromotionTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent promotion template record.This field is a relationship field.Relationship NamePromotionTemplateRelationship TypeMaster-detailRefers ToPromotionTemplate (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromTmplExtdRewardDefChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.referral_marketing.meta/referral_marketing/referral_associated_objects_change_event.htm)

Change events are available for the object.

[PromTmplExtdRewardDefHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
