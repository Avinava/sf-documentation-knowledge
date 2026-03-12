---
title: "EmbeddedServiceMenuSettings"
domain: metadata-api
topic: embeddedservicemenusettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.894Z
estimatedTokens: 1576
keywords: [EmbeddedServiceMenuSettings, setup, node, creating, channel, menu, deployment, menus, ways, customers, contact, business, extends, Metadata, inherits]
---

# EmbeddedServiceMenuSettings

> Represents a setup node for creating a
      channel menu deployment. Channel menus list the ways in which customers can contact your
      business. This type extends the Metadata metadata type and inherits its 
    fullName field.

# EmbeddedServiceMenuSettings

Represents a setup node for creating a channel menu deployment. Channel menus list the ways in which customers can contact your business. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

EmbeddedServiceMenuSettings components are stored in the developer\_name.EmbeddedServiceMenuSettings folder.

## Version

EmbeddedServiceMenuSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| branding | string | The developer name of the associated BrandingSet. |
| embeddedServiceCustomLabels | EmbeddedServiceCustomLabel[] | Represents a customized label that appears in the embedded component for a particular channel menu deployment. |
| embeddedServiceCustomizations | EmbeddedServiceCustomization[] | The customizations used in this Embedded Service deployment. Each customization is associated with a static resource. Available in API version 50.0 and later. |
| embeddedServiceMenuItems | EmbeddedServiceMenuItem[] | Represents a channel menu item that lists a way in which customers can contact your business. |
| isEnabled | boolean | If true (default), the deployment is enabled. If false, the deployment is disabled. |
| masterLabel | string | Required. The name of the channel menu deployment. |
| site | string | Required. The name of the Experience site or website connected to this channel menu deployment. |

## EmbeddedServiceCustomLabel

Represents the custom labels used in your channel menu deployment.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customLabel | string | The customized label that appears in the channel menu. |
| feature | EmbeddedServiceFeature (enumeration of type string) | The feature using the custom label. For channel menu deployments, the value is ChannelMenu. |
| labelKey | EmbeddedServiceLabelKey (enumeration of type string) | The type of label for this embedded component. The value corresponds to the label within a label group (substate of chat state or page type). |

## EmbeddedServiceCustomization

Returns the customization associated with the Embedded Service feature. Available in API version 50.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customizationName | string | Required. The name of the customization applied to the embedded service. This name can contain only underscores and alphanumeric characters and must be unique in an EmbeddedServiceConfig setup. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| description | string | A description of the customization. |
| embeddedServiceResources | EmbeddedServiceResource[] | Required. The reference to the static resource that contains the javascript file of the customization. |

## EmbeddedServiceResource

Returns the static resource associated with the Embedded Service Chat feature customization. Available in API version 50.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| resource | string | Required. The ID of the static resource that contains the javascript file of the customization. |
| resourceType | EmbeddedServiceResourceType (enumeration of type string) | Required. The embedded service feature to customize. Only the Chat feature is supported. Valid values are:ChatInvitation |

## EmbeddedServiceMenuItem

Represents an item in a channel menu.

| Field Name | Field Type | Description |
| --- | --- | --- |
| channel | string | The ID of the channel type. If channelType is Phone or CustomURL, this field is null. |
| channelType | EmbeddedServiceChannelType (enumeration of type string) | The type of communication channel. Values are:EmbeddedMessagingEmbeddedServiceConfigMessagingChannelPhoneCustomURL |
| customUrl | string | A custom URL that appears in the menu. The shouldOpenUrlInSameTab field determines where the URL opens. |
| displayOrder | int | The item’s order in the menu, such as 1 or 2. |
| embeddedServiceCustomLabels | EmbeddedServiceCustomLabel[] | Represents the custom labels used in your channel menu item. |
| iconUrl | string | The icon URL for the menu item. Icons can be used only for phone, SMS, custom URL, and chat menu items. |
| isDisplayedOnPageLoad | boolean | If true, the menu item is displayed on page load. Available in API version 49.0 and later. |
| itemName | string | A unique custom name for the menu item, which is visible in the user interface. |
| osOptionsHideInIOS | boolean | If true, the menu item is hidden in iOS. |
| osOptionsHideInLinuxOS | boolean | If true, the menu item is hidden in Linux operating system. |
| osOptionsHideInMacOS | boolean | If true, the menu item is hidden in Mac operating system. |
| osOptionsHideInOtherOS | boolean | If true, the menu item is hidden in any operating system other than iOS, Linux, Mac, and Windows. |
| osOptionsHideInWindowsOS | boolean | If true, the menu item is hidden in Windows operating system. |
| phoneNumber | string | The phone number for menu items whose channelType is Phone. |
| shouldOpenUrlInSameTab | boolean | If the menu item’s channelType is CustomURL, this field indicates whether the link opens in the same tab (true) or a new tab (false). |

