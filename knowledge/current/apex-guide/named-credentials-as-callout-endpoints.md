---
title: "Named Credentials as Callout Endpoints"
domain: apex-guide
topic: named-credentials-as-callout-endpoints
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.381Z
keywords: [Named, Credentials, Callout, Endpoints, Example, See]
---

# Named Credentials as Callout Endpoints

# Named Credentials as Callout Endpoints

A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. You can also skip remote site settings, which are otherwise required for callouts to external sites, for the site defined in the named credential.

Named Credentials also include an OutboundNetworkConnection field that you can use to route callouts through a private connection. By separating the endpoint URL and authentication from the callout definition, named credentials make callouts easier to maintain. For example, if an endpoint URL changes, you update only the named credential. All callouts that reference the named credential simply continue to work.

If you have multiple orgs, you can create a named credential with the same name but with a different endpoint URL in each org. You can then package and deploy—on all the orgs—one callout definition that references the shared name of those named credentials. For example, the named credential in each org can have a different endpoint URL to accommodate differences in development and production environments. If an Apex callout specifies the shared name of those named credentials, the Apex class that defines the callout can be packaged and deployed on all those orgs without programmatically checking the environment.

To reference a named credential from a callout definition, use the named credential URL. A named credential URL contains the scheme callout:, the name of the named credential, and an optional path. For example: callout:My\_Named\_Credential/some\_path.

You can append a query string to a named credential URL. Use a question mark (?) as the separator between the named credential URL and the query string. For example: callout:My\_Named\_Credential/some\_path?format=json.

## Example

In the following Apex code, a named credential and an appended path specify the callout’s endpoint.

```

```

The referenced named credential specifies the endpoint URL and an external credential that specifies authentication settings.

![Named credential detail page](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fnamed_creds_as_callout_endpoints_04.png&folder=apexcode)

The Apex code remains the same no matter what authentication you use. The authentication settings differ in the external credential, which references an authentication provider that’s defined in the org.

![Named credential authentiation settings with OAuth options](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fnamed_creds_as_callout_endpoints_auth_03.png&folder=apexcode)

In contrast, let’s see what the Apex code looks like without a named credential. Notice that the code becomes more complex to handle authentication, even if we stick with basic password authentication. Coding OAuth is even more complex and is an ideal use case for named credentials.

```

```

1.  [Custom Headers and Bodies of Apex Callouts That Use Named Credentials](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_custom_headers_bodies.htm)  
    Salesforce generates a standard authorization header for each callout to a named-credential-defined endpoint, but you can disable this option. Your Apex code can also use merge fields to construct each callout’s HTTP header and body.
2.  [Merge Fields for Apex Callouts That Use Named Credentials](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials_merge_fields.htm)  
    To construct the HTTP headers and request bodies of callouts to endpoints that are specified as named credentials, use these merge fields in your Apex code.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_remote_site_settings.htm "Adding Remote Site Settings")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm "SOAP Services: Defining a Class from a WSDL Document")

#### See Also

-   [Invoking Callouts Using Apex](atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm)
    
-   [*Salesforce Help:* Named Credentials](https://help.salesforce.com/HTViewHelpDoc?id=named_credentials_about.htm&language=en_US "Salesforce Help: Named Credentials - HTML (New Window)")
    
-   [*Salesforce Help:* Authentication Providers](https://help.salesforce.com/apex/HTViewHelpDoc?id=sso_authentication_providers.htm&language=en_US "Salesforce Help: Authentication Providers - HTML (New Window)")
    
-   [*Named Credentials Developer Guide*: Get Started with Named Credentials](https://developer.salesforce.com/docs/platform/named-credentials/guide/get-started.html "Named Credentials Developer Guide: Get Started with Named
    Credentials - HTML (New Window)")
    
-   [*Named Credentials Developer Guide*: Named Credential API Links](https://developer.salesforce.com/docs/platform/named-credentials/references/named-credentials-reference/nc-api-links.html "Named Credentials Developer Guide: Named Credential API
    Links - HTML (New Window)")