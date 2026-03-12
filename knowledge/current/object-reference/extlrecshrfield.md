---
title: "ExtlRecShrField"
domain: object-reference
topic: extlrecshrfield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.982Z
estimatedTokens: 625
keywords: [ExtlRecShrField, imported, exported, updated, external, record, share, Partner, Connect, API, version, 63.0, later, Calls, Special]
---

# ExtlRecShrField

> Represents an imported, exported, or updated external record share
         field for Partner Connect. This object is available in API version 63.0 and
      later.

# ExtlRecShrField

Represents an imported, exported, or updated external record share field for Partner Connect. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| ExtlRecShrObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the ExtlRecShrObject record.This field is a relationship field.Relationship NameExtlRecShrObjectRefers ToExtlRecShrObject |
| FieldDefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault value of the field. |
| FieldSetType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSet of fields associated with this record.Possible values are:ExportedFieldsImportedFieldsInternalFields |
| IsFieldNillable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this field can be set to null (true) or not (false).The default value is false. |
| SendFieldUpdates | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether updates are tracked for this field, sent to the connected org, and stored in the ExtlRecShrLead or ExlRecShrOpportunity objects (true) or not (false).The default value is false. |
| SharedFieldDevName | TypestringPropertiesCreate, Filter, Group, SortDescriptionDeveloper name of the field. |
| SharedFieldLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLabel of the field. |
| SharedFieldLength | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMaximum length of the field. |
| SharedFieldType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionField type of the imported, exported, or updated field.Possible values are:AddressAddressCountryAddressStateBooleanCurrencyDateOnlyDateTimeDoubleDynamicEnumEmailEntityIdEnumOrIdFaxIntegerMultiLineTextPercentPhoneStaticEnumTextUrl |
