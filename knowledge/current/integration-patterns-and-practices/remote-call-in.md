---
title: "Remote Call-In"
domain: integration-patterns-and-practices
topic: remote-call-in
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.238Z
estimatedTokens: 6932
keywords: [Remote, Call-In, Salesforce, track, leads, manage, pipeline, opportunities, capture, order, convert, customers, isn’t, system, processes]
---

# Remote Call-In

> You use Salesforce to track leads, manage your pipeline, create opportunities, and capture
    order details that convert leads to customers. But, Salesforce isn’t the system that contains or
    processes orders. Orders are managed by an external (remote) system. That remote system needs to
    upd

# Remote Call-In

## Context

You use Salesforce to track leads, manage your pipeline, create opportunities, and capture order details that convert leads to customers. But, Salesforce isn’t the system that contains or processes orders. Orders are managed by an external (remote) system. That remote system needs to update the order status in Salesforce as the order passes through its processing stages.

## Problem

How does a remote system connect and authenticate with Salesforce to notify Salesforce about external events, create records, and update existing records?

## Forces

There are various forces to consider when applying solutions based on this pattern:

-   Is the purpose of the remote call to Salesforce to notify Salesforce of an event that occurred externally using an event-driven architecture? Or is the purpose to perform CRUD operations on specific records? If you use an event-driven architecture, the event producer (the remote process) is decoupled from the Salesforce event consumer.
-   Does the call to Salesforce require the remote process to wait for a response before continuing processing? Remote calls to Salesforce are always synchronous request-reply, although the remote process can discard the response if it isn’t needed to simulate an asynchronous call.
-   Does each transaction operate against a single Salesforce object or multiple, related objects?
-   What is the format of the message (for example, SOAP or REST, or both over HTTP)?
-   Is the message size relatively small or large?
-   If the remote system is SOAP-capable, is the remote system able to participate in a contract-first approach, where Salesforce dictates the contract? This is required where our SOAP API is used, for which a predefined WSDL is supplied.
-   Is transaction processing required?
-   What is the extent to which you’re tolerant of customization in Salesforce?

## Solution

This table contains various solutions to this integration problem.

