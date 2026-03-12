---
title: "NetworkAffinity"
domain: object-reference
topic: networkaffinity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.178Z
estimatedTokens: 360
keywords: [NetworkAffinity, junction, associates, user, profile, Network, Experience, Cloud, site, assign, API, version, 41.0, later, Calls]
---

# NetworkAffinity

> Represents a junction object that
        associates a user profile with a Network object, that is, with an Experience Cloud site. Use
        NetworkAffinity to assign a default Experience Cloud site to a user profile.
      This object is available in API version 41.0 and later.

# NetworkAffinity

Represents a junction object that associates a user profile with a Network object, that is, with an Experience Cloud site. Use NetworkAffinity to assign a default Experience Cloud site to a user profile. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To work with the NetworkAffinity object, you must have View Setup or Customize Application permission.

## Fields

| Field Name | Details |
| --- | --- |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the default Experience Cloud site associated with a user profile. |
| ProfileId | TypereferencePropertiesCreateFilter, Group, Sort, UpdateDescriptionID of the user profile the default Experience Cloud site is assigned to. |

## Usage

The default Experience Cloud site allows you to stamp site-agnostic email notifications to all users with that profile with the selected site's branding. The default Experience Cloud site also becomes the target destination for email notification links. Site-agnostic email notifications include notifications about records, such as cases, accounts, and opportunities.

The NetworkId field is not updatable through the Apex, REST API, or SOAP API. If you want to change the value for NetworkId, you must delete the record and create one with the right value.
