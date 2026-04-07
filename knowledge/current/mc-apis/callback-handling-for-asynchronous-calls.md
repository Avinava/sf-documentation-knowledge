---
title: "Callback Handling for Asynchronous Calls"
domain: mc-apis
topic: callback-handling-for-asynchronous-calls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.265Z
estimatedTokens: 581
keywords: [Callback, Handling, Asynchronous, Calls, Marketing, Cloud, recommends, HTTPPost, results, API, requests, rather, receiving, email, Reduce]
---

# Callback Handling for Asynchronous Calls

> Marketing Cloud recommends using an HTTPPost callback to return the results of asynchronous API requests, rather than receiving the results in an email.

# Callback Handling for Asynchronous Calls

Marketing Cloud recommends using an HTTPPost callback to return the results of asynchronous API requests, rather than receiving the results in an email.

To secure your public callback URL:

1.  Submit the HTTPPost using HTTPS.
2.  Allowlist Marketing Cloud IP addresses.

Retrieve the call's status using one of these actions:

-   Set the asynchronous calls to return an HTTP POST or email message after processing.
-   Perform a retrieve on the ResultMessage object and filter by the ResultID of the original request.

To use an HTTPPost callback to return the results of asynchronous API requests, set SendResponseTo.ResponseType to HTTPPost and specify a publicly accessible URL for SendResponseTo.ResponseAddress. The callback URL receives a standard HTTPPost request with the application/x-www-form-urlencoded content type and these fields:

-   RequestID
-   ConversationID
-   OverallStatusCode
-   StatusCode
-   StatusMessage
-   ErrorCode
-   RequestType
-   ResultType
-   ResultDetailXML
-   SequenceCode

Unlike synchronous API calls, all successful asynchronous calls return a status of OK. This status indicates that the API received the call and it was queued. The callback does not indicate whether the call executed or failed or include unnecessary fields. For example, StatusMessage or ErrorCode values aren’t included for successful calls.

> If an HTTPPost throws an exception, the system logs an error and stops the process. The system does not retry the call.

## Reduce the Number of Callbacks

The callbacks you receive correspond to the number of calls you make. If you send 500 async SOAP calls, the callback URL is called 500 times. To receive fewer callbacks, you have a few options:

-   Send multiple objects in a single call.
-   To get a callback only if an error occurs, modify the RespondWhen setting to be RespondWhen.OnError.
-   To capture only successful callbacks, perform a retrieve on the ResultItem and ResultMessage objects, and return only the RequestID and OverallStatusCode.

## Sample SOAP Envelope - Retrieve ResultMessage Object

## Sample SOAP Envelope - Return HTTP POST

## Related Items

-   [Allowlist Marketing Cloud IP](https://help.salesforce.com/articleView?id=mc_es_ip_addresses_for_inclusion_on_whitelists.htm&type=5)
