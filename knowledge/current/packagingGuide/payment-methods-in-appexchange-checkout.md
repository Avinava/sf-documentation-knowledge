---
title: "Payment Methods in AppExchange Checkout"
domain: packagingGuide
topic: payment-methods-in-appexchange-checkout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.342Z
estimatedTokens: 437
keywords: [Payment, AppExchange, Checkout, supports, two, credit, cards, bank, account, transfers, accept, listing]
---

# Payment Methods in AppExchange Checkout

> Checkout supports two payment methods: credit cards and bank account transfers. You can
  accept one or both payment methods on your listing.

# Payment Methods in AppExchange Checkout

Checkout supports two payment methods: credit cards and bank account transfers. You can accept one or both payment methods on your listing.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

Starting January 31, 2025, the Single Euro Payment Area (SEPA) payment method has been disabled for companies based in the European Union. Existing SEPA transactions remain active. For new transactions, you can accept only the credit card method. For more information, see [Salesforce Help](https://help.salesforce.com/s/issue?id=a028c000010EhrLAAS&title=sepa-bank-transfers-arent-available-in-appexchange-checkout).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Your business address in Stripe determines the type of bank transfers that you can accept. To accept Automated Clearing House (ACH) payments, your company must be based in the United States. If your company is based in the European Union, you can receive payment only through the credit card method.

| Payment Method | Customers pay with: | Notes |
| --- | --- | --- |
| Credit card | Visa, MasterCard, American Express, JCB, Discover, or Diners Club credit cards. | Payments are processed immediately. |
| US bank transfer | Checking, savings, or money market accounts from banks based in the United States.Payments are processed using the ACH network. | Payments can take up to 5 days to process.Your pricing plan in Stripe must be in US dollars (USD).Customers must pay with a business bank account. Checkout doesn’t support ACH payments from personal bank accounts.Customers must have a US billing address. |
