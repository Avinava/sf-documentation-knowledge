---
title: "PaymentGatewayAsyncAdapter Interface"
domain: apex-reference
topic: paymentgatewayasyncadapter-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.742Z
keywords: [PaymentGatewayAsyncAdapter, Interface, Entry, point, processing, notifications, payment, gateways., processNotification, paymentGatewayNotificationContext, Signature, Parameters, Return, Value]
---

# PaymentGatewayAsyncAdapter Interface

> Entry point for processing notifications from payment
    gateways.

### processNotification(paymentGatewayNotificationContext)

Entry point for processing notifications from payment gateways.

#### Signature

global commercepayments.GatewayNotificationResponse processNotification(commercepayments.PaymentGatewayNotificationContext var1)

#### Parameters

paymentGatewayNotificationContext

Type: [PaymentGatewayNotificationContext](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayNotificationContext.htm#apex_class_commercepayments_PaymentGatewayNotificationContext "Wraps the information related to a gateway notification.")

The PaymentGatewayNotificationContext object wraps all the information related to a gateway notification.

#### Return Value

Type: [GatewayNotificationResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm#apex_class_commercepayments_GatewayNotificationResponse "When the payment gateway sends a notification to the payments platform, the platform responds with a GatewayNotificationResponse indicating whether the platform succeeded or failed at receiving the notification.")

When the payment gateway sends a notification to the payments platform, the platform responds with a GatewayNotificationResponse indicating whether the platform succeeded or failed at receiving the notification.