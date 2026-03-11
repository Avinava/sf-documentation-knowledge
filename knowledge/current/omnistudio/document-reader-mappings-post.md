---
title: "Document Reader Mappings (POST)"
domain: omnistudio
topic: document-reader-mappings-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:10.357Z
keywords: [Document, Reader, Mappings, POST, Permission, Usage, See]
---

# Document Reader Mappings (POST)

# Document Reader Mappings (POST)

Retrieve the mappings between the values of the keys extracted from the document to the Salesforce object fields with respect to a given template.

## Permission

To use this resource, you must have the Intelligent Document Reader feature enabled in your Salesforce organization.

## Usage

Use the corresponding template ID and the scan result ID for the OCR document scan result (ODSR) record of the document from which you want to fetch the values. Using the values from the document and field mapping from the template, you get the mapping between values and target field based on the key in both the document and template.

Here’s a sample of how the Salesforce UI displays mapping of form types to objects:![A representation of the map form types to objects Mapping screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Findustries%2Fimages%2Fintelligent_document_reader_field_mappings.png&folder=industries_reference)

Resource

```

```

Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isExactMatch | Boolean | Indicates whether the mapping between values and target field must be returned only when the key matches in both the document and template (true) or not (false).Default value is true. | Optional | 55.0 |
| scanResultId | String | The ID of the OCR document scan result. The scan result contains the contents of a document after optical character recognition (OCR) processing. | Required | 55.0 |
| templateId | String | The ID of the OCR template. This represents the details of the mapping between a document and a Salesforce object using Intelligent Document Reader. | Required | 55.0 |

Response body for POST

[Form Reader Map Output](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_document_reader_map_output.htm "Output representation of the mappings of the extracted text.")

#### See Also

-   [OcrDocumentScanResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_ocrdocumentscanresult.htm "OcrDocumentScanResult - HTML (New Window)")
    
-   [OcrTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/meta_ocrtemplate.htm "OcrTemplate - HTML (New Window)")