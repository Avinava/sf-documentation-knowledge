---
title: "ApplicationRecordTypeConfig"
domain: psc-api
topic: applicationrecordtypeconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.997Z
estimatedTokens: 469
keywords: [ApplicationRecordTypeConfig, Configuration, maps, record, application, API, version, 57.0, later, Parent, File, Suffix, Directory, Location, Special, 50.0, SOAP, Calls, REST]
---

# ApplicationRecordTypeConfig

> Configuration that maps object record types to an
			application. This object is available in API version 57.0 and later.

# ApplicationRecordTypeConfig

Configuration that maps object record types to an application. This object is available in API version 57.0 and later.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ApplicationRecordTypeConfig components have the suffix .applicationRecordTypeConfig and are stored in the ApplicationRecordTypeConfig folder.

## Version

ApplicationRecordTypeConfig components are available in API version 57.0 and later.

## Special Access Rules

You must have ApplicationRecordTypeConfigAccess org access to use this metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| applicationObjectName | Field TypeApplicationObjectName (enumeration of type string)DescriptionRequired. Objects used by Licensing and Permitting Management and Emergency Response Management.Valid values are:BusinessLicenseApplicationIndividualApplication |
| applicationUsageType | Field TypeApplicationUsageType (enumeration of type string)DescriptionRequired. Count of application records used.Values are:BA- Benefit AssistanceCCM- Composable Case ManagementEDU- Education CloudERM- Emergency Response ManagementGrantmakingHC- Health CloudLPI- Licensing, Permitting, and Inspections |
| recordTypeName | Field TypestringDescriptionRequired. The name of the record type that was created for Individual Application. |

## Declarative Metadata Sample Definition

The following is an example of an ApplicationRecordTypeConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ApplicationRecordTypeConfig xmlns="http://soap.sforce.com/2006/04/metadata">

    <applicationUsageType>LPI</applicationUsageType>
    <applicationObjectName>IndividualApplication</applicationObjectName>
    <recordTypeName>IADriversLicense</recordTypeName>
</ApplicationRecordTypeConfig>
```

```
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ApplicationRecordTypeConfig</name>
    </types>
    <version>57.0</version>
</Package>
```
