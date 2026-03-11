---
title: "ConversationVendorInfo"
domain: metadata-api
topic: conversationvendorinfo
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.389Z
keywords: [ConversationVendorInfo, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ConversationVendorInfo

# ConversationVendorInfo

Represents the connection between the partner vendor system and the Service Cloud feature. For example, for Service Cloud Voice, this type contains information about the partner telephony system or Contact Center as a Service (CCaaS) system. For Bring Your Own Channel for Messaging or Bring Your Own Channel for CCaaS, this type contains information about the partner messaging system or CCaaS system.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ConversationVendorInfo components have the suffix .ConversationVendorInformation and are stored in the ConversationVendorInformation folder.

## Version

ConversationVendorInfo components are available in API version 52.0 and later.

## Special Access Rules

This type requires an add-on license for Service Cloud Voice for Partner Telephony or Digital Engagement.

## Fields

The fields in the ConversationVendorInfo type apply to all Service Cloud features unless otherwise stated in the field description. For example, if a field applies to just one Service Cloud Voice telephony model setup or is applied differently by different partner systems, this is stated in the field description.

| Field Name | Description |
| --- | --- |
| agentSSOSupported | Field TypebooleanDescriptionIf set to true, agents can single sign-on (SSO) into their contact center using Salesforce as the identity provider (IdP). Behind the scenes, Salesforce is used as the SAML IdP in the Single Sign-On connected app for the contact center. If set to false, an IdP other than Salesforce is used or an IdP isn’t used at all. The default value is false.If this value is set to false and you want to use Salesforce as the IdP for your contact center, set this value and the namedCredentialSupported value to true and configure the service_cloud_voice.PartnerSSO interface in your Apex integration class.Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| awsAccountKey | Field TypestringDescriptionThe 12-digit AWS subaccount ID that’s automatically provisioned for you when Service Cloud Voice was turned on. Available in API version 55.0 and later.Applies to the following implementation:Service Cloud Voice with Amazon Connect |
| awsRootEmail | Field TypestringDescriptionThe email address used by Salesforce to create the root user for the provisioned AWS subaccount when Service Cloud Voice was turned on. Available in API version 55.0 and later.Applies to the following implementation:Service Cloud Voice with Amazon Connect |
| awsTenantVersion | Field TypedoubleDescriptionThe version number of the SVCTenantStack AWS CloudFormation stack that’s deployed. The stack is deployed in AWS region "us-east-1". Available in API version 55.0 and later.Applies to the following implementation:Service Cloud Voice with Amazon Connect |
| bridgeComponent | Field TypestringDescriptionThe Lightning component used to communicate between the telephony or messaging system and other Lightning components.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| clientAuthMode | Field TypeClientAuthMode (enumeration of type string)DescriptionThe client authentication mode.Values are:CustomMixedSSOApplies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| connectorUrl | Field TypestringDescriptionThe URL that hosts your Service Cloud Voice or Bring Your Own Channel for CCaaS connector. This value could be a Visualforce page or a public URL.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| customConfig | Field TypestringDescriptionThe foreign key to the CustomEntityDefinition, which contains partner-specific custom settings. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| customIcon | Field TypestringDescriptionID of the static resource used to identify the contact center integration, such as a Contact Center as a Service (CCaaS) provider logo. The static resource must be in SVG format. This field is optional. Available in API version 62.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyBring Your Own Channel for CCaaS |
| customLoginUrl | Field TypestringDescriptionThe URL that hosts your telephony system or CCaaS system login page.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| developerName | Field TypestringDescriptionThe unique name of the type in the API. |
| einsteinConversationInsightsSupported | Field TypebooleanDescriptionIf set to true, Einstein Conversation Insights is turned on. The default value is false. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| integrationClass | Field TypestringDescriptionThe foreign key to the partner Apex class implementing supported interfaces. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| integrationClassName | Field TypestringDescriptionDeprecated in API version 53.0. Don't set this field. Instead, use integrationClass.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| intelligenceSupported | Field TypebooleanDescriptionIf set to true, Salesforce ingests real-time signals sent from a partner telephony system. If set to false, Salesforce won't ingest real-time intelligence signals from a partner telephony system. The default value is false. Available in API version 59.0 and later.Applies to the following implementations:Service Cloud Voice with Partner Telephony |
| isTaxCompliant | Field TypebooleanDescriptionIndicates whether the Amazon tax settings for the AWS subaccount provisioned for Service Cloud Voice have been confirmed (true). The default value is false. Available in API version 55.0 and later.Applies to the following implementation:Service Cloud Voice with Amazon Connect |
| keyProvisioningSupported | Field TypebooleanDescriptionIf set to true, key provisioning and renewal are automated. The default value is false. Available in API version 54.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| masterLabel | Field TypestringDescriptionThe partner vendor's display name as it appears in the UI. This name appears in several places in the UI, so include the partner vendor name for easy identification. For Service Cloud Voice, this label also represents the telephony provider name in the contact center record.For Service Cloud Voice with Amazon Connect, this field is always set to Service Cloud Voice. |
| namedCredential | Field TypestringDescriptionA sample-named credential that can be used for Apex callouts to the partner system. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| namedCredentialSupported | Field TypebooleanDescriptionA sample-named credential that can be used for Apex callouts to the partner system. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| partnerContactCenterListSupported | Field TypebooleanDescriptionIf set to true, enables the customer to select one contact center from a list of multiple contact centers to connect with Salesforce. The default value is false. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| partnerPhoneNumbersSupported | Field TypebooleanDescriptionIf set to true, displays a list of phone numbers used to create contact center channels. The default value is false. Available in API version 54.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| partnerTransferDestinationsSupported | Field TypebooleanDescriptionIf set to true, allows Salesforce to fetch contact center queues so that Salesforce and contact center queues can be mapped. The default value is false. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| queueManagementSupported | Field TypebooleanDescriptionIf set to true, support queue management. The default value is false. Available in API version 56.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| serverAuthMode | Field TypeServerAuthMode (enumeration of type string)DescriptionDeprecated in API 53.0. Server authentication mode. Set this value to None.Values are:NoneOAuthApplies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| telephonySettingsComponent | Field TypestringDescriptionThe name of the Lightning Web Component (LWC) that is used to display additional agent settings in the Omni-Channel widget. This value is in the format mynamespace:componentName, where mynamespace is the namespace associated with the Service Cloud Voice package that was created, and componentName is the FQDN of the Lightning component.Available in API version 54.0 and later.Applies to the following implementation:Service Cloud Voice with Partner Telephony |
| unifiedRoutingSupported (Beta) | Field TypebooleanDescriptionIndicates whether unified routing is supported (true) or not supported (false) for voice calls in voice channels. The default value is false. Once this value is set to true, it can’t be changed to false.Available in API version 63.0 and later.Applies to the following implementation:Service Cloud Voice with Partner Telephony |
| universalCallRecordingAccessSupported | Field TypebooleanDescriptionIf set to true, Universal Call Recording Access is turned on. The default value is false.If this value is set to false and you want to turn on Universal Call Recording, set this value to true and configure the service_cloud_voice.RecordingMediaProvider interface in your Apex integration class.Available in API version 54.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| userSyncingSupported | Field TypebooleanDescriptionIf set to true, supports automated user syncing whenever a user is added to or removed from a contact center. The default value is false. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| vendorType | Field TypeConversationVendorType (enumeration of type string)DescriptionThe Service Cloud feature the partner vendor supports.Possible values are:Amazon_Connect — For Service Cloud Voice with Amazon Connect.BringYourOwnChannelPartner — For Bring Your Own Channel for Messaging. Available in API version 60.0 and later.BringYourOwnContactCenter — For Bring Your Own Channel for Contact Center as a Service (CCaaS). Available in API version 60.0 and later.ServiceCloudVoicePartner — For Service Cloud Voice with Partner Telephony or Service Cloud Voice with Partner Telephony from Amazon Connect.Available in API version 53.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a ConversationVendorInfo component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").