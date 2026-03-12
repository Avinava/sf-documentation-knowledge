---
title: "Remote Process Invocation—Request and Reply"
domain: integration-patterns-and-practices
topic: remote-process-invocationrequest-and-reply
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.286Z
estimatedTokens: 4018
keywords: [Remote, Process, Invocation—Request, Reply, Salesforce, track, leads, manage, pipeline, opportunities, capture, order, convert, customers, system]
---

# Remote Process Invocation—Request and Reply

> You use Salesforce to track leads, manage your pipeline, create opportunities, and capture
    order details that convert leads to customers. But, the Salesforce system doesn’t contain or
    process orders. After the order details are captured in Salesforce, the order is created in the
    remote s

# Remote Process Invocation—Request and Reply

## Context

You use Salesforce to track leads, manage your pipeline, create opportunities, and capture order details that convert leads to customers. But, the Salesforce system doesn’t contain or process orders. After the order details are captured in Salesforce, the order is created in the remote system, which manages the order to conclusion.

When you implement this pattern, Salesforce calls the remote system to create the order and then waits for successful completion. If successful, the remote system synchronously replies with the order status and order number. As part of the same transaction, Salesforce updates the order number and status internally. The order number is used as a foreign key for subsequent updates to the remote system.

## Problem

When an event occurs in Salesforce, how do you initiate a process in a remote system, pass the required information to that process, receive a response from the remote system, and then use that response data to make updates within Salesforce?

## Forces

Consider the following forces when applying solutions based on this pattern.

-   Does the call to the remote system require Salesforce to wait for a response before continuing processing? Is the call to the remote system a synchronous request-reply or an asynchronous request?
-   If the call to the remote system is synchronous, does Salesforce have to process the response as part of the same transaction as the initial call?
-   Is the message size small or large?
-   Is the integration based on the occurrence of a specific event, such as a button click in the Salesforce user interface, or DML-based events?
-   Is the remote endpoint able to respond to the request with low latency? How many users are likely to be executing this transaction during a peak period?

## Solution

This table contains solutions to this integration problem.

| Solution | Fit | Comments |
| --- | --- | --- |
| Enhanced External Services invokes a REST API call | Best | Enhanced External Services allows you to invoke an externally hosted service in a declarative manner (no code required). This feature is best used when the following conditions are met:The externally hosted service is a RESTful service and the definitions are available in an OpenAPI 2.0 JSON schema format.The request and response definitions contain primitive data types such as boolean, datetime, double, integer, string, or an array of primitive data types. Nested object types, and send parameters such as headers within the HTTP requests are supported.The transaction can be invoked from a flow. |
| Salesforce Lightning—Lightning component or page initiates a synchronous Apex SOAP or REST callout.Salesforce Classic—A custom Visualforce page or button initiates a synchronous Apex SOAP callout.If the remote endpoint poses a risk of high latency response (refer to latest limits documentation for the applicable limits here), then an asynchronous callout, also called a continuation, is recommended to avoid hitting synchronous Apex transaction governor limits. | Best | Salesforce enables you to consume a WSDL and generate a resulting proxy Apex class. This class provides the necessary logic to call the remote service.Salesforce also enables you to invoke HTTP (REST) services using standard GET, POST, PUT, and DELETE methods.A user-initiated action on a Visualforce page or Lightning page then calls an Apex controller action that then executes this proxy Apex class to perform the remote call. Visualforce pages and Lightning pages require customization of the Salesforce application. |
| A custom Visualforce page or button initiates a synchronous Apex HTTP callout. | Best | Salesforce enables you to invoke HTTP services using standard GET, POST, PUT, and DELETE methods. You can use several HTTP classes to integrate with RESTful services. It’s also possible to integrate to SOAP-based services by manually constructing the SOAP message. The latter isn’t recommended because it’s possible for Salesforce to consume WSDLs to generate proxy classes.A user-initiated action on a Visualforce page then calls an Apex controller action that then executes this proxy Apex class to perform the remote call. Visualforce pages require customization of the Salesforce application. |
| A synchronous trigger that’s invoked from Salesforce data changes performs an asynchronous Apex SOAP or HTTP callout. | Suboptimal | You can use Apex triggers to perform automation based on record data changes.An Apex proxy class can be executed as the result of a DML operation by using an Apex trigger. However, all calls made from within the trigger context must execute asynchronously from the initiating event. Therefore, this solution isn’t recommended for this integration problem. This solution is better suited for the Remote Process Invocation—Fire and Forget pattern. |
| A batch Apex job performs a synchronous Apex SOAP or HTTP callout. | Suboptimal | You can make calls to a remote system from a batch job. This solution allows batch remote process execution and processing of the response from the remote system in Salesforce. However, a given batch has limits to the number of calls. For more information, see Governor Limits.A given batch run can execute multiple transaction contexts (usually in intervals of 200 records). The governor limits are reset per transaction context. |