| Solution | Fit | Comments |
| --- | --- | --- |
| SOAP API | Best | Accessibility—Salesforce provides a SOAP API that remote systems can use to:Publish events to notify your Salesforce orgQuery data in your orgCreate, update, and delete dataObtain metadata about your orgRun utilities to perform administrative tasksSynchronous API—After the API call is made, the remote client application waits until it receives a response from the service. Asynchronous calls to Salesforce aren’t supported.Generated WSDL—Salesforce provides two WSDLs for remote systems:Enterprise WSDL—Provides a strongly-typed WSDL that’s specific to a Salesforce org.Partner WSDL—Contains a loosely typed WSDL that’s not specific to a Salesforce org.Security—The client executing SOAP API must have a valid login and obtain a session to perform any API calls. The API respects object-level and field-level security configured in Salesforce based on the logged in user’s profile.Transaction/Commit Behavior—By default, each API call allows for partial success if some records are marked with errors. This can be changed to an “all or nothing” behavior where all the results are rolled back if any error occurs. It’s not possible to span a transaction across multiple API calls. To overcome this limitation, it’s possible for a single API call to affect multiple objects.Bulk Data—Any data operation that includes more than 2,000 records is a good candidate for Bulk API 2.0 to successfully prepare, execute, and manage an asynchronous workflow that uses the Bulk framework. Jobs with fewer than 2,000 records should involve “bulkified” synchronous calls in REST (for example, Composite) or SOAP.Event-Driven Architecture—Platform events are defined the same way you define Salesforce objects. Publishing an event via SOAP API is the same as creating a Salesforce record. |
| REST API | Best | Accessibility—Salesforce provides a REST API that remote systems can use to:Publish events to notify your Salesforce orgQuery data in your orgCreate, update, and delete dataObtain metadata about your orgRun utilities to perform administrative tasksSynchronous API—After the API call is made, the remote client application waits until it receives a response from the service. Asynchronous calls to Salesforce aren’t supported.REST API vs. SOAP API—REST exposes resources (entities/objects) as URIs and uses HTTP verbs to define CRUD operations on these resources. Unlike SOAP, REST API requires no predefined contract, utilizes XML and JSON for responses, and has loose typing. REST API is lightweight and provides a simple method for interacting with Salesforce. Its advantages include ease of integration and development, and it’s an excellent choice for use with mobile apps and web apps.Security—The client executing REST API must have a valid login and obtain a session to perform any API calls. The API respects object-level and field-level security configured in Salesforce based on the logged in user’s profile.Transaction/Commit Behavior—By default, each record is treated as a separate transaction and committed separately. Failure of one record change doesn’t cause rollback of other record changes. This behavior can be altered to an “all or nothing” behavior. Use the REST API composite resources to make a series of updates in one API call.REST Composite Resources—Use these REST API resources to perform multiple operations in a single API call. It’s also possible to use the output of one call as the input to the next call. All of the response bodies and HTTP statuses for the requests are returned in a single response body. The entire request counts as a single call toward your API limits.Bulk Data—Any data operation that includes more than 2,000 records is a good candidate for Bulk API 2.0 to successfully prepare, execute, and manage an asynchronous workflow that uses the Bulk framework. Jobs with fewer than 2,000 records should involve “bulkified” synchronous calls in REST (for example, Composite) or SOAP.Event-Driven Architecture—Platform events are defined the same way you define Salesforce objects. Publishing an event via REST API is the same as creating a Salesforce record. |
| Apex web services | Suboptimal | Apex class methods can be exposed as web service methods to external applications. This method is an alternative to SOAP API, and is typically used only where the following additional requirements must be met.Full transactional support is required (for example, create an account, contact, and opportunity all in one transaction).Custom logic must be applied on the Salesforce side before committing.The benefit of using an Apex web service must be weighed against the additional code that needs to be maintained in Salesforce.Not applicable for platform events because transaction pre-insert logic at the consumer doesn’t apply in an event-driven architecture. To notify a Salesforce org that an event has occurred, use SOAP API, REST API, or Bulk API 2.0. |
| Apex REST services | Suboptimal | An Apex class can be exposed as REST resources mapped to specific URIs with an HTTP verb defined against it (for example, POST or GET).You can use REST API composite resources to perform multiple updates in a single transaction.Unlike SOAP, there’s no need for the client to consume a service definition/contract (WSDL) and generate client stubs. The remote system requires only the ability to form an HTTP request and process the returned results (XML or JSON).Not applicable for platform events because transaction pre-insert logic at the consumer doesn’t apply in an event-driven architecture. To notify a Salesforce org that an event has occurred, use SOAP API, REST API, or Bulk API 2.0. |
| Bulk API 2.0 | Optimal for bulk operations | Bulk API 2.0 is based on REST principles, and is optimized for loading or deleting large sets of data. It has the same accessibility and security behavior as REST API.Any data operation that includes more than 2,000 records is a good candidate for Bulk API 2.0 to successfully prepare, execute, and manage an asynchronous workflow that uses the Bulk framework. Jobs with fewer than 2,000 records should involve “bulkified” synchronous calls in REST (for example, Composite) or SOAP.Bulk API 2.0 allows the client application to query, insert, update, upsert, or delete a large number of records asynchronously by submitting a number of batches, which are processed in the background by Salesforce. In contrast, SOAP API is optimized for real-time client applications that update small numbers of records at a time.Although SOAP API can also be used for processing large numbers of records, when the data sets contain hundreds of thousands to millions of records, it becomes less practical. This is due to its relatively high overhead and lower performance characteristics.Event-Driven Architecture—Platform events are defined the same way you define Salesforce objects. Publishing an event via Bulk API 2.0 is the same as creating a Salesforce record. Only the create and insert operations are supported. Events within a batch are published to the Salesforce event bus asynchronously as the batch job is processed. |

## Sketch

The following diagrams illustrate the sequence of events when you implement this pattern using either REST API for notifications from external events or SOAP API to query a Salesforce object. The sequence of events is the same when using REST API.

Remote System Querying Salesforce Via SOAP API ![Remote Call In - Remote System Calling In Using SOAP API](/docs/resources/img/en-us/260.0?doc_id=integration_patterns%2Fimages%2Fremote_call_in.png&folder=integration_patterns_and_practices)

Remote System Notifying Salesforce with Events Via REST API ![Remote Call In - Remote System Calling In Using REST API](/docs/resources/img/en-us/260.0?doc_id=integration_patterns%2Fimages%2Fremote_call_in_rest.png&folder=integration_patterns_and_practices)

## Results

In an event-driven architecture, the remote system calls into Salesforce using SOAP API, REST API, or Bulk API 2.0 to publish an event to the Salesforce event bus. Publishing an event notifies all subscribers. Event subscribers can be on the Salesforce Platform such as Process Builder Processes, Flows, or Lightning Components, Apex triggers. Event subscribers can also be external to the Salesforce Platform such as CometD subscribers.

When working directly with Salesforce objects, the solutions related to this pattern allow for:

