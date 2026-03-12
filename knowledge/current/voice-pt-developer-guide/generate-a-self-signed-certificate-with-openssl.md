---
title: "Generate a Self-Signed Certificate with OpenSSL"
domain: voice-pt-developer-guide
topic: generate-a-self-signed-certificate-with-openssl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.046Z
estimatedTokens: 528
keywords: [Generate, Self-Signed, Certificate, OpenSSL, RSA, key]
---

# Generate a Self-Signed Certificate with OpenSSL

> Use OpenSSL to generate an RSA private key and certificate.

# Generate a Self-Signed Certificate with OpenSSL

Use OpenSSL to generate an RSA private key and certificate.

You need the certificate to set up the contact center. The **reqTelephonyIntegrationCertificate** value should be the value in server.crt from these steps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

**This key pair must be unique for each org installation.** Shared key pairs would allow the private key holder to call SCV APIs for any org using the corresponding public key. Subscriber orgs should be able to rotate this key on demand.

1.  Create a folder to hold the generated certificate: $ mkdir certificates
2.  Change the current directory to the certificates folder: $ cd certificates
3.  In the certificates folder, specify a password and generate an RSA private key. Replace <your\_password> with your own password.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

    #### Note

    The Certificate Authorities use this password to authenticate the certificate owner when they want to revoke their certificate. Because the certificate is self-signed, you can’t revoke it using CRL (Certificate Revocation List).

    $ openssl genrsa -des3 -passout pass:<your\_password> -out server.pass.key 2048

4.  Create a key file from the server.pass.key file, using the password that you just created. $ openssl rsa -passin pass:<your\_password> -in server.pass.key -out server.key
5.  Delete the server.pass.key: $ rm server.pass.key
6.  Request and generate the certificate: $ openssl req -new -key server.key -out server.csr
7.  Enter the requested information. Press **Enter** when prompted for the challenge password. To skip entering a company name, enter a period (.).
8.  Generate the SSL certificate: $ openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt

-   [← Previous](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_assign_permissions.htm "Assign User Permissions")

## Related Topics

- ← Previous (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_assign_permissions.htm)
