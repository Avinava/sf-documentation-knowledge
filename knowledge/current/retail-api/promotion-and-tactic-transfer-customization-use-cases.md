---
title: "Promotion and Tactic Transfer Customization Use Cases"
domain: retail-api
topic: promotion-and-tactic-transfer-customization-use-cases
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.002Z
estimatedTokens: 382
keywords: [Promotion, Tactic, Transfer, Customization, Cases, different, Apex, process, Change, managed, package, sObject, record, Add, custom]
---

# Promotion and Tactic Transfer Customization Use Cases

> This section provides different Apex customization use cases for the promotion and
    tactic transfer process.

# Promotion and Tactic Transfer Customization Use Cases

This section provides different Apex customization use cases for the promotion and tactic transfer process.

## Change a managed package sObject field value

Here’s a sample Apex class that modifies the date field of a tactic.

```

```

Here’s a sample Apex class that modifies the slogan field of a promotion.

```

```

## Delete a managed package sObject record

Here’s a sample Apex class that deletes the first tactic from the list of tactics.

```

```

Here’s a sample Apex class that deletes the first promotion from the list of promotions.

```

```

## Add a custom sObject

Here’s a sample Apex class that adds additional tactic sObject records to a planned promotion that is saved.

```

```

Here’s a sample Apex class that adds a promotion sObject record during the promotion save process.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The TPM\_Promotion class ensures that all the promotion-related sObjects are committed in an all-or-none fashion while encapsulating all operations in a transaction.

## Get the tactic products linked to a tactic, and perform customization on the tactic products

Here’s a sample Apex class that gets all the products linked to a tactic and deletes the first product in the list.

```

```

## Add new tactic products to the existing managed package or new tactic records

Here’s a sample Apex class that adds a product to a specific tactic.

```

```

## Code Examples

```apex
global class TacticTransferSaveCust implements System.Callable {
    global Object call(String action, Map<String, Object> params) {
    List<cgcloud.RE_TacticTransfer> tacticTransferWrapper = (List<cgcloud.RE_TacticTransfer>) params.get('tacticTransfer');
    cgcloud__Tactic__c record = (cgcloud__Tactic__c) tacticTransferWrapper[0].getTactic().getRecord();

    if (record.cgcloud__Date_Thru__c != null) {
    record.cgcloud__Date_Thru__c = record.cgcloud__Date_Thru__c.addDays(1);
    }

    return tacticTransferWrapper;
 }
}
```

```apex
global class PromotionTransferSaveCust implements System.Callable {
    global Object call(String action, Map<String, Object> params) {
String SAVE_HOOK_SUFFIX = ' Slogan hook ';
// Get the RE_PromotionTransfer instance
List<cgcloud.RE_PromotionTransfer> promotionTransferWrapperList = (List<cgcloud.RE_PromotionTransfer>) params.get('promotionTransfer');
        
for(cgcloud.RE_PromotionTransfer promotionTransferWrapper : promotionTransferWrapperList) {
    cgcloud__Promotion__c record = (cgcloud__Promotion__c) promotionTransferWrapper.getPromotion().getRecord();

    if (record.cgcloud__Slogan_Language_1__c != null) {
        record.cgcloud__Slogan_Language_1__c =
        record.cgcloud__Slogan_Language_1__c + SAVE_HOOK_SUFFIX;
    }
}

return promotionTransferWrapperList;
}
}
```

```apex
global class TacticTransferSaveCust implements System.Callable {
    global Object call(String action, Map<String, Object> params) {
// Get the RE_TacticTransfer instance
   List<cgcloud.RE_TacticTransfer> tacticTransferWrapper = (List<cgcloud.RE_TacticTransfer>) params.get('tacticTransfer');

// Delete the first Tactic__c SObject
   cgcloud.RE_TacticTransfer.Record tacticRecordWrapper = tacticTransferWrapper[0].getTactics()[0];
    if (!tacticRecordWrapper.isDeleted())
    {
       // We can also check if the record is new with isNew()
      tacticRecordWrapper.setIsDeleted(true);
    }
    return tacticTransferWrapper;
 }
}
```

```apex
global class PromotionTransferSaveCust implements System.Callable {
    global Object call(String action, Map<String, Object> params) {
// Get the List of RE_PromotionTransfer instances
List<cgcloud.RE_PromotionTransfer> promotionTransferWrapperList = (List<cgcloud.RE_PromotionTransfer>) params.get('promotionTransfer');

// Delete the first Promotion__c sObject
cgcloud.RE_PromotionTransfer.Record promotionRecord = promotionTransferWrapper[0].getPromotion();
if (!promotionRecord.isDeleted())
{ 
     // We can also check if the record is new with isNew()
    promotionRecord.setIsDeleted(true);
}
    return promotionTransferWrapperList;
 }
}
```

```apex
global class TacticTransferSaveCust implements System.Callable {
    global Object call(String action, Map<String, Object> params) {
     List<cgcloud.RE_TacticTransfer> tacticTransferWrapper = (List<cgcloud.RE_TacticTransfer>) params.get('tacticTransfer');
     for (Integer count = 0; count < 2; count++) {
       cgcloud__Tactic__c newTactic = new cgcloud__Tactic__c();
       newTactic.cgcloud__Tactic_Template__c = 'a3A8D000000RFbnUAG';
       newTactic.cgcloud__Date_From__c = Date.newInstance(2023, 9, 9);
       newTactic.cgcloud__Date_Thru__c = Date.newInstance(2023, 9, 12);
       newTactic.RecordTypeId = '0128D000002MRKIQA4';
       newTactic.cgcloud__Promotion__c = 'a2Y8D000000g4kZUAQ';
       tacticTransferWrapper.add(new cgcloud.RE_TacticTransfer(newTactic));
   }
  return tacticTransferWrapper;
 }
}
```
