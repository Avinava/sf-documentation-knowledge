---
title: "OcrTemplateSampleDocument"
domain: psc-api
topic: ocrtemplatesampledocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.855Z
estimatedTokens: 216
keywords: [OcrTemplateSampleDocument, relationship, OCR, template, sample, document, API, version, 55.0, later, Calls, SOAP, REST, Special, Access]
---

# OcrTemplateSampleDocument

> Represents a relationship between an OCR template and an OCR sample document. This
        object is available in API version 55.0 and later.

# OcrTemplateSampleDocument

Represents a relationship between an OCR template and an OCR sample document. This object is available in API version 55.0 and later.

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
| OcrSampleDocumentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the associated OCR sample document.This is a relationship field.Relationship NameOcrSampleDocumentRelationship TypeLookupRefers ToOcrSampleDocument |
| OcrTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated OCR template.This is a relationship field.Relationship NameOcrTemplateRelationship TypeLookupRefers ToOcrTemplate |
