---
title: "CorsWhitelistOrigin"
domain: metadata-api
topic: corswhitelistorigin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.412Z
keywords: [CorsWhitelistOrigin, Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Usage, Wildcard, Support, Manifest]
---

# CorsWhitelistOrigin

# CorsWhitelistOrigin

Represents an origin in the CORS allowlist.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

## File Suffix and Directory Location

CorsWhitelistOrigin components have the suffix .corswhitelistorigin and are stored in the corswhitelistorigins folder.

## Version

CorsWhitelistOrigin components are available in API version 32.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| urlPattern | String | A URL pattern for the origin.The origin URL pattern must include the HTTPS protocol and a domain name, and can include a port. The wildcard character (*) is supported and must be in front of a second-level domain name. For example, https://*.example.com adds all subdomains of example.com to the allowlist.Google Chrome™ and Mozilla® Firefox® browser extensions are also allowed as resources in API version 53 and later. Chrome extensions must use the prefix chrome-extension:// and 32 characters without digits or capital letters, for example chrome-extension://abdkkegmcbiomijcbdaodaflgehfffed. Firefox extensions must use the prefix moz-extension:// and an 8-4-4-4-12 format of small alphanumeric characters, for example moz-extension://1234ab56-78c9-1df2-3efg-4567891hi1j2.The origin URL pattern can be an IP address. But an IP address and a domain that resolve to the same address aren’t the same origin, and you must add them to the CORS allowlist as separate entries. |

## Declarative Metadata Sample Definition

Here’s an example package manifest used to deploy or retrieve the CorsWhitelistOrigin metadata for an organization.

```

```

Here’s an example of a CorsWhitelistOrigin component.

```

```

## Usage

[CORS](http://www.w3.org/TR/cors/ "HTML (New Window)") (cross-origin resource sharing) is a W3C recommendation that enables Web browsers to request resources from origins other than their own. For example, using CORS, a JavaScript script at https://www.example.com could request a resource from https://www.salesforce.com.

If a browser that supports CORS makes a request to an origin in your allowlist, Salesforce returns the origin in the Access-Control-Allow-Origin HTTP header, along with any additional CORS HTTP headers. If the origin isn’t allow listed, Salesforce returns HTTP status code 404.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").