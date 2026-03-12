---
title: "ProductQuantityRule"
domain: object-reference
topic: productquantityrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.381Z
estimatedTokens: 369
keywords: [ProductQuantityRule, relationship, quantity, rule, product, assigns, rules, API, version, 51.0, later, Calls, Special, Access]
---

# ProductQuantityRule

> Represents the relationship between a quantity rule and a product. This
         object assigns quantity rules to a product. This object is available in API version
      51.0 and later.

# ProductQuantityRule

Represents the relationship between a quantity rule and a product. This object assigns quantity rules to a product. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The ProductQuantityRule object is available only if the B2B Commerce license or Automotive Cloud license is enabled.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. This field is exposed in orgs that have multicurrency enabled. Default value is USD.Possible values are:EUR—EuroUSD—U.S. Dollar |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the product quantity rule. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the product.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| PurchaseQuantityRuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the related purchase quantity rule.This field is a relationship field.Relationship NamePurchaseQuantityRuleRelationship TypeLookupRefers ToPurchaseQuantityRule |
