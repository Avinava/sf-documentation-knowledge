---
title: "Intelligent Document Management"
domain: health-cloud-object-reference
topic: intelligent-document-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.157Z
estimatedTokens: 973
keywords: [Intelligent, Document, Management, resources, records, Salesforce, objects, content, received, Special, Access, Rules]
---

# Intelligent Document Management

> Use the Intelligent Document Management resources to create or update
      records in Salesforce objects based on the content document records or received document
      records.

# Intelligent Document Management

Use the Intelligent Document Management resources to create or update records in Salesforce objects based on the content document records or received document records.

Currently, a user can use the manual flow from the user interface to create records in the target Salesforce objects. A user can create target records based on the content document records or received document records using:

-   Transform Document—Transform the received document to create a record in the target Salesforce object.
-   Review Document—When the transformed document is used to create the target record, users can review the document for any conflicts, choose to resolve the conflicts, and update the document.

With the Intelligent Document Automation APIs, you can automate the process of getting the mappings between the values of the keys extracted from the content document and the Salesforce object fields, and create a record in the target Salesforce object.

Before using the APIs, perform AWS text extraction from the content document record or received document record by using the POST request on the OCR Text Extraction resource.

## Supported Salesforce Objects

Account, BusinessMilestone, Case, Contact, CareDiagnosis, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareProgramEnrollee, Lead, Opportunity, Visit, and custom objects.

## Special Access Rules

To use these resources, you must have the HealthCloud, DocumentChecklist, and AWSTextract1000LimitAddOn licenses.

## Available Resources

| Resource | Description |
| --- | --- |
| /connect/form-reader/contentDocuments​/${contentDocumentId}/record | Create records in Salesforce objects using a document based on a content document record. |
| /connect/form-reader/contentDocuments​/${contentDocumentId}/record/${targetRecordId} | Update an existing record in a Salesforce object using a document based on a content document record. |
| /connect/form-reader/receivedDocuments​/${receivedDocumentId}/record | Create records in Salesforce objects using a document based on a received document record. |
| /connect/form-reader/receivedDocuments​/${receivedDocumentId}/record/${targetRecordId} | Update an existing record in a Salesforce object using a document based on a received document record. |
| /connect/document-automation/contentDocuments​/${contentDocumentId}/linkedObjects/${linkedObjectId} | Split a document and attach one or more pages from the transformed document to Salesforce records. |

-   **[Record Creation with Content Documents (POST)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_create_content_documents.htm)**
    Create records in Salesforce objects using a document based on a content document record.
-   **[Record Creation with Received Documents (POST)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_create_received_documents.htm)**
    Create records in Salesforce objects using a document based on a received document record.
-   **[Record Update with Content Documents (PATCH)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_update_content_documents.htm)**
    Update an existing record in a Salesforce object using a document based on a content document record.
-   **[Record Update with Received Documents (PATCH)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_update_received_documents.htm)**
    Update an existing record in a Salesforce object using a document based on a received document record.
-   **[Split Documents](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_split_documents.htm)**
    Split a document and attach one or more pages from the transformed document to Salesforce records.

## Related Topics

- /connect/form-reader/contentDocuments​/${contentDocumentId}/record (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_create_content_documents.htm)
- /connect/form-reader/contentDocuments​/${contentDocumentId}/record/${targetRecordId} (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_update_content_documents.htm)
- /connect/form-reader/receivedDocuments​/${receivedDocumentId}/record (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_create_received_documents.htm)
- /connect/form-reader/receivedDocuments​/${receivedDocumentId}/record/${targetRecordId} (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_update_received_documents.htm)
- /connect/document-automation/contentDocuments​/${contentDocumentId}/linkedObjects/${linkedObjectId} (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_split_documents.htm)
- Record Creation with Content Documents (POST) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_create_content_documents.htm)
- Record Creation with Received Documents (POST) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_create_received_documents.htm)
- Record Update with Content Documents (PATCH) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_update_content_documents.htm)
- Record Update with Received Documents (PATCH) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_update_received_documents.htm)
- Split Documents (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_split_documents.htm)
