---
title: "External Cross-Org Callout Event Type"
domain: object-reference
topic: external-cross-org-callout-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.139Z
estimatedTokens: 1309
keywords: [External, Cross-Org, Callout, Event, events, represent, data, callouts, via, adapter, Salesforce, Connect, EventLogFile, API, version]
---

# External Cross-Org Callout Event Type

> External Cross-Org Callout events represent external data callouts
         via the cross-org adapter for Salesforce Connect. This event type is available in the
      EventLogFile object in API version 40.0 and later.

# External Cross-Org Callout Event Type

External Cross-Org Callout events represent external data callouts via the cross-org adapter for Salesforce Connect. This event type is available in the EventLogFile object in API version 40.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

For the cross-org adapter for Salesforce Connect, event monitoring currently doesn’t track search callouts.

## Fields

| Field | Details |
| --- | --- |
| ACTION | TypeStringDescriptionAction performed by the callout.Possible Valuesqueryupsertdelete |
| ENTITY | TypeStringDescriptionName of the external object being accessed.ExampleOrder |
| EVENT_TYPE | TypeStringDescriptionType of event. Value is always ExternalCrossOrgCallout. |
| EXECUTE_MS | TypeNumberDescriptionHow long it took (in milliseconds) for Salesforce to prepare and execute the query. Available in API version 42.0 and later.Example1 |
| FETCH_MS | TypeNumberDescriptionHow long it took (in milliseconds) to retrieve the query results from the external system. Available in API version 42.0 and later.Example452 |
| FILTER | TypeTextDescriptionField expressions to filter which rows to return. Corresponds to WHERE in SOQL queries.ExampleWHERE CustomerId='123456' |
| HAVING | TypeTextDescriptionReserved for future use. |
| LIMIT | TypeNumberDescriptionMaximum number of rows to return for a query. Corresponds to LIMIT in SOQL queries.Example200 |
| MESSAGE | TypeStringDescriptionError or warning message associated with the failed query callout. Value is always empty for upsert and delete callouts.ExampleSystem.UnexpectedException: Query is either selecting too many fields or the filter conditions are too complicated |
| OFFSET | TypeNumberDescriptionNumber of rows to skip when paging through a result set.Corresponds to OFFSET in SOQL queries. If a SOQL query doesn’t define an OFFSET, the value is -1.Example0 (default) |
| ORDERBY | TypeStringDescriptionField or column to use for sorting query results, and whether to sort the results in ascending (default) or descending order. Corresponds to ORDER BY in SOQL queries.ExamplesORDER BY ShipNameORDER BY ShipName DESC |
| ORGANIZATION_ID | TypeIdDescription15-character ID of the organization.Example00D000000000123 |
| REQUEST_ID | TypeStringDescriptionUnique ID of a transaction. A transaction can contain one or more events. All events in a transaction have the same REQUEST_ID.Example4A13-HSKv3CKs-0FKfceaV |
| ROWS | TypeNumberDescriptionTotal number of records in the result set. Value is always 0 for upsert and delete callouts.Example200 |
| ROWS_FETCHED | TypeNumberDescriptionReserved for future use. |
| SELECT | TypeStringDescriptionComma-separated list of fields being queried. Corresponds to SELECT in SOQL queries.ExampleSELECT Id,Name,CustomerID,OrderDate |
| STATUS | TypeBooleanDescriptionWhether the query was successful. Value is always empty for upsert and delete callouts.Possible Values1—Success0—Failed |
| SUBQUERIES | TypeNumberDescriptionThe number of subqueries that the query is split into. |
| THROUGHPUT | TypeNumberDescriptionReserved for future use. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| TOTAL_MS | TypeNumberDescriptionHow long it took (in milliseconds) to prepare and execute the query and to retrieve the query results.Example453 |
| USER_ID | TypeIdDescription15-character ID of the user accessing the external system.Example00530000009M943 |
| USING_MRU | TypeBooleanDescriptionReserved for future use. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
