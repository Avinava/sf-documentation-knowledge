---
title: "Query Event Monitoring Data with REST"
domain: rest-api
topic: query-event-monitoring-data-with-rest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.971Z
estimatedTokens: 123
keywords: [Query, Event, Monitoring, Data, REST, resource, retrieve, field, values, record., Specify, fields, want, GET, resource.]
---

# Query Event Monitoring Data with REST

> Use the Query resource
            to retrieve field values from a record. Specify the fields you want to retrieve in the
            fields parameter and use the GET method of the
            resource.

# Query Event Monitoring Data with REST

Use the [Query](atlas.en-us.api_rest.meta/api_rest/resources_query.htm "Runs the specified SOQL query.") resource to retrieve field values from a record. Specify the fields you want to retrieve in the fields parameter and use the GET method of the resource.

You can use REST API to query event monitoring data. To retrieve event monitoring records based on LogDate and EventType, use a GET request like this:

```

```

Example raw response

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/query?q=SELECT+Id+,+EventType+,+LogFile+
,+LogDate+,+LogFileLength+FROM+EventLogFile+WHERE+
LogDate+>+Yesterday+AND+EventType+=+'API' -H "Authorization: Bearer token"
```

```
{ 
   "totalSize" : 4,
   "done" : true,
   "records" : [ {
     "attributes" : {
       "type" : "EventLogFile",
       "url" : "/services/data/v66.0/sobjects/EventLogFile/0ATD000000001bROAQ"     },
     "Id" : "0ATD000000001bROAQ",
     "EventType" : "API",
     "LogFile" : "/services/data/v66.0/sobjects/EventLogFile/0ATD000000001bROAQ/LogFile",
     "LogDate" : "2014-03-14T00:00:00.000+0000",
     "LogFileLength" : 2692.0
    }, {
     "attributes" : {
       "type" : "EventLogFile",
       "url" : "/services/data/v66.0/sobjects/EventLogFile/0ATD000000001SdOAI"     },
       "Id" : "0ATD000000001SdOAI",
       "EventType" : "API",
       "LogFile" : "/services/data/v66.0/sobjects/EventLogFile/0ATD000000001SdOAI/LogFile",
       "LogDate" : "2014-03-13T00:00:00.000+0000",
       "LogFileLength" : 1345.0
   }, {
       "attributes" : {
        "type" : "EventLogFile",
        "url" : "/services/data/v66.0/sobjects/EventLogFile/0ATD000000003p1OAA"     },
        "Id" : "0ATD000000003p1OAA",
        "EventType" : "API",
        "LogFile" : "/services/data/v66.0/sobjects/EventLogFile/0ATD000000003p1OAA/LogFile",
        "LogDate" : "2014-06-21T00:00:00.000+0000",
        "LogFileLength" : 605.0   },
 {     "attributes" : {
       "type" : "EventLogFile",
       "url" : "/services/data/v66.0/sobjects/EventLogFile/0ATD0000000055eOAA"     },
       "Id" : "0ATD0000000055eOAA",
       "EventType" : "API",
       "LogFile" : "/services/data/v66.0/sobjects/EventLogFile/0ATD0000000055eOAA/LogFile",
       "LogDate" : "2014-07-03T00:00:00.000+0000",
       "LogFileLength" : 605.0
     } ]
}
```

## Related Topics

- Query (atlas.en-us.api_rest.meta/api_rest/resources_query.htm)
