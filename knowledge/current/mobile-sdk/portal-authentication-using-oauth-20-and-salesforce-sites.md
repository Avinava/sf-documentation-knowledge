---
title: "Portal Authentication Using OAuth 2.0 and Salesforce Sites"
domain: mobile-sdk
topic: portal-authentication-using-oauth-20-and-salesforce-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:31.477Z
estimatedTokens: 442
keywords: [Portal, Authentication, OAuth, 2.0, Salesforce, Sites, Spring, Release, adds, enhanced, flexibility, app, runs, site, obtain]
---

# Portal Authentication Using OAuth 2.0 and Salesforce Sites

> The Salesforce Spring '13 Release adds enhanced flexibility for portal authentication. If your
    app runs in a Salesforce portal, you can use OAuth 2.0 with a Salesforce site to obtain API
    access tokens on behalf of portal users. In this configuration you can:

# Portal Authentication Using OAuth 2.0 and Salesforce Sites

The Salesforce Spring '13 Release adds enhanced flexibility for portal authentication. If your app runs in a Salesforce portal, you can use OAuth 2.0 with a Salesforce site to obtain API access tokens on behalf of portal users. In this configuration you can:

-   Authenticate portal users via Auth providers and SAML, rather than a SOAP API login() call.
-   Avoid handling user credentials in your app.
-   Customize the login screen provided by the Salesforce site.

Here's how to get started.

1.  Associate a Salesforce site with your portal. The site generates a unique URL for your portal. See [Associating a Portal with Salesforce Sites](https://help.salesforce.com/apex/HTViewHelpDoc?id=sites_customer_portal_setup.htm&language=en_US "HTML (New Window)").
2.  Create a custom login page on the Salesforce site. See [Managing Salesforce Site Login and Registration Settings](https://help.salesforce.com/apex/HTViewHelpDoc?id=sites_login_and_registration_settings.htm&language=en_US "HTML (New Window)").
3.  Use the unique URL that the site generates as the redirect domain for your users' login requests.

The OAuth 2.0 service recognizes your custom host name and redirects the user to your site login page if the user is not yet authenticated.

## Example

For example, rather than redirecting to https://login.salesforce.com:

```

```

redirect to your unique Salesforce site URL, such as https://MyDomainName.my.salesforce-sites.com:

```

```

For more information and a demonstration video, see [OAuth for Portal Users](http://blogs.developerforce.com/developer-relations/2013/02/oauth-for-portal-users.html "HTML (New Window)") on the Salesforce Platform Developer Relations Blogs page.

## Code Examples

```
https://login.salesforce.com/services/oauth2/authorize?
response_type=code&client_id=<your_client_id>&
redirect_uri=<your_redirect_uri>
```

```
https://MyDomainName.my.salesforce-sites.com/services/oauth2/authorize?
response_type=code&client_id=<your_client_id>&
redirect_uri=<your_redirect_uri>
```
