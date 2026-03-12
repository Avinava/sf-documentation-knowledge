---
title: "OutboundEngmtContentRsrc"
domain: referral-marketing
topic: outboundengmtcontentrsrc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.950Z
estimatedTokens: 606
keywords: [OutboundEngmtContentRsrc, outbound, engagement, API, version, 65.0, later, Calls, Associated, Objects]
---

# OutboundEngmtContentRsrc

> Represents the details of an outbound engagement. This object is
      available in API version 65.0 and later.

# OutboundEngmtContentRsrc

Represents the details of an outbound engagement. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the outbound engagement item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the outbound engagement item. |
| OutboundEngagementTmplViewId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the outbound engagement template view that's used by the outbound engagement item.This field is a relationship field.Relationship NameOutboundEngagementTmplViewRefers ToOutboundEngagementTmplView |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ResourceReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe engagement resource for which the outbound engagement item is created.This field is a relationship field.Relationship NameResourceReferenceRecordRefers ToCampaign |
| TargetReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record for which the outbound engagement item is created.This field is a polymorphic relationship field.Relationship NameTargetReferenceRecordRefers ToPromotion |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OutboundEngmtContentRsrcShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
