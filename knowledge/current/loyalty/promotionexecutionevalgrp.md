---
title: "PromotionExecutionEvalGrp"
domain: loyalty
topic: promotionexecutionevalgrp
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.650Z
estimatedTokens: 805
keywords: [PromotionExecutionEvalGrp, collection, promotions, evaluated, execution, group, API, version, 65.0, later, Calls, Special, Access, Rules, Associated]
---

# PromotionExecutionEvalGrp

> Represents a collection of promotions that are evaluated for
         execution as a group. This object is available in API version 65.0 and
      later.

# PromotionExecutionEvalGrp

Represents a collection of promotions that are evaluated for execution as a group. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The PromotionExecutionEvalGrp object is available in orgs that have the Promotion Evaluation and Execution setting enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the promotion execution evaluation group. |
| DiscountType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of discount the promotions in the group offer.Possible values are:CartDiscountCrossProductDiscountEligibleProductDiscount |
| EvaluationMethod | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe method in which the promotions in the promotion group are evaluted for execution.Possible values are:FirstEligiblePromotionHighestDiscountStacked |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the promotion execution evaluation group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PricingProcedureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pricing procedure associated with the promotion group.This field is a relationship field.Relationship NamePricingProcedureRefers ToExpressionSet |
| RuleLibraryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rule library asscociated with the promotion.This field is a relationship field.Relationship NameRuleLibraryRefers ToRuleLibrary |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the promotion execution evaluation group.Possible values are:ActiveDeletedDraftInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionExecutionEvalGrpShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

[PromotionExecutionEvalGrpOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.
