---
title: "AppMenuItem"
domain: object-reference
topic: appmenuitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:04.681Z
estimatedTokens: 2036
keywords: [AppMenuItem, organization’s, settings, items, app, menu, Launcher, Calls, Usage]
---

# AppMenuItem

> Represents the organization’s default settings for items in the app
			menu or App Launcher.

# AppMenuItem

Represents the organization’s default settings for items in the app menu or App Launcher.

## Supported Calls

delete(), describeSObjects(), query(), retrieve(), update()

## Fields

| Field | Details |
| --- | --- |
| ApplicationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID for the menu item. |
| CanvasAccessMethod | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe access method for the canvas app. Values can be:Get—OAuth WebflowPost—Signed Request |
| CanvasEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the app menu item is a canvas app (true) or not (false). The default setting is false. |
| CanvasOptions | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the options enabled for a canvas connected app. The options are:PersonalEnabled—The app is enabled as a canvas personal app.HideHeader—The publisher header, which contains the “What are you working on?” text, is hidden.HideShare—The publisher Share button is hidden.This field is available in API version 34.0 and later. |
| CanvasReferenceId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe canvas app unique identifier. |
| CanvasSelectedLocations | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe selected locations for the canvas app which define where the canvas app can appear in the user interface. For example:Chatter,ChatterFeed,Publisher,ServiceDesk |
| CanvasUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the canvas app. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA description of this menu item. |
| IconUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe icon for the menu item’s application. |
| InfoUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL for more information about the application. |
| IsAccessible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the current user is authorized to use the app. The default setting is false. |
| IsRegisteredDeviceOnly | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, indicates that the app is available to registered devices only. The default setting is false. Available in API version 49.0 and later. |
| IsUsingAdminAuthorization | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the app is pre-authorized for certain users by the administrator. The default setting is false. |
| IsVisible | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the app is visible to users of the organization. The default setting is false. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe app’s name. |
| LogoUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe logo for the menu item’s application. The default is the initials of the Label value. |
| MobileAppBinaryId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL for the Mobile App Binary file. |
| MobileAppInstallUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe location mobile users are directed to install the app. Available in API version 49.0 and later. |
| MobileAppInstalledDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that a user installed a mobile app. Available in API version 49.0 and later. |
| MobileAppInstalledVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version of the user’s installed mobile app. Available in API version 49.0 and later. |
| MobileAppVer | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version number of the mobile app. Available in API version 49.0 and later. |
| MobileDeviceType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe supported device form factors for the mobile app. Available in API version 49.0 and later. |
| MobileMinOsVer | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe minimum version required for the app. Available in API version 49.0 and later. |
| MobilePlatform | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe mobile platform for the app. Possible values include:android – Androidios – iOSAvailable in API version 49.0 and later. |
| MobileStartUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe location mobile users are directed to after they’ve authenticated. This field is used with connected apps and Experience Builder sites. For sites only, this location is a fully qualified domain name. For other apps, it’s a relative URL. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the item. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SortOrder | TypeintPropertiesFilter, Group, SortDescriptionThe index value that controls where this item appears in the menu. For example, a menu item with a sort order of 5 appears between items with sort order values of 3 and 9. |
| StartUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionFor a connected app, the location users are directed to after they’ve authenticated. Otherwise, the application’s default start page. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of application represented by this item. The types are:ConnectedApplicationNetworkServiceProviderTabSet |
| UserSortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe index value that represents where the user set this item in the menu (or App Launcher). For example, an item with a sort order value of 5 appears between items with sort order values of 3 and 9.This value is separate from SortOrder so you can create logic incorporating both values. For example, if you want the user-sorted items to appear first, followed by the organization order for the rest, use:SELECT ApplicationId,SortOrder,UserSortOrder FROM AppMenuItem order by userSortOrder NULLS LAST, sortOrder NULLS LAST |

## Usage

Use this read-only object to view an entry in the Lightning Platform app menu or the App Launcher. You can create a SOQL query to retrieve all items, even items the user does not see from the user interface.

There are many ways you can use AppMenuItem. Here are some examples:

-   Build your own App Launcher or app menu in Salesforce. Create a custom page showing all the apps you have access to and that lets you run them using single sign-on.
-   Build your own App Launcher or app menu on a tablet or mobile app. You can have your own app for launching applications on various mobile devices.
-   Build an app launcher into your company’s intranet. There’s no need to have it run on Salesforce because Salesforce APIs let you integrate with Salesforce programmatically and build an app launcher.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=object_reference)

#### Tip

To get metadata information about apps and their tabs, use the Apex Schema.describeTabs() method, REST API /vXX.X/tabs/ resource, or SOAP API describeTabs() call.
