---
title: "OcrSampleDocument"
domain: omnistudio
topic: ocrsampledocument
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.561Z
keywords: [OcrSampleDocument, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# OcrSampleDocument

# OcrSampleDocument

Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer document. This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To use this tooling API object, your Salesforce org must have the AWSTextract1000LimitAddOn license.

## Fields

| Field | Details |
| --- | --- |
| ApplicationType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe application associated with the OCR sample document. Available in API version 54.0 and later.Possible values are:EinsteinDocumentReaderIndustries |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| DocumentHeight | TypedoublePropertiesFilter, Nillable, SortDescriptionNormalized height of the OCR sample document page. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionFull name of the associated metadata type in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguage of the OCR sample document. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel of the OCR sample document. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionOCR sample document metadata. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |