---
title: "AccountPartner"
domain: object-reference
topic: accountpartner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.624Z
estimatedTokens: 945
keywords: [AccountPartner, partner, relationship, two, Account, records, record, created, automatically, accounts, opportunity’s, opportunity, Calls, Special, Access]
---

# AccountPartner

> This object represents a partner relationship between two Account records. An AccountPartner record is created automatically when a Partner record is created for a partner relationship between two accounts. An AccountPartner record is also created automatically between an account and an opportunity’s account when a Partner record is created between an account and an opportunity.

# AccountPartner

This object represents a partner relationship between two Account records. An AccountPartner record is created automatically when a Partner record is created for a partner relationship between two accounts. An AccountPartner record is also created automatically between an account and an opportunity’s account when a Partner record is created between an account and an opportunity.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is completely distinct from and independent of Account records that have been enabled for the partner portal.

## Supported Calls

create(), delete(), describeLayout()describeSObjects(), query(), retrieve()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountFromId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the main Account in the partner relationship.This is a relationship field.Relationship NameAccountFromRelationship TypeLookupRefers ToAccount |
| AccountToId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the partner Account in the partner relationship.This is a relationship field.Relationship NameAccountToRelationship TypeLookupRefers ToAccount |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the AccountPartner is the primary partner of an opportunity (true). When there are no corresponding Opportunity Partner records, the value is false. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the opportunity in a partner relationship.This is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| ReversePartnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the reciprocal AccountPartner record in a partner relationship. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe UserRole that the partner Account has on the main Account. For example, Consultant or Distributor. |

## Creating an Account-Account Partner Relationship

When you create a partner relationship between two accounts (when you create a Partner record and specify the AccountFromId), the API automatically creates two AccountPartner records, one for the forward relationship and one for the reverse. For example, if you create a Partner relationship with “Acme, Inc.” as the AccountFromId and “Acme Consulting” as the AccountToId, the API automatically creates two AccountPartner records:

-   The forward relationship AccountPartner with “Acme, Inc.” as the AccountFromId and “Acme Consulting” as the AccountToId.
-   The reverse relationship AccountPartner with “Acme Consulting” as the AccountFromId and “Acme, Inc.” as the AccountToId.
-   The value of the Role field in the reverse relationship AccountPartner is set to the PartnerRole record ReverseRole value associated with the value of the Role field in the forward relationship AccountPartner.

This mapping allows the API to manage the records and their relationships efficiently.

#### See Also

-   [Partner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partner.htm "Represents a partner relationship between two Account records or between an Opportunity record and an Account record.")

-   [OpportunityPartner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitypartner.htm "This object represents a partner relationship between an Account and an Opportunity. An OpportunityPartner record is created automatically when a Partner record is created for a partner relationship between an account and an opportunity.")

## Related Topics

- Partner (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partner.htm)
- OpportunityPartner (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitypartner.htm)
