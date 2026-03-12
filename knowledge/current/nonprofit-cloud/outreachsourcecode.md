---
title: "OutreachSourceCode"
domain: nonprofit-cloud
topic: outreachsourcecode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.693Z
estimatedTokens: 1630
keywords: [OutreachSourceCode, source, code, that's, associated, outreach, campaign, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# OutreachSourceCode

> Represents information about a source code that's associated with an
         outreach campaign. This object is available in API version 59.0 and later.

# OutreachSourceCode

Represents information about a source code that's associated with an outreach campaign. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users

## Fields

| Field | Details |
| --- | --- |
| AudienceCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of person accounts, contacts, and businesses in this audience. |
| AudienceInformation | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetailed information about the audience for the outreach source code. This field is available from API version 62.0 and later. |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent campaign associated with this source code.This field is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentifies the currency used for the gift transaction.Valid value is:USD—U.S. DollarThe default value is USD. Available in API version 61.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the source code. |
| FocusSegmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLists individuals who are segmented for this source code.This field is available with a Data Cloud license.This field is a relationship field.Relationship NameMarketSegmentRelationship TypeLookupRefers ToMarketSegment |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| MessageChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe channel used for the message from which the donation originated. This field is available from API version 60.0 and later.Possible values are:Digital PaidDirect MailEmailOrganic WebPhysicalSMSShare PartnerSocial OrganicSocial PaidTelemarketing |
| MessageChannelPlatform | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outreach message channel platform from which the donation originated. This field is available from API version 60.0 and later. |
| MessageChannelPlatformAccount | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe platform account used to send the outreach message. This field is available from API version 60.0 and later. |
| MessageContent | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outreach message content. This field is available from API version 60.0 and later. |
| MessageContentTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outreach message title. This field is available from API version 60.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the source code. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the outreach was sent. Available in API version 61.0 and later. |
| SourceCode | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique source code. This field is unique within your organization. |
| SourceCodeBaseUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe base URL for the outreach source code. This field is available from API version 60.0 and later. |
| SourceCodeUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL with UTM codes that's generated for the outreach source code. This field is available from API version 60.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the source code.Possible values are:ActiveArchivedInactiveThe default value is Active. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage of the outreach source code.Possible values are:FundraisingThe default value is Fundraising. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OutreachSourceCodeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)") (API Version 62.0)

Change events are available for the object.

[OutreachSourceCodeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[OutreachSourceCodeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[OutreachSourceCodeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[OutreachSourceCodeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
