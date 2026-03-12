---
title: "Certificate"
domain: tooling-api
topic: certificate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.999Z
estimatedTokens: 963
keywords: [Certificate, digital, signatures, verify, requests, coming, org, Certificates, either, authenticated, sign-on, external, website, identity, provider]
---

# Certificate

> Represents a certificate used for digital signatures that
            verify requests are coming from your org. Certificates are used for either authenticated
            single sign-on with an external website or when using your org as an identity
            provider. This object is available in Tooling API version 37.0 and
        later.

# Certificate

Represents a certificate used for digital signatures that verify requests are coming from your org. Certificates are used for either authenticated single sign-on with an external website or when using your org as an identity provider. This object is available in Tooling API version 37.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP Calls

query(), retrieve()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, Salesforce generates one for each record, which slows performance. |
| ExpirationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionRead only. The date that this certificate expires and is no longer usable. For self-signed certificates, if KeySize is 2048 bits, the expiration date is automatically 1 year after you create the certificate. If KeySize is 4096 bits, the expiration date is automatically 2 years after you create the certificate. For CA-signed certificates, ExpirationDate is automatically updated to the signed certificate’s expiration date when a signed certificate chain is uploaded. The date format is YYYY-MM-DD. |
| KeySize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionCertificate keys can be either 2048 bits or 4096 bits. A certificate with 4096-bit keys lasts 2 years, and a certificate with 2048-bit keys lasts 1 year. Certificates with 2048-bit keys are faster than certificates with 4096-bit keys. If KeySize isn’t specified when you create a certificate, the key size defaults to 2048 bits. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionRequired. A user-friendly name for the certificate that appears in the Salesforce user interface, such as in Certificate and Key Management. Limit: 64 characters. |
| OptionsIsCaSigned | TypebooleanPropertiesFilterDescriptionRequired. Indicates whether this certificate is signed by the issuer (true) or not (false). |
| OptionsIsEncryptedWithPE | TypebooleanPropertiesFilterDescriptionIndicates whether this certificate is encrypted with Shield Platform Encryption. |
| OptionsIsNewEncr | TypebooleanPropertiesFilterDescriptionIndicates whether this certificate is encrypted with the new algorithm for certificate encryption. |
| OptionsIsPrivateKeyExportable | TypebooleanPropertiesFilterDescriptionIndicates whether this certificate’s private key is exportable. |
| OptionsIsUnusable | TypebooleanPropertiesFilterDescriptionIndicates whether this certificate is waiting for import of the signed certificate chain. |
| OptionIsUsingKMS | TypebooleanPropertiesFilterDescriptionIndicates whether this certificate is compatible with select BYOK key material that uses the Shield Key Management Service (true) or not (false). This field is available in API version 50.0 and later.These certificates are only compatible with Database tenant secrets as part of the Shield Platform Encryption Database Encryption feature. |
