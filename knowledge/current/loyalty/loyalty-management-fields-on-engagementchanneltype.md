---
title: "Loyalty Management Fields on EngagementChannelType"
domain: loyalty
topic: loyalty-management-fields-on-engagementchanneltype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.931Z
estimatedTokens: 200
keywords: [Loyalty, Management, EngagementChannelType, Standard, extend, represent, promotion, eligibility, criteria, API, version, 60.0, later, Calls]
---

# Loyalty Management Fields on EngagementChannelType

> Standard fields extend the EngagementChannelType object for use in
         Loyalty Management to represent to information promotion eligibility criteria. The
      Loyalty Management Fields on EngagementChannelType are available in API version 60.0 and
      later.

# Loyalty Management Fields on EngagementChannelType

Standard fields extend the EngagementChannelType object for use in Loyalty Management to represent to information promotion eligibility criteria. The Loyalty Management Fields on EngagementChannelType are available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Delivery | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of channel that’s eligible for a promotion. This field is only available in orgs where Global Promotions Management is enabled.Possible values are:OnlineSocial |
