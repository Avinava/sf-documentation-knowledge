---
title: "Certificate"
domain: metadata-api
topic: certificate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:37.640Z
estimatedTokens: 1173
keywords: [Certificate, Represents, certificate, used, digital, signatures, verify, requests, coming, org., Certificates, either, authenticated, single, sign-on, external, website, org, identity, provider.]
---

# Certificate

> Represents a certificate used for digital signatures
      that verify that requests are coming from your org. Certificates are used for either
      authenticated single sign-on with an external website, or when using your org as an identity
      provider. This type extends the Metadata With Content metadata type and inherits its
        content and fullName fields.

# Certificate

Represents a certificate used for digital signatures that verify that requests are coming from your org. Certificates are used for either authenticated single sign-on with an external website, or when using your org as an identity provider. This type extends the Metadata With Content metadata type and inherits its content and fullName fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

Certificate components have the suffix .crt and are stored in the certs folder.

## Version

Certificate components are available in API version 36.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| caSigned | boolean | Required. Indicates whether this certificate is signed by the issuer (true) or not (false). |
| encryptedWithPlatformEncryption | boolean | Indicates whether this certificate is encrypted with Platform Encryption. |
| expirationDate | dateTime | The date that this certificate expires and is no longer usable. For self-signed certificates, if keySize is 2048 bits, the expiration date is automatically 1 year after you create the certificate. If keySize is 4096 bits, the expiration date is automatically 2 years after you create the certificate. For CA-signed certificates, expirationDate is automatically updated to the signed certificate’s expiration date when a signed certificate chain is uploaded. The date format is YYYY-MM-DD. |
| keySize | int | Certificate keys can be either 2048 bits or 4096 bits. A certificate with 4096-bit keys lasts 2 years, and a certificate with 2048-bit keys lasts 1 year. Certificates with 2048-bit keys are faster than certificates with 4096-bit keys. If keySize isn’t specified when you create a certificate, the key size defaults to 2048 bits. |
| masterLabel | string | Required. A user-friendly name for the certificate that appears in the Salesforce user interface, such as in Certificate and Key Management. Limit: 64 characters. |
| privateKeyExportable | boolean | Indicates whether this certificate’s private key is exportable. If privateKeyExportable isn’t specified when you create a certificate, its default value is true. |

## Usage

The Metadata API can be used to create a self-signed or a CA-signed certificate. The .crt file’s contents are the certificate chain, which can be updated when you renew or update the intermediate certificate chain of a CA-signed certificate. After creating a CA-signed certificate, the .crt file contains a certificate signing request (CSR). For details, see [About Salesforce Certificates and Keys](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_keys_about.htm&language=en_US "HTML (New Window)") in Salesforce Help.

To copy an existing certificate’s X.509 parameter data to a new certificate, upload the existing certificate. You can also use this procedure to renew a certificate. A new private+public key pair is created with a new certificate. Salesforce doesn’t allow the import or export of the private key via the API.

Using the Metadata API, you can download a CSR. After it’s CA-signed, you can upload it back to Salesforce.

After the signed certificate chain is uploaded via the Metadata API, the CSR of that certificate can’t be downloaded via the API anymore. The content of the .crt file is the signed certificate chain. However, the CSR can still be downloaded via the UI.

-   Downloading a CSR—The CSR is downloadable after a CA-signed cert is created. If a signed certificate hasn’t been uploaded to that certificate, the content of the downloaded .crt file is the CSR.
-   Uploading a CA-Signed Certificate—To upload the signed certificate chain back to Salesforce, save the signed certificate chain as the content of the .crt file and update it via the Metadata API.

## Declarative Metadata Sample Definition

The following is an example of a Certificate component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Certificate xmlns="http://soap.sforce.com/2006/04/metadata">
    <caSigned>true</caSigned>
    <encryptedWithPlatformEncryption>true</encryptedWithPlatformEncryption>
    <expirationDate>2017-03-19</expirationDate>
    <keySize>4096</keySize>
    <masterLabel>My Certificate Name</masterLabel>
    <privateKeyExportable>true</privateKeyExportable>
</Certificate>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
