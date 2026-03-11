---
title: "AddressableContact(givenName, phoneticGivenName, familyName, phoneticFamilyName, emailAddress, phoneNumber, postalAddress)"
domain: apex-reference
topic: addressablecontactgivenname-phoneticgivenname-familyname-phoneticfamilyname-emai
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.124Z
keywords: [AddressableContact, givenName, phoneticGivenName, familyName, phoneticFamilyName, emailAddress, phoneNumber, postalAddress, Creates, new, instance, RichMessaging.AddressableContact, class., Signature, Parameters]
---

# AddressableContact(givenName, phoneticGivenName, familyName, phoneticFamilyName, emailAddress, phoneNumber, postalAddress)

> Creates a new instance of the RichMessaging.AddressableContact class.

### AddressableContact(givenName, phoneticGivenName, familyName, phoneticFamilyName, emailAddress, phoneNumber, postalAddress)

Creates a new instance of the RichMessaging.AddressableContact class.

#### Signature

public AddressableContact(String givenName, String phoneticGivenName, String familyName, String phoneticFamilyName, String emailAddress, String phoneNumber, RichMessaging.PostalAddress postalAddress)

#### Parameters

givenName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The contact’s first name.

phoneticGivenName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The phonetic spelling of the contact’s first name.

familyName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The contact’s surname.

phoneticFamilyName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The phonetic spelling of the contact’s surname.

emailAddress

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The contact’s email address.

phoneNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The contact’s phone number.

postalAddress

Type: [RichMessaging.PostalAddress](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_class_RichMessaging_PostalAddress "Represents the postal address.")

The contact’s postal address.