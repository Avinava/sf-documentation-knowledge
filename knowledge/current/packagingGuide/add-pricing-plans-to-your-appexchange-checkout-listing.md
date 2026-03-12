---
title: "Add Pricing Plans to Your AppExchange Checkout Listing"
domain: packagingGuide
topic: add-pricing-plans-to-your-appexchange-checkout-listing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.292Z
estimatedTokens: 1044
keywords: [Add, Pricing, Plans, AppExchange, Checkout, Listing, offer, subscription, solution, plan, Partner, Console, sync, Stripe, solution’s]
---

# Add Pricing Plans to Your AppExchange Checkout Listing

> To offer a subscription to your solution with AppExchange Checkout, create a pricing
    plan in the AppExchange Partner Console. Then sync the plan to Stripe. A pricing plan sets the
    solution’s cost, currency, and billing frequency.

# Add Pricing Plans to Your AppExchange Checkout Listing

To offer a subscription to your solution with AppExchange Checkout, create a pricing plan in the AppExchange Partner Console. Then sync the plan to Stripe. A pricing plan sets the solution’s cost, currency, and billing frequency.


| User Permissions Needed |
| --- |
| To create or update AppExchange listings: | Manage Listings |

Before you create pricing plans, you must already have a Stripe account, and the account must be connected to the AppExchange Partner Console. Learn how in [Connect a Stripe Account to Your AppExchange Listing](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_stripe_connect.htm "To use Checkout with your AppExchange listing, connect your Stripe account to the listing in the AppExchange Partner Console.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

Although it’s possible to edit the plans on the Stripe website, make edits in the Partner Console only. Changes made on the Stripe website aren’t synced back to the Partner Console and don’t appear on your listing.

You can create multiple pricing plans for your listing. For example, you can create one plan that uses monthly billing and another plan that uses annual billing.

1.  Go to the Partner Console.

    See [Access the AppExchange Partner Console](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm "The Partner Console is the complete business management site for ISV partners and consultants with AppExchange listings. It’s where partners create listings, manage security reviews, and monitor solution performance metrics.").

2.  Click **Listings**.
3.  Create a listing, or edit an existing one. If you’re creating a listing, complete all the required fields on the Fill in the Basics step.
4.  Click **Set Pricing**.
5.  For pricing model, select **Paid**.
6.  For payment management, select **AppExchange Checkout**.

    ![A view of the Payment Management section during Checkout configuration](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_payment_management.png&folder=packagingGuide)

7.  Select when to collect payment information from your customers, before or after they install your solution.

    ![A view of the Payment Information Collection section during Checkout configuration.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_payment_info_collection.png&folder=packagingGuide)

8.  Select a country if one isn’t previously selected.
9.  Provide any required tax information.
10.  Click **Add Pricing Plan**.
11.  Fill in the required details.

     ![A view of the Solution Pricing table during Checkout configuration.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_solution_pricing_table.png&folder=packagingGuide)

     | Pricing Plan | Details |
     | --- | --- |
     | Plan Name | Give your plan a descriptive name. We recommend including the billing frequency, such as Annual, in the name. |
     | Price | Enter the cost for this plan. |
     | Currency | Select the currency that customers can use to pay for your solution. Select US dollars (USD) so customers can pay with US bank accounts. Select euros (EUR) so customers can pay with European bank accounts. |
     | Units | Select whether to apply the price per user or per company (org-wide). AppExchange Checkout doesn't support custom pricing units. |
     | Frequency | Select a monthly, yearly, or one-time billing frequency. |
     | Trial Length | Optionally, offer customers a trial of your solution for a specific time period, such as 30 days. |

12.  Choose to show the plan names on your listing as they appear in the solution pricing table, or as Plan 1, Plan 2, and so on. If there’s only one plan, it appears on your listing as Default Plan.
13.  Click **Save & Sync to Stripe**.
14.  Click **Save & Sync**.

     All unsaved changes that you made to this listing are saved, and your pricing plans are synced to the connected Stripe account. Synced pricing plans are immediately available on published listings.

## Related Topics

- Connect a Stripe Account to Your AppExchange Listing (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_stripe_connect.htm)
- Access the AppExchange Partner Console (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_launch_partner_console.htm)
