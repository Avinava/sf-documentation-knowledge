---
title: "Apex Email Service"
domain: apex-guide
topic: apex-email-service
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:32.591Z
estimatedTokens: 714
keywords: [Apex, Email, Service, services, process, contents, attachments, inbound, automatically, creates, contact, records, messages]
---

# Apex Email Service

> You can use email services to process the contents, headers, and attachments of
        inbound email. For example, you can create an email service that automatically creates
        contact records based on contact information in messages.

# Apex Email Service

You can use email services to process the contents, headers, and attachments of inbound email. For example, you can create an email service that automatically creates contact records based on contact information in messages.

You can associate each email service with one or more Salesforce-generated email addresses to which users can send messages for processing. To give multiple users access to a single email service, you can:

-   Associate multiple Salesforce-generated email addresses with the email service and allocate those addresses to users.
-   Associate a single Salesforce-generated email address with the email service, and write an Apex class that executes according to the user accessing the email service. For example, you can write an Apex class that identifies the user based on the user's email address and creates records on behalf of that user.

To use email services, from Setup, enter Email Services in the Quick Find box, then select **Email Services**.

-   Click **New Email Service** to define a new email service.
-   Select an existing email service to view its configuration, activate or deactivate it, and view or specify addresses for that email service.
-   Click **Edit** to make changes to an existing email service.
-   Click **Delete** to delete an email service.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    Before deleting email services, you must delete all associated email service addresses.


When defining email services, note the following:

-   An email service only processes messages it receives at one of its addresses.
-   Salesforce limits the total number of messages that all email services combined, including On-Demand Email-to-Case, can process daily. Messages that exceed this limit are bounced, discarded, or queued for processing the next day, depending on how you configure the failure response settings for each email service. Salesforce calculates the limit by multiplying the number of user licenses by 1,000; maximum 1,000,000. For example, if you have 10 licenses, your org can process up to 10,000 email messages a day.
-   Email service addresses that you create in your sandbox can’t be copied to your production org.
-   For each email service, you can tell Salesforce to send error email messages to a specified address instead of the sender's email address.
-   Email services reject email messages and notify the sender if the email (combined body text, body HTML, and attachments) exceeds approximately 25 MB (varies depending on language and character set).

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_rest.htm "Exposing Apex Classes as REST Web Services")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_using.htm "Using the InboundEmail Object")

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_rest.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_using.htm)
