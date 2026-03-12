---
title: "Avoid Deployment Issues When Moving to Enhanced LWR Sites"
domain: communities-dev
topic: avoid-deployment-issues-when-moving-to-enhanced-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.334Z
estimatedTokens: 894
keywords: [Avoid, Deployment, Issues, Moving, Enhanced, LWR, Sites, Winter, ’24, longer, disable, content, platform, introduced, ’23]
---

# Avoid Deployment Issues When Moving to Enhanced LWR Sites

> From Winter ’24, you can no longer disable the enhanced sites and content platform,
  which was first introduced in Winter ’23. As a result, any site created from an LWR template is
  now an enhanced LWR site by default. Unlike non-enhanced LWR sites, which use the ExperienceBundle
  metadata type, enhanced LWR sites use the DigitalExperienceBundle and the DigitalExperienceConfig
  types. However, if you created a non-enhanced LWR site on a source org such as sandbox before
  Winter ’24, and you now want to deploy the site for the first time to a target org such as
  production, this difference in metadata types can cause deployment issues.

# Avoid Deployment Issues When Moving to Enhanced LWR Sites

From Winter ’24, you can no longer disable the enhanced sites and content platform, which was first introduced in Winter ’23. As a result, any site created from an LWR template is now an enhanced LWR site by default. Unlike non-enhanced LWR sites, which use the ExperienceBundle metadata type, enhanced LWR sites use the DigitalExperienceBundle and the DigitalExperienceConfig types. However, if you created a non-enhanced LWR site on a source org such as sandbox before Winter ’24, and you now want to deploy the site for the first time to a target org such as production, this difference in metadata types can cause deployment issues.

In this case, instead of creating the site on the target org *prior* to deployment, we recommend using the deployment process to create the site. Otherwise, if you first create the site on the target org, the new site is an enhanced LWR site—meaning it uses the DigitalExperienceBundle and the DigitalExperienceConfig types. And because the non-enhanced LWR site on the source org uses ExperienceBundle, if you then try to deploy it to the target org, the deployment fails due to the metadata type mismatch.

However, let’s say that you created the site in the target org prior to deployment. What can you do to resolve deployment errors?

Because you can’t delete Experience Cloud sites, we instead recommend renaming the site and updating the site URL in the target org so that they no longer match the values in the source org. This approach frees up the deployment process to recreate the site in the target org using the source org’s values.

1.  In the target org, on the Settings page of the site’s Administration workspace, rename the site so that it differs from the site in the source org.

    ![The Settings page in the Administration workspace.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fmigrate_enhanced.png&folder=communities_dev)

2.  From Setup, in the Quick Find box, enter Custom URLs.
3.  In Custom URLs, locate the two URLs for the site. Each site includes:

    -   A Site.com Community URL that maps to the ExperienceBundle or DigitalExperienceBundle and DigitalExperienceConfig metadata types, as appropriate
    -   A Community URL that maps to CustomSite

    ![The Custom URLs page showing the two URLs for a site.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fmigrate_enhanced2.png&folder=communities_dev)

4.  Change both site URLs to ensure that they’re no longer the same as the site URLs in the source org.
5.  After you update the site name and URL, deploy the site again either with change sets or with Metadata API using your preferred deployment tools.
6.  If you’re using Metadata API, remember to retrieve the site and include the Network and CustomSite types to allow the system to automatically create the new non-enhanced LWR site in the target org. If you’re using change sets, remember to recreate the change set before deploying.

#### See Also

-   [*Salesforce Help*: What Is the Enhanced Sites and Content Platform?](https://help.salesforce.com/s/articleView?id=experience.exp_cloud_enhanced.htm&type=5&language=en_US "Salesforce Help: What Is the Enhanced Sites and Content Platform? - HTML (New Window)")

-   [*Metadata API Developer Guide*: DigitalExperienceBundle](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm "Metadata API Developer Guide: DigitalExperienceBundle - HTML (New Window)")
