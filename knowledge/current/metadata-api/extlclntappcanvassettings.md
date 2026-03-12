---
title: "ExtlClntAppCanvasSettings"
domain: metadata-api
topic: extlclntappcanvassettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:39.698Z
estimatedTokens: 1002
keywords: [ExtlClntAppCanvasSettings, Represents, external, client, app’s, canvas, app, settings., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules, Fields, Declarative]
---

# ExtlClntAppCanvasSettings

> Represents an external client app’s canvas app
			settings.

# ExtlClntAppCanvasSettings

Represents an external client app’s canvas app settings.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppCanvasSettings components have the suffix .ecaCanvas and are stored in the extlClntAppCanvasSettings folder.

## Version

ExtlClntAppCanvasSettings components are available in API version 66.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| accessMethod | AccessMethod (enumeration of type string) | Required. Indicates how the canvas app initiates the OAuth authentication flow. The valid values are:Get—OAuth authentication is used, and the user is prompted to allow the third-party application to access their information. When you use this access method, the canvas app must initiate the OAuth authentication flow.Post—OAuth authentication is used, but when the administrator installs the canvas app, they implicitly allow access for users. Therefore, the user isn’t prompted to allow the third party to access their user information. When you use this access method, the authentication is posted directly to the canvas app URL. |
| canvasLocationOptions | CanvasLocationOptions (enumeration of type string)[] | Indicates where the canvas app can appear to the user. The valid values are:Aura—The canvas app can appear in a custom Lightning component.ChatterFeed—The canvas app can appear as a Chatter feed item.MobileNav—The canvas app can appear in a mobile card in the Salesforce mobile app.None—The canvas app can appear only in the Canvas App Previewer.PageLayout—The canvas app can appear on a page layout. When viewed in the Salesforce mobile app, the canvas app appears in the record detail page.Publisher—The canvas app can appear as a global action.Visualforce—The canvas app can appear on a Visualforce page. |
| canvasOptions | CanvasOptions (enumeration of type string)[] | Indicates whether to hide the Share button and header in the publisher for your canvas app. Valid values are:HideShare—The Share button is hidden in the publisher for the related canvas app.HideHeader—The header is hidden in the publisher for the related canvas app. |
| canvasUrl | string | Required. The URL of the third-party app that’s exposed as a canvas app. |
| externalClientApplication | string | Required. The name of the associated external client app. |
| label | string | The name of the app. |
| lifeCycleHandler | string | The name of the lifecycle handler Apex class. |
| samlInitiationMethod | SamlInitiationMethod (enumeration of type string) | If you’re using SAML single sign-on (SSO), indicates which provider initiates the SSO flow.IdpInitiated—Identity provider initiated. Salesforce makes the initial request to start the SSO flow.SpInitiated—Service provider initiated. The canvas app starts the SSO flow after it’s invoked.None—The canvas app isn’t using SAML SSO. |

## Declarative Metadata Sample Definition

The following is an example of a ExtlClntAppCanvasSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExtlClntAppCanvasSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <accessMethod>Post</accessMethod>
    <canvasUrl>https://www.example.com</canvasUrl>
    <canvasLocationOptions>Aura</canvasLocationOptions>
    <canvasLocationOptions>Visualforce</canvasLocationOptions>
    <canvasOptions>HideHeader</canvasOptions>
    <label>My external client app settings for canvas</label>
    <samlInitiationMethod>None</samlInitiationMethod>
    <externalClientApplication>testCanvasECA</externalClientApplication>
</ExtlClntAppCanvasSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ExternalClientApplication</name>
    </types>
    <types>
        <members>*</members>
        <name>ExtlClntAppOauthSettings</name>
    </types>
    <types>
        <members>*</members>
        <name>ExtlClntAppCanvasSettings</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
