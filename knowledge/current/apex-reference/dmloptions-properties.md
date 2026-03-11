---
title: "DmlOptions Properties"
domain: apex-reference
topic: dmloptions-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.190Z
keywords: [DmlOptions, Properties, Specifies, truncation, behavior, large, strings., allowFieldTruncation, Signature, Property, Value, Usage, assignmentRuleHeader, Note, emailHeader, localeOptions, optAllOrNone]
---

# DmlOptions Properties

> Specifies the truncation behavior of large strings.

## DmlOptions Properties

The following are properties for DmlOptions.

-   **[allowFieldTruncation](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_allowFieldTruncation)**  
    Specifies the truncation behavior of large strings.
-   **[assignmentRuleHeader](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_assignmentRuleHeader)**  
    Specifies the assignment rule to be used when creating a case or lead.
-   **[emailHeader](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_emailHeader)**  
    Specifies additional information regarding the automatic email that gets sent when an events occurs.
-   **[localeOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_localeOptions)**  
    Specifies the language of any labels that are returned by Apex.
-   **[optAllOrNone](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone)**  
    Specifies whether the operation allows for partial success.

### allowFieldTruncation

Specifies the truncation behavior of large strings.

#### Signature

public Boolean allowFieldTruncation {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

In Apex saved against API versions previous to 15.0, if you specify a value for a string and that value is too large, the value is truncated. For API version 15.0 and later, if a value is specified that is too large, the operation fails and an error message is returned. The allowFieldTruncation property allows you to specify that the previous behavior, truncation, be used instead of the new behavior in Apex saved against API versions 15.0 and later.

### assignmentRuleHeader

Specifies the assignment rule to be used when creating a case or lead.

#### Signature

public Database.DmlOptions.Assignmentruleheader assignmentRuleHeader {get; set;}

#### Property Value

Type: [Database.DMLOptions](#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.").AssignmentRuleHeader

#### Usage

DMLOption.AssignmentRuleHeader.useDefaultRule affects only the default assignment rule and does not disable other existing assignment rules on the object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The Database.DMLOptions object supports assignment rules for cases and leads, but not for accounts.

### emailHeader

Specifies additional information regarding the automatic email that gets sent when an events occurs.

#### Signature

public Database.DmlOptions.EmailHeader emailHeader {get; set;}

#### Property Value

Type: [Database.DMLOptions](#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.").EmailHeader

#### Usage

The Salesforce user interface allows you to specify whether or not to send an email when the following events occur.

-   Creation of a new case or task
-   Conversion of a case email to a contact
-   New user email notification
-   Lead queue email notification
-   Password reset

In Apex saved against API version 15.0 or later, the Database.DMLOptions emailHeader property enables you to specify additional information regarding the email that gets sent when one of the events occurs because of the code's execution.

### localeOptions

Specifies the language of any labels that are returned by Apex.

#### Signature

public Database.DmlOptions.LocaleOptions localeOptions {get; set;}

#### Property Value

Type: [Database.DMLOptions](#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.").LocaleOptions

#### Usage

The value must be a valid user locale (language and country), such as de\_DE or en\_GB. The value is a String, 2-5 characters long. The first two characters are always an ISO language code, for example 'fr' or 'en.' If the value is further qualified by a country, then the string also has an underscore (\_) and another ISO country code, for example 'US' or 'UK'. For example, the string for the United States is 'en\_US', and the string for French Canadian is 'fr\_CA'.

### optAllOrNone

Specifies whether the operation allows for partial success.

#### Signature

public Boolean optAllOrNone {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If optAllOrNone is set to true, all changes are rolled back if any record causes errors. The default for this property is false and successfully processed records are committed while records with errors aren't. If optAllOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed.

This property is available in Apex saved against Salesforce API version 20.0 and later.