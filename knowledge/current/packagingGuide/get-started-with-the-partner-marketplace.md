---
title: "Get Started with the Partner Marketplace"
domain: packagingGuide
topic: get-started-with-the-partner-marketplace
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:38:47.257Z
estimatedTokens: 4329
keywords: [Started, Partner, Marketplace, Now, understand, how, works, it’s, time, cover, main, steps, creating, account, receiving, payouts, app, Business, org, PBO, submit, interest, Salesforce, team, reviews, application, contacts, Onboard, Locate, Connect, Stripe, Step, Manage, Products, Map, Package, Licenses, Send, Offers, Initial, Offer, Add-On, Add, Review, Statuses, View, Track, Orders, Order]
---

> Now that you understand what the Partner Marketplace is and how it works, it’s time to
    learn how to use it. We cover the main steps, from creating your account to receiving payouts.
    To see the Partner Marketplace app in your Partner Business org (PBO), submit your interest to
    Salesforce. Our partner team reviews your application and contacts you to get
    started.

# Get Started with the Partner Marketplace

Now that you understand what the Partner Marketplace is and how it works, it’s time to learn how to use it. We cover the main steps, from creating your account to receiving payouts. To see the Partner Marketplace app in your Partner Business org (PBO), submit your interest to Salesforce. Our partner team reviews your application and contacts you to get started.

| User Permissions Needed |
| --- |
| The view and configure the Partner Marketplace: | View Transactable Marketplace |

