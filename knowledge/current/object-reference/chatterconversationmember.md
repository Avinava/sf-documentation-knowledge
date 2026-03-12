---
title: "ChatterConversationMember"
domain: object-reference
topic: chatterconversationmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.503Z
estimatedTokens: 364
keywords: [ChatterConversationMember, member, conversation, Chatter, either, sent, messages, received, participants, API, version, 23.0, later, Calls, Usage]
---

# ChatterConversationMember

> Represents a member of a private conversation in Chatter. A member has
   either sent messages to or received messages from other conversation participants. This
  object is available in API version 23.0 and later.

# ChatterConversationMember

Represents a member of a private conversation in Chatter. A member has either sent messages to or received messages from other conversation participants. This object is available in API version 23.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| ConversationId | TypereferencePropertiesFilter, Group, SortDescriptionID of the associated ChatterConversation. |
| MemberId | TypereferencePropertiesFilter, Group, SortDescriptionID of the conversation member. |

## Usage

Use this object to view members of private conversations in Chatter. Users can access this object if they have the Manage Chatter Messages and Direct Messages permission. This object is read-only via the API and is provided only to allow administrators to view users' Chatter messages; for example, for compliance purposes.

#### See Also

-   [ChatterConversation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversation.htm "Represents a private conversation in Chatter, consisting of messages that conversation members have sent or received. This object is available in API version 23.0 and later.")

-   [ChatterMessage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chattermessage.htm "Represents a message sent as part of a private conversation in Chatter. This object is available in API version 23.0 and later.")

## Related Topics

- ChatterConversation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversation.htm)
- ChatterMessage (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chattermessage.htm)
