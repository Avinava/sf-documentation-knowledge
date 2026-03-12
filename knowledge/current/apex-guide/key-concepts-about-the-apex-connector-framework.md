---
title: "Key Concepts About the Apex Connector Framework"
domain: apex-guide
topic: key-concepts-about-the-apex-connector-framework
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.896Z
estimatedTokens: 779
namespace: DataSource
keywords: [Key, Concepts, Apex, Connector, Framework, DataSource, provides, classes, Framework., develop, custom, adapter, Salesforce, Connect., Then, connect, org, any, data, anywhere]
---

# Key Concepts About the Apex Connector Framework

> The DataSource namespace provides the classes
    for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter
    for Salesforce Connect. Then connect your Salesforce org to any data anywhere via the Salesforce
    Connect custom adapter.

**Namespace:** `DataSource`

# Key Concepts About the Apex Connector Framework

The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce org to any data anywhere via the Salesforce Connect custom adapter.

We recommend that you learn about some key concepts to help you use the Apex Connector Framework effectively.

-   **[External IDs for Salesforce Connect External Objects](atlas.en-us.apexcode.meta/apexcode/apex_connector_external_id.htm)**
    When you access external data with a custom adapter for Salesforce Connect, the values of the External ID standard field on an external object come from the DataSource.Column named ExternalId.
-   **[Authentication for Salesforce Connect Custom Adapters](atlas.en-us.apexcode.meta/apexcode/apex_connector_authentication.htm)**
    Your DataSource.Provider class declares what types of credentials can be used to authenticate to the external system.
-   **[Callouts for Salesforce Connect Custom Adapters](atlas.en-us.apexcode.meta/apexcode/apex_connector_callouts.htm)**
    Just like any other Apex code, a Salesforce Connect custom adapter can make callouts. If the connection to the external system requires authentication, incorporate the authentication parameters into the callout.
-   **[Paging with the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_paging.htm)**
    When displaying a large set of records in the user interface, Salesforce breaks the set into batches and displays one batch. You can then page through those batches. However, custom adapters for Salesforce Connect don’t automatically support paging of any kind. To support paging through external object data that’s obtained by a custom adapter, implement server-driven or client-driven paging.
-   **[queryMore with the Apex Connector Framework with the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore.htm)**
    Custom adapters for Salesforce Connect don’t automatically support the queryMore method in API queries. However, your implementation must be able to break up large result sets into batches and iterate over them by using the queryMore method in the SOAP API. The default batch size is 500 records, but the query developer can adjust that value programmatically in the query call.
-   **[Aggregation for Salesforce Connect Custom Adapters](atlas.en-us.apexcode.meta/apexcode/apex_connector_aggregation.htm)**
    If you receive a COUNT() query, the selected column has the value QueryAggregation.COUNT in its aggregation property. The selected column is provided in the columnsSelected property on the tableSelection for the DataSource.QueryContext.
-   **[Filters in the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_filters.htm)**
    The DataSource.QueryContext contains one DataSource.TableSelection. The DataSource.SearchContext can have more than one TableSelection. Each TableSelection has a filter property that represents the WHERE clause in a SOQL or SOSL query.

## Related Topics

- External IDs for Salesforce Connect External Objects (atlas.en-us.apexcode.meta/apexcode/apex_connector_external_id.htm)
- Authentication for Salesforce Connect Custom Adapters (atlas.en-us.apexcode.meta/apexcode/apex_connector_authentication.htm)
- Callouts for Salesforce Connect Custom Adapters (atlas.en-us.apexcode.meta/apexcode/apex_connector_callouts.htm)
- Paging with the Apex Connector Framework (atlas.en-us.apexcode.meta/apexcode/apex_connector_paging.htm)
- queryMore with the Apex Connector Framework with the Apex Connector Framework (atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore.htm)
- Aggregation for Salesforce Connect Custom Adapters (atlas.en-us.apexcode.meta/apexcode/apex_connector_aggregation.htm)
- Filters in the Apex Connector Framework (atlas.en-us.apexcode.meta/apexcode/apex_connector_filters.htm)
