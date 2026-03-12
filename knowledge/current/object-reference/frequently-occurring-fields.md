---
title: "Frequently Occurring Fields"
domain: object-reference
topic: frequently-occurring-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.129Z
estimatedTokens: 933
keywords: [Frequently, Occurring, addition, system, found, objects, OwnerId, RecordTypeId, CurrencyIsoCode]
---

# Frequently Occurring Fields

> In
      addition to system fields, these fields are found on many objects.

# Frequently Occurring Fields

In addition to system fields, these fields are found on many objects.

-   OwnerId
-   RecordTypeId
-   CurrencyIsoCode

## OwnerId

Objects have an ownerId field that is a reference to the user who owns that object. Ownership is an important concept that affects the security model and has other implications throughout the system. Any user can query the owner field for any record they can access. However, setting the ownerId field has the following limitations:

-   For most users and most objects, this field can’t be set directly upon insert. It is implicitly set to the current user when inserting an object.
-   When creating or updating a Case or Lead, a client application (that is logged in with sufficient permissions to transfer a record) can set this field to any valid User in the organization or to any valid queue of the appropriate type in the organization.
-   Updating this field via the API changes only the owner of that record. The change of ownership does not cascade to associated records as it does when you transfer record ownership in the Salesforce user interface.
-   Updating this field on an account deletes the existing sharing information and reapplies the organization-wide sharing defaults and sharing rules.
-   To update the ownerId field, the user must have the "Transfer Record" permission and Read access to the new owner.

In API version 12.0 and later, if your organization has set up opportunity teams, OwnerId fields behave the same for Account and Opportunity objects as for other objects. That is, if you update the OwnerId field in either object, any AccountShare or OpportunityShare records with RowCause set to Sales Team are kept. In API version 11.0 and earlier, the sharing records are deleted.

## RecordTypeId

Record types are used to offer different business processes and subsets of picklist values to different User records based on their Profile settings. (In addition, person accounts use record types to manage a number of additional elements.

Record types are configured in the user interface or by creating, editing, or deleting the RecordType object in the API. Retrieve the list of valid record type IDs (String) for an object by querying the RecordType object.

The RecordTypeId field in an object contains the ID of the RecordType record that is associated with a standard or custom object. You can create or update this field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can’t create or update the RecordTypeId field on the CampaignMember records. Set the CampaignMember record type using the CampaignMemberRecordTypeId field on Campaign.

When specified in a create or update call, the record type ID (String) must refer to a valid record type for that object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The RecordTypeId field is in your organization’s WSDL only if at least one record type is configured for your organization in the Salesforce user interface.

## CurrencyIsoCode

For organizations that have multicurrency enabled, the CurrencyIsoCode field contains the string representation of the currency ISO code associated with currency values in the object. Note that the User object also has a DefaultCurrencyIsoCode field, which is the default currency for that user. For example, a user in France could have a DefaultCurrencyIsoCode set to Euros, and that would be their default currency in the application. However, the User object could have currency custom fields stored in a different currency, that correspond to the organization currency at the time the user record is created.
