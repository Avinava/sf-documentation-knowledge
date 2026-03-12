---
title: "PublicKeyCertificate"
domain: metadata-api
topic: publickeycertificate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.999Z
estimatedTokens: 544
keywords: [PublicKeyCertificate, Represents, key, certificate., entity, store, certificate, JSON, web, which, used, validate, customer-provided, JWT., Important, Parent, File, Suffix, Directory, Location]
---

# PublicKeyCertificate

> Represents the public key certificate. On this entity we
      store a public certificate or a JSON web key, which is used to validate the customer-provided
      JWT.

# PublicKeyCertificate

Represents the public key certificate. On this entity we store a public certificate or a JSON web key, which is used to validate the customer-provided JWT.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PublicKeyCertificate components have the suffix .PublicKeyCertificate and are stored in the PublicKeyCertificate folder.

## Version

PublicKeyCertificate components are available in API version 62 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionA description of the public key certificate. |
| isActive | Field TypebooleanDescriptionIndicates whether the public key certificate is active (true) or inactive (false). The default value is false. |
| jsonWebKey | Field TypestringDescriptionRepresents a public cryptographic key that can be used to verify the validity of a token. |
| masterLabel | Field TypestringDescriptionRequired. The label for the public key certificate. |

## Declarative Metadata Sample Definition

The following is an example of a PublicKeyCertificate component.

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
<PublicKeyCertificate xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>pck1</masterLabel>
    <isActive>true</isActive>
    <description>This is my description for a test PublicKeyCertificate</description>
    <jsonWebKey>
{
  "kid":"123456",
  "alg":"RS256",
  "use":"sig",
  "kty":"RSA",
  "x5c":["<Your public certificate>"],
  "y":"y",
  "n":"<Base64-encoded modulus>",
  "e":"<Base64-encoded public exponent>",
  "crv":"crv",
  "d":"d",
  "k":"k"
}
    </jsonWebKey>
</PublicKeyCertificate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<!--
  ~ Copyright 2024 salesforce.com, inc.
  ~ All Rights Reserved
  ~ Company Confidential
  -->

<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PublicKeyCertificate</name>
    </types>
    <version>62.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
