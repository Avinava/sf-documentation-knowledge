---
title: "OcrTemplate"
domain: psc-api
topic: ocrtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.792Z
estimatedTokens: 1638
keywords: [OcrTemplate, mapping, form, Salesforce, Intelligent, Document, Reader.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, document, Reader, API, version, 55.0]
---

# OcrTemplate

> Represents the details of the mapping between a form and a
      Salesforce object using Intelligent Document Reader.This type
      extends the Metadata metadata
      type and inherits its fullName field.

# OcrTemplate

Represents the details of the mapping between a form and a Salesforce object using Intelligent Document Reader.This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

OcrTemplate components have the suffix .ocrTemplate and are stored in the ocrTemplates folder.

## Version

OcrTemplate components are available in API version 55.0 and later.

## Special Access Rules

To use this metadata type, your Salesforce org must have the AWSTextract1000LimitAddOn or IntelligentDocumentReaderAddOn license.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the OCR template is active (true) or not (false). |
| description | string | The description of the OCR template. |
| documentType | string | Required. The document type for which this template defines mappings. |
| masterLabel | string | Required. The label for the OCR template. |
| ocrTargetObjects | OcrTargetObject[] | Represents the details of the object to which information from a form is extracted and mapped. |
| ocrTemplateSampleDocuments | OcrTemplateSampleDocument[] | Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer form. |
| pageCount | integer | The number of pages in the form from which information is extracted. |
| templateName | string | Required. The name of the OCR template. |

## OcrTargetObject

Represents the details of the object to which information from a form is extracted and mapped.

| Field Name | Field Type | Description |
| --- | --- | --- |
| ocrTargetObjectFieldMappings | OcrTargetObjFieldMapping[] | Represents the details of how information from a form field is mapped to fields in an object. |
| targetObject | string | Required. The object to which information from a form is mapped. |
| targetObjectRecordType | string | The developer name of the record type of the target object. Available in API version 56.0 and later. |

## OcrTargetObjFieldMapping

Represents the details of how information from a form field is mapped to fields in an object.

| Field Name | Field Type | Description |
| --- | --- | --- |
| ocrSampleDocField | OcrSampleDocumentField[] | The details of the field in a form whose value is extracted and mapped to a Salesforce object field. |
| targetField | string | Required. The field to which information is mapped. |
| type | OcrMappingType (enumeration of type string) | Required. Specifies the type of mapping. Available in API version 56.0 and later.Valid values are:FormFieldTableColumnThe default value is FormField. |

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
| fieldValueName | string | The name of the referred field value. Available in API version 56.0 and later. |
| keyContent | string | The content in a particular area of the form, representing the field that is extracted by OCR. |
| ocrSampleDocument | string | Required. The associated OCR sample document used as a reference while extracting and mapping information from a customer form. |
| ocrSampleDocumentPage | string | A collection of fields that define a page in the OCR sample document. |
| ocrSampleDocumentPageItem | OcrSampleDocumentPageItem[] | A reference to the item on the sample document page containing this field's value. Available in API version 56.0 and later. |

## OcrSampleDocumentPageItem

Represents a foreign key reference to the item on the sample document page containing a value for the page item.

| Field Name | Field Type | Description |
| --- | --- | --- |
| hasHeader | boolean | Indicates whether the OCR sample document page item has a header (true) or not (false). The default value is false. Available in API version 56.0 and later. |
| sequenceNumber | int | Required. The sequence number of the item on an OCR sample document page with multiple items. Available in API version 56.0 and later. |
| title | string | The title of the OCR sample document page item. Available in API version 56.0 and later. |
| type | ItemType (enumeration of type string) | Required. Specifies the type of OCR sample document page item.Valid value is TABLE.Available in API version 56.0 and later. |

## OcrTemplateSampleDocument

Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer form.

| Field Name | Field Type | Description |
| --- | --- | --- |
| ocrSampleDocument | string | The associated OCR sample document used as a reference while extracting and mapping information from a customer form. |

## Declarative Metadata Sample Definition

The following is an example of a OcrTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<OcrTemplate xmlns="http://soap.sforce.com/2006/04/metadata">
   <active>false</active>
   <documentType>Form</documentType>
   <masterLabel>Form Test 222</masterLabel>
   <ocrTargetObjects>
      <ocrTargetObjFieldMappings>
         <ocrSampleDocField>
            <cellColumnNumber>1</cellColumnNumber>
            <cellColumnSpanValue>1</cellColumnSpanValue>
            <cellRowNumber>1</cellRowNumber>
            <cellRowSpanValue>1</cellRowSpanValue>
             <fieldLabelMaxX>0.5975854</fieldLabelMaxX>
             <fieldLabelMaxY>0.46625894</fieldLabelMaxY>
             <fieldLabelMinX>0.5065626</fieldLabelMinX>
             <fieldLabelMinY>0.39605626</fieldLabelMinY>
             <keyContent>Last Name</keyContent>
             <ocrSampleDocument>image240</ocrSampleDocument>
             <ocrSampleDocumentPage>1</ocrSampleDocumentPage>
             <ocrSampleDocumentPageItem>
                <hasHeader>false</hasHeader>
                <sequenceNumber>1</sequenceNumber>
                <title>Table1</title>
                <type>TABLE</type>
            </ocrSampleDocumentPageItem>
        </ocrSampleDocField>
      <targetField>Account.Name</targetField>
      <type>TableColumn</type>
      </ocrTargetObjFieldMappings>
      <targetObject>Account</targetObject>
      <targetObjectRecordType>Account.X240</targetObjectRecordType>
   </ocrTargetObjects>
   <ocrTemplateSampleDocuments>
      <ocrSampleDocument>Form</ocrSampleDocument>
   </ocrTemplateSampleDocuments>
   <pageCount>10</pageCount>
   <templateName>Form Test</templateName>
</OcrTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>OcrTemplate</name>
   </types>
   <version>66.0</version>
</Package>
```
