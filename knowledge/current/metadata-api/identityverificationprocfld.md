---
title: "IdentityVerificationProcFld"
domain: metadata-api
topic: identityverificationprocfld
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.940Z
estimatedTokens: 1032
keywords: [IdentityVerificationProcFld, search, verification, identity, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Special, Access]
---

# IdentityVerificationProcFld

> Represents the search and verification fields used
			in identity verification. This type extends the Metadata metadata type and inherits its
				fullName field.

# IdentityVerificationProcFld

Represents the search and verification fields used in identity verification. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

IdentityVerificationProcFld components have the suffix .IdentityVerificationProcFld and are stored in the IdentityVerificationProcFlds folder.

## Version

IdentityVerificationProcFld components are available in API version 54.0 and later.

## Special Access Rules

The Health Cloud permission set license is required to use this metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| customFieldLabel | Field TypestringDescriptionThe custom label for the field that contains the verification data. Translation of custom field labels isn't supported in API version 54.0. |
| dataSourceType | Field TypeIdentityVerificationProcFldDataSourceType (enumeration of type string)DescriptionRequired.The source type of the data.Valid values are:ExternalAn external data source isn’t supported in API version 54.0.Salesforce |
| fieldDataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of data stored in an external data source field.Possible values are:addresscheckboxcurrencydateonlydatetimeemailnumberotherpercentphonepicklistreferencetexttimeonlyurl |
| fieldName | Field TypestringDescriptionRequired.The label of the field that contains the verification data based on the selected field type. |
| fieldType | Field TypeIdentityVerificationProcFldFieldType (enumeration of type string)DescriptionRequired.Indicates the type of field.Possible values are:additionalResultField—Fetches data as part of the search query, but the data isn’t displayed in search results. Use this value if, for example, you want to fetch the policy number and the age of the policy owner as a result of the search, but the agent isn’t supposed to see this data. You can write custom logic to process this additional data.optionalVerifier—Optional verifier.requiredVerifier—Required verifier.resultField—Displays field type in search results. Use this value if, for example, when an agent searches for a caller, you’d like the search results to include the account name, phone number, and email ID.searchField—Reserved for future use.searchFilter—A comma-separated list of predefined filter conditions that are used to refine the scope of the search. |
| fieldValueFormula | Field TypestringDescriptionReserved for future use. |
|  |  |
| isActive | Field TypebooleanDescriptionIndicates whether the record is active (true) or not (false).The default value is false. |
| isManualInput | Field TypebooleanDescriptionIndicates whether the user can manually enter the identity verification details  (true) or not (false).The default value is false.This field is available in API version 58.0 and later. |
| masterLabel | Field TypestringDescriptionRequired.The label of the Identity Verification Process Field record. |
| sequenceNumber | Field TypeintDescriptionRequired.The sequence number of the field. |

## Declarative Metadata Sample Definition

The following is an example of an IdentityVerificationProcFld component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

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

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
