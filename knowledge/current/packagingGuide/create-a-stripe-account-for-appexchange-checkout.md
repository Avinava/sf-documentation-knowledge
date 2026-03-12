---
title: "Create a Stripe Account for AppExchange Checkout"
domain: packagingGuide
topic: create-a-stripe-account-for-appexchange-checkout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.397Z
estimatedTokens: 625
keywords: [Stripe, Account, AppExchange, Checkout, listings, payment, partner]
---

# Create a Stripe Account for AppExchange Checkout

> To use Checkout with your AppExchange listings, you must create an account with our
  payment partner, Stripe.

# Create a Stripe Account for AppExchange Checkout

To use Checkout with your AppExchange listings, you must create an account with our payment partner, Stripe.


| User Permissions Needed |
| --- |
| To create or update AppExchange listings: | Manage Listings |

Before you create your Stripe account, have this information available.

-   A short description of your business, such as the products that you sell
-   Basic information about your business, such as its physical address
-   Login information for an external identity provider, such as Google, Facebook, or LinkedIn
-   Account and routing numbers for the bank account where you want to receive payments

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

For partners based in the United States, you must submit a W-9 form to Salesforce before you can use Checkout. For more information, see [Submitting Your W-9 Form to Salesforce for AppExchange Checkout Compliance](https://help.salesforce.com/s/articleView?language=en_US&id=005232836&type=1).

After you gather this information, you’re ready to go.

1.  Log in to the [Salesforce Partner Community](https://partners.salesforce.com/).
2.  Click **Publishing** to go to the AppExchange Partner Console.
3.  Click **Listings**.
4.  Create a listing or edit an existing one.
5.  Click **Set Pricing** | **Price Your Solution**.
6.  For pricing model, select **Paid**.
7.  For payment method, select **AppExchange Checkout**.
8.  Select when to collect payment details from the customer, before or after they install your solution.
9.  Click **Connect to Stripe**. If you don’t see this option, it’s likely that your Stripe account is already connected, and you can skip to the last step.

    The Stripe website opens in a new browser tab.

10.  To create your Stripe account, follow the prompts on the Stripe website.

     When you complete this step, the Stripe tab closes and you’re returned to the Partner Console.

11.  Verify that you were successful. If you see “Connected to Stripe as” in the Solution Pricing section, you’re all set. You have a Stripe account and it’s connected to the listing.

     ![A view of the solution pricing table showing the user is connected to Stripe](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_connected_to_stripe_as.png&folder=packagingGuide)


After you create the account, you can manage it on the [Stripe website](https://stripe.com/ "HTML (New Window)").
