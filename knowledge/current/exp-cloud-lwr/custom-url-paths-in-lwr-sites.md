---
title: "Custom URL Paths in LWR Sites"
domain: exp-cloud-lwr
topic: custom-url-paths-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.802Z
estimatedTokens: 571
keywords: [Custom, URL, Paths, LWR, Sites, Unlike, Aura, Experience, Cloud, support, meaning, cluttering, site’s, URL—for, https]
---

# Custom URL Paths in LWR Sites

> Unlike Aura sites, LWR sites in Experience Cloud support custom URL paths, meaning no
  more /s cluttering up your site’s URL—for example,
   https://mycustomdomain.com/mypage.

# Custom URL Paths in LWR Sites

Unlike Aura sites, LWR sites in Experience Cloud support custom URL paths, meaning no more /s cluttering up your site’s URL—for example, https://mycustomdomain.com/mypage.

Before Winter ’23, you could create an authenticated or an unauthenticated LWR site. Unauthenticated sites supported custom URL paths, but authenticated sites included /s at the end of the base URL—for example, https://mycustomdomain.com/s/mypage.

LWR sites created in Winter ’23 or later no longer include /s in their URLs and are authenticated sites by default. Authenticated sites allow users to log in and access user-specific data, but you can also include public pages or make the entire site publicly accessible.

Sites that don’t use /s can still access Visualforce pages by instead appending vforcesite to the base URL—for example, https://mycustomdomain.com/vforcesite/mypage. You can also find the vforcesite URL in **Setup** | **Custom URLs**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

Unauthenticated LWR sites created before Winter ’23 are open to anyone on the web and don’t support login or authentication. Therefore, the Members, Contributors, Login & Registration, and Emails areas in the Administration workspace are unavailable because their settings don’t apply to unauthenticated sites.

#### See Also

-   [*Experience Cloud Developer Guide*: Considerations for Deploying Authenticated LWR Sites](https://developer.salesforce.com/docs/atlas.en-us.260.0.communities_dev.meta/communities_dev/communities_dev_migrate_considerations_lwr.htm "Experience Cloud Developer Guide: Considerations for Deploying Authenticated
    LWR Sites - HTML (New Window)")

-   [*Salesforce Help*: Control Public Access to Your Experience Builder Sites](https://help.salesforce.com/s/articleView?id=platform.community_builder_page_access_settings.htm&type=5&language=en_US "Salesforce Help: Control Public Access to Your Experience Builder
    Sites - HTML (New Window)")

-   [*Salesforce Help*: Update Your LWR Site URL to Remove /s](https://help.salesforce.com/s/articleView?id=experience.exp_cloud_enhanced_url.htm&language=en_US "Salesforce Help: Update Your LWR Site URL to Remove /s - HTML (New Window)")
