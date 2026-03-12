---
title: "B2BCheckoutController Class"
domain: apex-reference
topic: b2bcheckoutcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.621Z
estimatedTokens: 482
keywords: [B2BCheckoutController, Communicate, simple, checkout, Apex, work, data, B2B, Commerce, Usage, licenseCompliance, cartId, orderId]
---

# B2BCheckoutController Class

> Communicate with simple checkout Apex methods to work with data
      related to B2B Commerce checkout.

# B2BCheckoutController Class

Communicate with simple checkout Apex methods to work with data related to B2B Commerce checkout.

## Namespace

[sfdc\_checkout](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_checkout.htm "The Sfdc_Checkout namespace provides an interface and classes for B2B Commerce apps in Salesforce.")

## Usage

You must specify the sfdc\_checkout namespace when creating an instance of this class.

-   **[B2BCheckoutController Methods](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_B2BCheckoutController.htm#apex_sfdc_checkout_B2BCheckoutController_methods)**


## B2BCheckoutController Methods

The following are methods for B2BCheckoutController.

-   **[licenseCompliance(cartId, orderId)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_B2BCheckoutController.htm#apex_sfdc_checkout_B2BCheckoutController_licenseCompliance)**
    If you implement your own cart-to-order process without invoking the Cart to Order flow core action, you must invoke this method to correctly track your orders for GMV (Gross Merchandise Value) recognition.

### licenseCompliance(cartId, orderId)

If you implement your own cart-to-order process without invoking the Cart to Order flow core action, you must invoke this method to correctly track your orders for GMV (Gross Merchandise Value) recognition.

#### Signature

public static void licenseCompliance(String cartId, String orderId)

#### Parameters

cartId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The cartId of a web cart from which an order is created.

orderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The orderId of the order you created from the cart.

#### Return Value

Type: Void

## Related Topics

- sfdc_checkout (atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_checkout.htm)
- B2BCheckoutController Methods (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_B2BCheckoutController.htm)
- licenseCompliance(cartId, orderId) (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_B2BCheckoutController.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
