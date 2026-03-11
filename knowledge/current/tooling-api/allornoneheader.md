---
title: "AllOrNoneHeader"
domain: tooling-api
topic: allornoneheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:46:37.073Z
keywords: [AllOrNoneHeader, API, Calls, Fields, Sample, Code—Java]
---

# AllOrNoneHeader

# AllOrNoneHeader

Allows a call to roll back all changes unless all records are processed successfully.

Without the AllOrNoneHeader header, records without errors are committed, while records with errors are marked as failed in the call results. This header is available in API version 20.0 and later.

Even if the header is enabled, it's still necessary to inspect the success field in the call result for each record to identify records with errors. Each success field contains true or false indicating whether the call was processed successfully.

If there is an error associated with at least one record, the errors field in the call result for the record gives more information on the error. If other records in the same call have no errors, their errors fields indicate that they were rolled back due to other errors.

## API Calls

create(), delete(), undelete(), update(), upsert()

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| allOrNone | boolean | If true, any failed records in a call cause all changes for the call to be rolled back. Record changes aren't committed unless all records are processed successfully.The default is false. Some records can be processed successfully while others are marked as failed in the call results. |

## Sample Code—Java

This sample shows how to use the AllOrNoneHeader. It attempts to create two contacts. The second contact doesn’t have all required fields set and causes a failure on creation. Next, the sample sets the allOrNone field to true, and then attempts to create the contacts. Creating one of the contacts results in an error, so the entire transaction is rolled back and no contacts are created.

```

```