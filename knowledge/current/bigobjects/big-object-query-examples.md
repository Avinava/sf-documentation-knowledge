---
title: "Big Object Query Examples"
domain: bigobjects
topic: big-object-query-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.865Z
estimatedTokens: 693
keywords: [Big, Query, Examples, Understand, common, querying, cases, Customer, Degree, Filtering, Audit, Trail, Real-Time, Event, Monitoring]
---

# Big Object Query Examples

> Understand some of the common big object querying use cases.

# Big Object Query Examples

Understand some of the common big object querying use cases.

## Customer 360 Degree and Filtering

In this use case, administrators load various customer engagement data from external sources into Salesforce big objects and then process the data to enrich customer profiles in Salesforce. The goal is to store customer transactions and interactions—such as point-of-sale data, orders, and line items—in big objects, and then process and correlate that data with your core CRM data. Anchoring customer transactions and interactions with core CRM data provides a richer 360-degree view that translates to an enhanced customer experience.

Batch Apex is the best choice for automated processing on a big object or ApiEvent, ReportEvent, or ListViewEvent. This example shows how to add processing that references correlated data.

Run a batch Apex query on a big object and correlate the Contact information associated with that big object.

```

```

## Field Audit Trail

This example shows how to query FieldHistoryArchive and analyze a large number of results in a CSV format.

**Example URI**

```

```

**Example Post Request**

```

```

Use the [Get Results for a Query Job](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_asynch/query_get_job_results.htm) resource.

**Example CURL Request**

```

```

This request results in a CSV file that can be examined for auditing purposes.

## Real-Time Event Monitoring

With Real-Time Event Monitoring you can track who is accessing confidential and sensitive data in your Salesforce org. You can view information about individual events or track trends in events to swiftly identify unusual behavior and safeguard your company’s data. These features are useful for compliance with regulatory and audit requirements.

With Real-Time Events, you can monitor data accessed through API calls, report executions, and list views. The corresponding event objects are called ApiEvent, ReportEvent, and ListViewEvent. Querying these events covers many common scenarios because more than 50% of SOQL queries occur using the SOAP, REST, or Bulk APIs. Key information about each query—such as the username, user ID, rows processed, queried entities, and source IP address—is stored in the event objects. You can then run SOQL queries on the event objects to discover user activity details.

For more information, see [Real-Time Event Monitoring](https://help.salesforce.com/articleView?id=real_time_event_monitoring_overview.htm&type=5&language=en_US).

This example shows how to query and analyze an event big object using a field’s contents.

```

```

## Aggregate Queries

This example shows an alternative for aggregate queries similar to the COUNT() method.

```

```

## Code Examples

```apex
public class QueryBigObjectAndContact implements Database.Batchable<sObject> {
    private String key;
	public QueryBigObjectAndContact(String keyParam) {
        key = keyParam
    }
    
    public Iterable<SObject> start(Database.BatchableContext BC) {
		return [SELECT Big_Object_Field__c, Account__c FROM Big_Object__b WHERE Big_Object_Primary_Key > key LIMIT 50000]
    }

    public void execute(Database.BatchableContext bc, List<Big_Object__b> bos){
        // process the batch of big objects and associate them to Accounts
        Map<Id, Big_Object__b> accountIdToBigObjectMap = new Map<Id, Big_Object__b>();
        for (Big_Object__b bigObject : bos) {
            accountIdToBigObjectMap.put(bigObject.Account__c, bigObject);
            key = bigObject.Big_Object_Primariy_Key__c
        }
        Map<Id, Account> accountMap = new Map<Id, Account>(
            [SELECT Id, Name, ... FROM Account WHERE Id IN :accountIdToBigObjectMap.keySet()]
        );
        for (Id accountId : accountMap.keySet()) {
            Big_Object__b bigObject = accountIdToBigObjectMap.get(accountId);
            Account account = accountMap.get(accountId);
            // perform any actions that integrate the big object and Account
        }
    }
    public void finish(Database.BatchableContext bc){
        // You can daisy chain additional calls using the primary key of the big object to get around the 50k governor limit
        QueryBigObjectAndContact nextBatch = new QueryBigObjectAndContact(key);
        Database.executeBatch(nextBatch);
    }
}
```

```
/services/data/vXX.X/jobs/query
```

```
{
    "operation": "query",
    "query": "SELECT ParentId, FieldHistoryType, Field, Id, NewValue, OldValueFROM FieldHistoryArchive WHERE FieldHistoryType = ‘Account’ AND CreatedDate > LAST_MONTH"
}
```

```
curl --include --request GET \
--header "Authorization: Bearer token" \
--header "Accept: text/csv" \
https://instance.salesforce.com/services/data/vXX.X/jobs/query/750R0000000zxr8IAA/results ?maxRecords=50000
```

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
