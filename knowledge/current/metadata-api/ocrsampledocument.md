---
title: "OcrSampleDocument"
domain: metadata-api
topic: ocrsampledocument
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.783Z
keywords: [OcrSampleDocument, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, OcrSampleDocumentField, OcrSampleDocumentPage, OcrSampleDocumentPageItem, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# OcrSampleDocument

# OcrSampleDocument

Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer form. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

The OcrSampleDocument type doesn’t need to represent a real sample document. It can also be an abstract document that represents all documents of the same DocumentType. In such cases, the contentAsset and documentHeight fields are null.

## File Suffix and Directory Location

OcrSampleDocument components have the suffix .ocrSampleDocument and are stored in the ocrSampleDocuments folder.

## Version

OcrTemplate components are available in API version 52.0 and later.

## Special Access Rules

To use this metadata type, your Salesforce org must have the AWSTextract1000LimitAddOn license.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| applicationType | OcrApplicationType (enumeration of type string) | The type of application using the OCR sample document.Possible values are:EinsteinDocumentReaderIndustries |
| contentAsset | string | The ID of the OCR sample document asset.This field is null if the OcrSampleDocument is an abstract document representing the DocumentType. |
| documentHeight | double | The normalized height of the OCR sample document page.This field is null if the OcrSampleDocument is an abstract document representing the DocumentType. |
| documentType | string | Required. The type of the OCR sample document. |
| masterLabel | string | Required. The label for the OCR sample document. |
| ocrSampleDocumentFields | OcrSampleDocumentField[] | The details of the field in a form whose value is extracted and mapped to a Salesforce object field. |
| ocrSampleDocumentPages | OcrSampleDocumentPage[] | A collection of fields that define a page in the OCR sample document. |

## OcrSampleDocumentField

Represents the details of the field in a form whose value is extracted and mapped to a Salesforce object field.

| Field Name | Field Type | Description |
| --- | --- | --- |
| cellColumnNumber | int | The column number in the item with the cell storing this field’s value. Available in API version 56.0 and later. |
| cellColumnSpanValue | int | The number of columns that span the cell storing this field’s value. Available in API version 56.0 and later. |
| cellRowNumber | int | The row number in the item with the cell storing this field’s value. Available in API version 56.0 and later. |
| cellRowSpanValue | int | The number of rows that span the cell storing this field’s value. Available in API version 56.0 and later. |
| fieldLabelMaxX | double | A normalized coordinate representing the right edge of the bounding box of the key. |
| fieldLabelMaxY | double | A normalized coordinate representing the bottom edge of the bounding box of the key. |
| fieldLabelMinX | double | A normalized coordinate representing the left edge of the bounding box of the key. |
| fieldLabelMinY | double | A normalized coordinate representing the top edge of the bounding box of the key. |
| fieldValueName | string | Name of the referred field value. Available in API version 56.0 and later. |
| isAutoExtractedValue | boolean | Indicates whether the key is automatically extracted (true) or not (false). Available in API version 57.0 and later.This field helps to distinguish auto-extracted keys from manual ones. |
| keyContent | string | The content in a particular area of the form, representing the field that is extracted by OCR. |
| ocrSampleDocument | string | Required. The associated OCR sample document used as a reference while extracting and mapping information from a customer form. |
| ocrSampleDocumentPage | string | A reference to a page of the OCR sample document that contains the key.This field is null if the OcrSampleDocument is an abstract document representing the DocumentType. |
| ocrSampleDocumentPageItem | OcrTemplate | A reference to the item on the sample document page containing this field's value. Available in API version 56.0 and later. |

## OcrSampleDocumentPage

Represents a collection of fields that define a page in the OCR sample document. This type exists only if the OcrSampleDocument is a real sample document and not an abstract document representing the DocumentType.

| Field Name | Field Type | Description |
| --- | --- | --- |
| ocrSampleDocument | string | Required. The associated OCR sample document used as a reference while extracting and mapping information from a customer form. |
| ocr​Sample​Document​Page​Items | OcrSampleDocument | The collection of page items with the associated OCR sample document page. Available in API version 56.0 and later. |
| pageHeight | double | The normalized height of the OCR sample document page. |
| pageNumber | integer | Required. The page number of the page in the associated OCR sample document. |

## OcrSampleDocumentPageItem

Represents a foreign key reference to the item on the sample document page containing a value for the page item.

| Field Name | Field Type | Description |
| --- | --- | --- |
| hasHeader | boolean | Indicates whether the OCR sample document page item has a header (true) or not (false). The default value is false. Available in API version 56.0 and later. |
| sequenceNumber | int | Required. The sequence number of the item on an OCR sample document page with multiple items. Available in API version 56.0 and later. |
| title | string | The title of the OCR sample document page item. Available in API version 56.0 and later. |
| type | ItemType (enumeration of type string) | Required. Specifies the type of OCR sample document page item. Available in API version 56.0 and later.Valid value is TABLE. |

## Declarative Metadata Sample Definition

The following is an example of a OcrSampleDocument component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").