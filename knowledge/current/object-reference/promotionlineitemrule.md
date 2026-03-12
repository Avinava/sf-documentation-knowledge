---
title: "PromotionLineItemRule"
domain: object-reference
topic: promotionlineitemrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.585Z
estimatedTokens: 476
keywords: [PromotionLineItemRule, compound, conditions, promotion, API, version, 59.0, later, Calls]
---

# PromotionLineItemRule

> Lists compound conditions about a promotion. This object is
      available in API version 59.0 and later.

# PromotionLineItemRule

Lists compound conditions about a promotion. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssociatedReferenceId | TypeReferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated reference.Relationship NameAssociatedReferenceRelationship TypeLookupRefers ToPromotionQualifier, PromotionTarget |
| AssociatedType | TypePicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSpecifies the type of object the rule is associated with.Possible values are:PromotionQualifierPromotionTarget |
| Name | TypeStringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the promotion rule. |
| OperatorType | TypePicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionOperator type for promotion line item rule.Possible values are:EQUAL_TOGREATER_THANGREATER_THAN_OR_EQUAL_TOLESS_THANLESS_THAN_OR_EQUAL_TONOT_EQUAL_TOThe default value is EQUAL_TO. |
| OwnerId | TypeReferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Type | TypePicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type on which the rule is being applied.Possible values are:AttributePriceProductProductCategory |
| TypeReferenceId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the type.Relationship NameTypeReferenceRelationship TypeLookupRefers ToProduct2, ProductCategory |
| TypeValue | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue of the type selected. |
