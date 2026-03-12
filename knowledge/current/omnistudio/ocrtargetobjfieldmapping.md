---
title: "OcrTargetObjFieldMapping"
domain: omnistudio
topic: ocrtargetobjfieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:51.302Z
estimatedTokens: 408
keywords: [OcrTargetObjFieldMapping, Represents, details, how, information, document, field, mapped, fields, object., API, version, 50.0, later., Supported, Calls, Fields, documentdocument, 55.0, SOAP]
---

# OcrTargetObjFieldMapping

> Represents the details of how information from a document field is mapped to
         fields in an object. This object is available in API version 52.0 and
      later.

# OcrTargetObjFieldMapping

Represents the details of how information from a document field is mapped to fields in an object. This object is available in API version 52.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To use this tooling API object, your Salesforce org must have the AWSTextract1000LimitAddOn license.

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the field mapping is active.The default value is false. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| OcrSampleDocFieldId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated OCR sample document field.This is a relationship field.Relationship NameOcrSampleDocFieldRelationship TypeLookupRefers ToOcrSampleDocumentField |
| OcrTargetObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the target object.This is a relationship field.Relationship NameOcrTargetObjectRelationship TypeLookupRefers ToOcrTargetObject |
| TargetField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionField to which information is mapped.The possible values depend on the license configuration in the org. The supported fields are those belonging to the objects that are available in the TargetObject field of OcrTargetObject. Not all fields of these supported objects are available for mapping. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of document field that’s mapped to the target object. Available in API version 56.0 and later.Possible values are:FormFieldTableColumnThe default value is FormField. |
