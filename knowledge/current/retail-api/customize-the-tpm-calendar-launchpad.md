---
title: "Customize the TPM Calendar Launchpad"
domain: retail-api
topic: customize-the-tpm-calendar-launchpad
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.678Z
estimatedTokens: 538
keywords: [Customize, TPM, Calendar, Launchpad, promotion, hover, content, buttons, callable, Apex, customization, hook]
---

# Customize the TPM Calendar Launchpad

> To customize the promotion hover content and buttons on the TPM calendar launchpad UI,
        create a callable Apex class as a customization hook.

# Customize the TPM Calendar Launchpad

To customize the promotion hover content and buttons on the TPM calendar launchpad UI, create a callable Apex class as a customization hook.

1.  Log in to your Salesforce org, and go to Developer Console.
2.  Create a global Apex class that implements the System.Callable interface.
3.  Add the global call method with these parameters.

    -   action: String. The behavior for the method to exhibit.
    -   params: Map<String,Object>. Arguments with these key value pairs.
        -   txId: String. ID of the transaction.
        -   promoId: Id. ID of the promotion record.
        -   promotionHoverContent: Object of type PromotionHoverContent. The PromotionHoverContent class exposes methods to access the UI elements and content on the promotion launchpad. For a list of all the exposed methods, see [PromotionHoverContent Class](atlas.en-us.retail_api.meta/retail_api/promotion_content_hover_class.htm "The PromotionHoverContent Apex class provides programmatic access to the promotion hover content and the buttons on the trade calendar promotion launchpad UI.").

    ```

    ```

4.  To modify the content and the UI elements, use the methods exposed by the PromotionHoverContent class.

    You can add a maximum of 4 attributes and 8 KPIs on a promotion launchpad.

    Here’s a sample Apex class that modifies the header content, adds attributes and KPIs, and sets the visibility of the edit button to false on the promotion launchpad.

    ```

    ```

5.  From Setup, in the Quick Find box, enter Custom Metadata Types, and then expand **Custom Metadata Types**.
6.  On the **CGCloud Process Customization** row, click **Manage Records**.
7.  Click **New**, fill in these details, and then save your work.

    -   **Label**: TPM\_TradePlanning\_PromotionHoverContent
    -   **DeveloperName**: TPM\_TradePlanning\_PromotionHoverContent
    -   **Class**: <Your Callable APEX Class>
    -   **Method**: call
    -   **Enabled**: Select the checkbox.


The Apex customization hook is enabled. The call method updates the promotion launchpad on the trade calendar based on your custom logic.

## Code Examples

```apex
global class < Your Callable APEX Class > implements System.Callable {

    global Object call(String action, Map < String, Object > params) {
        String txId = (String) params.get('txId');
        Id promoId = (Id) params.get('promotionId');
        PromotionHoverContent promoHoverContent = (PromotionHoverContent) params.get('promotionHoverContent');
        // Your custom logic goes here
        return null;
    }
}
```

```apex
global class TPM_TC_LaunchPad_Cust implements System.Callable {
    global class CustomizationException extends Exception {}

    global Object call(String action, Map < String, Object > params) {
        String txId = (String) params.get('txId');
        Id promoId = (Id) params.get('promotionId');
        PromotionHoverContent promoHoverContent = (PromotionHoverContent) params.get('promotionHoverContent');
        List < PromotionHoverContent.Attribute > attrs = promoHoverContent.getAttributes();
        promoHoverContent.setAttributes(
            new List < PromotionHoverContent.Attribute > {
                new PromotionHoverContent.Attribute(
                    attrs[0].getLabel() + '_cust',
                    attrs[0].getValue() + '_cust'
                ),
                new PromotionHoverContent.Attribute(
                    attrs[1].getLabel() + '_cust',
                    attrs[1].getValue() + '_cust'
                )
            }
        );
        List < PromotionHoverContent.Kpi > kpis = promoHoverContent.getKPIs();
        List < PromotionHoverContent.Kpi > newKpis = new List < PromotionHoverContent.Kpi > ();
        for (PromotionHoverContent.Kpi kpi: kpis) {
            newKpis.add(
                new PromotionHoverContent.Kpi(
                    kpi.getReadCode(),
                    kpi.getLabel() + '_cust'
                )
            );
        }
        promoHoverContent.setKpis(newKpis);
        promoHoverContent.setHeaderRow1(
            promoHoverContent.getHeaderRow1() + '_cust'
        );
        promoHoverContent.setHeaderRow2(
            promoHoverContent.getHeaderRow2() + '_cust'
        );
        promoHoverContent.setHeaderRow3(
            promoHoverContent.getHeaderRow3() + '_cust'
        );
        promoHoverContent.setEditButtonVisible(false);
        return null;
    }
}
```

## Related Topics

- PromotionHoverContent Class (atlas.en-us.retail_api.meta/retail_api/promotion_content_hover_class.htm)
