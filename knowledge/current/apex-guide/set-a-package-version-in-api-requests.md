---
title: "Set a Package Version in API Requests"
domain: apex-guide
topic: set-a-package-version-in-api-requests
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:47.347Z
keywords: [Set, Package, Version, API, Requests, Specify, managed, package, version, header, request., Note]
---

# Set a Package Version in API Requests

> Specify a managed package version by using the package version header in your API
  request.

## Set a Package Version in API Requests

Specify a managed package version by using the package version header in your API request.

1.  Identify the managed package’s reference ID. This ID is either the subscriber package ID for migrated 2GP managed packages or the package namespace for 1GP managed packages.
    
    1.  From Setup, in the Quick Find box, enter Installed Packages, and select **Installed Packages**.
    2.  Locate the installed package that you want to reference and click the Package Name.
    3.  On the Installed Package Detail page, locate the Version Setting field. The field identifies the type of reference ID.
    
    If the Version Setting field is set to packageID, then the value of the Package field is the package’s reference ID. If the Version Setting field is set to namespace, then the value of the Namespace field is the package’s reference ID.
    
2.  Set the package version header according to the managed package’s reference ID and the desired package version.
    -   For REST API calls, use the x-sfdc-packageversion-\[packageId/namespace\] header. See [Package Version Header](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/headers_packageversion.htm "HTML (New Window)") in the REST API Developer Guide.
    -   For SOAP API calls, use the PackageVersionHeader header. See [PackageVersionHeader](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_header_packageversionheader.htm "HTML (New Window)") in the SOAP API Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If a package version isn’t specified in a request header, the API client uses the version of the package specified in Setup. To set this value, from Setup, enter API in the Quick Find box and select **API**. Then click **Configure Enterprise Package Version Settings** under Enterprise Package Version Settings.