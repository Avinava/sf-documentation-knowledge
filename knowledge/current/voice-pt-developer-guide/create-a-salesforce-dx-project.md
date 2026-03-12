---
title: "Create a Salesforce DX Project"
domain: voice-pt-developer-guide
topic: create-a-salesforce-dx-project
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.168Z
estimatedTokens: 3137
keywords: [Salesforce, Project, Allow, Service, Cloud, Voice, communicate, telephony, provider, package, you’re, creating, includes, connector, contact]
---

# Create a Salesforce DX Project

> Allow Service Cloud Voice to communicate with your telephony provider. The package
  you’re creating includes a connector, contact center, settings metadata, and more.

# Create a Salesforce DX Project

Allow Service Cloud Voice to communicate with your telephony provider. The package you’re creating includes a connector, contact center, settings metadata, and more.

1.  Clone the [scv-partner-telephony-quickstart GitHub repository](https://github.com/salesforce/scv-partner-telephony-quickstart), and install Salesforce CLI.

    ```

    ```

    -   You can also install the Salesforce CLI separately. To learn more, see [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli).
    -   If you already have Salesforce CLI installed, make sure to update it to the latest version sf update. This step is important because we’ve added our new Metadata type support.
    -   Make sure to use API version 53.0 in the Salesforce DX project file sfdx-project.json. If you have the local API version override, make sure it’s set to 53.0.
    -   If you aren’t using API version 53.0 or are using an older Salesforce CLI version, you may see errors related to ConversationVendorInfo Metadata type. The error message from Salesforce CLI looks like this:

        ```

        ```


2.  Develop your connector. For a sample implementation, see [the open-source demo connector repo in GitHub](https://github.com/salesforce-misc/byo-demo-connector). Use the demo connector as a reference when developing your custom integration code. Salesforce provides support for features in the demo connector, but we can’t debug or troubleshoot custom connector code.
3.  Update ConversationVendorInfo in [scv-partner-telephony-quickstart/force-app/main/default/ConversationVendorInformation/sampleVendor.ConversationVendorInformation-meta.xml.](https://github.com/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default)

    Use the following guidelines when updating the fields in this file.

    | Field | Description |
    | --- | --- |
    | bridgeComponent | Set the bridgeComponent to: <package-namespace>:<lms bridge name>. If you aren’t using it, you can remove it. If you’re testing with the demo connector, you can use {your_namespace}:lwcBridge or {your_namespace}:AuraBridge. To learn more see Use the Lightning Message Service Bridge. |
    | einsteinConversationInsightsSupported | Set this capability to true to support Einstein Conversation Insights for customers. Implement the service_cloud_voice.RecordingMediaProvider interface in your Apex integration class to provide Salesforce call recording URLs for analysis. NOTE: To use this capability, you must also set namedCredentialSupported to true. |
    | partnerContactCenterListSupported | Set this capability to true if the customer account has multiple contact centers and the customer has to select one to connect with Salesforce. NOTE: To use this capability, you must also set namedCredentialSupported to true. |
    | namedCredentialSupported | Set this capability to true if you support prescriptive setup through a named credential. Implement the service_cloud_voice.PartnerConnector interface in your Apex integration class, which tests the connection to the new customer account using the customer named credential |
    | partnerTransferDestinationsSupported | Set this capability to true so that Salesforce can fetch rep queues in order for Salesforce and rep queues to be mapped. Implement the service_cloud_voice.TransferDestinationProvider interface in your Apex integration class. NOTE: To use this capability, you must also set namedCredentialSupported to true. |
    | agentSSOSupported | Set this capability to true if you support rep SSO using Salesforce as the identity provider. Implement the service_cloud_voice.PartnerSSO interface in your Apex integration class. NOTE: To use this capability, you must also set namedCredentialSupported to true. |
    | clientAuthMode | This field is deprecated in API version 53.0 and later. Possible values are “SSO”, “Custom” and “Mixed”. |
    | connectorUrl | URL of the connector.If you’re testing with the demo connector, use the absolute link from the steps you performed in the Use the Demo Connector page. For example, https://www.myTelephonyDemo.com:8080.You can also choose to host the connector as a Visualforce page from the same Salesforce managed package. Use the relative URL format from Host the Connector as a Visualforce Page. For example, /apex/<namespace>__<connector visual force page name>. |
    | customConfig | The name of the custom object that defines the fields for storing custom settings for contact centers. |
    | customIconId | ID of the static resource used to identify the contact center integration, such as a partner telephony provider logo.Add a custom icon to Salesforce by defining the static resource, and then use the ID value for this field. The static resource must be in SVG format.This field is optional. |
    | customLoginUrl | The URL that is used to load the telephony system login page. If you’re testing with the demo connector, use the link from the steps you performed in the Use the Demo Connector page. For example, https://www.myTelephonyDemo.com:8080/login.html. |
    | developerName | Set this value to a unique name. It must match the file name. |
    | integrationClassName | This field is deprecated in API version 53.0 and later. |
    | integrationClass | Set this foreign key to the name of the Apex class that implements methods to communicate to the vendor during the partner telephony setup. NOTE: If you’ve turned on any of the previous capabilities, you must provide the Apex class. |
    | masterLabel | Set this to the desired display name for the telephony provider. This label shows up in the contact center record as the telephony provider. |
    | namedCredential | Set this foreign key to the name of the named credential. You can choose to use this named credential or create one similar to this one. In both cases you have to update the named credential with the account secret credentials (for JWT, AWS Signature v4) or authorize the named credential (for OAuth-based named credentials). |
    | serverAuthMode | This field is deprecated in API version 53.0 and later. Set to the serverAuthMode. Possible values are OAuth and None. |
    | userSyncingSupported | Set this capability to true if you support automated user syncing whenever a user is added or removed to a contact center. Implement the service_cloud_voice.UserSyncing interface in your Apex integration class, which is required for user syncing. NOTE: To use this capability, you must also set namedCredentialSupported to true. |
    | vendorType | Set this value to ServiceCloudVoicePartner. |

4.  Update the following resources as needed. For details, see [Use the Lightning Message Service Bridge](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_use_lightning_bridge.htm "Use the Lightning Message Service Bridge component to enable communication between the telephony system and other Lightning components."). If you don’t plan to use the Lightning Message Bridge, remove the /aura, /lwc and /messageChannels folders.
    1.  **Aura Bridge:** This example is a sample Aura bridge component. When referring to the LMS channel, use the namespace as a prefix: <namespace>\_\_<lms channel name>\_\_c.

        **i.** In force-app/main/default/aura/AuraBridge/AuraBridge.cmp, change <lightning:messageChannel type="REPLACE\_WITH\_NAMESPACE\_NAME\_\_ServiceCloudVoiceMessageChannel\_\_c" .. to <lightning:messageChannel type="<namespace>\_\_<lms channel name>\_\_c" ..

    2.  **Aura LMS Sample:** This sample Aura component subscribes to the lightning message channel. When referring to the LMS channel, use the namespace as a prefix: <namespace>\_\_<lms channel name>\_\_c.

        **i.** In force-app/main/default/aura/AuraLmsSample/AuraLmsSample.cmp*,* change <lightning:messageChannel type="REPLACE\_WITH\_NAMESPACE\_NAME\_\_ServiceCloudVoiceMessageChannel\_\_c" .. to <lightning:messageChannel type="<namespace>\_\_<lms channel name>\_\_c"

    3.  **LWC Bridge:** This example is a sample LWC bridge component. When referring to the LMS channel, don’t use the namespace as a prefix.
    4.  **LWC LMS Sample:** This is a sample LWC component that subscribes to the lightning message channel. When referring to the LMS channel, don’t use the namespace as a prefix.
5.  Other information about the sample resources that you can modify as necessary.

    -   The config [custom object](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/customobject.htm) defines the fields for storing the custom settings of a contact center. A sample custom config is provided at [force-app/main/default/sampleCustomConfig\_\_c](https://github.com/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default). This custom config, along with the associated layout, is used during contact center setup to fill out custom contact center details.
    -   A layout can be assigned to a custom object to specify how the custom object should be displayed. A sample layout is provided at [force-app/main/default/layouts](https://github.com/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default). This layout is referenced by sampleCustomConfig\_\_c object.
    -   A [named credential](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm) can be added to the package to be used by Apex callouts. A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint. A sample named credential is provided at [force-app/main/default/namedCredentials](https://github.com/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default).
    -   [Lightning pages](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_flexipage.htm) can be used to create a customized page with different Lightning components. A sample Lightning page is provided at [force-app/main/default/flexipage](https://github.com/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default).
    -   A [utility bar](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_console.meta/api_console/sforce_api_console_js_utility.htm) is a specialized Lightning page that can provide quick access to commonly used tools. A sample utility bar for Service Cloud Voice is provided at [force-app/main/default/flexipage](https://github.com/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default).
    -   A Salesforce application can be used to group tabs and objects used for a specific functionality. A sample application for Service Cloud Voice is provided at [force-app/main/default/applications](https://github.com/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default).
    -   An [Apex class](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.") should be provided to automate setup operations that require server-to-vendor communication (for example, SSO, user syncing). The class must implement the interfaces corresponding to the capabilities that are supported as defined in the ConversationVendorInfo. A sample Apex integration class is provided at [force-app/main/default/classes](https://github.com/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default). [Tests for the Apex classes](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_code_coverage_intro.htm) should also be added so that the package can be published in the App Exchange.
    -   You can replace the placeholder namespace with your desired namespace in the SFDX project by running the following commands:

        ```

        ```



-   [← Previous](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_hub_namespace_orgs.htm "Create Developer Hub and Namespace Orgs")
-   [Next →](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_deploy_package.htm "Create and Deploy Your Package")

#### See Also

-   [*GitHub*: https://github.com/salesforce/scv-partner-telephony-quickstart](https://github.com/salesforce/scv-partner-telephony-quickstart "GitHub: https://github.com/salesforce/scv-partner-telephony-quickstart - HTML (New Window)")

## Code Examples

```
git clone --recurse-submodules https://github.com/service-cloud-voice/scv-external-telephony-quickstart
cd scv-external-telephony-quickstart
npm install # This will install Salesforce CLI
```

```
Unexpected file found in package directory: 
/Users/.../scv-partner-telephony-quickstart/force-app/main/default/ConversationVendorInformation/sampleVendor.ConversationVendorInformation-meta.xml
```

```
export LANG=C
export LC_CTYPE=C
find ./ -type f -exec sed -i '' 's/REPLACE_WITH_NAMESPACE_NAME'/'"<YOUR NAMESPACE NAME>"'/g' {} \;
```

## Related Topics

- Use the Lightning Message Service Bridge (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_use_lightning_bridge.htm)
- service_cloud_voice.RecordingMediaProvider (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- service_cloud_voice.PartnerConnector (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- service_cloud_voice.TransferDestinationProvider (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- service_cloud_voice.PartnerSSO (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- Use the Demo Connector (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm)
- Host the Connector as a Visualforce Page (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_host_the_connector_as_VF.htm)
- service_cloud_voice.UserSyncing (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- Apex class (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- ← Previous (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_hub_namespace_orgs.htm)
