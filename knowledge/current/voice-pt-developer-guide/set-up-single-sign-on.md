---
title: "Set Up Single Sign-On"
domain: voice-pt-developer-guide
topic: set-up-single-sign-on
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.174Z
estimatedTokens: 824
keywords: [Sign-On, SSO, solution, Connected, App, Salesforce, Identity, Provider, IdP, Perform, Headless]
---

# Set Up Single Sign-On

> Set up single sign-on (SSO) for your solution.

# Set Up Single Sign-On

Set up single sign-on (SSO) for your solution.

## Set Up the SSO Connected App and Salesforce with Identity Provider (IdP)

1.  From Setup, enter Identity Provider in the Quick Find box, then select **Identity Provider** and enable it. Download the certificate and metadata file.
2.  Enter App Manager in the Quick Find box. Click **App Manager** | **New connected App**.
3.  Create a new connected app and provide the details in Basic information and Web App settings.
    1.  Name the connected app.
    2.  Enable SAML.
    3.  Enter the ACS URL and Entity ID.
    4.  Select Subject Type as required and update the name ID format to match the SSO expected.
    5.  Select your IdP Certificate from the dropdown options.
    6.  Click **Save**.
    7.  Click **Manage profile** and select all the profiles for which you want to grant access to use SSO.
4.  After enabling Identify Provider, download the metadata file for using Salesforce as IdP. This metadata XML file should be used for setting up SSO.![Identity provider setup with download metadata circled](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fdownload_metadata.png&folder=voice_pt_developer_guide)

## Perform Headless SSO

If a telephony system login page isn’t needed, you can use a headless single sign-on (SSO) to your service. Salesforce sends a message to the connector iFrame with the entire contact center configuration as defined in {contactCenterName}.callCenter. Use these details to allow SSO, and notify Salesforce by returning a fulfilled Promise with a value of type InitResult when the Promise is successful or rejected.

To set up single sign-on (SSO), configure your Salesforce org as the SAML identity provider. For help, see:

-   [Set Up SSO Connected App and Salesforce with Identity Provider](#set-up-sso-idp)
-   [Salesforce as an Identity Provider](https://help.salesforce.com/articleView?id=sso_sfdc_idp_parent.htm&type=5&language=en_US)

Here’s a sample contact center configuration sent from Salesforce during connector init:![Contact center  configuration code sample](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fsample_contact_center_configuration.png&folder=voice_pt_developer_guide)

```

```

If SSO is successful, the SSO dialer is enabled to allow the rep to make outbound calls. ![Omni phone interface with Phone tab highlighted](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fscv_omni_phone.png&folder=voice_pt_developer_guide)If SSO fails, the base connector dispatches a CAN\_NOT\_LOG\_IN error. The rep receives an error message in the Omni-Channel utility or the Salesforce window, and their keypad remains disabled. ![Omni phone interface with login error](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fomni_phone_error.png&folder=voice_pt_developer_guide)![Service console with login error](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fomni_console_login_error.png&folder=voice_pt_developer_guide)

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

## Code Examples

```
init(ssoConfig) {
  const ssoResult = pbx.performSSO(ssoConfig)
  if (ssoResult.success) {
    return Promise.resolve(new InitResult({}));
  } else {
    return Promise.reject("Failed to login");
  }
}
```
