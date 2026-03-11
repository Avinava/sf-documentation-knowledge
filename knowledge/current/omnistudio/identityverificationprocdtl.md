---
title: "IdentityVerificationProcDtl"
domain: omnistudio
topic: identityverificationprocdtl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.545Z
keywords: [IdentityVerificationProcDtl, Important, Supported, SOAP, API, Calls, REST, Methods, Fields, Usage]
---

# IdentityVerificationProcDtl

# IdentityVerificationProcDtl

Used to configure the search function as well as the minimum number of verifiers for the identity verification process. This object is available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DataSourceType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe source type of the data.Possible values are:ExternalSalesforce |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| DisplayRecordFieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the field that contains information about the record that's shown to the user after identity verification is successful.This field is available in API version 58.0 and later. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated IdentityVerificationProcDtl in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IdentityVerificationProcDefId | TypereferencePropertiesFilter, Group, SortDescriptionThe label of the relevant Identity Verification Process Definition record.This field is a relationship field.Relationship NameIdentityVerificationProcDefRelationship TypeLookupRefers ToIdentityVerificationProcDef |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is active (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe languages of the IdentityVerificationProcDtl.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| LinkedIdVerfProcessDetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionConfigure multiple levels of identity verification. For example, suppose you have two process detail records, Contact Process Detail and Account Process Detail, and Account Process Detail is linked to the contact process detail record. In this case, the contact process detail record is used for primary verification and the account process detail record is used for secondary verification. Then, if your business requirement is to configure a third-level verification process, create another process detail record and set the value of the LinkedIdVerfProcessDetId field in the account process detail record to the third process detail record.This field is available in API version 55.0 and later.This field is a relationship field.Relationship NameLinkedIdVerfProcessDetRelationship TypeLookupRefers ToIdentityVerificationProcDtl |
|  |  |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for IdentityVerificationProcDtl. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe IdentityVerificationProcDtl’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| ObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object on which the search is performed and data is verified. |
| OptionalVerifiersMinVerfCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe minimum number of additional verifiers that must be checked. |
| SearchFilter | TypestringPropertiesFilter, Group, Nillable, SortDescriptionConditions to filter the search results. For example, if you want to perform the search only on Person Account records, enter isPersonAccount = true.NoteUse the AND operator to enter multiple conditions. The OR operator isn’t supported. |
| SearchRecordUniqueIdField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe field storing the unique identifier of records displayed in the search results. |
| SearchResultSortBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe values that are used to sort the search results.For example, if you want to sort the results by policy date, enter PolicyDate__c Desc. |
| SearchSequenceNumber | TypeintPropertiesFilter, Group, SortDescriptionThe sequence in which the search is performed and the search result is displayed. |
| SearchType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of search being performed.Possible values are:Object-BasedText-BasedText-based search enables users to enter search keywords in the search field. In object-based search, users search for data using available fields. |

## Usage

This object is used to build the verification context for the Verify Customer Identity and the Verify Customer Identity Base flows.