## Declarative Metadata Sample Definition

The following is an example of an EmbeddedServiceMenuSettings component.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EmbeddedServiceMenuSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <embeddedServiceCustomLabels>
        <customLabel>CM_Container_Header_Primary_Greeting_3MsRM0000004CB5_6181150</customLabel>
        <labelKey>CM_Container_Header_Primary_Greeting</labelKey>
    </embeddedServiceCustomLabels>
    <embeddedServiceCustomLabels>
        <customLabel>CM_Container_Header_Secondary_Greeting_3MsRM0000004CB5_4637097</customLabel>
        <labelKey>CM_Container_Header_Secondary_Greeting</labelKey>
    </embeddedServiceCustomLabels>
    <embeddedServiceMenuItems>
        <channel>Chat</channel>
        <channelType>EmbeddedServiceConfig</channelType>
        <displayOrder>1</displayOrder>
        <embeddedServiceCustomLabels>
            <customLabel>CM_Container_MenuItems_WebChatUnavailable_3miRM0000004CuZ_8003848</customLabel>
            <labelKey>CM_Container_MenuItems_WebChatUnavailable</labelKey>
        </embeddedServiceCustomLabels>
        <embeddedServiceCustomLabels>
            <customLabel>CM_Container_MenuItems_WebChatAvailable_3miRM0000004CuZ_5823055</customLabel>
            <labelKey>CM_Container_MenuItems_WebChatAvailable</labelKey>
        </embeddedServiceCustomLabels>
        <itemName>Chat1</itemName>
        <osOptionsHideInIOS>false</osOptionsHideInIOS>
        <osOptionsHideInLinuxOS>true</osOptionsHideInLinuxOS>
        <osOptionsHideInMacOS>false</osOptionsHideInMacOS>
        <osOptionsHideInOtherOS>false</osOptionsHideInOtherOS>
        <osOptionsHideInWindowsOS>true</osOptionsHideInWindowsOS>
        <shouldOpenUrlInSameTab>false</shouldOpenUrlInSameTab>
    </embeddedServiceMenuItems>
    <embeddedServiceMenuItems>
        <channelType>Phone</channelType>
        <displayOrder>2</displayOrder>
        <itemName>Phone1</itemName>
        <osOptionsHideInIOS>true</osOptionsHideInIOS>
        <osOptionsHideInLinuxOS>false</osOptionsHideInLinuxOS>
        <osOptionsHideInMacOS>true</osOptionsHideInMacOS>
        <osOptionsHideInOtherOS>false</osOptionsHideInOtherOS>
        <osOptionsHideInWindowsOS>false</osOptionsHideInWindowsOS>
        <phoneNumber>1234567890</phoneNumber>
        <shouldOpenUrlInSameTab>false</shouldOpenUrlInSameTab>
    </embeddedServiceMenuItems>
    <embeddedServiceMenuItems>
        <channelType>CustomURL</channelType>
        <customUrl>https://google.com</customUrl>
        <displayOrder>3</displayOrder>
        <itemName>url1</itemName>
        <osOptionsHideInIOS>false</osOptionsHideInIOS>
        <osOptionsHideInLinuxOS>false</osOptionsHideInLinuxOS>
        <osOptionsHideInMacOS>false</osOptionsHideInMacOS>
        <osOptionsHideInOtherOS>false</osOptionsHideInOtherOS>
        <osOptionsHideInWindowsOS>false</osOptionsHideInWindowsOS>
        <shouldOpenUrlInSameTab>false</shouldOpenUrlInSameTab>
    </embeddedServiceMenuItems>
    <isEnabled>true</isEnabled>
    <masterLabel>ChannelMenuSettings</masterLabel>
    <site>SnapInCommunity</site>
</EmbeddedServiceMenuSettings>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
