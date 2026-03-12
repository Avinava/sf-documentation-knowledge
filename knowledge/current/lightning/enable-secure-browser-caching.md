---
title: "Enable Secure Browser Caching"
domain: lightning
topic: enable-secure-browser-caching
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.363Z
estimatedTokens: 254
keywords: [Enable, Secure, Browser, Caching, data, improve, reload, performance, avoiding, extra, round, trips, server]
---

# Enable Secure Browser Caching

> Enable secure data caching in the browser to improve page reload performance by avoiding
  extra round trips to the server.

# Enable Secure Browser Caching

Enable secure data caching in the browser to improve page reload performance by avoiding extra round trips to the server.

This setting is selected by default.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

Disabling secure and persistent browser caching has a significant negative performance impact on Lightning Experience. Only disable in these scenarios.

-   Your company’s policy doesn’t allow browser caching, even if the data is encrypted.
-   During development in a sandbox or Developer Edition, you want to see the effect of any code changes without emptying the secure cache.

Secure and persistent data caching isn't available for Salesforce mobile app.

To disable secure data caching:

1.  From Setup, enter Session in the Quick Find box, and then select **Session Settings**.
2.  Deselect the checkbox for “Enable secure and persistent browser caching to improve performance”.
3.  Click **Save**.
