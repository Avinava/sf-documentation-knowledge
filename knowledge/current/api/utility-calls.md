---
title: "Utility Calls"
domain: api
topic: utility-calls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.901Z
estimatedTokens: 602
keywords: [Utility, Calls, topic, API, client, applications, invoke, obtain, system, timestamp, user, change, passwords, Samples]
---

# Utility Calls

> This topic describes API calls that your client applications can invoke to obtain the
    system timestamp, user information, and change user passwords.

# Utility Calls

This topic describes API calls that your client applications can invoke to obtain the system timestamp, user information, and change user passwords.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

For a list of Apex-related calls, see [Apex-Related Calls](atlas.en-us.api.meta/api/call_apex_list.htm "The following table lists supported calls in the API in alphabetical order, and provides a brief description for each. Click a call name to see syntax, usage, and more information for that call."), for a list of core calls, see [Core Calls](atlas.en-us.api.meta/api/sforce_api_calls_list.htm "A list of supported calls in the API in alphabetical order, and provides a brief description for each. Click a call name to see syntax, usage, and more information for that call."), and for a list of describe calls, see [Describe Calls](atlas.en-us.api.meta/api/sforce_api_calls_list_describe.htm "Lists supported describe calls in the API.").

The following table lists the API utility calls described in this topic:

| Task / Call | Description |
| --- | --- |
| getServerTimestamp() | Retrieves the current system timestamp from the API. |
| changeOwnPassword() | Allows users to change their own passwords. |
| getUserInfo() | Retrieves personal information for the user associated with the current session. |
| match() | Evaluates sObjects provided as an input for matches among Leads, using the matching rule specified in the input MatchOptions. This call can be used only with the Standard Matching Rule for Leads on Accounts. |
| renderEmailTemplate() | Replaces merge fields in text bodies of email templates with values from Salesforce records, even for polymorphic fields. The email template bodies and their corresponding whoId and whatId values are specified in the argument. |
| resetPassword() | Changes a user’s password to a system-generated value. |
| sendEmail() | Immediately sends an email message. |
| sendEmailMessage() | Immediately sends up to 10 draft email messages. |
| setPassword() | Sets the specified user’s password to the specified value. |

## Samples

The samples in this section are based on the enterprise WSDL file. They assume that you have already imported the WSDL file and created a connection. To learn how to do so, see the [Quick Start](atlas.en-us.api.meta/api/sforce_api_quickstart_steps.htm) tutorial.

## Related Topics

- Apex-Related Calls (atlas.en-us.api.meta/api/call_apex_list.htm)
- Core Calls (atlas.en-us.api.meta/api/sforce_api_calls_list.htm)
- Describe Calls (atlas.en-us.api.meta/api/sforce_api_calls_list_describe.htm)
- getServerTimestamp() (atlas.en-us.api.meta/api/sforce_api_calls_getservertimestamp.htm)
- changeOwnPassword() (atlas.en-us.api.meta/api/sforce_api_calls_changeownpassword.htm)
- getUserInfo() (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo.htm)
- match() (atlas.en-us.api.meta/api/sforce_api_calls_match.htm)
- renderEmailTemplate() (atlas.en-us.api.meta/api/sforce_api_calls_renderemailtemplate.htm)
- resetPassword() (atlas.en-us.api.meta/api/sforce_api_calls_resetpassword.htm)
- sendEmail() (atlas.en-us.api.meta/api/sforce_api_calls_sendemail.htm)
