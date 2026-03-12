---
title: "Promotion.DoWork Class"
domain: retail-api
topic: promotiondowork-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.049Z
estimatedTokens: 251
keywords: [Promotion.DoWork, APEX, capability, perform, additional, work, once, promotion, completed, records, committed, database, transaction, rolled, back]
---

# Promotion.DoWork Class

> This APEX interface provides the capability to perform additional work once a promotion
  is completed and the related records are committed to the database. The transaction will be rolled
  back if there any any errors reported during the doWork execution.

# Promotion.DoWork Class

This APEX interface provides the capability to perform additional work once a promotion is completed and the related records are committed to the database. The transaction will be rolled back if there any any errors reported during the doWork execution.

## Namespace

```

```

## Example Implementation

```

```

-   **[TPM\_Promotion.DoWork Methods](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.do.work.htm#tpm_promotion_tactic_method.xml)**


## TPM\_Promotion.DoWork Methods

The following are methods for TPM\_Promotion.DoWork.

-   **[doWork](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.do.work.htm#method_promotion.do.work)**
    Use this interface to append work to be executed after the Promotion and it’s related records are committed to the database.

### doWork

Use this interface to append work to be executed after the Promotion and it’s related records are committed to the database.

#### API Version

55

#### Signature

global void doWork()

## Code Examples

```apex
global class MyAfterCommitWork implements cgcloud.TPM_Promotion.DoWork {

    // This method will be called after the promotion and related record
    // changes are committed to the database.
    // If any error is thrown during the execution of doWork, the transaction
    // will be rolled back
    global override void doWork() {
        system.debug('Im here!');
    }
}



cgcloud.TPM_Promotion tpmPromotion;

// Register the work to be performed after the commit
tpmPromotion.registerWork(new MyAfterCommitWork());
```

## Related Topics

- TPM_Promotion.DoWork Methods (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.do.work.htm)
- doWork (atlas.en-us.retail_api.meta/retail_api/tpm_promotion.do.work.htm)
