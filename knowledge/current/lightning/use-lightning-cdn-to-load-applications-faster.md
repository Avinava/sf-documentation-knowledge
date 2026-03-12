---
title: "Use Lightning CDN to Load Applications Faster"
domain: lightning
topic: use-lightning-cdn-to-load-applications-faster
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.358Z
estimatedTokens: 669
keywords: [Lightning, CDN, Load, Applications, Faster, Experience, content, delivery, network, enabled, org, serves, component, framework]
---

# Use Lightning CDN to Load Applications Faster

> To load Lightning Experience faster, the Lightning content delivery network (CDN) is
  enabled for your org by default. The Lightning CDN serves static content for the Lightning
  component framework.

# Use Lightning CDN to Load Applications Faster

To load Lightning Experience faster, the Lightning content delivery network (CDN) is enabled for your org by default. The Lightning CDN serves static content for the Lightning component framework.

Salesforce uses a CDN partner to serve the static content for the Lightning Component framework over a CDN. CDNs are the industry standard for web applications because they provide faster and more secure content delivery. A CDN is a geographically distributed network of servers that store cached versions of web assets. To optimize page load times and site performance, a CDN efficiently delivers publicly cacheable content to users.

Lightning CDN is enabled by default for new and existing orgs. When enabled, this setting turns on the Lightning CDN for the static JavaScript and CSS in the Lightning Component framework at the org level. It doesn’t distribute your Salesforce data or metadata in a CDN. Admins can turn off this preference in Setup | Session Settings by deselecting the **Enable Content Delivery Network (CDN) for Lightning Component framework** checkbox. However, disabling the CDN isn’t recommended because it can impact performance.

If you experience any issues, ask your IT department if your company’s firewall blocks CDN content. Your IT department can make sure that static.lightning.force.com, a.static.lightning.force.com, b.static.lightning.force.com, and \*.static.lightning.force.com are added to any allowlist or firewall that your company operates. If you’re using Lightning Out, make sure that Content Security Policy doesn't block a.static.lightning.force.com and b.static.lightning.force.com domains. You can ping static.lightning.force.com but you can’t browse directly to the root URL at https://static.lightning.force.com.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Don’t use IP addresses for network filtering because that can cause connection issues with https://static.lightning.force.com. IP addresses for https://static.lightning.force.com are dynamic and aren’t maintained in Salesforce’s list of allowed IP addresses.

#### See Also

-   [*Salesforce Help:* Options to Serve a Custom Domain](https://help.salesforce.com/articleView?id=domain_mgmt_domain_config_options.htm&type=5&language=en_US)

-   [*Knowledge Article:* Salesforce Lightning CDN Preference Auto Enablement](https://help.salesforce.com/s/articleView?id=005115596&type=1&language=en_US)

-   [*Knowledge Article:* Salesforce IP Addresses and Domains to Allow](https://help.salesforce.com/articleView?id=000003652&type=1&language=en_US)
