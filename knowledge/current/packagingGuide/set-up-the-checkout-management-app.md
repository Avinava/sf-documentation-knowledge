---
title: "Set Up the Checkout Management App"
domain: packagingGuide
topic: set-up-the-checkout-management-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.569Z
estimatedTokens: 871
keywords: [Checkout, Management, App, CMA, setup, tool, connect, Stripe, account, import, data, Salesforce, org, familiar, dashboard]
---

# Set Up the Checkout Management App

> Use the Checkout Management App (CMA) setup tool to connect your Stripe account and
        import data into your Salesforce org. Then get familiar with your dashboard and choose when
        customers and team members receive email notifications from the CMA.

# Set Up the Checkout Management App

Use the Checkout Management App (CMA) setup tool to connect your Stripe account and import data into your Salesforce org. Then get familiar with your dashboard and choose when customers and team members receive email notifications from the CMA.


| User Permissions Needed |
| --- |
| To configure the Checkout Management App: | CMA Admin User |

Watch a Demo: [![Play button](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fplay_btn.png&folder=packagingGuide)Set Up the Checkout Management App](https://salesforce.vidyard.com/watch/hDaZ79KEQpn797yqDhACB6 "video (New Window)")

1.  Log in to the org where the CMA is installed.
2.  Open the App Launcher, and then click **Checkout Management App**.
3.  Click **Checkout Setup**.
4.  Connect your Stripe account.
    1.  In the Connect Stripe Account section, click **Do It**.
    2.  Click **Get API Key from Stripe**.

        The Stripe dashboard opens in a new tab.

    3.  In the Stripe dashboard, copy your live secret API key.
    4.  In the CMA, paste the key into Live Secret API Key, and then click **Connect Stripe Account**.
5.  Set up data syncing by creating and configuring a site. After you set up data syncing, new Stripe data syncs to your org automatically.
    1.  Click **Set Up Data Syncing**.
    2.  Click **Register a Force.com Domain**, and then follow the setup instructions in the CMA.
    3.  Click **Create a Force.com Site**, and then follow the setup instructions in the CMA.
    4.  Click **Configure Site Access**, and then follow the setup instructions in the CMA.
    5.  Click **Connect the Site to Stripe**, and then follow the setup instructions in the CMA.
6.  Import your Stripe data. If you haven’t sold an offering using AppExchange Checkout before, you don’t have any Stripe data, so you can skip this step.
    1.  Click **Import Existing Data**.
    2.  Click **Import Data**.

        Importing Stripe data can take a while depending on how much data you have. Don’t use CMA reports or dashboards while data is being imported.

    3.  After the import finishes, close the dialog to return to the setup wizard.
7.  Configure email notifications.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

    #### Tip

    Before you enable a notification, review the default content we provide. That way, you know exactly what customers and team members receive, and you can tailor it to reflect your company’s identity.

    1.  In the Configure Notification Settings section, click **Do It**.
    2.  Enable customer notifications as desired.
    3.  To add the email addresses of team members, click **View/Edit**, and then click **Save**.
    4.  Enable partner notifications as desired.
    5.  Go back to the setup wizard.
8.  Say hello to your dashboard.
    1.  In the Meet Your Dashboard section, click **Do It**.
    2.  View the dashboards we’ve created for you, or go to Trailhead to learn how to customize dashboards.

You’re all set! To update configuration details later, return to Checkout Setup.

#### See Also

-   [Sample Checkout Management App Customizations](atlas.en-us.packagingGuide.meta/packagingGuide/cma_example_customizations.htm "The Checkout Management App (CMA) is a powerful tool out of the box, but gets even better when you customize it. These examples show how you can modify dashboards and email notifications to delight customers and team members.")

## Related Topics

- Sample Checkout Management App Customizations (atlas.en-us.packagingGuide.meta/packagingGuide/cma_example_customizations.htm)
