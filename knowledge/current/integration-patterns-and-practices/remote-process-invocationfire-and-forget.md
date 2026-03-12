---
title: "Remote Process Invocation—Fire
and Forget"
domain: integration-patterns-and-practices
topic: remote-process-invocationfire-and-forget
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.270Z
estimatedTokens: 7795
keywords: [Remote, Process, Invocation—Fire, Forget, Salesforce, track, leads, manage, pipeline, opportunities, capture, order, convert, customers, However]
---

# Remote Process Invocation—Fire
and Forget

> You use Salesforce to track leads, manage your pipeline, create opportunities, and capture
    order details that convert leads to customers. However, Salesforce isn’t the system that
    holds or processes orders. After the order details are captured in Salesforce, an order must be
    created in t

# Remote Process Invocation—Fire and Forget

## Context

You use Salesforce to track leads, manage your pipeline, create opportunities, and capture order details that convert leads to customers. However, Salesforce isn’t the system that holds or processes orders. After the order details are captured in Salesforce, an order must be created in the remote system, which manages the order through to its conclusion.

When you implement this pattern, Salesforce calls the remote system to create the order, but doesn’t wait for the call’s successful completion. The remote system can optionally update Salesforce with the new order number and status in a separate transaction.

## Problem

When an event occurs in Salesforce, how do you initiate a process in a remote system and pass the required information to that process without waiting for a response from the remote system?

## Forces

Consider the following forces when applying solutions based on this pattern.

-   Does the call to the remote system require Salesforce to wait for a response before continuing processing? Is the call to the remote system synchronous or asynchronous?
-   If the call to the remote system is synchronous, does the response need to be processed by Salesforce as part of the same transaction as the call?
-   Is the message size small?
-   Is the integration based on the occurrence of a specific event, such as a button click in the Salesforce user interface, or DML-based events?
-   Is guaranteed message delivery from Salesforce to the remote system a requirement?
-   Is the remote system able to participate in a contract-first integration in which Salesforce specifies the contract? In some solution variants (for example, outbound messaging), Salesforce specifies a contract that the remote system endpoint implements.
-   Does the endpoint or the Enterprise Service Bus (ESB) support long polling?
-   Are declarative configuration methods preferred over custom Apex development? In this case, solutions such as platform events are preferred over Apex callouts.

## Solution

The following table contains solutions to this integration problem.

