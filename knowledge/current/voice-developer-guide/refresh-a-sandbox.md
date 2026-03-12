---
title: "Refresh a Sandbox"
domain: voice-developer-guide
topic: refresh-a-sandbox
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.561Z
estimatedTokens: 2903
keywords: [Refresh, Sandbox, Refreshing, updates, metadata, source, org, Prerequisites]
---

# Refresh a Sandbox

> Refreshing a sandbox updates its metadata from the source org.

# Refresh a Sandbox

Refreshing a sandbox updates its metadata from the source org.

| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 30 minutes |

In this example, we show you how to reuse an AWS Account to refresh your sandbox and relink the refreshed sandbox to the Amazon Connect instance.

This configuration applies to users of Service Cloud Voice with telephony provided by Amazon Connect.

-   If your telephony model is [Service Cloud Voice with Amazon Connect](https://help.salesforce.com/apex/HTViewHelpDoc?id=voice_turn_on_parent.htm&language=en_US), complete all the refresh steps in this page.
-   If your telephony model is [Service Cloud Voice with Partner Telephony from Amazon Connect](https://help.salesforce.com/s/articleView?id=service.voice_pt_amazon_setup.htm&type=5&language=en_US), complete the steps in this page except for the ones you are asked to skip.

In this example, you will perform the following steps to refresh the sandbox:

1.  Retrieve (back up) the metadata for the following packages:
    -   \*ConversationVendorInfo
    -   CallCenter
    -   Single sign-on connected app
2.  Refresh the sandbox.
3.  \*Deploy the ConversationVendorInfo metadata to the refreshed sandbox.
4.  Deploy the single sign-on connected app metadata to the refreshed sandbox and update the CallCenter metadata with the new connected app values.
5.  Create the REST API OAuth connected app and update the CallCenter metadata with the new connected app values.
6.  Deploy the CallCenter metadata to the refreshed sandbox.
7.  Map the identity provider (IdP) certificate to the connected apps.
8.  Update the AWS IAM SalesforceServiceVoiceIdp identity provider with the latest IdP certificate.
9.  Update the Service Cloud Voice AWS Lambda functions with the latest environment variable settings.

\*Skip this step if your telephony model is Service Cloud Voice with Partner Telephony from Amazon Connect.

## Prerequisites

Before you begin:

-   Verify that you have AWS root user or AWS administrator credentials.
-   Verify the AWS Account you want to use isn’t being used by another Salesforce org.
-   Review the [Sandbox Org Guidelines](https://help.salesforce.com/s/articleView?id=service.voice_sandbox_guidelines.htm&type=5&language=en_US) guidance around sandbox orgs and sandbox refreshes.

## Refresh the Sandbox

1.  Skip this step if your telephony model is Service Cloud Voice with Partner Telephony from Amazon Connect.

    [Retrieve](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_retrieve.htm) the **ConversationVendorInfo** metadata from the sandbox org to create a backup copy named package.xml. The ConversationVendorInfo package contains information about the AWS Account.

    Here’s a sample version of the ConversationVendorInfo package:

    ```

    ```

2.  [Retrieve](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_retrieve.htm) the **CallCenter** metadata from the sandbox org to create a backup copy named package.xml. The CallCenter package contains the call center definition used to integrate the Salesforce contact center with the Amazon Connect instance.

    Here’s a sample version of the CallCenter package, where ContactCenterWest is the internal name of the contact center:

    ```

    ```

3.  [Retrieve](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_retrieve.htm) the **Single Sign-On Connected App** metadata from the sandbox org to create a backup copy named package.xml. The single sign-on connected app package contains the app configuration used to integrate Salesforce with the Amazon Connect instance.

    Here’s a sample version of the single sign-on connected app package, where ContactCenterWest is the internal name of the contact center:

    ```

    ```

4.  [Refresh your sandbox](https://help.salesforce.com/apex/HTViewHelpDoc?id=data_sandbox_refresh.htm&language=en_US).
5.  Skip this step if your telephony model is Service Cloud Voice with Partner Telephony from Amazon Connect.

    [Deploy](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_deploy.htm) the **ConversationVendorInfo** metadata to the refreshed sandbox org and verify that you receive an email from Salesforce confirming Service Cloud Voice has successfully connected to the AWS Account.

6.  Skip this step if your telephony model is Service Cloud Voice with Partner Telephony from Amazon Connect.

    Perform the following steps to finish turning on Service Cloud Voice in the refreshed sandbox org:

    -   Go to **Setup > Voice > Amazon Setup** and verify that **Turn on Voice with Amazon Connect is ON** and grayed out.
    -   In the Register Tax Number section, click **Confirm Settings**.
    -   Verify that you receive an email from Salesforce confirming Service Cloud Voice is turned on.
7.  [Deploy](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_deploy.htm) the **single sign-on connected app** metadata to the refreshed sandbox org.
8.  Copy the following values from the newly deployed single sign-on connected app to the CallCenter metadata XML file:
    -   **reqConnectedAppId**. From the Developer Console, open the ConnectedApplication.obj file and copy the 15- or 18-digit org ID of the newly deployed connected app. Replace the value of reqConnectedAppId in the XML file with the value you just copied.
    -   **reqIdentityUrl**. Go to **Setup > App Manager**. Click **Manage** next to the newly deployed connected app and copy the IdP-Initiated Login URL. Replace the value of reqIdentityUrl in the XML file with the value you just copied.
9.  Give users access to the single sign-on connected app using permission sets (preferred) or profiles. Go to **Setup > App Manager**. Click **Manage** next to the newly deployed connected app and assign the profiles to the app or enable the Service Cloud Voice Permission Set in the app.
10.  Create the **REST API OAuth connected app** in the refreshed sandbox org by following the steps in the [Set Up OAuth in Your Service Cloud Voice Connected App](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lambda_connected_app_oauth.htm) document.
11.  Copy the following value from the newly created REST API OAuth connected app to the CallCenter metadata XML file:
     -   **reqRestApiConnectedAppId**. From the Developer Console, open the ConnectedApplication.obj file of the newly deployed connected app and copy the reqRestApiConnectedAppId value. Replace the value of reqRestApiConnectedAppId in the XML file with the value you just copied.
12.  Delete the contactCenterChannels element from the CallCenter metadata XML file.
13.  [Deploy](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_deploy.htm) the CallCenter metadata containing the values you just updated to the refreshed sandbox org.
14.  Map the IdP certificate to the single sign-on connected app.
     1.  To find your IdP certificate for single sign-on, select **Setup > Apps > Connected Apps > Manage Connected Apps**, and open the connected app with the label {salesforce\_contact\_center\_internal\_name} Connected App. Write down the label name of the currently chosen certificate.
     2.  Go to **Setup > Identity > Identity Provider** and make sure that the current Idp certificate label is the same as that of the connected app certificate label noted down in step 14.a. If the labels do not match, update the single sign-on connected app's certificate to match with the Salesforce Identity Provider certificate.
     3.  Click **Download Metadata** on the Salesforce Identity Provider page to download the SAML metadata in XML format.
15.  Update the SalesforceServiceVoiceIdp provider in AWS IAM with the latest IdP metedata from Salesforce.
     1.  Go to **IAM > Identity Providers**, and click **SalesforceServiceVoiceIdp** to drill down to the details.
     2.  Click **Replace Metadata** and replace the metadata with the XML file you downloaded in step 14.c.
16.  Set the SALESFORCE\_ORG\_ID value depending on your contact center version.
     -   For contact center versions below 19.0, set the SALESFORCE\_ORG\_ID environment variable in the AWS Lambda functions to the org ID of the refreshed sandbox.
         1.  [Find and copy the 15- or 18-digit org ID](https://help.salesforce.com/s/articleView?id=000385215&type=1&language=en_US).
         2.  Go to AWS Lambda.
         3.  Click the name of the Lambda function that has the SALESFORCE\_ORG\_ID environment variable. For example, click **InvokeTelephonyIntegrationApiFunction**.
         4.  Change the value of SALESFORCE\_ORG\_ID to the org ID you just copied.
         5.  Repeat these steps for all Lambda functions - including custom ones - that have the SALESFORCE\_ORG\_ID environment variable.

             After you change the SALESFORCE\_ORG\_ID environment variable for each of the impacted Lambda functions. make sure you publish the updated version of the Lambda function and set the Alias to the right version.

     -   For contact center versions 19.0 or later, set the value of the SALESFORCE\_ORG\_ID key in the Secret of the contact center.
         1.  In Secrets Manager in the AWS console, select the secret for the contact center. The secret is in the format <Contact Center Internal Name>-salesforce-secret.
         2.  In the Secret Value section, select Retrieve Secret and click Edit.
         3.  Select the Plaintext view, and paste the org ID of the refreshed sandbox as the value for the SALESFORCE\_ORG\_ID key.
         4.  Save your changes.

#### See Also

-   [*Salesforce Help:* Refresh Your Sandbox](https://help.salesforce.com/s/articleView?id=platform.data_sandbox_refresh.htm&type=5&language=en_US "Salesforce Help: Refresh Your Sandbox - HTML (New Window)")

-   [*Salesforce Help:* Set Up Service Cloud Voice with Amazon](https://help.salesforce.com/apex/HTViewHelpDoc?id=voice_turn_on_parent.htm&language=en_US "Salesforce Help: Set Up Service Cloud Voice with Amazon - HTML (New Window)")

-   [*Salesforce Help:* Set Up Service Cloud Voice with Partner Telephony from Amazon Connect](https://help.salesforce.com/s/articleView?id=service.voice_pt_amazon_setup.htm&type=5&language=en_US "Salesforce Help: Set Up Service Cloud Voice with Partner Telephony from Amazon Connect - HTML (New Window)")

-   [*Salesforce Help:* Developer Console](https://help.salesforce.com/s/articleView?id=platform.code_dev_console.htm&type=5&language=en_US "Salesforce Help: Developer Console - HTML (New Window)")

-   [*Amazon Documentation:* AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html "Amazon Documentation: AWS Lambda Developer Guide - HTML (New Window)")

-   [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm "Metadata API Developer Guide - HTML (New Window)")

-   [*Salesforce Help:* Manage Contact Center Certificates](https://help.salesforce.com/s/articleView?id=service.voice_manage_certificates.htm&type=5&language=en_US "Salesforce Help: Manage Contact Center Certificates - HTML (New Window)")

-   [*Salesforce Help:* Configure Single Sign-on (SSO) to Your Telephony Provider](https://help.salesforce.com/s/articleView?id=service.voice_pt_setup_config_sso.htm&type=5&language=en_US "Salesforce Help: Configure Single Sign-on (SSO) to Your Telephony Provider - HTML (New Window)")

## Code Examples

```
<!— ConversationVendorInfo Package package.xml-->
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>SERVICE_CLOUD_VOICE</members>
<name>ConversationVendorInfo</name>
</types>
<version>55.0</version>
</Package>
```

```
<!— CallCenter Package package.xml-->
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>ContactCenterWest</members>
<name>CallCenter</name>
</types>
<version>55.0</version>
</Package>
```

```
<!— ConnectedApp Package package.xml-->
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>ContactCenterWest_Connected_App</members>
<name>ConnectedApp</name>
</types>
<version>55.0</version>
</Package>
```
