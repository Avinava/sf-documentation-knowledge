---
title: "Callouts for Salesforce Connect Custom Adapters"
domain: apex-guide
topic: callouts-for-salesforce-connect-custom-adapters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.775Z
keywords: [Callouts, Salesforce, Connect, Custom, Adapters, Named, Credentials, Callout, Endpoints, See]
---

# Callouts for Salesforce Connect Custom Adapters

# Callouts for Salesforce Connect Custom Adapters

Just like any other Apex code, a Salesforce Connect custom adapter can make callouts. If the connection to the external system requires authentication, incorporate the authentication parameters into the callout.

Authentication parameters are encapsulated in a ConnectionParams object and provided to your DataSource.Connection class’s constructor.

For example, if your connection requires an OAuth access token, use code similar to the following.

```

```

If your connection requires basic password authentication, use code similar to the following.

```

```

## Named Credentials as Callout Endpoints for Salesforce Connect Custom Adapters

A Salesforce Connect custom adapter obtains the relevant credentials that are stored in Salesforce whenever they’re needed. However, your Apex code must apply those credentials to all callouts, except those that specify named credentials as the callout endpoints. A named credential lets Salesforce handle the authentication logic for you so that your code doesn’t have to.

If all your custom adapter’s callouts use named credentials, you can set the external data source’s Authentication Protocol field to **No Authentication**. The named credentials add the appropriate certificates and can add standard authorization headers to the callouts. You also don’t need to define a remote site for an Apex callout endpoint that’s defined as a named credential.

#### See Also

-   [Named Credentials as Callout Endpoints](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. You can also skip remote site settings, which are otherwise required for callouts to external sites, for the site defined in the named credential.")