---
title: "OcrTargetObject"
domain: omnistudio
topic: ocrtargetobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.992Z
estimatedTokens: 238
keywords: [OcrTargetObject, document, extracted, mapped, API, version, 50.0, later, Calls, 55.0, SOAP, REST, Special, Access, Rules, 52.0]
---

# OcrTargetObject

> Represents the details of the object to which information from a document
            is extracted and mapped. This object is available in API version 55.0 and
        later.

# OcrTargetObject

Represents the details of the object to which information from a document is extracted and mapped. This object is available in API version 55.0 and later.

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
| OcrTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated OCR template.This is a relationship field.Relationship NameOcrTemplateRelationship TypeLookupRefers ToOcrTemplate |
| TargetObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object to which information from a document is mapped. The possible values have only a representative list of objects. The exact list of supported objects depends on the license configuration in the org. |
| TargetObjectRecordType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe record type of the target object to which information from a document is mapped. This field is available in API version 56.0 and later. |
