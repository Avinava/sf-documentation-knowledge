---
title: "Create a Custom Authentication Provider Plug-in"
domain: apex-guide
topic: create-a-custom-authentication-provider-plug-in
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.807Z
keywords: [Create, Custom, Authentication, Provider, Plug-in, Sample, Classes, Note, Test, See]
---

# Create a Custom Authentication Provider Plug-in

# Create a Custom Authentication Provider Plug-in

You can use Apex to create a custom OAuth-based authentication provider plug-in for single sign-on (SSO) to Salesforce.

Out of the box, Salesforce supports several external authentication providers for single sign-on, including Facebook, Google, LinkedIn, and service providers that implement the OpenID Connect protocol. By creating a plug-in with Apex, you can add your own OAuth-based authentication provider. Your users can then use the SSO credentials they already use for non-Salesforce applications with your Salesforce orgs.

Before you create your Apex class, you create a custom metadata type record for your authentication provider. For details, see [Create a Custom External Authentication Provider](https://help.salesforce.com/HTViewHelpDoc?id=sso_provider_plugin_custom.htm&language=en_US "HTML (New Window)").

## Sample Classes

This example extends the abstract class Auth.AuthProviderPluginClass to configure an external authentication provider called Concur. Build the sample classes and sample test classes in the following order.

1.  Concur
2.  ConcurTestStaticVar
3.  MockHttpResponseGenerator
4.  ConcurTestClass

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The Auth.AuthProviderPluginClass class doesn't include a method for single logout. You can easily configure single logout in Setup. For steps, see [Configure OpenID Connect Single Logout with Salesforce as the Relying Party](https://help.salesforce.com/s/articleView?id=xcloud.security_auth_slo_oidc_rp_configuring.htm&language=en_US) in Salesforce Help. Alternatively, create custom methods for single logout.

```

```

## Sample Test Classes

The following example contains test classes for the Concur class.

```

```

#### See Also

-   [*Apex Reference Guide*: AuthProviderPlugin Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm "Apex Reference Guide: AuthProviderPlugin Interface - HTML (New Window)")
    
-   [Salesforce Help: Create a Custom External Authentication Provider](https://help.salesforce.com/HTViewHelpDoc?id=sso_provider_plugin_custom.htm&language=en_US "Salesforce Help: Create a Custom External Authentication Provider - HTML (New Window)")