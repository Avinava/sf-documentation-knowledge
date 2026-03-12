---
title: "ChatterMessage"
domain: object-reference
topic: chattermessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.539Z
estimatedTokens: 583
keywords: [ChatterMessage, message, sent, part, conversation, Chatter, API, version, 23.0, later, Calls, Usage]
---

# ChatterMessage

> Represents a message sent as part of a private conversation in
      Chatter. This object is available in API version
      23.0 and later.

# ChatterMessage

Represents a message sent as part of a private conversation in Chatter. This object is available in API version 23.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve(), update()

## Fields

| Field Name | Details |
| --- | --- |
| Body | TypetextareaPropertiesUpdateDescriptionText of the message. |
| ConversationId | TypereferencePropertiesFilter, Group, SortDescriptionID of the conversation that the message is associated with. |
| SenderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the sender. |
| SenderNetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Experience Cloud site from which the message was sent. This field is available only if digital experiences is enabled in your org.This field is available in API version 32.0 and later. |
| SentDate | TypedateTimePropertiesFilter, SortDescriptionDate the message was sent. |

## Usage

Use this object to view and delete messages sent or received via private conversations in Chatter. Users can access this object if they have the Manage Chatter Messages and Direct Messages permission. Users with the Moderate Experiences Chatter Messages permission can access this object in Experience Cloud sites they’re a member of, only if the message has been flagged as inappropriate. This object is provided to allow administrators to view and delete users’ Chatter messages, for example, for compliance purposes.

Messages are hard deleted. That is, they’re removed completely without a trip to the Recycle Bin.

Deleting a message that resulted from sharing a file with someone doesn’t also delete the file.

#### See Also

-   [ChatterConversation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversation.htm "Represents a private conversation in Chatter, consisting of messages that conversation members have sent or received. This object is available in API version 23.0 and later.")

-   [ChatterConversationMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversationmember.htm "Represents a member of a private conversation in Chatter. A member has either sent messages to or received messages from other conversation participants. This object is available in API version 23.0 and later.")

## Related Topics

- ChatterConversation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversation.htm)
- ChatterConversationMember (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_chatterconversationmember.htm)