## Sketch

This diagram illustrates a synchronous remote process invocation using Apex calls.

Salesforce Calling Out to a Remote System ![Remote Process Invocation - State Tracking Using Lightning](/docs/resources/img/en-us/260.0?doc_id=integration_patterns%2Fimages%2Fremote_process_invocation_state_lightning.png&folder=integration_patterns_and_practices)

In this scenario:

1.  An action is initiated on the Visualforce or Lightning page (for example, a button click).
2.  The browser (via a client-side controller in the case of a Lightning component) performs an HTTP POST that in turn performs an action on the corresponding Apex controller.
3.  The controller invokes the actual call to the remote web service.
4.  The response from the remote system is returned to the Apex controller. The controller processes the response, updates data in Salesforce as required, and re-renders the page.

In cases where the subsequent state must be tracked, the remote system returns a unique identifier that’s stored in the Salesforce record.

## Results

The application of the solutions related to this pattern allows for event-initiated remote process invocations in which Salesforce handles the processing.

**Calling Mechanisms**

The calling mechanism depends on the solution chosen to implement this pattern.

| Calling Mechanism | Description |
| --- | --- |
| Enhanced External service embedded in a flow orLightning component orVisualforce and Apex controllers | Used when the remote process is triggered as part of an end-to-end process involving the user interface, and the result must be displayed or updated in a Salesforce record. For example, the submission of a credit card payment to an external payment gateway and the payment results are immediately returned and displayed to the user. |
| Apex triggers | Used primarily for invocation of remote processes using Apex callouts from DML-initiated events. For more information about this calling mechanism, see pattern Remote Process Invocation—Fire and Forget. |
| Apex batch classes | Used for invocation of remote processes in batch. For more information about this calling mechanism, see pattern Remote Process Invocation—Fire and Forget. |

**Error Handling and Recovery**

It’s important to include an error handling and recovery strategy as part of the overall solution.

-   Error handling—When an error occurs (exceptions or error codes are returned to the caller), the caller manages error handling. For example, an error message displayed on the end user’s page or logged to a table requiring further action.
-   Recovery—Changes aren’t committed to Salesforce until the caller receives a successful response. For example, the order status isn’t updated in the database until a response that indicates success is received. If necessary, the caller can retry the operation.

**Idempotent Design Considerations**

Idempotent capabilities guarantee that repeated invocations are safe. If idempotency isn’t implemented, repeated invocations of the same message can have different results, potentially resulting in data integrity issues. Potential issues include the creation of duplicate records or duplicate processing of transactions.

It’s important to ensure that the remote procedure being called is idempotent. It’s almost impossible to guarantee that Salesforce only calls one time, especially if the call is triggered from a user interface event. Even if Salesforce makes a single call, there’s no guarantee that other processes (for example, middleware) do the same.

The most typical method of building an idempotent receiver is for it to track duplicates based on unique message identifiers sent by the consumer. Apex web service or REST calls must be customized to send a unique message ID.

In addition, operations that create records in the remote system must check for duplicates before inserting. Check by passing a unique record ID from Salesforce. If the record exists in the remote system, update the record. In most systems, this operation is termed as an upsert operation.

**Security Considerations**

Any call to a remote system must maintain the confidentiality, integrity, and availability of the request. The following security considerations are specific to using Apex SOAP and HTTP calls in this pattern.

-   One-way SSL is enabled by default, but two-way SSL is supported with both self-signed and CA-signed certificates to maintain authenticity of both the client and server.
-   Salesforce currently doesn’t support WS-Security.
-   Where necessary, consider using one-way hashes or digital signatures using the Apex Crypto class methods to ensure request integrity.
-   The remote system must be protected by implementing the appropriate firewall mechanisms.

See [Security Considerations](atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm "To be effective members of the enterprise portfolio, all applications must be created and integrated with relevant security mechanisms. Modern IT strategies employ a combination of on-premises and cloud-based services.").

## Sidebars

**Timeliness**

Timeliness is of significant importance in this pattern. Usually:

