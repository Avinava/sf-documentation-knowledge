---
title: "Update Promotion"
domain: retail-api
topic: update-promotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.898Z
estimatedTokens: 79
keywords: [Promotion, Updates, cache, calculation]
---

# Update Promotion

> Updates the details of a given promotion in the promotion cache
      (without calculation).

# Update Promotion

Updates the details of a given promotion in the promotion cache (without calculation).

Soft limits:

-   Maximum number of products managed by promotion is based on PromotionMaxManagedProducts. Default value is 900.

Resource

```

```

Available version

55.0

Apex Request Example

```

```

## Code Examples

```
UPDATE_PROMOTION
```

```apex
String salesOrg = '0001';
String endpointName = 'UPDATE_PROMOTION';
Id promoId = 'promotionId';
cgcloud__Promotion__c promo = [SELECT Id, cgcloud__Anchor_Account__c, cgcloud__Date_From__c, cgcloud__Date_Thru__c, cgcloud__Delivery_Date_From__c, cgcloud__Delivery_Date_Thru__c, cgcloud__Placement_Date_From__c, cgcloud__Placement_Date_Thru__c, cgcloud__Commit_Date__c, cgcloud__Promotion_Template__c FROM cgcloud__Promotion__c WHERE Id=:promoId LIMIT 1];
String payload = JSON.serialize(new Map<String, Object>{
    'promotionid'=>promo.Id,
    'phase'=>'Planning',
    'active'=>true,
    'version'=>2,
    'isfrozen'=>false,
    'accoundsetid'=>null,
    'accountid'=>promo.cgcloud__Anchor_Account__c,
    'commitdate'=>Datetime.newInstanceGmt(promo.cgcloud__cgcloud__Commit_Date__c.year(), promo.cgcloud__cgcloud__Commit_Date__c.month(), promo.cgcloud__cgcloud__Commit_Date__c.day()).getTime(),
    'datefrom'=>Datetime.newInstanceGmt(promo.cgcloud__cgcloud__Date_From__c.year(), promo.cgcloud__Date_From__c.month(), promo.cgcloud__Date_From__c.day()).getTime(),
    'datethru'=>Datetime.newInstanceGmt(promo.cgcloud__Date_Thru__c.year(), promo.cgcloud__Date_Thru__c.month(), promo.cgcloud__Date_Thru__c.day()).getTime(),
    'manualcalculationinput'=>new Map<String, Object>(),
    'instoredatefrom'=>Datetime.newInstanceGmt(promo.cgcloud__Placement_Date_From__c.year(), promo.cgcloud__Placement_Date_From__c.month(), promo.cgcloud__Placement_Date_From__c.day()).getTime(),
    'instoredatethru'=>Datetime.newInstanceGmt(promo.cgcloud__Placement_Date_Thru__c.year(), promo.cgcloud__Placement_Date_Thru__c.month(), promo.cgcloud__Placement_Date_Thru__c.day()).getTime(),
    'shipmentdatefrom'=>Datetime.newInstanceGmt(promo.cgcloud__Delivery_Date_From__c.year(), promo.cgcloud__Delivery_Date_From__c.month(), promo.cgcloud__Delivery_Date_From__c.day()).getTime(),
    'shipmentdatethru'=>Datetime.newInstanceGmt(promo.cgcloud__Delivery_Date_Thru__c.year(), promo.cgcloud__Delivery_Date_Thru__c.month(), promo.cgcloud__Delivery_Date_Thru__c.day()).getTime(),
    'promotiontemplateid'=>promo.cgcloud__Promotion_Template__c,
    'salesorg'=>salesOrg,
    'aggregationcategory'=>null,
    'calculationmode' => 'Writeback',
    'firstdayofweek' => 1,
    'firstweekofyear' => 1,
    'productgrouplevels' => new List<String>{'Category'}
});
<namespace>.OffPlatformCallout request = new <namespace>.OffPlatformCallout(endpointName, salesOrg);
<namespace>.OffPlatformCalloutResponse response = request.execute(
    <namespace>.TransactionHandler.getTransactionIdentifier(),
    null,
    payload
);

system.debug(JSON.serialize(response));
```
