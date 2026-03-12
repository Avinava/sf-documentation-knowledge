---
domain: api-asynch
name: Bulk API 2.0 and Bulk API Developer Guide
documentCount: 120
lastGenerated: 2026-03-12T09:36:25.939Z
---

# Bulk API 2.0 and Bulk API Developer Guide — Knowledge Index

> Quickly load your org’s data into Salesforce, or query large data sets with Bulk API.

## Available Topics

| File | Title | Type | Description |
|---|---|---|---|
| [abort-a-job.md](./abort-a-job.md) | Abort a Job | api-reference | If you abort a job, Salesforce doesn’t process the job. |
| [abort-a-query-job.md](./abort-a-query-job.md) | Abort a Query Job | api-reference | Aborts a query job. |
| [about-uris.md](./about-uris.md) | About URIs | api-reference | You send HTTP requests to a URI to perform operations with
      Bulk API. |
| [add-a-batch-to-a-job.md](./add-a-batch-to-a-job.md) | Add a Batch to a Job | help-article | Add a new batch to a job by sending a POST request to this URI. The request body |
| [batch-retry-header.md](./batch-retry-header.md) | Batch Retry Header | developer-guide | Use Sforce-Disable-Batch-Retry to disable retries
  on unfinished batches. |
| [batchinfo.md](./batchinfo.md) | BatchInfo | help-article | A BatchInfo contains one batch of data for you to submit to Salesforce for
    p |
| [bulk-api.md](./bulk-api.md) | Bulk API | api-reference | Bulk API is the predecessor to the current Bulk API 2.0. Although Bulk API gives |
| [bulk-api-20.md](./bulk-api-20.md) | Bulk API 2.0 | help-article | Perform ingest and query operations with Salesforce Bulk API 2.0. The REST-based |
| [bulk-api-20-end-of-life-policy.md](./bulk-api-20-end-of-life-policy.md) | Bulk API 2.0 End-of-Life Policy | developer-guide | See which Bulk API 2.0 versions are supported, unsupported, or
		unavailable. |
