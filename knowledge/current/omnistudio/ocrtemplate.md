---
title: "OcrTemplate"
domain: omnistudio
topic: ocrtemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.589Z
keywords: [OcrTemplate, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# OcrTemplate

# OcrTemplate

Represents the details of the mapping between a document and a Salesforce object using Intelligent Form Reader. This object is available in API version 52.0 and later.

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
| Description | TypestringPropertiesFilter, Group, SortDescriptionDescription of the OCR template. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata type in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this OCR template is active (true) or not (false). |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguage of the OCR template. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel of the optical character reader (OCR) template. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionOCR template metadata. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| PageCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of pages in the document from which information is extracted. |
| TemplateName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the OCR template. |