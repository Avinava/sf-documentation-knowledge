---
title: "QuoteAdjustmentGroup"
domain: object-reference
topic: quoteadjustmentgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.873Z
estimatedTokens: 1283
keywords: [QuoteAdjustmentGroup, Group, containing, adjustments, applied, quote, API, version, 58.0, later, Calls, Special, Access, Rules, Associated]
---

# QuoteAdjustmentGroup

> Group containing a set of adjustments applied to a quote. This object is
      available in API version 58.0 and later.

# QuoteAdjustmentGroup

Group containing a set of adjustments applied to a quote. This object is available in API version 58.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available with Subscription Management.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentSource | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates the origin of the price adjustment.Possible values are:Discretionary—The adjustment is entered manually; for example, by a sales rep.Promotion—The adjustment is part of a promotion; for example, a holiday sale discount.Rule—The adjustment is due to a price rule.System—The adjustment originates from the system, for example, a volume discount. |
| AdjustmentType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates the type of mathematical adjustment to be applied to the quote.Possible values are:AdjustmentAmount—The adjustment is a numerical amount, for example, a cash discount of 20.AdjustmentPercentage—The adjustment is a percentage amount, for example, a 10% discount.OverrideAmount—The adjustment is a manual price override. Available in API version 59.0 and later. |
| AdjustmentValue | TypedoublePropertiesFilter, SortDescriptionThe specified AdjustmentType amount that is applied to the quote. For example, when AdjustmentType is AdjustmentAmount, AdjustmentValue is the cash amount of the price adjustment. When AdjustmentType value is AdjustmentPercentage, AdjustmentValue is the percent value of the price adjustment. When AdjustmentType is OverrideAmount, AdjustmentValue overrides the total amount of the quote. |
| Description | TypetextareaPropertiesNillableDescriptionUser-entered information about the quote adjustment group. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe user-defined name of the quote adjustment group. |
| Priority | TypeintPropertiesFilter, Group, Nillable, SortDescriptionA numeric value that represents the order of precedence of the quote adjustment group. It can also represent the order of precedence when applying the AdjustmentType values.For example, a quote can have two adjustments: a $100 discount and a 10% discount. This field indicates which adjustment to apply first. |
| QuoteId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the quote related to the adjustments in this group.This field is a relationship field.Relationship NameQuoteRelationship TypeLookupRefers ToQuote |
| TotalAmount | TypecurrencyPropertiesFilter, SortDescriptionThe total of all quote adjustments in this quote adjustment group, excluding tax. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[QuoteAdjustmentGroupChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[QuoteAdjustmentGroupFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[QuoteAdjustmentGroupHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[QuoteAdjustmentGroupOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[QuoteAdjustmentGroupShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- QuoteAdjustmentGroupChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- QuoteAdjustmentGroupFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- QuoteAdjustmentGroupHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- QuoteAdjustmentGroupOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- QuoteAdjustmentGroupShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
