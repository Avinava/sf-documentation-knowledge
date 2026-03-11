---
title: "Result Objects"
domain: metadata-api
topic: result-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.435Z
keywords: [Result, Objects]
---

# Result Objects

# Result Objects

Use the following objects to get the results of your [file-based](atlas.en-us.api_meta.meta/api_meta/meta_file_based_calls_intro.htm "Use file-based calls to deploy or retrieve XML components.") or [CRUD-based](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects.") calls.

-   **[AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)**  
    Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.
-   **[CancelDeployResult](atlas.en-us.api_meta.meta/api_meta/meta_canceldeployresult.htm)**  
    Contains information about a deployment cancellation—whether the cancellation completed and the deployment ID.
-   **[DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm)**  
    Contains information about the success or failure of the associated deploy() call.
-   **[DescribeMetadataResult](atlas.en-us.api_meta.meta/api_meta/meta_describemeta_result.htm)**  
    Contains information about the organization that is useful for developers working with declarative metadata.
-   **[DescribeValueTypeResult](atlas.en-us.api_meta.meta/api_meta/meta_describeValueTypeResult.htm)**  
    Contains information about a value type that’s useful for developers working with declarative metadata.
-   **[ReadResult](atlas.en-us.api_meta.meta/api_meta/meta_readResult.htm)**  
    Contains result information for the readMetadata call.
-   **[RetrieveResult](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)**  
    The retrieve() call returns an array of RetrieveResult objects.
-   **[SaveResult](atlas.en-us.api_meta.meta/api_meta/meta_saveResult.htm)**  
    Contains result information for the createMetadata, updateMetadata, or renameMetadata call.
-   **[DeleteResult](atlas.en-us.api_meta.meta/api_meta/meta_deleteResult.htm)**  
    Contains result information for the deleteMetadata call.
-   **[UpsertResult](atlas.en-us.api_meta.meta/api_meta/meta_upsertResult.htm)**  
    Contains information about the result of the associated upsertMetadata() call.
-   **[Error](atlas.en-us.api_meta.meta/api_meta/meta_error.htm)**  
    Represents an error that occurred during a synchronous CRUD (createMetadata(), updateMetadata(), or deleteMetadata()) operation.