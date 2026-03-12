---
title: "Configure Payment Gateways in Salesforce"
domain: blng-dev
topic: configure-payment-gateways-in-salesforce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.896Z
estimatedTokens: 518
keywords: [Configure, Payment, Gateways, Salesforce, Install, gateway, package, entities, communicate, provider]
---

# Configure Payment Gateways in Salesforce

> Install a payment gateway package and configure your payment gateway entities to
  communicate with your payment gateway provider.

# Configure Payment Gateways in Salesforce

Install a payment gateway package and configure your payment gateway entities to communicate with your payment gateway provider.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

If a custom payment gateway doesn’t send the paymentGatewayToken, Salesforce Billing payment gateway API submits an extra tokenization call, which creates a new payment method.

1.  Install your payment gateway package.

    Salesforce Billing provides payment gateway packages for AuthorizeDotNet, Cybersource, Payeezy, and PayFlowPro. You can also use packages for other gateways.

2.  In Salesforce Billing, create a payment gateway record and set its Gateway Type field to your payment gateway. If your gateway name doesn’t appear as a Gateway Type value, add it to the picklist.
3.  Review the merchant credential fields on your payment gateway and enter the necessary merchant information.

    Your payment gateway record requires merchant credential fields. It sends the values of these fields as API to the payment gateway. Each payment gateway package installs different fields based on the needs of the payment gateway provider. For more information, review [Merchant Credential Fields](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_merchant_credential_fields.htm "Each payment gateway package installs merchant credential fields on the Salesforce Billing payment gateway object. You can use these fields to provide merchant information when making a transaction request to the payment gateway.").

4.  Check the payment gateway’s Active field.
5.  Check the payment gateway’s Default field.

    The payment gateway’s Default checkbox indicates that Salesforce Billing uses the gateway’s merchant credentials if an ACH or credit card payment transaction doesn’t provide stored credentials. Otherwise, the transaction fails. A payment gateway’s Active and Default fields must be selected for the gateway entity to pass its information to the payment gateway provider.

## Related Topics

- Merchant Credential Fields (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_merchant_credential_fields.htm)
