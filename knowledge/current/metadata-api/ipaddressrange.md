---
title: "IPAddressRange"
domain: metadata-api
topic: ipaddressrange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.200Z
keywords: [IPAddressRange, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# IPAddressRange

# IPAddressRange

Represents a range of IP addresses to include in or exclude from the specified feature.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

IP Address Range components have the suffix .IPAddressRange and are stored in the IPAddressRanges folder.

## Version

IPAddressRange components are available in API version 52.0 and later.

## Special Access Rules

To access IpAddressRange, enable the HtmlEmail permission in your org.

## Fields

| Field Name | Description |
| --- | --- |
| Description | Field TypestringDescriptionNot required. The description of the IP address range. For example, the name of the company that owns the IP address range. |
| developerName | Field TypestringDescriptionNot required. Gives you a way to distinguish ipAddressRange entries among developers in your org. |
| endIpAddress | Field TypestringDescriptionThe end of the IP address range. Must be an IPv4 or IPv6 Internet address and equal to or greater than the startIpAddress. |
| ipAddressFeature | Field TypepicklistDescriptionThe feature that uses the range of IP addresses. Possible values are:EmailIpFiltering (default) —Filter email engagement activities such as email opens and email clicks. |
| ipAddressUsageScope | Field TypepicklistDescriptionWhether the specified IP addresses are included or excluded. Possible values are:ExclusionInclusion |
| isProtected | Field TypebooleanDescriptionWhether the specified IP address range is protected. The default is false. |
| masterLabel | Field TypestringDescriptionMaster label for the IP address range. This internal label doesn’t get translated. |
| startIpAddress | Field TypestringDescriptionThe start of the IP address range. Must be an IPv4 or IPv6 Internet address and equal to or smaller than the endIpAddress. |

## Declarative Metadata Sample Definition

The following is an example of an ipAddressName component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").