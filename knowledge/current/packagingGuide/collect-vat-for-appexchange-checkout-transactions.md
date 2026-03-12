---
title: "Collect VAT for AppExchange Checkout Transactions"
domain: packagingGuide
topic: collect-vat-for-appexchange-checkout-transactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.296Z
estimatedTokens: 483
keywords: [Collect, VAT, AppExchange, Checkout, Transactions, country’s, tax, authority, requires, value-added, include, enable, option, Partner, Console]
---

# Collect VAT for AppExchange Checkout Transactions

> If your country’s tax authority requires you to collect value-added tax (VAT), you can
        include VAT in Checkout transactions. After you enable this option in the AppExchange
        Partner Console, VAT is applied to invoices in Stripe. You’re responsible for VAT
        registration, maintaining required data, and distributing the taxes that you
        collect.

# Collect VAT for AppExchange Checkout Transactions

If your country’s tax authority requires you to collect value-added tax (VAT), you can include VAT in Checkout transactions. After you enable this option in the AppExchange Partner Console, VAT is applied to invoices in Stripe. You’re responsible for VAT registration, maintaining required data, and distributing the taxes that you collect.


| User Permissions Needed |
| --- |
| To create or update AppExchange listings: | Manage Listings |

1.  Log in to the [Salesforce Partner Community](https://partners.salesforce.com/ "HTML (New Window)").
2.  Click **Publishing** to go to the AppExchange Partner Console.
3.  Click **Listings**.
4.  Create a listing, or edit an existing one.
5.  Click **Set Pricing** | **Price Your Solution**.
6.  For pricing model, select **Paid**.
7.  For payment management, select **AppExchange Checkout**.

    ![A view of the Payment Management section during Checkout configuration](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_payment_management.png&folder=packagingGuide)

8.  Select when to collect payment details from the customer, before or after they install your solution.
9.  Select a country if one isn’t already selected.

    ![A view of the Tax Requirements section during Checkout configuration](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_vat_tax_requirements.png&folder=packagingGuide)

10.  Select the option to collect VAT for AppExchange transactions.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

     #### Note

     VAT isn’t supported for one-time purchases.

11.  Select a country and enter a VAT number for all European Union (EU) countries where you collect VAT.
12.  Save your changes.

If you manage Checkout data with the Checkout Management App, you can use the app to view information for VAT reporting.
