---
title: "ConversationVendorInfo"
domain: tooling-api
topic: conversationvendorinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.957Z
estimatedTokens: 3595
keywords: [ConversationVendorInfo, setup, connects, partner, vendor, system, Service, Cloud, feature., example, Voice, contains, information, telephony, Contact, Center, CCaaS, system., Bring, Own]
---

# ConversationVendorInfo

> This setup object connects the partner vendor system to the Service Cloud
         feature. For example, for Service Cloud Voice, this object contains information about
      the partner telephony or Contact Center as a Service (CCaaS) partner system. For Bring Your
      Own Channel for Messaging this object contains information about the partner messaging system,
      and for Bring Your Own Channel for CCaaS, this object contains information about the CCaaS
      partner system. This object is available in API version 52.0 and later.

# ConversationVendorInfo

This setup object connects the partner vendor system to the Service Cloud feature. For example, for Service Cloud Voice, this object contains information about the partner telephony or Contact Center as a Service (CCaaS) partner system. For Bring Your Own Channel for Messaging this object contains information about the partner messaging system, and for Bring Your Own Channel for CCaaS, this object contains information about the CCaaS partner system. This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

This object requires an add-on license for Service Cloud Voice for Partner Telephony or Digital Engagement.

## Fields

The fields in the ConversationVendorInfo object apply to all Service Cloud features unless otherwise stated in the field description. For example, if a field applies to just one Service Cloud Voice telephony model setup or is applied differently by different partner systems, this is stated in the field description.

| Field | Details |
| --- | --- |
| BridgeComponent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Lightning component used to communicate between the telephony or messaging system and other Lightning components.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| CapabilitiesSupportsAgentSSO | TypebooleanPropertiesFilterDescriptionIf set to true, agents can single sign-on (SSO) into their contact center using Salesforce as the identity provider (IdP). Behind the scenes, Salesforce is used as the SAML IdP in the Single Sign-On connected app for the contact center. If set to false, an IdP other than Salesforce is used or an IdP isn’t used at all. The default value is false.If this value is set to false and you want to use Salesforce as the IdP for your contact center, set this value and the namedCredentialSupported value to true and configure the service_cloud_voice.PartnerSSO interface in your Apex integration class.Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| CapabilitiesSupportsEinsteinConversationInsights | TypebooleanPropertiesFilterDescriptionIf set to true, Einstein Conversation Insights is turned on. The default value is false. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| CapabilitiesSupportsIntelligence | TypebooleanPropertiesFilterDescriptionIf set to true, Salesforce ingests real-time signals sent from a partner telephony system. If set to false, Salesforce won't ingest real-time intelligence signals from a partner telephony system. The default value is false. Available in API version 59.0 and later.Applies to the following implementations:Service Cloud Voice with Partner Telephony |
| CapabilitiesSupportsKeyProvisioning | TypebooleanPropertiesFilterDescriptionIf set to true, key provisioning and renewal are automated. The default value is false. Available in API version 54.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| CapabilitiesSupportsNamedCredential | TypebooleanPropertiesFilterDescriptionA sample-named credential that can be used for Apex callouts to the partner system. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| CapabilitiesSupportsPartnerContactCenterList | TypebooleanPropertiesFilterDescriptionIf set to true, enables the customer to select one contact center from a list of multiple contact centers to connect with Salesforce. The default value is false. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| CapabilitiesSupportsPartnerPhoneNumbers | TypebooleanPropertiesFilterDescriptionIf set to true, displays a list of phone numbers used to create contact center channels. The default value is false. Available in API version 54.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| CapabilitiesSupportsPartnerTransferDestinations | TypebooleanPropertiesFilterDescriptionIf set to true, allows Salesforce to fetch contact center queues so that Salesforce and contact center queues can be mapped. The default value is false. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| CapabilitiesSupportsQueueManagement | TypebooleanPropertiesFilterDescriptionIf set to true, support queue management. The default value is false. Available in API version 56.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| CapabilitiesSupportsUnifiedRouting (Beta) | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether unified routing is supported (true) or not supported (false) for voice calls in voice channels. The default value is false. Once this value is set to true, it can’t be changed to false.Available in API version 63.0 and later.Applies to the following implementation:Service Cloud Voice with Partner Telephony |
| CapabilitiesSupportsUniversalCallRecordingAccess | TypebooleanPropertiesFilterDescriptionIf set to true, Universal Call Recording Access is turned on. The default value is false.If this value is set to false and you want to turn on Universal Call Recording, set this value to true and configure the service_cloud_voice.RecordingMediaProvider interface in your Apex integration class.Available in API version 54.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon Connect |
| CapabilitiesSupportsUserSyncing | TypebooleanPropertiesFilterDescriptionIf set to true, supports automated user syncing whenever a user is added to or removed from a contact center. The default value is false. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| ConnectorUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL that hosts your Service Cloud Voice or Bring Your Own Channel for CCaaS connector. This value could be a Visualforce page or a public URL.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| CustomConfigId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe foreign key to the CustomEntityDefinition, which contains partner-specific custom settings. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaSRelationship NameCustomConfigRefers ToCustomObject |
| CustomIconId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the static resource used to identify the contact center integration, such as a Contact Center as a Service (CCaaS) provider logo. The static resource must be in SVG format. This field is optional. Available in API version 62.0 and later.This field is a relationship field.Applies to the following implementations:Service Cloud Voice with Partner TelephonyBring Your Own Channel for CCaaSRelationship NameCustomIconRefers ToStaticResource |
| CustomLoginUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL that hosts your telephony system or CCaaS system login page.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated ConversationVendorInfo type in Metadata API. The full name can include a namespaceprefix. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IntegrationClassId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe foreign key to the partner Apex class implementing supported interfaces. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaSThis field is a relationship field.Relationship NameIntegrationClassRefers ToApexClass |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the master label (MasterLabel) in the user interface.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaS |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe partner vendor's display name as it appears in the UI. This name appears in several places in the UI, so include the partner vendor name for easy identification. For Service Cloud Voice, this label also represents the telephony provider name in the contact center record.For Service Cloud Voice with Amazon Connect, this field is always set to Service Cloud Voice. |
| Metadata | TypeConversationVendorInfoPropertiesCreate, Nillable, UpdateDescriptionThe ConversationVendorInfo's metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamedCredentialId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA sample-named credential that can be used for Apex callouts to the partner system. Available in API version 53.0 and later.Applies to the following implementations:Service Cloud Voice with Partner TelephonyService Cloud Voice with Partner Telephony from Amazon ConnectBring Your Own Channel for CCaaSThis field is a relationship field.Relationship NameNamedCredentialRefers ToNamedCredential |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| TelephonySettingsComponent | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the Lightning Web Component (LWC) that is used to display additional agent settings in the Omni-Channel widget. This value is in the format mynamespace:componentName, where mynamespace is the namespace associated with the Service Cloud Voice package that was created, and componentName is the FQDN of the Lightning component.Available in API version 54.0 and later.Applies to the following implementation:Service Cloud Voice with Partner Telephony |
| VendorType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe Service Cloud feature the partner vendor supports.Possible values are:Amazon_Connect — For Service Cloud Voice with Amazon Connect.BringYourOwnChannelPartner — For Bring Your Own Channel for Messaging. Available in API version 60.0 and later.BringYourOwnContactCenter — For Bring Your Own Channel for Contact Center as a Service (CCaaS). Available in API version 60.0 and later.ServiceCloudVoicePartner — For Service Cloud Voice with Partner Telephony or Service Cloud Voice with Partner Telephony from Amazon Connect.Available in API version 53.0 and later. |