| Solution | Fit | Comments |
| --- | --- | --- |
| Process-driven platform events | Best | No customization is required in Salesforce to implement platform events. The recommended solution is when the remote process is invoked from an insert or update event.Platform events are event messages (or notifications) that your apps send and receive to take further action. Platform events simplify the process of communicating changes and responding to them without writing complex logic. One or more subscribers can listen to the same event and carry out actions.For example, a software system can send events containing information about printer ink cartridges. Subscribers can subscribe to the events to monitor printer ink levels and place orders to replace cartridges with low ink levels.External apps can listen to event messages by subscribing to a channel through CometD. Platform apps, such as Visualforce pages and Lightning components, can subscribe to event messages with CometD as well. |
| Customization-driven platform events | Good | Similar to process-driven platform events, but the events are created by Apex triggers or classes. You can publish and consume platform events by using Apex or an API.Platform events integrate with the Salesforce platform through Apex triggers. Triggers are the event consumers on the Salesforce platform that listen to event messages.When an external app uses the API or a native Salesforce app uses Apex to publish the event message, a trigger on that event is fired. Triggers run the actions in response to the event notifications. |
| Workflow-driven outbound messaging | Good | No customization is required in Salesforce to implement outbound messaging. The recommended solution for this type of integration is when the remote process is invoked from an insert or update event. Salesforce provides a workflow-driven outbound messaging capability that allows sending SOAP messages to remote systems triggered by an insert or update operation in Salesforce. These messages are sent asynchronously and are independent of the Salesforce user interface.The outbound message is sent to a specific remote endpoint. The remote service must be able to participate in a contract-first integration where Salesforce provides the contract.On receipt of the message, if the remote service doesn’t respond with a positive acknowledgment, Salesforce retries sending the message, providing a form of guaranteed delivery. When using middleware, this solution becomes a “first-mile” guarantee of delivery. |
| Outbound messaging and callbacks | Good | Callbacks provide a way to mitigate the impacts of out-of-sequence messaging. In addition, they handle these scenarios.Idempotency— If an acknowledgment isn’t received in a timely fashion, outbound messaging performs retries. Multiple messages can be sent to the target system. Using a callback ensures that the data retrieved is at a specific point in time rather than when the message was sent.Retrieving more data—A single outbound message can send data only for a single object. A callback can be used to retrieve data from other related records, such as related lists associated with the parent object.The outbound message provides a unique SessionId that you can use as an authentication token to authenticate and authorize a callback with either the SOAP API or the REST API. The system performing the callback isn’t required to separately authenticate to Salesforce. The standard methods of either API can then be used to perform the desired business functions.A typical use of this variant is the scenario in which Salesforce sends an outbound message to a remote system to create a record. The callback updates the original Salesforce record with the unique key of the record created in the remote system. |
| Custom Lightning component or Visualforce page that initiates an Apex SOAP or HTTP asynchronous callout | Suboptimal | This solution is typically used in user interface-based scenarios, but does require customization. In addition, the solution must handle guaranteed delivery of the message in the code.Similar to the solution for the Remote Process Invocation—Request and Reply pattern solution that specifies using a Visualforce page or Lightning component, together with an Apex callout. The difference is that in this pattern, Salesforce doesn’t wait for the request to complete before handing off control to the user.After receiving the message, the remote system responds and indicates receipt of the message, then asynchronously processes the message. The remote system hands control back to Salesforce before it begins to process the message; therefore, Salesforce doesn’t have to wait for processing to complete. |
| Trigger that’s invoked from Salesforce data changes performs an Apex SOAP or HTTP asynchronous callout | Suboptimal | You can use Apex triggers to perform automation based on record data changes.An Apex proxy class can be executed as the result of a DML operation by using an Apex trigger. However, all calls made from within the trigger context must be executed asynchronously. |
| Batch Apex job that performs an Apex SOAP or HTTP asynchronous callout | Suboptimal | Calls to a remote system can be performed from a batch job. This solution allows for batch remote process execution and for processing of the response from the remote system in Salesforce. However, there are limits to the number of calls for a given batch context. For more information, see the Salesforce Developer Limits and Allocations Quick Reference. |

## Sketch

The following diagram illustrates a call from Salesforce to a remote system in which create or update operations on a record trigger the call.

![Remote Process Invocation - Fire and Forget Pattern](/docs/resources/img/en-us/260.0?doc_id=integration_patterns%2Fimages%2Fremote_process_invocation_fire_forget.png&folder=integration_patterns_and_practices)

In this scenario:

1.  A remote system subscribes to the platform event.
2.  A update or insert occurs on a given set of records in Salesforce.
3.  A Salesforce Process triggers when a set of conditions is met.
4.  This process creates a platform event.
5.  The remote listener receives the event message, and places the message on a local queue.
6.  The queuing application forwards the message to the remote application for processing.

In the case where the remote system must perform operations against Salesforce, you can implement an optional callback operation.

## Results

The application of the solutions related to this pattern allows for:

-   User interface–initiated remote process invocations in which the result of the transaction can be displayed to the end user
-   DML event-initiated remote process invocations in which the result of the transaction can be processed by the calling process

**Calling Mechanisms**

The calling mechanism depends on the solution chosen to implement this pattern.

| Calling Mechanism | Description |
| --- | --- |
| Process Builder | Used by both the process-driven and customization-driven solutions. Events trigger the Salesforce process, which can then publish a platform event for subscription by a remote system. |
| Lightning component or Visualforce and Apex controllers | Used to invoke a remote process asynchronously using an Apex callout. |
| Workflow rules | Used only for the outbound messaging solution. Create and update DML events trigger the Salesforce workflow rules, which can then send a message to a remote system. |
| Apex triggers | Used for trigger-driven platform events and invocation of remote processes, using Apex callouts from DML-initiated events. |
| Apex batch classes | Used for invocation of remote processes in batch mode. |

