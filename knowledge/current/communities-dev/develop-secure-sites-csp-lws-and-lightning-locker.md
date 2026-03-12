---
title: "Develop Secure Sites:
    CSP, LWS, and
    Lightning
    Locker"
domain: communities-dev
topic: develop-secure-sites-csp-lws-and-lightning-locker
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.501Z
estimatedTokens: 1513
keywords: [Develop, Secure, Sites, CSP, LWS, Lightning, Locker, Aura, LWR, Experience, Cloud, Content, Security, Policy, either]
---

# Develop Secure Sites:
    CSP, LWS, and
    Lightning
    Locker

> Aura
    and LWR sites
    in Experience Cloud
    use Content Security Policy (CSP) and
    either Lightning Web
    Security (LWS) or Lightning Locker to secure
    the
    site from malicious attacks and custom code vulnerabilities. Factor in the potential impact of
    these security features when you develop your own custom components, use third-party components,
    or add custom code in the head markup.

# Develop Secure Sites: CSP, LWS, and Lightning Locker

Aura and LWR sites in Experience Cloud use Content Security Policy (CSP) and either Lightning Web Security (LWS) or Lightning Locker to secure the site from malicious attacks and custom code vulnerabilities. Factor in the potential impact of these security features when you develop your own custom components, use third-party components, or add custom code in the head markup.

## CSP

CSP is a W3C standard for controlling the source of content that can be loaded on a page. CSP rules work at the page level and apply to all third-party components and custom code. By default, the framework’s headers allow content to be loaded only from secure (HTTPS) URLs and forbid XHR requests from JavaScript.

Different levels of CSP script security are available from Experience Builder. CSP levels are specific to each site.

## Lightning Locker and Lightning Web Security

The Lightning Locker architectural layer enhances security by isolating individual Lightning component namespaces in their own containers and enforcing coding best practices. Lightning Locker has been the default security architecture for Lightning components and for Aura sites in Experience Cloud.

LWS is designed to make it easier for your components to use secure coding practices and aims to replace Lightning Locker. As with Lightning Locker, the goal of LWS is to prevent Lightning components from interfering with or accessing data that belongs to platform code or components from other namespaces. However, the architecture of Lightning Web Security protects Lightning web components using a different approach.

## How LWS Applies At the Org and Site Levels

An admin can enable LWS at the org level to be used throughout the org instead of Lightning Locker via the Use Lightning Web Security for Lightning web components and Aura components setting in Session Settings in Setup.

This org-level setting affects Aura sites because when LWS is enabled in the org, LWS replaces Lightning Locker at the site level. Then, if you disable the Lightning Locker setting in Experience Builder for an Aura site, you’re actually disabling LWS.

LWR sites have their own instance of LWS, so the org setting for LWS has no effect on LWR sites. If you disable Lightning Locker in the LWR site, the site’s instance of LWS is disabled, even if LWS is enabled in the org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

By default, Strict CSP is enabled for all new Experience Builder sites, which means that Lightning Locker or LWS is also enabled. To access the Lightning Locker setting in Experience Builder, select Relaxed CSP.

For the B2B store and the D2C store LWR templates in Commerce Cloud, LWS isn’t enabled by default and can't be enabled.

This table summarizes the effect of the org-level setting and the site-level setting in an Aura or LWR site.

| Experience Cloud site framework | Site-level setting | Org-level setting | LWS or Locker used in the site |
| --- | --- | --- | --- |
| Aura |  |  |  |
|  |  |  |
|  |  | Lightning Locker |
|  |  | LWS |
| LWR |  |  |  |
|  |  |  |
|  |  | LWS (site’s instance) |
|  |  | LWS (site’s instance) |

-   **[Resolve Lightning Locker Conflicts in Aura Sites](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_conflicts_resolve.htm)**
    Lightning Locker is enabled by default for all new Aura sites in Experience Cloud. However, occasionally a third-party component on the page or custom code in your head markup doesn’t work as expected due to a conflict with Lightning Locker. In such a situation, Salesforce recommends using one of the workarounds described here.
-   **[Enable Third-Party Components to Run When Lightning Locker Is Off](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_off_components.htm)**
    If you turn off Lightning Locker in your Experience Builder site, any third-party components installed from a managed package must be configured to be available at design time and render at runtime.
-   **[Example: Adobe Analytics and Lightning Locker in Aura Sites](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_example.htm)**
    Because Adobe Analytics interacts with components in your Aura site, Lightning Locker can produce unexpected results. The recommended workaround is to isolate Adobe Analytics by using JavaScript Custom Events in your head markup. Adobe Analytics can then interact with components without being responsible for loading or referencing that resource directly.

#### See Also

-   [*Salesforce Help*: CSP and Lightning Locker in Experience Builder Sites](https://help.salesforce.com/articleView?id=experience.networks_security_csp_overview.htm&type=5&language=en_US "Salesforce Help: CSP and Lightning Locker in Experience Builder
    Sites - HTML (New Window)")

-   [*Salesforce Help*: Select a Security Level in Experience Builder Sites](https://help.salesforce.com/articleView?id=experience.networks_security_csp_scriptlevel.htm&type=5&language=en_US "Salesforce Help: Select a Security Level in Experience Builder
    Sites - HTML (New Window)")

-   [*Salesforce Help*: CSP and Lightning Locker Design Considerations](https://help.salesforce.com/articleView?id=experience.networks_security_csp_tips.htm&type=5&language=en_US "Salesforce Help: CSP and Lightning Locker Design Considerations - HTML (New Window)")

-   [*Lightning Web Components Developer Guide*: Security with Lightning Locker](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_locker_service "Lightning Web Components Developer Guide: Security with Lightning
    Locker - HTML (New Window)")

-   [*Lightning Aura Components Developer Guide*: Developing Secure Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/security_intro.htm "Lightning Aura Components Developer Guide: Developing Secure Code - HTML (New Window)")

## Related Topics

- Resolve Lightning Locker Conflicts in Aura Sites (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_conflicts_resolve.htm)
- Enable Third-Party Components to Run When Lightning Locker Is Off (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_off_components.htm)
- Example: Adobe Analytics and Lightning Locker in Aura Sites (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_example.htm)
