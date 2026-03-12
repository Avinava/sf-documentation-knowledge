---
title: "LoyaltyProgramWidget"
domain: loyalty
topic: loyaltyprogramwidget
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:53.315Z
estimatedTokens: 752
keywords: [LoyaltyProgramWidget, configuration, widget, user, apply, out-of-the-box, templates, FlexCards, provided, Omnistudio, helps, implement, custom, changes, promotion]
---

# LoyaltyProgramWidget

> Represents the configuration of a widget that a user can apply to the
         out-of-the-box widget templates and FlexCards provided by Omnistudio. The configuration
         helps implement custom UI changes, such as promotion type, promotion tag line, and so on
         for a user. This object is available in API version 57.0 and later.

# LoyaltyProgramWidget

Represents the configuration of a widget that a user can apply to the out-of-the-box widget templates and FlexCards provided by Omnistudio. The configuration helps implement custom UI changes, such as promotion type, promotion tag line, and so on for a user. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CustomizedContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detail about the customization that’s applied to a widget.For example, promotion_title: Great Times |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the widget. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the widget. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the widget.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The identifier of the loyalty program that's associated with the widget.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the promotion that the widget is associated with.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| PromotionStageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the promotion stage that the widget is associated with.This field is a relationship field.Relationship NamePromotionStageRelationship TypeLookupRefers ToPromotionStage |
| TemplateName | TypestringPropertiesCreate, Filter, Group, SortDescriptionRequired. The name of the widget template. |
| TemplateVersion | TypeintPropertiesCreate, Filter, Group, SortDescriptionRequired. The version of the widget template. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramWidgetShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
