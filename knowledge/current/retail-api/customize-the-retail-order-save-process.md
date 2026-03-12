---
title: "Customize the Retail Order Save Process"
domain: retail-api
topic: customize-the-retail-order-save-process
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.205Z
estimatedTokens: 526
keywords: [Customize, Retail, Order, Save, Process, callable, Apex, customization, hook]
---

# Customize the Retail Order Save Process

> To customize the retail order save process, create a callable Apex class as a
    customization hook.

# Customize the Retail Order Save Process

To customize the retail order save process, create a callable Apex class as a customization hook.

1.  Log in to your Salesforce org, and go to Developer Console.
2.  Create a global Apex class that implements the System.Callable interface.
3.  Override the global call method that has these parameters.

    -   action: String. The behavior for the method to exhibit.
    -   params: Map<String,Object>. Arguments to be used by the specified action. The object is of type RE\_Order. The RE\_Order class exposes methods to access the retail order sObject. For a list of all the exposed methods, see [RE\_Order Class Reference](atlas.en-us.retail_api.meta/retail_api/RE_order_class.htm "This Apex class provides programmatic access to the retail order sObject, and its related sObjects.").

    Here’s the Apex class structure.

    ```

    ```

4.  To modify the order fields, use the methods exposed by the RE\_Order class.

    Add your customizations in the Apex class to:

    -   Create retail order records.
    -   Modify and delete existing retail order records.

    Here’s a sample Apex class that adds a custom sObject record during the order save process.

    ```

    ```

    For use cases related to the order save process customization, see [Retail Order Save Customization Use Cases](atlas.en-us.retail_api.meta/retail_api/retail_order_apex_save_customization.htm "Here are the different Apex customization use cases for the retail order save process.").

5.  From Setup, in the Quick Find box, enter Custom Metadata Types, and then expand **Custom Metadata Types**.
6.  Click **Manage Records** on the **CGCloud Process Customization** row.
7.  Click **New**, fill in these details, and then save your work.

    -   **Label**: RE\_Order\_Save
    -   **DeveloperName**: RE\_Order\_Save
    -   **Class**: <Your Callable APEX Class>
    -   **Method**: save
    -   **Enabled**: Select the checkbox


The Apex customization hook is enabled. When a retail order is saved, the call method modifies the saved order based on your custom logic.

## Code Examples

```apex
global class <Your Callable APEX Class> implements System.Callable {

  global Object call(String action, Map<String, Object> params) {
    // Get the RE_Order instances from the arguments
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');
    // Get the Order SObject
    cgcloud__Order__c order = (cgcloud__Order__c) orderWrapper.getOrder().getRecord();
    // Retrieve your custom state sent to UI
    String payloadString = (String) params.get('customState');

    // Your custom logic goes here
    return null;
  }
}
```

```apex
global class RetailOrderSaveCustomization implements System.Callable {
  public Object call(String m, Map<String, Object> params) {
    // Get the RE_Order instance
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');

    // Get the Order__c SObject
    cgcloud__Order__c order = (cgcloud__Order__c) orderWrapper.getOrder()
      .getRecord();

    /**
     * MyCustomSObject__c is a custom object and it has a Custom__c field.
     * Use append method so that this new SObject will be created as part of the order save process.
     */
    MyCustomSObject__c mySObject = new MyCustomSObject__c();
    mySObject.Custom__c = order.cgcloud__Customer_Order_Id__c;
    cgcloud.RE_Order.Record myRecordWrapper = orderWrapper.append(mySObject);

    return null;
  }
}
```

## Related Topics

- RE_Order Class Reference (atlas.en-us.retail_api.meta/retail_api/RE_order_class.htm)
- Retail Order Save Customization Use Cases (atlas.en-us.retail_api.meta/retail_api/retail_order_apex_save_customization.htm)
