---
title: "EmailDomainFilter"
domain: object-reference
topic: emaildomainfilter
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.331Z
estimatedTokens: 717
keywords: [EmailDomainFilter, filter, determines, whether, email, relay, restricted, specific, domains, API, version, 43.0, later, Calls, Special]
---

# EmailDomainFilter

> Represents a filter that determines whether an email relay is
			restricted to a specific list of domains. This object is available in API version
		43.0 and later.

# EmailDomainFilter

Represents a filter that determines whether an email relay is restricted to a specific list of domains. This object is available in API version 43.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

You must have the “Email Administration,” “Customize Application,” and “View Setup” user permissions to use this object.

You must create an email relay in Setup or through the [EmailRelay](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailrelay.htm "Represents the configuration for sending an email relay. An email relay routes email sent from Salesforce through your company’s email servers. This object is available in API version 43.0 and later.") object before you can use the EmailDomainFilter object.

## Fields

| Field Name | Details |
| --- | --- |
| EmailRelayId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the EmailRelay record.This is a relationship field.Relationship NameEmailRelayRelationship TypeLookupRefers ToEmailRelay |
| FromDomain | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRestricts the email relay to send emails based on the sender domains (FromDomain) listed in this field. This field is optional, accepts a list of comma-separated values, and supports the wildcard character. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the email domain filter is active (true) or not (false). Use this field to enable or disable the email domain filter. |
| PriorityNumber | TypeintPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionIndicates the order in which the email domain filter is processed. Filters are evaluated in ascending order. The priority number must be unique. If this field is left blank, it is assigned the next available number and is processed last. Processing stops after the first matching filter is applied. |
| ToDomain | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRestricts the email relay to send emails based on the recipient domains (ToDomain) listed in this field. This field is optional, accepts a list of comma-separated values, and supports the wildcard character. |

## Usage

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=object_reference)

#### Tip

If you also plan to activate Bounce Management and Email Compliance Management, confirm with your email admin that your company allows relaying email sent from Salesforce. For more information on bounce management, see [Configure Deliverability Settings for Emails Sent from Salesforce](https://help.salesforce.com/articleView?id=emailadmin_send_through_salesforce_configure_deliverability.htm&language=en_US "HTML (New Window)").

## Related Topics

- EmailRelay (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailrelay.htm)
