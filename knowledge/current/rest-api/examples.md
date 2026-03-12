---
title: "Examples"
domain: rest-api
topic: examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.986Z
estimatedTokens: 1184
keywords: [Examples, REST, API, resources, variety, different, tasks, including, working, objects, organization, queries]
---

# Examples

> This section provides examples of using REST API resources to do a variety of different tasks,
   including working with objects, organization information, and queries.

# Examples

This section provides examples of using REST API resources to do a variety of different tasks, including working with objects, organization information, and queries.

For complete reference information on REST API resources, see [Reference](atlas.en-us.api_rest.meta/api_rest/resources_list.htm "The following table lists supported REST resources in the API and provides a brief description for each.").

1.  [Getting Information About My Organization](atlas.en-us.api_rest.meta/api_rest/using_resources_getting_info_about_my_org.htm)
    The examples in this section use REST API resources to retrieve organization-level information, such as a list of all objects available in your organization.
2.  [Working with Object Metadata](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_object_metadata.htm)
    The examples in this section use REST API resources to retrieve object metadata information. For modifying or creating object metadata information, see the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "HTML (New Window)").
3.  [Working with Records](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_records.htm)
    The examples in this section use REST API resources to create, retrieve, update, and delete records, along with other record-related operations.
4.  [Delete Lightning Experience Event Series](atlas.en-us.api_rest.meta/api_rest/dome_event_series_delete.htm)
    Use the HTTP DELETE method to remove one or more IsRecurrence2 events in a series. You can remove a single event, all events following and including a specific event, or an entire event series.
5.  [Working with Searches and Queries](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_searches_and_queries.htm)
    The examples in this section use REST API resources to search and query records using Salesforce Object Search Language (SOSL) and Salesforce Object Query Language (SOQL), and other search APIs. For more information on SOSL and SOQL see the [SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").
6.  [Get an Image from a Rich Text Area Field](atlas.en-us.api_rest.meta/api_rest/dome_sobject_rich_text_image_retrieve.htm)
    Use the \*\*\* resource to retrieve an image from a rich text area field. In this example, we retrieve an image from a custom rich text field of a Lead record called LeadPhotoRichText\_\_c. We assume that an image has already been uploaded to this field.
7.  [Insert or Update Blob Data](atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm)
    You can use the sObject Basic Information, sObject Rows, or sObject Collections resources to insert or update binary large objects (blobs) in Salesforce, such as images or PDFs. You can upload files or binary data of any type to any standard object that contains a blob field.
8.  [Get Blob Data](atlas.en-us.api_rest.meta/api_rest/dome_sobject_blob_retrieve.htm)
    Use the sObject Blob Get resource to get blob data for a given record. To get blob data, a record with blob data must exist in Salesforce.
9.  [Working with Recently Viewed Information](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_recently_viewed.htm)
    The examples in this section use REST API Query and Recently Viewed resources to programmatically retrieve and update recently viewed record information.
10.  [Managing User Passwords](atlas.en-us.api_rest.meta/api_rest/using_resources_managing_user_passwords.htm)
     The examples in this section use REST API resources to manage user passwords, such as setting or resetting passwords.
11.  [Working with Approval Processes and Process Rules](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_processes.htm)
     The examples in this section use REST API resources to work with approval processes and process rules.
12.  [Using Event Monitoring](atlas.en-us.api_rest.meta/api_rest/using_resources_event_log_files.htm)
     These examples use REST API event monitoring data that contains information useful for assessing org usage trends and user behavior. Event monitoring is accessed through the Lightning Platform SOAP API and REST API by way of the EventLogFile object. Therefore, you can integrate log data with your own back-end storage and data marts to correlate data from multiple orgs and across disparate systems.
13.  [Using Composite Resources](atlas.en-us.api_rest.meta/api_rest/using_composite_resources.htm)
     The examples in this section use composite resources to improve your application’s performance by minimizing the number of round-trips between the client and server.

## Related Topics

- Reference (atlas.en-us.api_rest.meta/api_rest/resources_list.htm)
- Getting Information About My Organization (atlas.en-us.api_rest.meta/api_rest/using_resources_getting_info_about_my_org.htm)
- Working with Object Metadata (atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_object_metadata.htm)
- Working with Records (atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_records.htm)
- Delete Lightning Experience Event Series (atlas.en-us.api_rest.meta/api_rest/dome_event_series_delete.htm)
- Working with Searches and Queries (atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_searches_and_queries.htm)
- Get an Image from a Rich Text Area Field (atlas.en-us.api_rest.meta/api_rest/dome_sobject_rich_text_image_retrieve.htm)
- Insert or Update Blob Data (atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm)
- Get Blob Data (atlas.en-us.api_rest.meta/api_rest/dome_sobject_blob_retrieve.htm)
- Working with Recently Viewed Information (atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_recently_viewed.htm)
