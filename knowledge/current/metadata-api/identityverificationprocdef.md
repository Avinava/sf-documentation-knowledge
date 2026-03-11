---
title: "IdentityVerificationProcDef"
domain: metadata-api
topic: identityverificationprocdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.048Z
keywords: [IdentityVerificationProcDef, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, IdentityVerificationProcDtl, IdentityVerificationProcFld, Declarative, Metadata, Sample, Definition, Wildcard]
---

# IdentityVerificationProcDef

# IdentityVerificationProcDef

Represents the definition of the identity verification process.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

IdentityVerificationProcDef components have the suffix .IdentityVerificationProcDef and are stored in the IdentityVerificationProcDefs folder.

## Version

IdentityVerificationProcDef components are available in API version 54.0 and later.

## Special Access Rules

The Health Cloud permission set license is required to use this metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| identityVerificationProcDtls | Field TypeIdentityVerificationProcDtl[]DescriptionA list of Identity Verification Process Detail elements. |
| masterLabel | Field TypestringDescriptionRequired.The label of the Identity Verification Process Definition record. |
| searchLayoutType | Field TypeIdentityVerificationSearchLayoutType (enumeration of type string)DescriptionRequired.The display layout of the search component.Valid values are:StackTab |

## IdentityVerificationProcDtl

Represents the verification-related details such as search criteria, verification criteria, or the custom apex class.

| Field Name | Description |
| --- | --- |
| apexClass | Field TypestringDescriptionThe Apex class that is used to search and verify data in an external system. |
| dataSourceType | Field TypeIdentityVerificationDataSourceType (enumeration of type string)DescriptionRequired.The source type of the data.Valid values are:ExternalSalesforce |
| developerName | Field TypestringDescriptionRequired.The developer name of Identity verification process detail. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| displayRecordFieldName | Field TypestringDescriptionThe name of the field that contains information about the record that's shown to the user after identity verification is successful. Available in API version 58.0 and later. |
| identityVerificationProcFlds | Field TypeIdentityVerificationProcFld[]DescriptionA list of Identity Verification Process Field elements. |
| isActive | Field TypebooleanDescriptionIndicates whether the record is active (true) or not (false). |
| isRetryAllowedAfterLimit | Field TypebooleanDescriptionFor internal use only. |
| linkedIdVerfProcessDet | Field TypestringDescriptionThe record containing the details of the linked identity verification process. Available in API version 58.0 and later. |
| masterLabel | Field TypestringDescriptionRequired.The label of the Identity Verification Process Detail record. |
| objectName | Field TypestringDescriptionThe name of the object on which the search is performed and data is verified. |
| optionalVerifiersMinVerfCount | Field TypeintDescriptionThe number of optional verifiers that must be checked. |
| retryLimit | Field TypeintDescriptionFor internal use only. |
| searchFilter | Field TypestringDescriptionA comma-separated list of predefined filter conditions that are used to refine the scope of the search. |
| searchRecordUniqueIdField | Field TypestringDescriptionThe field storing the unique identifier of a record displayed in the search results. |
| searchResultSortBy | Field TypestringDescriptionThe values that are used to sort the search results. |
| searchSequenceNumber | Field TypeintDescriptionRequired.The sequence in which the search is performed and the search result is displayed. |
| searchType | Field TypeIdentityVerificationSearchType (enumeration of type string)DescriptionRequired.The type of search being performed.Valid values are:Object-BasedText-Based |

## IdentityVerificationProcFld

Represents a set of fields necessary to configure the questions that CCA asks the caller before providing them with the information they need.

| Field Name | Description |
| --- | --- |
| customFieldLabel | Field TypestringDescriptionThe custom label for the field that contains the verification data. |
| dataSourceType | Field TypeIdentityVerificationProcFldDataSourceType (enumeration of type string)DescriptionRequired.The source type of the data.Valid values are:ExternalSalesforce |
| developerName | Field TypestringDescriptionRequired.The developer name of Identity Verification Process Field. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Available in API version 58.0 and later. |
| fieldDataType | Field TypeIdentityVerificationProcFldFieldDataType (enumeration of type string)DescriptionThe data type of the field in the external data source that's defined in the identity verification process detail. Available in API version 58.0 and later.Valid values are:addresscheckboxcurrencydateonlydatetimeemailnumberotherpercentphonepicklistreferencetexttimeonlyurl |
| fieldName | Field TypestringDescriptionRequired.The label of the field that contains the verification data based on the selected field type. Available in API version 58.0 and later. |
| fieldType | Field TypeIdentityVerificationProcFldFieldType (enumeration of type string)DescriptionRequired.Indicates the type of field.Valid values are:additionalResultFieldoptionalVerifierrequiredVerifierresultFieldsearchFieldsearchFilter |
| fieldValueFormula | Field TypestringDescriptionStores the formula that is applied to the field value. |
| isActive | Field TypebooleanDescriptionIndicates whether the record is active (true) or not (false). |
| isManualInput | Field TypebooleanDescriptionIndicates whether the user can manually enter the identity verification details (true) or not (false).The default value of this field is false.Available in API version 58.0 and later. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for Identity Verification Process Field. |
| sequenceNumber | Field TypeintDescriptionRequired.The sequence number of the field. |

## Declarative Metadata Sample Definition

This is an example of an IdentityVerificationProcDef component.

```

```

This is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").