---
title: "GeneratedUserData(firstName, lastName, email, username, alias,
      languageLocaleKey, localesIdKey, emailEncodingKey, timeZoneSidKey)"
domain: apex-reference
topic: generateduserdatafirstname-lastname-email-username-alias-languagelocalekey-local
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.273Z
keywords: [GeneratedUserData, firstName, lastName, email, username, alias, languageLocaleKey, localesIdKey, emailEncodingKey, timeZoneSidKey, Generate, User, Data, action, Flow, Builder, uses, constructor, create, instance]
---

# GeneratedUserData(firstName, lastName, email, username, alias,
      languageLocaleKey, localesIdKey, emailEncodingKey, timeZoneSidKey)

> The Generate User Data action in Flow Builder uses this constructor to create an instance
    of the Auth.GeneratedUserData class.

### GeneratedUserData(firstName, lastName, email, username, alias, languageLocaleKey, localesIdKey, emailEncodingKey, timeZoneSidKey)

The Generate User Data action in Flow Builder uses this constructor to create an instance of the Auth.GeneratedUserData class.

#### Signature

public GeneratedUserData(String firstName, String lastName, String email, String username, String alias, String languageLocaleKey, String localesIdKey, String emailEncodingKey, String timeZoneSidKey)

#### Parameters

firstName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Stores a generated placeholder value for the user's first name. The generated value is placeholder-first-name.

lastName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Stores a generated placeholder value for the user's last name, also known as family name. The generated value is placeholder-last-name.

email

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Stores a generated placeholder value for the user's email address. The generated value is placeholder-email@example.com.

username

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Stores a generated placeholder value for the user's username. The generated value is placeholder-username<unique 14-character number>@example com, such as placeholder-username17370000000000@example com.

alias

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Stores a generated placeholder value for the user's alias. The generated value is alias.

languageLocaleKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Stores the default value for the user's language, such as en\_US for English. The default value is the language for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.

localesIdKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Stores the default value for the user's locale, defined using two-letter International Organization for Standardization (ISO) codes. For example, en\_US indicates English (United States). The default value is the language for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.

emailEncodingKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Stores the default value for the email encoding type for the user, such as UTF-8. The email encoding type determines how Salesforce encodes characters in outgoing emails. The default value is the email encoding key for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.

timeZoneSidKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Stores the default value for the user's time zone, such as GMT-07:00) Pacific Daylight Time (America/Los\_Angeles). The time zone is defined using region and key city according to ISO standards. The default value is the time zone for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.