-   The remote system to call the Salesforce APIs to query the database and execute single-object operations (create, update, delete, and so on).
-   The remote system to call the Salesforce REST API composite resources to perform a series of object operations.
-   Remote system to call custom-built Salesforce APIs (services) that can support multi-object transactional operations and custom pre/post processing logic.

**Calling Mechanisms**

The calling mechanism depends on the solution chosen to implement this pattern.

| Calling mechanism | Description |
| --- | --- |
| SOAP API | The remote system uses the Salesforce Enterprise or Partner WSDL to generate client stubs that are in turn used to invoke the standard SOAP API. |
| REST API | The remote system has to authenticate before accessing any Apex REST service. The remote system can use OAuth 2.0 or username and password authentication. In either case, the client must set the authorization HTTP header with the appropriate value (an OAuth access token or a session ID can be acquired via a login call to SOAP API).The remote system then generates REST invocations (HTTP requests) with the appropriate verbs and processes the results returned (JSON and XML data formats are supported). |
| Apex web service | The remote system consumes the custom Apex web service WSDL to generate client stubs that are in turn used to invoke the custom Apex web service. |
| Apex REST service | As per REST API, the resource URI and applicable verbs are defined using the @RestResource, @HttpGet, and @HttpPost annotations. |
| Bulk API 2.0 | Bulk API 2.0 is a REST-based API, so the same calling mechanisms as REST API apply. |
| REST API to invoke Flow | Use REST API to call a custom invocable actions endpoint to invoke an auto-launched flow. |

**Error Handling and Recovery**

An error handling and recovery strategy must be considered as part of the overall solution.

-   *Error handling*—All the remote call-in methods, standard or custom APIs, require the remote system to handle any subsequent errors, such as timeouts and the management of retries. Middleware can be used to provide the logic for error handling and recovery.
-   *Recovery*—A custom retry mechanism needs to be created if quality-of-service requirements dictate it. In this case, it’s important to ensure idempotent design characteristics. Platform event enables subscribers to use the replay ID to fetch messages within a certain time period after those messages were published.

**Idempotent Design Considerations**

Idempotent capabilities guarantee that repeated invocations are safe and won’t have a negative effect. If idempotency isn’t implemented, then repeated invocations of the same message can have different results, potentially resulting in data integrity issues, for example, creation of duplicate records, duplicate processing of transactions, and so on.

The remote system must manage multiple (duplicate) calls, in the case of errors or timeouts, to avoid duplicate inserts and redundant updates (especially if downstream triggers and workflow rules fire). While it’s possible to manage some of these situations within Salesforce (particularly in the case of custom SOAP and REST services), we recommend that the remote system (or middleware) manages error handling and idempotent design.

**Security Considerations**

Different security considerations apply, depending on the pattern solution chosen. In all cases, the platform uses the logged-in user’s access rights (for example, profile settings, sharing rules, permission sets, and so on). Additionally, profile IP restrictions can be used to restrict access to the API for a specific IP address range.

| Solution | Security considerations |
| --- | --- |
| SOAP API | Salesforce supports Secure Sockets Layer v3 (SSL) and the Transport Layer Security (TLS) protocols. Ciphers must have a key length of at least 128 bits.The remote system must log in using valid credentials to obtain a session ID. If the remote system already has a valid session ID, then it can call the API without an explicit login. This is used in call-back patterns covered earlier in this document, where a preceding Salesforce outbound message contained a session ID and record ID for subsequent use.We recommend that clients that call SOAP API cache and reuse the session ID to maximize performance, rather than obtaining a new session ID for each call. |
| REST API | We recommend that the remote system establish an OAuth trust for authorization. REST calls can then be made on specific resources using HTTP verbs. It’s also possible to make REST calls with a valid session ID that might have been obtained by other means (for example, retrieved by calling SOAP API or provided via an outbound message).We recommend that clients that call the REST API cache and reuse the session ID to maximize performance, rather than obtaining a new session ID for each call. |
| Apex web service | We recommend that the remote system establish an OAuth trust for authorization. |
| Apex REST service | We recommend that the remote system establish an OAuth trust for authorization. |
| Bulk API 2.0 | We recommend that the remote system establish an OAuth trust for authorization. |

See [Security Considerations](atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm "To be effective members of the enterprise portfolio, all applications must be created and integrated with relevant security mechanisms. Modern IT strategies employ a combination of on-premises and cloud-based services.").

## Sidebars

**Timeliness**

SOAP API and Apex web service API are synchronous. The following timeouts apply:

-   Session timeout — The session times out if there’s no activity based on the Salesforce org’s session timeout setting.
-   Query timeout — Each SOQL query has an individual timeout limit of 120 seconds.

