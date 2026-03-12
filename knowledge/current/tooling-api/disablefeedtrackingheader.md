---
title: "DisableFeedTrackingHeader"
domain: tooling-api
topic: disablefeedtrackingheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:44.436Z
estimatedTokens: 199
keywords: [DisableFeedTrackingHeader, Specifies, changes, made, current, call, tracked, feeds., API, Calls, Fields, Sample, Code—Java]
---

# DisableFeedTrackingHeader

> Specifies that changes made in the current call
      are tracked in feeds.

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

## Code Examples

```apex
public void disableFeedTrackingHeaderSample() {
  try {
    // Insert a large number of accounts.
    SObject[] sObjects = new SObject[500];
    for (int i = 0; i < 500; i++)  {
       Account a = new Account();
       a.setName("my-account-" + i);
       sObjects[i] = a;
    }
    // Set the SOAP header to disable feed tracking to avoid generating a
    // large number of feed items because of this bulk operation.
    connection.setDisableFeedTrackingHeader(true);
    // Perform the bulk create. This won't result in 500 feed items, which
    // would otherwise be generated without the DisableFeedTrackingHeader.
    SaveResult[] sr = connection.create(sObjects);  
    for (int i = 0; i < sr.length; i++) { 
      if (sr[i].isSuccess()) {
        System.out.println("Successfully created account with id: " + 
          sr[i].getId() + ".");
      } else {
        System.out.println("Error creating account: " + 
          sr[i].getErrors()[0].getMessage());
      }
    }
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```
