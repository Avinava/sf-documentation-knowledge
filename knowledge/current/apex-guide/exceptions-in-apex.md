---
title: "Exceptions in Apex"
domain: apex-guide
topic: exceptions-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.355Z
estimatedTokens: 1206
keywords: [Exceptions, Apex, note, errors, events, disrupt, normal, flow, code, execution., throw, statements, used, generate, exceptions, while, try, catch, finally, gracefully]
---

# Exceptions in Apex

> Exceptions note errors and other events that disrupt the normal flow of
        code execution. throw statements are used to
        generate exceptions, while try, catch, and finally statements are used to gracefully recover from exceptions.

# Exceptions in Apex

Exceptions note errors and other events that disrupt the normal flow of code execution. throw statements are used to generate exceptions, while try, catch, and finally statements are used to gracefully recover from exceptions.

There are many ways to handle errors in your code, including using assertions like System.assert calls, or returning error codes or Boolean values, so why use exceptions? The advantage of using exceptions is that they simplify error handling. Exceptions bubble up from the called method to the caller, as many levels as necessary, until a catch statement is found to handle the error. This bubbling up relieves you from writing error-handling code in each of your methods. Also, by using finally statements, you have one place to recover from exceptions, like resetting variables and deleting data.

## What Happens When an Exception Occurs?

When an exception occurs, code execution halts. Any DML operations that were processed before the exception are rolled back and aren’t committed to the database. Exceptions get logged in debug logs. For unhandled exceptions (exceptions that the code doesn’t catch) Salesforce sends an email that includes the exception information. The end user sees an error message in the Salesforce user interface.

## Unhandled Exception Emails

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

Take advantage of free-tier access to Event Monitoring, and track unhandled exceptions in Apex code execution instead of relying only on unhandled exception emails. Troubleshoot your Apex code by analyzing the information captured in the [event log files](https://help.salesforce.com/s/articleView?id=xcloud.real_time_em_elf_browser.htm&type=5&language=en_US) for the [Apex Unexpected Exception](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexunexpectedexception.htm "HTML (New Window)") event type.

When unhandled Apex exceptions occur, emails sent contain the Apex stack trace, exception message, customer’s org and user ID, org name, and My Domain name. No other data is returned with the report. Unhandled exception emails are sent by default to the developer specified in the LastModifiedBy field on the failing class or trigger. In addition, you can have emails sent to users of your Salesforce org and to arbitrary email addresses. These email recipients can also receive process or flow error emails. To set up these email notifications, from Setup, enter Apex Exception Email in the Quick Find box, then select **Apex Exception Email**. The entered email addresses then apply to all managed packages in the customer's org. You can also configure Apex exception emails using Tooling API object ApexEmailNotification.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

-   If duplicate exceptions occur in Apex code that runs synchronously or asynchronously, subsequent exception emails are suppressed and only the first email is sent. This email suppression prevents flooding of the developer’s inbox with emails about the same error.
-   Emails aren’t sent for exceptions encountered with anonymous Apex executions or with Apex methods accessed by Aura components and Lightning web components via the [@AuraEnabled](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm "HTML (New Window)") annotation.
-   Apex exception emails are limited to 10 emails per hour, per application server. Because this limit isn’t on a per-org basis, email delivery to a particular org can be unreliable.

## Unhandled Exceptions in the User Interface

If an end user runs into an exception that occurred in Apex code while using the standard user interface, an error message appears. The error message includes text similar to the notification shown here.

![Unhandled exception in the New Merchandise page](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fapex_exceptions_unhandled_ui.png&folder=apexcode)

-   **[Exception Statements](atlas.en-us.apexcode.meta/apexcode/apex_exception_statements.htm)**

-   **[Exception Handling Example](atlas.en-us.apexcode.meta/apexcode/apex_exception_trycatch_example.htm)**
    Learn how exception handling works in Apex.
-   **[Built-In Exceptions and Common Methods](atlas.en-us.apexcode.meta/apexcode/apex_exception_builtin.htm)**

-   **[Catching Different Exception Types](atlas.en-us.apexcode.meta/apexcode/apex_exception_types_catching.htm)**

-   **[Create Custom Exceptions](atlas.en-us.apexcode.meta/apexcode/apex_exception_custom.htm)**


-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log.htm "Debug Log")

## Related Topics

- Exception Statements (atlas.en-us.apexcode.meta/apexcode/apex_exception_statements.htm)
- Exception Handling Example (atlas.en-us.apexcode.meta/apexcode/apex_exception_trycatch_example.htm)
- Built-In Exceptions and Common Methods (atlas.en-us.apexcode.meta/apexcode/apex_exception_builtin.htm)
- Catching Different Exception Types (atlas.en-us.apexcode.meta/apexcode/apex_exception_types_catching.htm)
- Create Custom Exceptions (atlas.en-us.apexcode.meta/apexcode/apex_exception_custom.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log.htm)
