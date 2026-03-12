---
title: "LifeSciConfigFieldValue"
domain: life-sciences-dev-guide
topic: lifesciconfigfieldvalue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.772Z
estimatedTokens: 1256
keywords: [LifeSciConfigFieldValue, Life, Sciences, configuration, record, child, LifeSciConfigRecord, SOAP, API, Calls, REST]
---

# LifeSciConfigFieldValue

> Represents a field value for a Life Sciences configuration record. This
         object is a child of LifeSciConfigRecord.

# LifeSciConfigFieldValue

Represents a field value for a Life Sciences configuration record. This object is a child of LifeSciConfigRecord.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The data type of the field.Possible values are:BOOLEANDATEDATETIMEFIELDINTEGERLONGTEXTMULTIPICKLISTNUMBEROBJECTPHONEPICKLISTRECORDREFERENCETEXTURL |
| DateTimeValue | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time value for the field. |
| DateValue | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date value for the field. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The name of the field. |
| FieldValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field reference value for the field. |
| HasBooleanValue | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Boolean value of the field is true or false.The default value is false. |
| IntegerValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe integer value for the field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the LifeSciConfigFieldValue. |
| LifeSciConfigRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The configuration record associated with the field value.This field is a relationship field.Relationship NameLifeSciConfigRecordRefers ToLifeSciConfigRecord |
| LongTextValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe long text value for the field. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the configuration category. In the UI, this field is Label. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. The prefix is limited to a maximum of 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |
| NumberValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number value for the field. |
| ObjectValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe object reference value for the field. |
| PhoneValue | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone value for the field. |
| PicklistValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe picklist value for the field. |
| TextValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe text value for the field. |
| UrlValue | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL value for the field. |
