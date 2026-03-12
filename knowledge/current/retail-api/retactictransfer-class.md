---
title: "RE_TacticTransfer Class"
domain: retail-api
topic: retactictransfer-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.492Z
estimatedTokens: 413
keywords: [RE_TacticTransfer, Apex, programmatic, access, sObject, sObjects, _TacticTransfer, Implementation]
---

# RE_TacticTransfer Class

> The RE_TacticTransfer Apex class provides
  programmatic access to the RE_TacticTransfer sObject and its
  related sObjects.

# RE\_TacticTransfer Class

The RE\_TacticTransfer Apex class provides programmatic access to the RE\_TacticTransfer sObject and its related sObjects.

The RE\_TacticTransfer class contains:

-   A List object of type cgcloud.RE\_TacticTransfer with all the managed package tactic data.

    ```

    ```

-   A List object of type cgcloud.RE\_TacticTransfer with all the tactic data.

    ```

    ```

-   A List object of type Promotion\_\_c with all the promotion data.

    ```

    ```

-   A Boolean flag to determine if the record is a tactic product

    ```

    ```


## Namespace

```

```

## Example Implementation

```

```

## Supported Methods

| Method signature | Description | Version |
| --- | --- | --- |
| global RE_TacticTransfer.Record addTacticProduct(Tactic_Product__c tacticProduct) | Adds a new tactic product to the tactic. | 60.0 |
| global SObject getRecord() | Returns the full sObject.To get the missing ID of the sObject, use the getId() method of the record wrapper. | 60.0 |
| global RE_TacticTransfer.Record getTactic() | Returns the main tacticTransfer record. | 60.0 |
| global List<RE_TacticTransfer.TacticRecord> getTactics | Returns a list of RE_TacticTransfer.TacticRecord instances with the tactic contents. | 60.0 |
| global List<RE_TacticTransfer.Record> getTacticProducts() | Returns a filtered list of RE_PromotionTransfer.Record instances with the tactic contents. | 60.0 |
| global RE_TacticTransfer(Tactic__c tacticSObject) | Constructor that loads all related data for the given tacticTransfer ID. | 60.0 |
| global void setIsDeleted(Boolean value) | Sets the isDeleted flag for the record. | 60.0 |

## Code Examples

```apex
List<cgcloud.RE_TacticTransfer> tacticProductTransferWrapper = (List<cgcloud.RE_TacticTransfer>) params.get('tacticTransfer');
```

```apex
List<cgcloud__Tactic__c> targetTacticList = (List<cgcloud__Tactic__c>) params.get('targetTacticList');
```

```apex
List<cgcloud__Promotion__c> targetPromotionList = (List<cgcloud__Promotion__c>) params.get('targetPromotionList');
```

```
Boolean isTacticProduct = (Boolean)params.get('isTacticProduct');
```

```
cgcloud.RE_TacticTransfer tacticTransfer;
```
