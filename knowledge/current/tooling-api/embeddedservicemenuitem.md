---
title: "EmbeddedServiceMenuItem"
domain: tooling-api
topic: embeddedservicemenuitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:46:37.730Z
keywords: [EmbeddedServiceMenuItem, Supported, SOAP, API, Calls, Special, Access, Rules, Fields, Usage]
---

# EmbeddedServiceMenuItem

# EmbeddedServiceMenuItem

Represents the information needed to configure a Channel Menu item. This object is available in API version 47.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

This type is available only if Salesforce Experiences and Salesforce Sites are enabled in your org. To access this type, you need the Customize Application user permission.

## Fields

| Field | Details |
| --- | --- |
| ChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID of an EmbeddedServiceConfig (the Embedded Service deployment) if ChannelType is one of the following. Otherwise, this field is null.EmbeddedServiceConfigMessagingChannel |
| ChannelType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe channel the customer uses to contact your business. The possible values are:CustomURLEmbeddedServiceConfigMessagingChannelPhone |
| CustomUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe custom URL of the menu item if ChannelType is CustomURL. Otherwise, this field is null. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order that the menu items are displayed in the UI. Only positive values are supported. |
| EmbeddedServiceMenuId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The unique ID of the parent record EmbeddedServiceMenuSettings. |
| IconUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL of the icon used for the menu item. |
| IsDisplayedOnPageLoad | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the menu item is dynamically displayed (true) or hidden (false) during runtime. The default value is false. |
| ItemName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name used on the Setup for admins to identify the Channel Menu item. Conforms to the same properties as a developer name. |
| OsOptionsHideInIOS | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether to hide the menu item on iOS platforms (true) or not (false). |
| OsOptionsHideInLinuxOS | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether to hide the menu item on Linux platforms (true) or not (false). |
| OsOptionsHideInMacOS | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether to hide the menu item on macOS platforms (true) or not (false). |
| OsOptionsHideInOtherOS | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether to hide the menu item on any other platforms not mentioned here (true) or not (false). |
| OsOptionsHideInWindowsOS | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether to hide the menu item on Windows platforms (true) or not (false). |
| PhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of menu items with ChannelType value Phone. Otherwise, the value is null. |
| ShouldOpenUrlInSameTab | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether a URL is opened in the same tab (true) or not (false). This field only applies for menu items with ChannelType value CustomURL. |

## Usage

The EmbeddedServiceMenuItem object provides configuration information for a Channel Menu. A channel menu lists the ways in which customers can contact your business. A channel menu deployment is tied to a [EmbeddedServiceMenuSettings](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_embeddedservicemenusettings.htm "Represents a setup node for creating a channel menu deployment. Channel menus list the ways in which customers can contact your business. This object is available in API version 47.0 and later.") record, which can have one or more EmbeddedServiceMenuItem objects associated with it.