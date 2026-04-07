---
title: "ImportResultsSummary"
domain: mc-apis
topic: importresultssummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:22.443Z
estimatedTokens: 170
keywords: [ImportResultsSummary, retrieve-only, status, aggregate, individual, import, started, ImportDefinition, Possible, include]
---

# ImportResultsSummary

> The ImportResultsSummary object is a retrieve-only object that contains status and aggregate information on an individual import started from an ImportDefinition. Possible values include:

# ImportResultsSummary

The ImportResultsSummary object is a retrieve-only object that contains status and aggregate information on an individual import started from an ImportDefinition. Possible values include:

-   **New** \- The Retrieve request has yet to be processed by the application.
-   **Processing** \- The application is processing the Retrieve request.
-   **Completed** \- The application has completely processed the Retrieve request.
-   **Error** \- An error occurred while processing the Retrieve request.
-   **IOWork** \- The application is currently writing information to disk.
-   **Unknown** \- No status is currently available for the Retrieve request.
