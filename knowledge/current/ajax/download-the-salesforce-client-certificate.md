---
title: "Download the Salesforce Client Certificate"
domain: ajax
topic: download-the-salesforce-client-certificate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.575Z
estimatedTokens: 458
keywords: [Download, Salesforce, Client, Certificate, application, endpoint, server’s, SSL, TLS, configured, require, certificates, two-way, validate, identity]
---

# Download the Salesforce Client Certificate

> Your application (endpoint) server’s SSL/TLS can be configured to require client
    certificates (two-way SSL/TLS) to validate the identity of the Salesforce server when it takes
    the role of client to your server. If so, you can download the Salesforce client certificate
    from the Salesforce API page.

# Download the Salesforce Client Certificate

Your application (endpoint) server’s SSL/TLS can be configured to require client certificates (two-way SSL/TLS) to validate the identity of the Salesforce server when it takes the role of client to your server. If so, you can download the Salesforce client certificate from the Salesforce API page.

1.  From Setup, enter API in the Quick Find box, then select **API**.
2.  On the API WSDL page, click **Manage API Client Certificate**.
3.  On the Certificate and Key Management page, in the API Client Certificate section, click the **API Client Certificate**.
4.  On the Certificates page, click **Download Certificate**. The .crt file is saved in the download location specified in your browser.

    Import the downloaded certificate into your application server, and configure your application server to request the client certificate. The application server then checks that the certificate used in the SSL/TLS handshake matches the one you downloaded.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=ajax)

#### Note

Your application (endpoint) server must send intermediate certificates in the certificate chain, and the certificate chain must be in the correct order. The correct order is:

1.  Server certificate
2.  Intermediate certificate that signed the server certificate if the server certificate wasn’t signed directly by a root certificate
3.  Intermediate certificate that signed the certificate in step 2
4.  Any remaining intermediate certificates

    Don’t include the root certificate authority certificate. The root certificate isn’t sent by your server. Salesforce already has its own list of trusted certificates on file, and a certificate in the chain must be signed by one of those root certificate authority certificates.
