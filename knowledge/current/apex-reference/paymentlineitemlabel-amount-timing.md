---
title: "PaymentLineItem(label, amount, timing)"
domain: apex-reference
topic: paymentlineitemlabel-amount-timing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.155Z
keywords: [PaymentLineItem, label, amount, timing, Creates, new, instance, RichMessaging.PaymentLineItem, class., Signature, Parameters]
---

# PaymentLineItem(label, amount, timing)

> Creates a new instance of the RichMessaging.PaymentLineItem class.

### PaymentLineItem(label, amount, timing)

Creates a new instance of the RichMessaging.PaymentLineItem class.

#### Signature

public PaymentLineItem(String label, Double amount, RichMessaging.AbstractTiming timing)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label of the payment line item.

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the payment line item.

timing

Type: [RichMessaging.AbstractTiming](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm#apex_class_RichMessaging_AbstractTiming "Parent class for other RichMessaging timing classes.")

The timing of the payment line item.