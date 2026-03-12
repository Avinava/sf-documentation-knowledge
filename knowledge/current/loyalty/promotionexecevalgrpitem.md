---
title: "PromotionExecEvalGrpItem"
domain: loyalty
topic: promotionexecevalgrpitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.446Z
estimatedTokens: 692
keywords: [PromotionExecEvalGrpItem, either, promotion, group, execution, evaluation, API, version, 65.0, later, Calls, Special, Access, Rules, Associated]
---

# PromotionExecEvalGrpItem

> Represents either a promotion or a promotion group in a promotion
         execution evaluation group. This object is available in API version 65.0 and
      later.

# PromotionExecEvalGrpItem

Represents either a promotion or a promotion group in a promotion execution evaluation group. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The PromotionExecutionEvalGrp object is available in orgs that have the Promotion Evaluation and Execution setting enabled.

## Fields

| Field | Details |
| --- | --- |
| CurrentItemRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of promotion or the promotion group that the item record belongs to.This field is a polymorphic relationship field.Relationship NameCurrentItemRecordRefers ToPromotion, PromotionExecutionEvalGrp |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the promotion execution evaluation group item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentPromEvaluationGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the parent execution evaluation groupThis field is a relationship field.Relationship NameParentPromEvaluationGroupRefers ToPromotionExecutionEvalGrp |
| PreviousItemRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the promotion or promotion group that's sequenced before the current item.This field is a polymorphic relationship field.Relationship NamePreviousItemRecordRefers ToPromotion, PromotionExecutionEvalGrp |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionExecEvalGrpItemShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

[PromotionExecEvalGrpItemOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.
