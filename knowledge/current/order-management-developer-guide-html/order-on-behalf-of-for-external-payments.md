---
title: "Order on Behalf Of for External Payments"
domain: order-management-developer-guide-html
topic: order-on-behalf-of-for-external-payments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.145Z
estimatedTokens: 330
keywords: [Order, Behalf, External, Payments, support, payment, flows, non-tokenized, configure, Mode, flow, bypasses, tokenized, calls, Authorize]
---

# Order on Behalf Of for External Payments

> To support payment flows with non-tokenized payments, configure the External Payment
    Mode flow. This flow bypasses the tokenized payment flow and calls Payment Authorize
    directly.

# Order on Behalf Of for External Payments

To support payment flows with non-tokenized payments, configure the External Payment Mode flow. This flow bypasses the tokenized payment flow and calls Payment Authorize directly.

Before creating a flow for external payments, make sure Order on Behalf Of is properly configured. See [Configure Order on Behalf Of](https://help.salesforce.com/s/articleView?id=commerce.om_order_on_behalf_of_overview_oobo.htm&type=5&language=en_US).

To start creating the flow for external payments, download the [External Payments Package](https://sfdc.co/ExternalPaymentOOBO).

Set the flow global variable **externalPaymentMode** to true.

Add a screen to the Order on Behalf Of UI flow to manage payments. We provide one you can use, or you can create your own page. If you're creating your own screen, ensure that it lets your representatives capture payment details and billing addresses.

After you've added this screen to your flow, call the **PaymentAuthorize** invocable from the outputs of that screen. Construct the input for the PaymentAuthorize in the flow.

Finally, update the billing details in the webcart using the flow Update Records action. Input BillingDetails from the new payment screen and input the PaymentMethod and PaymentGroup from the PaymentAuthorize Invocable.
