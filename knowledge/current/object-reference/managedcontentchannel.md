---
title: "ManagedContentChannel"
domain: object-reference
topic: managedcontentchannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.705Z
estimatedTokens: 819
keywords: [ManagedContentChannel, CMS, channel, channels, correspond, managed, content, publishing, endpoints, They, deliver, published, Salesforce, workspaces, audience]
---

# ManagedContentChannel

> Represents the details of a CMS channel. CMS channels correspond to managed
         content publishing endpoints. They deliver published content from your Salesforce CMS
         workspaces to an audience. This object is available in API version 55.0 and
      later.

# ManagedContentChannel

Represents the details of a CMS channel. CMS channels correspond to managed content publishing endpoints. They deliver published content from your Salesforce CMS workspaces to an audience. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

ManagedContentChannel is available when the Digital Experiences app is enabled.

## Fields

| Field | Details |
| --- | --- |
| CacheControlMaxAge | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe amount of time, in seconds, it takes for a requested CMS content resource in the CMS channel to expire before a new request for the resource must be made. |
| Domain | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe domain for a public channel. Only public channels can have an assigned domain.Possible value is:mydomain.cdn.salesforce-experience.comNoteThe mydomain value is specific to the domain of the channel. |
| DomainHostName | TypestringPropertiesFilter, Nillable, SortDescriptionThe hostname of the domain assigned to the CMS channel. Only public channels can have an assigned domain. |
| MediaCacheControlMaxAge | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe amount of time, in seconds, it takes for a requested CMS image or document content resource in the CMS channel to expire before a new request for the resource must be made. This field is available in API version 57.0 and later. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the CMS channel. |
| OptionsIsCacheControlPublic | TypebooleanPropertiesFilterDescriptionWhen true, the CMS channel connection type is public. When false, the cache control is private. The default value is false. |
| OptionsIsDomainLocked | TypebooleanPropertiesFilterDescriptionWhen true, the domain set to the channel can’t be changed. Only public channels can have this field set to true. If the channel type is COMMUNITY, the default value is true. For all other channel types, the default value is false. |
| OptionsIsSearchable | TypebooleanPropertiesFilterDescriptionWhen true, users can search for all published CMS content types within the channel. The default value is false. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe connection type of the CMS channel. The connection type determines which audience can access the CMS content delivered in the channel.Possible values are:COMMUNITY: User access is controlled by the settings of the Experience Cloud site.CloudToCloud: Connects Salesforce CMS to the B2C Commerce Page Designer.ConnectedApp: User access to the channel is controlled by the connected application associated with the channel.PublicUnauthenticated: No user authentication required, content can be cached on public CDNs.Record: User access to the content is controlled by the user access to the associated record. Content is only accessible to users with access to the record.UserPermission: This value is reserved for future use. |

## Usage

ManagedContentChannel can be queried through the public sObject API. Use this object to retrieve information for a specific CMS channel.
