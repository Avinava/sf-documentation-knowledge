---
title: "Enable the Voice Extension Page in Lightning App Builder"
domain: voice-developer-guide
topic: enable-the-voice-extension-page-in-lightning-app-builder
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.593Z
estimatedTokens: 1902
keywords: [Enable, Voice, Extension, Lightning, App, Builder, Configure, feature, let, administrators, add, custom, their, Omni-Channel, softphones]
---

# Enable the Voice Extension Page in Lightning App Builder

> Configure this feature to let administrators add custom voice controls to their Omni-Channel softphones using the Voice Extension FlexiPage in the Lightning App Builder.

# Enable the Voice Extension Page in Lightning App Builder

Configure this feature to let administrators add custom voice controls to their Omni-Channel softphones using the Voice Extension FlexiPage in the Lightning App Builder.

| Ease of Implementation | Medium |
| --- | --- |
| Estimated Time to Implement | 30 minutes |

To use this feature, you must have Service Cloud Voice installed. This configuration applies to the following telephony models:

-   [Service Cloud Voice with Amazon Connect](https://help.salesforce.com/s/articleView?id=service.voice_turn_on_parent.htm&type=5&language=en_US)
-   [Service Cloud Voice with Partner Telephony](https://help.salesforce.com/s/articleView?id=service.voice_pt_setup.htm&type=5&language=en_US)
-   [Service Cloud Voice with Partner Telephony from Amazon Connect](https://help.salesforce.com/s/articleView?id=service.voice_pt_amazon_setup.htm&type=5&language=en_US)

Administrators can create and customize Voice Extension pages, then enable them in a contact center so that any rep in the org can use the feature. For more information about customizing call controls and voice extensions through the Voice Extension page in the Lightning App Builder, see Customize Call Controls and Voice Extensions.

Before an administrator can create Voice Extension pages, you must perform several configuration steps to expose the page in the Lightning App Builder and enable the component types you want the page to support.

The Voice Extension page supports the following Lightning App Builder components: Lightning Web Components, Aura, and Visualforce. You can further extend the Voice Extension feature by linking Aura components to the Service Cloud Voice Toolkit API, allowing reps to perform call actions, such as muting a call, placing a call on hold, and starting a preview call.

You can either perform the configuration directly in the org through the Developer Console, or build and bundle the custom component configuration files and deploy the managed package to AppExchange for administrators to download.

Configuring this feature includes:

1.  Creating the Voice Extension FlexiPage metadata file
2.  Configuring Lightning Web Components for Voice Extensions
3.  Configuring Aura components for Voice Extensions
4.  Linking components to the Service Cloud Voice Toolkit API
5.  Linking components to the telephony system using Lightning Message Service
6.  Deploying and distributing the managed package.

If you’re creating custom configuration files for package distribution, use the sample quickstart templates in the [/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default/flexipages](https://github.com/salesforce/scv-partner-telephony-quickstart/tree/main/force-app/main/default/flexipages) folder in GitHub as a starting point.

## Steps

To enable the Voice Extension page in the Lightning App Builder:

## Step 1: Create the Voice Extension FlexiPage Metadata File

To create the Voice Extension FlexiPage Metadata file, add the VoiceExtension metadata type to the XML FlexiPage component definition file. See the FlexiPage page of the Metadata API Developer Guide for more information about the VoiceExtension FlexiPage metadata type. See the [XML Configuration File Elements](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_configuration_tags) page of the Lightning Web Components Dev Guide for more information about the lightning\_\_VoiceExtension target.

For example,

```

```

See the [Demo\_Voice\_Extension.flexipage-meta.xml](https://github.com/salesforce/scv-partner-telephony-quickstart/blob/main/force-app/main/default/flexipages/Demo_Voice_Extension.flexipage-meta.xml) file in GitHub for a sample implementation.

To refresh the sandbox, back up (retrieve()) the metadata before you perform the refresh and then import (deploy()) the metadata into the refreshed sandbox. See the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

## Step 2: Configure Lightning Web Components for Voice Extensions

To use a Lightning Web Component in the Voice Extension page, add the lightning\_\_VoiceExtension target to the component’s Lightning Web Component bundle. See the LightningComponentBundle page of the Metadata API Developer Guide and the [Lightning Web Components Dev Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_configuration_tags) for more information about the VoiceExtension metadata type.

For example,

```

```

See the [lwcVoiceExtension.js-meta.xml](https://github.com/salesforce/scv-partner-telephony-quickstart/blob/main/force-app/main/default/lwc/lwcVoiceExtension/lwcVoiceExtension.js-meta.xml) file in GitHub for a sample implementation.

## Step 3: Configure Aura Components for Voice Extensions

To use an Aura component in the Voice Extension page, for each Aura component in the Voice Extension page, implement the opencti:availableForVoiceExtension marker interface. Since this is a marker interface, you don’t need to implement any actions for the component. See the [AuraVoiceExtension.cmp](https://github.com/salesforce/scv-partner-telephony-quickstart/blob/main/force-app/main/default/aura/AuraVoiceExtension/AuraVoiceExtension.cmp) file in GitHub for a sample implementation.

For example,

```

```

See the [Demo\_Voice\_Extension.flexipage-meta.xml](https://github.com/salesforce/scv-partner-telephony-quickstart/blob/main/force-app/main/default/flexipages/Demo_Voice_Extension.flexipage-meta.xml) file in GitHub for a sample implementation.

## Step 4: Link the Aura Components to the Service Cloud Voice Toolkit API

You can further extend the Voice Extension feature by linking Aura components to the Service Cloud Voice Toolkit API, enabling reps to perform call operations, such as muting a call, placing a call on hold, and starting a preview call.

To link an Aura component to Service Cloud Voice, see the [Service Cloud Voice Aura Toolkit API](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_aura.htm "The Service Cloud Voice Toolkit API allows you to build Aura components that have access to Service Cloud Voice features.") page. For example,

For example,

```

```

See the [SampleComponent.cmp](https://github.com/service-cloud-voice/examples-from-doc/blob/main/ToolkitAPI/SampleAuraComponent/SampleComponent.cmp) file in GitHub for a sample implementation.

## Step 5: Link the Components to the Telephony Connector Using Lightning Message Bridge

If you set up Service Cloud Voice with Partner Telephony, to enable communication between the components and the telephony connector, create a Lightning Message Bridge (LMB) component. See the Use the Lightning Message Bridge page for information.

If you set up Service Cloud Voice with Amazon Connect or Service Cloud Voice with Partner Telephony from Amazon Connect, skip this step.

## Step 6: Deploy and Distribute the Managed Package

To distribute the configured files, create an SFDC project with the customized connectors, components, and metadata. Deploy the updated package so administrators can install it and start creating Voice Extension pages. See the Create a Service Cloud Voice Package page for information.

#### See Also

-   [*Salesforce Help:* Customize Call Controls and Voice Extensions](https://help.salesforce.com/s/articleView?id=service.voice_pt_setup_extensions.htm&type=5&language=en_US "Salesforce Help: Customize Call Controls and Voice
    Extensions - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<FlexiPage xmlns="http://soap.sforce.com/2006/04/metadata">
  …
  <type>VoiceExtension</type>
</FlexiPage>
```

```
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
  <apiVersion>57.0</apiVersion>
  …
  <targets>
    <target>lightning__VoiceExtension</target>
  </targets>
  <capabilities>
    <capability>lightning__ServiceCloudVoiceToolkitApi</capability>
  </capabilities>
</LightningComponentBundle>
```

```apex
<aura:component implements="opencti:availableForVoiceExtension,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome" access="global">
  …
</aura:component>
```

```apex
<aura:component implements="flexipage:availableForRecordHome,force:hasRecordId" access="global">
  <!-- subscribe to service cloud voice toolkit api -->
  <force:serviceCloudVoiceToolkitApi aura:id="voiceToolkitApi"/>
  <aura:handler name="init" value="{!this}" action="{!c.onInit}"/>
  <aura:handler name="destroy" value="{!this}" action="{!c.onDestroy}"/>
</aura:component>
```

## Related Topics

- Service Cloud Voice Aura Toolkit API (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_aura.htm)
