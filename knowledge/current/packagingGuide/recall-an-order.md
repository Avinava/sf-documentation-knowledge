---
title: "Recall an Order"
domain: packagingGuide
topic: recall-an-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.716Z
estimatedTokens: 252
keywords: [Recall, Order, don’t, want, Salesforce, process, submitted, becomes, read-only, can’t, edit, resubmit, cases, hours, submitting]
---

# Recall an Order

> If you don’t want Salesforce to process an order that you submitted, recall it. After you
    recall an order, it becomes read-only, and you can’t edit or resubmit it. In most cases, you can
    recall an order within 2 hours of submitting it to Salesforce. Near the end of the month, the
    window for recalling an order is 30 minutes.

# Recall an Order

If you don’t want Salesforce to process an order that you submitted, recall it. After you recall an order, it becomes read-only, and you can’t edit or resubmit it. In most cases, you can recall an order within 2 hours of submitting it to Salesforce. Near the end of the month, the window for recalling an order is 30 minutes.


| User Permissions Needed |
| --- |
| To recall orders: | COA UserORCOA Admin User |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

If the recall action isn’t available, the window for recalling the order has elapsed.

1.  Log in to the org where the COA is installed.
2.  Open the App Launcher, and click **Partner Order**.
3.  On the Service Orders tab, find the order that you want to recall.

    If you can’t find the order, verify that you selected the correct list view.

4.  In the Custom Actions column, click **Recall**.
5.  Confirm that you want to recall the order, and click **Continue**.
