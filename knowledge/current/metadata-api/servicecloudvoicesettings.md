---
title: "ServiceCloudVoiceSettings"
domain: metadata-api
topic: servicecloudvoicesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.752Z
estimatedTokens: 1423
keywords: [ServiceCloudVoiceSettings, Represents, organization’s, Service, Cloud, Voice, settings., File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition]
---

# ServiceCloudVoiceSettings

> Represents an organization’s Service Cloud Voice settings.

# ServiceCloudVoiceSettings

Represents an organization’s Service Cloud Voice settings.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

ServiceCloudVoiceSettings values are stored in the ServiceCloudVoice.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

ServiceCloudVoiceSettings is available in API versions 52.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| disableSCVTaskCreationForHVS | boolean | Indicates whether to prevent the Sales Engagement automatic task creation feature from generating tasks from voice calls except click-to-dial calls initiated from Sales Engagements, To Do List, and Work Queue. The default value is false. Available in API version 61.0 and later. This field is optional. |
| enableAmazonQueueManagement | boolean | Indicates whether to enable the Amazon Connect queue management integration for Service Cloud Voice. When enabled, the system automatically synchronizes contact center queues across Salesforce and Amazon Connect, including voice groups and users. The default value is false. Available in API version 55.0 and later. This field is optional. |
| enableDefaultChannelForSCV | boolean | Indicates whether Service Cloud Voice uses the default phone channel for all end user identification. The default value is false. Available in API version 53.0 and later. This field is optional. |
| enableDigitalVoiceWhatsapp | boolean | Reserved for internal use. |
| enableEndUserForSCV | boolean | Indicates whether Service Cloud Voice matches callers to end user records. The default value is false. Available in API version 53.0 and later. This field is optional. |
| enableOmniCapacityForSCV | boolean | Indicates whether to enable Omni-Channel capacity management for Service Cloud Voice. If enabled, Service Cloud Voice Agentwork honors Omni-Channel capacity. The default value is false. Available in API version 54.0 and later. This field is optional. |
| enablePhoneNumberMaskingForSCV | boolean | Indicates whether to enable phone number masking functionality in Service Could Voice to protect sensitive data by redacting inbound and outbound phone numbers. When enabled, phone numbers are masked in Omni-Channel views, call recordings, and call transcripts. Masking doesn't apply to numbers used in rep-to-rep calls managed by partner telephony providers. The default value is false. Available in API version 61.0 and later. This field is optional. |
| enablePTQueueManagement | boolean | Indicates whether to enable queue management for Service Cloud Voice with Partner Telephony. When enabled, the system automatically synchronizes contact center queues across Salesforce and partner telephony services, including groups and users. The default value is false. Available in API version 56.0 and later. This field is optional. |
| enableRZoneCloudVoiceOptIn | boolean | Indicates whether you agree to the terms of using Service Cloud Voice with Amazon Connect in a Salesforce Government Cloud environment. The default value is false. This field is optional.Amazon Connect is a third-party Amazon service that sits outside the Salesforce Government Cloud FedRAMP environment. Amazon Connect is a separate service offered by Amazon and not a FedRAMP authorized service. Therefore, Amazon Connect’s processing environment falls outside the Government Cloud FedRAMP authorization boundary. To learn more, see Amazon Connect. |
| enableSCVASAContextLinkingEnabled | boolean | Indicates whether to link related voice calls, specifically the partner telephony/rep call and the voice-enabled agent (PSTN Voice) call. Available in API version 65.0 and later. This field is optional. |
| enableSCVBYOT |  | Indicates whether to enable Service Cloud Voice with Partner Telephony. The default value is false. This field is optional. For API version 52.0 and later, we recommend using enableSCVExternalTelephony instead. |
| enableSCVExternalTelephony | boolean | Indicates whether to enable a third-party telephony service to work with Service Cloud Voice with Partner Telephony. The default value is false. This field is optional. |
| enableSCVOpenVCAsNewTabHVS | boolean | Indicates whether to open the Service Cloud Voice Console in a new tab for Sales Engagement scenarios. The default value is false. Available in API version 62.0 and later. This field is optional. |
| enableSCVSupportBannerDisplayed | boolean | Indicates whether to display the Service Cloud Voice support banner. The default value is false. Available in API version 59.0 and later. This field is optional. |
| enableServiceCloudVoice | boolean | Indicates whether to enable Service Cloud Voice with Amazon Connect. The default value is false. This field is optional. |

## Declarative Metadata Sample Definition

The following is an example of a ServiceCloudVoice.settings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ServiceCloudVoiceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableServiceCloudVoice>true</enableServiceCloudVoice>
</ServiceCloudVoiceSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>ServiceCloudVoice</members>
        <name>Settings</name>
    </types>
    <version>52.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
