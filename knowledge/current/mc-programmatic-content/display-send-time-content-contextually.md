---
title: "Display Send-Time Content Contextually"
domain: mc-programmatic-content
topic: display-send-time-content-contextually
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.362Z
estimatedTokens: 1009
keywords: [Display, Send-Time, Content, Contextually, AMPscript, via, send, logging, data, extension, pull, database, determine, displays, subscribers]
---

# Display Send-Time Content Contextually

> Use AMPscript to contextually display send-time content via a send logging data extension. You can use AMPscript to pull information from a send logging database to determine which content displays to your subscribers. Depending on the context of the displayed content, you can use a send logging dat

# Display Send-Time Content Contextually

Use AMPscript to contextually display send-time content via a send logging data extension. You can use AMPscript to pull information from a send logging database to determine which content displays to your subscribers. Depending on the context of the displayed content, you can use a send logging database to pull different information for those contexts. For example, you can display the content current as of send time as shared Social Forward content or content viewed on a web page. However, you may also want to display the most recent content when that content is displayed in an email message. AMPscript allows you to pull the send-time content from the send logging data extension for use in your chosen context.

## Prerequisites

This example requires familiarity with AMPscript to use the information in this document. You must also use an account enabled with the send logging feature. Contact your Marking Cloud account representative for more information on enabling this feature.

## Example

Use this sample AMPscript as a model to develop your own code. The example below pulls the send-time data from the send logging data extension when the content is viewed in an email. For shared content or content viewed in a web page, the AMPscript displays the most current content.

The first block of the code sets up the variables necessary to contain the appropriate data and hold the applicable SubscriberID and JobID values. The @SendLogData lookup call references the send logging data extension and retrieves the information in the field assigned to the specific subscriber and job. The IF ELSE statement that follows displays the content from the send logging data extension if that content resides in a web page or in a Social Forward context. Otherwise, the AMPscript displays the email content.

```
%%[
/* Set variables for looking up in send logging data extension */
var @SendLogData, @SubLookup, @JobLookup
Set @SubLookup = SubscriberID   /* subscriber id of the record */
Set @JobLookup = JobID  /* job id for the send */
Set @SendLogData = lookup("Send_logging_DE","DE_Field","SubID",@SubLookup,"JobID",@JobLookup)
]%%

/* Set if statement to determine what should be displayed based on how the email is viewed */
%%[ if _MessageContext == "VAWP" or _MessageContext == "Social" or _MessageContext == "FTAF" then ]%%

/* Content to display when using the view as a web page, social forward, or forward to a friend features */
send logging value: %%=v(@SendLogData)=%%

%%[ ELSE ]%%

/* Content to display in the email inbox */
email value: %%DE_Field%%

%%[ ENDIF ]%%
```

If you send the same email message more than once, the View As A Web Page option could reference an earlier version of the email message and not reflect any changes you may have made. To avoid this situation, reference the BatchID of the send in your AMPscript to ensure the correct email message is displayed as a web page. The user-defined @eventID variable either references the current send or an earlier version using the View As A Web Page option.

If you send the same email message more than once and use the View As A Web Page option, also be sure to use send logging. Otherwise, if a recipient is removed from the data extension before the next send, their View As A Web Page link won’t work any more.

```
%%[ Var @eventId, @emailaddr, @SendLogEID, @SendLogEM, @SubLookup, @JobLookup,@BatchLookup
Set @SubLookup = SubscriberID
Set @JobLookup = JobID
Set @BatchLookup = _JobSubscriberBatchID
Set @SendLogEID = lookup("SendLog","EventID","SubID",@SubLookup,"JobID",@JobLookup,"BatchID",@BatchLookup)
Set @SendLogEM = lookup("SendLog","EmailAddress","SubID",@SubLookup,"JobID",@JobLookup,"BatchID",@BatchLookup)
]%%

%%[ if _MessageContext == "VAWP" or _MessageContext == "Social" or _MessageContext == "FTAF" then ]%%

%%[ Set @eventId = @SendLogEID
Set @emailAddress = @SendLogEM ]%%

%%[ ELSE ]%%

%%[
Set @eventId = [EventID]
Set @emailAddress = [emailAddress]
]%%

%%[ ENDIF ]%%
```
