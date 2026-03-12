---
title: "IframeWhiteListUrlSettings"
domain: metadata-api
topic: iframewhitelisturlsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.946Z
estimatedTokens: 772
keywords: [IframeWhiteListUrlSettings, settings, trusted, external, domains, allow, frame, Visualforce, pages, surveys, extends, Metadata, inherits, fullName, File]
---

# IframeWhiteListUrlSettings

> Represents settings related to the list of
    trusted external domains that you allow to frame your Visualforce pages or surveys. This type 
    extends the Metadata metadata type and inherits its fullName field.

# IframeWhiteListUrlSettings

Represents settings related to the list of trusted external domains that you allow to frame your Visualforce pages or surveys. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

## File Suffix and Directory Location

IframeWhiteListUrlSettings values are stored in the IframeWhiteListUrlSettings.settings file in the iframeWhiteListUrlSettings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

[IframeWhiteListUrlSettings](#meta_iframewhitelisturlsettings "Represents settings related to the list of trusted external domains that you allow to frame your Visualforce pages or surveys. This type extends the Metadata metadata type and inherits its fullName field.") components are available in API version 49.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| iframeWhiteListUrls | IframeWhiteListUrl[] | The list of external domains that you allow to frame your Visualforce pages or surveys. |

## IframeWhiteListUrl

Represents the external domains that you allow to frame your Visualforce pages or surveys.

| Field Name | Field Type | Description |
| --- | --- | --- |
| context | IFrameWhitelistContext (enumeration of type string) | Required. The type of content in the iframe. Valid values are:LightningOut—Reserved for future use. Available in API version 60.0 and laterSurveysVisualforcePagesDisclosureAndComplianceHubConnector |
| url | string | The unique domain that is allowed to frame your Visualforce pages, surveys, or Disclosure and Compliance Hub Connector. Accepts these formats: example.com, *example.com, and https://example.com. |

## Declarative Metadata Sample Definition

The following is an example of a [IframeWhiteListUrlSettings](#meta_iframewhitelisturlsettings "Represents settings related to the list of trusted external domains that you allow to frame your Visualforce pages or surveys. This type extends the Metadata metadata type and inherits its fullName field.") component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IframeWhiteListUrlSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <iframeWhiteListUrl>
      <context>Surveys></context>
      <url>example1.com</url>
    </iframeWhiteListUrl>
    <iframeWhiteListUrl>
      <context>VisualforcePages</context>
      <url>example2.com</url>
     </iframeWhiteListUrl>
     <iframeWhiteListUrl>
        <context>DisclosureAndComplianceHubConnector</context>
        <url>example3.com</url>
     </iframeWhiteListUrl>
</IframeWhiteListUrlSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
      <members>IframeWhiteListUrlSettings</members>
      <name>IframeWhiteListUrlSettings</name>
   </types>
    <version>62.0</version>
</Package>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
