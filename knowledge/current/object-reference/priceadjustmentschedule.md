---
title: "PriceAdjustmentSchedule"
domain: object-reference
topic: priceadjustmentschedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.004Z
estimatedTokens: 1244
keywords: [PriceAdjustmentSchedule, series, discounts, offered, depending, product's, configuration, quantity, they’re, purchased, combination, products, API, version, 47.0]
---

# PriceAdjustmentSchedule

> Represents a series of discounts offered depending on your product's
			configuration, quantity, and when they’re purchased in combination with other
			products. This object is available in API version 47.0 and later.

# PriceAdjustmentSchedule

Represents a series of discounts offered depending on your product's configuration, quantity, and when they’re purchased in combination with other products. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available when the B2B Commerce license is enabled or when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe method for applying tiered pricing. Possible values are:Range—All items receive the discount of the highest tier the quantity falls in.Slab—Items receive the discount defined for the tier they fall in.The default value is Range. Term-based discounts can’t be of type Slab. This field is available in API version 51.0 and later.The Slab method functions in the same way as the Range method. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the price adjustment schedule. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the price adjustment schedule is active (true) or not (false). You can change this field’s value as often as necessary. Label is Active. The default value is False. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates whether the price adjustment schedule has been archived (true) or not (false). This field is read-only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the price adjustment schedule. This field is read-only. Label is Price Adjustment Schedule Name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Salesforce ID of the sales representative who owns the price adjustment schedule. |
| ScheduleType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates how the price adjustment is determined. This field is available when Subscription Management is enabled. This field is available in API version 55.0 and later.Possible values are:Attribute—The characteristics or properties of a product determine the price adjustment.Bundle—The price adjustment that is determined when you want to sell a group of products or services as a unit.Custom—The price adjustment that can be customized for the user's needs.Term—The length of the subscription determines the price adjustment. Available in API version 58.0 and later.Volume—The quantity purchased determines the price adjustment.The default value is Volume. |

## Usage

When you create a PriceAdjustmentSchedule, you associate PriceAdjustmentTiers with it. A PriceAdjustmentSchedule is inactive until at least one PriceAdjustmentTier is added to it. A PriceAdjustmentSchedule comprises all related PriceAdjustmentTiers, with a maximum limit of 25 PriceAdjustmentTiers for Subscription Management.

To use PriceAdjustmentSchedule, associate it with a PriceBookEntry.

-   You can associate a PriceBookEntry with up to five PriceAdjustmentSchedules, but only one PriceAdjustmentSchedule can be associated with a PriceBookEntry.
-   When you activate or deactivate a PriceAdjustmentSchedule, its PriceBookEntry association is also activated or deactivated.
-   An adjustment to a PriceBookEntry is applied only if the associated PriceAdjustmentSchedule is active.
-   After a PriceAdjustmentSchedule is associated with a PriceBookEntry, if multicurrency is enabled, the currencyIsoCode field can’t be modified.
-   When you associate a PriceAdjustmentSchedule with a PricebookEntry, a junction object PricebookEntryAdjustment is created.

You can modify the PriceAdjustmentTier object, and the ScheduleType and AdjustmentMethod fields, only when a PriceAdjustmentSchedule is inactive.

## Code Sample

```

```

#### See Also

-   [PriceAdjustmentTier](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmenttier.htm "Represents a discount tier in a price adjustment schedule. This object is available in API version 47.0 and later.")

-   [PricebookEntryAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebookentryadjustment.htm "Read-only junction object created when you associate a price adjustment schedule with a price book entry. This object is available in API version 47.0 and later.")

## Code Examples

```apex
public void priceAdjustmentScheduleSample() 
                {try 
                  /* This code snippet will do the following:
		 * 
		 * 1. Create a new Price Adjustment Schedule
		 * 2. Create and attach a Price Adjustment Tier to the Schedule
		 * 3. Activate the Schedule
		 * 4. Create a new PricebookEntry Adjustment. This will associate the Schedule to a Pricebook Entry. */
 
		//Create a Price Adjustment Schedule
		PriceAdjustmentSchedule pas = new PriceAdjustmentSchedule();
		pas.Name = 'Sample PAS';
		pas.Description = 'Sample Price Adjustment Schedule';
		pas.AdjustmentMethod = 'Range';
		insert pas;
 
		//Attach a valid Price Adjustment Tier
		PriceAdjustmentTier pat = new PriceAdjustmentTier();
		pat.PriceAdjustmentScheduleId = pas.Id;
		pat.LowerBound = 1.0;
		pat.UpperBound = 100.0;
		pat.TierType = 'AdjustmentPercentage';
		pat.TierValue = 5.0;
		insert pat;
 
		//Activate the Schedule
		pas.IsActive = true;
		upsert pas;
 
		//Create a new PricebookEntry Adjustment
		PricebookEntryAdjustment pbea = new PricebookEntryAdjustment();
		pbea.PricebookEntryId = '01uRM0000007Hb5YAE';
		pbea.PriceAdjustmentScheduleId = pas.Id;
		insert pbea;
 
	} catch (ConnectionException ce) {
		ce.printStackTrace();
	}
}
```

## Related Topics

- PriceAdjustmentTier (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmenttier.htm)
- PricebookEntryAdjustment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebookentryadjustment.htm)
