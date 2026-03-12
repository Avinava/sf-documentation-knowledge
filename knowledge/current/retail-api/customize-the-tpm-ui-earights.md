---
title: "Customize the TPM UI EARights"
domain: retail-api
topic: customize-the-tpm-ui-earights
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.127Z
estimatedTokens: 693
keywords: [Customize, TPM, EARights, Enable, editability, visibility, promotion, tactic, modifying]
---

# Customize the TPM UI EARights

> Enable the global editability and visibility of a promotion or tactic by modifying its
    EARights.

# Customize the TPM UI EARights

Enable the global editability and visibility of a promotion or tactic by modifying its EARights.

1.  Log in to your Salesforce org, and go to Developer Console.
2.  Create a global Apex class that implements the System.Callable interface.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

    #### Note

    Create two different Apex classes to modify the promotion and tactic EARights separately.

3.  Override the global call method that has these parameters.

    -   action: String. The behavior for the method to exhibit.
    -   params: Map<String,Object>. Arguments to be used by the specified action. The object is of type List<EARightsAccess\>. Each EARightsAccess instance has properties that you can modify. For information on this class, see [EARightsAccess Class Reference](atlas.en-us.retail_api.meta/retail_api/tpm_editaccessrights_class.htm "Use the EARightsAccess class to access EARights the application uses.").

    Here’s the Apex class structure for the promotion and tactic EARights customization.

    ```

    ```

    ```

    ```

4.  To modify the EARights associated with a promotion or tactic, edit the properties of the associated EARightsAccess instance in the respective Apex class. For a list of modifiable promotion and tactic EARights, see [Modifiable Promotion and Tactic EARights](atlas.en-us.retail_api.meta/retail_api/promotion_tactic_editaccessrights.htm "This section provides all the modifiable promotion and tactic EARights.").

    Here’s a sample Apex class that modifies the EARights of the promotion edit button associated with an existing promotion.

    ```

    ```

5.  From Setup, in the Quick Find box, enter Custom Metadata Types, and then expand **Custom Metadata Types**.
6.  On the **CGCloud Process Customization** row, click **Manage Records**.
7.  Click **New**, complete these fields, and then save your work.

    For promotion EARights customization, fill these details.

    -   **Label**: TPM\_Promotion\_EARightsAccess\_Promotion
    -   **DeveloperName**: TPM\_Promotion\_EARightsAccess\_Promotion
    -   **Class**: <Your Callable Apex Class for modifying the promotion EARights>
    -   **Method**: save
    -   **Enabled**: Select the checkbox.

    For tactic EARights customization, fill these details.

    -   **Label**: TPM\_Promotion\_EARightsAccess\_Tactic
    -   **DeveloperName**: TPM\_Promotion\_EARightsAccess\_Tactic
    -   **Class**: <Your Callable Apex Class for modifyng the tactic EARights>
    -   **Method**: save
    -   **Enabled**: Select the checkbox.


The Apex customization hook is enabled. The call method modifies the EARights of an existing promotion, or tactic based on your custom logic.

## Code Examples

```apex
global class <Your Callable Apex Class> implements System.Callable {

    global Object call(String action, Map<String, Object> args) {
        // Read Transaction Id
        String txId = (String) args.get('txId');
        // Get the Promotion Id
        Id promotionId = args.get('promotionId'); 
        // Get the Promotion EARigths
        List<cgcloud.EARightsAccess> promotionRights = (List<cgcloud.EARightsAccess>) args.get('EARights');
                
        // Your custom logic goes here
    }
}
```

```apex
global class <Your Callable Apex Class> implements System.Callable {

    global Object call(String action, Map<String, Object> args) {
        // Read Transaction Id
        String txId = (String) args.get('txId');
        // Get the Promotion Id
        Id promotionId = args.get('promotionId'); 
        // Get the Tactic EARigths
        List<cgcloud.EARightsAccess> tacticRights = (List<cgcloud.EARightsAccess>) args.get('EARights');
                
        // Your custom logic goes here
    }
}
```

```apex
global class MyEditAccessRightsHook implements System.Callable {

    global Object call(String action, Map<String, Object> args) {
        // Read Transaction Id
        String txId = (String) args.get('txId');
        // Get the Promotion Id
        Id promotionId = args.get('promotionId'); 
        // Get the EARigths
        List<cgcloud.EARightsAccess> promotionRights = (List<cgcloud.EARightsAccess>) args.get('EARights');
                
        // Get the Promotion Template name
        List<cgcloud__Promotion__c> promos = [
            SELECT cgcloud__Promotion_Template__r.Name
            FROM cgcloud__Promotion__c
            WHERE Id = :promotionId
            LIMIT 1
        ];
        
        // Check if its the target template
        Boolean isNoTactics = promos[0].cgcloud__Promotion_Template__r.Name == 'No Tactics';
        
        // Search the related EARightsAccess instance
        for (cgcloud.EARightsAccess acl : promotionRights) {
            if (acl.Name == 'PROMOTION_EDIT_BUTTON' && isNoTactics) {
                acl.Visible = false;
                acl.Editable = false;
            }
        }
        
    }
}
```

## Related Topics

- EARightsAccess Class Reference (atlas.en-us.retail_api.meta/retail_api/tpm_editaccessrights_class.htm)
- Modifiable Promotion and Tactic EARights (atlas.en-us.retail_api.meta/retail_api/promotion_tactic_editaccessrights.htm)