| [bulk-api-20-ingest.md](./bulk-api-20-ingest.md) | Bulk API 2.0 Ingest | api-reference | With Bulk API 2.0, you can insert, update, upsert, or delete large data sets. Pr |
| [bulk-api-20-older-documentation.md](./bulk-api-20-older-documentation.md) | Bulk API 2.0 Older Documentation | developer-guide | Find versions of the Bulk API 2.0 documentation released prior to Summer ’21 (AP |
| [bulk-api-20-query.md](./bulk-api-20-query.md) | Bulk API 2.0 Query | api-reference | Bulk query jobs enable asynchronous processing of SOQL queries. They’re designed |
| [bulk-api-end-of-life-policy.md](./bulk-api-end-of-life-policy.md) | Bulk API End-of-Life Policy | developer-guide | See which Bulk API versions are supported, unsupported, or unavailable. |
| [bulk-api-ingest.md](./bulk-api-ingest.md) | Bulk API Ingest | api-reference | With Bulk API, you can insert, update, or upsert large data sets into your Sales |
| [bulk-api-query.md](./bulk-api-query.md) | Bulk API Query | developer-guide | Use bulk query to efficiently query large data sets and reduce the number of API |
| [bulk-api-reference.md](./bulk-api-reference.md) | Bulk API Reference | api-reference | These are the supported resources for the Bulk API, as well as the details on er |
| [content-type-header.md](./content-type-header.md) | Content Type Header | developer-guide | Use the Content Type header to specify the format for your request and response. |
| [create-a-batch-with-binary-attachments.md](./create-a-batch-with-binary-attachments.md) | Create a Batch with Binary Attachments | help-article | After creating the job, you’re ready to create a batch of Attachment records. Yo |
| [create-a-job.md](./create-a-job.md) | Create a Job | api-reference | Creates a job representing a bulk operation and its associated data that is sent |
| [create-a-job-for-batches-with-binary-attachments.md](./create-a-job-for-batches-with-binary-attachments.md) | Create a Job for Batches with Binary Attachments | developer-guide | You can use cURL to create a job for batches containing Attachment records. |
| [create-a-query-job.md](./create-a-query-job.md) | Create a Query Job | api-reference | Creates a query job. |
| [create-a-requesttxt-file.md](./create-a-requesttxt-file.md) | Create a request.txt File | developer-guide | A batch is represented by a zip file, which contains a CSV, XML, or JSON file ca |
| [create-a-zip-batch-file-with-binary-attachments.md](./create-a-zip-batch-file-with-binary-attachments.md) | Create a Zip Batch File with Binary Attachments | developer-guide | To submit your binary attachments as a batch, you create a zip batch file
       |
| [delete-a-job.md](./delete-a-job.md) | Delete a Job | api-reference | Deletes a job. To be deleted, a job must have a state of UploadComplete, JobComp |
| [delete-a-query-job.md](./delete-a-query-job.md) | Delete a Query Job | api-reference | Deletes a query job. |
| [errors.md](./errors.md) | Errors | developer-guide | Operations that you perform with Bulk API can trigger error codes. This list sho |
| [find-field-names.md](./find-field-names.md) | Find Field Names | help-article | After you set up your client, you can build client applications that use the Bul |
| [general-guidelines-for-data-loads.md](./general-guidelines-for-data-loads.md) | General Guidelines for Data Loads | concept | For optimal processing time, consider these tips when planning your data loads.  |
| [get-a-batch-request.md](./get-a-batch-request.md) | Get a Batch Request | help-article | Get a batch request by sending a GET request to the following URI. This is avail |
| [get-batch-results.md](./get-batch-results.md) | Get Batch Results | help-article | Get results of a batch that completed processing by sending a GET request to thi |
| [get-information-about-a-query-job.md](./get-information-about-a-query-job.md) | Get Information About a Query Job | api-reference | Gets information about one query job. |
| [get-information-about-all-ingest-jobs.md](./get-information-about-all-ingest-jobs.md) | Get Information About All Ingest Jobs | api-reference | Retrieves detailed information about all jobs in the org. Job records are return |
| [get-information-about-all-query-jobs.md](./get-information-about-all-query-jobs.md) | Get Information About All Query Jobs | concept | Gets information about all query jobs in the org. |
| [get-information-about-an-ingest-job.md](./get-information-about-an-ingest-job.md) | Get Information About an Ingest Job | api-reference | Retrieves detailed information about a job. |
| [get-information-for-a-batch.md](./get-information-for-a-batch.md) | Get Information for a Batch | help-article | Get information about an existing batch by sending a GET request to this
    URI |
| [get-information-for-all-batches-in-a-job.md](./get-information-for-all-batches-in-a-job.md) | Get Information for All Batches in a Job | api-reference | Get information about all batches in a job by sending a GET request to this
  UR |
| [get-job-failed-record-results.md](./get-job-failed-record-results.md) | Get Job Failed Record Results | api-reference | Retrieves a list of failed records for a completed insert, delete, update, or up |
| [get-job-successful-record-results.md](./get-job-successful-record-results.md) | Get Job Successful Record Results | api-reference | Retrieves a list of successfully processed records for a completed job. |
| [get-job-unprocessed-record-results.md](./get-job-unprocessed-record-results.md) | Get Job Unprocessed Record Results | api-reference | Retrieves a list of unprocessed records for failed or aborted jobs. |
| [get-parallel-results-for-a-query-job.md](./get-parallel-results-for-a-query-job.md) | Get Parallel Results for a Query Job | api-reference | Returns up to five URIs in one response to use to get results for a query job. T |
| [get-results-for-a-query-job.md](./get-results-for-a-query-job.md) | Get Results for a Query Job | concept | Gets the results for a query job. |
| [handle-failed-records-in-batches.md](./handle-failed-records-in-batches.md) | Handle Failed Records in Batches | developer-guide | A batch can have a Completed state even if some or all of the records failed. If |
| [headers.md](./headers.md) | Headers | developer-guide | These are custom HTTP request and response headers that are used for Bulk API
   |
| [how-bulk-api-works.md](./how-bulk-api-works.md) | How Bulk API Works | help-article | You process a set of records by creating a job that contains one or more
    bat |
| [how-bulk-queries-are-processed.md](./how-bulk-queries-are-processed.md) | How Bulk Queries Are Processed | developer-guide | The bulk query workflow begins when you create a bulk query job and add one or m |
| [how-requests-are-processed.md](./how-requests-are-processed.md) | How Requests Are Processed | help-article | Bulk API 2.0 ingest jobs allow you to upload records to your org by using a CSV  |
| [install-curl.md](./install-curl.md) | Install cURL | api-reference | The Bulk API uses HTTP GET and HTTP POST methods to send and receive CSV, XML, a |
| [interpret-batch-state.md](./interpret-batch-state.md) | Interpret Batch State | help-article | This list gives you more details about the various states, also known as statuse |
| [introduction-to-bulk-api-20-and-bulk-api.md](./introduction-to-bulk-api-20-and-bulk-api.md) | Introduction to Bulk API 2.0 and Bulk API | developer-guide | Both Salesforce Bulk APIs are based on REST principles and are optimized for wor |
| [job-states.md](./job-states.md) | Job States | help-article | When you create job requests with Bulk API 2.0, Salesforce provides a job “state |
| [jobinfo.md](./jobinfo.md) | JobInfo | help-article | A job contains one or more batches of data for you to submit to Salesforce for
	 |
| [limits.md](./limits.md) | Limits | developer-guide | Note the following limits specific to Bulk API. |
| [line-ending-header.md](./line-ending-header.md) | Line Ending Header | developer-guide | Use the Sforce-Line-Ending header to specify how
  line endings are formatted. |
| [load-binary-attachments.md](./load-binary-attachments.md) | Load Binary Attachments | developer-guide | The Bulk API can load binary attachments, which can be Attachment objects or Sal |
| [map-data-fields.md](./map-data-fields.md) | Map Data Fields | concept | To use Bulk API to import data that was exported directly from Microsoft Outlook |
| [monitor-a-batch.md](./monitor-a-batch.md) | Monitor a Batch | help-article | You can monitor a Bulk API batch in Salesforce. |
| [organize-data-to-minimize-lock-contention.md](./organize-data-to-minimize-lock-contention.md) | Organize Data to Minimize Lock Contention | help-article | To minimize the potential for lock contention, consider pre-organizing your data |
| [pk-chunking.md](./pk-chunking.md) | PK Chunking | developer-guide | Use the primary key (PK) chunking request header to enable automatic PK chunking |
| [plan-bulk-data-loads.md](./plan-bulk-data-loads.md) | Plan Bulk Data Loads | developer-guide | Bulk API performance depends on the type of data that you're loading, as well as |
| [prepare-csv-files.md](./prepare-csv-files.md) | Prepare CSV Files | developer-guide | The first row in a CSV file lists the field names for the object that you're pro |
| [prepare-data-files.md](./prepare-data-files.md) | Prepare Data Files | developer-guide | The Bulk API processes records in comma-separated values (CSV) files, XML files, |
| [prepare-data-to-ingest.md](./prepare-data-to-ingest.md) | Prepare Data to Ingest | developer-guide | Format and organize your CSV files for upload. |
| [prepare-xml-and-json-files.md](./prepare-xml-and-json-files.md) | Prepare XML and JSON Files | developer-guide | The Bulk API processes records in XML, JSON, or CSV files. An XML or JSON file c |
| [quick-start-bulk-api.md](./quick-start-bulk-api.md) | Quick Start: Bulk API | developer-guide | You process a set of records by creating a job that contains one or more batches |
| [quick-start-bulk-api-20.md](./quick-start-bulk-api-20.md) | Quick Start: Bulk API 2.0 | api-reference | Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. Th |
| [relationship-fields-in-a-header-row.md](./relationship-fields-in-a-header-row.md) | Relationship Fields in a Header Row | developer-guide | Many objects in Salesforce are related to
        other objects. For example, Ac |
| [relationship-fields-in-a-header-row-20.md](./relationship-fields-in-a-header-row-20.md) | Relationship Fields in a Header Row (2.0) | developer-guide | Many objects in Salesforce are related to other objects. For example, Account is |
| [relationship-fields-in-records.md](./relationship-fields-in-records.md) | Relationship Fields in Records | developer-guide | Some objects also have relationships to themselves. For example, the
      Repor |
| [request-basics.md](./request-basics.md) | Request Basics | help-article | Here are some Bulk API request basics, including the format of URIs used to perf |
| [sample-client-application-using-java.md](./sample-client-application-using-java.md) | Sample Client Application Using Java | api-reference | Use this code sample to create a test client application that inserts a number o |
| [sample-csv-file.md](./sample-csv-file.md) | Sample CSV File | developer-guide | The CSV sample includes two records for the Contact object. Each record contains |
| [sample-csv-files.md](./sample-csv-files.md) | Sample CSV Files | developer-guide | These examples demonstrate different ways to use CSV data with Bulk API 2.0. |
| [sample-json-file.md](./sample-json-file.md) | Sample JSON File | developer-guide | This JSON sample includes two records for the Account object. Each record contai |
| [sample-xml-file.md](./sample-xml-file.md) | Sample XML File | developer-guide | This XML sample includes two records for the Account object. Each record contain |
| [schema.md](./schema.md) | Schema | api-reference | The Bulk API service is described by an XML Schema
            Document (XSD) fi |
| [set-a-session-header.md](./set-a-session-header.md) | Set a Session Header | help-article | All HTTP requests must contain a valid API session ID obtained with the SOAP API |
| [set-up-your-client-application.md](./set-up-your-client-application.md) | Set Up Your Client Application | api-reference | The Bulk API uses HTTP GET and HTTP POST methods to send and receive XML or JSON |
| [sforce-call-options-header.md](./sforce-call-options-header.md) | Sforce Call Options Header | developer-guide | Use the Sforce-Call-Options header to specify
  client-specific options when acc |
| [step-1-log-in-using-the-soap-api.md](./step-1-log-in-using-the-soap-api.md) | Step 1: Log In Using the SOAP API | developer-guide | The Bulk API doesn't provide a login operation, so you must use SOAP API to log
 |
| [step-1-set-up-a-salesforce-developer-edition-org.md](./step-1-set-up-a-salesforce-developer-edition-org.md) | Step 1: Set Up a Salesforce Developer Edition Org | developer-guide | This Quick Start suggests using a Developer Edition org. Sign up for a Salesforc |
| [step-2-authentication.md](./step-2-authentication.md) | Step 2: Authentication | api-reference | The first action in an API-based integration is authenticating requests with you |
| [step-2-create-a-job.md](./step-2-create-a-job.md) | Step 2: Create a Job | developer-guide | Before you can load data, you first create a job. The job specifies the type of  |
| [step-3-add-a-batch-to-the-job.md](./step-3-add-a-batch-to-the-job.md) | Step 3: Add a Batch to the Job | developer-guide | After creating the job, you’re ready to create a batch of contact records. You s |
| [step-3-bulk-insert.md](./step-3-bulk-insert.md) | Step 3: Bulk Insert | developer-guide | This Bulk API 2.0 example guides you through creating a job, uploading data for  |
| [step-4-bulk-insert-with-a-multipart-request.md](./step-4-bulk-insert-with-a-multipart-request.md) | Step 4: Bulk Insert with a Multipart Request | developer-guide | This Bulk API 2.0 example guides you through creating a job, uploading data for  |
| [step-4-close-the-job.md](./step-4-close-the-job.md) | Step 4: Close the Job | developer-guide | When you're finished submitting batches to Salesforce, close the job. Closing th |
| [step-5-bulk-upsert.md](./step-5-bulk-upsert.md) | Step 5: Bulk Upsert | help-article | This Bulk API 2.0 example guides you through creating a job, uploading data for  |
| [step-5-check-batch-status.md](./step-5-check-batch-status.md) | Step 5: Check Batch Status | developer-guide | You can check the status of an individual batch by running this cURL
    command |
| [step-6-query-jobs.md](./step-6-query-jobs.md) | Step 6: Query Jobs | help-article | This  Bulk API 2.0 example shows you how to create a query job, monitor its prog |
| [step-6-retrieve-batch-results.md](./step-6-retrieve-batch-results.md) | Step 6: Retrieve Batch Results | developer-guide | When a batch is Completed, you must retrieve the
  batch result to see the statu |
| [step-five-abort-a-job.md](./step-five-abort-a-job.md) | Step Five: Abort a Job | developer-guide | Abort an existing job by sending a POST request to this URI. The request URI ide |
| [step-four-get-job-details.md](./step-four-get-job-details.md) | Step Four: Get Job Details | help-article | Get all details for an existing job by sending a GET request to this URI. |
| [step-one-create-a-job.md](./step-one-create-a-job.md) | Step One: Create a Job | help-article | Create a job by sending a POST request to this URI. The request body identifies  |
| [step-three-close-a-job.md](./step-three-close-a-job.md) | Step Three: Close a Job | help-article | Close a job by sending a POST request to this URI. The request URI identifies th |
| [step-two-monitor-a-job.md](./step-two-monitor-a-job.md) | Step Two: Monitor a Job | help-article | You can monitor a Bulk API job in Salesforce. The monitoring page tracks jobs an |
| [subscribe-to-query-job-platform-events-beta.md](./subscribe-to-query-job-platform-events-beta.md) | Subscribe to Query Job Platform Events (Beta) | help-article | Use the standard platform event BulkApi2JobEvent to get query job status updates |
| [troubleshooting-ingest-timeouts.md](./troubleshooting-ingest-timeouts.md) | Troubleshooting Ingest Timeouts | help-article | Solve issues encountered with Bulk API 2.0 ingest operations. |
| [troubleshooting-query-timeouts.md](./troubleshooting-query-timeouts.md) | Troubleshooting Query Timeouts | developer-guide | To troubleshoot timeout errors in Bulk API 2.0 query operations, apply additiona |
| [understanding-bulk-api-20-ingest.md](./understanding-bulk-api-20-ingest.md) | Understanding Bulk API 2.0 Ingest | concept | Learn about Bulk API 2.0 availability, supported methods, and SOQL
  considerati |
| [understanding-bulk-api-20-query.md](./understanding-bulk-api-20-query.md) | Understanding Bulk API 2.0 Query | concept | Learn about Bulk API 2.0 query availability, supported methods, and SOQL
		consi |
| [upload-complete.md](./upload-complete.md) | Upload Complete | api-reference | Notifies Salesforce servers that the upload of job data is complete and is ready |
| [upload-job-data.md](./upload-job-data.md) | Upload Job Data | api-reference | Uploads data for a job using CSV data you provide. |
| [upsert-records.md](./upsert-records.md) | Upsert Records | api-reference | Create records or update existing records (upsert) based on an ID, or the value  |
| [use-bulk-query.md](./use-bulk-query.md) | Use Bulk Query | developer-guide | When you add a batch to a bulk query job,
      the Content-Type in the header f |
| [use-compression-for-bulk-api-20-ingest-responses.md](./use-compression-for-bulk-api-20-ingest-responses.md) | Use Compression for Bulk API 2.0 Ingest Responses | developer-guide | For ingest jobs, Bulk API 2.0 can compress the response body, which reduces
     |
| [use-compression-for-bulk-api-20-query-responses.md](./use-compression-for-bulk-api-20-query-responses.md) | Use Compression for Bulk API 2.0 Query Responses | developer-guide | For query jobs, Bulk API 2.0 can compress the response body, which reduces
  net |
| [use-compression-for-responses.md](./use-compression-for-responses.md) | Use Compression for Responses | developer-guide | In API version 27.0 and later, Bulk API can compress response data which reduces |
| [using-curl.md](./using-curl.md) | Using cURL | developer-guide | Get to know the formatting used with cURL to place calls to Salesforce orgs. Thi |
| [valid-csv-record-rows.md](./valid-csv-record-rows.md) | Valid CSV Record Rows | developer-guide | The Bulk API uses a strict format for field values to optimize processing for la |
| [valid-date-format-in-records.md](./valid-date-format-in-records.md) | Valid Date Format in Records | developer-guide | Specify the right format for dateTime and date fields. |
| [valid-date-format-in-records-20.md](./valid-date-format-in-records-20.md) | Valid Date Format in Records (2.0) | developer-guide | Specify the right format for dateTime and date fields. |
| [valid-xml-and-json-records.md](./valid-xml-and-json-records.md) | Valid XML and JSON Records | developer-guide | A batch request in an XML or JSON file contains records for one object type. Eac |
| [walk-through-a-bulk-query-sample.md](./walk-through-a-bulk-query-sample.md) | Walk Through a Bulk Query Sample | developer-guide | This code sample uses cURL to query several account records. |
| [walk-through-a-bulk-query-sample-using-pk-chunking.md](./walk-through-a-bulk-query-sample-using-pk-chunking.md) | Walk Through a Bulk Query Sample Using PK Chunking | developer-guide | This code sample uses cURL to perform a bulk query with PK chunking enabled on s |
| [walk-through-the-sample-code.md](./walk-through-the-sample-code.md) | Walk Through the Sample Code | api-reference | After you set up your client, you can build client applications that use the Bul |
| [walkthrough-sending-http-requests-with-curl.md](./walkthrough-sending-http-requests-with-curl.md) | Walkthrough Sending HTTP Requests with cURL | developer-guide | With cURL now configured, you can start sending HTTP requests to the Bulk API. |
| [warning-header.md](./warning-header.md) | Warning Header | help-article | This header is returned if there are warnings, such as the use of a deprecated v |
| [warnings-header.md](./warnings-header.md) | Warnings Header | help-article | Use the Warning header to return warnings, such as
  the use of a deprecated ver |
| [whats-the-difference-between-bulk-api-20-and-bulk-api.md](./whats-the-difference-between-bulk-api-20-and-bulk-api.md) | What’s the Difference Between Bulk API 2.0 and Bulk API? | developer-guide | Although Bulk API 2.0's predecessor, “Bulk API”, is available, use Bulk API 2.0  |
| [work-with-batches.md](./work-with-batches.md) | Work with Batches | help-article | A batch is a set of records sent to the server in an HTTP POST
      request. Ea |

## How to Use

1. Read this index to find the relevant topic for your question
2. Load the specific topic file(s) for detailed information
3. Each file is self-contained — no need to load other files for context

*Tags: platform*