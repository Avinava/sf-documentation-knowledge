---
title: "Batch Data Synchronization"
domain: integration-patterns-and-practices
topic: batch-data-synchronization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.179Z
estimatedTokens: 3859
keywords: [Batch, Data, Synchronization, How, import, Salesforce, export, taking, consideration, imports, exports, interfere, end-user, operations, business]
---

# Batch Data Synchronization

> How do you import data into Salesforce and export data out of Salesforce, taking into consideration
    that these imports and exports can interfere with end-user operations during business hours, and
    involve large amounts of data?

# Batch Data Synchronization

## Context

You’re moving your CRM implementation to Salesforce and want to:

-   Extract and transform accounts, contacts, and opportunities from the current CRM system and load the data into Salesforce (initial data import).
-   Extract, transform, and load customer billing data into Salesforce from a remote system on a weekly basis (ongoing).
-   Extract customer activity information from Salesforce and import it into an on-premises data warehouse on a weekly basis (ongoing).

## Problem

How do you import data into Salesforce and export data out of Salesforce, taking into consideration that these imports and exports can interfere with end-user operations during business hours, and involve large amounts of data?

## Forces

There are various forces to consider when applying solutions based on this pattern:

-   Should the data be stored in Salesforce? If not, there are other integration options an architect can and should consider (mashups, for example).
-   If the data should be stored in Salesforce, should the data be refreshed in response to an event in the remote system?
-   Should the data be refreshed on a scheduled basis?
-   Does the data support primary business processes?
-   Are there analytics (reporting) requirements that are impacted by the availability of this data in Salesforce?

## Solution

The following table contains various solutions to this integration problem.

| Solution | Fit | Data master | Comments |
| --- | --- | --- | --- |
| Salesforce Change Data Capture | Best | Salesforce | Salesforce Change Data Capture publishes change events, which represent changes to Salesforce records. Changes include creation of a new record, updates to an existing record, deletion of a record, and undeletion of a record.With Change Data Capture, you can receive near-real-time changes of Salesforce records, and synchronize corresponding records in an external data store.Change Data Capture takes care of the continuous synchronization part of replication. It publishes the deltas of Salesforce data for new and changed records. Change Data Capture requires an integration app for receiving events and performing updates in the external system. |
| Replication via third-party ETL tool | Best | Remote system | Leverage a third-party ETL tool that allows you to run change data capture against source data.The tool reacts to changes in the source data set, transforms the data, and then calls Salesforce Bulk API to issue DML statements. This can also be implemented using the Salesforce SOAP API. |
| Replication via third-party ETL tool | Good | Salesforce | Leverage a third-party ETL tool that allows you to run change data capture against ERP and Salesforce data sets.In this solution, Salesforce is the data source, and you can use time/status information on individual rows to query the data and filter the target result set. This can be implemented by using SOQL together with SOAP API and the query() method, or by using SOAP API and the getUpdated() method. |
| Remote call-in | Suboptimal | Remote system | It’s possible for a remote system to call into Salesforce by using one of the APIs and perform updates to data as they occur. However, this causes considerable on-going traffic between the two systems.Greater emphasis should be placed on error handling and locking. This pattern has the potential for causing continual updates, which has the potential to impact performance for end users. |
| Remote process invocation | Suboptimal | Salesforce | It’s possible for Salesforce to call into a remote system and perform updates to data as they occur. However, this causes considerable on-going traffic between the two systems.Greater emphasis should be placed on error handling and locking. This pattern has the potential for causing continual updates, which has the potential to impact performance for end users. |

## Sketch

The following diagram illustrates the sequence of events in this pattern, where the remote system is the data master.

![Batch Data Syncrhonization Pattern - Remote Master](/docs/resources/img/en-us/260.0?doc_id=integration_patterns%2Fimages%2Fbatch_data_sync_remote_master.png&folder=integration_patterns_and_practices)

The following diagram illustrates the sequence of events in this pattern, where Salesforce is the data master.

![Batch Data Syncrhonization Pattern - Salesforce Master](/docs/resources/img/en-us/260.0?doc_id=integration_patterns%2Fimages%2Fbatch_data_sync_salesforce_master.png&folder=integration_patterns_and_practices)

