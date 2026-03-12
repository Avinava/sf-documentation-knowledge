---
title: "Quip Linked Entity"
domain: chatterapi
topic: quip-linked-entity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.750Z
estimatedTokens: 213
keywords: [Quip, Linked, Entity, Shared, document]
---

# Quip Linked Entity

> Shared entity related to a Quip document.

# Quip Linked Entity

Shared entity related to a Quip document.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| linkedEntity | GroupRecord SummaryUser Summary | Information about the user, record, or group the file is shared with. | Small, 49.0 | 49.0 |
| linkedEntity​SharingType | String | Type of sharing permission. Values are:C—CollaboratorI—Determined by locationThis type generally occurs when the sharing permission is not set on the file, but on the library instead. This value is also used when the context user is the owner of the file.N—No accessV—Viewer | Small, 49.0 | 49.0 |

#### See Also

-   [Quip Content Document Link](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_quip_content_document_link.htm "Content document link related to a Quip document.")

## Related Topics

- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Quip Content Document Link (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_quip_content_document_link.htm)
