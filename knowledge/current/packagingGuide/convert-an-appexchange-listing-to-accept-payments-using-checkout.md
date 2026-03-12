---
title: "Convert an AppExchange Listing to Accept Payments Using Checkout"
domain: packagingGuide
topic: convert-an-appexchange-listing-to-accept-payments-using-checkout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.303Z
estimatedTokens: 886
keywords: [Convert, AppExchange, Listing, Accept, Payments, Checkout, doesn’t, Partner, Console, enable, republish]
---

# Convert an AppExchange Listing to Accept Payments Using Checkout

> If you have a listing that doesn’t use AppExchange Checkout, you can convert it to
  accept payments using Checkout. In the AppExchange Partner Console, make your listing private,
  enable Checkout, then republish the listing.

# Convert an AppExchange Listing to Accept Payments Using Checkout

If you have a listing that doesn’t use AppExchange Checkout, you can convert it to accept payments using Checkout. In the AppExchange Partner Console, make your listing private, enable Checkout, then republish the listing.


| User Permissions Needed |
| --- |
| To create or update AppExchange listings: | Manage Listings |

1.  Go to the Partner Console.

    See [Access the AppExchange Partner Console](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm "The Partner Console is the complete business management site for ISV partners and consultants with AppExchange listings. It’s where partners create listings, manage security reviews, and monitor solution performance metrics.").

2.  If your listing is publicly available, temporarily make it private.

    See [Make Your AppExchange Listing Private](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_make_listing_private.htm "If you no longer want your AppExchange listing to be publicly available, make it private. After you make a listing private, customers can’t discover it by browsing or searching AppExchange. Customers who have the listing URL can still access private listings directly.").

3.  Enable Checkout for the listing.
    1.  Connect Stripe to your listing.

        See [Connect a Stripe Account to Your AppExchange Listing](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_stripe_connect.htm "To use Checkout with your AppExchange listing, connect your Stripe account to the listing in the AppExchange Partner Console.").

    2.  Set up pricing plans.

        See [Add Pricing Plans to Your AppExchange Checkout Listing](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_add_product.htm "To offer a subscription to your solution with AppExchange Checkout, create a pricing plan in the AppExchange Partner Console. Then sync the plan to Stripe. A pricing plan sets the solution’s cost, currency, and billing frequency.").

    3.  Optionally, enable payment by bank transfer.

        See [Activate Bank Payments for AppExchange Checkout](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_activate_transfers.htm "To let customers pay for your solution with a bank transfer, request this payment method in Stripe. After Stripe reviews and approves your request, you’re eligible to receive bank payments. Depending on your location, you can accept payments through credit cards or the Automated Clearing House (ACH) network.").

4.  Submit your updated listing for approval.

    See [Submit Your AppExchange Listing for Approval](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_listing_approvals_steps.htm "Before you can publish your listing, we must make sure that it complies with our partner brand guidelines and partner program policies. In the AppExchange Partner Console, provide some basic information, set up your solution pricing, and then submit your listing for approval.").

5.  After your listing is approved, edit your listing in the Partner Console.
6.  Click **Listing Status**.
7.  Publish your updated listing to AppExchange.

#### See Also

-   [Sell on AppExchange with Checkout](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sell.htm "Accept credit card payments and bank transfers directly from your listing with AppExchange Checkout. Transform your sales and revenue data into insights and actions with the Checkout Management App.")

## Related Topics

- Access the AppExchange Partner Console (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm)
- Make Your AppExchange Listing Private (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_make_listing_private.htm)
- Connect a Stripe Account to Your AppExchange Listing (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_stripe_connect.htm)
- Add Pricing Plans to Your AppExchange Checkout Listing (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_add_product.htm)
- Activate Bank Payments for AppExchange Checkout (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_activate_transfers.htm)
- Submit Your AppExchange Listing for Approval (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_listing_approvals_steps.htm)
- Sell on AppExchange with Checkout (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sell.htm)