-   **[Onboard to the Partner Marketplace](atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm#partner_marketplace_onboard)**
    Before you can see the Partner Marketplace in your PBO, submit your interest and receive approval.
-   **[Locate the Partner Marketplace App](atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm#partner_marketplace_enable)**
    To start, access the Partner Marketplace app in your Partner Business org (PBO). The app contains the tools that you must configure your products, create offers, and view invoices and payouts.
-   **[Create and Connect Your Stripe Account](atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm#partner_marketplace_stripe)**
    Salesforce uses Stripe to facilitate payment processing within the Partner Marketplace. The marketplace requires a Stripe account to use with the Partner Marketplace. Stripe handles invoicing, payment processing, and automated payouts for transactions that occur within the Marketplace.
-   **[Create and Connect Products](atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm#partner_marketplace_products)**
    Products form the foundation of your Marketplace configuration. Every offer and order references a product created in your Partner Business org (PBO). Create products and map them to managed package licenses for Partner Applications approved for distribution through the Partner Marketplace. To create products, make sure that the corresponding Partner Application is approved for distribution via the Partner Marketplace and listed as a product in your Partner Product Catalog.
-   **[Create and Send Offers](atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm#partner_marketplace_offers)**
    After you create products and map them to licenses in the Partner Marketplace, you can begin creating offers to send to customers. An offer represents the terms that a customer reviews and accepts within their Salesforce org. When a customer accepts an offer, Salesforce automatically generates an order and issues an invoice on your behalf. There are two offer types, initial and add-on. Initial offers represent a new offer and contract terms, whereas add-ons represent an addition to an existing offer.
-   **[View and Track Orders](atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm#partner_marketplace_orders)**
    To view your orders, go to the Orders tab. From there you can see a list of your orders, including the provisioning status, timeline, and order subtotal. You can select an Order ID to open the record and see a comprehensive view of the order details. From the Related tab, you can find a list of the products included in the order and order transactions.

## Onboard to the Partner Marketplace

Before you can see the Partner Marketplace in your PBO, submit your interest and receive approval.

1.  Confirm your eligibility: Check to make sure that you meet the criteria listed in Prerequisites and you've reviewed the [Prerequisites and Considerations](atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_considerations_prerequisites.htm "There are a few prerequisites and considerations to review before setting up the Partner Marketplace.").
2.  Submit your interest: Contact your Partner Account Manager (PAM) or contact Salesforce Customer Support.
3.  Wait for confirmation: Our team will review your submission and follow up with next steps and onboarding details.

## Locate the Partner Marketplace App

To start, access the Partner Marketplace app in your Partner Business org (PBO). The app contains the tools that you must configure your products, create offers, and view invoices and payouts.

From the App Launcher, enter Partner Marketplace in the search box and select **Partner Marketplace**.

## Create and Connect Your Stripe Account

Salesforce uses Stripe to facilitate payment processing within the Partner Marketplace. The marketplace requires a Stripe account to use with the Partner Marketplace. Stripe handles invoicing, payment processing, and automated payouts for transactions that occur within the Marketplace.

### Step 1: Create Your Stripe Account

1.  From Setup, in the Quick Find box, enter Partner Marketplace, and select it.
2.  From the Partner Marketplace, next to Create a Stripe Account, click **Create a Stripe Account** to go to Stripe.
3.  Stripe creates your automatically. You can see a success confirmation message at the top of the page.

To create a Stripe account for use with the Partner Marketplace, agree to Stripe’s terms of service.

### Step 2: Connect Your Stripe Account

1.  Next to Connect the Stripe Account, click **Manage Connection**.
2.  You’re automatically redirected to Stripe’s onboarding setup page. Enter your email address and phone number.
3.  Verify your information with the code provided.
4.  Fill in your business type details.
5.  Fill in your business tax information and essential details.
6.  Fill in your personal details.
7.  Select an institution where Stripe sends your payments.
8.  Enter your W-9 form information.
9.  Click **Submit**.
10.  Verify that your information is correct and then click **Agree and Submit**.

Your Stripe account for the Partner Marketplace is ready to go. If you have trouble or questions, check out the [Stripe documentation](https://docs.stripe.com/connect/custom/hosted-onboarding) for more information.

### Step 3: Manage Your Partner Marketplace Account

You can view and edit the company and personal information that you used to create your Stripe account from the Account Management tab. Account Management is where you find all your business details, including business type, address, phone number, public details, and account representation.

## Create and Connect Products

Products form the foundation of your Marketplace configuration. Every offer and order references a product created in your Partner Business org (PBO). Create products and map them to managed package licenses for Partner Applications approved for distribution through the Partner Marketplace. To create products, make sure that the corresponding Partner Application is approved for distribution via the Partner Marketplace and listed as a product in your Partner Product Catalog.

### Create Products

Create a Partner Provision Product (PPP) record for each item you plan to sell through the Partner Marketplace.

1.  From the Partner Marketplace app, go to the Products tab.
2.  Click **New**.
3.  Enter a product name. We suggest a customer-friendly name, as this label is the product name that appears on the customer facing invoice.
4.  Select and associate a Partner Product Catalog. This list includes products that you currently have contracted with Salesforce for distribution via the Partner Marketplace.
5.  Save your product.

After saving, the Partner Provision Product becomes available for mapping package licenses.

### Map Package Licenses to Products

Each product maps to the corresponding license in your managed package. Mapping makes automated provisioning possible when a customer purchases your product.

To map a partner product license:

1.  From the Products tab, select a product.
2.  Go to the Related tab.
3.  In the Partner Product Licenses section, select **New**.
4.  The product you selected in step one auto-populates.
5.  Enter the Package License ID, for packaged licenses, or the Permission Set ID, for permission set licenses.
6.  Save your changes.

Map all partner product licenses that you want to include for provisioning in the managed package.

## Create and Send Offers

After you create products and map them to licenses in the Partner Marketplace, you can begin creating offers to send to customers. An offer represents the terms that a customer reviews and accepts within their Salesforce org. When a customer accepts an offer, Salesforce automatically generates an order and issues an invoice on your behalf. There are two offer types, initial and add-on. Initial offers represent a new offer and contract terms, whereas add-ons represent an addition to an existing offer.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Currently, the Partner Marketplace supports:

-   Net-new customers sales
-   12-month contract terms
-   NET30 payment terms
-   Upfront annual billing

-   **[Manage Offers](atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm#partner_marketplace_offers_manage)**
    The Partner Offers tab provides a place to view and manage all existing offers. The list view shows key details such as status, customer information, and contract terms. This view helps you monitor which offers are awaiting customer action and which were accepted and converted into orders.

### Create an Initial Offer

Use the Offers tab to create offers, configure pricing, and send offers to customers for review.

1.  From the Partner Marketplace app, go to the Offers tab.
2.  Click New.
3.  Search for and select your customer. The offer type fills automatically. If you have an existing offer out to the customer, the type is **Add-On**. If not, the type is **Initial**.
4.  Enter the offer details that you previously negotiated with the customer.
    1.  Select an opportunity, if applicable.
    2.  Select your Partner Term Set.
    3.  For Contract Term, enter 12. The Partner Marketplace only supports 12-month terms.
    4.  Enter the Service Start Date. This is the date that the service starts if the customer accepts the offer.
    5.  Enter the Valid Until date, which indicates the date the offer expires.
    6.  Enter your Partner PO Number and Customer PO Number, if applicable.
5.  Enter the terms and conditions for the offer.
6.  Enter the customer details.
7.  Enter the Customer Org ID where your licenses apply.
8.  Enter the Offer Recipient Email Address and a separate Billing Email Address, if applicable.

    Both email address fields receive an email with the sent offer. The Recipient Email Address field indicates the person either approving or rejecting the offer. Use the Billing Email Address to send a copy of the offer to the person responsible for accounting, typically in the finance department. This email also receives the Stripe invoice.

9.  Click **Save**. The offer remains in draft status until you add products and send it.

### Create an Add-On Offer

Use add-ons to sell more licenses or entirely new products to your existing Partner Marketplace customers, mid-contract. When you create an add-on offer, the system ties it to your customer's existing order and populates the end date to match the initial contract. The subtotal is calculated automatically and prorated based on the add-on start date and the initial order end date.

1.  From the Partner Marketplace app, go to the Partner Offers tab.
2.  Click New.
3.  Select your customer. When the system detects an existing order, the offer type defaults to Add-On and pulls information from the initial contract. You can edit:
    1.  Partner PO Number
    2.  Customer PO Number
    3.  Order Start Date
    4.  Valid Until Date
    5.  Opportunity
    6.  Email Recipient
4.  Click **Save**. The offer remains in draft status until you add products and send it.

### Add Products to an Offer

1.  From your offer, go to the Related tab.
2.  From Partner Offer Items, click **New**.
3.  Search for and select a Partner Provision Product (PPP).
4.  Enter a product quantity and unit price per month.
5.  Optionally, enter a Partner PO Number.
6.  Click **Save**.
7.  Repeat steps two through six to add more products.

#### Example

If you’re adding products to an add-on offer, you can increase the amount of an existing product or select a new item. If you add products, they are in addition to the products previously sold. For example, if the initial order included 10 licenses for Product A, and you add 15 licenses for Product A to an add-on order, your customer now has 25 licenses for Product A.

### Review and Send Offers

Before sending the offer to your customer, carefully review all details. After an offer is sent via the Partner Marketplace, it can’t be edited or withdrawn during the offer period. It’s important to validate everything up front, before you click send.

1.  Carefully review:
    1.  Product quantities and unit prices
    2.  The contract start date
    3.  Billing and offer recipient email addresses
    4.  Total offer amount
    5.  Included products
2.  Ask your customer:
    1.  To follow the steps outlined in Receive Private Offers from AgentExchange Partners.
    2.  To check that the email addresses entered for the Offer Recipient and Billing Email Address fields have user records in the customer’s org. Those user records must have the Manage Billing user permission.
    3.  If they qualify for tax exempt status. If yes, ask if they’ve provided Salesforce with a tax exemption certificate in the past or confirm that they’ve done so before accepting the offer. Tax exemptions can’t be applied after the customer accepts the offer.
3.  When the offer is ready and reviewed, click **Send to Customer**.

The customer receives an email directing them to their Salesforce org, where they can accept or reject the offer. After you send the offer, the status moves to sent and you can’t edit the offer.

### Manage Offers

The Partner Offers tab provides a place to view and manage all existing offers. The list view shows key details such as status, customer information, and contract terms. This view helps you monitor which offers are awaiting customer action and which were accepted and converted into orders.

To get a more detailed view, including products and pricing, and customer contract information, select an offer and select the Offer Details tab.

#### Offer Statuses

As your offer moves through the cycle, you can track its progress via the status field. Each status indicates a different offer state and can be helpful for understanding both current and historical offer information.

| Status | Description | Use |
| --- | --- | --- |
| Draft | New offer created and still editable. | Make edits before sending your offer. When an offer moves to a status other than draft, it can’t be edited. |
| Sent | Offer sent to the customer and waiting for customer action. | If the status is sent, the customer hasn’t acted. Watch for this change to see when a customer responds to the offer. |
| Accepted | The customer accepts the offer and a corresponding order is created. | Now, your offer becomes an order and continues its journey through the lifecycle. |
| Rejected | The customer rejects the offer. | The rejected status provides historical visibility. |
| Error | There’s a problem related to the offer.Example error causes:Salesforce couldn’t send the offerThe customer hasn’t opted in to receive offersValidation errors | The error status provides insight into issues that occur with an offer. Customers or partner can address some errors, Salesforce must address others. |
| Expired | The offer expired before the customer responded. | The expired status provides historical visibility. |

## View and Track Orders

To view your orders, go to the Orders tab. From there you can see a list of your orders, including the provisioning status, timeline, and order subtotal. You can select an Order ID to open the record and see a comprehensive view of the order details. From the Related tab, you can find a list of the products included in the order and order transactions.

### Partner Order Statuses

Similar to offers, you can track order progress via the status field.

| Status | Description | Use Case |
| --- | --- | --- |
| New | Salesforce creates an order in the Partner Marketplace, but the order hasn’t fully synced into Salesforce’s internal systems. | Use this status to see when a customer accepts an offer. |
| Processing | The order is in Salesforce’s internal systems for further processing and activation. | Provides visibility into successful order activation. |
| Activated | Salesforce processes and activates the order. On the start date, Salesforce provisions the order and, within a day of the start date, sends an invoice. | Provides visibility into successful order activation. |
| Error | There’s a problem related to the order. Example error causes:Salesforce couldn’t process the offerValidation errors | The error status provides insight into issues that occur with an order. The partner can address some errors, Salesforce must address others. |
| Expired | Order end date is in the past. | Provides historical context for past orders. |

## Related Topics

- Onboard to the Partner Marketplace (atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm)
- Locate the Partner Marketplace App (atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm)
- Create and Connect Your Stripe Account (atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm)
- Create and Connect Products (atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm)
- Create and Send Offers (atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm)
- View and Track Orders (atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm)
- Prerequisites and Considerations (atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_considerations_prerequisites.htm)
- Manage Offers (atlas.en-us.packagingGuide.meta/packagingGuide/partner_marketplace_get_started.htm)
