---
title: "Enable Debugging for LWC Developers"
domain: mobile-offline
topic: enable-debugging-for-lwc-developers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.484Z
estimatedTokens: 588
keywords: [Enable, Debugging, LWC, Developers, settings, developer, user, needs, tools, developing, their, LWCs, Debug, Mode, Lightning]
---

# Enable Debugging for LWC Developers

> Enable debugging settings for each LWC developer user who needs to use debugging tools
  while developing their LWCs.

# Enable Debugging for LWC Developers

Enable debugging settings for each LWC developer user who needs to use debugging tools while developing their LWCs.

Debugging settings apply whether you’re using Test Harness or other Salesforce mobile apps during debugging.

## Enable Debug Mode

In normal use, Salesforce minifies and compresses JavaScript, HTML, CSS, and other assets for improved performance. These alterations can make it more difficult to debug your components. For example, tracing execution of your component’s JavaScript code is much harder when the code has been minified.

The solution is to enable Debug Mode for users who are developing LWCs.

-   In Salesforce, from Setup, enter Debug Mode in the Quick Find box, then select **Debug Mode Users**.
-   In the user list, locate any users who need debug mode enabled.
-   Enable the checkbox next to users for whom you want to enable debug mode.

More details, including a more complete description of the effects of Debug Mode, are available in “Enable Debug Mode in Salesforce” in the Lightning Web Components Developer Guide.

## Debugging and Lightning Web Security

Lightning Locker and Lightning Web Security (LWS) enhance the security of your Salesforce org by enforcing certain rules about component behavior, partially isolating components from each other, and other measures. The effects on your component code can be significant, but are most likely to be problematic during debugging.

If, during debugging, your efforts are blocked by running into proxy objects, **temporarily** disable Lightning Web Security. This will allow you to access LWC objects directly, instead of via proxies.

For much more detail, see “Debug Components in an Org With LWS Enabled” in the Lightning Web Components Developer Guide.

#### See Also

-   [*Lightning Web Components Developer Guide:* Enable Debug Mode in Salesforce](https://developer.salesforce.com/docs/platform/lwc/guide/debug-mode-enable.html "Lightning Web Components Developer Guide: Enable Debug Mode in
    Salesforce - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Debug Components in an Org With LWS Enabled](https://developer.salesforce.com/docs/platform/lwc/guide/debug-lwsec.html "Lightning Web Components Developer Guide: Debug Components in an Org With LWS
    Enabled - HTML (New Window)")
