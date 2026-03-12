---
title: "QuoteAction"
domain: revenue-cloud
topic: quoteaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.308Z
estimatedTokens: 839
keywords: [QuoteAction, sales, transaction, that’s, quoted, renewal, sale, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# QuoteAction

> Indicates the type of sales transaction that’s being quoted; for
         example, a renewal sale. This object is available in API version 59.0 and
      later.

# QuoteAction

Indicates the type of sales transaction that’s being quoted; for example, a renewal sale. This object is available in API version 59.0 and later.

If a quote doesn't have a quote action, Salesforce treats it as a quote of the Add type. When such a quote is used to create an order, Salesforce automatically creates an order action of the Add type.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available in orgs with Revenue Cloud. It’s also available in Industries Automotive and Industries Field Service.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code of the currency. Use only one of the valid alphabetic, three-letter currency ISO codes defined by the ISO 4217 standard, such as USD, GBP, or JPY. Must be unique within your organization. Label is Currency ISO Code.The default value is USD.See Supported Currencies (ICU) for a list of currency codes Salesforce supports. This field is available in Revenue Cloud in API version 66.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user accessed this record or list view indirectly, but didn’t view it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name given to the quote action. |
| QuoteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe quote related to this quote action.This field is a relationship field.Relationship NameQuoteRelationship TypeLookupRefers ToQuote |
| SourceAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset changed by this sales transaction. For example, if the quote action is a quantity amendment, this field contains the ID of the asset that’s amended.This field is a relationship field.Relationship NameSourceAssetRelationship TypeLookupRefers ToAsset |
| Subtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe subtype of the action on the quote line item.Valid values are:DowngradeFrom—Available in API version 66.0 and later.DowngradeTo—Available in API version 66.0 and later.FieldAmendmentRollbackStartDateAdjustmentSwapIn—Available in API version 66.0 and later.SwapOut—Available in API version 66.0 and later.TransferFromTransferToUpgradeFrom—Available in API version 66.0 and later.UpgradeTo—Available in API version 66.0 and later.This field is available with Revenue Cloud in API version 64.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of sales transaction that the related quote is for.Valid values are:AddAmendAssociation—Available in API version 66.0 and later.CancelNo ChangeRenewTransfer—Available with Revenue Cloud in API version 65.0 and later. |
