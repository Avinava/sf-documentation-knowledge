---
title: "Upload or Update Transcripts with Connect REST API"
domain: voice-developer-guide
topic: upload-or-update-transcripts-with-connect-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.447Z
estimatedTokens: 1998
keywords: [Upload, Transcripts, Connect, REST, API, voice, calls, functionality, redacting, content, Usage]
---

# Upload or Update Transcripts with Connect REST API

> Use Connect REST API to upload and update transcripts for voice calls. This
        functionality can also be used for redacting content in transcripts.

# Upload or Update Transcripts with Connect REST API

Use Connect REST API to upload and update transcripts for voice calls. This functionality can also be used for redacting content in transcripts.

These [Connect API resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_conversations.htm) provide programmatic access to voice transcripts (also called “conversation entries”) so that customers can build custom solutions with voice transcripts.

/connect/conversations/upload (GET)

[Get the status of conversation uploads.](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_conversations_upload.htm)

/connect/conversations/upload (POST)

[Upload bulk conversations.](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_conversations_upload.htm)

/connect/conversation/conversationIdentifier/entries (GET)

[Get conversation entries.](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_conversation_entries.htm)

/connect/conversation/conversationIdentifier/entries (PATCH)

[Update conversation entries.](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_conversation_entries.htm)

## Usage Example

This example describes how to perform bulk upload of transcripts to a voice call after the conversation. The bulk upload API call preserves the order of transcripts (conversation entries) as they appear in the uploaded payload file, but it doesn’t sort or reorder entries based on timestamps.

1.  Retrieve the VoiceCall ID for a conversation.

    In order to perform the subsequent steps, you must get the [VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm) record ID.

    ![VoiceCall ID](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_call_id.png&folder=voice_developer_guide)

2.  Using the VoiceCall ID, retrieve the [Conversation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversation.htm) record and the [ConversationParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversationparticipant.htm) records.

    Using [SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm), you can query for the [Conversation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversation.htm) ID. For example:

    ```

    ```

    With the [Conversation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversation.htm) ID, you can query for additional fields on the [Conversation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversation.htm) record. For example:

    ```

    ```

    You can also get information about the [ConversationParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversationparticipant.htm) records. For example:

    ```

    ```

    Values returned from this SOQL call are used in the subsequent upload API POST payload. Specifically:

    -   AppType in the SOQL call is used for the “appType” value in the payload. For API version 52.0 and later, refer to the **AppType to appType Mapping** table.
    -   ParticipantRole is used for the “role” value. For API version 52.0 and later, refer to the **ParticipantRole to role Mapping** table.
    -   ParticipantKey is used for the “subject” value.

    | AppType Value in SOQL | appType Value in Payload |
    | --- | --- |
    | bmapi | BMAPI |
    | live_message | LIVE_MESSAGE |
    | chatbot | CHATBOT |
    | messaging | MESSAGING |
    | perftool | PERFTOOL |
    | agent | AGENT |
    | telephony_integration | TELEPHONY_INTEGRATION |
    | translation | TRANSLATION |
    | iamessage | IAMESSAGE |
    | conversation | CONVERSATION |

    | ParticipantRole Value in SOQL | role Value in Payload |
    | --- | --- |
    | System | SYSTEM |
    | Agent | AGENT |
    | Chatbot | CHATBOT |
    | EndUser | END_USER |
    | Supervisor | SUPERVISOR |
    | Router | ROUTER |

3.  Call the bulk upload API using the desired payload.

    Make a multi-part POST call to the [Connect REST API for uploading conversation data](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_conversations_upload.htm). For example:

    ```

    ```

    To prepare the request, save the payload to a binary file. Use a payload that contains the desired conversation participant info, along with the conversation entries. For example, the following payload sample applies to API version 52.0 and later.

    ```

    ```

    Use the following guidance when filling out this payload:

    -   Within each part of the payload, the first object contains the conversation details (1). The latter set of objects contains the conversation entry details (2).

        ![An example payload file with callouts showing the first line contents as 1 and second and third line contents as 2](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_connect_api_payload.png&folder=voice_developer_guide)

    -   The clientSentTimestamp must be between startTimestamp and endTimestamp. Timestamps are specified using the UNIX Epoch time.
    -   contextParamMap is used to add contextual information. This parameter is optional.
    -   appType, role, and subject come from the ConversationParticipant SOQL call described in the previous step.
    -   relatedRecords is the list of object records that are associated with the conversation entry. Valid values for voiceCallIds in the relatedRecords list are 15 characters long.
    -   In the multi-part POST request, the key name (that is, the binary file) must be the conversationId. For details, see [Uploading Binary Files](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files) in the Connect REST API Developer Guide.

    To test this operation, save the payload (request body) in a file named transcript.json. Use a tool like Postman to execute the request. In the multi-part POST request, make sure the name of the part containing the binary file is the conversationId. For Value, select **File** and upload the JSON file with your sample payload.

    ![Postman test of Upload Transcripts API with Body selected and a Key highlighted with a conversationId example](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_connect_api_test.png&folder=voice_developer_guide)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    Currently, this API only supports existing closed conversations. A previous version of this API required a conversation channel, the start timestamp, and the end timestamp in the conversation object, and it required conversation participant objects. These values are now optional.

    You get the following response when the call is successful.

    ```

    ```

4.  Check the status of the upload.

    To check the status, perform a GET request to the same resource using the upload IDs.

    ```

    ```

    If the upload was successful, you see this type of response.

    ```

    ```

    If the upload failed, you see this type of response.

    ```

    ```


You can get the new conversation entries using an HTTP GET to [/connect/conversation/conversationIdentifier/entries](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_conversation_entries.htm).

## Code Examples

```
SELECT ConversationId FROM VoiceCall WHERE Id = '0LMRM000000HU8a4AG'
```

```
SELECT ConversationChannelId,ConversationIdentifier,CreatedById,CreatedDate,EndTime,Id,IsDeleted,LastModifiedById,LastModifiedDate,Name,StartTime 
       FROM Conversation WHERE Id = '0dwRMR000003M5pYAE'
```

```
SELECT AppType,ConversationId,CreatedById,CreatedDate,Id,IsDeleted,JoinedTime,LastActiveTime,LastModifiedById,LastModifiedDate,LeftTime,Name,ParticipantContext,ParticipantDisplayName,ParticipantEntityId,ParticipantKey,ParticipantRole
       FROM ConversationParticipant WHERE ConversationId = '0dwRMR000003M5pYAE'
```

```
POST https://MY_ORG_DOMAIN/services/data/v52.0/connect/conversations/upload
```

```
{"type": "conversation", "payload": {"conversationId": "ab123456-76d6-4d60-a53d-fb69d800b10c"}}
{"type": "conversationEntry", "payload": {"conversationId": "ab123456-76d6-4d60-a53d-fb69d800b10c", "id": "1", "clientSentTimestamp": 1610580214000, "clientDuration": 123432, "messageText":"Hello, how can I help you?","sender": {"appType": "AGENT", "subject": "005RM00000225FB","role": "AGENT"},"relatedRecords": ["0LQXXXXXXXXXXXX"] }}
{"type": "conversationEntry", "payload": {"conversationId": "ab123456-76d6-4d60-a53d-fb69d800b10c", "id": "2", "clientSentTimestamp": 1610580214001, "clientDuration": 123432, "messageText":"I want to return this merchandise. Can you please help?","sender": {"appType": "TELEPHONY_INTEGRATION", "subject": "END_USER","role": "END_USER"},"relatedRecords": ["0LQXXXXXXXXXXXX"]}}
```
