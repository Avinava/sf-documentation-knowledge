---
title: "Resource Handling"
domain: mobile-sdk
topic: resource-handling
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.044Z
estimatedTokens: 1328
keywords: [Layouts, Resource, Handling, Mobile, SDK, template, apps, resources, reside, XML, files, SalesforceSDK, res, project, folder, customize, making, changes]
---

> In Mobile SDK template
            apps, resources reside in XML files in the SalesforceSDK | res project folder. You can customize many of these resources by making
            changes to these files.

# Resource Handling

In Mobile SDK template apps, resources reside in XML files in the **SalesforceSDK** | **res** project folder. You can customize many of these resources by making changes to these files.

Resources in the /res folder are grouped into categories, including:

-   Drawables—Backgrounds, drop shadows, image resources such as PNG files
-   Layouts—Screen configuration for any visible component, such as the passcode screen
-   Menu—Screens for subviews of the login screen, such as the options menu
-   Values—Strings, colors, and dimensions that are used by Mobile SDK
-   XML—Non-visual configuration settings, such as login server preferences and runtime app restrictions for MDM

Drawable, layout, and value resources are subcategorized into folders that correspond to a variety of form factors. These categories handle different device types and screen resolutions. Each category is defined in its folder name, which allows the resource file name to remain the same for all versions. For example, if the developer provides various sizes of an icon named icon1.png, for example, the smart phone version goes in one folder, the low-end phone version goes in another folder, while the tablet icon goes into a third folder. In each folder, the file name is icon1.png. The folder names use the same root but with different suffixes.

The following table describes the folder names and suffixes.

| Folder name | Usage |
| --- | --- |
| drawable | Generic versions of drawable resources |
| drawable-hdpi | High resolution; for most smart phones |
| drawable-ldpi | Low resolution; for low-end feature phones |
| drawable-mdpi | Medium resolution; for low-end smart phones |
| drawable-xhdpi | Resources for extra high-density screens (~320dpi |
| drawable-xlarge | For tablet screens in landscape orientation |
| drawable-xlarge-port | For tablet screens in portrait orientation |
| drawable-xxhdpi-port | Resources for extra-extra high density screens (~480 dpi) |
| layout | Generic versions of layouts |
| menus | Add Connection dialog and login menu for phones |
| values | Generic styles and values |
| xml | General app configuration |

The compiler looks for a resource in the folder whose name matches the target device configuration. If the requested resource isn’t in the expected folder (for example, if the target device is a tablet, but the compiler can’t find the requested icon in the drawables-xlarge or drawables-xlarge-port folder) the compiler looks for the icon file in the generic drawable folder.

## Layouts

Layouts in the Mobile SDK describe the screen resources that all apps use. For example, layouts configure dialog boxes that handle logins and passcodes.

The name of an XML node in a layout indicates the type of control it describes. For example, the following TextView node from res/layout/sf\_\_passcode.xml describes a text edit control:

```

```

In this case, the TextView control is read-only. The style attribute references a global style defined elsewhere in the resources. Instead of specifying style attributes in place, you define styles defined in a central file, and then reference the attribute anywhere it’s needed. The value @style/SalesforceSDK.Passcode.Text.Title refers to an SDK-owned style defined in res/values/sf\_\_styles.xml. Here’s the style definition.

```

```

You can override any style attribute with a reference to one of your own styles. Rather than changing sf\_\_styles.xml, define your styles in a different file, such as xyzcorp\_\_styles.xml. Place your file in the res/values for generic device styles, or the res/values-xlarge folder for tablet devices.

## Values

The res/values and res/values-xlarge folders contain definitions of style components, such as dimens and colors, string resources, and custom styles. File names in this folder indicate the type of resource or style component.

| File name | Contains |
| --- | --- |
| sf__colors.xml |  |
| sf__attr.xml | Color and integer values used by the Passcode screen |
| sf__colors.xml | Colors referenced by Mobile SDK styles |
| sf__dimens.xml | Dimensions referenced by Mobile SDK styles |
| sf__strings.xml | Strings referenced by Mobile SDK styles; error messages can be overridden |
| sf__styles.xml | Visual styles used by the Mobile SDK |
| strings.xml | App-defined strings |

You can override the values in strings.xml. To provide your own values, create new files in the same folders using a file name prefix that reflects your own company or project. For example, if your developer prefix is XYZ, you can override sf\_\_styles.xml in a new file named XYZ\_\_styles.xml.

## Other Resources

Two other folders contain Mobile SDK resources.

-   res/menu defines menus used internally. If your app defines new menus, add them as resources here in new files.

-   res/xml includes one file that you must edit: servers.xml. In this file, change the default Production and Sandbox servers to the login servers for your org. The other files in this folder are for internal use. The authenticator.xml file configures the account authentication resource, and the config.xml file defines PhoneGap plug-ins for hybrid apps.


#### See Also

-   [Android Resources](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_android_architecture_resources.htm)

## Code Examples

```
<TextView
    android:id="@+id/sf__passcode_title"
    style="@style/SalesforceSDK.Passcode.Text.Title"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:textSize="17sp"
    android:textColor="@color/sf__passcode_text_color"
    android:textStyle="bold"/>
```

```
<style name="SalesforceSDK.Passcode.Text.Title">
    <item name="android:layout_marginTop">@dimen/sf__passcode_title_margin_top</item>
    <item name="android:layout_marginBottom">@dimen/sf__passcode_title_margin_bottom</item>
</style>
```

## Related Topics

- Android Resources (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_android_architecture_resources.htm)
