---
title: "Batch Delete Scheduled Async API Conversation and Non-Conversation Messages"
domain: mc-apis
topic: batch-delete-scheduled-async-api-conversation-and-non-conversation-messages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.451Z
estimatedTokens: 1175
keywords: [Batch, Scheduled, Async, API, Conversation, Non-Conversation, Messages, conversations, ScheduledRequest, ScheduledConversation, objects, together, Specify, element, SOAP]
---

# Batch Delete Scheduled Async API Conversation and Non-Conversation Messages

> To delete scheduled conversations and non-conversation messages in batch, use the ScheduledRequest and ScheduledConversation objects together in the same request. Specify more than one Objects element in the body of the SOAP envelope, and format each like a single deletion request. Use the examples 

# Batch Delete Scheduled Async API Conversation and Non-Conversation Messages

To delete scheduled conversations and non-conversation messages in batch, use the ScheduledRequest and ScheduledConversation objects together in the same request. Specify more than one Objects element in the body of the SOAP envelope, and format each like a single deletion request. Use the examples below as guides.

> You can make the request synchronously or asynchronously by using Synchronous or Asynchronous as the RequestType. Asynchronous requests are queued and processed in the order they arrive. General delays in Async API processing impact an asynchronous deletion request, just like any other asynchronous request.

## Sample SOAP Envelopes

### Sample Synchronous Batch Request

```
<DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
  <Options>
    <RequestType>Synchronous</RequestType>
  </Options>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledConversation">
    <ConversationID>ExampleConversationID_1</ConversationID>
  </Objects>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledRequest">
    <RequestID>ExampleRequestID_1</RequestID>
  </Objects>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledRequest">
    <RequestID>ExampleRequestID_2</RequestID>
  </Objects>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledRequest">
    <RequestID>ExampleRequestID_3</RequestID>
  </Objects>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledConversation">
    <ConversationID>ExampleConversationID_2</ConversationID>
  </Objects>
</DeleteRequest>
```

### Sample Synchronous Batch Response

> Use the OrdinalID values to match individual Results elements in the response with the corresponding Objects elements in the request. An OrdinalID of zero corresponds with the first Objects element in the request.

```
<DeleteResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
  <Results>
    <StatusCode>OK</StatusCode>
    <StatusMessage>Deleted</StatusMessage>
    <OrdinalID>0</OrdinalID>
  </Results>
  <Results>
    <StatusCode>OK</StatusCode>
    <StatusMessage>Deleted</StatusMessage>
    <OrdinalID>1</OrdinalID>
  </Results>
  <Results>
    <StatusCode>OK</StatusCode>
    <StatusMessage>Deleted</StatusMessage>
    <OrdinalID>2</OrdinalID>
  </Results>
  <Results>
    <StatusCode>OK</StatusCode>
    <StatusMessage>Deleted</StatusMessage>
    <OrdinalID>3</OrdinalID>
  </Results>
  <Results>
    <StatusCode>OK</StatusCode>
    <StatusMessage>Deleted</StatusMessage>
    <OrdinalID>4</OrdinalID>
  </Results>
  <RequestID>676FA9D6-74D5-4982-A336-59CD01683FC1</RequestID>
  <OverallStatus>OK</OverallStatus>
</DeleteResponse>
```

### Sample Asynchronous Batch Request

> In this example, the SendResponseTo options RespondWhen and IncludeResults are set to notify the caller during every processing step and to include the results of each deletion in the batch.

```
<DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
  <Options>
    <RequestType>Asynchronous</RequestType>
    <SendResponseTo>
       <ResponseType>HTTPPost</ResponseType>
<ResponseAddress>https://www.examplethecallersdomain.com/example/GDPRDeletionResponse</ResponseAddress>
       <RespondWhen>Always</RespondWhen>
       <IncludeResults>true</IncludeResults>
    </SendResponseTo>
  </Options>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledConversation">
    <ConversationID>ExampleConversationID_1</ConversationID>
  </Objects>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledRequest">
    <RequestID>ExampleRequestID_1</RequestID>
  </Objects>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledRequest">
    <RequestID>ExampleRequestID_2</RequestID>
  </Objects>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledRequest">
    <RequestID>ExampleRequestID_3</RequestID>
  </Objects>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledConversation">
    <ConversationID>ExampleConversationID_2</ConversationID>
  </Objects>
</DeleteRequest>
```

## Related Items

-   [Callback Handling for Asynchronous Calls](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_callback.htm)
-   [Schedule a User-Initiated Email Send](atlas.en-us.noversion.mc-apis.meta/mc-apis/scheduling_a_user_initiated_email_message_send_via_the_web_service_api.htm)
-   [Schedule an Email Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/scheduling_an_email_send_definition.htm)

## Related Topics

- Callback Handling for Asynchronous Calls (atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing_callback.htm)
- Schedule a User-Initiated Email Send (atlas.en-us.noversion.mc-apis.meta/mc-apis/scheduling_a_user_initiated_email_message_send_via_the_web_service_api.htm)
- Schedule an Email Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/scheduling_an_email_send_definition.htm)
