---
title: "External OData Callout Event Type"
domain: object-reference
topic: external-odata-callout-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.179Z
estimatedTokens: 1689
keywords: [External, OData, Callout, Event, events, represent, data, callouts, via, 2.0, 4.0, adapters, Salesforce, Connect, EventLogFile]
---

# External OData Callout Event Type

> External OData Callout events represent external data callouts via
         the OData 2.0 and OData 4.0 adapters for Salesforce Connect. This event type is
      available in the EventLogFile object in API version 40.0 and later.

# External OData Callout Event Type

External OData Callout events represent external data callouts via the OData 2.0 and OData 4.0 adapters for Salesforce Connect. This event type is available in the EventLogFile object in API version 40.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ACTION | TypeStringDescriptionAction performed by the callout.Possible Valuesqueryupsertdelete |
| BYTES | TypeNumberDescriptionSize of the result set in bytes. |
| ENTITY | TypeStringDescriptionName of the external object being accessed.ExampleOrder |
| EVENT_TYPE | TypeStringDescriptionType of event. Value is always ExternalODataCallout. |
| EXECUTE_MS | TypeNumberDescriptionHow long it took (in milliseconds) for Salesforce to prepare and execute the query. Available in API version 42.0 and later.Example21 |
| EXPAND | TypeStringDescriptionReserved for future use. |
| FETCH_MS | TypeNumberDescriptionHow long it took (in milliseconds) to retrieve the query results from the external system. Available in API version 42.0 and later.Example127 |
| FILTER | TypeTextDescriptionField expressions to filter which rows to return. Corresponds to WHERE in SOQL queries and $filter in OData queries.ExampleCustomerID eq 12345 |
| LIBRARY | TypeStringDescriptionReserved for future use. |
| LIMIT | TypeNumberDescriptionMaximum number of rows to return for a query. Corresponds to LIMIT in SOQL queries and $top in OData queries.Example200 |
| MESSAGE | TypeStringDescriptionError or warning message associated with the failed call.ExampleThe OData query result was too large, so the external data didn’t load. |
| NEXT_LINK | TypeStringDescriptionOData next link that the callout used to request a subsequent page of rows. A next link is provided in a previous response from the OData producer when the response includes only part of the result set.Available in API version 42.0 and later. However, this field isn’t supported for the OData 2.0 adapter on orgs created before Spring ’18.Examplehttp://services.example.org/Warehouse.svc/Orders?$count=true&​$select=CustomerID,OrderID,RequiredDate,ShippedDate&$top=301&​$skiptoken=10447 |
| OFFSET | TypeNumberDescriptionNumber of rows to skip when paging through a result set.Corresponds to OFFSET in SOQL queries and $skip in OData queries.Example10 |
| ORDERBY | TypeStringDescriptionField or column to use for sorting query results, and whether to sort the results in ascending (default) or descending order. Corresponds to ORDER BY in SOQL queries and $orderby in OData queries.ExamplesShipNameShipName desc |
| ORGANIZATION_ID | TypeIdDescription15-character ID of the organization.Example00D000000000123 |
| PARENT_CALLOUT | TypeStringDescriptionIf the callout requested a subsequent page of rows, this field identifies the initial callout whose request resulted in the multi-page result set.Available in API version 42.0 and later. However, this field isn’t supported for the OData 2.0 adapter on orgs created before Spring ’18.Example4EoZtuBzzRIXSk-ysRdf1F-1 |
| PROVIDER_TYPE | TypeStringDescriptionWhether the OData 2.0 or OData 4.0 adapter made the callout.Possible ValuesOData—OData 2.0 adapterOData4—OData 4.0 adapter |
| RATE_LIMIT_USAGE_PERCENT | TypeNumberDescriptionConsumed percentage of the org’s limit of OData callouts per hour.Example2.5—2.5% of the hourly callout limit has been consumed |
| REQUEST_ID | TypeStringDescriptionUnique ID of a transaction. A transaction can contain one or more events. All events in a transaction have the same REQUEST_ID.Example4A13-HSKv3CKs-0FKfceaV |
| REQUESTS | TypeNumberDescriptionReserved for future use. |
| ROWS | TypeNumberDescriptionTotal number of records in the result set. Available in API version 42.0 and later.Example830 |
| ROWS_FETCHED | TypeNumberDescriptionNumber of records fetched by the callout. The records fetched by a callout can be a subset of a large result set.Available in API version 42.0 and later. However, this field isn’t supported for the OData 2.0 adapter on orgs created before Spring ’18.Example200 |
| SEARCH | TypeStringDescriptionSearch query string. Corresponds to condition expressions in SOSL.Examplecontains(CustomerID,'10248') eq true or contains(ShipName,'10248') eq true |
| SELECT | TypeStringDescriptionComma-separated list of fields being queried. Corresponds to SELECT in SOQL queries and $select in OData queries.ExampleCustomerID,OrderDate,OrderID,ShipCity,ShipCountry |
| STATUS | TypeBooleanDescriptionWhether the query was successful.Possible Values1—Success0—Failed |
| THROUGHPUT | TypeNumberDescriptionNumber of records retrieved in one second.Available in API version 42.0 and later. However, this field isn’t supported for the OData 2.0 adapter on orgs created before Spring ’18.Example3025.67 |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| TOTAL_MS | TypeNumberDescriptionHow long it took (in milliseconds) to prepare and execute the query and to retrieve the query results. |
| USER_ID | TypeIdDescription15-character ID of the user accessing the external system.Example00530000009M943 |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
