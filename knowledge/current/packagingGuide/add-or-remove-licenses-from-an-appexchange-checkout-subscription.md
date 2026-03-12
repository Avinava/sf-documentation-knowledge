---
title: "Add or Remove Licenses from an AppExchange Checkout Subscription"
domain: packagingGuide
topic: add-or-remove-licenses-from-an-appexchange-checkout-subscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.402Z
estimatedTokens: 468
keywords: [Add, Remove, Licenses, AppExchange, Checkout, Subscription, customers, their, subscriptions, customer, adds, current, billing, period, additional]
---

# Add or Remove Licenses from an AppExchange Checkout Subscription

> Your customers can add or remove licenses from their Checkout subscriptions on
  AppExchange. If a customer adds licenses during the current billing period, the additional
  licenses are available immediately. Checkout charges the customer a prorated amount for their next
  billing period. If a customer removes licenses, the removal takes effect at the start of their
  next billing period. Checkout charges the customer for the reduced license count when the removal
  takes effect. Share these self-service steps for updating their subscription on
  AppExchange.

# Add or Remove Licenses from an AppExchange Checkout Subscription

Your customers can add or remove licenses from their Checkout subscriptions on AppExchange. If a customer adds licenses during the current billing period, the additional licenses are available immediately. Checkout charges the customer a prorated amount for their next billing period. If a customer removes licenses, the removal takes effect at the start of their next billing period. Checkout charges the customer for the reduced license count when the removal takes effect. Share these self-service steps for updating their subscription on AppExchange.


| User Permissions Needed |
| --- |
| To manage AppExchange subscriptions: | Manage Billing |

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=packagingGuide)

#### Warning

Don’t use the Stripe website to change the number of seats included in your AppExchange customers’ licenses. The changes won’t sync to Checkout or the License Management App (LMA).

If the licenses are provisioned through Checkout, have the customer modify them using the instructions in this topic. If the licenses aren’t provisioned through Checkout, make license updates with the LMA using the instructions in [Modify a License Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/lma_edit_license.htm "HTML (New Window)").

1.  Log in to [AppExchange](https://appexchange.salesforce.com/).
2.  From the user profile menu, click **My Installs & Subscriptions**.
3.  Find the subscription that you want to update.
4.  From the dropdown list, select **Manage Subscription**.
5.  Click **Edit**.
6.  Go to Payment Details, and then edit the number of licenses associated with the subscription.
7.  Click **Review Changes**.
8.  Agree to the terms and conditions, and then click **Save**.
