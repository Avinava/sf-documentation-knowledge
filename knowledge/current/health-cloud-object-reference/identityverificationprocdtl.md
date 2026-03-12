---
title: "IdentityVerificationProcDtl"
domain: health-cloud-object-reference
topic: identityverificationprocdtl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.796Z
estimatedTokens: 1421
keywords: [IdentityVerificationProcDtl, search, functionality, configuration, minimum, number, verifiers, identity, verification, extends, Metadata, inherits, fullName, File, Suffix, configure, function, well, process, API]
---

# IdentityVerificationProcDtl

> Used to configure the search function as well as the minimum number of
         verifiers for the identity verification process. Available in API version 54.0 and
      later.

# IdentityVerificationProcDtl

Used to configure the search function as well as the minimum number of verifiers for the identity verification process. Available in API version 54.0 and later.

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
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated IdentityVerificationProcDtl type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IdentityVerificationProcDefId | TypereferencePropertiesFilter, Group, SortDescriptionThe label of the relevant Identity Verification Process Definition recordThis field is a relationship field.Relationship NameIdentityVerificationProcDefRelationship TypeLookupRefers ToIdentityVerificationProcDef |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is active.The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the IdentityVerificationProcDtl.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| LinkedIdVerfProcessDetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe identity verification process detail record to be used for secondary verification.This field is a relationship field.Relationship NameLinkedIdVerfProcessDetRelationship TypeLookupRefers ToIdentityVerificationProcDtl |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel that identifies the IdentityVerificationProcDtl throughout the Salesforce user interface. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe IdentityVerificationProcDtl’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object on which the search is performed and data is verified. |
| OptionalVerifiersMinVerfCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe minimum number of additional verifiers that must be checked. |
| SearchFilter | TypestringPropertiesFilter, Group, Nillable, SortDescriptionConditions to filter the search results.For example, if you want to perform the search only on Person Account records, enter isPersonAccount = trueNoteUse the AND operator to enter multiple conditions. The OR operator isn’t currently supported.. |
| SearchRecordUniqueIdField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe field storing the unique identifier of records displayed in the search results. |
| SearchResultSortBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe values that are used to sort the search results.For example, if you want to sort the results by policy date, enter PolicyDate__c Desc. |
| SearchSequenceNumber | TypeintPropertiesFilter, Group, SortDescriptionThe sequence in which the search is performed and the search result is displayed. |
| SearchType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of search being performed.Possible values are:Object-BasedText-BasedNoteText-based search enables users to enter search keywords in the search field. In object-based search, users search for data using available fields. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IdentityVerificationProcDtl xmlns="http://soap.sforce.com/2006/04/metadata">
    <dataSourceType>Salesforce</dataSourceType>
    <isActive>true</isActive>    <developerName>Sample93AccountSearch</developerName>
    <identityVerificationProcFlds>
       <fullName>Sample93AccountName</fullName>
       <dataSourceType>Salesforce</dataSourceType>
       <developerName>Sample93AccountName</developerName>
       <fieldName>Name</fieldName>
       <fieldType>requiredVerifier</fieldType>
       <isActive>false</isActive>
       <masterLabel>Sample93 Account Name</masterLabel>
       <fieldValueFormula>abcd</fieldValueFormula>
       <customFieldLabel>Name</customFieldLabel>
       <sequenceNumber>1</sequenceNumber>
       <isManualInput>false</isManualInput>
    </identityVerificationProcFlds>
    <identityVerificationProcFlds>
       <fullName>Sample93Phone</fullName>
       <dataSourceType>Salesforce</dataSourceType>
       <developerName>Sample93Phone</developerName>
       <fieldName>phone</fieldName>
       <fieldType>optionalVerifier</fieldType>
       <isActive>false</isActive>
       <masterLabel>Sample93 Phone</masterLabel>
       <sequenceNumber>93</sequenceNumber>
       <isManualInput>false</isManualInput>
    </identityVerificationProcFlds>
    <masterLabel>detail1</masterLabel>
     <fullName>detail1</fullName>
    <objectName>Account</objectName>
    <optionalVerifiersMinVerfCount>11</optionalVerifiersMinVerfCount>
    <searchFilter>asd</searchFilter>
    <searchRecordUniqueIdField>Id</searchRecordUniqueIdField>
    <searchResultSortBy>asd</searchResultSortBy>
    <searchSequenceNumber>1</searchSequenceNumber>
    <searchType>Text-Based</searchType>
</IdentityVerificationProcDtl>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>IdentityVerificationProcDtl</name>
    </types>
    <version>54.0</version>
</Package>
```
