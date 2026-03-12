---
title: "ExternalSocialAccount"
domain: object-reference
topic: externalsocialaccount
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.951Z
estimatedTokens: 1026
keywords: [ExternalSocialAccount, managed, social, media, account, network, Facebook, Twitter, API, version, 29.0, later, Calls, Usage]
---

# ExternalSocialAccount

> Represents a managed social media account on a social network such
			as Facebook or Twitter. This object is available in API version 29.0 and
		later.

# ExternalSocialAccount

Represents a managed social media account on a social network such as Facebook or Twitter. This object is available in API version 29.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| AuthorizedBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the Radian6 user who added the social account to Radian6. |
| DataSourceId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the Radian6 data source for the social account. |
| DefaultResponseAccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the managed social account to use by default when responding.This is a relationship field.Relationship NameDefaultResponseAccountRelationship TypeLookupRefers ToExternalSocialAccount |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the record in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| ExternalAccountId | TypestringPropertiesFilter, Group, SortDescriptionID of the social account on the social network. |
| ExternalPictureURL | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionURL to the picture of the social account on the social network. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the social account is active or not. |
| IsAuthenticated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the social account is authenticated or not. |
| IsCaseCreationEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether case creation for the social account is enabled or not. |
| IsDataSourceActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the data source is active or not. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the language of the social account. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionMaster label for the social account. This display value is the internal label and does not get translated. |
| ProfileUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionURL for the profile. |
| Provider | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSocial network, such as Facebook or Twitter, of the social account. |
| ProviderUserId | TypestringPropertiesFilter, Group, SortDescriptionUser ID for the social network of the social account. |
| RuleId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the Radian6 rule for the account. |
| SocialPropertyId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the Radian6 social property for the account. |
| TopicId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the topic for the social account. |
| UniqueName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique name for the social account. |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUsername for the social account. |

## Usage

Although available, many of the Radian6-related fields are no longer accurate or used. We recommend using [Social Engagement Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_social_engagement_list.htm "HTML (New Window)") in Connect REST API Developer Guide.
