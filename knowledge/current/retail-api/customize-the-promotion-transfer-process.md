---
title: "Customize the Promotion Transfer Process"
domain: retail-api
topic: customize-the-promotion-transfer-process
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.167Z
estimatedTokens: 655
keywords: [Customize, Promotion, Transfer, Process, modify, transferred, callable, Apex, customization, hook]
---

# Customize the Promotion Transfer Process

> To modify the promotion details being transferred, create a callable Apex class as a
    customization hook.

# Customize the Promotion Transfer Process

To modify the promotion details being transferred, create a callable Apex class as a customization hook.

1.  Log in to your Salesforce org, and go to Developer Console.
2.  Create a global Apex class that implements the System.Callable interface.
3.  Override the global call method that has these parameters.

    -   action: String. The behavior for the method to exhibit.
    -   params: Map<String,Object>. Arguments to be used by the specified action. The object is of type List<RE\_PromotionTransfer\>. The RE\_PromotionTransfer class exposes methods to access the promotion. For a list of all the exposed methods, see [RE\_PromotionTransfer Class Reference](atlas.en-us.retail_api.meta/retail_api/RE_promotion_transfer_class.htm "The RE_PromotionTransfer Apex class provides programmatic access to the RE_PromotionTransfer sObject and its related sObjects.").

    Here’s the Apex class structure.

    ```

    ```

4.  To modify the promotion fields, use the methods exposed by the RE\_PromotionTransfer class.

    Add your customizations in the Apex class to:

    -   Create promotion records.
    -   Modify and delete existing promotion records.

    Here’s a sample Apex class that adds a new promotion sObject record during the promotion save process.

    ```

    ```

    For use cases related to the promotion and tactic transfer process customization, see [Promotion and Tactic Transfer Customization Use Cases](atlas.en-us.retail_api.meta/retail_api/tactic_transfer_apex_save_customization.htm "This section provides different Apex customization use cases for the promotion and tactic transfer process.").

5.  From Setup, in the Quick Find box, enter Custom Metadata Types, and then expand **Custom Metadata Types**.
6.  On the **CGCloud Process Customization** row, click **Manage Records**.
7.  Click **New**, fill in these details, and then save your work.

    -   **Label**: RE\_Promotion\_Transfer\_Save
    -   **DeveloperName**: RE\_Promotion\_Transfer\_Save
    -   **Class**: <Your Callable APEX Class>
    -   **Method**: save
    -   **Enabled**: Select the checkbox.


The Apex customization hook is enabled. When a planned promotion is saved in TPM, the call method modifies the existing promotion. Or it adds a promotion record based on your custom logic before transferring it to RE, where the promotion becomes sellable.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The transfer of custom attributes is supported only for advanced promotion, tactic, and tactic product objects.

## Code Examples

```apex
global class <Your Callable APEX Class> implements System.Callable {

    global Object call(String action, Map<String, Object> params) {
        // Get the RE_PromotionTransfer instances from the arguments
        List<cgcloud.RE_PromotionTransfer> promotionTransferWrapper = (List<cgcloud.RE_PromotionTransfer>) params.get('promotionTransfer');
        // Your custom logic goes here
        return promotionTransferWrapper;
    }
}
```

```apex
global class PromotionTransferSaveCust implements System.Callable {
    global Object call(String action, Map < String, Object > params) {
        // Get the List of RE_PromotionTransfer instances
        List < cgcloud.RE_PromotionTransfer > promotionTransferWrapperList = (List < cgcloud.RE_PromotionTransfer > ) params.get('promotionTransfer');
        //Get the first Promotion Record from the wrapper
        cgcloud__Promotion__c record = (cgcloud__Promotion__c) promotionTransferWrapper[0].getPromotion().getRecord();

        List < cgcloud__Promotion__c > promotionList = new List < cgcloud__Promotion__c > ();

        for (Integer count = 0; count < 1; count++) {
            cgcloud__Promotion__c newPromotion = new cgcloud__Promotion__c();
            newPromotion.cgcloud__Slogan_Language_1__c = record.cgcloud__Slogan_Language_1__c + count;
            promotionList.add(newPromotion);
            newPromotion.cgcloud__Promotion_Template__c = 'a2X8D0000003NHQUA2'; //Update the new promotion with the target Promotion Template
            newPromotion.cgcloud__Date_From__c = Date.newInstance(2023, 9, 9);
            newPromotion.cgcloud__Date_Thru__c = Date.newInstance(2023, 9, 12);
            newPromotion.RecordTypeId = '0128D000002MRKEQA4'; //Update the new promotion with the correct Record Type ID
            promotionTransferWrapper.add(new cgcloud.RE_PromotionTransfer(newPromotion));
        }
        return promotionTransferWrapper;
    }
}
```

## Related Topics

- RE_PromotionTransfer Class Reference (atlas.en-us.retail_api.meta/retail_api/RE_promotion_transfer_class.htm)
- Promotion and Tactic Transfer
            Customization Use Cases (atlas.en-us.retail_api.meta/retail_api/tactic_transfer_apex_save_customization.htm)