**Data Volumes**

Data volume considerations depend on which solution and communication type you choose.

| Solution | Communication type | Limits |
| --- | --- | --- |
| SOAP API or REST API | Synchronous | SOAP Login—The SOAP login request size is limited to 10 KB or less. You can make a maximum of 3,600 calls to the login() function per user per hour. If you exceed this limit, the API returns an error.Create, Update, Delete—The remote system can create, update, or delete up to 200 records at a time. Multiple calls can be made to process more than a total of 200 records, but each request is limited to 200 records in size.BLOB Data—You can use SObject Basic Information, SObject Rows, or SObject Collections REST resources to insert or update BLOB data in Salesforce standard objects. For the SObject Basic Information or SObject Rows resources, the maximum file size for uploads is 2 GB for ContentVersion objects and 500 MB for all other eligible standard objects. Using the SObject Collections resources, the maximum total size of all files in a single request is 500 MB.Query Results Size — By default, the number of rows returned in the query result object (batch size), returned in a query() or queryMore() call is set to 500. The maximum number of rows returned is 2,000. You can explicitly set the batch size, but there's no guarantee that the requested batch size will be the actual batch size. This is done to maximize performance. Where the number of rows to be returned exceeds the batch size, use the queryMore() API call to iterate through multiple batches. Additional rules might apply, so for more information, see Salesforce Developer Limits and Allocations Quick Reference.Event Message—The maximum event message size is 1 MB. Publishing an event using the Salesforce APIs counts against your standard API limits. |
| Bulk API 2.0 | Synchronous | Bulk API 2.0 is optimized for importing and exporting large sets of data asynchronously.Any data operation that includes more than 2,000 records is a good candidate for Bulk API 2.0 to successfully prepare, execute, and manage an asynchronous workflow that uses the Bulk framework. Jobs with fewer than 2,000 records should involve “bulkified” synchronous calls in REST (for example, Composite) or SOAP.Bulk API 2.0 is synchronous when submitting the batch request and associated data. The actual processing of the data occurs asynchronously. For more information about API and batch processing limits, see Limits. |

**Endpoint Capability and Standards Support**

The capability and standards support for the endpoint depends on the solution that you choose.

| Solution | Endpoint considerations |
| --- | --- |
| SOAP API | The remote system must be capable of implementing a client that can call the Salesforce SOAP API, based on a message format predefined by Salesforce.The remote system (client) must participate in a contract-first implementation where the contract is supplied by Salesforce (for example, Enterprise or Partner WSDL). |
| REST API | The remote system must be capable of implementing a REST client that invokes Salesforce—defined REST services, and processes the XML or JSON results. |
| Apex web service | The remote system must be capable of implementing a client that can invoke SOAP messages of a predefined format, as defined by Salesforce.The remote system must participate in a code-first implementation, where the contract is supplied by Salesforce after the Apex web service is implemented. Each Apex web service has its own WSDL. |
| Apex REST service | The same endpoint considerations as REST API apply. |

**State Management**

When integrating systems, keys are important for on-going state tracking, for example, if a record gets created in the remote system, to support ongoing updates to that record. There are two options:

-   Salesforce stores the remote system’s primary or unique surrogate key for the remote record.
-   The remote system stores the Salesforce unique record ID or some other unique surrogate key.

There are specific considerations for handling integration keys in this synchronous pattern.

| Master system | Description |
| --- | --- |
| Salesforce | In this scenario, the remote system stores either the Salesforce RecordId or some other unique surrogate key from the record. |
| Remote system | In this scenario, Salesforce stores a reference to the unique identifier in the remote system. Because the process is synchronous, the key can be provided as part of the same transaction using external ID fields. |

**Complex Integration Scenarios**

Each solution in this pattern has different considerations when handling complex integration scenarios such as transformation and process orchestration.

| Solution | Considerations |
| --- | --- |
| SOAP API or REST API | SOAP API and REST API provide for simple transactions on objects. Complex integration scenarios, such as aggregation, orchestration, and transformation, can’t be performed in Salesforce. These scenarios must be handled by the remote system or middleware, with middleware as the preferred method. |
| Apex web service or Apex REST service | Custom web services can provide for cross-object functionality, custom logic, and more complex transaction support. This solution should be used with care, and you should always consider the suitability of middleware for any transformation, orchestration, and error handling logic. |

**Governor Limits**

Due to the multitenant nature of the Salesforce platform, there are limits when using the APIs.

