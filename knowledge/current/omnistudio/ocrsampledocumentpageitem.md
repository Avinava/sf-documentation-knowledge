---
title: "OcrSampleDocumentPageItem"
domain: omnistudio
topic: ocrsampledocumentpageitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.575Z
keywords: [OcrSampleDocumentPageItem, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# OcrSampleDocumentPageItem

# OcrSampleDocumentPageItem

Represents details of items present on an OCR sample document page. This object is available in API version 56.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To use this tooling API object, your Salesforce org must have the AWSTextract1000LimitAddOn license.

## Fields

| Field | Details |
| --- | --- |
| HasHeader | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the OCR sample document page item has a header.The default value is false. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| OcrSampleDocumentPageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the OCR sample document page associated with the page item.This field is a relationship field.Relationship NameOcrSampleDocumentPageRelationship TypeLookupRefers ToOcrSampleDocumentPage |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sequence number of the item on an OCR sample document page with multiple items. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTitle of the OCR sample document page item. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of OCR sample document page item.Possible values is TABLE. |