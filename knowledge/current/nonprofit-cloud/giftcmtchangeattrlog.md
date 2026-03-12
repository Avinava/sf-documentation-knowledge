---
title: "GiftCmtChangeAttrLog"
domain: nonprofit-cloud
topic: giftcmtchangeattrlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.499Z
estimatedTokens: 1114
keywords: [GiftCmtChangeAttrLog, history, changes, Gift, Commitment, over, time, attribution, source, campaign, code, attributed, change, API, version]
---

# GiftCmtChangeAttrLog

> Represents the history of changes to a Gift Commitment over time with
         attribution to the source campaign or source code attributed to that change. This
      object is available in API version 60.0 and later.

# GiftCmtChangeAttrLog

Represents the history of changes to a Gift Commitment over time with attribution to the source campaign or source code attributed to that change. This object is available in API version 60.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe campaign associated with this commitment.This field is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| ChangePerDayAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe change in amount of the commitment converted to amount per day. |
| ChangeStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the change to the commitment.Possible values are:DowngradeNeutralPauseResumeUpgradeThe default value is Upgrade. |
| ChangeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of change to the commitment. It’s value is populated based on the current schedule and the schedule before it.Possible values are:Amount- When the amount changes, comparing the actual amount on the schedule.Frequency- When the Transaction Interval or Transaction Period changes.Frequency and Amount- When both the interval and the amount changes. Applies when the first commitment is scheduled, the current schedule is paused or when a paused schedule is resumed.The default value is Frequency. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe effective date for the commitment change. |
| GiftCommitmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe commitment associated with this gift commitment schedule.This field is a relationship field.Relationship NameGiftCommitmentRelationship TypeMaster-DetailRefers ToGiftCommitment |
| GiftCommitmentScheduleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift commitment schedule associated with the gift transaction.This field is a relationship field.Relationship NameGiftCommitmentScheduleRelationship TypeLookupRefers ToGiftCommitmentSchedule |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the gift commitment schedule. |
| OutreachSourceCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outreach source code associated with this gift commitment attribution change log.This field is a relationship field.Relationship NameOutreachSourceCodeRelationship TypeLookupRefers ToOutreachSourceCode |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftCmtChangeAttrLogFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftCmtChangeAttrLogHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.