| Solution | Limits |
| --- | --- |
| SOAP API, REST API, and custom Apex APIs | API request limits—Salesforce applies a limit on the number of API calls per 24–hour period. The limit is based on the Salesforce edition type and number of licenses. For example, Unlimited Edition provides 5,000 API requests per Salesforce or Lightning Platform license per 24 hours. For more information, see Salesforce Developer Limits and Allocations Quick Reference.API query cursor limits—A user can have up to 10 query cursors open at a time. Otherwise, the oldest of the 10 cursors is released. If the remote application attempts to open the released query cursor, an error results. For example, if sharing integration user credentials, the maximum query cursors need to be considered. Whenever possible, the middleware should complete the full query before executing another query (in a serial fashion) or each application should use a designated integration user. Alternatively, the middleware may need to execute requests across multiple users in a “round robin” fashion.Call limits—See Data Volumes sidebar for create, update, and query limits. |
| Bulk API 2.0 | See Data Volumes sidebar for more information. |
| Platform Events | Event notification limits—A maximum of 100,000 events can be published per hour for standard volume platform events. A maximum of 250,000 events can be published per hour for high-volume usage-based platform events. To monitor high-volume event usage, use REST API limits resource.Event message size limits—The maximum event message size is 1 MB. Publishing an event using the Salesforce APIs counts against your standard API limits. |

**Reliable Messaging**

Reliable messaging attempts to resolve the issue of guaranteeing the delivery of a message to a remote system where the individual components themselves might be unreliable. The Salesforce SOAP API and REST API are synchronous and don’t provide explicit support for any reliable messaging protocols, per se (for example, WS-ReliableMessaging).

We recommend that the remote system implement a reliable messaging system to ensure that error and timeout scenarios are successfully managed. Publishing of platform events from external systems relies on Salesforce APIs, so the same considerations for SOAP API and REST API apply.

**Middleware Capabilities**

This table highlights the desirable properties of a middleware system that participates in this pattern:

| Property | Mandatory | Desirable | Not required |
| --- | --- | --- | --- |
| Event handling |  | X |  |
| Protocol conversion |  | X |  |
| Translation and transformation |  | X |  |
| Queuing and buffering | X |  |  |
| Synchronous transport protocols | X |  |  |
| Asynchronous transport protocols |  |  | X |
| Mediation routing |  | X |  |
| Process choreography and service orchestration |  | X |  |
| Transactionality (encryption, signing, reliable delivery, and transaction management) | X |  |  |
| Routing |  |  | X |
| Extract, transform, and load |  | X (for bulk/batches) |  |

## Example

A printing supplies and services company uses Salesforce as a front end to create and manage printer supplies and orders. Salesforce asset records representing printers are periodically updated with printing usage statistics (ink status, paper level) from the on-premises Printer Management System (PMS), which regularly monitors printers on client sites. Upon reaching a set threshold value (for example, low ink status or low/empty paper level of less than 30%), multiple apps/processes (variable) interested in the event are notified, email or Chatter alerts are sent, and an Order record is created. The PMS stores the Salesforce ID (Salesforce is the asset record master).

The following constraints apply:

-   The PMS can participate in a contract-first integration, where Salesforce provides the contract and the PMS acts as a client (consumer) of the Salesforce service (defined via the Enterprise or Partner WSDL).

-   There should be no custom development in Salesforce.


This example is best implemented using the Salesforce SOAP API or REST API to publish events, and declarative automation (Process Builder) in Salesforce. The primary reason to use platform events is the variable and non-finite number of subscribers; however, for simple updates to a finite list of records such as orders, then use SOAP or REST API to update the records.

In Salesforce:

-   Define a platform event in Salesforce to contain the notification data coming from the PMS.
-   Create a Process Builder process that’s triggered by the printer event notification. The process updates the printer asset and creates an order (using an auto-launched Flow).
-   Download the Enterprise or Partner WSDL and provide it to the remote system.

In the remote system:

-   Create a client stub from the Enterprise or Partner WSDL.

-   Authenticate to Salesforce (via OAuth web server or bearer token flow) using the integration user’s credentials.
-   Upon printer status event, the PMS calls the API to create the printer status platform event (with printer usage statistics). The Salesforce event bus notifies Process Builder subscriber and all other subscribers.

When you use platform events, the event bus lets you replay events for 72 hours for high-volume platform events. Publishing those events using a middleware solution can help incorporate error handling on the publishing side. However, you can implement error handling on the subscribing side if you need higher reliability.

This example demonstrates the following:

-   Implementation of a Salesforce synchronous API client (consumer).

-   A callback to Salesforce to publish a platform event (aligned with previously covered request/reply platform event patterns).

## Related Topics

- Security Considerations (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm)
