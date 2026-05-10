---
title: "Commerce: Coupon Mapping"
domain: data-cloud
topic: commerce-coupon-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:39:11.951Z
estimatedTokens: 229
keywords: [Commerce, Coupon, Mapping, stream, deployed, starter, bundle, automatically, maps, Cloud, model, DMO, buyer, compensate, seller, purchased, good, service, DLO]
---

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Coupon data shows the method for a buyer to
         compensate a seller for a purchased good or service.

# Commerce: Coupon Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Coupon data shows the method for a buyer to compensate a seller for a purchased good or service.

## DLO to DMO Mapping

These data mappings relate to the Coupon object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | Coupon and CouponDefinition | id |
| CurrencyIsoCode | picklist | Coupon and CouponDefinition | CurrencyCode |
| CouponCode | string | Coupon and CouponDefinition | CouponCode |
| CouponNumber | string | Coupon and CouponDefinition | ScanCode |
| PromotionId | reference | Coupon and CouponDefinition | PromotionId |
| Status | picklist | Coupon and CouponDefinition | CouponStatusId |
