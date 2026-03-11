---
title: "Site Class"
domain: apex-reference
topic: site-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.532Z
keywords: [Site, Class, Indicates, whether, given, password, meets, requirements, specified, org-wide, profile-based, policies, current, user’s, org., validatePassword, user, confirmPassword, Signature, Parameters]
---

# Site Class

> Indicates whether a given password meets the requirements specified
      by org-wide or profile-based password policies in the current user’s org.

### validatePassword(user, password, confirmPassword)

Indicates whether a given password meets the requirements specified by org-wide or profile-based password policies in the current user’s org.

#### Signature

public static void validatePassword(SObject user, String password, String confirmPassword)

#### Parameters

user

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The user attempting to create a password during self-registration for a Salesforce Site or Experience Cloud site.

password

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The password entered by the user.

confirmPassword

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The password reentered by the user to confirm the password.

#### Return Value

Type: void

#### Usage

If validation fails when the method is run in a Lightning controller, this method throws an Apex exception describing the failed validation. If validation fails when the method is run in a Visualforce controller, the method provides Visualforce error messages.