## Results

You can integrate data that’s sourced externally with Salesforce under the following scenarios:

-   External system is the data master—Salesforce is a consumer of data provided by a single source system or multiple systems. In this scenario, it’s common to have a data warehouse or data mart that aggregates the data before the data is imported into Salesforce.
-   Salesforce is the data master—Salesforce is the system of record for certain entities and Salesforce Change Data Capture client applications can be informed of changes to Salesforce data.

In a typical Salesforce integration scenario, the implementation team does one of the following:

-   Implement change data capture on the source data set.
-   Implement a set of supporting database structures, known as control tables, in an intermediate, on-premises database.

The ETL tool is then used to create programs that will:

1.  Read a control table to determine the last run time of the job and extract any other control values needed.
2.  Use the above control values as filters and query the source data set.
3.  Apply predefined processing rules, including validation, enrichment, and so on.
4.  Use available connectors/transformation capabilities of the ETL tool to create the destination data set.
5.  Write the data set to Salesforce objects.
6.  If processing is successful, update the control values in the control table.
7.  If processing fails, update the control tables with values that enable a restart and exit.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=integration_patterns_and_practices)

#### Note

We recommend that you create the control tables and associated data structures in an environment that the ETL tool has access to even if access to Salesforce isn’t available. This provides adequate levels of resilience. Salesforce should be treated as a spoke in this process and the ETL infrastructure is the hub.

For an ETL tool to gain maximum benefit from data synchronization capabilities, consider the following:

-   Chain and sequence the ETL jobs to provide a cohesive process.
-   Use primary keys from both systems to match incoming data.
-   Use specific API methods to extract only updated data.
-   If importing child records in a master-detail or lookup relationship, group the imported data using its parent key at the source to avoid locking. For example, if you’re importing contact data, be sure to group the contact data by the parent account key so the maximum number of contacts for a single account can be loaded in one API call. Failure to group the imported data usually results in the first contact record being loaded and subsequent contact records for that account to fail in the context of the API call.
-   Any post-import processing, such as triggers, should only process data selectively.
-   If your scenario involves large data volumes, follow the best practices in the white paper [Best Practices for Deployments with Large Data Volumes](https://developer.salesforce.com/page/Best_Practices_for_Deployments_with_Large_Data_Volumes "HTML (New Window)").

**Error Handling and Recovery**

An error handling and recovery strategy must be considered as part of the overall solution. The best method depends on the solution you choose.

| Error location | Error handling and recovery strategy |
| --- | --- |
| Read from Salesforce using Change Data Capture | Error handling—Error handling must be performed in the remote service because the event is effectively handed off to the remote system for further processing. Because this pattern is asynchronous, the remote system handles message queuing, processing, and error handling. Additionally, Change Data Capture events aren’t processed within database transactions. As a result, published events can’t be rolled back within a transaction.Recovery—Because this pattern is asynchronous, the remote system must initiate retries based on the service’s quality of service requirements. The replay ID associated with each Change Data Capture event is atomic and increases with every event published. This ID can be used replay the stream from a specific event (for example, based upon the last successfully captured event). High-volume platform event messages are stored for 72 hours (3 days). You can retrieve past event messages when using CometD clients to subscribe to a channel. |
| Read from Salesforce using a 3rd party ETL system | Error handling—If an error occurs during a read operation, implement a retry for errors that aren’t infrastructure-related. In the event of repeated failure, standard processing using control tables/error tables should be implemented in the context of an ETL operation to:Log the errorRetry the read operationTerminate if unsuccessfulSend a notificationRecovery—Restart the ETL process to recover from a failed read operation.If the operation succeeds but there are failed records, an immediate restart or subsequent execution of the job should address the issue. In this case, a delayed restart might be a better solution because it allows time to triage and correct data that might be causing the errors. |
| Write to Salesforce | Error handling—Errors that occur during a write operation can result from a combination of factors in the application. The API calls return a result set that consists of the information listed below. This information should be used to retry the write operation (if necessary).Record identifying informationSuccess/failure notificationA collection of errors for each recordRecovery—Restart the ETL process to recover from a failed read operation.If the operation succeeds but there are failed records, an immediate restart or subsequent execution of the job should address the issue. In this case, a delayed restart might be a better solution because it allows time to triage and correct data that might be causing the errors. |
| External master system | Errors should be handled in accordance with the best practices of the master system. |

**Security Considerations**

Any call to a remote system must maintain the confidentiality, integrity, and availability of the request. Different security considerations apply, depending on the solution you choose.

-   A Lightning Platform license with at least “API Only” user permissions is required to allow authenticated API access to the Salesforce API.
-   We recommend that standard encryption be used to keep password access secure.
-   Use the HTTPS protocol when making calls to the Salesforce APIs. You can also proxy traffic to the Salesforce APIs through an on-premises security solution, if necessary.

See [Security Considerations](atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm "To be effective members of the enterprise portfolio, all applications must be created and integrated with relevant security mechanisms. Modern IT strategies employ a combination of on-premises and cloud-based services.").

## Sidebars

**Timeliness**

Timeliness isn’t of significant importance in this pattern. However, care must be taken to design the interfaces so that all of the batch processes complete in a designated batch window.

As with all batch-oriented operations, we strongly recommend that you take care to insulate the source and target systems during batch processing windows. Loading batches during business hours might result in some contention, resulting in either a user's update failing, or more significantly, a batch load (or partial batch load) failing.

For organizations that have global operations, it might not be feasible to run all batch processes at the same time because the system might continually be in use. Data segmentation techniques using record types and other filtering criteria can be used to avoid data contention in these cases.

**State Management**

You can implement state management by using surrogate keys between the two systems. If you need any type of transaction management across Salesforce entities, we recommend that you use the [Remote Call-In](atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_call_in.htm) pattern using Apex.

Standard optimistic record locking occurs on the platform, and any updates made using the API require the user, who is editing the record, to refresh the record and initiate their transaction. In the context of the Salesforce API, optimistic locking refers to a process where:

-   Salesforce doesn’t maintain the state of a record being edited by a specific user.
-   Upon read, it records the time when the data was extracted.
-   If the user updates the record and saves it, Salesforce checks to see if another user has updated the record in the interim.
-   If the record has been updated, the system notifies the user that an update was made and the user should retrieve the latest version of the record before proceeding with their updates.

**Middleware Capabilities**

The most effective external technologies used to implement this pattern are traditional ETL tools. It’s important that the middleware tools chosen support the Salesforce Bulk API.

It’s helpful, but not critical, that the middleware tools support the getUpdated() function. This function provides the closest implementation to standard change data capture capability on the Salesforce platform.

The following table highlights the desirable properties of a middleware system that participates in this pattern.

| Property | Mandatory | Desirable | Not required |
| --- | --- | --- | --- |
| Event handling |  | X |  |
| Protocol conversion |  | X |  |
| Translation and transformation | X | X |  |
| Queuing and buffering | X |  |  |
| Synchronous transport protocols |  |  | X |
| Asynchronous transport protocols | X |  |  |
| Mediation routing |  | X |  |
| Process choreography and service orchestration | X |  |  |
| Transactionality (encryption, signing, reliable delivery, transaction management) |  | X |  |
| Routing |  | X |  |
| Extract, transform, and load | X |  |  |
| Long Polling | X (required for Salesforce Change Data Capture) |  |  |

## Example

A utility company uses a mainframe-based batch process that assigns prospects to individual sales reps and teams. This information needs to be imported into Salesforce on a nightly basis.

The customer has decided to implement change data capture on the source tables using a commercially available ETL tool.

The solution works as follows:

-   A cron-like scheduler executes a batch job that assigns prospects to users and teams.
-   After the batch job runs and updates the data, the ETL tool recognizes these changes using change data capture. The ETL tool collates the changes from the data store.
-   The ETL connector uses the Salesforce SOAP API to load the changes into Salesforce.

## Related Topics

- Security Considerations (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_security_considerations.htm)
- Remote Call-In (atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_call_in.htm)
