---
title: "Relate ENS Sent Events to Engagement Events"
domain: mc-apis
topic: relate-ens-sent-events-to-engagement-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.672Z
estimatedTokens: 383
keywords: [Relate, ENS, Sent, Events, Engagement, key, objective, Event, Notification, Service, normalize, data, correlating, transactional, API]
---

# Relate ENS Sent Events to Engagement Events

> A key objective of the Event Notification Service is to normalize data from sent events by correlating  the transactional API request messageKey (the ID you use to specify a unique message) to an engagement event.  For this example, we will be using SQL Server, but the way you implement this in your

# Relate ENS Sent Events to Engagement Events

A key objective of the Event Notification Service is to normalize data from sent events by correlating the transactional API request messageKey (the ID you use to specify a unique message) to an engagement event. For this example, we will be using SQL Server, but the way you implement this in your own system will depend on your event storage design.

1.  Create a table to store sent event
2.  Create a table to store engagement events
3.  With both send events and engagement events, extract the composite data and concatenate the jobId, batchId and subscriberId.
    ```
    For example, if your composite object looks like this "composite":{ "jobId": "2001070","batchId": "4153","listId": "44609","subscriberId": "1251508322"}, the resultant concatenation could look like 2001070.4153.1251508322.
    ```

4.  Store the concatenated value in its own column on each table, such as "SFMC\_CompositeKey".
5.  Join your data on the concatenated values to normalize the send events to your engagement events. For example, if Open engagement events are stored in a table named "EmailOpen" and Sent events are stored in a table named "EmailSent", you can find the related send and engagement events by using the following pseudo-query.

```
SELECT
  EmailSent.messageKey as 'LocalIdentifier',
  EmailSent.SFMC_CompositeKey as 'SFMCIdentifier',
  EmailOpen.timestampUTC as 'OpenDate_UTC'
FROM
  EmailSent
JOIN
  EmailOpen
  ON EmailSent.SFMC_CompositeKey = EmailOpen.SFMC_CompositeKey
```
