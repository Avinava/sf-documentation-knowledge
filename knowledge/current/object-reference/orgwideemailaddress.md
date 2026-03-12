---
title: "OrgWideEmailAddress"
domain: object-reference
topic: orgwideemailaddress
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.187Z
estimatedTokens: 508
keywords: [OrgWideEmailAddress, organization-wide, email, address, user, profiles, Calls, Special, Access, Rules, Usage]
---

# OrgWideEmailAddress

> Represents an organization-wide email address for user
            profiles.

# OrgWideEmailAddress

Represents an organization-wide email address for user profiles.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Only authenticated users with the View Setup and Configuration permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| Address | TypeemailPropertiesCreate, Filter, Sort, UpdateDescriptionAn email alias that can be used by users of your org. |
| DisplayName | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionThe name used to identify the sender of the email. |
| IsAllowAllProfiles | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, any user profile in your organization can use this object. If false, only specified user profiles can use this object when sending email. If you do not have the appropriate user profile, you can’t use this object.The default value is false.. |
| IsVerified | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the email address has been verified by its owner.The default value is false.This field is available in API version 58.0 and later.PurposePicklistPossible values are DefaultNoreply, UserSelection, UserSelectionAndDefaultNoReply |
| Purpose | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates how an email address can be used. UserSelection allows users with the correct profile to select the address as the From address for an email.Possible values are DefaultNoreply, UserSelection, UserSelectionAndDefaultNoReply. |

## Usage

This object represents an email alias to use as the From address for an email, which can be selected by users with a user profile. You can pass in the OrgWideEmailAddress ID when calling [sendEmail()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_sendemail.htm) for a SingleEmailMessage.
