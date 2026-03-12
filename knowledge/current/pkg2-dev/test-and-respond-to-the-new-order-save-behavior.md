---
title: "Test and Respond to the New Order Save Behavior"
domain: pkg2-dev
topic: test-and-respond-to-the-new-order-save-behavior
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.101Z
estimatedTokens: 1010
keywords: [Test, Respond, New, Order, Save, Behavior, sure, custom, application, logic, works, accurately, records, associated, turn]
---

# Test and Respond to the New Order Save Behavior

> To make sure custom application logic works accurately on records associated with the
    Order object, turn on the Enable New Order Save Behavior setting, and test the behavior. We
    recommend that you support both the new and old order save behavior during testing.

# Test and Respond to the New Order Save Behavior

To make sure custom application logic works accurately on records associated with the Order object, turn on the Enable New Order Save Behavior setting, and test the behavior. We recommend that you support both the new and old order save behavior during testing.

The [Enable New Order Save Behavior](https://help.salesforce.com/s/articleView?id=sales.new_order_save_behavior_setup.htm&type=5&language=en_US) setting helps Salesforce correctly evaluate custom application logic on records associated with the Order object.

If you create any type of package that includes the Order object, the installed package sometimes doesn’t work. If a subscriber org relies on a different order save behavior than their installed packages, the installed packages sometimes don’t work. To ensure the expected behavior, test Enable New Order Save Behavior with your installed packages.

After Enable New Order Save Behavior is selected, Salesforce evaluates and runs these customizations whenever an update to an order item record changes the parent order record.

-   Order and order item validation rules
-   Order and order item Apex triggers and classes
-   Order and order item flows and processes

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Enable New Order Save Behavior affects all package types: unlocked, unmanaged, first-generation managed package (1GP), and second-generation managed package (2GP).

You can install packages that support old Order Save Behavior on subscriber orgs where New Order Save Behavior is enabled. However, you must verify that your package works with the new order save behavior.

After you verify that your package works with the new order save behavior and that all your packages associated with your Dev Hub org work with the new order save behavior, you can choose to enable the update in your Dev Hub org. We recommend that you support both the new and old order save behavior during your testing.

Test Unmanaged and First-Generation Managed Packages

-   From Setup, in the Quick Find box, enter Release Updates, and select **Release Updates**. Locate the Enable New Order Save Behavior tile, and select **Enable Test Run**.
-   Test the impact of the new behavior when an order or order item is edited. Review any custom application logic such as validation rules, Apex triggers and classes, workflow rules, flows, and processes.
-   To show that your package is compatible with both new and old order save conditions, from Setup, in the Quick Find box, enter Package. Select the package that you tested and select **Upload**.
-   Locate the Package Requirements section and disable **New Order Save Behavior**.

    When this setting is disabled and the release update is enabled, subscriber orgs using either the new or old order save behavior can install your package.


Test Unlocked and Second-Generation Managed Packages

-   After creating a scratch org, enable the Release Update in it. From Setup, in the Quick Find box, enter Release Updates, and then select **Release Updates**. Locate the Enable New Order Save Behavior tile, and select **Enable Test Run**.
-   Test the impact of the new behavior when an order or order item is edited. Review any custom application logic such as validation rules, Apex triggers and classes, workflow rules, flows, and processes.

When you’re ready to create a package version, specify the order save behavior in the definition file.

| To Specify | Set Features in Scratch Org Definition File To |
| --- | --- |
| Old Order Save Behavior | {    "features": [],   "settings": {     "orderSettings": {       "enableOrders": true     }   } } |
| New Order Save Behavior | {   "features": ["OrderSaveLogicEnabled"],   "settings": {     "orderSettings": {       "enableOrders": true     }   } } |
| New and Old Order Save Behavior | {    "features": ["OrderSaveBehaviorBoth"],   "settings": {     "orderSettings": {       "enableOrders": true     }   } } |

## Code Examples

```
{
   "features": [],
  "settings": {
    "orderSettings": {
      "enableOrders": true
    }
  }
}
```

```
{
  "features": ["OrderSaveLogicEnabled"],
  "settings": {
    "orderSettings": {
      "enableOrders": true
    }
  }
}
```

```
{
   "features": ["OrderSaveBehaviorBoth"],
  "settings": {
    "orderSettings": {
      "enableOrders": true
    }
  }
}
```
