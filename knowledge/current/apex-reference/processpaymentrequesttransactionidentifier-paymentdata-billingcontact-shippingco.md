---
title: "ProcessPaymentRequest(transactionIdentifier, paymentData, billingContact, shippingContact, paymentMethod, shippingMethod, contextRecordId)"
domain: apex-reference
topic: processpaymentrequesttransactionidentifier-paymentdata-billingcontact-shippingco
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.174Z
keywords: [ProcessPaymentRequest, transactionIdentifier, paymentData, billingContact, shippingContact, paymentMethod, shippingMethod, contextRecordId, Creates, new, instance, RichMessaging.ProcessPaymentRequest, class., Signature, Parameters]
---

# ProcessPaymentRequest(transactionIdentifier, paymentData, billingContact, shippingContact, paymentMethod, shippingMethod, contextRecordId)

> Creates a new instance of the RichMessaging.ProcessPaymentRequest class.

### ProcessPaymentRequest(transactionIdentifier, paymentData, billingContact, shippingContact, paymentMethod, shippingMethod, contextRecordId)

Creates a new instance of the RichMessaging.ProcessPaymentRequest class.

#### Signature

public ProcessPaymentRequest(String transactionIdentifier, String paymentData, RichMessaging.AddressableContact billingContact, RichMessaging.AddressableContact shippingContact, RichMessaging.PaymentMethod paymentMethod, RichMessaging.ShippingMethod shippingMethod, String contextRecordId)

#### Parameters

transactionIdentifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The transaction identifier associated with the payment request.

paymentData

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The encrypted payment data for the payment request.

billingContact

Type: [RichMessaging.AddressableContact](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AddressableContact.htm#apex_class_RichMessaging_AddressableContact "Represents an addressable contact.")

The billing contact information for the payment request.

shippingContact

Type: [RichMessaging.AddressableContact](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AddressableContact.htm#apex_class_RichMessaging_AddressableContact "Represents an addressable contact.")

The shipping contact information for the payment request.

paymentMethod

Type: [RichMessaging.PaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_class_RichMessaging_PaymentMethod "Represents a payment method.")

The payment method for the payment request.

shippingMethod

Type: [RichMessaging.ShippingMethod](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_class_RichMessaging_ShippingMethod "Represents a shipping method listed in payment requests sent in enhanced Messaging channels.")

The shipping method for the payment request.

contextRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The context record ID associated with the payment request.