---
title: "Hierarchy Custom Setting Methods"
domain: apex-reference
topic: hierarchy-custom-setting-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.955Z
keywords: [Hierarchy, Custom, Setting, Methods, Returns, custom, setting, data, set, record, current, user., fields, returned, merged, based, lowest, level, defined, hierarchy.]
---

# Hierarchy Custom Setting Methods

> Returns a custom setting data set record for the current user. The fields returned in
  the custom setting record are merged based on the lowest level fields that are defined in the
  hierarchy.

## Hierarchy Custom Setting Methods

The following are instance methods for hierarchy custom settings.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

-   In API version 41.0 and below, each method in an Apex test class, including testSetup methods, are able to insert hierarchy custom setting values. This behavior is true even when the methods have the same SetupOwnerId value as a hierarchy custom setting record inserted in a different test method.
-   In API version 42.0 and later, if a hierarchy custom setting is inserted in a testSetup method, inserting a hierarchy custom setting record with the same SetupOwnerId in a test method throws a DUPLICATE\_VALUE exception.

-   **[getInstance()](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_HierarchyCustomSetting_getInstance)**  
    Returns a custom setting data set record for the current user. The fields returned in the custom setting record are merged based on the lowest level fields that are defined in the hierarchy.
-   **[getInstance(userId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_HierarchyCustomSetting_getInstance_2)**  
    Returns the custom setting data set record for the specified user ID. The lowest level custom setting record and fields are returned. Use this when you want to explicitly retrieve data for the custom setting at the user level.
-   **[getInstance(profileId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_HierarchyCustomSetting_getInstance_3)**  
    Returns the custom setting data set record for the specified profile ID. The lowest level custom setting record and fields are returned. Use this when you want to explicitly retrieve data for the custom setting at the profile level.
-   **[getOrgDefaults()](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_HierarchyCustomSetting_getOrgDefaults)**  
    Returns the custom setting data set record for the organization.
-   **[getValues(userId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_HierarchyCustomSetting_getValues)**  
    Returns the custom setting data set record for the specified user ID.
-   **[getValues(profileId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_System_HierarchyCustomSetting_getValues_2)**  
    Returns the custom setting data set for the specified profile ID.

### getInstance()

Returns a custom setting data set record for the current user. The fields returned in the custom setting record are merged based on the lowest level fields that are defined in the hierarchy.

#### Signature

public CustomSetting\_\_c getInstance()

#### Return Value

Type: CustomSetting\_\_c

#### Usage

If no custom setting data is defined for the user, this method returns a new custom setting object. The new custom setting object contains an ID set to null and merged fields from higher in the hierarchy. You can add this new custom setting record for the user by using [insert](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_insert) or [upsert](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_upsert). If no custom setting data is defined in the hierarchy, the returned custom setting has empty fields, except for the SetupOwnerId field which contains the user ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For Apex saved using Salesforce API version 21.0 or earlier, this method returns the custom setting data set record with fields merged from field values defined at the lowest hierarchy level, starting with the user. Also, if no custom setting data is defined in the hierarchy, this method returns null.

This method is equivalent to a method call to getInstance(User\_Id) for the current user.

#### Example

-   Custom setting data set defined for the user: If you have a custom setting data set defined for the user “Uriel Jones,” for the profile “System Administrator,” and for the organization as a whole, and the user running the code is Uriel Jones, this method returns the custom setting record defined for Uriel Jones.
-   Merged fields: If you have a custom setting data set with fields A and B for the user “Uriel Jones” and for the profile “System Administrator,” and field A is defined for Uriel Jones, field B is null but is defined for the System Adminitrator profile, this method returns the custom setting record for Uriel Jones with field A for Uriel Jones and field B from the System Administrator profile.
-   No custom setting data set record defined for the user: If the current user is “Barbara Mahonie,” who also shares the “System Administrator” profile, but no data is defined for Barbara as a user, this method returns a new custom setting record with the ID set to null and with fields merged based on the fields defined in the lowest level in the hierarchy.

### getInstance(userId)

Returns the custom setting data set record for the specified user ID. The lowest level custom setting record and fields are returned. Use this when you want to explicitly retrieve data for the custom setting at the user level.

#### Signature

public CustomSetting\_\_c getInstance(ID userId)

#### Parameters

userId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: CustomSetting\_\_c

#### Usage

If no custom setting data is defined for the user, this method returns a new custom setting object. The new custom setting object contains an ID set to null and merged fields from higher in the hierarchy. You can add this new custom setting record for the user by using [insert](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_insert) or [upsert](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_upsert). If no custom setting data is defined in the hierarchy, the returned custom setting has empty fields, except for the SetupOwnerId field which contains the user ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For Apex saved using Salesforce API version 21.0 or earlier, this method returns the custom setting data set record with fields merged from field values defined at the lowest hierarchy level, starting with the user. Also, if no custom setting data is defined in the hierarchy, this method returns null.

### getInstance(profileId)

Returns the custom setting data set record for the specified profile ID. The lowest level custom setting record and fields are returned. Use this when you want to explicitly retrieve data for the custom setting at the profile level.

#### Signature

public CustomSetting\_\_c getInstance(ID profileId)

#### Parameters

profileId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: CustomSetting\_\_c

#### Usage

If no custom setting data is defined for the profile, this method returns a new custom setting record. The new custom setting object contains an ID set to null and with merged fields from your organization's default values. You can add this new custom setting for the profile by using [insert](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_insert) or [upsert](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_upsert). If no custom setting data is defined in the hierarchy, the returned custom setting has empty fields, except for the SetupOwnerId field which contains the profile ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For Apex saved using SalesforceAPI version 21.0 or earlier, this method returns the custom setting data set record with fields merged from field values defined at the lowest hierarchy level, starting with the profile. Also, if no custom setting data is defined in the hierarchy, this method returns null.

### getOrgDefaults()

Returns the custom setting data set record for the organization.

#### Signature

public CustomSetting\_\_c getOrgDefaults()

#### Return Value

Type: CustomSetting\_\_c

#### Usage

If no custom setting data is defined for the organization, this method returns an empty custom setting object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For Apex saved using Salesforce API version 21.0 or earlier, this method returns null if no custom setting data is defined for the organization.

### getValues(userId)

Returns the custom setting data set record for the specified user ID.

#### Signature

public CustomSetting\_\_c getValues(ID userId)

#### Parameters

userId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: CustomSetting\_\_c

#### Usage

Use this if you only want the subset of custom setting data that has been defined at the user level. For example, suppose you have a custom setting field that has been assigned a value of "alpha" at the organizational level, but has no value assigned at the user or profile level. Using getValues(UserId) returns null for this custom setting field.

### getValues(profileId)

Returns the custom setting data set for the specified profile ID.

#### Signature

public CustomSetting\_\_c getValues(ID profileId)

#### Parameters

profileId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: CustomSetting\_\_c

#### Usage

Use this if you only want the subset of custom setting data that has been defined at the profile level. For example, suppose you have a custom setting field that has been assigned a value of "alpha" at the organizational level, but has no value assigned at the user or profile level. Using getValues(ProfileId) returns null for this custom setting field.