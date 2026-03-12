---
title: "Troubleshooting Ingest Timeouts"
domain: api-asynch
topic: troubleshooting-ingest-timeouts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.368Z
estimatedTokens: 890
keywords: [Troubleshooting, Ingest, Timeouts, Solve, issues, encountered, Bulk, API, 2.0, operations]
---

# Troubleshooting Ingest Timeouts

> Solve issues encountered with Bulk API 2.0 ingest operations.

# Troubleshooting Ingest Timeouts

Solve issues encountered with Bulk API 2.0 ingest operations.

To troubleshoot an ingest timeout error, try the following suggestions:

1.  **Check your payload.**
    -   Check CSV formatting. [Prepare CSV Files](atlas.en-us.api_asynch.meta/api_asynch/datafiles_prepare_csv.htm "The first row in a CSV file lists the field names for the object that you're processing. Each subsequent row corresponds to a record in Salesforce.")
    -   Check Date formatting. [Valid Date Format in Records (2.0)](atlas.en-us.api_asynch.meta/api_asynch/valid_date_format_in_records__2_0.htm "Specify the right format for dateTime and date fields.")
    -   Check Relationship fields. [Relationship Fields in a Header Row (2.0)](atlas.en-us.api_asynch.meta/api_asynch/relationship_fields_in_a_header_row__2_0.htm "Many objects in Salesforce are related to other objects. For example, Account is a parent of Contact. You can add a reference to a related object in a CSV file by representing the relationship in a column header. When you're processing records in the Bulk API, you use RelationshipName.IndexedFieldName syntax in a CSV column header to describe the relationship between an object and its parent, where RelationshipName is the relationship name of the field and IndexedFieldName is the indexed field name that uniquely identifies the parent record. Use the describeSObjects() call in the API to get the relationshipName property value for a field.")
    -   Check that compression is gzip format. [Use Compression for Bulk API 2.0 Ingest Responses](atlas.en-us.api_asynch.meta/api_asynch/datafiles_use_compression.htm "For ingest jobs, Bulk API 2.0 can compress the response body, which reduces network traffic and improves response time.")
    -   Check that your data is organized to prevent lock contenttion. [Organize Data to Minimize Lock Contention](atlas.en-us.api_asynch.meta/api_asynch/datafiles_organize_data.htm "To minimize the potential for lock contention, consider pre-organizing your data when planning your Bulk API 2.0 data loads.")
2.  **Create a new ingest job with only the failed and unprocessed records.**
    -   To get the failed records, use [Get Job Failed Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_failed_results.htm "Retrieves a list of failed records for a completed insert, delete, update, or upsert job.").
    -   To get the unprocessed records, use [Get Job Unprocessed Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm "Retrieves a list of unprocessed records for failed or aborted jobs.").
3.  **Divide the job into smaller jobs.**
    -   Creating smaller requests may help to isolate problems in one or more jobs.
4.  **Review your custom logic, such as triggers or flows.**
    -   Non-optimized custom logic can contribute to timeouts. In order to speed up insert, update, or delete operations, make sure triggers or flows are optimized. Consider temporarily disabling triggers or flows that are non-essential.

-   **[Organize Data to Minimize Lock Contention](atlas.en-us.api_asynch.meta/api_asynch/datafiles_organize_data.htm)**
    To minimize the potential for lock contention, consider pre-organizing your data when planning your Bulk API 2.0 data loads.

#### See Also

-   [Errors](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_errors.htm "Operations that you perform with Bulk API 2.0 can trigger error codes. This list shows the most common error codes and the Bulk API 2.0 action that possibly triggered them.")

## Related Topics

- Prepare CSV Files (atlas.en-us.api_asynch.meta/api_asynch/datafiles_prepare_csv.htm)
- Valid Date Format in Records (2.0) (atlas.en-us.api_asynch.meta/api_asynch/valid_date_format_in_records__2_0.htm)
- Relationship Fields in a Header Row (2.0) (atlas.en-us.api_asynch.meta/api_asynch/relationship_fields_in_a_header_row__2_0.htm)
- Use Compression for Bulk API 2.0 Ingest Responses (atlas.en-us.api_asynch.meta/api_asynch/datafiles_use_compression.htm)
- Organize Data to Minimize Lock Contention (atlas.en-us.api_asynch.meta/api_asynch/datafiles_organize_data.htm)
- Get Job Failed Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_failed_results.htm)
- Get Job Unprocessed Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm)
- Errors (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_errors.htm)
