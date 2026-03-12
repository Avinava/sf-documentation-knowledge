---
title: "Make Large Metadata Configuration Changes"
domain: metadata-api
topic: make-large-metadata-configuration-changes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.745Z
estimatedTokens: 220
keywords: [Large, Metadata, Configuration, Changes, API, better, suited, APIs, deploying, Salesforce, org]
---

# Make Large Metadata Configuration Changes

> Metadata API is better suited than other APIs for deploying large
            changes to your Salesforce org.

# Make Large Metadata Configuration Changes

Metadata API is better suited than other APIs for deploying large changes to your Salesforce org.

Metadata API deploy() and retrieve() calls are file-based and therefore asynchronous. With synchronous commands, large configuration changes require unreasonably long load times. Instead, deploy and retrieve calls begin an asynchronous process that notifies you when it’s complete. Because file-based calls are asynchronous, Metadata API can also handle a queue of deploy requests.

#### See Also

-   [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.")

-   [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.")

## Related Topics

- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
