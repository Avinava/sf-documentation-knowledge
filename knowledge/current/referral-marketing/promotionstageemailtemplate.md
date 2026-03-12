---
title: "PromotionStageEmailTemplate"
domain: referral-marketing
topic: promotionstageemailtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.264Z
estimatedTokens: 433
keywords: [PromotionStageEmailTemplate, junction, promotion, stage, email, template, referral, created, associated, customize, company’s, branding, API, version, 59.0]
---

# PromotionStageEmailTemplate

> Represents a junction between a promotion stage and an email
         template. When a referral promotion is created, an email template is associated with each
         stage of the promotion. You can customize the email template for each stage based on your
         company’s branding. This object is available in API version 59.0 and later. This
      object is available only for B2C referral programs.

# PromotionStageEmailTemplate

Represents a junction between a promotion stage and an email template. When a referral promotion is created, an email template is associated with each stage of the promotion. You can customize the email template for each stage based on your company’s branding. This object is available in API version 59.0 and later. This object is available only for B2C referral programs.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EmailCustomConfiguration | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe customized content of an email template. |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the email template associated with the promotion stage.This field is a relationship field.Relationship NameEmailTemplateRelationship TypeLookupRefers ToEmailTemplate |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number of the promotion stage email template. |
| PromotionStageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the promotion stage that the associated email template belongs to.This field is a relationship field.Relationship NamePromotionStageRelationship TypeLookupRefers ToPromotionStage |
