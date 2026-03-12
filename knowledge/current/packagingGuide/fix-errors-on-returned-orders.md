---
title: "Fix Errors on Returned Orders"
domain: packagingGuide
topic: fix-errors-on-returned-orders
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.655Z
estimatedTokens: 273
keywords: [Fix, Errors, Orders, submitted, order, Salesforce, can’t, process, ask, identified, resolve, reading, comments, provide, cloning]
---

# Fix Errors on Returned Orders

> If you submitted an order that Salesforce can’t process, we return the order and ask you
    to fix the errors that we identified. You can resolve the errors by reading the comments we
    provide, cloning the returned order, and then submitting the new order with the changes
    applied.

# Fix Errors on Returned Orders

If you submitted an order that Salesforce can’t process, we return the order and ask you to fix the errors that we identified. You can resolve the errors by reading the comments we provide, cloning the returned order, and then submitting the new order with the changes applied.


| User Permissions Needed |
| --- |
| To clone orders: | COA UserORCOA Admin User |

1.  Log in to the org where the Channel Order App (COA) is installed.
2.  Open the App Launcher, and click **Partner Order**.
3.  On the Service Orders tab, find the returned order.

    If you can’t find the order, verify that you selected the correct list view.

4.  Click the order, and go to Error Comment to see details about the error.
5.  Click **Clone Order**.
6.  Apply the requested changes, and then click **Submit**.

If you have trouble resolving the errors, log a support case in the [Salesforce Partner Community](https://partners.salesforce.com "HTML (New Window)"). For product, specify **ISV Billing & Order Support**. For topic, specify **Partner Order Errors & Revisions**.
