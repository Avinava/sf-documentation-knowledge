---
title: "LoginScopeHeader"
domain: api
topic: loginscopeheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.727Z
estimatedTokens: 337
keywords: [LoginScopeHeader, organization, authenticate, Self-Service, users, login, API, Calls, Sample, Code—C#]
---

# LoginScopeHeader

> Specifies your organization ID so that you can authenticate
            Self-Service users for your organization using the existing login().

# LoginScopeHeader

Specifies your organization ID so that you can authenticate Self-Service users for your organization using the existing [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Starting with Spring ’12, the Self-Service portal isn’t available for new Salesforce orgs. Existing orgs continue to have access to the Self-Service portal.

## API Calls

login()

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| organizationId | ID | The ID of the organization against which you authenticate Self-Service users. |
| portalId | ID | Specify only if user is a Customer Portal user. The ID of the portal for this organization. The ID is available in the Salesforce user interface:From Setup, enter Customer Portal Settings in the Quick Find box, then select Customer Portal SettingsSelect a Customer Portal name, and on the Customer Portal detail page, the URL of the Customer Portal displays. The Portal ID is in the URL. |

## Sample Code—C#

This sample shows how to use the LoginScopeHeader. It sets the organization ID and the portal ID for a Customer Portal user. It also sets the CallOptions header. It then logs the specified user in.

```

```

## Code Examples

```apex
/// Demonstrates how to set the LoginScopeHeader values.
public void LoginScopeHeaderSample()
{
    // Web Reference to the imported Partner WSDL.
    APISamples.partner.SforceService partnerBinding;
    
    string username = "USERNAME";
    string password = "PASSWORD";
    
    // The real Client ID will be an API Token provided by Salesforce
    // to partner applications following a security review. For more details,
    // see the Security Review FAQ in the online help.
    string clientId = "SampleCaseSensitiveToken/100";
    
    partnerBinding = new SforceService();
    partnerBinding.CallOptionsValue = new CallOptions();
    partnerBinding.CallOptionsValue.client = clientId;
    
    // To authenticate Self-Service users, we need to set the OrganizationId
    // in the LoginScopeHeader.
    string orgId = "00ID0000OrgFoo";
    partnerBinding.LoginScopeHeaderValue = new LoginScopeHeader();
    partnerBinding.LoginScopeHeaderValue.organizationId = orgId;
    // Specify the Portal ID if the user is a Customer Portal user.
    string portalId = "00ID0000FooPtl";
    partnerBinding.LoginScopeHeaderValue.portalId = portalId;
    
    try
    {
        APISamples.partner.LoginResult lr =
            partnerBinding.login(username, password);
    }
    catch (SoapException e)
    {
        Console.WriteLine(e.Code);
        Console.WriteLine(e.Message);
    }
}
```

## Related Topics

- login() (atlas.en-us.api.meta/api/sforce_api_calls_login.htm)
