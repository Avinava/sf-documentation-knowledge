---
title: "Using Certificates"
domain: apex-guide
topic: using-certificates
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.369Z
keywords: [Certificates]
---

# Using Certificates

# Using Certificates

To use two-way SSL authentication, send a certificate with your callout that was either generated in Salesforce or signed by a certificate authority (CA). Sending a certificate enhances security because the target of the callout receives the certificate and can use it to authenticate the request against its keystore.

To enable two-way SSL authentication for a callout:

1.  [Generate a certificate](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_generate.htm).
2.  Integrate the certificate with your code. See [Using Certificates with SOAP Services](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_soap.htm "To support two-way authentication for a callout to a SOAP web service, generate a certificate in Salesforce or import a key pair from a keystore into Salesforce. Then integrate the certificate with your Apex.") and [Using Certificates with HTTP Requests](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_http.htm).
3.  If you’re connecting to a third party and using a self-signed certificate, share the Salesforce certificate with them so that they can add the certificate to their keystore. If you’re connecting to another application, generate and integrate the certificate with your code, and then ensure that the Web or application server is configured to accept the certificate. This process depends on the type of Web or application server you use.
4.  Configure the [remote site settings](atlas.en-us.apexcode.meta/apexcode/apex_callouts_remote_site_settings.htm) for the callout. Before any Apex callout can call an external site, that site must be registered in the Remote Site Settings page, or the callout fails.
    
    If the callout specifies a named credential as the endpoint, you don’t need to configure remote site settings. To set up named credentials, see [Named Credentials and External Credentials](https://help.salesforce.com/s/articleView?id=sf.nc_named_creds_and_ext_creds.htm&language=en_US "HTML (New Window)") in Salesforce Help.
    

1.  [Generating Certificates](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_generate.htm)  
    
2.  [Using Certificates with SOAP Services](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_soap.htm)  
    To support two-way authentication for a callout to a SOAP web service, generate a certificate in Salesforce or import a key pair from a keystore into Salesforce. Then integrate the certificate with your Apex.
3.  [Using Certificates with HTTP Requests](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs_http.htm)  
    

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_http.htm "Invoking HTTP Callouts")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm "Callout Limits and Limitations")