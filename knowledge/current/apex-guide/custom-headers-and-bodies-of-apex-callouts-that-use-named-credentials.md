---
title: "Custom Headers and Bodies of Apex Callouts That Use Named
   Credentials"
domain: apex-guide
topic: custom-headers-and-bodies-of-apex-callouts-that-use-named-credentials
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:32.331Z
estimatedTokens: 650
keywords: [Custom, Headers, Bodies, Apex, Callouts, Named, Credentials, Salesforce, generates, standard, authorization, header, callout, named-credential-defined, endpoint, disable, option., code, merge, fields]
---

# Custom Headers and Bodies of Apex Callouts That Use Named
   Credentials

> Salesforce generates a standard authorization header for each callout to a
  named-credential-defined endpoint, but you can disable this option. Your Apex code can also use
  merge fields to construct each callout’s HTTP header and body.

# Custom Headers and Bodies of Apex Callouts That Use Named Credentials

Salesforce generates a standard authorization header for each callout to a named-credential-defined endpoint, but you can disable this option. Your Apex code can also use merge fields to construct each callout’s HTTP header and body.

This flexibility enables you to use named credentials in special situations. For example, some remote endpoints require security tokens or encrypted credentials in request headers. Some remote endpoints expect usernames and passwords in XML or JSON message bodies. Customize the callout headers and bodies as needed.

The Salesforce admin must set up the named credential to allow Apex code to construct headers or use merge fields in HTTP headers or bodies. The following table describes these callout options for the named credential.

| Field | Description |
| --- | --- |
| Generate Authorization Header | By default, Salesforce generates an authorization header and applies it to each callout that references the named credential.Deselect this option only if one of the following statements applies.The remote endpoint doesn’t support authorization headers.The authorization headers are provided by other means. For example, in Apex callouts, the developer can have the code construct a custom authorization header for each callout.This option is required if you reference the named credential from an external data source. |
| Allow Merge Fields in HTTP HeaderAllow Merge Fields in HTTP Body | In each Apex callout, the code specifies how the HTTP header and request body are constructed. For example, the Apex code can set the value of a cookie in an authorization header.These options enable the Apex code to use merge fields to populate the HTTP header and request body with org data when the callout is made.These options aren’t available if you reference the named credential from an external data source. |

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_merge_fields.htm "Merge Fields for Apex Callouts That Use Named Credentials")

#### See Also

-   [Merge Fields for Apex Callouts That Use Named Credentials](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_merge_fields.htm "To construct the HTTP headers and request bodies of callouts to endpoints that are specified as named credentials, use these merge fields in your Apex code.")

-   [*Salesforce Help*: Named Credentials](https://help.salesforce.com/HTViewHelpDoc?id=named_credentials_about.htm&language=en_US "Salesforce Help: Named Credentials - HTML (New Window)")

## Related Topics

- Next → (atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_merge_fields.htm)
- Merge Fields for Apex Callouts That Use Named Credentials (atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_merge_fields.htm)
