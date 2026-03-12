---
title: "Work with Records"
domain: uiapi
topic: work-with-records
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.047Z
estimatedTokens: 502
keywords: [Work, Records, User, API, build, lets, users, Salesforce, Let’s, look, two, trickier, aspects, how, child]
---

# Work with Records

> Use User Interface API to build UI that lets users create, read,
      update, and delete Salesforce records. Let’s look at two of the trickier aspects of the API:
      how to work with child relationships, and how to upload binary files to
    records.

# Work with Records

Use User Interface API to build UI that lets users create, read, update, and delete Salesforce records. Let’s look at two of the trickier aspects of the API: how to work with child relationships, and how to upload binary files to records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

User Interface API resources operate on all custom objects and [supported standard objects](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.").

-   **[Get Child Records](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_child_relationships.htm)**
    User Interface API has several resources that include child records in their responses. If a record has many child relationships, a response can be huge and have a negative effect on performance. To get only the records you need, request records for specific child relationships and set the page size of the results.
-   **[Build UI for Picklists](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm)**
    User Interface API exposes properties and resources that make it easy for a client to build picklists and dependent picklists.
-   **[Upload Binary Files](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_binary_upload.htm)**
    If a record has a Base64 field, you can upload binary data to the field when you create or update a record.
-   **[Prevent Record Duplication with Idempotent Record Writes](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_idempotent.htm)**
    Use idempotent record writes to avoid duplication of records and server operations, which can occur when an app or client encounters a network connection issue.
-   **[Upload Files](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm)**
    Upload documents and images or update the file with a new version.

## Related Topics

- supported standard objects (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Get Child Records (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_child_relationships.htm)
- Build UI for Picklists (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm)
- Upload Binary Files (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_binary_upload.htm)
- Prevent Record Duplication with Idempotent Record Writes (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_idempotent.htm)
- Upload Files (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm)
