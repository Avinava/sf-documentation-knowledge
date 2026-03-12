---
title: "Billing Fields on AccountBillingAccount"
domain: revenue-cloud
topic: billing-fields-on-accountbillingaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.595Z
estimatedTokens: 278
keywords: [Billing, Fields, AccountBillingAccount, Standard, fields, extend, represent, information, default, billing, accounts., API, version, 63.0, later., Supported, Calls, Special, Access, Rules]
---

# Billing Fields on AccountBillingAccount

> Standard fields extend the AccountBillingAccount object for use in
         Billing to represent information about default billing accounts. This object is
      available in API version 63.0 and later.

# Billing Fields on AccountBillingAccount

Standard fields extend the AccountBillingAccount object for use in Billing to represent information about default billing accounts. This object is available in API version 63.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

You need the Billing Admin permission set, Billing Operations User permission set, or Billing Customer Service User permission set access to this object.

## Fields

| Field | Details |
| --- | --- |
| IsDefaultBillingAccount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the account is the default billing account (true) or not (false).The default value is false. |

#### See Also

-   [*Energy and Utilities Cloud Developer Guide*: AccountBillingAccount](https://developer.salesforce.com/docs/atlas.en-us.260.0.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_accountbillingaccount.htm "Energy and Utilities Cloud Developer Guide: AccountBillingAccount - HTML (New Window)")
