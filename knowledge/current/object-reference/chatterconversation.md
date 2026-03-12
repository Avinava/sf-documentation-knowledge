---
title: "ChatterConversation"
domain: object-reference
topic: chatterconversation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.499Z
estimatedTokens: 335
keywords: [ChatterConversation, conversation, Chatter, consisting, messages, members, sent, received, API, version, 23.0, later, Calls, Usage]
---

# ChatterConversation

> Represents a private conversation in Chatter, consisting of messages
      that conversation members have sent or received. This object is available in API version
    23.0 and later.

# ChatterConversation

Represents a private conversation in Chatter, consisting of messages that conversation members have sent or received. This object is available in API version 23.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| Id | TypeIDPropertiesDefaulted on create, Filter, Group, SortDescriptionID of the conversation. |

## Usage

Use this object to identify private conversations in Chatter. Users can access this object if they have the Manage Chatter Messages and Direct Messages permission. This object is read-only via the API and is provided only to allow administrators to view users' Chatter messages; for example, for compliance purposes.

#### See Also

-   [ChatterConversationMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversationmember.htm "Represents a member of a private conversation in Chatter. A member has either sent messages to or received messages from other conversation participants. This object is available in API version 23.0 and later.")

-   [ChatterMessage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chattermessage.htm "Represents a message sent as part of a private conversation in Chatter. This object is available in API version 23.0 and later.")

## Related Topics

- ChatterConversationMember (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversationmember.htm)
- ChatterMessage (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chattermessage.htm)
