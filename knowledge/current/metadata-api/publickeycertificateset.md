---
title: "PublicKeyCertificateSet"
domain: metadata-api
topic: publickeycertificateset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.453Z
estimatedTokens: 728
keywords: [PublicKeyCertificateSet, certificate, keys, entity, store, certificates, JSON, web, Parent, File, Suffix, Directory, Location, Version, Special]
---

# PublicKeyCertificateSet

> Represents a set of public certificate keys. On this
      entity we store a public certificates or JSON web keys.

# PublicKeyCertificateSet

Represents a set of public certificate keys. On this entity we store a public certificates or JSON web keys.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PublicKeyCertificateSet components have the suffix .PublicKeyCertificateSet and are stored in the PublicKeyCertificateSet folder.

## Version

PublicKeyCertificateSet components are available in API version 62 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionA description of the public key certificate set. |
| jwksEndPoint | Field TypestringDescriptionThe URL of the HTTPS Server that returns the JWKS. |
| jwtIssuer | Field TypestringDescriptionThe user, organization, or service that issued the JSON web token. This value is case-sensitive. |
| masterLabel | Field TypestringDescriptionRequired. The label for the public key certificate set. |
| publicKeyCertificateSetKeys | Field TypePublicKeyCertificateSetKey[]DescriptionA set of public certificate keys associated with the public key certificate set. |
| type | Field TypePublicKeyCertificateSetType (enumeration of type string)DescriptionRequired. Determines how the server's public key set is retrieved. The keys are represented in JWK format.Values are:JWKS- Used to specify a certificate via the child Type PublicKeyCertificateSetKey.JWKS_URL- Used to specify a certificate via the jwksEndPoint field on this Type. |

## PublicKeyCertificateSetKeys

Represents a set of public certificate keys associated with the public key certificate set.

| Field Name | Description |
| --- | --- |
| publicKeyCertificate | Field TypestringDescriptionRequired.The PublicKeyCertificate we want to reference. |

## Declarative Metadata Sample Definition

The following is an example of a PublicKeyCertificateSet component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<PublicKeyCertificateSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>pcks1</masterLabel>
    <description>This is my description for a PublicKeyCertificateSet</description>
    <type>JWKS</type>
    <jwtIssuer>example.com</jwtIssuer>
    <publicKeyCertificateSetKeys>
            <publicKeyCertificate>pck1</publicKeyCertificate>
    </publicKeyCertificateSetKeys>
</PublicKeyCertificateSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PublicKeyCertificate</name>
    </types>
    <types>
        <members>*</members>
        <name>PublicKeyCertificateSet</name>
    </types>
    <version>62.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
