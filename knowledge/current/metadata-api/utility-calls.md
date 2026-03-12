---
title: "Utility Calls"
domain: metadata-api
topic: utility-calls
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.552Z
estimatedTokens: 353
keywords: [Utility, Calls, utility, calls, gather, information, useful, working, file-based, CRUD-based, calls.]
---

# Utility Calls

> Use utility calls to gather information that is useful for working with the
            file-based or CRUD-based calls.

# Utility Calls

Use utility calls to gather information that is useful for working with the file-based or CRUD-based calls.

-   (Deprecated) [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.")
-   [describeMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_describe.htm "This call retrieves the metadata that describes your organization. This information includes Apex classes and triggers, custom objects, custom fields on standard objects, tab sets that define an app, and many other metadata types.")
-   [describeValueType()](atlas.en-us.api_meta.meta/api_meta/meta_describeValueType.htm "Retrieves the metadata describing a given metadata type (value type).")
-   [listMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_listmetadata.htm "This call retrieves property information about metadata components in your organization. Data is returned for the components that match the criteria specified in the queries parameter. The queries array can contain up to three ListMetadataQuery queries for each call. This call supports every metadata type: both top-level, such as CustomObject and ApexClass, and child types, such as CustomField and RecordType.")

## Related Topics

- checkStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm)
- describeMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_describe.htm)
- describeValueType() (atlas.en-us.api_meta.meta/api_meta/meta_describeValueType.htm)
- listMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_listmetadata.htm)
