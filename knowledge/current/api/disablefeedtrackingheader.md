---
title: "DisableFeedTrackingHeader"
domain: api
topic: disablefeedtrackingheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.706Z
estimatedTokens: 638
keywords: [DisableFeedTrackingHeader, changes, made, current, call, tracked, feeds, API, Calls, Sample, Code—Java]
---

# DisableFeedTrackingHeader

> Specifies that changes made in the current call
      are tracked in feeds.

# DisableFeedTrackingHeader

Specifies that changes made in the current call are tracked in feeds.

Use this header if you want to process many records without tracking the changes in various feeds related to the records. This header is available if the Chatter feature is enabled for your organization.

## API Calls

convertLead(), [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data."), [delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data."), [merge()](atlas.en-us.api.meta/api/sforce_api_calls_merge.htm "Combines up to three records of the same type into one record. The input is an array of MergeRequest elements, each of which specifies the records to combine. The output is a MergeResult object that contains information about the result of the merge."), [process()](atlas.en-us.api.meta/api/sforce_api_calls_process.htm "Submits an array of approval process instances for approval, or processes an array of approval process instances to be approved, rejected, or removed. For more information, see Set Up an Approval Process in Salesforce Help."), [undelete()](atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm "Undeletes records from the Recycle Bin."), [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data."), [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.")

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| disableFeedTracking | boolean | If true, the changes made in the current call are not tracked in feeds.The default is false. |

## Sample Code—Java

This sample shows how to use the DisableFeedTrackingHeader. It sets this header to true to disable feed tracking and then creates many account records in bulk.

```

```

#### See Also

-   [NewsFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_customobject__feed.htm "NewsFeed - HTML (New Window)")

-   [EntitySubscription](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_entitysubscription.htm "EntitySubscription - HTML (New Window)")

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

## Related Topics

- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- delete() (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
- merge() (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
- process() (atlas.en-us.api.meta/api/sforce_api_calls_process.htm)
- undelete() (atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm)
