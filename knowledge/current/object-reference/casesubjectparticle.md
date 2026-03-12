---
title: "CaseSubjectParticle"
domain: object-reference
topic: casesubjectparticle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.337Z
estimatedTokens: 752
keywords: [CaseSubjectParticle, Social, Business, Rules, custom, Case, Subject, cases, created, inbound, posts, API, version, 41.0, later]
---

# CaseSubjectParticle

> Represents the Social Business Rules custom format for the Case
        Subject field on cases created from inbound social posts. This object is
    available in API version 41.0 and later.

# CaseSubjectParticle

Represents the Social Business Rules custom format for the **Case Subject** field on cases created from inbound social posts. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for the CaseSubjectParticle object.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Index | TypeintPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The order in which the custom Case Subject is generated, meaning if the social network is 0 and the social message is 1, then the subject generates as Twitter \| Tweet. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the case subject field.Possible values are:ar—Arabicda—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianiw—Hebrewja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the case subject field. |
| TextField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies inbound social content added to Case Subject in case records. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the custom Case Subject format from which inbound social content appears in case records.Possible values are:ColonSeparatorContent—MessageHyphenSeparatorMessageTypePipeSeparatorProvidedStringRealNameSentimentSocialHandleSocialNetworkSource |

## Usage

In the Salesforce UI, case subjects are brief descriptions of cases. They are what agents see on cases first. Social Business Rules specify the brief descriptions of cases created from social posts. Using CaseSubjectParticle objects you can build your own case subject format, where each object represents a social post's component. For example, combining CaseSubjectParticle objects with components for types MessageType, RealName, and SocialNetwork results in "Tweet Customer123 Twitter".
