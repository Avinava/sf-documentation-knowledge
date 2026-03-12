---
title: "Merge Fields for Apex Callouts That Use Named Credentials"
domain: apex-guide
topic: merge-fields-for-apex-callouts-that-use-named-credentials
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.374Z
estimatedTokens: 1040
keywords: [Merge, Apex, Callouts, Named, Credentials, construct, HTTP, bodies, endpoints, code]
---

# Merge Fields for Apex Callouts That Use Named Credentials

> To construct the HTTP headers and request bodies of callouts to endpoints that are
  specified as named credentials, use these merge fields in your Apex code.

# Merge Fields for Apex Callouts That Use Named Credentials

To construct the HTTP headers and request bodies of callouts to endpoints that are specified as named credentials, use these merge fields in your Apex code.

| Merge Field | Description |
| --- | --- |
| {!$Credential.Username}{!$Credential.Password} | Username and password of the running user. Available only if the named credential uses password authentication.// non-standard authentication req.setHeader('X-Username', '{!$Credential.Username}'); req.setHeader('X-Password', '{!$Credential.Password}'); |
| {!$Credential.OAuthToken} | OAuth token of the running user. Available only if the named credential uses OAuth authentication.req.setHeader('Authorization', '{!$Credential.OAuthToken}'); |
| {!$Credential.AuthorizationMethod} | Valid values depend on the authentication protocol of the named credential.Basic—password authenticationBearer—OAuth 2.0null—no authentication |
| {!$Credential.AuthorizationHeaderValue} | Valid values depend on the authentication protocol of the named credential.Base-64 encoded username and password—password authenticationOAuth token—OAuth 2.0null—no authentication |
| {!$Credential.OAuthConsumerKey} | Consumer key. Available only if the named credential uses OAuth authentication. |

When you use merge fields to construct HTTP headers and request bodies, keep these considerations in mind.

-   To allow Apex code to use merge fields to populate the HTTP header and request body with org data when the callout is made, a Salesforce admin must enable **Allow Merge Fields in HTTP Header** and **Allow Merge Fields in HTTP Body** on the named credential. See [Create or Edit a Named Credential](https://help.salesforce.com/s/articleView?id=sf.nc_create_edit_named_credential.htm&language=en_US) in Salesforce Help.
-   To access or input custom headers, use Connect REST API. See [Named Credentials Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_named_credentials_resources.htm "HTML (New Window)") in the Connect REST API Developer Guide.
-   When you use these merge fields in HTTP request bodies of callouts, you can apply the HTMLENCODE formula function to escape special characters. The formula must start with HTMLENCODE, and other formula functions aren't supported. HTMLENCODE can’t be used on merge fields in HTTP headers. This example escapes special characters that are in the credentials.

    ```

    ```

-   When you use these merge fields in SOAP API calls, OAuth access tokens aren’t refreshed.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_custom_headers_bodies.htm "Custom Headers and Bodies of Apex Callouts That Use Named Credentials")

#### See Also

-   [Custom Headers and Bodies of Apex Callouts That Use Named Credentials](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_custom_headers_bodies.htm "Salesforce generates a standard authorization header for each callout to a named-credential-defined endpoint, but you can disable this option. Your Apex code can also use merge fields to construct each callout’s HTTP header and body.")

-   [Named Credentials as Callout Endpoints](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. You can also skip remote site settings, which are otherwise required for callouts to external sites, for the site defined in the named credential.")

-   [*Knowledge Article*: Named credential OAuth token doesn't get automatically refreshed with Salesforce SOAP API endpoint](https://help.salesforce.com/articleView?id=Named-credential-oauth-token-doesn-t-get-automatically-refreshed-with-Salesforce-SOAP-API-end-point&type=1&language=en_US "Knowledge Article: Named credential OAuth token doesn't get
    automatically refreshed with Salesforce SOAP API endpoint - HTML (New Window)")

## Code Examples

```
// non-standard authentication
req.setHeader('X-Username', '{!$Credential.Username}');
req.setHeader('X-Password', '{!$Credential.Password}');
```

```
req.setBody('Username:{!HTMLENCODE($Credential.Username)}')
req.setBody('Password:{!HTMLENCODE($Credential.Password)}')
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_custom_headers_bodies.htm)
- Custom Headers and Bodies of Apex Callouts That Use Named Credentials (atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_custom_headers_bodies.htm)
- Named Credentials as Callout Endpoints (atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm)
