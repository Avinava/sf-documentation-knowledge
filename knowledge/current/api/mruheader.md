---
title: "MruHeader"
domain: api
topic: mruheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.730Z
estimatedTokens: 537
keywords: [MruHeader, API, version, 7.0, later, upsert, calls, recently, MRU, items, Recent, sidebar, Salesforce, user, unless]
---

# MruHeader

> In API version 7.0 and later, the create(), update(), and upsert() calls do not
      update the list of most recently used (MRU) items in the Recent Items section of the sidebar
      in the Salesforce user interface unless this header is used. Be advised that using this header
      to update the 

# MruHeader

In API version 7.0 and later, the [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data."), [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data."), and [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.") calls do not update the list of most recently used (MRU) items in the Recent Items section of the sidebar in the Salesforce user interface unless this header is used. Be advised that using this header to update the Recent Items list may negatively impact performance.

## API Calls

create(), [merge()](atlas.en-us.api.meta/api/sforce_api_calls_merge.htm "Combines up to three records of the same type into one record. The input is an array of MergeRequest elements, each of which specifies the records to combine. The output is a MergeResult object that contains information about the result of the merge."), [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions."), [retrieve()](atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm "Retrieves one or more records based on the specified IDs."), update(), upsert()

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| updateMru | boolean | Indicates whether to update the list of most recently used items (true) or not (false).For retrieve(), if the result has only one row, the MRU is updated to the ID of the retrieve result.For query(), if the result has only one row and the ID field is selected, the MRU is updated to the ID of the query result. |

## Sample Code—Java

This sample turns on the MRU list update option by setting the MruHeader to true. Next, it creates an account.

```

```

## Code Examples

```apex
public void mruHeaderSample() {
  connection.setMruHeader(true);
  Account account = new Account();
  account.setName("This will be in the MRU");
  try {
    SaveResult[] sr = connection.create(new SObject[]{account});
    System.out.println("ID of account added to MRU: " + 
      sr[0].getId());
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm)
- merge() (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- retrieve() (atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm)
