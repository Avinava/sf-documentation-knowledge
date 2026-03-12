---
title: "GiftAgreement"
domain: edu-cloud-dev-guide
topic: giftagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.247Z
estimatedTokens: 926
keywords: [GiftAgreement, agreement, accept, gift, API, version, 64.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GiftAgreement

> The agreement to accept a gift. This object is available in API version
      64.0 and later.

# GiftAgreement

The agreement to accept a gift. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA person, household, or organization associated with the gift agreement.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the gift agreement.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ComplianceStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of compliance review for the gift.Possible values are:CompliantIn ReviewNoncompliantNot Yet SubmittedRequires Modification |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA contact for the gift agreement.This field is a relationship field.Relationship NameContactRefers ToContact |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract associated with the gift agreement.This field is a relationship field.Relationship NameContractRelationship TypeMaster-detailRefers ToContract (the master object) |
| GiftAgreementTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the gift agreement. |
| GiftType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of gift.Possible values are:Capital CampaignIn DevelopmentMajor GiftOther Gift ConceptPlanned GiftProgram and Support Gift ConceptSpecialized Gift |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the gift agreement record. |
| TotalGiftValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total monetary value of the gift as stated in the gift agreement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftAgreementChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm)

Change events are available for the object.

[GiftAgreementFeed](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftAgreementHistory](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftAgreementOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[GiftAgreementShare](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
