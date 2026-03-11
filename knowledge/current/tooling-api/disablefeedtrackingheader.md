---
title: "DisableFeedTrackingHeader"
domain: tooling-api
topic: disablefeedtrackingheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:46:37.081Z
keywords: [DisableFeedTrackingHeader, API, Calls, Fields, Sample, Code—Java]
---

# DisableFeedTrackingHeader

# DisableFeedTrackingHeader

Specifies that changes made in the current call are tracked in feeds.

Use this header if you want to process many records without tracking the changes in various feeds related to the records. This header is available if the Chatter feature is enabled for your organization.

## API Calls

convertLead(), create(), delete(), merge(), process(), undelete(), update(), upsert()

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| disableFeedTracking | boolean | If true, the changes made in the current call are not tracked in feeds.The default is false. |

## Sample Code—Java

This sample shows how to use the DisableFeedTrackingHeader. It sets this header to true to disable feed tracking and then creates many account records in bulk.

```

```