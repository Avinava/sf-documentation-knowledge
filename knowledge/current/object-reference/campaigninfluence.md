---
title: "CampaignInfluence"
domain: object-reference
topic: campaigninfluence
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.027Z
estimatedTokens: 666
keywords: [CampaignInfluence, association, campaign, opportunity, Customizable, Influence, API, version, 37.0, later, Calls, Special, Access, Rules, Usage]
---

# CampaignInfluence

> Represents the association between a campaign and an opportunity in
			Customizable Campaign Influence. This object is available in API version 37.0 and
		later.

# CampaignInfluence

Represents the association between a campaign and an opportunity in Customizable Campaign Influence. This object is available in API version 37.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This information applies only to Customizable Campaign Influence and not to [Campaign Influence 1.0](https://help.salesforce.com/s/articleView?id=sf.campaigns_influence_original.htm&language=en_US) .

To ingest this object in Data Cloud, set up the Data Cloud Salesforce Connector permission set. See [Enable Object and Field Permissions for CRM Connections.](https://help.salesforce.com/s/articleView?id=data.c360_a_crm_enable_object_and_field_permissions.htm&type=5&language=en_US "HTML (New Window)")

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, Customizable Campaign Influence must be enabled. Customer Portal users can’t access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the campaign that’s related to the opportunity. |
| CampaignMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the campaign member related to the opportunity. Not available in the UI. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the contact on the associated opportunity. |
| Influence | TypepercentPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the Amount field for the related opportunity that’s attributed to the campaign. |
| ModelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the campaign influence model that’s related to the record. |
| OpportunityContactRoleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe opportunity contact role ID of the related opportunity. Not available in the UI. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related opportunity. |
| RevenueShare | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of revenue from the related opportunity attributed to the campaign. |

## Usage

Use this object to create campaign influence records for your custom campaign influence models. Don’t create campaign influence records for the Primary Campaign Source model. Records added to the Primary Campaign Source model via the API are deleted when the model is recalculated.
