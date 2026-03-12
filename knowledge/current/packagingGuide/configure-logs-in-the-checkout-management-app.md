---
title: "Configure Logs in the Checkout Management App"
domain: packagingGuide
topic: configure-logs-in-the-checkout-management-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.576Z
estimatedTokens: 494
keywords: [Configure, Logs, Checkout, Management, App, CMA, creates, debug, help, troubleshoot, issues, saved, longer, regularly, stay]
---

# Configure Logs in the Checkout Management App

> The Checkout Management App (CMA) creates debug logs to help you troubleshoot issues. By
        default, all logs are saved, but you can configure the CMA to delete logs that you no longer
        need. Delete logs regularly to stay within the data storage limits for your Salesforce edition.

# Configure Logs in the Checkout Management App

The Checkout Management App (CMA) creates debug logs to help you troubleshoot issues. By default, all logs are saved, but you can configure the CMA to delete logs that you no longer need. Delete logs regularly to stay within the data storage limits for your Salesforce edition.


| User Permissions Needed |
| --- |
| To manage, create, edit, and delete custom settings: | Customize Application |
| To save changes to Apex classes and triggers: | Author Apex |

1.  Log in to the org where the CMA is installed.
2.  Configure how long to save CMA logs.

    1.  From Setup, enter Custom Settings in the Quick Find box, and then click **Custom Settings**.
    2.  For CMALogSettings, click **Manage**.
    3.  Click **New**.
    4.  Enter a name. For example, CMA Log Settings.
    5.  For CMALogLifeSpan, enter how many days to save logs. For example, enter 30 to save all logs created in the past 30 days.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

    #### Note

    To change how long CMA logs are saved, edit the value configured in this step. Don’t add more values to CMALogSettings.

3.  Schedule an Apex job to delete old CMA logs.
    1.  From Setup, enter Apex Classes in the Quick Find box, and then click **Apex Classes**.
    2.  Click **Schedule Apex**.
    3.  Configure the job as follows.

        | Field | Value |
        | --- | --- |
        | Job Name | CMA Log Cleanup |
        | Apex Class | ScheduledDeleteCMALogsNamespace prefix: sfcma |
        | Frequency | Specify a weekly or monthly interval—we recommend running the job at least one time per week |
        | Start Date | Today’s date |
        | End Date | A future date—we recommend specifying a date that’s at least several years in the future |
        | Preferred Start Time | Any value—we recommend choosing a time when your org is not under a heavy load |

    4.  Click **Save**.
