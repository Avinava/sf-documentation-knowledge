---
title: "Get Started with the Quick Start Partner Telephony Package"
domain: voice-pt-developer-guide
topic: get-started-with-the-quick-start-partner-telephony-package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.119Z
estimatedTokens: 1452
keywords: [Started, Quick, Start, Partner, Telephony, Package, explore, features, telephony-enabled, org, We’ve, published, sample, install, contact]
---

# Get Started with the Quick Start Partner Telephony Package

> You can explore the partner telephony features in your partner telephony-enabled org.
  We’ve published a sample quick start package that you can install in your org, create a contact
  center, and get started.

# Get Started with the Quick Start Partner Telephony Package

You can explore the partner telephony features in your partner telephony-enabled org. We’ve published a sample quick start package that you can install in your org, create a contact center, and get started.

The quick-start-partner-telephony package has a ConversationVendorInfo record. You can reference it while creating a contact center. It contains a connector URL which points to a Visualforce page (quickStartPT\_\_quickStartPTVFConnector). You can change it to localhost (127.0.0.1). Both options require you to run a local server. For localhost, you must host the connector from http://127.0.0.1. For the Visualforce page, you need the server to call SCRT APIs.

The package also includes an LMS channel and Lightning web component/Aura record home and bridge components. The Visualforce page connector uses the AuraBridgeComponent. The localhost connector uses the lwcBridge component.

Installing the quick-start-partner-telephony package automatically enables MyDomain, Omni-Channel, and the external Service Cloud Voice telephony system.

The package includes these components:

| Name | Type | Description |
| --- | --- | --- |
| AuraLmsSample | Aura Component Bundle | Voice Call Record Home Aura component to demonstrate LMS |
| AuraMessageBridge | Aura Component Bundle | Aura bridge component needed for LMS messages |
| ServiceCloudVoiceMessageChannel | Lightning Message Channel | LMS channel |
| connectorPage | Visualforce Page | Connector page used as the connector URL |
| demoConnector | Static Resource | JS script referenced in the Connector VF page |
| loginPage | Visualforce Page | Demo login page used in Omni-Channel for partner login |
| login_page | Static Resource | JS script referenced in the login VF page |
| logo | Static Resource | Image icon |
| lwcBridge | Lightning Web Component Bundle | LWC bridge component needed for LMS messages |
| lwcLmsSample | Lightning Web Component Bundle | Voice Call record home Lightning web component (LWC) to demonstrate LMS |
| quickStartPTVFConnector | Conversation Vendor Information | ConversationVendorInfo record for VF page connector |
| quickStartPartnerTelephony | Conversation Vendor Information | ConversationVendorInfo record for localhost connector |
| remote_control | Static Resource | VF page used for simulator page (also known as “remote”) |
| simulatorPage | Visualforce Page | JS script referenced in simulator VF page |
| slds_stylesheet | Static Resource | CSS for simulator VF page |
| symbols | Static Resource | Image icons |
| Service_Cloud_Voice (applications) | Application | Application containing components used for Service Cloud Voice |
| SampleIntegrationImpl.cls | Apex Class | Class that implements interfaces for automated setup |
| SampleIntegrationImplTest.cls | Apex Class | Tests for Apex integration class |
| Service_Cloud_Voice (FlexiPage) | FlexiPage | Lightning page for customized Service Cloud Voice page |
| Service_Cloud_Voice_UtilityBar | FlexiPage | Utility base with common tools for Service Cloud Voice |
| sampleCustomConfig__c-sampleCustomConfig Layout | Layout | Layout to define display for custom config object |
| sampleNamedCredential | Named Credential | Named credential to authenticate server-to-server communication for automated setup |
| sampleCustomConfig__c | Custom Object | Custom object for defining custom settings for contact centers |
| VoiceCall | Voice Call | Voice Call object |
| MyDomain | Setting | Verifies that My Domain is enabled |
| OmniChannel | Setting | Turns on Omni-Channel in the org |
| ServiceCloudVoice | Setting | Turns on the external Service Cloud Voice telephony system.If you've already installed the quick-start-partner-telephony package, you can turn on the external Service Cloud Voice telephony system by copying the ServiceCloudVoice.settings-meta.xml file from the quick-start-partner-telephony package and adding it to the force-app/main/default/settings folder. |

1.  [Install the quick-start-partner-telephony package in your org](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB00000007T1S).
2.  After installing the quick-start-partner-telephony package, follow the Partner Telephony Setup instructions to create a contact center and assign permission sets.
3.  Import a contact center XML (see the sample XML in [Set Up Service Cloud Voice for Partner Telephony in Your Org](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_svc_org.htm "When Service Cloud Voice for Partner Telephony licenses are added to an org, Salesforce admins in the org can open the Partner Telephony Setup page and follow the steps to set up their contact center. This guide describes how you can customize that experience.")).
4.  Set reqVendorInfoApiName as needed.
    -   For the connector from localhost:

        ```

        ```

        quickStartPartnerTelephony is the developer name of the ConversationVendorInfo record where the connector URL is pointing to localhost (that is, https://127.0.0.1:8080). Make sure the connector is running on localhost 8080.

    -   For the connector from the Visualforce page:

        ```

        ```

        Start a server for SCRT server calls (such as inbound call, transcription, and call recording) and one initial call to set org details. The VF page included in the package uses localhost:3030 for SCRT calls (that is, http://127.0.0.1:3030/). Configure the org details using the configureTenantInfo call. Enable Cors on the server to enable calls to the other domain from the VF connector.
        -   Run npm install cors in the demo connector.
        -   Add the following two lines in server.js.

            ```

            ```

5.  Set reqVendorInfoApiName as needed.

## Code Examples

```
<item sortOrder="2"
        name="reqVendorInfoApiName" label="Conversation Vendor Info Developer
        Name">quickStartPT__quickStartPartnerTelephony</item>
```

```
<item sortOrder="2"
        name="reqVendorInfoApiName" label="Conversation Vendor Info Developer
          Name">quickStartPT__quickStartPTVFConnector</item>
```

```
import cors from 'cors';
app.use(cors());
```

## Related Topics

- Set Up Service Cloud Voice for Partner Telephony in Your Org (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_svc_org.htm)
