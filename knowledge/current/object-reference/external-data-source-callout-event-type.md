---
title: "External Data Source Callout Event Type"
domain: object-reference
topic: external-data-source-callout-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.164Z
estimatedTokens: 1175
keywords: [External, Data, Source, Callout, Event, events, represent, callouts, via, Salesforce, Connect, adapters, Amazon, DynamoDB, Athena]
---

# External Data Source Callout Event Type

> External Data Source Callout events represent external data callouts
         via the Salesforce Connect adapters for Amazon DynamoDB and Amazon Athena. This event
      type is available in the EventLogFile object in API version 56.0 and later.

# External Data Source Callout Event Type

External Data Source Callout events represent external data callouts via the Salesforce Connect adapters for Amazon DynamoDB and Amazon Athena. This event type is available in the EventLogFile object in API version 56.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ACTION | TypeStringDescriptionAction performed by the callout.Possible ValuesFor Amazon DynamoDB data source:queryinsertdeleteupdateupsertFor Amazon Athena data source:query |
| DATA_SOURCE_NAME | TypeStringDescriptionName of the external data source being accessed. |
| EVENT_TYPE | TypeStringDescriptionType of event. Value is always ExternalDataSourceCallout. |
| EXTERNAL_OBJECT | TypeStringDescriptionName of the external object being accessed. |
| FETCH_MS | TypeNumberDescriptionHow long it took (in milliseconds) to retrieve the query results from the external data source.Example127 |
| FILTER | TypeTextDescriptionField expressions to filter which rows to return. Corresponds to WHERE in queries. |
| LIMIT | TypeNumberDescriptionMaximum number of rows to return for a query. Corresponds to Limit parameter in ExecuteStatement operation for an Amazon DynamoDB data source. |
| MESSAGE | TypeStringDescriptionError or warning message associated with the failed call. |
| NEXT_LINK | TypeStringDescriptionNext link that the callout used to request a subsequent page of rows. A next link is provided in a previous response when the response includes only part of the result set.For requests to AWS data sources, this field stores the nextToken parameter that contains a unique hash string. |
| OFFSET | TypeNumberDescriptionNumber of rows to skip when paging through a result set. Corresponds to OFFSET in queries to Amazon Athena. This field is not supported by queries to Amazon DynamoDB. |
| OPERATION | TypeStringDescriptionThe operation that’s being performed. |
| ORDERBY | TypeStringDescriptionField or column to use for sorting query results, and whether to sort the results in ascending (default) or descending order. Corresponds to ORDER BY in queries.ExampleCountry ASCCustomerName DESC |
| ORGANIZATION_ID | TypeIdDescription15-character ID of the organization.Example00D000000000123 |
| PARENT_CALLOUT | TypeStringDescriptionIf the callout requested a subsequent page of rows, this field identifies the initial callout whose request resulted in the multi-page result set.Example4EoZtuBzzRIXSk-ysRdf1F-1 |
| PROVIDER_TYPE | TypeStringDescriptionWhether the callout was made by Salesforce Connect adapter for Amazon DynamoDB or Amazon Athena.Possible ValuesamazonDynamodbamazonAthena |
| REQUEST_ID | TypeStringDescriptionUnique ID of a transaction. A transaction can contain one or more events. All events in a transaction have the same REQUEST_ID.Example4A13-HSKv3CKs-0FKfceaV |
| RESPONSE_SIZE | TypeNumberDescriptionThe size of the callout response, in bytes. |
| ROWS_FETCHED | TypeNumberDescriptionNumber of records fetched by the callout. The records fetched by a callout can be a subset of a large result set.Example200 |
| SEARCH | TypeStringDescriptionSearch query string. |
| SELECT | TypeStringDescriptionComma-separated list of fields being queried. Corresponds to SELECT in queries.To query, Salesforce Connect adapter uses PartiQL with Amazon DynamoDB and SQL with Amazon Athena.ExampleCustomerID,OrderDate,OrderID,ShipCity,ShipCountry |
| STATUS | TypeBooleanDescriptionWhether the query was successful.Possible Values1—Success0—Failed |
| STATUS_CODE | TypeNumberDescriptionThe HTTP response status code for the request. |
| TABLE_NAME | TypeStringDescriptionName of the table being queried in the AWS data source. |
| THROUGHPUT | TypeNumberDescriptionNumber of records retrieved in one second.Example3025.67 |
| TIMESTAMP | TypeDateTimeDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| TOTAL_MS | TypeNumberDescriptionHow long it took (in milliseconds) to prepare and execute the query and to retrieve the query results. |
| USER_ID | TypeIdDescription15-character ID of the user accessing the external data source.Example00530000009M943 |
