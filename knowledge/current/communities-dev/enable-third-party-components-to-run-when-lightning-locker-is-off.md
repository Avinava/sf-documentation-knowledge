---
title: "Enable Third-Party Components to Run When Lightning Locker Is Off"
domain: communities-dev
topic: enable-third-party-components-to-run-when-lightning-locker-is-off
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.511Z
estimatedTokens: 864
keywords: [Enable, Third-Party, Components, Run, Lightning, Locker, Off, turn, Experience, Builder, site, any, installed, managed, package]
---

# Enable Third-Party Components to Run When Lightning Locker Is Off

> If you turn off Lightning Locker in your Experience Builder site, any third-party
    components installed from a managed package must be configured to be available at design time
    and render at runtime.

# Enable Third-Party Components to Run When Lightning Locker Is Off

If you turn off Lightning Locker in your Experience Builder site, any third-party components installed from a managed package must be configured to be available at design time and render at runtime.

You can turn off Lightning Locker from the Relaxed CSP or Strict CSP security levels.

If LWS is enabled in the org, when you disable Lightning Locker in an Aura site, you actually disable LWS in the site. If you disable Lightning Locker in the LWR site, the site’s instance of LWS is disabled, even if LWS is enabled in the org. LWR sites can include third party libraries without disabling Lightning Locker or LWS. For more information see [Integrate Third-Party Libraries Using the Privileged Script Tag](https://developer.salesforce.com/docs/atlas.en-us.260.0.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_privileged_script.htm "HTML (New Window)") in LWR Sites for Experience Cloud.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

Turning off Lightning Locker can introduce security flaws to your site. Disable Lightning Locker only as a last resort.

## Configure Third-Party Aura Components to Run Without Lightning Locker

For third-party Aura components, managed package developers must configure the lightningcommunity:allowInRelaxedCSP interface for the component.

## Configure Third-Party Lightning Web Components to Run Without Locker

For third-party Lightning web components, managed package developers must configure the lightningCommunity\_\_RelaxedCSP value in the capability tag of the component’s configuration file.

#### See Also

-   [ExperienceBundle for Experience Builder Sites](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_migrate_expbundle.htm "The ExperienceBundle metadata type provides text-based representations of the different settings and components, such as pages, branding sets, and themes, that make up an Experience Builder site. Whether it’s for your own org or you’re a consulting partner or ISV, you can quickly update and deploy sites programmatically using your preferred development tools, including Salesforce Extensions for VS Code, Salesforce CLI, or your favorite IDE or text editor.")

-   [*Experience Cloud Help*: Select a Security Level in Experience Builder Sites](https://help.salesforce.com/s/articleView?id=experience.networks_security_csp_scriptlevel.htm&type=5&language=en_US "Experience Cloud Help: Select a Security Level in Experience Builder
    Sites - HTML (New Window)")

-   [*Salesforce Help*: Where to Allowlist Third-Party Hosts for Experience Builder Sites](https://help.salesforce.com/articleView?id=experience.networks_security_csp_allow.htm&type=5&language=en_US "Salesforce Help: Where to Allowlist Third-Party Hosts for Experience Builder
    Sites - HTML (New Window)")

-   [*Lightning Web Component Reference*: Allow In Relaxed Csp](https://developer.salesforce.com/docs/component-library/bundle/lightningcommunity:allowInRelaxedCSP/documentation "Lightning Web Component Reference: Allow In Relaxed Csp - HTML (New Window)")

-   [*Lightning Web Components Developer Guide*: XML Configuration File Elements](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_configuration_tags "Lightning Web Components Developer Guide: XML Configuration File
    Elements - HTML (New Window)")

## Related Topics

- ExperienceBundle for Experience Builder Sites (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_migrate_expbundle.htm)
