---
title: "Enable Storable Actions in an Application"
domain: lightning
topic: enable-storable-actions-in-an-application
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.652Z
estimatedTokens: 450
keywords: [Enable, Storable, Actions, Application, standalone, app, resource, configure, client-side, storage, cached, action, responses]
---

# Enable Storable Actions in an Application

> To use storable actions in a standalone app (.app resource), you
    must configure client-side storage for cached action responses.

# Enable Storable Actions in an Application

To use storable actions in a standalone app (.app resource), you must configure client-side storage for cached action responses.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Client-side storage is automatically configured in Lightning Experience and the Salesforce mobile app. A component shouldn’t assume a cache duration because it may change as we optimize the platform.

To configure client-side storage for your standalone app, use <auraStorage:init> in the auraPreInitBlock attribute of your application’s template. For example:

```

```

name

The storage name must be actions. Storable actions are the only currently supported type of storage.

persistent

Set to true to preserve cached data between user sessions in the browser.

secure

Set to true to encrypt cached data.

maxsize

The maximum size in KB of the storage.

defaultExpiration

The duration in seconds that an entry is retained in storage.

defaultAutoRefreshInterval

The duration in seconds before an entry is refreshed in storage.

Storable actions use the Storage Service. The Storage Service supports multiple implementations of storage and selects an adapter at runtime based on browser support and specified characteristics of persistence and security.

#### See Also

-   [Storage Service Adapters](atlas.en-us.lightning.meta/lightning/storage_adapters.htm "The Storage Service supports multiple implementations of storage and selects an adapter at runtime based on browser support and specified characteristics of persistence and security. Storage can be persistent and secure. With persistent storage, cached data is preserved between user sessions in the browser. With secure storage, cached data is encrypted.")

## Code Examples

```
<aura:component isTemplate="true" extends="aura:template">
    <aura:set attribute="auraPreInitBlock">
        <auraStorage:init
          name="actions"
          persistent="false"
          secure="true"
          maxSize="1024"
          defaultExpiration="900"
          defaultAutoRefreshInterval="30" />
    </aura:set>
</aura:component>
```

## Related Topics

- Storage Service Adapters (atlas.en-us.lightning.meta/lightning/storage_adapters.htm)
