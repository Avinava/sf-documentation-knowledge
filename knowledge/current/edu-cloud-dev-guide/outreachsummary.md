---
title: "OutreachSummary"
domain: edu-cloud-dev-guide
topic: outreachsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.651Z
estimatedTokens: 1762
keywords: [OutreachSummary, summary, results, outreach, campaign, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# OutreachSummary

> Represents a summary of results of the outreach campaign. This object is
      available in API version 59.0 and later.

# OutreachSummary

Represents a summary of results of the outreach campaign. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AverageGiftAmount | TypecurrencyPropertiesFilter, SortDescriptionThe average amount of all gifts in response to the related outreach source code or campaign. Data Processing Engine calculates this value by dividing the total gift transaction amount by the gift count. You can schedule this calculation to run on a regular basis. |
| AverageOnetimeGiftAmount | TypecurrencyPropertiesFilter, SortDescriptionThe average amount of all one-time, non-recurring gifts in response to the related outreach source code or campaign. Data Processing Engine calculates this value by dividing the total one-time gift amount by the one-time donor count. You can schedule this calculation to run on a regular basis. |
| AverageRecurringGiftAmount | TypecurrencyPropertiesFilter, SortDescriptionThe average amount of all recurring gifts in response to the related outreach source code or campaign. Data Processing Engine calculates this value by dividing the total recurring gift amount by the recurring donor count. You can schedule this calculation to run on a regular basis. |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe campaign associated with this outreach gift summary. You can associate one campaign with an outreach summary.This field is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| DonorCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of unique donors in response to the related outreach source code or campaign. Data Processing Engine calculates this value by counting the unique donors with paid transactions. You can schedule this calculation to run on a regular basis. |
| GiftCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of gifts in response to the related outreach source code or campaign. Data Processing Engine calculates this value by counting the paid gift transactions related to the campaign or source code. You can schedule this calculation to run on a regular basis. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-numbered name that uniquely identifies the outreach summary. |
| OnetimeDonorCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of contacts who gave a one-time, non-recurring donation in response to the related outreach source code or campaign. Data Processing Engine calculates this value by counting the unique donors with related gift transactions that are paid and not associated with a gift commitment. You can schedule this calculation to run on a regular basis. |
| OutreachSourceCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outreach source code associated with this outreach gift summary. You can associate one outreach source code with an outreach summary.This field is a relationship field.Relationship NameOutreachSourceCodeRelationship TypeLookupRefers ToOutreachSourceCode |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecurringDonorCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of contacts who gave a recurring donation in response to the related outreach source code or campaign. Data Processing Engine calculates this value by counting the unique donors for gift transactions that are paid and related to recurring gift commitments. You can schedule this calculation to run on a regular basis. |
| ResponseRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of responses received from donors to the related outreach source code or campaign. Data Processing Engine calculates this value by dividing the donor count by the audience count. You can schedule this calculation to run on a regular basis. |
| TotalGiftTransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all paid gifts in response to the related outreach source code or campaign. Data Processing Engine calculates this value by adding the amounts of all paid gift transactions. You can schedule this calculation to run on a regular basis. |
| TotalOnetimeGiftAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all one-time gifts in response to the related outreach source code or campaign. Data Processing Engine calculates this value by adding the total amounts of all related paid gift transactions that aren't related to a gift commitment. You can schedule this calculation to run on a regular basis. |
| TotalRecurringGiftAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all recurring gifts in response to the related outreach source code or campaign. Data Processing Engine calculates this value by adding the total amounts of all paid gift transactions that are related to recurring gift commitments. You can schedule this calculation to run on a regular basis. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OutreachSummaryFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[OutreachSummaryHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[OutreachSummaryShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
