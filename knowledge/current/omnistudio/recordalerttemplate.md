---
title: "RecordAlertTemplate"
domain: omnistudio
topic: recordalerttemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.654Z
estimatedTokens: 429
keywords: [RecordAlertTemplate, template, shown, Alerts, FlexCard, expression, requirements, met, API, version, 55.0, later, Calls]
---

# RecordAlertTemplate

> A template that is shown in the Alerts FlexCard when the expression set
         requirements are met. This object is available in API version 55.0 and later.

# RecordAlertTemplate

A template that is shown in the Alerts FlexCard when the expression set requirements are met. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA detailed description of the record's rule template. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA unique name of a record alert template. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the record alert template.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA unique name of a record alert template. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA namespace prefix associated with this object. |
| RecordAlertCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category for the alert.This field is a relationship field.Relationship NameRecordAlertCategoryRelationship TypeLookupRefers ToRecordAlertCategory |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA short description of the record's rule template. |