**Error Handling and Recovery**

An error handling and recovery strategy must be considered as part of the overall solution. The best method depends on the solution you choose.

| Solution | Error Handling and Recovery Strategy |
| --- | --- |
| Apex callouts | Error handling—The remote system hands off invocation of the end process, so the callout only handles exceptions in the initial invocation of the remote service. For example, a timeout event is triggered if no positive acknowledgment is received from the remote callout. The remote system must handle subsequent errors when the initial invocation is handed off for asynchronous processing.Recovery—Recovery is more complex in this scenario. A custom retry mechanism must be created if quality-of-service requirements dictate it. |
| Outbound messaging | Error handling—Because this pattern is asynchronous, the remote system handles error handling. For outbound messaging, Salesforce initiates a retry operation if no positive acknowledgment is received within the timeout period, for up to 24 hours.Error handling must be performed in the remote service because the message is effectively handed off to the remote system in a “fire-and-forget” manner.Recovery—Because this pattern is asynchronous, the system must initiate retries based on the service’s quality-of-service requirements. For outbound messaging, Salesforce initiates retries if no positive acknowledgment is received from the outbound listener within the timeout period, up to 24 hours. The retry interval increases exponentially over time, starting with 15-second intervals and ending with 60-minute intervals. The timeout period can be extended to seven days by request to Salesforce support, but automatic retries are limited to 24 hours. All failed messages after 24 hours are placed in a queue and administrators must monitor this queue for any messages exceeding the 24-hour delivery period and retry manually, if necessary. |
| Platform Events | Error handling—Error handling must be performed by the remote service because the event is effectively handed off to the remote system for further processing. Because this pattern is asynchronous, the remote system handles message queuing, processing, and error handling. Additionally, platform events aren’t processed within database transactions. As a result, published platform events can’t be rolled back within a transaction.Recovery—Because this pattern is asynchronous, the remote system must initiate retries based on the service’s quality-of-service requirements. The replay ID associated with each event is atomic and increases with every published event. This ID can be used replay the stream from a specific event (for example, based upon the last successfully captured event). High-volume platform event messages are stored for 72 hours (three days). You can retrieve past event messages when using CometD clients to subscribe to a channel. |

**Idempotent Design Considerations**

Platform events are only published to the bus once. There is no retry on the Salesforce side. It is up to the ESB to request that the events be replayed. In a replay, the platform event’s replay ID remains the same and the ESB can try duplicate messages based on the replay ID.

Idempotency is important for outbound messaging because it’s asynchronous and retries are initiated when no positive acknowledgment is received. Therefore, the remote service must be able to handle messages from Salesforce in an idempotent fashion.

Outbound messaging sends a unique ID per message and this ID remains the same for any retries. The remote system can track duplicate messages based on this unique ID. The unique record ID for each record being updated is also sent, and can be used to prevent duplicate record creation.

