---
title: "Create a Sample  DataSource.Provider Class Class"
domain: apex-guide
topic: create-a-sample-datasourceprovider-class-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.879Z
keywords: [Create, Sample, DataSource.Provider, Class, Warning, See]
---

# Create a Sample  DataSource.Provider Class Class

# Create a Sample DataSource.Provider Class Class

Now you need a class that extends and overrides a few methods in DataSource.Provider.

Your DataSource.Provider class informs Salesforce of the authentication and functional capabilities that are supported by or required to connect to the external system.

```

```

If the external system requires authentication, Salesforce can provide the authentication credentials from the external data source definition or users’ personal settings. This example specifies that the external system doesn’t require authentication, but also supports OAuth authentication. To do so, it returns AuthenticationCapability.ANONYMOUS and AuthenticationCapability.OAUTH in the list of authentication capabilities.

The getAuthenticationCapabilities method should always return the same list of authentication types regardless of user, org, or context.

```

```

This example also specifies that the external system allows SOQL queries, SOSL queries, Salesforce searches, upserting data, and deleting data.

-   To allow SOQL, the example declares the DataSource.Capability.ROW\_QUERY capability.
-   To allow SOSL and Salesforce searches, the example declares the DataSource.Capability.SEARCH capability.
-   To allow upserting external data, the example declares the DataSource.Capability.ROW\_CREATE and DataSource.Capability.ROW\_UPDATE capabilities.
-   To allow deleting external data, the example declares the DataSource.Capability.ROW\_DELETE capability.

The getCapabilities method should always return the same list of capabilities regardless of configuration or data.The returned capabilities should never change based on runtime conditions, user context, dynamic queries, or any other conditions.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

When you call the getAuthenticationCapabilities or getCapabilities methods, be sure the returned list always contains the same values. Never use a SOQL query, callout, or any conditional logic that changes the returned values based on runtime conditions. Returning varying lists of authentication capabilities or capabilities for an external system can lead to errors that are difficult to troubleshoot.

Lastly, the example identifies the SampleDataSourceConnection class that obtains the external system’s schema and handles the queries and searches of the external data.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_connection_class.htm "Create a Sample DataSource.Connection Class Class")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_setup.htm "Set Up Salesforce Connect to Use Your Custom Adapter")

#### See Also

-   [*Apex Reference Guide*: Provider Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_DataSource_Provider.htm "Apex Reference Guide: Provider Class - HTML (New Window)")