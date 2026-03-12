---
title: "Using the AppCache"
domain: lightning
topic: using-the-appcache
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.958Z
estimatedTokens: 218
keywords: [AppCache, support, deprecated, Browser, vendors, followed, their, lead, Remove, useAppcache, attribute, <aura, application>, tag, standalone]
---

# Using the AppCache

> AppCache support is deprecated. Browser vendors have deprecated AppCache, so we
      followed their lead. Remove the useAppcache attribute in
      the <aura:application> tag of your standalone apps
        (.app resources) to avoid cross-browser support issues due to
      deprecation by browser vendors.

# Using the AppCache

AppCache support is deprecated. Browser vendors have deprecated AppCache, so we followed their lead. Remove the useAppcache attribute in the <aura:application> tag of your standalone apps (.app resources) to avoid cross-browser support issues due to deprecation by browser vendors.

If you don’t currently set useAppcache in an <aura:application> tag, you don’t have to do anything because the default value of useAppcache is false.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

See [an introduction to AppCache](http://www.html5rocks.com/en/tutorials/appcache/beginner/ "HTML (New Window)") for more information.

#### See Also

-   [aura:application](atlas.en-us.lightning.meta/lightning/ref_aura_application.htm "An app is a special top-level component whose markup is in a .app resource.")

## Related Topics

- aura:application (atlas.en-us.lightning.meta/lightning/ref_aura_application.htm)
