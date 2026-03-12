---
title: "Automatic Language Detection for Multilingual LWR Sites"
domain: exp-cloud-lwr
topic: automatic-language-detection-for-multilingual-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.765Z
estimatedTokens: 586
keywords: [Automatic, Language, Detection, Multilingual, LWR, Sites, customers, access, site, they, localized, that’s, their, browser, settings]
---

# Automatic Language Detection for Multilingual LWR Sites

> When your customers access an LWR site, they see the site in the localized language
  that’s set in their browser settings. Automatic language detection works when you republish your
  LWR site and the site has a localized version.

# Automatic Language Detection for Multilingual LWR Sites

When your customers access an LWR site, they see the site in the localized language that’s set in their browser settings. Automatic language detection works when you republish your LWR site and the site has a localized version.

Let’s say your LWR site has English as the default language, but it also has a French version. When guest users access the site, they see the site in their browser’s default language. When authenticated users access the site, they see the language that’s set in their user profile.

Keep these considerations in mind when using automatic language detection.

-   Automatic language detection is on by default in your org. To disable it, contact Salesforce Customer Support.
-   If the PreferredLanguage cookie is set for a site, the language only changes when the user changes it with the language selector, or the cookie is deleted for the site. Otherwise, the site continues to use the language specified in the cookie, even if it doedsn't match the current user's default language setting.
-   If the site doesn’t support the user profile language or the browser’s default language, users see the default site language instead.
-   If your org uses Identity Provider (IdP) initiated SSO login from one site to a different site, Automatic Language Detection doesn't work.
-   If guest or authenticated users change their language preference via the Language Selector component, the new preference is used the next time they access the site.
-   Automatic language detection only happens when a user accesses the site without the locale path prefix. For example, a user accessing www.salesforce.com/siteprefix/ is automatically redirected, but www.salesforce.com/siteprefix/fr/ goes to the French language site.
-   When a user logs in to the site, the cookie locale is set immediately. Changing the user locale doesn’t change their language preference, even if the user never used the Language Selector to change the language.
-   Automatic language detection relies on a functional cookie. If functional cookies are disabled, your site can't detect or save the language preference of your user.
-   Language preferences are prioritized as follows:
    1.  Locale path prefix
    2.  Cookie locale
    3.  User Profile’s set locale
    4.  Browser locale
