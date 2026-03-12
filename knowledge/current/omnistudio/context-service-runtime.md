---
title: "Context Service Runtime"
domain: omnistudio
topic: context-service-runtime
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.025Z
estimatedTokens: 651
keywords: [Context, Service, Runtime, Create, new, runtime, context, instances, query, data, delete, instances.]
---

# Context Service Runtime

> Create new runtime context instances, query data from context instances, and delete
        context instances.

# Context Service Runtime

Create new runtime context instances, query data from context instances, and delete context instances.

-   **[Context Service (POST)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_create_context.htm)**
    Create new context records by submitting metadata and associated JSON data. After validating the data, the system generates a new context ID. Context objects created using this API apply only to a single request. They cannot be used to pass data across multiple requests.
-   **[Context Service (DELETE, GET)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_context_service_runtime.htm)**
    Retrieve the context details using a context ID. Delete a context record using a context ID.
-   **[Context Attribute (PATCH)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_update_context_attribute.htm)**
    Update attributes of a context record.
-   **[Context Runtime Schema (DELETE)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_context_runtime_schema.htm)**
    Clear runtime schema cache for context definitions and their associated mappings.
-   **[Query Context Definition Interfaces (GET)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_query_context_interfaces.htm)**
    Get the lists of metadata associated with context definition interfaces.
-   **[Query Context Definition Interface By Name (GET)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_query_context_interface_by_name.htm)**
    Get the details of a context definition interface by using the context definition interface name.
-   **[Query Context Record (POST)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_query_context_record.htm)**
    Query a context record, with the option to retrieve child records.
-   **[Query Record Status (PATCH, POST)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_create_update_query_data_record_status.htm)**
    Update the processing status and related error messages of query data records. Create the processing status and related error messages of query data records
-   **[Query Tags (POST)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_create_query_tag.htm)**
    Create query tags within a defined context
-   **[Write Through Tags (PATCH)](atlas.en-us.industries_reference.meta/industries_reference/connect_resources_write_through_tags.htm)**
    Update Context Attributes through tags.

## Related Topics

- Context Service (POST) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_create_context.htm)
- Context Service (DELETE, GET) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_context_service_runtime.htm)
- Context Attribute (PATCH) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_update_context_attribute.htm)
- Context Runtime Schema (DELETE) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_context_runtime_schema.htm)
- Query Context Definition Interfaces (GET) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_query_context_interfaces.htm)
- Query Context Definition Interface By Name (GET) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_query_context_interface_by_name.htm)
- Query Context Record (POST) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_query_context_record.htm)
- Query Record Status (PATCH, POST) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_create_update_query_data_record_status.htm)
- Query Tags (POST) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_create_query_tag.htm)
- Write Through Tags (PATCH) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_write_through_tags.htm)
