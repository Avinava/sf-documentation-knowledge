---
title: "GetAccountsAndContacts Class"
domain: psc-api
topic: getaccountsandcontacts-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.581Z
estimatedTokens: 760
namespace: PublicSectrSltn
keywords: [GetAccountsAndContacts, person, accounts, business, contacts, Special, Access, Rules, Usage, invokeMethod, methodName, input, output, options]
---

# GetAccountsAndContacts Class

> This class contains a method that returns a list of the person accounts, business
    accounts, and contacts.

**Namespace:** `PublicSectrSltn`

# GetAccountsAndContacts Class

This class contains a method that returns a list of the person accounts, business accounts, and contacts.

## Namespace

[PublicSectrSltn](atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm "The PublicSectrSltn namespace provides classes for Public Sector Solutions.")

## Special Access Rules

Case Referral and Complaints Management Access permission sets are required to use this Apex class. Person Accounts must be enabled to retrieve the person accounts.

## Usage

The GetAccountsAndContacts class is implemented in the Case Participants section of the Create a Referral Case page in OmniScript.

Specify the Apex class name in the Remote Actions section of the OmniScript page. A Remote Action calls the specified Apex class and its method to retrieve the accounts and contacts.

This screenshot shows how to specify the Apex class name in Remote Actions:

![A representation of Remote Actions in OmniScript in your Salesforce org.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Freference%2Fns_PublicSectrSltn%2Fimages%2Fpsc-get-accounts-and-contacts.png&folder=psc_api)

-   **[GetAccountsAndContacts Methods](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_GetAccountsAndContacts.htm#apex_publicsectrsltn_GetAccountsAndContacts_methods)**


## GetAccountsAndContacts Methods

The following are methods for GetAccountsAndContacts.

-   **[invokeMethod(methodName, input, output, options)](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_GetAccountsAndContacts.htm#apex_publicsectrsltn_GetAccountsAndContacts_invokeMethod)**
    Returns a list of person accounts, business accounts, and contacts based on the specified first name, last name, and city. The method performs a partial or full search based on the input to return the list that matches the criteria.

### invokeMethod(methodName, input, output, options)

Returns a list of person accounts, business accounts, and contacts based on the specified first name, last name, and city. The method performs a partial or full search based on the input to return the list that matches the criteria.

#### Signature

public static Boolean invokeMethod(String methodName, Map<String,ANY> input, Map<String,ANY> output, Map<String,ANY> options)

#### Parameters

methodName

Type: String

Reserved for future use.

input

Type: Map<String,ANY>

Reserved for future use.

output

Type: Map<String,ANY>

Contains the list of person accounts, business accounts, and contacts that are returned by the method.

options

Type: Map<String,ANY>

Contains partial or full search terms to find for the matched person accounts, business accounts, and contacts.

Valid search terms for accounts and contacts:

-   BusinessAccount—Name and ShippingCity
-   Contact—FirstName, LastName, and MailingCity
-   PersonAccount—FirstName, LastName, and ShippingCity

#### Return Value

Type: Boolean

Returns a Boolean value indicating whether the method returned the list of accounts and contacts (true) or not (false).

## Related Topics

- PublicSectrSltn (atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm)
- GetAccountsAndContacts Methods (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_GetAccountsAndContacts.htm)
- invokeMethod(methodName, input, output, options) (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_GetAccountsAndContacts.htm)
