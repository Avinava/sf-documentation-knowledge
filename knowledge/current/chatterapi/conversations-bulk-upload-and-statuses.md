---
title: "Conversations, Bulk Upload and Statuses"
domain: chatterapi
topic: conversations-bulk-upload-and-statuses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.805Z
estimatedTokens: 364
keywords: [Conversations, Bulk, Upload, Statuses, uploads]
---

# Conversations, Bulk Upload and Statuses

> Upload bulk conversations and get the statuses of the
    uploads.

# Conversations, Bulk Upload and Statuses

Upload bulk conversations and get the statuses of the uploads.

Resource

```

```

Available version

51.0

HTTP methods

GET, POST

Request parameters for GET

Use GET to get the statuses of bulk conversation uploads.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| uploadIds | String[] | Comma-separated list of up to 100 upload IDs. | Required | 51.0 |

Response body for GET

[Conversation Bulk Upload Statuses](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_bulk_upload_statuses.htm "Collection of statuses for the bulk upload of conversations.")

Request parameters for POST

Use POST to bulk upload conversations up to 512 MB.

To upload a binary file, you must send it in a multipart/form-data request. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files)

For a detailed example of bulk conversation upload, see [Upload and Update Transcripts with Connect REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_connect_overview.htm).

Response body for POST

[Conversation Bulk Uploads](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_bulk_uploads.htm "List of conversation bulk upload results.")

## Code Examples

```
/connect/conversations/upload
```

## Related Topics

- Conversation Bulk Upload Statuses (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_bulk_upload_statuses.htm)
- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Conversation Bulk Uploads (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_bulk_uploads.htm)
