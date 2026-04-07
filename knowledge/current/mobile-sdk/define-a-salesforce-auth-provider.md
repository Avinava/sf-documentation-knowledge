---
title: "Define a Salesforce Auth. Provider"
domain: mobile-sdk
topic: define-a-salesforce-auth-provider
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:25.274Z
estimatedTokens: 422
keywords: [Define, Salesforce, Auth, Provider, enable, external, authentication]
---

> To enable external authentication in Salesforce, create
an Auth. Provider.

# Define a Salesforce Auth. Provider

To enable external authentication in Salesforce, create an Auth. Provider.

External authentication through Facebook requires the App ID and App Secret from the Facebook app that you created in the previous step.

1.  In Setup, enter Auth. Providers in the Quick Find box, then select **Auth. Providers**.
2.  Click **New**.
3.  Configure the Auth. Provider fields as shown in the following table.

    | Field | Value |
    | --- | --- |
    | Provider Type | Select Facebook. |
    | Name | Enter FB Community Login. |
    | URL Suffix | Accept the default.NoteYou may also provide any other string that conforms to URL syntax, but for this example the default works best. |
    | Consumer Key | Enter the App ID from your Facebook app. |
    | Consumer Secret | Enter the App Secret from your Facebook app. |
    | Custom Error URL | Leave blank. |

4.  For Registration Handler, click **Automatically create a registration handler template**.
5.  For Execute Registration As:, click Search ![Search icon](/docs/resources/img/en-us/noversion?doc_id=help%2Fimages%2Fsearch.png&folder=mobile_sdk) and choose an Experience Cloud site member who has administrative privileges.
6.  Leave Portal blank.
7.  Click **Save**.

    Salesforce creates a new Apex class that extends RegistrationHandler. The class name takes the form *AutocreatedRegHandlerxxxxxx…*.

8.  Copy the Auth. Provider ID for later use.
9.  In the detail page for your new Auth. Provider, under Client Configuration, copy the Callback URL for later use.

    The callback URL takes the form https://login.salesforce.com/services/authcallback/<*id*\>/<*Auth.Provider\_URL\_Suffix*\>.
