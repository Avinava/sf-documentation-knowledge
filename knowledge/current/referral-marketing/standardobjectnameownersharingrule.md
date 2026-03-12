---
title: "StandardObjectNameOwnerSharingRule"
domain: referral-marketing
topic: standardobjectnameownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.092Z
estimatedTokens: 1368
keywords: [StandardObjectNameOwnerSharingRule, model, owner, sharing, rule, objects, associated, standard, represent, users, Calls, Special, Access, Rules, Support]
---

# StandardObjectNameOwnerSharingRule

> StandardObjectNameOwnerSharingRule is the model
			for all owner sharing rule objects associated with standard objects. These objects
			represent a rule for sharing a standard object with users other than the
		owner.

# StandardObjectNameOwnerSharingRule

StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.

The object name is variable and uses StandardObjectNameOwnerSharingRule syntax. For example, ChannelProgramOwnerSharingRule is a rule for sharing a channel program with users other than the channel program owner. The available associated owner sharing rule objects are listed at the end of this topic. For specific version information, see the standard object documentation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=referral_marketing)

#### Note

To enable access to this object, contact Salesforce customer support. But we recommend that you use Metadata API to programmatically update owner sharing rules instead because it triggers automatic sharing rule recalculation. The [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) Metadata API type is enabled for all orgs.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for ChannelProgramOwnerSharingRule, see the special access rules for ChannelProgram.

## Fields

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDetermines the level of access users have to records. Values are:Read (read only)Edit (read/write) |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the sharing rule. Maximum length is 1,000 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package, and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance can slow while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the source group. Records that are owned by users in the source group trigger the rule to give access. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the UI. Maximum length is 80 characters. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user or group that you're granting access to. |

## Objects That Support Sharing Rule

These objects have associated OwnerSharingRule objects.

-   [JournalType](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journaltype.htm "Represents a category of transaction journal. Journal types identify the reason for which transaction journals are created. This object is available in API version 59.0 and later.")
-   [LoyaltyProgram](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogram.htm "Represents the referral program. All records related to the referral program’s promotions, rewards, advocates, and referrals are associated with the referral program. This object is available in API version 59.0 and later.")
-   [LoyaltyProgramMember](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammember.htm "Represents the details of a referral program advocate. This object is available in API version 59.0 and later.")
-   [LoyaltyProgramProcess](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocess.htm "Represents information about a process that processes transaction journals for a referral promotion’s advocates and their referred party’s referral events. This object is available in API version 59.0 and later.")
-   [Promotion](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotion.htm "Represents information about a referral promotion. This object is available in API version 59.0 and later.")
-   [Referral](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_referral.htm "Represents the details of a referral submitted by an advocate. This object is available in API version 59.0 and later.")
-   [Voucher](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucher.htm "Represents the details of a voucher that’s issued to an advocate or to a referred friend. This object is available in API version 59.0 and later.")
-   [VoucherDefinition](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucherdefinition.htm "Represents information about the voucher template. A voucher definition is used to issue vouchers to advocates and their referred parties. This object is available in API version 59.0 and later.")

## Related Topics

- JournalType (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journaltype.htm)
- LoyaltyProgram (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogram.htm)
- LoyaltyProgramMember (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammember.htm)
- LoyaltyProgramProcess (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocess.htm)
- Promotion (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotion.htm)
- Referral (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_referral.htm)
- Voucher (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucher.htm)
- VoucherDefinition (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucherdefinition.htm)
