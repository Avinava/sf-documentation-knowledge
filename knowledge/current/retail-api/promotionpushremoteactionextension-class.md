---
title: "PromotionPushRemoteActionExtension Class"
domain: retail-api
topic: promotionpushremoteactionextension-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.024Z
estimatedTokens: 646
keywords: [PromotionPushRemoteActionExtension, Apex, programmatic, access, TPM, Push, Promotion, Process, Remote, Actions, Sample, Code, Snippet, readLOExtChildPromotions, txId]
---

# PromotionPushRemoteActionExtension Class

> This Apex class provides programmatic access to the TPM Push Promotion Process Remote
  Actions.

# PromotionPushRemoteActionExtension Class

This Apex class provides programmatic access to the TPM Push Promotion Process Remote Actions.

## Namespace

cgcloud

The following are the three global static methods for PromotionPushRemoteActionExtension.

-   **readLOExtChildPromotions**
-   **pushBOPromotion**
-   **synchronizeBOPromotion**

## Sample Code Snippet

```

```

## readLOExtChildPromotions (txId, readParams)

Reads the list of child promotions available for a parent promotion.

API Version

65.0 and later

Signature

```

```

Signature Parameters

-   txId: Enter the GUID of the transaction that is used to log and track the status of promotions that were pushed. It is also used to find status details in push related to the Batch Run Status record and the Promotion Push Status record.
-   readParams: A JSON snippet that contains the parent promotion ID within the parentId property.

## pushBOPromotion (txId, readParams)

Triggers the push process for the parent promotion ID provided as an input. Trigger error is thrown as an exception.

API Version

65.0 and later

Signature

```

```

Signature Parameters

-   txId: Enter the GUID of the transaction that is used to log and track the status of promotions that were pushed. It is also used to find status details in push related to the Batch Run Status record and the Promotion Push Status record.
-   readParams: A JSON snippet that contains the parent promotion ID within the parentId property.

## synchronizeBOPromotion (txId, readParams)

Synchronizes and triggers the push process for the parent promotion ID provided as an input. The method returns true only if the push is triggered successfully. The method returns false in case of a push trigger error. For example, when the scheduling threshold limit is reached or if push is already in progress. The push trigger error is sent as a notification to the user who is calling the method.

API Version

65.0 and later

Signature

```

```

Signature Parameters

-   txId: Enter the GUID of the transaction that is used to log and track the status of promotions that were pushed. It is also used to find status details in push related to the Batch Run Status record and the Promotion Push Status record.
-   readParams: A JSON snippet that contains the parent promotion ID within the parentId property.

-   **[Best Practices for PromotionPushRemoteActionExtension](atlas.en-us.retail_api.meta/retail_api/tpm_best_practices_push_promotion.htm)**
    This topic focuses on different types of Apex implementations to push multiple parent promotions.

## Code Examples

```
String parentPromotionId = '<FILLHERE>';
String readParams = '{"promotionId":"' + parentPromotionId + '"}';
String txid = cgcloud.TransactionHandler.getTransactionIdentifier();
cgcloud.PromotionPushRemoteActionExtension.pushBOPromotion(txid, readParams);
```

```apex
global static List<cgcloud__Promotion__c> readLOExtChildPromotions(String txId, String
      readParams)
```

```apex
global static void pushBOPromotion(String txId, String readParams)
```

```apex
global static Boolean synchronizeBOPromotion(String txId, String readParams)
```

## Related Topics

- Best Practices for PromotionPushRemoteActionExtension (atlas.en-us.retail_api.meta/retail_api/tpm_best_practices_push_promotion.htm)
