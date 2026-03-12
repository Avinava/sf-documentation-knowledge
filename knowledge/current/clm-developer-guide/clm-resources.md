---
title: "CLM Resources"
domain: clm-developer-guide
topic: clm-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.216Z
estimatedTokens: 1203
keywords: [CLM, Resources, Manage, Salesforce, Contracts, Check, contract, document, content, Execute, actions, status, versions, generation, process]
---

# CLM Resources

> Manage Salesforce Contracts CLM resources. Check in and check out a contract document.
      Get and delete content document details. Execute actions for a contract based on the status.
      Update and create contracts. Get and create contract document versions. Get the status of
      document generation process. Get the list of configured templates for a usage type. Get a list
      of actions possible for a particular contract. Lock and unlock an active contract document
      version. Change a template in a contract document version.

# CLM Resources

Manage Salesforce Contracts CLM resources. Check in and check out a contract document. Get and delete content document details. Execute actions for a contract based on the status. Update and create contracts. Get and create contract document versions. Get the status of document generation process. Get the list of configured templates for a usage type. Get a list of actions possible for a particular contract. Lock and unlock an active contract document version. Change a template in a contract document version.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/clm/contract-document-version/${contractDocumentVersionId}/​checkIn | Check in a contract document version using contract document version ID. |
| /connect/clm/contract-document-version/${contractDocumentVersionId}/​checkout | Check out a contract document version for modification. |
| /connect/clm/contract-document-version/${contractDocumentVersionId}/​content-documents | Get content document details associated with a contract document version. |
| /connect/clm/contract/${contractId} | Execute possible actions for a contract based on the status. Actions can trigger work flows and change the status for a contract. |
| /connect/clm/contract | Update and create contracts using the object ID. |
| /connect/clm/contract/${contractId}/​contract-document-version | Get and create contract document versions. |
| /connect/clm/document-generation-process/status | Get the status of document generation process for a given contract document version ID. |
| /connect/clm/document-template | Get the list of configured templates for a usage type. |
| /connect/clm/contract/${contractId}/contract-actions | Get the list of actions possible for a particular contract. |
| /connect/clm/contract-document-version/${contractDocumentVersionId}/​lock | Lock an active contract document version for modification. |
| /connect/clm/contract-document-version/${contractDocumentVersionId}/​unlock | Unlock latest contract document version. |
| /connect/clm/contract-document-version/${contractDocumentVersionId} | Change the template in a contract document version. |

-   **[Check In Contract Document Version](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_checkin_doc_version.htm)**
    Check in a contract document version using contract document version ID.
-   **[Check Out Contract Document Version](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_checkout_doc_version.htm)**
    Check out a contract document version for modification.
-   **[Content Document Details (GET, DELETE, PATCH)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_content_document_details.htm)**
    Get content document details associated with a contract document version. Delete content document details associated with a contract document version. Update the content document details associated with a contract document version.
-   **[Contracts (PATCH, POST)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_contracts.htm)**
    Update and create contracts using the object ID.
-   **[Contract Actions](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_contract_actions.htm)**
    Execute possible actions for a contract based on the status. Actions can trigger work flows and change the status for a contract.
-   **[Contract Document Version Template](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_template_doc_version.htm)**
    Change the template in a contract document version.
-   **[Details of Contract Document Versions](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_details_doc_version.htm)**
    Get and create contract document versions.
-   **[Document Generation Process](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_doc_generation_process.htm)**
    Get the status of document generation process for a given contract document version ID.
-   **[Document Template](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_doc_template.htm)**
    Get the list of configured templates for a usage type.
-   **[List of Contract Actions](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_list_of_contract_actions.htm)**
    Get the list of actions possible for a particular contract.
-   **[Lock Document Version](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_lock_doc_version.htm)**
    Lock an active contract document version for modification.
-   **[Unlock Document Version](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_unlock_doc_version.htm)**
    Unlock latest contract document version.

## Related Topics

- /connect/clm/contract-document-version/${contractDocumentVersionId}/​checkIn (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_checkin_doc_version.htm)
- /connect/clm/contract-document-version/${contractDocumentVersionId}/​checkout (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_checkout_doc_version.htm)
- /connect/clm/contract-document-version/${contractDocumentVersionId}/​content-documents (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_content_document_details.htm)
- /connect/clm/contract/${contractId} (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_contract_actions.htm)
- /connect/clm/contract (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_contracts.htm)
- /connect/clm/contract/${contractId}/​contract-document-version (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_details_doc_version.htm)
- /connect/clm/document-generation-process/status (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_doc_generation_process.htm)
- /connect/clm/document-template (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_doc_template.htm)
- /connect/clm/contract/${contractId}/contract-actions (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_list_of_contract_actions.htm)
- /connect/clm/contract-document-version/${contractDocumentVersionId}/​lock (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_lock_doc_version.htm)
