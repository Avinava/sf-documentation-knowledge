---
title: "Connect a Stripe Account to Your AppExchange Listing"
domain: packagingGuide
topic: connect-a-stripe-account-to-your-appexchange-listing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.391Z
estimatedTokens: 717
keywords: [Connect, Stripe, Account, AppExchange, Listing, Checkout, Partner, Console]
---

# Connect a Stripe Account to Your AppExchange Listing

> To use Checkout with your AppExchange listing, connect your Stripe account to the
  listing in the AppExchange Partner Console.

# Connect a Stripe Account to Your AppExchange Listing

To use Checkout with your AppExchange listing, connect your Stripe account to the listing in the AppExchange Partner Console.

If you don’t have a Stripe account, create one using the instructions in [Create a Stripe Account for AppExchange Checkout](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_stripe_create.htm "To use Checkout with your AppExchange listings, you must create an account with our payment partner, Stripe.").


| User Permissions Needed |
| --- |
| To create or update AppExchange listings: | Manage Listings |

1.  Go to the Partner Console.

    See [Access the AppExchange Partner Console](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm "The Partner Console is the complete business management site for ISV partners and consultants with AppExchange listings. It’s where partners create listings, manage security reviews, and monitor solution performance metrics.").

2.  Click **Listings**.
3.  Create a listing or edit an existing one.
4.  Click **Set Pricing** | **Price Your Solution**.
5.  For the pricing model, select **Paid**.
6.  For the payment method, select **AppExchange Checkout**.
7.  Select when to collect payment details from the customer, before or after they install your solution.
8.  Click **Connect to Stripe**. If you don’t see this option, it’s likely that your Stripe account is already connected, and you can skip to the last step.

    ![A view of the solution pricing table showing the option to connect to Stripe](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_connect_to_stripe.png&folder=packagingGuide)

    The Stripe website opens in a new browser tab.

9.  To connect your Stripe account to your listing, follow the prompts on the Stripe website to log in to your account. If you don’t have a Stripe account, follow the prompts to create one.

    When you complete this step, the Stripe tab closes and you’re returned to the Partner Console.

10.  Verify that your listing is connected to Stripe. If you see “Connected to Stripe as” in the Solution Pricing section, you’re all set.

     ![A view of the solution pricing table showing the user is connected to Stripe](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_connected_to_stripe_as.png&folder=packagingGuide)


After you connect your Stripe account, you can add pricing plans to your listing.

#### See Also

-   [Add Pricing Plans to Your AppExchange Checkout Listing](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_add_product.htm "To offer a subscription to your solution with AppExchange Checkout, create a pricing plan in the AppExchange Partner Console. Then sync the plan to Stripe. A pricing plan sets the solution’s cost, currency, and billing frequency.")

## Related Topics

- Create a Stripe Account for AppExchange Checkout (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_stripe_create.htm)
- Access the AppExchange Partner Console (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm)
- Add Pricing Plans to Your AppExchange Checkout Listing (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_add_product.htm)
