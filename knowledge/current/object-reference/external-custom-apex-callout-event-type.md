---
title: "External Custom Apex Callout Event Type"
domain: object-reference
topic: external-custom-apex-callout-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.151Z
estimatedTokens: 1298
keywords: [External, Custom, Apex, Callout, Event, events, represent, data, callouts, via, adapters, Salesforce, Connect, EventLogFile, API]
---

# External Custom Apex Callout Event Type

> External Custom Apex Callout events represent external data callouts
         via custom adapters for Salesforce Connect. This event type is available in the
      EventLogFile object in API version 40.0 and later.

# External Custom Apex Callout Event Type

External Custom Apex Callout events represent external data callouts via custom adapters for Salesforce Connect. This event type is available in the EventLogFile object in API version 40.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ACTION | TypeStringDescriptionAction performed by the callout.Possible Valuesqueryupsertdelete |
| ENTITY | TypeStringDescriptionName of the external object being accessed.ExampleOrder |
| EVENT_TYPE | TypeStringDescriptionType of event. Value is always ExternalCustomApexCallout. |
| EXECUTE_MS | TypeNumberDescriptionHow long it took (in milliseconds) for Salesforce to prepare and execute the query. Available in API version 42.0 and later.Example102 |
| FETCH_MS | TypeNumberDescriptionHow long it took (in milliseconds) to retrieve the query results from the external system. Available in API version 42.0 and later.Example607 |
| FILTER | TypeTextDescriptionField expressions to filter which rows to return. Corresponds to WHERE in SOQL queries.ExampleFilter:[columnName=CustomerID, columnValue=537, subfilters=null, tableName=Order, type=EQUALS] |
| LIMIT | TypeNumberDescriptionMaximum number of rows to return for a query. Corresponds to LIMIT in SOQL queries.Example200 |
| MESSAGE | TypeStringDescriptionError or warning message associated with the failed call.ExampleSystem.UnexpectedException: Query is either selecting too many fields or the filter conditions are too complicated |
| OFFSET | TypeNumberDescriptionNumber of rows to skip when paging through a result set. Corresponds to OFFSET in SOQL queries.Example0 (default) |
| ORDERBY | TypeStringDescriptionField or column to use for sorting query results, and whether to sort the results in ascending (default) or descending order. Corresponds to ORDER BY in SOQL queries.Examples(Order:[columnName=OrderDate, direction=ASCENDING, tableName=Order]) |
| ORGANIZATION_ID | TypeIdDescription15-character ID of the organization.Example00D000000000123 |
| REQUEST_ID | TypeStringDescriptionUnique ID of a transaction. A transaction can contain one or more events. All events in a transaction have the same REQUEST_ID.Example4A13-HSKv3CKs-0FKfceaV |
| ROWS | TypeNumberDescriptionTotal number of records in the result set.The value is always -1 if the custom adapter’s DataSource.Provider class doesn’t declare the QUERY_TOTAL_SIZE capability.Example200 |
| ROWS_FETCHED | TypeNumberDescriptionNumber of rows fetched by the callout. Available in API version 42.0 and later.Example200 |
| SELECT | TypeStringDescriptionComma-separated list of fields being queried. Corresponds to SELECT in SOQL queries.Example(ColumnSelection:[aggregation=NONE, columnName=Name, tableName=Order], ColumnSelection:[aggregation=NONE, columnName=CustomerID, tableName=Order], ColumnSelection:[aggregation=NONE, columnName=OrderDate, tableName=Order]) |
| STATUS | TypeBooleanDescriptionWhether the query was successful.Possible Values1—Success0—FailedEmpty—Failed with no logged status or message |
| THROUGHPUT | TypeNumberDescriptionNumber of records retrieved in one second.Example302.57 |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| SUBQUERIES | TypeNumberDescriptionReserved for future use. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| TOTAL_MS | TypeNumberDescriptionHow long it took (in milliseconds) to prepare and execute the query and to retrieve the query results.Example709 |
| USER_ID | TypeIdDescription15-character ID of the user accessing the external system.Example00530000009M943 |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
