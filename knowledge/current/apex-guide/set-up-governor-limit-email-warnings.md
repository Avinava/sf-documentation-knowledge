---
title: "Set Up Governor Limit Email Warnings"
domain: apex-guide
topic: set-up-governor-limit-email-warnings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.498Z
estimatedTokens: 472
keywords: [Set, Governor, Limit, Email, Warnings, specify, users, organization, receive, email, notification, they, invoke, Apex, code, surpasses, 50%, allocated, governor, limits.]
---

# Set Up Governor Limit Email Warnings

> You can specify users in your organization to receive an email notification when they
    invoke Apex code that surpasses 50% of allocated governor limits. Only per-request limits are
    checked for sending email warnings; per-org limits like concurrent long-running requests are not
    checked. These email notifications do not count against the daily single email
    limit.

# Set Up Governor Limit Email Warnings

You can specify users in your organization to receive an email notification when they invoke Apex code that surpasses 50% of allocated governor limits. Only per-request limits are checked for sending email warnings; per-org limits like concurrent long-running requests are not checked. These email notifications do not count against the daily single email limit.

1.  Log in to Salesforce as an administrator user.
2.  From Setup, enter Users in the Quick Find box, then select **Users**.
3.  Click **Edit** next to the name of the user to receive the email notifications.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    Only users with Author Apex permission can receive email notifications.

4.  Select the Send Apex Warning Emails option.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    Only users with Author Apex permission can view and update this option.

5.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

These limits are currently checked for sending email warnings.

Total number of SOQL queries issued

Total number of records retrieved by SOQL queries

Total number of SOSL queries issued

Total number of DML statements issued

Total number of records processed as a result of DML statements, Approval.process, or database.emptyRecycleBin

Total heap size

Total number of callouts (HTTP requests or Web services calls) in a transaction

Total number of sendEmail methods allowed

Maximum number of methods with the future annotation allowed per Apex invocation

Maximum number of Apex jobs added to the queue with System.enqueueJob

Total number of records retrieved by Database.getQueryLocator

Total number of mobile Apex push calls
