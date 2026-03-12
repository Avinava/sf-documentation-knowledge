---
title: "Step 1: Generate or Obtain the Web Service
WSDLs for Your Organization"
domain: metadata-api
topic: step-1-generate-or-obtain-the-web-service-wsdls-for-your-organization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:41.500Z
estimatedTokens: 513
keywords: [Step, Generate, Obtain, Web, Service, WSDLs, Organization, access, Metadata, API, calls, Language, WSDL, file, development]
---

# Step 1: Generate or Obtain the Web Service
WSDLs for Your Organization

> To access Metadata API calls, you need a Web Service Description Language (WSDL) file. The WSDL
            file defines the Web service that is available to you. Your development platform uses
            this WSDL to generate stub code to access the Web service it defines. You can obtain the
     

# Step 1: Generate or Obtain the Web Service WSDLs for Your Organization

To access Metadata API calls, you need a Web Service Description Language (WSDL) file. The WSDL file defines the Web service that is available to you. Your development platform uses this WSDL to generate stub code to access the Web service it defines. You can obtain the WSDL file from your organization’s Salesforce administrator, or if you have access to the WSDL download page in the Salesforce user interface, you can generate it yourself. For more information about WSDL, see [http://www.w3.org/TR/wsdl](http://www.w3.org/TR/wsdl).

Before you can access Metadata API calls, you must authenticate to use the Web service using the login() call, which is defined in the enterprise WSDL and the partner WSDL. Therefore, you must also obtain one of these WSDLs.

Any user with the Modify Metadata Through Metadata API Functions or Modify All Data permission can download the WSDL file to integrate and extend the Salesforce platform.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

The sample code in [Step 3: Walk Through the Java Sample Code](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm) uses the enterprise WSDL, though the partner WSDL works equally well.

To generate the metadata and enterprise WSDL files for your organization:

1.  Log in to your Salesforce account. You must log in as an administrator or as a user who has the “Modify All Data” permission.
2.  From Setup, enter API in the Quick Find box, then select **API**.
3.  Click **Generate Metadata WSDL**, and save the XML WSDL file to your file system.
4.  Click **Generate Enterprise WSDL**, and save the XML WSDL file to your file system.

## Related Topics

- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
- Step 3: Walk Through the Java Sample Code (atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm)
