---
title: "Create an LWR Site in Experience Cloud"
domain: exp-cloud-lwr
topic: create-an-lwr-site-in-experience-cloud
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.708Z
estimatedTokens: 702
keywords: [LWR, Site, Experience, Cloud, Select, Build, Own, Microsite, template]
---

# Create an LWR Site in Experience Cloud

> Select the Build Your Own (LWR) or the Microsite (LWR) template to create an LWR site
    in Experience Cloud.

# Create an LWR Site in Experience Cloud

Select the Build Your Own (LWR) or the Microsite (LWR) template to create an LWR site in Experience Cloud.

From Winter ’23, the way you create an LWR site has changed in two key ways.

-   Before Winter ’23, when you created an LWR site, you could create an authenticated or an unauthenticated site, which affected the site’s URL. LWR sites created in Winter ’23 or later are authenticated sites by default and no longer include /s at the end of their URLs. See [Custom URL Paths in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_url.htm "Unlike Aura sites, LWR sites in Experience Cloud support custom URL paths, meaning no more /s cluttering up your site’s URL—for example, https://mycustomdomain.com/mypage.").
-   From Winter ’23, new LWR sites and CMS workspaces that you create are hosted together on the enhanced sites and content platform, which offers partial deployment, site content search, and easy content management. As a result, any new LWR sites that you create using the Microsite (LWR) or the Build Your Own (LWR) templates are now enhanced LWR sites. See [What Is the Enhanced Sites and Content Platform](https://help.salesforce.com/s/articleView?id=experience.exp_cloud_enhanced.htm&type=5&language=en_US) in Salesforce Help.

To create an LWR site:

1.  From Setup, in the Quick Find box, enter Digital Experiences, then select **All Sites**, and click **New**.
2.  In the site creation wizard, select **Build Your Own (LWR)** or **Microsite (LWR)**, and click **Get Started**.

    ![Site creation wizard](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_create.png&folder=exp_cloud_lwr)

3.  Enter a name and base URL value.

    The base URL value is appended to the domain that you created when you enabled Digital Experiences. For example, if your domain name is UniversalTelco.my.site.com and you’re creating a partner site, you can enter partners to create a unique URL UniversalTelco.my.site.com/partners.

4.  Click **Create**.

    After you create your site, the Experience Workspaces area appears.


You can also create the site programmatically [through Connect API](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_communities.htm "HTML (New Window)") or [using Salesforce CLI commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_community.htm "HTML (New Window)").

#### See Also

-   [Custom URL Paths in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_url.htm "Unlike Aura sites, LWR sites in Experience Cloud support custom URL paths, meaning no more /s cluttering up your site’s URL—for example, https://mycustomdomain.com/mypage.")

## Related Topics

- Custom URL Paths in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_differences_url.htm)
