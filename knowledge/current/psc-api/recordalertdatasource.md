---
title: "RecordAlertDataSource"
domain: psc-api
topic: recordalertdatasource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.297Z
estimatedTokens: 520
keywords: [RecordAlertDataSource, internal, external, source, record, alert, data, Parent, File, Suffix, Directory, Location, Version, Declarative, Metadata, API, version, 54.0, later, Calls]
---

# RecordAlertDataSource

> Represents an internal or external source for record alert data. This
      object is available in API version 54.0 and later.

# RecordAlertDataSource

Represents an internal or external source for record alert data. This object is available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ApexClass | Field TypestringDescriptionThe Apex class to be used as the data source.NoteThis class must implement the fscwmgen.RecordAlertProvider interface. |
| ApexClassId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Apex class to be used as the data source.NoteThis class must implement the fscwmgen.RecordAlertProvider interface.This is a relationship field.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionFull name of the associated metadata type in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionIndicates whether the data source is still active (true) or not (false).NoteThere can only be one active data source at a time.The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguage of the record alert data source.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionLabel of the record alert data source. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionRecord alert data source metadata. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of active data source used to fetch a record alert. This field is available in API version 55.0 and later.Possible values are:APEXBusinessRulesEngine |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<RecordAlertDataSource xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>FeeInfo</masterLabel>
    <apexClass>SalesforceProvider</apexClass>
    <isActive>false</isActive>
</RecordAlertDataSource>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <namespacePrefix>[namespacePrefix]</namespacePrefix>
    <types>
        <members>SalesforceProvider</members>
        <name>ApexClass</name>
    </types>
    <types>
        <members>*</members>
        <name>RecordAlertDataSource</name>
    </types>
    <version>54.0</version>
</Package>
```
