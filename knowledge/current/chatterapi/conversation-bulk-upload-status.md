---
title: "Conversation Bulk Upload Status"
domain: chatterapi
topic: conversation-bulk-upload-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.041Z
estimatedTokens: 295
keywords: [Conversation, Bulk, Upload, Status]
---

# Conversation Bulk Upload Status

> Status of the bulk upload of a conversation.

# Conversation Bulk Upload Status

Status of the bulk upload of a conversation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conversationId | String | ID of the conversation. | Small, 51.0 | 51.0 |
| errorDetail | String | Error detail for the conversation. | Small, 51.0 | 51.0 |
| failedEntryCount | Integer | Number of failed entries for the conversation. | Small, 51.0 | 51.0 |
| failedEntryIds | String[] | List of failed conversation entry IDs for the conversation. | Small, 51.0 | 51.0 |
| lastUpdated​Timestamp | Long | Timestamp for the last update of the conversation, in milliseconds. | Small, 51.0 | 51.0 |
| status | String | Status for the conversation upload request. | Small, 51.0 | 51.0 |
| successEntry​Count | Integer | Number of successful entries for the conversation. | Small, 51.0 | 51.0 |
| uploadId | String | Upload ID for the conversation. | Small, 51.0 | 51.0 |

#### See Also

-   [Conversation Bulk Upload Statuses](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_bulk_upload_statuses.htm "Collection of statuses for the bulk upload of conversations.")

## Related Topics

- Conversation Bulk Upload Statuses (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_bulk_upload_statuses.htm)
