---
title: "OcrSampleDocumentPage"
domain: omnistudio
topic: ocrsampledocumentpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.983Z
estimatedTokens: 215
keywords: [OcrSampleDocumentPage, define, OCR, sample, document, API, version, 52.0, later, Calls, 55.0, collection, SOAP, REST, Special, Access]
---

# OcrSampleDocumentPage

> Represents a collection of fields that define a page in the OCR sample
            document. This object is available in API version 55.0 and later.

# OcrSampleDocumentPage

Represents a collection of fields that define a page in the OCR sample document. This object is available in API version 55.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To use this tooling API object, your Salesforce org must have the AWSTextract1000LimitAddOn license.

## Fields

| Field | Details |
| --- | --- |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| OcrSampleDocumentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the OCR sample document.This is a relationship field.Relationship NameOcrSampleDocumentRelationship TypeLookupRefers ToOcrSampleDocument |
| PageHeight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNormalized height of the OCR sample document page. |
| PageNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPage number of the page in the associated OCR sample document. |
