---
title: "UserAuthCertificate"
domain: metadata-api
topic: userauthcertificate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:42.777Z
estimatedTokens: 593
keywords: [UserAuthCertificate, PEM-encoded, user, certificate, certificates, associated, externally, uploaded, authenticate, File, Suffix, Directory, Location, Version, Declarative]
---

# UserAuthCertificate

> Represents a PEM-encoded user certificate. These
      certificates are associated with a user, and externally uploaded. The uploaded certificate is
      used to authenticate the user.

# UserAuthCertificate

Represents a PEM-encoded user certificate. These certificates are associated with a user, and externally uploaded. The uploaded certificate is used to authenticate the user.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

UserAuthCertificate components have the suffix .userAuthCertificate and are stored in the userAuthCertificates folder.

## Version

UserAuthCertificate components are available in API version 50.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| developerName | string | Required: The name of the certificate with an underscore between words.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| expirationDate | dateTime | Required. The date on which the certificate expires. |
| masterLabel | string | Required. A user-friendly name that you create for the certificate. Limited to 64 characters. |
| serialNumber | string | Required. The serial number for the certificate. |
| user | string | Required: The user’s name. |

## Declarative Metadata Sample Definition

The following is an example of a UserAuthCertificate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<UserAuthCertificate xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <content xsi:nil="true"/>
    <developerName>ND_user_cert</developerName>
    <expirationDate>2030-10-01T08:30:00.000Z</expirationDate>
    <masterLabel>ND user cert</masterLabel>
    <serialNumber>1401</serialNumber>
    <user>005RM000001Zn1E</user>
</UserAuthCertificate>
```

```
Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>UserAuthCertificate</name>
    </types>
    <version>50.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
