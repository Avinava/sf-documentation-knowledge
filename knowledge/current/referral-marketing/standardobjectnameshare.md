---
title: "StandardObjectNameShare"
domain: referral-marketing
topic: standardobjectnameshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.098Z
estimatedTokens: 1417
keywords: [StandardObjectNameShare, model, share, objects, associated, standard, represent, sharing, entry, Calls, Special, Access, Rules, Follow]
---

# StandardObjectNameShare

> StandardObjectNameShare is the model for all
			share objects associated with standard objects. These objects represent a sharing entry
			on the standard object.

# StandardObjectNameShare

StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.

The object name is a variable and uses StandardObjectNameShare syntax. For example, AccountBrandShare is a sharing entry on an account brand. For specific version information, see the standard object documentation.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=referral_marketing)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for AccountBrandShare, see the special access rules for AccountBrand.

## Fields

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access allowed. Values are:All (owner)Edit (read/write)Read (read only) |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent record. |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that the sharing entry exists. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user or group that has been given access to the object. |

## Objects That Follow This Model

These objects follow the standard pattern for associated Share objects.

-   [CommunicationChannelTemplate](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_communicationchanneltemplate.htm "Represents the template for different communication channels. This object is available in API version 63.0 and later. This object is available only for B2C referral programs.")
-   [JournalType](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journaltype.htm "Represents a category of transaction journal. Journal types identify the reason for which transaction journals are created. This object is available in API version 59.0 and later.")
-   [LoyaltyProgram](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogram.htm "Represents the referral program. All records related to the referral program’s promotions, rewards, advocates, and referrals are associated with the referral program. This object is available in API version 59.0 and later.")
-   [LoyaltyProgramMember](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammember.htm "Represents the details of a referral program advocate. This object is available in API version 59.0 and later.")
-   [LoyaltyProgramProcess](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocess.htm "Represents information about a process that processes transaction journals for a referral promotion’s advocates and their referred party’s referral events. This object is available in API version 59.0 and later.")
-   [LoyaltyProgramWidget](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramwidget.htm "Represents information about a widget that advocates use to enroll in the referral program and refer their friends This object is available in API version 59.0 and later. This object is available only for B2C referral programs.")
-   [OutboundEngmtContentRsrc](atlas.en-us.referral_marketing.meta/referral_marketing/referral_api_objects_outboundengmtcontentrsrc.htm "Represents the details of an outbound engagement. This object is available in API version 65.0 and later.")
-   [Promotion](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotion.htm "Represents information about a referral promotion. This object is available in API version 59.0 and later.")
-   [PromotionTemplate](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotiontemplate.htm "Represents the JSON configuration and details of a referral promotion template. This object is available in API version 61.0 and later.")
-   [Referral](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_referral.htm "Represents the details of a referral submitted by an advocate. This object is available in API version 59.0 and later.")
-   [Voucher](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucher.htm "Represents the details of a voucher that’s issued to an advocate or to a referred friend. This object is available in API version 59.0 and later.")
-   [VoucherDefinition](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucherdefinition.htm "Represents information about the voucher template. A voucher definition is used to issue vouchers to advocates and their referred parties. This object is available in API version 59.0 and later.")

## Related Topics

- CommunicationChannelTemplate (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_communicationchanneltemplate.htm)
- JournalType (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journaltype.htm)
- LoyaltyProgram (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogram.htm)
- LoyaltyProgramMember (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammember.htm)
- LoyaltyProgramProcess (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocess.htm)
- LoyaltyProgramWidget (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramwidget.htm)
- OutboundEngmtContentRsrc (atlas.en-us.referral_marketing.meta/referral_marketing/referral_api_objects_outboundengmtcontentrsrc.htm)
- Promotion (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotion.htm)
- PromotionTemplate (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotiontemplate.htm)
- Referral (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_referral.htm)
