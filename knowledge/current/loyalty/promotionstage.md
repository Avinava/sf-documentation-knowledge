---
title: "PromotionStage"
domain: loyalty
topic: promotionstage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.529Z
estimatedTokens: 497
keywords: [PromotionStage, stage, promotion, email, promotion's, target, audience, Promotions, Management, launch, sent, activated, API, version, 60.0]
---

# PromotionStage

> Represents a stage when the promotion sends an email to the promotion's
         target audience. With Global Promotions Management, a promotion launch email is sent after
         the promotion is activated. This object is available in API version 60.0 and later.

# PromotionStage

Represents a stage when the promotion sends an email to the promotion's target audience. With Global Promotions Management, a promotion launch email is sent after the promotion is activated. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

PromotionStage is only available in orgs where Global Promotions Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The unique name of the promotion stage. |
| Configuration | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe configuration of the promotion stage. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the promotion stage. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the promotion stage. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the promotion that the stage belongs to.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The sequence number of the stage in a promotion. The sequence number of the Promotion Launched stage is 1. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of promotion stage.Possible values are:Promotion Launched |
