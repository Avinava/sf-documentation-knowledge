---
title: "B2BCheckoutController Class"
domain: apex-reference
topic: b2bcheckoutcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.041Z
keywords: [B2BCheckoutController, Class, implement, own, cart-to-order, process, without, invoking, Cart, Order, flow, core, action, must, invoke, method, correctly, track, orders, GMV]
---

# B2BCheckoutController Class

> If you implement your own cart-to-order process without invoking the
      Cart to Order flow core action, you must invoke this method to correctly track your orders for
      GMV (Gross Merchandise Value) recognition.

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