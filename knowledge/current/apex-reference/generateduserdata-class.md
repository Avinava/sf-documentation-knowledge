---
title: "GeneratedUserData Class"
domain: apex-reference
topic: generateduserdata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.195Z
estimatedTokens: 3468
namespace: Auth
keywords: [GeneratedUserData, Stores, output, Generate, User, Data, invocable, action, access, Flow, Builder, Usage, firstName, lastName, email]
---

# GeneratedUserData Class

> Stores the output of the Generate User Data invocable action, which you can access in
    Flow Builder.

**Namespace:** `Auth`

# GeneratedUserData Class

Stores the output of the Generate User Data invocable action, which you can access in Flow Builder.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

For single sign-on (SSO) implementations that use the authentication provider framework, you must set up a registration handler that creates and updates users who log in via the identity provider. In some cases, the identity provider doesn't return enough information to create a user record in Salesforce. If you use Flow Builder for your registration handler, you can use the Generate User Data invocable action to help you create complete user records. This action generates placeholder data for all required fields for the User object.

The Auth.GeneratedUserData class stores the output of this action. Use the output as an Apex-defined variable in the flow. When you create a user, reference specific properties from this class to set values for required fields.

For more information, see these resources in Salesforce Help.

-   [Flow Core Action: Generate User Data](http://platform.flow_ref_elements_actions_generate_user_data.htm)
-   [Example: Authentication Provider Registration Handler Flow](https://help.salesforce.com/s/articleView?id=xcloud.sso_flow_registration_handler_example.htm&language=en_US)

-   **[GeneratedUserData Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_constructors)**

-   **[GeneratedUserData Properties](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_properties)**


## GeneratedUserData Constructors

The following are constructors for GeneratedUserData.

-   **[GeneratedUserData(firstName, lastName, email, username, alias, languageLocaleKey, localesIdKey, emailEncodingKey, timeZoneSidKey)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_ctor)**
    The Generate User Data action in Flow Builder uses this constructor to create an instance of the Auth.GeneratedUserData class.

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

## GeneratedUserData Properties

The following are properties for GeneratedUserData.

-   **[alias](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_alias)**
    Stores a generated placeholder value for the user's alias. The placeholder value is alias.
-   **[email](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_email)**
    Stores a generated placeholder value for the user's email address. The placeholder value is placeholder-email@example.com.
-   **[emailEncodingKey](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_emailEncodingKey)**
    Stores the default value for the email encoding type for the user, such as UTF-8. The email encoding type determines how Salesforce encodes characters in outgoing emails. The default value is the email encoding key for the execution user specified in the Run As field in the authentication provider definition.
-   **[firstName](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_firstName)**
    Stores a generated placeholder value for the user's first name. The placeholder value is placeholder-first-name.
-   **[languageLocaleKey](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_languageLocaleKey)**
    Stores the default value for the user's language, such as en\_US for English. The default value is the language for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.
-   **[lastName](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_lastName)**
    Stores a generated placeholder value for the user's last name, also known as family name. The placeholder value is placeholder-last-name.
-   **[localesIdKey](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_localesIdKey)**
    Stores the default value for the user's locale, defined using two-letter International Organization for Standardization (ISO) codes. For example, en\_US indicates English (United States). The default value is the language for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.
-   **[timeZoneSidKey](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_timeZoneSidKey)**
    Stores the default value for the user's time zone, such as (GMT-07:00) Pacific Daylight Time (America/Los\_Angeles). The time zone is defined using region and key city according to ISO standards. The default value is the time zone for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.
-   **[username](atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm#apex_Auth_GeneratedUserData_username)**
    Stores a generated placeholder value for the user's username. The placeholder value is placeholder-username<unique 14-character number>@example com, such as placeholder-username17370000000000@example com.

### alias

Stores a generated placeholder value for the user's alias. The placeholder value is alias.

#### Signature

public String alias {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### email

Stores a generated placeholder value for the user's email address. The placeholder value is placeholder-email@example.com.

#### Signature

public String email {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### emailEncodingKey

Stores the default value for the email encoding type for the user, such as UTF-8. The email encoding type determines how Salesforce encodes characters in outgoing emails. The default value is the email encoding key for the execution user specified in the Run As field in the authentication provider definition.

#### Signature

public String emailEncodingKey {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### firstName

Stores a generated placeholder value for the user's first name. The placeholder value is placeholder-first-name.

#### Signature

public String firstName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### languageLocaleKey

Stores the default value for the user's language, such as en\_US for English. The default value is the language for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.

#### Signature

public String languageLocaleKey {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lastName

Stores a generated placeholder value for the user's last name, also known as family name. The placeholder value is placeholder-last-name.

#### Signature

public String lastName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### localesIdKey

Stores the default value for the user's locale, defined using two-letter International Organization for Standardization (ISO) codes. For example, en\_US indicates English (United States). The default value is the language for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.

#### Signature

public String localesIdKey {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### timeZoneSidKey

Stores the default value for the user's time zone, such as (GMT-07:00) Pacific Daylight Time (America/Los\_Angeles). The time zone is defined using region and key city according to ISO standards. The default value is the time zone for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.

#### Signature

public String timeZoneSidKey {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### username

Stores a generated placeholder value for the user's username. The placeholder value is placeholder-username<unique 14-character number>@example com, such as placeholder-username17370000000000@example com.

#### Signature

public String username {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- GeneratedUserData Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm)
- GeneratedUserData Properties (atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm)
- GeneratedUserData(firstName, lastName, email, username, alias, languageLocaleKey, localesIdKey, emailEncodingKey, timeZoneSidKey) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- alias (atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm)
- email (atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm)
- emailEncodingKey (atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm)
- firstName (atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm)
- languageLocaleKey (atlas.en-us.apexref.meta/apexref/apex_class_Auth_GeneratedUserData.htm)
