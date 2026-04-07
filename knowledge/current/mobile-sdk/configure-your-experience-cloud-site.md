---
title: "Configure Your Experience Cloud Site"
domain: mobile-sdk
topic: configure-your-experience-cloud-site
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:25.243Z
estimatedTokens: 227
keywords: [Configure, Experience, Cloud, Site, final, step, Salesforce, Auth, Provider, logins]
---

> For the final step, configure the Experience Cloud site to use your Salesforce Auth.
        Provider for logins.

# Configure Your Experience Cloud Site

For the final step, configure the Experience Cloud site to use your Salesforce Auth. Provider for logins.

1.  In Setup, enter digital experiences in the Quick Find box, then select **All Sites**.
2.  Click **Manage** next to your site name.
3.  Click **Administration** | **Login & Registration**.
4.  Under Login, select your new Auth. Provider.
5.  Click **Save**.

You’re done! Now, when you log into your mobile app using your Experience Cloud site login URL, look for an additional button inviting you to log in using Facebook. Click the button and follow the on-screen instructions to see how the login works.

To test the external authentication setup in a browser, customize the Single Sign-On Initialization URL (from your Auth. Provider) as follows:

```

```

For example:

```

```

To form the Existing User Linking URL, replace sso with link:

```

```

## Code Examples

```
https://MyDomainName.my.salesforce.com/services/auth/sso/orgID/
URLsuffix?community=ExperienceCloudSite_login_url
```

```
https://MyDomainName.my.salesforce.com/services/auth/sso/00Da0000000TPNEAA4/
FB_Community_Login?community=
https://MyDomainName.my.site.com/fineapps
```

```
https://MyDomainName.my.salesforce.com/services/auth/link/00Da0000000ABCDEF9/
FB_Community_Login?community=
https://MyDomainName.my.site.com/fineapps
```
