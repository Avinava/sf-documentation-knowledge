---
title: "Prerequisites"
domain: metadata-api
topic: prerequisites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.525Z
estimatedTokens: 629
keywords: [Prerequisites, strongly, recommend, sandbox, exact, replica, production, organization, Enterprise, Unlimited, Performance, Editions, come, free, developer, start, developing, Metadata, API]
---

# Prerequisites

> We strongly recommend that you use a sandbox, which is an exact replica of your
      production organization. Enterprise, Unlimited, and Performance Editions come with
      free developer sandboxes. For more information, see http://www.salesforce.com/platform/cloud-infrastructure/sandbox.jsp.

# Prerequisites

Make sure that you complete these prerequisites before you start using Metadata API.

-   Create a development environment.

    We strongly recommend that you use a sandbox, which is an exact replica of your production organization. Enterprise, Unlimited, and Performance Editions come with free developer sandboxes. For more information, see [http://www.salesforce.com/platform/cloud-infrastructure/sandbox.jsp](http://www.salesforce.com/platform/cloud-infrastructure/sandbox.jsp).

    Alternatively, you can use a Developer Edition (DE) org. A DE org provides access to all features that are available with Enterprise Edition, but is limited by the number of users and the amount of storage space. A DE org isn’t a copy of your production org/ It provides an environment where you can build and test your solutions without affecting your organization’s data. Developer Edition accounts are available for free at [https://developer.salesforce.com/signup](https://developer.salesforce.com/signup).

-   Identify a user that has the API Enabled permission and the Modify Metadata Through Metadata API Functions permission or Modify All Data permission. These permissions are required to access Metadata API calls.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

    #### Note

    If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

-   Install a SOAP client. Metadata API works with current SOAP development environments, including, but not limited to, Visual Studio® .NET and the Web Service Connector (WSC).

    In this document, we provide Java examples based on WSC and JDK 6 (Java Platform Standard Edition Development Kit 6). To run the samples, first download the latest force-wsc JAR file and its dependencies from [mvnrepository.com/artifact/com.force.api/force-wsc/](http://mvnrepository.com/artifact/com.force.api/force-wsc/ "HTML (New Window)"). Dependencies are listed on the page when you select a version.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

    #### Note

    Development platforms vary in their SOAP implementations. Implementation differences in certain development platforms can prevent access to some or all features in Metadata API.

## Related Topics

- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_quickstart_retrieve_add_components.htm)
