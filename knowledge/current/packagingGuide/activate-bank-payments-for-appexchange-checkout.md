---
title: "Activate Bank Payments for AppExchange Checkout"
domain: packagingGuide
topic: activate-bank-payments-for-appexchange-checkout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.285Z
estimatedTokens: 634
keywords: [Activate, Bank, Payments, AppExchange, Checkout, let, customers, pay, solution, transfer, payment, Stripe, reviews, approves, you’re]
---

# Activate Bank Payments for AppExchange Checkout

> To let customers pay for your solution with a bank transfer, request this payment method
  in Stripe. After Stripe reviews and approves your request, you’re eligible to receive bank
  payments. Depending on your location, you can accept payments through
  credit cards or
  the Automated Clearing House (ACH)
  network.

# Activate Bank Payments for AppExchange Checkout

To let customers pay for your solution with a bank transfer, request this payment method in Stripe. After Stripe reviews and approves your request, you’re eligible to receive bank payments. Depending on your location, you can accept payments through credit cards or the Automated Clearing House (ACH) network.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

Starting January 31, 2025, the Single Euro Payment Area (SEPA) payment method has been disabled for companies based in the European Union. Existing SEPA transactions remain active. For new transactions, you can accept only the credit card method. For more information, see [Salesforce Help](https://help.salesforce.com/s/issue?id=a028c000010EhrLAAS&title=sepa-bank-transfers-arent-available-in-appexchange-checkout).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Your business address in Stripe determines the type of bank transfers that you can accept. To accept ACH payments, your company must be based in the United States. If your company is based in the European Union, you can receive the payment through the credit card method.

1.  Go to the [Stripe](https://stripe.com/) website.
2.  Log in to your Stripe account.
3.  Click **Settings**.
4.  Under Payments and Payouts, click **Payment methods**.
5.  Request Cards (1) or ACH Credit Transfer (2) for your account.

    ![A view of the Payment Settings page in the Stripe dashboard with callouts around ACH and SEPA payment methods.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fstripe_activate_bank.png&folder=packagingGuide)

    Your activation request is sent to Stripe for processing. You receive an email when your request is approved.

6.  If you requested ACH Credit Transfer, verify that the activation succeeded.
    1.  Go to the [Stripe](https://stripe.com/) website again.
    2.  Log in to your Stripe account.
    3.  Go to Stripe’s [ACH Guide](https://stripe.com/docs/ach).
    4.  Click **Enable ACH**. If you don’t see an option to enable ACH, ACH Credit Transfer is already active for your account.

#### See Also

-   [Payment Methods in AppExchange Checkout](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_payment_methods.htm "Checkout supports two payment methods: credit cards and bank account transfers. You can accept one or both payment methods on your listing.")

## Related Topics

- Payment Methods in AppExchange Checkout (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_payment_methods.htm)
