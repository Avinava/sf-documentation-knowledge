---
title: "Loyalty Clubs Data Model"
domain: loyalty
topic: loyalty-clubs-data-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.090Z
estimatedTokens: 1295
keywords: [Loyalty, Clubs, Data, Model, interest-based, membership, initiatives, designed, provide, exclusive, benefits, privileges, customers]
---

# Loyalty Clubs Data Model

> Clubs are interest-based membership initiatives designed to provide exclusive benefits
    and privileges to customers.

# Loyalty Clubs Data Model

Clubs are interest-based membership initiatives designed to provide exclusive benefits and privileges to customers.

Clubs are modeled as loyalty tier groups. For every club, a loyalty tier is created with the same name. This loyalty tier is then associated with various entities, such as eligibility criteria, promotions, and enrollment processes.

Clubs are either independent or associated with existing loyalty programs. For independent clubs, a dummy loyalty program is set up.

![Loyalty clubs data model architecture](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Floyalty%2Fimages%2Floyalty_clubs_datamodel.png&folder=loyalty)

The following objects are associated with the clubs data model:

-   [Loyalty Program](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogram.htm "Represents the loyalty program within an organization. All the information related to members, tiers, tier groups, program currencies, vouchers, benefits, partners, promotions, transactions are associated with the program. This object is available in API version 51.0 and later."): Represents the loyalty program that the club is a part of.
-   [Loyalty Tier Group](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytiergroup.htm "Represents information about tier groups of a loyalty program. Tier group categorizes members based on their loyalty points. This object is available in API version 51.0 and later."): Groups all your company's clubs together.
-   [Loyalty Tier](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytier.htm "Represents information about tiers of a loyalty program. A tier group has a set of tiers in a sequential order. This object is available in API version 51.0 and later."): Stores detailed information about each club, including its name, description, and specific attributes.
-   [Loyalty Tier Eligibility Source](atlas.en-us.loyalty.meta/loyalty/loyalty_loyaltytiereligibilitysrc.htm "Represents the customer groups that are eligible for club membership. This object is available in API version 64.0 and later."): Determines the eligibility criteria for club membership. This can be based on:
    -   Loyalty Tiers: Loyalty program members from specific tiers.
    -   Segments: Customers who are part of specific Data Cloud segments.
    -   Campaigns: Customers who are part of specific campaigns.
    -   Actionable Lists: Customers who are part of specific actionable lists.
-   [Loyalty Tier Membership Fee Option](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytiermshpfeeoption.htm "Represents the options by which members can pay for tier or club memberships. This object is available in API version 63.0 and later."): Stores information about the subscription fees for each club, including the amount and payment models, such as:
    -   Cash
    -   Loyalty Currency
    -   Cash and Loyalty Currency
-   [Loyalty Tier Benefit](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytierbenefit.htm "A junction object that associates the loyalty benefits with the loyalty program tiers. This object is available in API version 51.0 and later."): Associates club to a benefit that the club offers.
-   [Loyalty Tier Promotion](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytierpromotion.htm "Represents a junction between a member tier and a loyalty promotion. This object is available in API version 63.0 and later."): Associates exclusive promotions with the club, which can be offered to members.
-   [Loyalty Program Member](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammember.htm "Represents information about member who belongs to a loyalty program. The member can be individual or corporate type. This object is available in API version 51.0 and later."): Stores information about a club member.
-   [Loyalty Member Tier:](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltymembertier.htm "Represents information about the current tier of the member across tier groups. This object is available in API version 51.0 and later.") Tracks the membership tenure of each member, including the start and end dates of their club membership.
-   [Loyalty Program Member Promotion](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammbrpromotion.htm "Represents details about the promotions to be applied for a loyalty program member. Tracks the enrollment status, promotion status, and progress for a promotion of a member. This object is available in API version 51.0 and later."): Associates a club member with the promotion they are eligible for.
-   [LoyaltyMembershipLifecycle](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltymembershiplifecycle.htm "Represents information about a member's lifecycle in the loyalty program. This object is available in API version 57.0 and later."): Manages the stages of a member's subscription, from initial enrollment to ongoing engagement, and any changes in status.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

The objects and fields listed are shared between loyalty programs and clubs of your organization.

## Related Topics

- Loyalty Program (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogram.htm)
- Loyalty Tier Group (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytiergroup.htm)
- Loyalty Tier (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytier.htm)
- Loyalty Tier Eligibility Source (atlas.en-us.loyalty.meta/loyalty/loyalty_loyaltytiereligibilitysrc.htm)
- Loyalty Tier Membership Fee
          Option (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytiermshpfeeoption.htm)
- Loyalty Tier Benefit (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytierbenefit.htm)
- Loyalty Tier Promotion (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytierpromotion.htm)
- Loyalty Program Member (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammember.htm)
- Loyalty Member Tier: (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltymembertier.htm)
- Loyalty Program Member
          Promotion (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammbrpromotion.htm)
