---
title: "RedirectWhitelistUrl"
domain: metadata-api
topic: redirectwhitelisturl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:42.272Z
estimatedTokens: 523
keywords: [RedirectWhitelistUrl, Represents, trusted, URL, that’s, excluded, redirection, restrictions, redirectionWarning, redirectBlockModeEnabled, field, SessionSettings, Metadata, set, true., extends, metadata, inherits, its, fullName]
---

# RedirectWhitelistUrl

> Represents a trusted URL that’s excluded from
      redirection restrictions when the redirectionWarning or
        redirectBlockModeEnabled field on the SessionSettings Metadata type is
      set to true. This type extends the Metadata metadata
    type and inherits its fullName field.

# RedirectWhitelistUrl

Represents a trusted URL that’s excluded from redirection restrictions when the redirectionWarning or redirectBlockModeEnabled field on the SessionSettings Metadata type is set to true. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

## File Suffix and Directory Location

RedirectWhitelistUrl components have the suffix .redirectWhitelistUrl and are stored in the redirectWhitelistUrls folder.

## Version

RedirectWhitelistUrl components are available in API version 48.0 and later.

## Special Access Rules

Only authenticated internal and external users with the View Setup and Customize Application permissions can access or edit this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| url | string | Required. The trusted URL.These formats are accepted: example.com, *.example.com, and https://example.com.The host section of the URL can include an asterisk (*) as a wildcard. Otherwise, the URL cannot be malformed. Examples of malformed URLs that fail a syntax check are malformed^url.example.com, and https://{subdomain}.example.com.To add a URL based on parameters, build the URL before you add it to this Metadata Type. |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
