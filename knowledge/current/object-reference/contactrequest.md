---
title: "ContactRequest"
domain: object-reference
topic: contactrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.964Z
estimatedTokens: 1659
keywords: [ContactRequest, customer’s, support, back, issue, API, version, 45.0, later, Calls, Usage, Associated, Objects]
---

# ContactRequest

> Represents a customer’s request for support to get back to them about
			an issue. This object is available in API version 45.0 and later.

# ContactRequest

Represents a customer’s request for support to get back to them about an issue. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AvailableCallbackAttempts | TypeintegerPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the number of retries that are possible for a voice callback. Applies to calls routed through Omni-Channel Unified Routing. Valid values are 0 through 5. The default is 0.Available in API version 66.0 and later. |
| DelayBetweenCallbackAttempts | TypeintegerPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the delay between voice callback attempts in minutes. Applies to calls routed through Omni-Channel Unified Routing. Valid values are 0 through 10,080, and the default is 0.Available in API version 66.0 and later. |
| IsCallback | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines how a voice call callback is handled after an agent accepts the callback work item.If set to true, when an agent accepts the work item, the Omni-Channel utility doesn’t immediately dial the callback phone number. Instead, the agent can determine how to handle the call. For example, after the agent accepts the work item, they can view the callback details, transfer the call, or contact the end user at another phone number. If the agent makes a call by using click-to-dial, the call appears as a Callback call in the Omni-Channel utility.If set to false, when the agent accepts the work item in the Omni-Channel utility, the contact request is opened. The agent can review callback details. If they call with click-to-dial, the call appears as an Outbound call in the Omni-Channel utility.The default value is false. Available in API version 60.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe contact request number. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the Salesforce record that owns the request.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreferredChannel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe channel the customer selected as their preferred method of communication in the contact request flow. For example:Phone |
| PreferredPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number the customer provided when requesting help in the contact request flow. |
| RequestDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the customer’s issue that they provided when requesting help in the contact request flow. |
| RequestReason | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason the customer provided when requesting help in the contact request flow. These values are customizable in Object Manager. The default values are:AccountBillingCaseGeneralOrderOtherProduct |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe status of the contact request. For example:AbandonedAttemptedContactedNew |
| WhatId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Salesforce record the contact request is related to, such as an account, case, opportunity, voice call, or work order.This is a polymorphic relationship field.Relationship NameWhatRelationship TypeLookupRefers ToAccount, Case, Contact Request, Opportunity, WorkOrder |
| WhoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Salesforce contact record the contact request is related to, such as a contact, lead, or user.This is a polymorphic relationship field.Relationship NameWhoRelationship TypeLookupRefers ToContact, Lead, User |

## Usage

Contact request records are created when a customer fills out an online form. This form is created using a flow that uses the type ContactRequestFlow. There’s a guided setup experience to create this flow on the Customer Contact Requests page in Setup. You then add the flow to an Experience Cloud site using either the Flows component or the Contact Request Button & Flow component.

Contact Request works in Experience Cloud sites, whether they require authentication or not. Make sure that your users have the Run Flows permission, including your Guest User profile. Without this permission, members won’t see the button or the form to submit contact requests.

By default, all Standard User and System Administrator profiles have access to the object. Make sure that your users profiles, like service agents, have at least read access on the contact request object.

You can create queues for contact requests and route them with Omni-Channel.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ContactRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ContactRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [*Salesforce Help*: Set Up and Manage Contact Requests](https://help.salesforce.com/articleView?id=contact_request.htm&language=en_US "
    Salesforce Help: Set Up and Manage Contact Requests - HTML (New Window)")

## Related Topics

- ContactRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ContactRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
