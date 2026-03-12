---
title: "Use Batch Apex Queries With Real-Time Event Monitoring"
domain: securityImplGuide
topic: use-batch-apex-queries-with-real-time-event-monitoring
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.007Z
estimatedTokens: 53
keywords: [Batch, Apex, Queries, Real-Time, Event, Monitoring, Bulk, API, query, events]
---

# Use Batch Apex Queries With Real-Time Event Monitoring

> Use Bulk API and batch Apex to query real-time events.

# Use Batch Apex Queries With Real-Time Event Monitoring

Use Bulk API and batch Apex to query real-time events.

This example shows how to query and analyze an event HBPO by using a field’s contents.

```

```

## Code Examples

```apex
public class EventMatchesObject implements Database.Batchable<sObject> {
    private String lastEventDate;

    public EventMatchesObject(String lastEventDateParam) {
        lastEventDate = lastEventDateParam;
    }

    public Iterable<SObject> start(Database.BatchableContext bc) {
        return [SELECT EventDate, EventIdentifier, QueriedEntities, SourceIp, Username, UserAgent FROM ApiEvent WHERE EventDate > lastEventDate LIMIT 50000]
    }

    public void execute(Database.BatchableContext bc, List<ApiEvent> events){
        // Process this list of entities if a certain attribute matches
        for (ApiEvent event: events) {
            String objectString = 'Patent__c';
            String eventIdentifier = event.EventIdentifier;
            if (eventIdentifier.contains(objectString) {
                // Perform actions on the event that contains 'Patent__c'
            }
            lastEventDate = format(event.EventDate);
        }
    }

    public void finish(Database.BatchableContext bc){         
        // You can daisy chain additional calls using EventDate or other filter fields to get around the 50k governor limit
        EventMatchesObject nextBatch = new EventMatchesObject(lastEventDate);
        Database.executeBatch(nextBatch);
    }
}
```
