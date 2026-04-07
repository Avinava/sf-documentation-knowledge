---
title: "Use Your Branded Login Page"
domain: mobile-sdk
topic: use-your-branded-login-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.238Z
estimatedTokens: 126
keywords: [Branded, Login, Starting, Mobile, SDK, 5.2, display, Experience, Cloud, site, client, app]
---

> Starting with Mobile SDK 5.2, you can
  display a branded Experience Cloud site login page on your client app.

# Use Your Branded Login Page

Starting with Mobile SDK 5.2, you can display a branded Experience Cloud site login page on your client app.

Typically, the authorization URL for a branded login page looks like this example:

```

```

In this URL, <brand> is the branding parameter that you reuse in your app. Use the following methods to set this value, where loginBrand is the branding parameter for your Experience Cloud site login page.

Android

```

```

iOS

Swift

```

```

Objective-C

```

```

## Code Examples

```
https://MyDomainName.my.site.com/services/oauth2/authorize/<brand>?response_type=code&...
```

```
SalesforceSDKManager.getInstance().setLoginBrand(brandedLoginPath);
```

```
SalesforceManager.shared.brandLoginIdentifier = loginBrand
```

```
[SalesforceSDKManager sharedManager].brandLoginPath = loginBrand;
```
