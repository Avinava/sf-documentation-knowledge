---
title: "OpportunityPartner"
domain: object-reference
topic: opportunitypartner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.587Z
estimatedTokens: 767
keywords: [OpportunityPartner, partner, relationship, Account, Opportunity, record, created, automatically, Calls, Special, Access, Rules, Creating, Account-Opportunity]
---

# OpportunityPartner

> This object represents a partner relationship between an Account and an Opportunity. An OpportunityPartner record is created automatically when a Partner record is created for a partner relationship between an account and an opportunity.

# OpportunityPartner

This object represents a partner relationship between an Account and an Opportunity. An OpportunityPartner record is created automatically when a Partner record is created for a partner relationship between an account and an opportunity.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountToId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the partner Account in the partner relationship.This is a relationship field.Relationship NameAccountToRelationship TypeLookupRefers ToAccount |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the account is the opportunity’s primary partner (true) or not (false). Label is Primary. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Opportunity that is in the partner relationship.This is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| ReversePartnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the reciprocal OpportunityPartner record in a partner relationship. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe UserRole that the Account has on the Opportunity. For example, Reseller or Manufacturer. |

## Creating an Account-Opportunity Partner Relationship

When you create a partner relationship between an account and an opportunity (when you create a Partner record and specify the OpportunityId field), the API automatically creates two OpportunityPartner records, one for the forward relationship and one for the reverse.

-   The value of the Partner field AccountToId maps to the value of the OpportunityPartner field AccountToId.
-   The values of the OpportunityId, Role, and IsPrimary fields in both the Partner and OpportunityParnter records are the same.
-   If you set the IsPrimary value to 1 (true) upon insert of a new OpportunityPartner, the IsPrimary value is automatically set to 0 (false) for any existing primary partners for that opportunity.

This mapping allows the API to manage the records and their relationships efficiently.

#### See Also

-   [Partner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partner.htm "Represents a partner relationship between two Account records or between an Opportunity record and an Account record.")

-   [AccountPartner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountpartner.htm "This object represents a partner relationship between two Account records. An AccountPartner record is created automatically when a Partner record is created for a partner relationship between two accounts. An AccountPartner record is also created automatically between an account and an opportunity’s account when a Partner record is created between an account and an opportunity.")

## Related Topics

- Partner (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partner.htm)
- AccountPartner (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountpartner.htm)
