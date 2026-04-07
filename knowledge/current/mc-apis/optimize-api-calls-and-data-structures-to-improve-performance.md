---
title: "Optimize API Calls and Data Structures to Improve Performance"
domain: mc-apis
topic: optimize-api-calls-and-data-structures-to-improve-performance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.830Z
estimatedTokens: 2288
keywords: [Optimize, API, Calls, Data, Structures, Improve, Performance, depend, factors, server, speed, processing, power, perform, highest]
---

# Optimize API Calls and Data Structures to Improve Performance

> Your API calls depend on many more factors than server speed and processing power to perform at the highest possible level. This page contains a series of best practices designed to reduce the amount of time and impact on your account your API calls require in order to accomplish your activities.

# Optimize API Calls and Data Structures to Improve Performance

Your API calls depend on many more factors than server speed and processing power to perform at the highest possible level. This page contains a series of best practices designed to reduce the amount of time and impact on your account your API calls require in order to accomplish your activities.

## Adding and Importing Subscribers and Other Information

### Importing and Modifying Single Contacts, Subscribers, and Attributes

If you plan to import subscriber information on a per-subscriber basis (such as a web form submission), you can directly create or update a record on a subscriber list or a data extension. Use a Create Subscriber call in the SOAP API. To update records, use an Update Subscriber call in the SOAP API. In the REST API, you can POST the information using the contacts resource. Even if you pass an array of subscribers within a single call, the system still processes each subscriber individually.

You can improve performance by utilizing a relational data model. Store only necessary information (such as email address, subscriber key, status, and preference) as subscriber attributes, and store less frequently accessed data in data extensions. This structure allows you to access and process data only as needed, instead of forcing the system to load unused subscriber attributes every time you reference a list in a call.

### Importing and Modifying Multiple Contacts, Subscribers, and Attributes

To import a larger number of subscribers, plan on using an asynchronous activity started via an API call.

The Marketing Cloud optimizes all asynchronous activities to process data in large batches. Write your import definitions for reuse and avoid creating new definitions for every single data import. Otherwise, you might encounter performance issues when creating all-new definitions for single operations.

Plan your imports to run consecutively instead of concurrently. Performing multiple imports to the same data extension or subscriber list at the same time adversely affects performance. Because subscriber lists use a shared data storage model within an account, performing multiple imports to one or many subscriber lists in the same account can cause performance issues.

If you operate within an Enterprise 2.0 account, this information applies to all of the business units within your enterprise because all business units share the same subscribers. Stagger your imports programmatically to ensure the imports don't slow performance.

An ideal scenario involving imports to subscriber lists includes importing to the All Subscriber list in your account (including profile attribute details), then performing serial imports to individual lists as necessary. These more imports don't need to include profile attribute data, as the initial import to the All Subscribers list included this data.

## Performing Activities

Salesforce Marketing Cloud activities handle large amounts of data in an asynchronous operation. You can use import activities, query activities, and filter activities to process this data without the need for multiple calls. Avoid using these activities for single records or rows in a data extension.

Plan your activities to reduce the amount of server and cache space necessary to perform. Dealing with smaller amounts of data allows the servers to better cache data and demand less resources for reading the data. For your filter and query activities, examine the fields you include in your SQL queries and make sure that you include only the absolutely necessary fields (such as an ID field) and avoiding more fields that slow the process. For example, if your solution processes data through multiple filter and query activities in succession, only carry the necessary fields for each stage of the activity. Then use a final query activity to join the final results back into the original data set. This process reduces the necessary resources required to store and retrieve the more data through each stage of the process.

## Interacting with Data Extensions

### Creating and Updating Single Data Extension Rows

For processes involving importing a single row into a data extension, create a DataExtension object via the SOAP API. This type of call adds information to a data extension instead of creating an entirely new data extension.

### Creating and Adding Multiple Rows in a Data Extension

Plan import activities that update as many rows as possible in an asynchronous import activity.

Avoid processes that create multiple import definitions and data extensions with single or a small amount of records. These processes adversely affect performance. Use fewer data extensions with multiple rows and reuse import and send definitions whenever possible.

