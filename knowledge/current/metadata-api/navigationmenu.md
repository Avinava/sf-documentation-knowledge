---
title: "NavigationMenu"
domain: metadata-api
topic: navigationmenu
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.351Z
estimatedTokens: 1332
keywords: [NavigationMenu, Represents, navigation, menu, Experience, Builder, site., consists, items, users, click, parts, replaces, NavigationLinkSet, subtype, Network., API, version, 47.0, later.]
---

# NavigationMenu

> Represents the navigation menu in an Experience Builder site. A navigation menu
    consists of items that users can click to go to other parts of the site. This type replaces the
    NavigationLinkSet subtype on Network. NavigationMenu is available in API version 47.0 and later.
      This type extends the Metadata metadata type and inherits its
                        fullName field.

# NavigationMenu

Represents the navigation menu in an Experience Builder site. A navigation menu consists of items that users can click to go to other parts of the site. This type replaces the NavigationLinkSet subtype on Network. NavigationMenu is available in API version 47.0 and later. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

The Help Center and LWR templates (Build Your Own and Microsites) don’t include generic record pages. So if you create an object or global action type menu item that links to a Salesforce object, make sure that you also create the corresponding object pages. If you don't create the associated object pages, end users won't see anything if they click on the menu item.

## File Suffix and Directory Location

NavigationMenu components have the suffix .navigationMenu and are stored in the navigationMenus folder.

## Version

NavigationMenu components are available in API version 47.0 and later.

## Special Access Rules

The MultipleNavigationMenu permission is required.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| container | string | The name of the navigation menu container. |
| containerType | string | The container type. The options are Network or CommunityTemplateDefinition. |
| label | string | The navigation menu label as it appears in the Experience Builder UI. |
| navigationMenuItem | NavigationMenuItem[] | A list of menu items in a NavigationMenu. Use this object to create, delete, or update menu items in your site’s navigation menu. |

## NavigationMenuItem

Represents a single menu item in the NavigationLinkSet subtype on Network (API version 37.0 to 46.0) or in the NavigationMenu type (API version 47.0 and later). Use this object to create, delete, or update menu items in your site’s navigation menu.

| Field | Field Type | Description |
| --- | --- | --- |
| defaultListViewId | string | If the value of the type field is SalesforceObject, the value is the ID of the default list view for the object. |
| label | string | Required. The text that appears in the navigation menu for this item. |
| menuItemBranding | NavigationMenuItemBranding | Branding for the navigation menu item. Available in API version 47.0 and later. |
| position | int | Required. The location of the menu item in the navigation menu. |
| publiclyAvailable | boolean | When set to true, gives access to guest users. |
| subMenu | NavigationSubMenu | A list of child menu items. This field is available in API 39.0 and later. |
| target | string | Required if type is ExternalLink, InternalLink, or SalesforceObject. If type is ExternalLink or InternalLink, the target is the URL that the link points to. For ExternalLink, your entry looks like this: https://salesforce.com. For InternalLink, use a relative URL, such as /contactsupport. If type is MenuLabel or NavigationalTopic, target isn’t used. |
| targetPreference | string | Backed by a picklist that includes preferences for the target field. Valid values are:NoneOpenInExternalTab—Used for external links to determine whether to open in an external tab. |
| type | string | Required. The type of navigation menu item. Valid values are:SalesforceObject—Available objects include accounts, cases, contacts, and custom objects.ExternalLink—Links to a URL outside of your site. For example, https://salesforce.com.InternalLink—Links to a relative URL inside your site. For example, /contactsupport.MenuLabel—A parent heading for your navigation menu. See NavigationSubMenu for how to nest items underneath the menu label. This value is available in API 39.0 and later.NavigationalTopic—A dropdown list with links to the navigational topics in your site.You can’t nest other items of type MenuLabel or NavigationalTopic under MenuLabel. |

## NavigationMenuItemBranding

Branding for a menu item.

| Field | Field Type | Description |
| --- | --- | --- |
| tileImage | string | Name of the ContentAsset to use for the navigation menu item. |

## NavigationSubMenu

A list of child menu items. Only NavigationMenuItem items of type MenuLabel can have items in a NavigationSubMenu. Available in API 39.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| navigationMenuItem | NavigationMenuItem[] | A list of menu items in a NavigationSubMenu. Use navigationMenuItem to create, delete, or update child items under a parent heading. |

## Declarative Metadata Sample Definition

The following is an example of a NavigationMenu component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<NavigationMenu xmlns="http://soap.sforce.com/2006/04/metadata">
    <container>Service</container>
    <containerType>Network</containerType>
    <label>Test Navigation</label>
    <navigationMenuItem>
        <label>Accounts</label>
        <position>1</position>
        <publiclyAvailable>false</publiclyAvailable>
        <target>Account</target>
        <type>SalesforceObject</type>
    </navigationMenuItem>
    <navigationMenuItem>
        <label>External Link</label>
        <menuItemBranding>
            <tileImage>google_image</tileImage> 
        </menuItemBranding>
        <position>2</position>
        <publiclyAvailable>false</publiclyAvailable>
        <target>http://google.com</target>
        <targetPreference>OpenExternalLinkInSameTab</targetPreference>
        <type>ExternalLink</type>
    </navigationMenuItem>
    <navigationMenuItem>
        <label>All Objects</label>
        <position>3</position>
        <publiclyAvailable>false</publiclyAvailable>
        <subMenu>
            <navigationMenuItem>
                <label>Leads</label>
                <position>0</position>
                <publiclyAvailable>false</publiclyAvailable>
                <target>Account</target>
                <type>SalesforceObject</type>
            </navigationMenuItem>
        </subMenu>
        <type>MenuLabel</type>
    </navigationMenuItem>
</NavigationMenu>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>*</members>
    <name>NavigationMenu</name>
  </types>
  <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- NavigationSubMenu (atlas.en-us.api_meta.meta/api_meta/meta_network.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
