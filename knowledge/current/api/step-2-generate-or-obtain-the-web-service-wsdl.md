---
title: "Step 2: Generate or Obtain the Web Service WSDL"
domain: api
topic: step-2-generate-or-obtain-the-web-service-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.850Z
estimatedTokens: 542
keywords: [Step, Generate, Obtain, Web, Service, WSDL, access, Lightning, Platform, Language, file, Generating, Organization]
---

# Step 2: Generate or Obtain the Web Service WSDL

> To access the Lightning Platform Web service, you need a Web Service Description
  Language (WSDL) file. The WSDL file defines the Web service that is available to you.

# Step 2: Generate or Obtain the Web Service WSDL

To access the Lightning Platform Web service, you need a Web Service Description Language (WSDL) file. The WSDL file defines the Web service that is available to you.

Your development platform uses this WSDL to generate an API to access the Lightning Platform Web service it defines. You can either obtain the WSDL file from your organization’s Salesforce administrator or you can generate it yourself if you have access to the WSDL download page in the Salesforce user interface. You can navigate to the most recent WSDL for your organization from Setup by entering API in the Quick Find box, then selecting **API**.

For more information about WSDL, see [http://www.w3.org/TR/wsdl](http://www.w3.org/TR/wsdl).

## Generating the WSDL File for Your Organization

Any user with the Modify All Data permission can download the Web Services Description Language (WSDL) file to integrate and extend Salesforce using the API. (The System Administrator profile has this permission.)

The WSDL file is dynamically generated based on which type of WSDL file (enterprise or partner) you download. The generated WSDL defines all of the API calls, objects (including standard and custom objects), and fields that are available for API access for your organization.

To generate the WSDL file for your organization:

1.  Log in to your Enterprise, Unlimited, Performance, or Developer Edition Salesforce account. You must log in as an administrator or as a user who has the “Modify All Data” permission. Logins are checked to ensure they are from a known IP address. For more information, see [Security and the API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_concepts_security.htm "HTML (New Window)").
2.  From Setup, enter API in the Quick Find box, then select **API** to display the WSDL download page.
3.  Download the [appropriate WSDL](atlas.en-us.api.meta/api/sforce_api_quickstart_intro.htm#enterprise_wsdl): see [Download API WSDL and Client Certificates](https://help.salesforce.com/s/articleView?id=platform.dev_wsdl.htm#dev_wsdl/options_download_wsdl&type=5&language=en_US).

## Related Topics

- appropriate WSDL (atlas.en-us.api.meta/api/sforce_api_quickstart_intro.htm)
