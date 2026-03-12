---
title: "CustomTab"
domain: metadata-api
topic: customtab
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:42.447Z
estimatedTokens: 1911
keywords: [CustomTab, custom, tab, tabs, let, display, data, web, content, Salesforce, add, app, Classic, appears, Lightning]
---

# CustomTab

> Represents a custom tab. Custom tabs let you display
            custom object data or other web content in Salesforce. When you add a custom tab to an
            app in Salesforce Classic, it appears as a tab. When you add a custom tab to an app in
            Lightning Experience, it appears as an item in the app’s navigation bar and in the App
            Launcher. When a tab displays a custom object, the tab name is the same as the custom
            object name. For page, s-control, or URL tabs, the name is arbitrary.

# CustomTab

Represents a custom tab. Custom tabs let you display custom object data or other web content in Salesforce. When you add a custom tab to an app in Salesforce Classic, it appears as a tab. When you add a custom tab to an app in Lightning Experience, it appears as an item in the app’s navigation bar and in the App Launcher. When a tab displays a custom object, the tab name is the same as the custom object name. For page, s-control, or URL tabs, the name is arbitrary.

For more information, see Custom Tabs in Salesforce Help. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

The file suffix is .tab. There’s one file for each tab, stored in the tabs folder in the corresponding package directory.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Retrieving a component of this metadata type in a project makes the component appear in any Profile and PermissionSet components that are retrieved in the same package.

## Version

Tabs are available in API version 10.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionOverrides | ActionOverride[] | A list of the action overrides that are assigned to the tab. Only one override is allowed per formFactor for a given tab.This field is available in API version 37.0 and later. |
| auraComponent | string | The name of the Aura component to display in this tab.Only one of these fields can have a value set:auraComponentcustomObjectflexiPagelwcComponentpagescontrolurl |
| customObject | boolean | Indicates whether this tab is for a custom object (true) or not (false). If set to true, the name of the tab matches the name of the custom object.Only one of these fields can have a value set:auraComponentcustomObjectflexiPagelwcComponentpagescontrolurl |
| description | string | The optional description text for the tab. |
| flexiPage | string | The name of the Lightning page to display in this tab.Only one of these fields can have a value set:auraComponentcustomObjectflexiPagelwcComponentpagescontrolurl |
| frameHeight | int | The height, in pixels of the tab frame. Required for s-control and page tabs. |
| fullName | string | The name of the tab. The value of this field depends on the type of tab, and the API version.For custom object tabs, the fullName is the developer-assigned name of the custom object (MyCustomObject__c, for example). For custom object tabs, this name must be the same as the custom object name, and customObject must be set to true.For web tabs, the fullName is the developer-assigned name of the tab (MyWebTab, for example).The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| hasSidebar | boolean | Indicates if the tab displays the sidebar panel. |
| icon | string | The optional reference to the image document for the tab if the tab isn’t using one of the standard tab styles. This field is available in API version 14.0. |
| label | string | The label of the tab, for web tabs only. |
| lwcComponent | string | The name of the Lightning web component to display in this tab.Only one of these fields can have a value set:auraComponentcustomObjectflexiPagelwcComponentpagescontrolurl |
| motif | string | Required. The tab style for the color scheme and icon for the custom tab.For example, “'Custom70: Handsaw,” is the handsaw icon.Valid Values for this field are: Custom1:Heart, Custom2:Fan, Custom3:Sun, Custom4:Hexagon, Custom5:Leaf, Custom6:Triangle, Custom7:Square, Custom8:Diamond, Custom9:Lightning, Custom10:Moon, Custom11:Star, Custom12:Circle, Custom13:Box, Custom14:Hands, Custom15:People, Custom16:Bank, Custom17:Sack, Custom18:Form, Custom19:Wrench, Custom20:Airplane, Custom21:Computer, Custom22:Telephone, Custom23:Envelope, Custom24:Building, Custom25:Alarmclock, Custom26:Flag, Custom27:Laptop, Custom28:Cellphone, Custom29:PDA, Custom30:Radardish, Custom31:Car, Custom32:Factory, Custom33:Desk, Custom34:Insect, Custom35:Microphone, Custom36:Train, Custom37:Bridge, Custom38:Camera, Custom39:Telescope, Custom40:Creditcard, Custom41:Cash, Custom42:Treasurechest, Custom43:Jewel, Custom44:Hammer, Custom45:Ticket, Custom46:Stamp, Custom47:Knight, Custom48:Trophy, Custom49:CD/DVD, Custom50:Bigtop, Custom51:Apple, Custom52:Balls, Custom53:Bell, Custom54:Boat, Custom55:Books, Custom56:Bottle, Custom57:BuildingBlock, Custom58:Caduceus, Custom59:Can, Custom60:Umbrella, Custom61:Castle, Custom62:Chalkboard, Custom63:Chip, Custom64:Compass, Custom65:Cup, Custom66:Dice, Custom67:Gears, Custom68:Globe, Custom69:Guitar, Custom70:Handsaw, Custom71:Headset, Custom72:Helicopter, Custom73:HighwaySign, Custom74:HotAirBalloon, Custom75:IPPhone, Custom76:Keys, Custom77:Locked, Custom78:Map, Custom79:MeasuringTape, Custom80:Motorcycle, Custom81:MusicalNote, Custom82:Whistle, Custom83:Pencil, Custom84:Presenter, Custom85:RealEstateSign, Custom86:RedCross, Custom87:Safe, Custom88:Sailboat, Custom89:Saxophone, Custom90:Scales, Custom91:Shield, Custom92:Ship, Custom93:ShoppingCart, Custom94:Stethoscope, Custom95:Stopwatch, Custom96:StreetSign, Custom97:Thermometer, Custom98:Truck, Custom99:TVCRT, Custom100:TVWidescreen. |
| page | string | The name of the Visualforce page to display in this tab.Only one of these fields can have a value set:auraComponentcustomObjectflexiPagelwcComponentpagescontrolurl |
| scontrol | string | The name of the s-control to display in this tab.Only one of these fields can have a value set:auraComponentcustomObjectflexiPagelwcComponentpagescontrolurl |
| splashPageLink | string | The custom link used as the introductory splash page when users click the tab. References a HomePageComponent. |
| url | string | The URL for the external web-page to embed in this tab.Only one of these fields can have a value set:auraComponentcustomObjectflexiPagelwcComponentpagescontrolurl |
| urlEncodingKey | Encoding (enumeration of type string) | The default encoding setting is Unicode: UTF-8. Change it if you’re passing information to a URL that requires data in a different format. This option is available when the value URL is selected in the tab type. |

## Declarative Metadata Sample Definition

The following is the definition of a tab:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [CustomApplication](atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm "CustomApplication represents a custom or standard application. In API version 29.0 and earlier, CustomApplication represents only a custom application. An application is a list of tab references, with a description and a logo. This type extends the Metadata metadata type and inherits its fullName field.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomTab xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Myriad Publishing</description>
    <frameHeight>600</frameHeight>
    <motif>Custom53: Bell</motif>
    <url>https://www.example.com</url>
    <urlEncodingKey>UTF-8</urlEncodingKey>
</CustomTab>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- ActionOverride (atlas.en-us.api_meta.meta/api_meta/actionoverride.htm)
- formFactor (atlas.en-us.api_meta.meta/api_meta/actionoverride.htm)
- HomePageComponent (atlas.en-us.api_meta.meta/api_meta/meta_homepagecomponent.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- CustomApplication (atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm)
