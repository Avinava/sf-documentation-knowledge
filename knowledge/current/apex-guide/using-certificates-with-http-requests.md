---
title: "Using Certificates with HTTP Requests"
domain: apex-guide
topic: using-certificates-with-http-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.353Z
estimatedTokens: 227
keywords: [Certificates, HTTP, Requests, generated, certificate, Salesforce, support, two-way, authentication, callout]
---

# Using Certificates with HTTP Requests

> After you have generated a certificate in Salesforce, you can use it to support two-way
   authentication for a callout to an HTTP request.

# Using Certificates with HTTP Requests

After you have generated a certificate in Salesforce, you can use it to support two-way authentication for a callout to an HTTP request.

To integrate the certificate with your Apex:

1.  [Generate a certificate](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_generate.htm). Note the Unique Name of the certificate.
2.  In your Apex, use the setClientCertificateName method of the HttpRequest class. The value used for the argument for this method must match the Unique Name of the certificate that you generated in the previous step.

The following example illustrates the last step of the previous procedure. This example assumes that you previously generated a certificate with a Unique Name of DocSampleCert.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_soap.htm "Using Certificates with SOAP Services")

## Code Examples

```
HttpRequest req = new HttpRequest();
req.setClientCertificateName('DocSampleCert');
```

## Related Topics

- Generate a certificate (atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_generate.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_soap.htm)
