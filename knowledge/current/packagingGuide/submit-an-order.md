---
title: "Submit an Order"
domain: packagingGuide
topic: submit-an-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.740Z
estimatedTokens: 704
keywords: [Submit, Order, Salesforce, customer, purchases, new, products, requests, changes, subscription, you’re, ordering, verify, customer’s, org]
---

# Submit an Order

> Submit an order to Salesforce when a customer purchases new products or requests changes
    to a subscription. If you’re ordering products for a new customer, verify that you have the
    customer’s Salesforce org ID before you create the order.

# Submit an Order

Submit an order to Salesforce when a customer purchases new products or requests changes to a subscription. If you’re ordering products for a new customer, verify that you have the customer’s Salesforce org ID before you create the order.


| User Permissions Needed |
| --- |
| To submit orders: | COA UserORCOA Admin User |

1.  Log in to the org where the COA is installed.
2.  Open the App Launcher, and click **Partner Order**.
3.  On the Service Orders tab, click **New** to open the order submission wizard.
4.  Specify customer (1) and contract types (2), and then select a contract from the menu.

    ![The first step in the COA order wizard with callouts on the customer type and contract type areas.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fcoa%2Fimages%2Fcoa_wizard_step_1.png&folder=packagingGuide)

5.  Provide customer details (1), review order terms and conditions (2), and then click **Next**.

    ![The first step in the COA order wizard with callouts on the customer details and order terms and conditions areas.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fcoa%2Fimages%2Fcoa_wizard_step_1_2.png&folder=packagingGuide)

6.  To add products to the order, click ![The plus icon on step 2 of the COA order wizard.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fcoa%2Fimages%2Fcoa_plus_symbol.png&folder=packagingGuide), and then click **Next**.

    ![The second step of the COA order wizard with a callout around the add product icon.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fcoa%2Fimages%2Fcoa_wizard_step_2.png&folder=packagingGuide)

7.  Enter a license quantity (1) and the customer’s monthly unit price (2), and then click **Next**.

    ![The third step of the COA order wizard with callouts on the license quantity and monthly unit price areas.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fcoa%2Fimages%2Fcoa_wizard_step_3.png&folder=packagingGuide)

8.  Enter the service and order dates (1), and then review and accept the terms and conditions (2). For the Service Start Date field, enter the date that the customer’s subscription starts. The service start date of an initial order determines your customer’s monthly or annual contract renewal date. Salesforce invoices you on the service start date of your order, not the date you submit the order.

    ![The fourth step of the COA wizard with callouts on the service and order dates and terms and conditions checkbox](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fcoa%2Fimages%2Fcoa_wizard_step_4.png&folder=packagingGuide)

9.  Click **Submit**, or save the order as a draft and submit it later.

After you submit an order, it’s sent to Salesforce for processing and activation or provisioning. To check the status of an order, go the Service Orders tab.
