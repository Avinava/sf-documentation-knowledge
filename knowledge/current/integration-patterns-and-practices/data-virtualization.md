---
title: "Data Virtualization"
domain: integration-patterns-and-practices
topic: data-virtualization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.195Z
estimatedTokens: 4663
keywords: [Data, Virtualization, Salesforce, track, leads, manage, pipeline, opportunities, capture, order, convert, customers, However, isn’t, system]
---

# Data Virtualization

> You use Salesforce to track leads, manage your pipeline, create opportunities, and capture
    order details that convert leads to customers. However, Salesforce isn’t the system that
    contains or processes orders. Orders are managed by an external (remote) system. But sales reps
    want to view

# Data Virtualization

## Context

You use Salesforce to track leads, manage your pipeline, create opportunities, and capture order details that convert leads to customers. However, Salesforce isn’t the system that contains or processes orders. Orders are managed by an external (remote) system. But sales reps want to view and update real-time order information in Salesforce without having to learn or use the external system.

## Problem

In Salesforce, how do you view, search, and modify data that’s stored outside of Salesforce, without moving the data from the external system into Salesforce?

## Forces

There are various forces to consider when applying solutions based on this pattern:

-   Do you want to build a declarative/point-and-click outbound integration or UI mashup in Salesforce?
-   Do you have a large amount of data that you don’t want to copy into your Salesforce org?
-   Do you need to access small amounts of remote system data at any one time?
-   Do you need real-time access to the latest data?
-   Do you store your data in the cloud or in a back-office system, but want to display or process that data in your Salesforce org?
-   Do you have data residency concerns for storing certain types of data in Salesforce?

## Solution

The following table contains various solutions to this integration problem.

| Solution | Fit | Comments |
| --- | --- | --- |
| Salesforce Connect | Best | Use Salesforce Connect to access data from external sources, along with your Salesforce data. Pull data from legacy systems such as SAP, Microsoft, and Oracle in real time without making a copy of the data in Salesforce.Salesforce Connect maps data tables in external systems to external objects in your org. External objects are similar to custom objects, except that they map to data located outside your Salesforce org. Salesforce Connect uses a live connection to external data to always keep external objects up-to-date. Accessing an external object fetches the data from the external system in real time.Salesforce Connect lets you:Query data in an external system.Create, update, and delete data in an external system.Access external objects via list views, detail pages, record feeds, custom tabs, and page layouts.Define relationships between external objects and standard or custom objects to integrate data from different sources.Enable Chatter feeds on external object pages for collaboration.Run reports (limited) on external data.View the data on the Salesforce mobile app.To access data stored on an external system using Salesforce Connect, you can use one of the following adapters:OData 2.0 adapter or OData 4.0 adapter — connects to data exposed by any OData 2.0 or 4.0 producer.Cross-org adapter — connects to data that’s stored in another Salesforce org. The cross-org adapter uses the standard Lightning Platform REST API. Unlike OData, the cross-org adapter directly connects to another org without needing an intermediary web service.Custom adapter created via Apex — if the OData and cross-org adapters aren’t suitable for your needs, develop your own adapter with the Apex Connector Framework. |
| Request and Reply | Suboptimal | Use Salesforce web service APIs to make ad-hoc data requests to access and update external system data. This solution includes the following approaches:Use Salesforce SOAP API. A custom Visualforce page or button initiates an Apex SOAP callout in a synchronous manner. In Salesforce, you can consume a WSDL and generate a resulting proxy Apex class. This class provides the necessary logic to call the remote service. A user-initiated action on a Visualforce page then calls an Apex controller action that executes this proxy Apex class to perform the remote call. Visualforce pages require customization of the Salesforce app.Use Salesforce REST API. A custom Visualforce page or button initiates an Apex HTTP callout (REST service) in a synchronous manner. In Salesforce, you can invoke HTTP services using standard GET, POST, PUT, and DELETE methods. You can use several HTTP classes to integrate with RESTful services. A user-initiated action on a Visualforce page then calls an Apex controller action that executes these proxy Apex classes to perform the remote call. Visualforce pages require customization of the Salesforce app.For more information on this solution, see Remote Process Invocation—Request and Reply. |

