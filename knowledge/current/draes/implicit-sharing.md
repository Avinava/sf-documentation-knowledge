---
title: "Implicit Sharing"
domain: draes
topic: implicit-sharing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.639Z
estimatedTokens: 994
keywords: [Implicit, Sharing, capabilities, Salesforce, Platform, include, wide, variety, features, explicitly, grant, access, data, individuals, groups]
---

# Implicit Sharing

> The sharing capabilities of the Salesforce Platform include a wide variety of
        features that you can use to explicitly grant access to data for individuals and groups. In
        addition to these more familiar features, there are a number of sharing behaviors that are
        built into Salesforce. This kind of sharing is called implicit because it’s defined and
        maintained by the system to support collaboration among members of sales teams, customer
        service representatives, and clients or customers.

# Implicit Sharing

The sharing capabilities of the Salesforce Platform include a wide variety of features that you can use to explicitly grant access to data for individuals and groups. In addition to these more familiar features, there are a number of sharing behaviors that are built into Salesforce. This kind of sharing is called implicit because it’s defined and maintained by the system to support collaboration among members of sales teams, customer service representatives, and clients or customers.

This table describes the different kinds of implicit sharing built into Salesforce applications and the record access that each kind provides.

| Type of Sharing | Provides | Details | Example |
| --- | --- | --- | --- |
| Parent | Read-only access to the parent account for a user with access to a child case, contact, or opportunity | Not used when sharing on the child is controlled by its parentExpensive to maintain with many account childrenWhen a user loses access to a child, Salesforce must check all other children to see if it can delete the implicit parent.Not granted by the View All permission on the child object | Henry is a Standard User with access to an opportunity through an owner-based sharing rule. He can view data about the opportunity’s parent account, but he can’t edit the account’s data. |
| Child | Access to child case, contact, or opportunity records for the owner of the parent account | Not used when sharing on the child is controlled by its parentControlled by child access settings for the account owner’s roleSupports account sharing rules that grant child record accessSupports account team access based on team settingsWhen a user loses access to the parent, Salesforce removes the user’s access to all children recordsNot granted by the View All permission on the parent object | Henry is a Standard User who owns an account. The Salesforce admin set up Henry’s role so that assigned users can view all opportunities, cases, and contacts associated with accounts they own. Henry can therefore view data for all of the child opportunities, cases, and contacts for the account he owns, but he can’t edit this data. |
| Experience Cloud Site | Access to a customer or partner account and all associated contacts for all customer or partner users under that account. Access to a case for the customer or partner user that’s the contact on the case. | Account and associated contacts shared with the lowest role under the customer or partner account | Sarah is a Customer Community Plus User added under the “Acme” account. Sarah has Read access to the “Acme” account as well as Read access to all the other contacts related to the account. |
| High Volume1 | Full access to data owned by high-volume users associated with a sharing set for members of the sharing set's share group | All members of the sharing set’s share group gain full access to every record owned by every high-volume user associated with that sharing set | For your site, a sharing set is created to grant high-volume users on the same account Read Only access to each other’s cases. Internal users added to the sharing set’s share group have full access to these cases. |
| High Volume Parent | Read only access to the parent account of records shared through a sharing set's share group for members of the share group | Maintains the ability to see the parent account when users are given access to account children owned by high-volume users | For your site, the same sharing set for cases mentioned in the previous example automatically gives the internal users added to the share group read access to the cases’ parent accounts. |

1To allow external users to scale into the millions, high-volume users have a streamlined sharing model that doesn’t rely on roles or groups, and functions similarly to calendar events and activities. High-volume users include the Customer Community, High Volume Customer Portal, and Authenticated Website license types.
