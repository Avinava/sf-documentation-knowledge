---
title: "RebateProgramMember"
domain: channel-revenue-management-dev-guide
topic: rebateprogrammember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.710Z
estimatedTokens: 546
keywords: [RebateProgramMember, member, rebate, program, virtue, partner, business, account, eligible, payments, ABC, Enterprises, HVAC, Corp, members]
---

# RebateProgramMember

> The member of a rebate program. By virtue of being a member, the partner or
      business account is eligible to get rebate payments. For example, ABC Enterprises and HVAC
      Corp are members of GoldStone Volume Rebate Program. This object is available in API
    version 51.0 and later.

# RebateProgramMember

The member of a rebate program. By virtue of being a member, the partner or business account is eligible to get rebate payments. For example, ABC Enterprises and HVAC Corp are members of GoldStone Volume Rebate Program. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique identifier for the account who’s a member of the program. |
| CumulativePayoutAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal rebate amount for a member. Sum of Total Payout Amount values from RebateProgramMemberPayout object that are not rejected.This is a calculated field. |
| IsPayoutCalcSkipped | TypebooleanPropertiesDescriptionSpecifies whether the rebate payout calculation should be skipped for the rebate program member. This field is available in API version 52.0 and later. |
| LastActivationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe latest date on which the program member was activated. |
| LastDeactivationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe latest date on which the program member was deactivated. |
| MemberStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of membership.Possible values are:ActiveInactive |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the member. |
| RebateProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to rebate program identifier. |
| ShipToAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ship to account. Use this when the rebate is applicable only when the member ships to this account. This field is available in API version 52.0 and later.This is a relationship field.Relationship NameShipToAccountRelationship TypeLookupRefers ToAccount |
