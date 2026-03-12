---
title: "PartyIndicatorResult"
domain: life-sciences-dev-guide
topic: partyindicatorresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.592Z
estimatedTokens: 708
keywords: [PartyIndicatorResult, party, indicator, result, calculated, API, version, 62.0, later, Calls, Special, Access, Rules, Usage, Associated]
---

# PartyIndicatorResult

> Represents information about a party for which the indicator result
         is calculated. This object is available in API version 62.0 and later.

# PartyIndicatorResult

Represents information about a party for which the indicator result is calculated. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for Life Sciences Cloud), and Patient Program Outcome Management permission sets are assigned to users.

## Fields

| Field | Details |
| --- | --- |
| CareProgramEnrolleeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the care program enrollee record associated with the party indicator result.This field is a relationship field.Relationship NameCareProgramEnrolleeRefers ToCareProgramEnrollee |
| IndicatorResultId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the indicator result record associated with the party.This field is a relationship field.Relationship NameIndicatorResultRefers ToIndicatorResult |
| MeasurementDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the party indicator result is measured. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the party indicator result. |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object for which the indicator result is calculated.This field is a relationship field.Relationship NamePartyRefers ToCareProgramEnrollee |
| ResultValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe result value that's used to score the party. |

## Usage

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyIndicatorResultFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyIndicatorResultHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PartyIndicatorResultShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

## Related Topics

- PartyIndicatorResultFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
