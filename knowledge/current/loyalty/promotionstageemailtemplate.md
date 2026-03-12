---
title: "PromotionStageEmailTemplate"
domain: loyalty
topic: promotionstageemailtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.536Z
estimatedTokens: 453
keywords: [PromotionStageEmailTemplate, junction, promotion, stage, email, template, Promotions, Management, promotion's, launch, associated, Launched, customize, company’s, branding]
---

# PromotionStageEmailTemplate

> Represents a junction between a promotion stage and an email template. With
         Global Promotions Management, a promotion's launch email is associated with the promotion's
         Promotion Launched stage. You can customize the promotion launch email based on your
         company’s branding. This object is available in API version 60.0 and later.

# PromotionStageEmailTemplate

Represents a junction between a promotion stage and an email template. With Global Promotions Management, a promotion's launch email is associated with the promotion's Promotion Launched stage. You can customize the promotion launch email based on your company’s branding. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

PromotionStageEmailTemplate is only available in orgs where Global Promotions Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| EmailCustomConfiguration | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe customized content of an email template. |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the email template associated with the promotion stage.This field is a relationship field.Relationship NameEmailTemplateRelationship TypeLookupRefers ToEmailTemplate |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number of the promotion stage email template. |
| PromotionStageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the promotion stage that the associated email template belongs to.This field is a relationship field.Relationship NamePromotionStageRelationship TypeLookupRefers ToPromotionStage |
