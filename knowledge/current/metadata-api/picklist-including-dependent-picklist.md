---
title: "Picklist (Including Dependent Picklist)"
domain: metadata-api
topic: picklist-including-dependent-picklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.733Z
estimatedTokens: 853
keywords: [Picklist, Including, Dependent, Deprecated., Represents, picklist, dependent, definition, custom, field, standard, such, account., Version, Declarative, Metadata, File, Suffix, Directory, Location]
---

# Picklist (Including Dependent Picklist)

> Deprecated. Represents a picklist (or dependent
            picklist) definition for a custom field in a custom object or a custom or standard field
            in a standard object, such as an account.

# Picklist (Including Dependent Picklist)

Deprecated. Represents a picklist (or dependent picklist) definition for a custom field in a custom object or a custom or standard field in a standard object, such as an account.

## Version

Use this type in API version 37.0 and earlier only. Picklists for custom fields in custom objects are available in API version 12.0 and later. Picklists for custom or standard fields in standard objects, such as accounts, are available in API version 16.0 and later.

In API version 38.0 and later, Picklist is replaced by [ValueSet](atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm#valueSet) on the CustomField type.

## Declarative Metadata File Suffix and Directory Location

Picklist definitions are included in the custom object and field with which they’re associated.

## Fields

Picklist contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| controllingField | string | The fullName of the controlling field if controllingField is a dependent picklist. A dependent picklist works in conjunction with a controlling picklist or checkbox to filter the available options. The value chosen in the controlling field affects the values available in the dependent field. This field is available in API version 14.0 and later. |
| picklistValues | PicklistValue[] | Required. Represents a set of values for a picklist. |
| restrictedPicklist | boolean | Indicates whether the picklist’s value list is restricted. With a restricted picklist, only an admin can add or change values; users can’t load or remove values through the API. By default this value is false.This field is available in API version 37.0 and later. |
| sorted | boolean | Indicates whether values are sorted (true), or not (false). By default this value is false. |

## Java Sample

The following sample uses a picklist. For a complete sample of using a picklist with record types and profiles, see [Profile](atlas.en-us.api_meta.meta/api_meta/meta_profile.htm "Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.").

```

```

## Declarative Metadata Sample Definition

The following sample shows usage for picklists, including dependent picklists, in a custom object. The isAmerican\_\_c checkbox controls the list of manufacturers shown in the manufacturer\_\_c picklist. The manufacturer\_\_c checkbox in turn controls the list of models shown in the model\_\_c picklist.

```

```

The following sample shows usage for the standard Stage field in opportunities.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/namedfilter.htm "NamedFilter")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_profilesearchlayouts.htm "ProfileSearchLayouts")

## Code Examples

```apex
public void setPicklistValues() {
  // Create a picklist
  Picklist expenseStatus = new Picklist();
  PicklistValue unsubmitted = new PicklistValue();
  unsubmitted.setFullName("Unsubmitted");
  PicklistValue submitted = new PicklistValue();
  submitted.setFullName("Submitted");
  PicklistValue approved = new PicklistValue();
  approved.setFullName("Approved");
  PicklistValue rejected = new PicklistValue();
  rejected.setFullName("Rejected");
  expenseStatus.setPicklistValues(new PicklistValue[]
      {unsubmitted, submitted, approved, rejected});
  
  CustomField expenseStatusField = new CustomField();
  expenseStatusField.setFullName(
      "ExpenseReport__c.ExpenseStatus__c");
  expenseStatusField.setLabel("Expense Report Status");
  expenseStatusField.setType(FieldType.Picklist);
  expenseStatusField.setPicklist(expenseStatus);
  try {
    AsyncResult[] ars =
    metadataConnection.create(new Metadata[] {expenseStatusField});
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <deploymentStatus>Deployed</deploymentStatus>
    <enableActivities>true</enableActivities>
    <fields>
        <fullName>isAmerican__c</fullName>
        <defaultValue>false</defaultValue>
        <label>American Only</label>
        <type>Checkbox</type>
    </fields>
    <fields>
        <fullName>manufacturer__c</fullName>
        <label>Manufacturer</label>
        <picklist>
            <controllingField>isAmerican__c</controllingField>
            <picklistValues>
                <fullName>Chrysler</fullName>
                <controllingFieldValues>checked</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>Ford</fullName>
                <controllingFieldValues>checked</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>Honda</fullName>
                <controllingFieldValues>unchecked</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>Toyota</fullName>
                <controllingFieldValues>unchecked</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <sorted>false</sorted>
        </picklist>
        <type>Picklist</type>
    </fields>
    <fields>
        <fullName>model__c</fullName>
        <label>Model</label>
        <picklist>
            <controllingField>manufacturer__c</controllingField>
            <picklistValues>
                <fullName>Mustang</fullName>
                <controllingFieldValues>Ford</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>Taurus</fullName>
                <controllingFieldValues>Ford</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>PT Cruiser</fullName>
                <controllingFieldValues>Chrysler</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>Pacifica</fullName>
                <controllingFieldValues>Chrysler</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>Accord</fullName>
                <controllingFieldValues>Honda</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>Civic</fullName>
                <controllingFieldValues>Honda</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>Prius</fullName>
                <controllingFieldValues>Toyota</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>Camry</fullName>
                <controllingFieldValues>Toyota</controllingFieldValues>
                <default>false</default>
            </picklistValues>
            <sorted>false</sorted>
        </picklist>
        <type>Picklist</type>
    </fields>
....
</CustomObject>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <fields>
        <fullName>StageName</fullName>
        <picklist>
            <picklistValues>
                <fullName>Prospecting</fullName>
                <default>false</default>
                <forecastCategory>Pipeline</forecastCategory>
                <probability>10</probability>
            </picklistValues>
            <picklistValues>
                <fullName>Qualification</fullName>
                <default>false</default>
                <forecastCategory>Pipeline</forecastCategory>
                <probability>10</probability>
            </picklistValues>
            <picklistValues>
                <fullName>Needs Analysis</fullName>
                <default>false</default>
                <forecastCategory>Pipeline</forecastCategory>
                <probability>20</probability>
            </picklistValues>
            ...
        </picklist>
    </fields>
<CustomObject>
```

## Related Topics

- ValueSet (atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm)
- fullName (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- Profile (atlas.en-us.api_meta.meta/api_meta/meta_profile.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/namedfilter.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_profilesearchlayouts.htm)
