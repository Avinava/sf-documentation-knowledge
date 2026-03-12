---
title: "UserAuthCertificate"
domain: object-reference
topic: userauthcertificate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.710Z
estimatedTokens: 698
keywords: [UserAuthCertificate, user, authentication, certificate, org, unique, PEM-encoded, X.509, digital, authenticate, individual, users, API, version, 45.0]
---

# UserAuthCertificate

> Represents a user authentication
            certificate in your org. A user certificate is a unique PEM-encoded X.509 digital
            certificate to authenticate individual users to your org.
      This object is available in API version 45.0 and later.

# UserAuthCertificate

Represents a user authentication certificate in your org. A user certificate is a unique PEM-encoded X.509 digital certificate to authenticate individual users to your org. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is only available in orgs with Let users authenticate with a certificate enabled in Identity Verification. Only users with the Manage Internal Users permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| CertificateChain | Typebase64PropertiesCreate, UpdateDescriptionThe uploaded PEM files can contain a single certificate or up to 10 certificates in a certificate chain. Uploaded PEM files can’t be larger than 1 MB. |
| CertificateChainLength | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe auto-generated length of the certificate or certificate chain in the uploaded PEM file. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, Salesforce generates one for each record, which slows performance.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| ExpirationDate | TypedateTimePropertiesFilter, SortDescriptionThe expiration date of the uploaded certificate. |
| Fingerprint | TypestringPropertiesFilter. Group, idLookup, SortDescriptionThe unique fingerprint of the uploaded certificate. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language in which to display the certificate.Possible values are:da (Danish)de (German)en_US (English)es (Spanish)es_MX (Spanish - Mexico)fi (Finnish)fr (French)it (Italian)ja (Japanese)ko (Korean)nl_NL (Dutch)no (Norwegian)pt_BR (Portuguese - Brazil)ru (Russian)sv (Swedish)th (Thai)zh_CN (Chinese - Simplified)zh_TW (Chinese - Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA descriptive name for the certificate. |
| SerialNumber | TypestringPropertiesFilter, Group, SortDescriptionThe serial number of the uploaded certificate. |
| UserID | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user associated with the certificate. |