Deleting data extensions may remove them from your account view, but these entities persist until a regular deprecation process removes them. By reusing a smaller number of data extensions, you limit the number of entities the system must account for and enable faster performance.

When you delete columns from data extensions, those columns persist as well. If you perform multiple delete operations in a single data extension, you may find that recreating the data extension improves performance. Recreating the data extensions eliminates unnecessary columns and indexes. You can also implement the following activities to permanently remove data from a data extension:

-   Overwrite Import Activity
-   Query Activity
-   The Clear Data feature in Marketing Cloud

## Triggered Sends

### Single Triggered Send Calls

When creating your triggered send calls, note that including a large amount of data with the subscriber request body slows the process. Limit the amount of data passed to the triggered send call at send time and include as much information in the message as possible. You can also use parameters in links to reduce the number of links and provide more usable tracking data. This process includes using AMPscript and personalization strings to retrieve information at send time.

### Multiple Triggered Send Calls

Perform each triggered send in a single request to reduce the demand on the system. Ensure that you separate triggered send calls from other API calls to improve performance.

## Business Units

Use only the number of business units you need. Ensure that you run your imports and activities to subscriber lists on only one business unit in an Enterprise 2.0 account at a time to avoid performance issues. The Marketing Cloud shares subscriber data across all business units, no matter which business unit you actually involve in the operation. Therefore, these operations can affect performance across all business units.

You can run imports and activities on multiple business units within a Lock-and-Publish or On-Your-Behalf account without issue.

## Optimum Thresholds

While each account differs depending on the amount of data stored and the processes performed, the table below outlines some general thresholds around common practices.

-   The Normal column indicates optimum operation for the listed entity.
-   The Aggressive column indicates that your calls could encounter performance issues.
-   The Extreme column indicates significant performance degradation that requires immediate remediation.

| Entity | Normal | Aggressive | Extreme |
| --- | --- | --- | --- |
| Concurrent Imports to a Data Extension | 1 | 2 | 3 or more |
| Concurrent Imports to Lists | 1 | 2 | 3 or more |
| Data Extensions in an Account | 0-1000 | 1000-10000 | >10000 |
| Enterprise 2.0 Business Units | 0-1000 | 1000-2000 | >2000 |
| Import and Filter Definitions | 0-1000 | 1000-2000 | >2000 |
| Lists and Groups in an Account | 0-1000 | 1000-10000 | >10000 |
| Objects in a Folder | 0-1000 | 1000-2000 | >2000 |
| Profile Attributes | 0-50 | 50-100 | >100 |
| Profile Attributes in an Enterprise 2.0 Account | 0-50 | 50-100 | >100 |
| Profile Attributes in an On-Your-Behalf or Lock-and-Publish Account | 0-50 | 50-100 | >100 |
| Profile Attributes Included in an Account or Business Unit Filter Definition | 1-2 | 3-5 | 6 or more |
| Rows in a Data Extension | 0-1 million | 1 million to 100 million | >100 million |
| Sender Profiles | 0-50 | 50-100 | >100 |
| Subscribers | 0-2 million | 2 million to 10 million | >10 million |
| Users | 0-1000 | 1000-2000 | >2000 |

## Related Items

-   [Create a Subscriber](atlas.en-us.noversion.mc-apis.meta/mc-apis/create_a_subscriber.htm)
-   [Update Subscriber Attributes](atlas.en-us.noversion.mc-apis.meta/mc-apis/updating_subscriber_attributes_using_the_update_method.htm)
-   [Create Contacts Using REST](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createContacts.htm)
-   [Start an Import Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_import_definition_via_the_web_service_api.htm)
-   [DataExtension Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/dataextensionobject.htm)
-   [Your Subdomain and Your Tenant's Endpoints](atlas.en-us.noversion.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)

## Related Topics

- Create a Subscriber (atlas.en-us.noversion.mc-apis.meta/mc-apis/create_a_subscriber.htm)
- Update Subscriber Attributes (atlas.en-us.noversion.mc-apis.meta/mc-apis/updating_subscriber_attributes_using_the_update_method.htm)
- Start an Import Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_import_definition_via_the_web_service_api.htm)
- DataExtension Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/dataextensionobject.htm)
- Your Subdomain and Your Tenant's Endpoints (atlas.en-us.noversion.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
