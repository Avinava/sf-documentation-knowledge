---
title: "OcrTargetObjFieldMapping"
domain: psc-api
topic: ocrtargetobjfieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.845Z
estimatedTokens: 403
keywords: [OcrTargetObjFieldMapping, how, documentdocument, mapped, API, version, 55.0, later, Calls, document, SOAP, REST, Special, Access, Rules]
---

# OcrTargetObjFieldMapping

> Represents the details of how information from a document field is mapped
            to fields in an object. This object is available in API version 55.0 and
        later.

# OcrTargetObjFieldMapping

Represents the details of how information from a document field is mapped to fields in an object. This object is available in API version 55.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To use this tooling API object, your Salesforce org must have the AWSTextract1000LimitAddOn license.

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the OCR target object field mapping is available for use.The default value is false. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| OcrSampleDocFieldId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated OCR sample document field.This is a relationship field.Relationship NameOcrSampleDocFieldRelationship TypeLookupRefers ToOcrSampleDocumentField |
| OcrTargetObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the target object.This is a relationship field.Relationship NameOcrTargetObjectRelationship TypeLookupRefers ToOcrTargetObject |
| TargetField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionField to which information is mapped.The possible values depend on the license configuration in the org. The supported fields are those belonging to the objects that are available in the TargetObject field of OcrTargetObject. Not all fields of these supported objects are available for mapping. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of field mapping.. Available in API version 56.0 and later.Possible values are:FormFieldTableColumnThe default value is FormField. |
