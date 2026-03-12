---
title: "Customize the Tactic Transfer Process"
domain: retail-api
topic: customize-the-tactic-transfer-process
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.007Z
estimatedTokens: 608
keywords: [Customize, Tactic, Transfer, Process, modify, promotion, transferred, callable, Apex, customization, hook]
---

# Customize the Tactic Transfer Process

> To modify the tactic details related to the promotion being transferred, create a
    callable Apex class as a customization hook.

# Customize the Tactic Transfer Process

To modify the tactic details related to the promotion being transferred, create a callable Apex class as a customization hook.

1.  Log in to your Salesforce org, and go to Developer Console.
2.  Create a global Apex class that implements the System.Callable interface.
3.  Override the global call method that has these parameters.

    -   action: String. The behavior for the method to exhibit..
    -   params: Map<String,Object>. Arguments to be used by the specified action. The object is of type List<RE\_TacticTransfer\>. The RE\_TacticTransfer class exposes methods to access the promotion and its tactic or tactic products. For a list of all the exposed methods, see [RE\_TacticTransfer Class Reference](atlas.en-us.retail_api.meta/retail_api/RE_tactic_transfer_class.htm "The RE_TacticTransfer Apex class provides programmatic access to the RE_TacticTransfer sObject and its related sObjects.").

    Here’s the Apex class structure.

    ```

    ```

4.  To modify the tactic or tactic product fields, use the methods exposed by the RE\_TacticTransfer class.

    Add your customizations in the Apex class to:

    -   Create additional tactic records.
    -   Modify and delete existing tactic records.

    Here’s a sample Apex class that adds additional tactic sObject records to a planned promotion that’s saved.

    ```

    ```

    For use cases related to the promotion and tactic transfer process customization, see [Promotion and Tactic Transfer Customization Use Cases](atlas.en-us.retail_api.meta/retail_api/tactic_transfer_apex_save_customization.htm "This section provides different Apex customization use cases for the promotion and tactic transfer process.").

5.  From Setup, in the Quick Find box, enter Custom Metadata Types, and then expand **Custom Metadata Types**.
6.  On the **CGCloud Process Customization** row, click **Manage Records**.
7.  Click **New**, fill the following details, and then save your work.

    -   **Label**: RE\_Tactic\_Transfer\_Save
    -   **DeveloperName**: RE\_Tactic\_Transfer\_Save
    -   **Class**: <Your Callable APEX Class>
    -   **Method**: save
    -   **Enabled**: Select the checkbox.


The Apex customization hook is enabled. When a planned promotion is saved in TPM, the call method modifies the tactic or tactic product details related to the promotion based on your custom logic before transferring it to RE.

## Code Examples

```apex
global class < Your Callable APEX Class > implements System.Callable {

    global Object call(String action, Map < String, Object > params) {
        // Get the RE_TacticTransfer instances from the arguments
        List < cgcloud.RE_TacticTransfer > tacticTransferWrapper = (List < cgcloud.RE_TacticTransfer > ) params.get('tacticTransfer');
        // Your custom logic goes here
        return tacticTransferWrapper;
    }
}
```

```apex
global class TacticTransferSaveCust implements System.Callable {

    global Object call(String action, Map < String, Object > params) {
        // Get the RE_TacticTransfer instances from the arguments
        List < cgcloud.RE_TacticTransfer > tacticTransferWrapper = (List < cgcloud.RE_TacticTransfer > ) params.get('tacticTransfer');
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

## Related Topics

- RE_TacticTransfer Class Reference (atlas.en-us.retail_api.meta/retail_api/RE_tactic_transfer_class.htm)
- Promotion and Tactic Transfer
            Customization Use Cases (atlas.en-us.retail_api.meta/retail_api/tactic_transfer_apex_save_customization.htm)
