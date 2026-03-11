---
title: "IdentityVerificationProcDtl"
domain: metadata-api
topic: identityverificationprocdtl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.060Z
keywords: [IdentityVerificationProcDtl, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, IdentityVerificationProcFld, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# IdentityVerificationProcDtl

# IdentityVerificationProcDtl

Represents the search functionality configuration and the minimum number of optional verifiers for identity verification. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

IdentityVerificationProcDtl components have the suffix .IdentityVerificationProcDtl and are stored in the IdentityVerificationProcDtls folder.

## Version

IdentityVerificationProcDtl components are available in API version 54.0 and later.

## Special Access Rules

The Health Cloud permission set license is required to use this metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| apexClass | Field TypestringDescriptionReserved for future use. |
| dataSourceType | Field TypeIdentityVerificationDataSourceType (enumeration of type string)DescriptionRequired.The source type of the data.Valid values are:External—Reserved for future use.Salesforce |
| identityVerificationProcFlds | Field TypeIdentityVerificationProcFld[]DescriptionA list of Identity Verification Process Field elements. |
| isActive | Field TypebooleanDescriptionIndicates whether the record is active (true) or not (false).The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.The label of the Identity Verification Process Detail record. |
| objectName | Field TypestringDescriptionThe name of the object on which the search is performed and data is verified. |
| optionalVerifiersMinVerfCount | Field TypeintDescriptionThe minimum number of optional verifiers that must be checked. |
| searchFilter | Field TypestringDescriptionConditions on which to filter the search results.For example, if you want to perform the search only on Person Account records, enter isPersonAccount = true. |
| searchRecordUniqueIdField | Field TypestringDescriptionThe field that stores the unique identifier of the records that are displayed in the search results. |
| searchResultSortBy | Field TypestringDescriptionThe values that are used to sort the search results.For example, if you want to sort the results by policy date, enter PolicyDate__c Desc. |
| searchSequenceNumber | Field TypeintDescriptionRequired.Enter 1 as the search sequence number.NoteIn API version 54.0 and later, this field is reserved for future use, and the value you enter doesn't affect sequencing. |
| searchType | Field TypeIdentityVerificationSearchType (enumeration of type string)DescriptionRequired.The type of search being performed.Valid values are:Object-Based—Reserved for future use.Text-Based |

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

The following is an example of an identityVerificationProcDtl component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").