## Sketch

The following diagram illustrates how you can use Salesforce Connect to pull data from an external system using an OData adapter.

![Data virtualization using Salesforce Connect](/docs/resources/img/en-us/260.0?doc_id=integration_patterns%2Fimages%2Fdata_virtualization_odata.png&folder=integration_patterns_and_practices)

In this scenario:

1.  The browser performs an AJAX call that in turn performs an action on the corresponding external object adapter.
2.  The adapter translates the action into an OData request and makes an HTTP GET request to the remote system via the Integration and Services layers.
3.  The remote system returns a JSON response to Salesforce via the Integration and Services layers.
4.  The response is translated from OData into an external object and presented back to the browser.

## Results

The application of the solutions related to this pattern allows for user-interface initiated invocations in which the result of the transaction can be displayed to the end user.

**Calling Mechanisms**

The calling mechanism depends on the solution chosen to implement this pattern.

| Calling Mechanism | Description |
| --- | --- |
| External Objects | Salesforce Connect maps Salesforce external objects to data tables in external systems. Instead of copying the data into your org, Salesforce Connect accesses the data on demand and in real time. Even though the data is stored outside your org, Salesforce Connect provides seamless integration with the Lightning Platform. External objects are available to Salesforce tools, such as global search, lookup relationships, record feeds, and the Salesforce mobile app. External objects are also available to Apex, SOSL, SOQL queries, Salesforce APIs, and deployment via the Metadata API, change sets, and packages. |
| Lighting Components or Visualforce Pages | Used when the remote process is triggered as part of an end-to-end process involving the user interface, and the result must be displayed or updated in a Salesforce record. For example, a process that submits credit card payments to an external payment gateway and immediately returns payment results that are displayed to the user. Integration triggered from user interface events usually requires the creation of custom Lightning components or Visualforce pages. |

**Error Handling**

It’s important to include error handling as part of the overall solution. When an error occurs (exceptions or error codes are returned to the caller), the caller manages the error handling. The [Salesforce Connect Validator](https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000EJHQ6UAP "HTML (New Window)") is a free tool to run some common queries and notice error types and failure causes.

**Benefits**

Some of the benefits of using a Salesforce Connect solution are:

-   This solution doesn't consume data storage in Salesforce.
-   Users don't have to worry about regularly synchronizing data between the external system and Salesforce.
-   A declarative setup that can be achieved quickly with OData, or a cross-org adapter, or using minimal code with a custom Apex adapter.
-   Users can access external data with much of the same functionality as custom objects in the form of external objects.
-   Ability to do a federated search in the connected external system using global search.
-   Ability to run reports that access external data from cloud and on-premises sources. Refer to reporting considerations below.

**Salesforce Connect Considerations**

The Salesforce Connect solution has the following considerations:

