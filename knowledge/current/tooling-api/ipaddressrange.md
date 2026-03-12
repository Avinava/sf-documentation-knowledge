---
title: "IPAddressRange"
domain: tooling-api
topic: ipaddressrange
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.058Z
estimatedTokens: 663
keywords: [IPAddressRange, range, addresses, include, exclude, feature, SOAP, API, Calls, REST, Usage]
---

# IPAddressRange

> Represents a range of IP addresses to include in or exclude from the
         specified feature.

# IPAddressRange

Represents a range of IP addresses to include in or exclude from the specified feature.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNot required. The description of the IP address range. For example, the name of the company that owns the IP address range. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the IP address range.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EndAddress | TypestringPropertiesFilter, Group, SortDescriptionThe end of the IP address range. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name used as the event delivery identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| IpAddressFeature | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe feature that uses the range of IP addresses. Possible values are:EmailIpFiltering (default) —Filter email engagement activities such as email opens and email clicks. |
| IpAddressUsageScope | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionWhether the specified IP addresses are included or excluded. Possible values are:ExclusionInclusion |
| isProtected | Field TypebooleanDescriptionWhether the specified IP address range is protected. The default is false. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionMaster label for the IP address range. This internal label doesn’t get translated. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe IP address range metadata. |
| StartAddress | TypestringPropertiesFilter, Group, SortDescriptionThe start of the IP address range. |

## Usage

Specify a range of IP addresses, which feature the range applies to, and whether the IP addresses are excluded from or included in the feature.

## Example

Exclude your coworkers' email opens and clicks from your email engagement reports. Use StartAddress and EndAddress to define the range of IP addresses that your company owns. Set IpAddressFeature to EmailIpFiltering, and set IpAddressUsageScope to Exclusion.
