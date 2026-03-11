---
title: "Get Event Monitoring Content from a Record"
domain: rest-api
topic: get-event-monitoring-content-from-a-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:24.888Z
keywords: [Get, Event, Monitoring, Content, Record]
---

# Get Event Monitoring Content from a Record

# Get Event Monitoring Content from a Record

Use the [sObject Blob Retrieve](atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_retrieve.htm#resources_sobject_blob_retrieve "Gets the specified blob field from an individual record and returns it as binary data. Only certain standard objects have blob fields, such as Attachment, ContentNote, ContentVersion, Document, Folder, and Note.") resource to retrieve BLOB data for a given record.

Example

You can use REST API to retrieve BLOB data for event monitoring. Use a GET request similar to this:

```

```

Example response body

Event monitoring content is returned in binary form. Note that the response content type won’t be JSON or XML because the returned data is binary.

```

```