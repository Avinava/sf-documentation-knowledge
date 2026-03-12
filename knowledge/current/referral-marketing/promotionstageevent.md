---
title: "PromotionStageEvent"
domain: referral-marketing
topic: promotionstageevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.956Z
estimatedTokens: 554
keywords: [PromotionStageEvent, event, associated, creating, updating, promotion, stage, including, code, target, audience, API, version, 65.0, later]
---

# PromotionStageEvent

> Represents the event details associated with creating or updating a promotion
         stage, including information about the related promotion, promotion code, and target
         audience. This object is available in API version 65.0 and later.

# PromotionStageEvent

Represents the event details associated with creating or updating a promotion stage, including information about the related promotion, promotion code, and target audience. This object is available in API version 65.0 and later.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| AudienceType | TypestringPropertiesCreate, NillableDescriptionThe referral program advocate or referred party for whose activity the referral event was created. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| PromotionCode | TypestringPropertiesCreate, NillableDescriptionThe code of the promotion for which the referral event was created. |
| PromotionId | TypereferencePropertiesCreateDescriptionThe ID of the referral promotion as part of which the referral event was created.This field is a relationship field.Relationship NamePromotionRefers ToPromotion |
| PromotionStageId | TypereferencePropertiesCreateDescriptionThe ID of the promotion stage during which the referral event was created.This field is a relationship field.Relationship NamePromotionStageRefers ToPromotionStage |
| PromotionStageName | TypestringPropertiesCreate, NillableDescriptionThe name of the promotion stage during which the referral event was created. |
| ReferralId | TypereferencePropertiesCreate, NillableDescriptionThe ID of the referral that's associated with the referral event.This field is a relationship field.Relationship NameReferralRefers ToReferral |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| TransactionJournalId | TypereferencePropertiesCreate, NillableDescriptionThe ID of the transaction journal that represents the referral revent.This field is a relationship field.Relationship NameTransactionJournalRefers ToTransactionJournal |
