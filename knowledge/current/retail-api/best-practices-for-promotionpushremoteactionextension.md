---
title: "Best Practices for PromotionPushRemoteActionExtension"
domain: retail-api
topic: best-practices-for-promotionpushremoteactionextension
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:41.040Z
estimatedTokens: 781
keywords: [Best, Practices, PromotionPushRemoteActionExtension, topic, focuses, different, Apex, implementations, push, multiple, parent, promotions, Legacy, Mode, New]
---

# Best Practices for PromotionPushRemoteActionExtension

> This topic focuses on different types of Apex implementations to push multiple parent
  promotions.

# Best Practices for PromotionPushRemoteActionExtension

This topic focuses on different types of Apex implementations to push multiple parent promotions.

For more information, see [PromotionPushRemoteActionExtension Class](atlas.en-us.retail_api.meta/retail_api/global_tpm_promotion_push_remote_action.htm "This Apex class provides programmatic access to the TPM Push Promotion Process Remote Actions."). The type of Apex implementations are:

-   Sync Apex Snippet (legacy mode only)
-   Queueable (both new and legacy modes)
-   Future Method (new mode only)
-   Apex Batch Class (new mode only)

An Apex code snippet is provided for each Apex class.

## Legacy Mode

In Summer ‘25 or earlier releases, [PromotionPushRemoteActionExtension Class](atlas.en-us.retail_api.meta/retail_api/global_tpm_promotion_push_remote_action.htm "This Apex class provides programmatic access to the TPM Push Promotion Process Remote Actions.") used only Apex Flex Queue to push promotions. This method of using Apex Flex Queue is referred to as Legacy Mode in this topic. This method continues to be available in future releases.

## New Mode

In Winter ‘26 or later releases, a new method to push promotions using the PromotionPushRemoteActionExtension Apex class is introduced. To enable the new method, the PushPromotionExecutionMode system setting must be set to OffPlatform.

## Sync Apex Snippet

This approach of Apex implementation uses the legacy mode to push promotions using the PromotionPushRemoteActionExtension Apex class. It demonstrates how to push multiple parent promotions from one synchronous Apex execution context.

```

```

## Queueable

This approach of Apex implementation can use either the legacy mode or the new mode to push promotions using the PromotionPushRemoteActionExtension Apex class. It demonstrates how to push multiple parent promotions with a Queueable implementation. It requires implementation of an Apex class implementing Queueable and AllowsCallouts interfaces and an Apex code which schedules the queueable jobs (one job per parent promotion to push).

Implement Queueable and AllowsCallouts

```

```

Scheduling Apex Snippet

```

```

## Future Method

This approach of Apex implementation uses the new mode to push promotions using the PromotionPushRemoteActionExtension Apex class. It demonstrates how to push multiple parent promotions with a Future annotated method implementation. Each call to the future annotated method schedules one parent promotion.

```

```

Scheduling Apex Snippet

```

```

## Apex Batch Class

This approach of Apex implementation uses the new mode to push promotions using the PromotionPushRemoteActionExtension Apex class. It demonstrates how to push multiple parent promotions with a Batchable implementation. It requires implementation of an Apex class implementing Batchable and AllowsCallouts interfaces and an Apex code which schedules the batch job. The execute method of the batch job schedules one parent promotion push per call. It’s required to use a batch size of 1 when scheduling the batch job.

```

```

Scheduling Apex Snippet

```

```

## Code Examples

```apex
List<String> promotionIds = new List<String>{
    '<PARENTPROMOID01',
    '<PARENTPROMOID02'
    };

for (String promotionId : promotionIds) {
    String readParams = '{"promotionId":"' + promotionId.trim() + '"}';
    String txid = UUID.randomUUID().toString();
    cgcloud_dev.PromotionPushRemoteActionExtension.pushBOPromotion(txid, readParams);
}
```

```apex
public class SchedulePromotionPushQueueable implements Queueable, Database.AllowsCallouts {
  public String promotionId { get; set; }

  public void execute(QueueableContext qc) {
       String readParams = '{"promotionId":"' + this.promotionId + '"}';
       String txid = cgcloud_dev.TransactionHandler.getTransactionIdentifier();
       cgcloud_dev.PromotionPushRemoteActionExtension.pushBOPromotion(txid, readParams);
  }
}
```

```apex
List<String> promotionIds = new List<String>{
    '<PARENTPROMOID01',
    '<PARENTPROMOID02'
    };

for (String promotionId : promotionIds) {
  SchedulePromotionPushQueueable q = new SchedulePromotionPushQueueable();
  q.promotionId = promotionId.trim();
  System.enqueueJob(q);
}
```

```apex
public class SchedulePromotionPushFuture {
  public List<String> promotionIds { get; set; }

  public void execute() {
    for (String promotionId : this.promotionIds) {
      SchedulePromotionPushFuture.schedulePushPromotion(promotionId.trim());
    }
  }
  
  @future(callout=true)
  static public void schedulePushPromotion(String promotionId) {
       String readParams = '{"promotionId":"' + promotionId + '"}';
       String txid = cgcloud_dev.TransactionHandler.getTransactionIdentifier();
       cgcloud_dev.PromotionPushRemoteActionExtension.pushBOPromotion(txid, readParams);
  }
}
```

```apex
SchedulePromotionPushFuture futureClass = new SchedulePromotionPushFuture();
futureClass.promotionIds = new List<String>{
    '<PARENTPROMOID01',
    '<PARENTPROMOID02'
    };
futureClass.execute();
```

## Related Topics

- PromotionPushRemoteActionExtension Class (atlas.en-us.retail_api.meta/retail_api/global_tpm_promotion_push_remote_action.htm)
