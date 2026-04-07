---
title: "PushUpgradeCustomization"
domain: object-reference
topic: pushupgradecustomization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:39.359Z
estimatedTokens: 380
keywords: [PushUpgradeCustomization, Customized, push, upgrades, allow, package, subscriber, block, their, org, developers, control, subscribers, opt, upgrade, customization, maps, specific, API, 60.0]
---

> Customized push upgrades allow a package subscriber to block push upgrades to
         their org. Package developers control which subscribers can opt into customized push
         upgrades. Each push upgrade customization maps to a specific package and to a specific
         subscriber org. This object is available in API version 60.0 and later.

# PushUpgradeCustomization

Customized push upgrades allow a package subscriber to block push upgrades to their org. Package developers control which subscribers can opt into customized push upgrades. Each push upgrade customization maps to a specific package and to a specific subscriber org. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CustomUpgradeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of push upgrade customization.Possible values are:BlockedBySubscriber—Blocked By SubscriberNoneThe default value is None. |
| HasRestrictionEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the subscriber org has blocked push upgrades.The default value is false. |
| IsCustomUpgradeAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the package developer has allowed a subscriber to opt into customized push upgrades.The default value is false. |
| IsRestrictionOverridden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether customized push upgrades have been overridden by Salesforce Customer Support for the subscriber org.The default value is false. |
