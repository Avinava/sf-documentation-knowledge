---
title: "Polling for Changes"
domain: api
topic: polling-for-changes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.769Z
estimatedTokens: 954
keywords: [Polling, Changes, Client, applications, typically, poll, changed, data, periodically, involves, considerations]
---

# Polling for Changes

> Client applications typically poll for changed data periodically. Polling involves the
   following considerations:

# Polling for Changes

Client applications typically poll for changed data periodically. Polling involves the following considerations:

-   The polling frequency depends on business requirements for how quickly changes in your organization’s Salesforce data need to be reflected in the local copy. Some client applications might poll once a day to retrieve changes, while other client applications might poll every five minutes to achieve closer accuracy.
-   Deleted records are written to a delete log, which [getDeleted()](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") accesses. A background process that runs every two hours purges records that have been in an organization's delete log for more than two hours if the number of records is above a certain limit. Starting with the oldest records, the process purges delete log entries until the delete log is back below the limit. This is done to protect Salesforce from performance issues related to massive delete logs. The limit is calculated using this formula:

    ```

    ```

    For example, an organization with 1,000 licenses could have up to 5,000,000 (five million) records in the delete log before any purging took place. If purging has been performed before your [getDeleted()](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") call is executed, an INVALID\_REPLICATION\_DATE error is returned. If you get this exception, you should do a full pull of the table.

-   The API truncates the seconds portion of dateTime values. For example, if a client application submits a timespan between 12:30:15 and 12:35:15 (Coordinated Universal Time (UTC) time), then the API retrieves information about items that have changed between 12:30:00 and 12:35:00 (UTC), inclusive.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

    #### Note

    Development tools differ in the way that they handle time data. Some development tools report the local time, while others report only the Coordinated Universal Time (UTC) time. To determine how your development tool handles time values, refer to its documentation.

-   We recommend polling no more frequently than every five minutes. There are built in controls to prevent errant applications from invoking the data replication API calls too frequently.
-   Client applications should save the timespan used in previous data replication API calls so that the application knows the last time period for which data replication was successfully completed.
-   To ensure data integrity on the local copy of the data, a client application needs to capture all of the relevant changes during polling—even if it requires processing data redundantly to ensure that there are no gaps. Your client application can contain business logic to skip processing objects that have already been integrated into your local data.
-   Gaps can also occur if the client application somehow fails to poll the data as expected (for example, due to a hardware crash or network connection failure). Your client application can contain business logic that determines the last successful replication and polls for the next consecutive timespan.
-   If for any reason the local data is compromised, your client application might also provide business logic for rebuilding the local data from scratch.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

You can now use [Outbound Messaging](atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging.htm) to trigger actions instead of polling for them.

## Code Examples

```
5000 * number of licenses in the organization
```

## Related Topics

- getDeleted() (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm)
- Outbound Messaging (atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging.htm)
