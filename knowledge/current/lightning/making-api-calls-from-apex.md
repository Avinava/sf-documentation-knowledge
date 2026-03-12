---
title: "Making API Calls from Apex"
domain: lightning
topic: making-api-calls-from-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.906Z
estimatedTokens: 473
keywords: [Making, API, Calls, Apex, controller, can’t, Salesforce, JavaScript, code]
---

# Making API Calls from Apex

> Make API calls from an Apex controller. You can’t make Salesforce API calls from
    JavaScript code.

# Making API Calls from Apex

Make API calls from an Apex controller. You can’t make Salesforce API calls from JavaScript code.

For security reasons, the Lightning Component framework places restrictions on making API calls from JavaScript code. To call third-party APIs from your component’s JavaScript code, add the API endpoint as a CSP Trusted Site.

To call Salesforce APIs, make the API calls from your component’s Apex controller. Use a named credential to authenticate to Salesforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

By security policy, sessions created by Lightning components aren’t enabled for API access. This prevents even your Apex code from making API calls to Salesforce. Using a named credential for specific API calls allows you to carefully and selectively bypass this security restriction.

The restrictions on API-enabled sessions aren’t accidental. Carefully review any code that uses a named credential to ensure you’re not creating a vulnerability.

For information about making API calls from Apex, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts.htm "HTML (New Window)").

#### See Also

-   [*Apex Developer Guide*: Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "Apex Developer Guide: Named Credentials as Callout Endpoints - HTML (New Window)")

-   [Making API Calls from Components](atlas.en-us.lightning.meta/lightning/js_api_calls_platform.htm "By default, you can’t make calls to third-party APIs from client-side code. Add a remote site as a Trusted URL with Content Security Policy (CSP) directives to allow client-side component code to load assets from and make API requests to that site’s domain.")

## Related Topics

- Making API Calls from Components (atlas.en-us.lightning.meta/lightning/js_api_calls_platform.htm)
