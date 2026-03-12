---
title: "RE_PromotionTransfer Class"
domain: retail-api
topic: repromotiontransfer-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.487Z
estimatedTokens: 275
keywords: [RE_PromotionTransfer, Apex, programmatic, access, sObject, sObjects, _PromotionTransfer, Implementation]
---

# RE_PromotionTransfer Class

> The RE_PromotionTransfer Apex class provides
  programmatic access to the RE_PromotionTransfer sObject and
  its related sObjects.

# RE\_PromotionTransfer Class

The RE\_PromotionTransfer Apex class provides programmatic access to the RE\_PromotionTransfer sObject and its related sObjects.

## Namespace

```

```

## Example Implementation

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| global Boolean isNew() | Indicates whether the promotionTransfer record is new (true) or not (false). | 60.0 |
| global Boolean isDeleted() | Indicates whether the promotionTransfer record is deleted (true) or not (false). | 60.0 |
| global RE_PromotionTransfer.Record getPromotion() | Returns the main promotionTransfer record. | 60.0 |
| global RE_PromotionTransfer(cgcloud__Promotion__c promotionSObject) | Constructor that loads all the related data of the given promotionTransfer record ID. | 60.0 |
| global SObject getRecord() | Returns the full cgcloud__Promotion__c sObject.To get the missing ID of the sObject, use the getId() method of the record wrapper. | 60.0 |
| global void setIsDeleted(Boolean value) | Sets the isDeleted flag for the promotionTransfer record. | 60.0 |

## Code Examples

```
cgcloud.RE_PromotionTransfer promotionTransfer;
```
