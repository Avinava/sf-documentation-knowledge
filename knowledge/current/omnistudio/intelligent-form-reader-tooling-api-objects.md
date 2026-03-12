---
title: "Intelligent Form Reader Tooling API Objects"
domain: omnistudio
topic: intelligent-form-reader-tooling-api-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.313Z
estimatedTokens: 720
keywords: [Intelligent, Form, Reader, Tooling, API, Objects, metadata, developer, access, REST, SOAP, API’s, SOQL, capabilities, allow]
---

# Intelligent Form Reader Tooling API Objects

> Tooling API exposes metadata used in developer tooling that
        you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types
        allow you to retrieve smaller pieces of metadata. For more information about Tooling API
        objects and to find a complete reference of all the supported objects, see Introducing Tooling API.

# Intelligent Form Reader Tooling API Objects

Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. For more information about Tooling API objects and to find a complete reference of all the supported objects, see **[Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm)**.

-   **[OcrSampleDocument](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrsampledocument.htm)**
    Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer document. This object is available in API version 52.0 and later.
-   **[OcrSampleDocumentField](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrsampledocumentfield.htm)**
    Represents the details of the field in a document whose value is extracted and mapped to a Salesforce object field. This object is available in API version 52.0 and later.
-   **[OcrSampleDocumentPage](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrsampledocumentpage.htm)**
    Represents a collection of fields that define a page in the OCR sample document. This object is available in API version 52.0 and later.
-   **[OcrSampleDocumentPageItem](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrsampledocumentpageitem.htm)**
    Represents details of items present on an OCR sample document page. This object is available in API version 56.0 and later.
-   **[OcrTargetObject](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrtargetobject.htm)**
    Represents the details of the object to which information from a document is extracted and mapped. This object is available in API version 52.0 and later.
-   **[OcrTargetObjFieldMapping](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrtargetobjfieldmapping.htm)**
    Represents the details of how information from a document field is mapped to fields in an object. This object is available in API version 52.0 and later.
-   **[OcrTemplate](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrtemplate.htm)**
    Represents the details of the mapping between a document and a Salesforce object using Intelligent Form Reader. This object is available in API version 52.0 and later.
-   **[OcrTemplateSampleDocument](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrtemplatesampledocument.htm)**
    Represents a relationship between an OCR template and an OCR sample document. This object is available in API version 52.0 and later.

## Related Topics

- OcrSampleDocument (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrsampledocument.htm)
- OcrSampleDocumentField (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrsampledocumentfield.htm)
- OcrSampleDocumentPage (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrsampledocumentpage.htm)
- OcrSampleDocumentPageItem (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrsampledocumentpageitem.htm)
- OcrTargetObject (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrtargetobject.htm)
- OcrTargetObjFieldMapping (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrtargetobjfieldmapping.htm)
- OcrTemplate (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrtemplate.htm)
- OcrTemplateSampleDocument (atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ocrtemplatesampledocument.htm)
