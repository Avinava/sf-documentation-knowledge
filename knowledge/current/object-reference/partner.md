---
title: "Partner"
domain: object-reference
topic: partner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.284Z
estimatedTokens: 1477
keywords: [Partner, relationship, two, Account, records, Opportunity, record, Calls, Special, Access, Rules, Roles, Creating, Account-Opportunity, Account-Account]
---

# Partner

> Represents a partner relationship between two Account records or between an Opportunity record and an Account record.

# Partner

Represents a partner relationship between two Account records or between an Opportunity record and an Account record.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountFromId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionRequired if OpportunityId is null. ID of the main account in a partner relationship between two accounts. Specifying this field when creating a Partner record creates two AccountPartner records, one for each direction of the relationship. If you specify the OpportunityId field, you can’t specify this field as well.This is a relationship field.Relationship NameAccountFromRelationship TypeLookupRefers ToAccount |
| AccountToId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Partner Account related to either an opportunity or an account. You must specify this field when creating an Opportunity Partner or an Account Partner record.This is a relationship field.Relationship NameAccountToRelationship TypeLookupRefers ToAccount |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionValid for Opportunity Partners only.Indicates that the account is the primary partner for the opportunity. Only one account can be marked as primary for an opportunity. If you set this field to 1 (true) upon insert of a new opportunity partner, this field is automatically set to 0 (false) for any other primary partners for that opportunity.Label is Primary. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionRequired if AccountFromId is null. ID of the opportunity in a partner relationship between an account and an opportunity. Specifying this field when creating a record creates an OpportunityPartner record. If you specify the AccountFromId field, you can’t also specify this field.This is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| ReversePartnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the reciprocal Parnter record in a partner relationship. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionUserRole that the account has toward the related opportunity or account, such as consultant or distributor. |

## Roles

In the Salesforce user interface, system administrators can set up the valid role values and their corresponding reverse role values in the PartnerRole object. Each account in the relationship is assigned a Role (such as Consultant or Distributor) designating that account’s role toward the related account or opportunity.

## Creating an Account-Opportunity Partner Relationship

When you create a partner relationship between an account and an opportunity (when you create a Partner record and specify the OpportunityId field), the API automatically creates two OpportunityPartner records, one for the forward relationship and one for the reverse.

-   The value of the Partner field AccountToId maps to the value of the OpportunityPartner field AccountToId.
-   The values of the OpportunityId, Role, and IsPrimary fields in both the Partner and OpportunityParnter records are the same.
-   If you set the IsPrimary value to 1 (true) upon insert of a new OpportunityPartner, the IsPrimary value is automatically set to 0 (false) for any existing primary partners for that opportunity.

This mapping allows the API to manage the records and their relationships efficiently.

## Creating an Account-Account Partner Relationship

When you create a partner relationship between two accounts (when you create a Partner record and specify the AccountFromId), the API automatically creates two AccountPartner records, one for the forward relationship and one for the reverse. For example, if you create a Partner relationship with “Acme, Inc.” as the AccountFromId and “Acme Consulting” as the AccountToId, the API automatically creates two AccountPartner records:

-   The forward relationship AccountPartner with “Acme, Inc.” as the AccountFromId and “Acme Consulting” as the AccountToId.
-   The reverse relationship AccountPartner with “Acme Consulting” as the AccountFromId and “Acme, Inc.” as the AccountToId.
-   The value of the Role field in the reverse relationship AccountPartner is set to the PartnerRole record ReverseRole value associated with the value of the Role field in the forward relationship AccountPartner.

This mapping allows the API to manage the records and their relationships efficiently.

#### See Also

-   [AccountPartner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountpartner.htm "This object represents a partner relationship between two Account records. An AccountPartner record is created automatically when a Partner record is created for a partner relationship between two accounts. An AccountPartner record is also created automatically between an account and an opportunity’s account when a Partner record is created between an account and an opportunity.")

-   [OpportunityPartner](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitypartner.htm "This object represents a partner relationship between an Account and an Opportunity. An OpportunityPartner record is created automatically when a Partner record is created for a partner relationship between an account and an opportunity.")

-   [UserRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_role.htm "Represents a user role in your organization.")

-   [PartnerRole](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnerrole.htm "Represents a role for an account Partner, such as consultant, supplier, and so on.")

## Related Topics

- AccountPartner (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountpartner.htm)
- OpportunityPartner (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunitypartner.htm)
- UserRole (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_role.htm)
- PartnerRole (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnerrole.htm)
