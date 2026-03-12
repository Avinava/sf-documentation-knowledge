---
title: "Conversation Entries"
domain: chatterapi
topic: conversation-entries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.799Z
estimatedTokens: 597
keywords: [Conversation, Entries]
---

# Conversation Entries

> Get and update conversation entries.

# Conversation Entries

Get and update conversation entries.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The Conversation Entries resource is designed to retrieve individual conversations or small batches of transcripts, not for bulk data export or large-scale data analysis. This API has a different hourly rate limit than standard Salesforce APIs and bulk usage will likely cause you to hit that limit quickly. Each API call marks the conversation as active, counting against [your org’s concurrent active session limit](https://help.salesforce.com/s/articleView?id=service.livemessage_limitations.htm&type=5&language=en_US). Exceeding this limit can result in errors or dropped messages. For better options to export or analyze conversation data, see [Accessing Messaging and Voice Conversation Data](https://help.salesforce.com/s/articleView?id=service.conversation_transcript_access.htm&type=5&language=en_US).

Resource

```

```

Available version

51.0

HTTP methods

GET, PATCH

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| endTimestamp | Long | End timestamp, in milliseconds, for the conversation. For example, 1600788018. | Optional | 51.0 |
| queryDirection | String | Direction of the query. Values are:FromEndFromStartIf unspecified, the default is FromEnd. | Optional | 51.0 |
| recordLimit | Integer | Maximum number of entries to return. Valid values are from 1 to 1000. If unspecified, the default is 25. | Optional | 51.0 |
| startTimestamp | Long | Start timestamp, in milliseconds, for the conversation. If unspecified, the default is 0. | Optional | 51.0 |

Response body for GET

[Conversation Entries](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_entries.htm "List of entries in the conversation.")

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conversation​Entries​Updates | Conversation Entry Update Input[] | List of conversation entry updates. | Required | 51.0 |

Response body for PATCH

[Conversation Entries Update](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_entries_update.htm "List of conversation entry update results.")

## Code Examples

```
/connect/conversation/conversationIdentifier/entries
```

```
{
  "conversationEntriesUpdates": [
    {
      "identifier": "36b0f4d9-7c14-43dc-bb9e-7713a4930df0",
      "messageText": "The credit card I used was xxxx-xxxx-xxxx-4321."
    },
    {
      "identifier": "46b0f5d9-7c14-43dc-bb9e-b713a4930df1",
      "messageText": "My ssn is: XXXXX."
    }
  ]
}
```

## Related Topics

- Conversation Entries (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_entries.htm)
- Conversation Entry Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_conversation_entry_update_input.htm)
- Conversation Entries Update (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_entries_update.htm)
- Conversation Entry (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_entry.htm)