-   External objects behave like custom objects, but some features aren’t available for external objects. For more information, see [Salesforce Compatibility Considerations for Salesforce Connect](https://help.salesforce.com/articleView?id=platform_connect_considerations_compatibility.htm&type=5&language=en_US "HTML (New Window)").
-   External objects can impact report performance. For more information, see [Report Considerations for Salesforce Connect](https://help.salesforce.com/articleView?id=platform_connect_considerations_reports.htm&type=5&language=en_US "HTML (New Window)").
-   For additional considerations for using Salesforce Connect adapters see [Considerations for Salesforce Connect—All Adapters](https://help.salesforce.com/articleView?id=platform_connect_considerations.htm&type=5&language=en_US "HTML (New Window)").
-   If you’re considering using a cross-org adapter, see [Considerations for Salesforce Connect—Cross-Org Adapter](https://help.salesforce.com/articleView?id=xorg_considerations.htm&type=5&language=en_US "HTML (New Window)").
-   If you’re considering using a OData adapter, see [Considerations for Salesforce Connect—OData 2.0 and 4.0 Adapters](https://help.salesforce.com/articleView?id=odata_considerations.htm&type=5&language=en_US "HTML (New Window)").
-   If you’re considering using a custom Apex adapter, see [Considerations for Salesforce Connect—Custom Adapter](https://help.salesforce.com/articleView?id=apex_adapter_considerations.htm&type=5&language=en_US "HTML (New Window)").

**Security Considerations**

Solutions for this pattern should adhere to standard Salesforce org-level security. It’s recommended you use the HTTPS protocol to connect to any remote system. For more details, see [Security Considerations](atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm "To be effective members of the enterprise portfolio, all applications must be created and integrated with relevant security mechanisms. Modern IT strategies employ a combination of on-premises and cloud-based services.").

If you’re using an OData connector, make sure that you understand the special behaviors, limitations, and recommendations for Cross-Site Request Forgery (CSRF) on OData external data sources. For more information, see [CSRF Considerations for Salesforce Connect — OData 2.0 and 4.0 Adapters](https://help.salesforce.com/articleView?id=odata_considerations_csrf.htm&type=5&language=en_US "HTML (New Window)").

## Sidebars

**Timeliness**

Timeliness is of significant importance in this pattern. Keep the following points in mind:

-   The request is typically invoked from the user interface, so the process must not keep the user waiting.
-   Depending on the availability of and the connection to the external system, it can take a long time to retrieve external data. Salesforce has a configurable 120-second maximum timeout value to wait for a response from the external system.
-   Completion of the remote process should execute in a timely manner and complete within the Salesforce timeout limit and within user expectations.

**Data Volumes**

This pattern is used primarily for small volume, real-time activities, due to the small timeout values and maximum size of the request or response for the Apex call solution. Don’t use this pattern in batch processing activities in which the data payload is contained in the message.

**Endpoint Capability and Standards Support**

The capability and standards support for the endpoint depends on the solution that you choose.

| Solution | Endpoint Considerations |
| --- | --- |
| Salesforce Connect | OData APIs—Uses the Open Data Protocol to access data that’s stored outside Salesforce. The external data must be exposed via OData producers.Other APIs—Use the Apex Connector Framework to develop your own custom adapter when the other available adapters aren’t suitable for your needs. A custom adapter can obtain data from any source. For example, some data can be retrieved from the internet via callouts, while other data can be manipulated or even generated programmatically.Connect to Salesforce—Uses the Lightning Platform REST API to access data that’s stored in other Salesforce orgs.Connect via MiddlewareConnect via Middleware—The Salesforce Connect partner ecosystem has worked closely with Salesforce to make sure that their middleware gateways expose OData endpoints from their service so Salesforce can connect with them without writing additional code. |
| Request & Reply | Apex SOAP CalloutsThe endpoint must be able to receive a web service call via HTTP. Salesforce must be able to access the endpoint over the public Internet.Apex HTTP CalloutsThe endpoint must be able to receive HTTP calls. Salesforce must be able to access the endpoint over the public Internet.You can use Apex HTTP callouts to call RESTful services using the standard GET, POST, PUT, and DELETE methods. |

**State Management**

When integrating systems, keys are important for on-going state tracking. For example, if a record gets created in the remote system, typically the record needs some sort of identifying key to support ongoing updates. There are two options:

-   Salesforce stores the primary or unique surrogate key for the remote record.
-   The remote system stores the Salesforce unique record ID or some other unique surrogate key. There are specific considerations for handling integration keys in this synchronous pattern.

| Master System | Description |
| --- | --- |
| Salesforce | The remote system stores either the Salesforce record ID or some other unique surrogate key from the record. |
| Remote System | The call to the remote process returns the unique key from the application, and Salesforce stores that key value in a unique record field. |

**Complex Integrations**

In certain cases, the solution prescribed by this pattern can require the implementation of a complex integration scenario. These scenarios are often solved using middleware. The scenarios include:

-   Aggregation of calls and their results across calls to multiple systems
-   Transformation of both inbound and outbound messages
-   Maintaining transactional integrity across calls to multiple systems
-   Other process orchestration activities between Salesforce and the external system

**Governing Limits**

Different limits apply for different adapters. For more details, see [General Limits for Salesforce Connect](https://help.salesforce.com/articleView?id=platform_connect_general_limits.htm&type=5&language=en_US).

**Middleware Capabilities**

The following table highlights the desirable properties of a middleware system that participates in this pattern.

| Property | Mandatory | Desirable | Not required |
| --- | --- | --- | --- |
| Event handling |  | X |  |
| Protocol conversion | X |  |  |
| Translation and transformation | X |  |  |
| Queuing and buffering | X |  |  |
| Synchronous transport protocols | X |  |  |
| Asynchronous transport protocols |  | X |  |
| Mediation routing |  | X |  |
| Process choreography and service orchestration |  | X |  |
| Transactionality (encryption, signing, reliable delivery, transaction management) | X |  |  |
| Routing |  |  | X |
| Extract, transform, and load |  |  | X |
| Long polling |  |  | X |

**External Object Relationships**

External objects support standard lookup relationships, which use the 18-character Salesforce record ID to associate related records. However, data that’s stored outside your Salesforce org often doesn’t contain those record IDs. Therefore, two special types of lookup relationships are available for external objects: external lookups and indirect lookups.

This table summarizes the types of relationships that are available to external objects.

| Relationship | Allowed Child Objects | Allowed Parent Objects | Parent Field for Matching Records |
| --- | --- | --- | --- |
| Lookup | Standard, Custom, External | Standard, Custom | The 18-character Salesforce record ID |
| External lookup | Standard, Custom, External | External | The External ID standard field |
| Indirect lookup | External | Standard, Custom | Select a custom field with the External ID and Unique attributes |

**High Data Volume Considerations for Salesforce Connect—OData 2.0 and 4.0 Adapters**

If your org hits rate limits when accessing external objects, consider selecting the High Data Volume option on the associated external data sources. Doing so bypasses most rate limits, but some special behaviors and limitations apply. For more information, see [High Data Volume Considerations for Salesforce Connect](https://help.salesforce.com/articleView?id=odata_considerations_high_data_volume.htm&type=5&language=en_US "HTML (New Window)").

**Client-Driven and Server-Driven Paging for Salesforce Connect—OData 2.0 and 4.0 Adapters**

It's common for Salesforce Connect queries of external data to have a large result set that's broken into smaller batches or pages. You decide whether to have the paging behavior controlled by the external system (server-driven) or by the OData 2.0 or 4.0 adapter for Salesforce Connect (client-driven). The Server Driven Pagination field on the external data source specifies whether to use client-driven or server-driven paging. If you enable server-driven paging on an external data source, Salesforce ignores the requested page sizes, including the default queryMore() batch size of 500 rows. The pages returned by the external system determine the batches, but each page can’t exceed 2,000 rows. However, the limits for the OData adapters for Salesforce Connect still apply.

## Example

A manufacturing company uses Salesforce to manage customer cases. The customer service agents want to access the real-time order information from the back-office ERP system to get a 360 view of the customer without having to learn and manually run reports in ERP.

Implementing the solution prescribed by this pattern, you should:

-   Configure your external data source with an OData endpoint. Your remote application may include native support for OData. For other applications, major integration vendors such as Dell Boomi, Informatica, Jitterbit, MuleSoft, and Progress Software have partnered with Salesforce on Salesforce Connect to build adapters.
-   Point Salesforce Connect at the OData endpoint, either directly, or through a middleware solution.
-   Sync your external database tables with external objects in Salesforce. When a user accesses a page with data from these external objects, Salesforce Connect makes real-time callouts to your back-end applications.

## Related Topics

- Remote Process Invocation—Request and Reply (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_state.htm)
- Security Considerations (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm)
