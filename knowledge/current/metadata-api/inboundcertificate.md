---
title: "InboundCertificate"
domain: metadata-api
topic: inboundcertificate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.950Z
estimatedTokens: 404
keywords: [InboundCertificate, mutual, authentication, certificate, imported, Salesforce, org, File, Suffix, Directory, Location, Special, Access, Rules, Version]
---

# InboundCertificate

> Represents a mutual authentication certificate that is imported to
      your Salesforce org.

# InboundCertificate

Represents a mutual authentication certificate that is imported to your Salesforce org.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

InboundCertificate components have the suffix .inboundCertificate and are stored in the inboundCertificates folder.

## Special Access Rules

InboundCertificate is available when the MutualAuthentication permission is enabled in your org.

## Version

InboundCertificate components are available in API version 49.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| expirationDate | date | Required. The date on which the certificate expires. |
| issuer | string | Required. The certificate’s issuer. |
| masterLabel | string | Required. A friendly name that you create for the certificate. Limited to 64 characters. |
| serialId | string | Required. The serial number for the certificate. |

## Declarative Metadata Sample Definition

The following is an example of an InboundCertificate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

To prevent simple impersonation from compromising security, you can require clients and servers to prove their identity to each other with a mutual authentication certificate.

## Code Examples

```
<InboundCertificate xmlns="http://soap.sforce.com/2006/04/metadata">
    <expirationDate>2021-02-04</expirationDate>
    <issuer>C=USA,ST=CA,L=San Francisco,O=Salesforce.com,OU=00Dxx0000006Jm7,CN=newTestCert</issuer>
    <masterLabel>TestMutualAuthCert2</masterLabel>
    <serialId>29161320252531323757470546071624</serialId>
</InboundCertificate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>InboundCertificate</name>
    </types>
    <version>49.0</version>
</Package>
```
