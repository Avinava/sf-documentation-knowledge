---
title: "Delete Scheduled Async API Conversation"
domain: mc-apis
topic: delete-scheduled-async-api-conversation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.462Z
estimatedTokens: 454
keywords: [Scheduled, Async, API, Conversation, ScheduledConversation, Deletion, Eligibility, Errors, Sample, SOAP, Items]
---

# Delete Scheduled Async API Conversation

> Use the ScheduledConversation object to delete a scheduled conversation.

# Delete Scheduled Async API Conversation

Use the ScheduledConversation object to delete a scheduled conversation.

> You can make the request synchronously or asynchronously by using Synchronous or Asynchronous as the RequestType. Asynchronous requests are queued and processed in the order they arrive. General delays in Async API processing impact an asynchronous deletion request, just like any other asynchronous request.

## Deletion Eligibility

You can delete any scheduled conversation as long as it exists in the requesting MID.

## Errors

| Error | Description |
| --- | --- |
| 204 AsyncAPI_Error | The conversation can’t be deleted at this time. Try again later. If the error continues to occur, contact Salesforce Customer Support. |
| 220 AsyncAPI_Item_Not_Found | The conversation can’t be found. Try again later. If the conversation still can’t be found, it doesn’t exist, even in deleted status. |
| 222 AsyncAPI_Invalid_Status_To_Delete_Item | The conversation can’t be deleted because it is already processed. |

## Sample SOAP Request

```
<DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
  <Options>
    <RequestType>Synchronous</RequestType>
  </Options>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledConversation">
    <ConversationID>ExampleConversationID</ConversationID>
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