-   The request is typically invoked from the user interface, so the process must not keep the user waiting.
-   Salesforce has a configurable timeout of up to 120 seconds for calls from Apex.
-   Completion of the remote process is executed in a timely manner to conclude within the Salesforce timeout limit and within user expectations.
-   External calls are subject to Apex synchronous transaction governor limits, so make sure to mitigate the risk of instantiating more than 10 transactions that run for more than five seconds each. In addition to ensuring the external endpoint is performant, options to mitigate the risk of a timeout include:
    -   Setting the timeout of the external callout to five seconds
    -   Using a continuation in Visualforce or Lightning Components to handle long-running transactions

**Data Volumes**

This pattern is used primarily for small volume, real-time activities, due to the small timeout values and maximum size of the request or response for the Apex call solution. Don’t use this pattern in batch processing activities in which the data payload is contained in the message.

**Endpoint Capability and Standards Support**

The capability and standards support for the endpoint depends on the solution that you choose.

| Solution | Endpoint Considerations |
| --- | --- |
| Apex SOAP callouts | The endpoint must be able to receive a web service call via HTTP. Salesforce must be able to access the endpoint over the public Internet.This solution requires that the remote system is compatible with the standards supported by Salesforce. At the time of writing, the web service standards supported by Salesforce for Apex SOAP callouts are:WSDL 1.1SOAP 1.1WSI-Basic Profile 1.1HTTP |
| Apex HTTP callouts | The endpoint must be able to receive HTTP calls. Salesforce must be able to access the endpoint over the public Internet.You can use Apex HTTP callouts to call REST services using the standard GET, POST, PUT, and DELETE methods. |

**State Management**

When integrating systems, keys are important for ongoing state tracking. There are two options.

-   Salesforce stores the remote system’s primary or unique surrogate key for the remote record.
-   The remote system stores the Salesforce unique record ID or some other unique surrogate key.

There are specific considerations for handling integration keys, depending on which system contains the master record, as shown in the following table.

| Master System | Description |
| --- | --- |
| Salesforce | The remote system stores either the Salesforce RecordId or some other unique surrogate key from the record. |
| Remote system | The call to the remote process returns the unique key from the application, and Salesforce stores that key value in a unique record field. |

**Complex Integration Scenarios**

In certain cases, the solution prescribed by this pattern can require the implementation of several complex integration scenarios. This is best served by using middleware or having Salesforce call a composite service. These scenarios include:

-   Orchestration of business processes and rules involving complex flow logic
-   Aggregation of calls and their results across calls to multiple systems
-   Transformation of both inbound and outbound messages
-   Maintaining transactional integrity across calls to multiple systems

**Governor Limits**

For information about Apex limits, see [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm "HTML (New Window)") in the Apex Developer Guide.

**Middleware Capabilities**

The following table highlights the desirable properties of a middleware system that participates in this pattern.

| Property | Mandatory | Desirable | Not Required |
| --- | --- | --- | --- |
| Event handling |  | X |  |
| Protocol conversion |  | X |  |
| Translation and transformation |  | X |  |
| Queuing and buffering |  | X |  |
| Synchronous transport protocols | X |  |  |
| Asynchronous transport protocols |  |  | X |
| Mediation routing |  | X |  |
| Process choreography and service orchestration |  | X |  |
| Transactionality (encryption, signing, reliable delivery, transaction management) |  | X |  |
| Routing |  |  | X |
| Extract, transform, and load |  |  | X |
| Long polling |  |  | X |

## Example

A utility company uses Salesforce and has a separate system that contains customer billing information. They want to display the billing history for a customer account without storing that data in Salesforce. They have an existing web service that returns a list of bills and the details for a given account, but can’t display this data in a browser.

This requirement can be accomplished with the following approach.

1.  Salesforce consumes the billing history service WSDL from an Apex proxy class.
2.  Execute the Apex proxy class with the account number as the unique identifier by creating a Lightning component and a custom controller or a Visualforce page and custom controller.
3.  The custom controller then parses the return values from the Apex callout and the Lightning component or Visualforce page, and then renders the customer billing data to the user.

This example demonstrates that:

-   The state of the customer is tracked with an account number stored on the Salesforce account object
-   Subsequent processing of the reply message by the caller

## Related Topics

- Remote Process Invocation—Fire and Forget (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_fire_forget.htm)
- Remote Process Invocation—Fire
          and Forget (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_fire_forget.htm)
- Remote Process Invocation—Fire and
         Forget (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_fire_forget.htm)
- Security Considerations (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm)
