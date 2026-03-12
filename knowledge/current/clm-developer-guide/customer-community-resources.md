---
title: "Customer Community Resources"
domain: clm-developer-guide
topic: customer-community-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.249Z
estimatedTokens: 358
keywords: [Customer, Community, Resources, Manage, document, control, users, Salesforce's, Contract, Lifecycle, Management, CLM, securely, access, recent]
---

# Customer Community Resources

> Manage document control for Customer Community (CC) users by using
      Salesforce's
      Contract Lifecycle Management (CLM). Using CLM, CC users can securely access the most recent
      contract document versions. Use the Contract Document Version resource to streamline document
      sharing for external reviews and digital signing, ensuring access is granted only for the
      latest and relevant contract versions in compliance with the user's account and contract
      status.

# Customer Community Resources

Manage document control for Customer Community (CC) users by using Salesforce's Contract Lifecycle Management (CLM). Using CLM, CC users can securely access the most recent contract document versions. Use the Contract Document Version resource to streamline document sharing for external reviews and digital signing, ensuring access is granted only for the latest and relevant contract versions in compliance with the user's account and contract status.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/clm/cc/contract/${contractId}/contract-document-version (GET) | Get latest details of a contract document version based on a contract ID. |
| /connect/clm/cc/documentRecipient?contractDocumentVersion=${contractDocumentVersionId} (GET) | Fetch recipient status for contract document versions to monitor e-signature progress and identify decline reasons. |

-   **[Contract Document Version for Customer Community User (GET)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_cc_user_contract_doc_version.htm)**
    Get latest details of a contract document version based on a contract ID.
-   **[Document Recipient (GET)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_document_recipient.htm)**
    Fetch recipient status for contract document versions to monitor e-signature progress and identify decline reasons.

## Related Topics

- /connect/clm/cc/contract/${contractId}/contract-document-version
                           (GET) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_cc_user_contract_doc_version.htm)
- /connect/clm/cc/documentRecipient?contractDocumentVersion=${contractDocumentVersionId}
                           (GET) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_document_recipient.htm)
- Contract Document Version for Customer Community User (GET) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_cc_user_contract_doc_version.htm)
- Document Recipient (GET) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_resources_document_recipient.htm)