The [idempotent design considerations](atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_state.htm#idempotent_design_header) in the Remote Process Invocation—Request and Reply pattern also apply to this pattern.

**Security Considerations**

Any call to a remote system must maintain the confidentiality, integrity, and availability of the request. Different security considerations apply, depending on the solution you choose.

| Solution | Security Considerations |
| --- | --- |
| Apex callouts | A call to a remote system must maintain the confidentiality, integrity, and availability of the request. The following are security considerations specific to using Apex SOAP and HTTP calls in this pattern.One-way SSL is enabled by default, but two-way SSL is supported with both self-signed and CA-signed certificates to maintain authenticity of both the client and server.Salesforce does not support WS-Security when generating the Apex proxy class.Where necessary, consider using one-way hashes or digital signatures using the Apex Crypto class methods to ensure the integrity of the request.The remote system must be protected by implementing the appropriate firewall mechanisms. |
| Outbound Messaging | For outbound messaging, one-way SSL is enabled by default. However, two-way SSL can be used together with the Salesforce outbound messaging certificate.The following are some additional security considerations.Whitelist Salesforce server IP ranges for remote integration servers.Protect the remote system by implementing the appropriate firewall mechanisms. |
| Platform Events | For platform events the subscribing external system must be able to authenticate to the Salesforce Streaming API.Platform events conform to the existing security model configured in the Salesforce org. To subscribe to an event, the user needs read access to the event entity. To publish an event, the user needs create permission on the event entity. |

See [Security Considerations](atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm "To be effective members of the enterprise portfolio, all applications must be created and integrated with relevant security mechanisms. Modern IT strategies employ a combination of on-premises and cloud-based services.").

## Sidebars

**Timeliness**

Timeliness is less of a factor with the fire-and-forget pattern. Control is handed back to the client either immediately or after positive acknowledgment of a successful hand-off to the remote system. With Salesforce outbound messaging, the acknowledgment must occur within 24 hours (this can be extended to seven days); otherwise, the message expires. For platform events, Salesforce sends the events to the event bus and doesn’t wait for a confirmation or acknowledgment from the subscriber. If the subscriber doesn’t pick up the message, the subscriber can request to replay the event using the event reply ID. High-volume event messages are stored for 72 hours (three days). To retrieve past event messages, use CometD clients to subscribe to a channel.

**Data Volumes**

Data volume considerations depend on which solution you choose. For the limits of each solution, see the [Salesforce Limits Quick Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_overview.htm "HTML (New Window)").

**Endpoint Capability and Standards Support**

The capability and standards support for the endpoint depends on the solution that you choose.

| Solution | Endpoint Considerations |
| --- | --- |
| Apex SOAP callouts | The endpoint must be able to process a web service call via HTTP. Salesforce must be able to access the endpoint over the public Internet.This solution requires that the remote system is compatible with the standards supported by Salesforce. At the time of writing, the web service standards supported by Salesforce for Apex SOAP callouts are:WSDL 1.1SOAP 1.1WSI-Basic Profile 1.1HTTP |
| Apex HTTP callouts | The endpoint must be able to receive HTTP calls and be accessible over the public internet by Salesforce.Apex HTTP callouts can be used to call RESTful services using the standard GET, POST, PUT, and DELETE methods. |
| Outbound message | The endpoint must be able to implement a listener that can receive SOAP messages in predefined format sent from Salesforce.The remote listener must participate in a contract-first implementation, where the contract is supplied by Salesforce.Each outbound message has its own predefined WSDL. |
| Platform Events | Triggers, processes and flows can subscribe to events. You can receive event notifications regardless of how they were published.Use CometD to subscribe to platform events from an external client. Implement your own CometD client or use EMP Connector, an open-source, community-supported tool that implements all the details of connecting to CometD and listening on a channel. Salesforce sends platform events to CometD clients sequentially in the order they’re received. The order of event notifications is based on the replay ID of events. |

**State Management**

When integrating systems, unique record identifiers are important for ongoing state tracking. For example, if a record is created in the remote system, you have two options.

-   Salesforce stores the remote system’s primary or unique surrogate key for the remote record.
-   The remote system stores the Salesforce unique record ID or some other unique surrogate key.

The following table lists considerations for state management in this pattern.

| Master System | Description |
| --- | --- |
| Salesforce | The remote system must store either the Salesforce RecordId or some other unique surrogate key in the Salesforce record. |
| Remote system | Salesforce must store a reference to the unique identifier in the remote system. Because the process is asynchronous, storing this unique identifier can’t be part of the original transaction.Salesforce must provide a unique ID in the call to the remote process. The remote system must then call back to Salesforce to update the record in Salesforce with the remote system’s unique identifier, using the Salesforce unique ID.The callback implies specific state handling in the remote application to store the Salesforce unique identifier for that transaction to use for the callback when processing is complete, or the Salesforce unique identifier is stored on the remote system’s record. |

**Complex Integration Scenarios**

Each solution in this pattern has different considerations for complex integration scenarios such as transformation and process orchestration.

| Solution | Considerations |
| --- | --- |
| Apex callouts | In certain cases, solutions prescribed by this pattern require implementing several complex integration scenarios best served using middleware or having Salesforce call a composite service. These scenarios include:Orchestration of business processes and rules involving complex flow logicAggregation of calls and their results across calls to multiple systemsTransformation of both inbound and outbound messagesMaintaining transactional integrity across calls to multiple systems |
| Outbound messaging | Given the static, declarative nature of the outbound message, no complex integration scenarios, such as aggregation, orchestration, or transformation, can be performed in Salesforce. The remote system or middleware must handle these types of operations . |
| Platform Events | Given the static, declarative nature of events, no complex integration scenarios, such as aggregation, orchestration, or transformation can be performed in Salesforce. The remote system or middleware must handle these types of operations . |

**Governor Limits**

Due to the multitenant nature of the Salesforce platform, there are limits to outbound callouts. Limits depend on the type of outbound call and the timing of the call.

In case of platform events, different limits and allocations apply. See the [Platforms Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm "HTML (New Window)").

There are no governor limits for outbound messaging. See the [Salesforce Limits Quick Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_overview.htm "HTML (New Window)").

**Reliable Messaging**

Reliable messaging attempts to resolve the issue of guaranteeing the delivery of a message to a remote system in which the individual components are unreliable. The method of ensuring receipt of a message by the remote system depends on the solution you choose.

| Solution | Reliable Messaging Considerations |
| --- | --- |
| Apex callouts | Salesforce doesn’t provide explicit support for reliable messaging protocols (for example, WS-ReliableMessaging). We recommend that the remote endpoint receiving the Salesforce message implement a reliable messaging system, like JMS or MQ. This system ensures full end-to-end guaranteed delivery to the remote system that ultimately processes the message. However, this system doesn’t ensure guaranteed delivery from Salesforce to the remote endpoint that it calls.Guaranteed delivery must be handled through customizations to Salesforce. Specific techniques, such as processing a positive acknowledgment from the remote endpoint in addition to custom retry logic, must be implemented. |
| Outbound messaging | Outbound messaging provides a form of reliable messaging. If no positive acknowledgment is received from the remote system, the process retries for up to 24 hours. This process guarantees delivery only to the point of the remote listener. The retry interval increases exponentially over time, starting with 15-second intervals and ending with 60-minute intervals. The overall retry period can be extended to seven days by request to Salesforce support, but automatic retries are limited to 24 hours. All failed messages after 24 hours are placed in a queue and administrators must monitor this queue for any messages exceeding the 24-hour delivery period and retry manually, if necessary.In most implementations, the remote listener calls another remote service. Ideally, the invocation of this remote service through a reliable messaging system ensures full end-to-end guaranteed delivery. The positive acknowledgment to the Salesforce outbound message occurs after the remote listener has successfully placed its own message on its local queue. Once the positive acknowledgment is received by Salesforce, automatic retries are stopped. |
| Platform Events | Platform Events attempts to provide reliable messaging by temporarily persisting event messages in the event bus. Subscribers can catch up on missed event messages by replaying messages from the event bus using the Replay ID of event messages.The event bus is a distributed system and doesn’t have the same guarantees as a transactional database. As a result, Salesforce can’t provide a synchronous response for an event publish request. Events are queued and buffered, and Salesforce attempts to publish the events asynchronously. In rare cases, the event message might not be persisted in the distributed system during the initial or subsequent attempts. This means that the events aren’t delivered to subscribers, and they aren’t recoverable. |

**Middleware Capabilities**

The following table highlights the desirable properties of a middleware system that participates in this pattern.

| Property | Mandatory | Desirable | Not Required |
| --- | --- | --- | --- |
| Event handling |  | X |  |
| Protocol conversion |  | X |  |
| Translation and transformation |  | X |  |
| Queuing and buffering | X |  |  |
| Synchronous transport protocols |  |  | X |
| Asynchronous transport protocols | X |  |  |
| Mediation routing |  | X |  |
| Process choreography and service orchestration |  | X |  |
| Transactionality (encryption, signing, reliable delivery, transaction management) | X |  |  |
| Routing |  |  | X |
| Extract, transform, and load |  |  | X |
| Long Polling | X (required for platform events) |  |  |

**Solution Variant—Platform Events: Publishing Behavior and Transactions**

When platform event messages are published immediately, event publishing doesn't respect transaction boundaries of the publishing process. Event messages can be published before the transaction completes or even if a transaction fails. This behavior can lead to issues when a subscriber expects to find data that the publishing transaction commits. The data might not be present when the subscriber receives the event message. To solve this issue, set the platform event publish behavior to Publish After Commit in the event definition. The publish behaviors you can set in a platform event definition are:

-   **Publish After Commit** to have the event message published only after a transaction commits successfully. Select this option if subscribers rely on data that the publishing transaction commits. For example, a process publishes an event message and creates a task record. A second process that is subscribed to the event is fired and expects to find the task record. Another reason for choosing this behavior is when you don’t want the event message to be published if the transaction fails.
-   **Publish Immediately** to have the event message published when the publish call executes. Select this option if you want the event message to be published regardless of whether the transaction succeeds. Also choose this option if the publisher and subscribers are independent, and subscribers don’t rely on data committed by the publisher. For example, the immediate publishing behavior is suitable for an event used for logging purposes. With this option, a subscriber might receive the event message before data is committed by the publisher transaction.

**Solution Variant—Outbound Messaging and Message Sequencing**

Salesforce outbound messaging can’t guarantee the sequence of delivery for its messages because a single message can be retried over a 24-hour period. Multiple methods for handling message sequencing in the remote system are available.

-   Salesforce sends a unique message ID for each instance of an outbound message. The remote system discards messages that have a duplicate message ID.
-   Salesforce sends only the RecordId. The remote system makes a callback to Salesforce to obtain the necessary data to process the request.

**Solution Variant—Outbound Messaging and Deletes**

Salesforce workflow rules can’t track deletion of a record. The rules can track only the insert or update of a record. Therefore, you can’t directly initiate an outbound message from the deletion of a record. You can initiate a message indirectly with the following process.

1.  Create a custom object to store key information from the deleted records.
2.  Create an Apex trigger, fired by the deletion of the base record, to store information, such as the unique identifier in the custom object.
3.  Implement a workflow rule to initiate an outbound message based on the creation of the custom object record.

It’s important that state tracking is enabled by storing the remote system’s unique identifier in Salesforce or Salesforce’s unique identifier in the remote system.

## Example

A telecommunications company wants to use Salesforce as a front end for creating accounts using the lead-to-opportunity process. An order is created in Salesforce when the opportunity is closed and won, but the back-end ERP system is the data master. The order must be saved to the Salesforce opportunity record, and the opportunity status changed to indicate that the order was created.

The following constraints apply.

-   No custom development in Salesforce.
-   You don’t require immediate notification of the order number after the opportunity converts to an order.
-   The organization has an ESB that supports the CometD protocol and is able to subscribe to platform events.

This example is best implemented using Salesforce platform events, but does require that the ESB subscribes to the platform event..

On the Salesforce side:

-   Create a Process Builder process to initiate the platform event (for example, when the opportunity status changes to Close-Won).
-   Create a new platform event which publishes the opportunity details.

On the remote system side:

-   The ESB subscribes to the Salesforce platform event using the CometD protocol.
-   The ESB receives one or more notifications indicating that the opportunity is to be converted to an order.
-   The ESB forwards the message to the back-end ERP system so that the order can be created.
-   After the order is created in the ERP system, a separate thread calls back to Salesforce using the SessionId as the authentication token. The callback updates the opportunity with the order number and status. You can do this callback using documented pattern solutions, such as Salesforce platform events, Salesforce SOAP API, REST API, or an Apex web service.

This example demonstrates the following.

-   Implementation of a remote process invoked asynchronously
-   End-to-end guaranteed delivery
-   Subsequent callback to Salesforce to update the state of the record

## Related Topics

- Remote Process Invocation—Request and Reply (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_state.htm)
- idempotent design considerations (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_state.htm)
- Security Considerations (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm)
