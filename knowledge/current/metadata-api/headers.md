---
title: "Headers"
domain: metadata-api
topic: headers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.861Z
estimatedTokens: 229
keywords: [Metadata, API, calls, options, call]
---

# Headers

> Use headers in Metadata API calls to set options for each call.

# Headers

Use headers in Metadata API calls to set options for each call.

-   **[AllOrNoneHeader](atlas.en-us.api_meta.meta/api_meta/meta_allornoneheader.htm)**
    Indicates whether to roll back all metadata changes when some of the records in a call result in failures.
-   **[CallOptions](atlas.en-us.api_meta.meta/api_meta/meta_calloptions.htm)**
    Specifies the API client identifier.
-   **[DebuggingHeader](atlas.en-us.api_meta.meta/api_meta/meta_debuggingheader.htm)**
    Specifies that the deployment result contains the debug log output, and specifies the level of detail included in the log. The debug log contains the output of Apex tests that are executed as part of a deployment.
-   **[SessionHeader](atlas.en-us.api_meta.meta/api_meta/meta_sessionheader.htm)**
    Specifies the session ID that the login call returns. This session ID is used to authenticate all subsequent Metadata API calls.

## Related Topics

- AllOrNoneHeader (atlas.en-us.api_meta.meta/api_meta/meta_allornoneheader.htm)
- CallOptions (atlas.en-us.api_meta.meta/api_meta/meta_calloptions.htm)
- DebuggingHeader (atlas.en-us.api_meta.meta/api_meta/meta_debuggingheader.htm)
- SessionHeader (atlas.en-us.api_meta.meta/api_meta/meta_sessionheader.htm)
