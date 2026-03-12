---
title: "LoyaltyProgramWidget"
domain: referral-marketing
topic: loyaltyprogramwidget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.224Z
estimatedTokens: 778
keywords: [LoyaltyProgramWidget, widget, advocates, enroll, referral, program, refer, their, friends, API, version, 59.0, later, B2C, programs]
---

# LoyaltyProgramWidget

> Represents information about a widget that advocates use to enroll in
         the referral program and refer their friends This object is available in API version
      59.0 and later. This object is available only for B2C referral programs.

# LoyaltyProgramWidget

Represents information about a widget that advocates use to enroll in the referral program and refer their friends This object is available in API version 59.0 and later. This object is available only for B2C referral programs.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CustomizedContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe details of a widget’s customizations. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description or the business use case of the widget. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the widget. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the referral program that the widget belongs to.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the promotion that the widget belongs to.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| PromotionStageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the promotion stage that the widget represents. The widget that marketing managers design when creating a referral promotion is associated with the Promotion Launched stage.This field is a relationship field.Relationship NamePromotionStageRelationship TypeLookupRefers ToPromotionStage |
| TemplateName | TypestringPropertiesCreate, Filter, Group, SortDescriptionRequired. The name of the widget template used to create the widget. |
| TemplateVersion | TypeintPropertiesCreate, Filter, Group, SortDescriptionRequired. The version of the widget template used to create the widget. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramWidgetShare](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoyaltyProgramWidgetShare (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)
