---
title: "OcrTargetObject"
domain: omnistudio
topic: ocrtargetobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.579Z
keywords: [OcrTargetObject, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# OcrTargetObject

# OcrTargetObject

Represents the details of the object to which information from a document is extracted and mapped. This object is available in API version 52.0 and later.

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
| TargetObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object to which information from a document is mapped. The list below is only a representative list of objects. The exact list of supported objects depends on the license configuration in the org. |
| TargetObjectRecordType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe record type of the target object to which information from a document is mapped. This field is available in API version 56.0 and later. |