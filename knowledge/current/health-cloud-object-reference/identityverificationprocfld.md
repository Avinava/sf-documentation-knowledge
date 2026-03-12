---
title: "IdentityVerificationProcFld"
domain: health-cloud-object-reference
topic: identityverificationprocfld
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.807Z
estimatedTokens: 961
keywords: [IdentityVerificationProcFld, search, verification, identity, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Special, Access, configure, questions, criteria, verifying, caller]
---

# IdentityVerificationProcFld

> Used to configure the questions or criteria for verifying the identity of a
         caller. This object is available in API version 54.0 and later.

# IdentityVerificationProcFld

Used to configure the questions or criteria for verifying the identity of a caller. This object is available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DataSourceType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies whether source of data for identity verification is external or within Salesforce.Possible values are:ExternalSalesforce |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow as a DeveloperName is generated for each record. |
| FieldName | TypestringPropertiesFilter, Group, SortDescriptionThe label of the field that contains the verification data based on the selected field type. |
| FieldType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the type of the field that contains the verification data.Possible values are:additionalResultField—Additional Result FieldoptionalVerifier—Optional VerifierrequiredVerifier—Required VerifierresultField—Result FieldsearchField—Search FieldsearchFilter—Search Filter |
| FieldValueFormula | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStores the formula that's applied to the field value.NoteThis field isn’t supported as of API version 54.0 |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated IdentityVerificationProcFld type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IdentityVerificationProcDtlId | TypereferencePropertiesFilter, Group, SortDescriptionThe label of the relevant Identity Verification Process Detail record.This field is a relationship field.Relationship NameIdentityVerificationProcDtlRelationship TypeLookupRefers ToIdentityVerificationProcDtl |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is active.The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the IdentityVerificationProcFld.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel that identifies the IdentityVerificationProcFld throughout the Salesforce user interface. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe IdentityVerificationProcFld’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SequenceNumber | TypeintPropertiesFilter, Group, SortDescriptionThe sequence number of the field. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IdentityVerificationProcFld xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <customFieldLabel>field1</customFieldLabel>
    <dataSourceType>External</dataSourceType>
    <fieldName>sasa</fieldName>
    <fieldType>requiredVerifier</fieldType>
     <fullName>field1</fullName>

    <isActive>false</isActive>
    <masterLabel>field1</masterLabel>
    <sequenceNumber>1</sequenceNumber>
</IdentityVerificationProcFld>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>IdentityVerificationProcFld</name>
    </types>
    <version>54.0</version>
</Package>
```
