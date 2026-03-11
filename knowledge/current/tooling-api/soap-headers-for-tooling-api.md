---
title: "SOAP Headers for Tooling API"
domain: tooling-api
topic: soap-headers-for-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:46:36.898Z
keywords: [SOAP, Headers, Tooling, API]
---

# SOAP Headers for Tooling API

# SOAP Headers for Tooling API

Tooling API provides SOAP headers similar to the SOAP API headers.

Control the behavior of SOAP calls:

-   **[AllOrNoneHeader](atlas.en-us.api_tooling.meta/api_tooling/sforce_api_header_allornoneheader.htm)**  
    Allows a call to roll back all changes unless all records are processed successfully.
-   **[AllowFieldTruncationHeader](atlas.en-us.api_tooling.meta/api_tooling/sforce_api_header_allowfieldtruncation.htm)**  
    Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated.
-   **[CallOptions](atlas.en-us.api_tooling.meta/api_tooling/meta_calloptions.htm)**  
    Specifies the API client identifier.
-   **[DebuggingHeader](atlas.en-us.api_tooling.meta/api_tooling/meta_debuggingheader.htm)**  
    Specifies that the deployment result contains the debug log output, and specifies the level of detail included in the log. The debug log contains the output of Apex tests that are executed as part of a deployment.
-   **[DisableFeedTrackingHeader](atlas.en-us.api_tooling.meta/api_tooling/sforce_api_header_disablefeedtracking.htm)**  
    Specifies that changes made in the current call are tracked in feeds.
-   **[MetadataWarningsHeader](atlas.en-us.api_tooling.meta/api_tooling/api_tooling_soap_header_metadatawarningsheader.htm)**  
    Allows you to save metadata even if warnings are returned.
-   **[PackageVersionHeader](atlas.en-us.api_tooling.meta/api_tooling/sforce_api_header_packageversionheader.htm)**  
    Specifies the package version for each installed managed package.
-   **[SessionHeader](atlas.en-us.api_tooling.meta/api_tooling/sforce_api_header_sessionheader.htm)**  
    Specifies the session ID returned from the login server after a successful login(). This session ID is used in all subsequent calls.