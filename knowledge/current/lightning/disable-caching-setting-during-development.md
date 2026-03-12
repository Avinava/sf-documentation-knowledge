---
title: "Disable Caching Setting During Development"
domain: lightning
topic: disable-caching-setting-during-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.760Z
estimatedTokens: 268
keywords: [Disable, Caching, Setting, Development, secure, persistent, browser, sandbox, Developer, Edition, org, effect, any, code, changes]
---

# Disable Caching Setting During Development

> Disable the secure and persistent browser caching setting during development in a
        sandbox or Developer Edition org to see the effect of any code changes without needing to
        empty the cache.

# Disable Caching Setting During Development

Disable the secure and persistent browser caching setting during development in a sandbox or Developer Edition org to see the effect of any code changes without needing to empty the cache.

The caching setting improves page reload performance by avoiding extra round trips to the server.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

Disabling secure and persistent browser caching has a significant negative performance impact on Lightning Experience. Always enable the setting in production orgs.

1.  From Setup, enter Session in the Quick Find box, and then select **Session Settings**.
2.  Deselect the checkbox for “Enable secure and persistent browser caching to improve performance”.
3.  Click **Save**.

#### See Also

-   [Enable Secure Browser Caching](atlas.en-us.lightning.meta/lightning/perf_secure_browser_caching.htm "Enable secure data caching in the browser to improve page reload performance by avoiding extra round trips to the server.")

## Related Topics

- Enable Secure Browser Caching (atlas.en-us.lightning.meta/lightning/perf_secure_browser_caching.htm)
