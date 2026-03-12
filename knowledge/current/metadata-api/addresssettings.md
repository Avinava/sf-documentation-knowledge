---
title: "AddressSettings"
domain: metadata-api
topic: addresssettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:36.651Z
estimatedTokens: 1813
keywords: [AddressSettings, Represents, configuration, country, territory, state, picklists., component, configure, data, organization, convert, text-based, values, standard, picklist, values., Setup, enter, State]
---

# AddressSettings

> Represents the configuration of country/territory
      and state picklists. Use the AddressSettings component type to configure state and
    country/territory data in your organization so that you can convert text-based values into
    standard picklist values. To convert your state and country/territory values, from Setup, enter
      State and Country/Territory Picklists in the Quick Find box, then
    select State and Country/Territory Picklists.

# AddressSettings

Represents the configuration of country/territory and state picklists. Use the AddressSettings component type to configure state and country/territory data in your organization so that you can convert text-based values into standard picklist values. To convert your state and country/territory values, from Setup, enter State and Country/Territory Picklists in the Quick Find box, then select **State and Country/Territory Picklists**.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## Declarative Metadata File Suffix and Directory Location

AddressSettings values are stored in a single file named Address.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

AddressSettings is available in API versions 27.0 and later.

## Salesforce CLI Usage

When working with the Salesforce CLI, use the metadata type Settings:Address to deploy or retrieve address settings.

## CountriesAndStates

This complex metadata type represents valid definitions of states and countries/territories in picklists.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can use the Metadata API to edit existing states, countries, and territories in state and country/territory picklists. You can’t use the Metadata API to create or delete new states, countries, or territories.

| Field | Field Type | Description |
| --- | --- | --- |
| countries | Country[] | The countries and territories available in picklists. |

## Country

This metadata type provides the definition for a country/territory in a picklist.

| Field | Field Type | Description |
| --- | --- | --- |
| active | boolean | Determines whether the value is available in the API.ImportantAfter you enable state and country/territory picklists in your Salesforce organization, you can’t set the active status to false. |
| integrationValue | string | A customizable text value that is linked to a state or country/territory code. Integration values for standard states, countries, and territories default to the full ISO-standard state, country, and territory names. Integration values function similarly to the API names of custom fields and objects. Configuring integration values allows integrations that you set up before enabling state and country/territory picklists to continue to work.ImportantIf you don’t specify integration values before enabling state and country/territory picklists in your organization, records use the default value provided by Salesforce. If you change integration values later, records created or updated from that point on use your edited values. |
| isoCode | string | The ISO-standard code populates this field when you issue a retrieve() call. This field is read only in the API but you can edit the label in Setup. You can’t edit the isoCode of standard states, countries, and territories. |
| label | string | The label is what users see in picklists in Salesforce. This field is read only in the API but you can edit the label in Setup. |
| orgDefault | boolean | Sets a country or territory as the default value for new records in the Salesforce organization. |
| standard | boolean | Standard states and countries are states and countries that are included with Salesforce. You can’t edit the standard attribute. |
| states | State[] | The states or provinces that are part of the country or territory. |
| visible | boolean | Makes the state, country, or territory available to users in Salesforce. States, countries, or territories that are visible must also be active. |

## State

This metadata type provides the definition for a state in a picklist.

| Field | Field Type | Description |
| --- | --- | --- |
| active | boolean | Determines whether the value is available in the API.ImportantAfter you enable state and country/territory picklists in your Salesforce organization, you can’t set the active status to false. |
| integrationValue | string | A customizable text value that is linked to a state or country/territory code. Integration values for standard states, countries, and territories default to the full ISO-standard state, country, and territory names. Integration values function similarly to the API names of custom fields and objects. Configuring integration values allows integrations that you set up before enabling state and country/territory picklists to continue to work.ImportantIf you don’t specify integration values before enabling state and country/territory picklists in your organization, records use the default value provided by Salesforce. If you change integration values later, records created or updated from that point on use your edited values. |
| isoCode | string | The ISO-standard code populates this field when you issue a retrieve() call. This field is read only in the API but you can edit the label in Setup. |
| label | string | The label is what users see in picklists in Salesforce. This field is read only in the API but you can edit the label in Setup. |
| standard | boolean | Standard states and countries are states and countries that are included with Salesforce. You can’t edit the standard attribute. |
| visible | boolean | Makes the state, country, or territory available to users in Salesforce. States, countries, or territories that are visible must also be active. |

## Declarative Metadata Sample Definition

The following is sample XML that configures state and country picklists for the United States and Canada for use in an organization. It also makes the country of Greenland available only in the API. This example is supported in API version 66.0.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AddressSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <countriesAndStates>
    <countries>
      <country>
        <active>true</active>
        <integrationValue>United States</integrationValue>
        <isoCode>US</isoCode>
        <label>United States</label>
        <orgDefault>true</orgDefault>
        <standard>true</standard>
        <states>
          <state>
            <active>true</active>
            <integrationValue>Alabama</integrationValue>
            <isoCode>AL</isoCode>
            <label>Alabama</label>
            <standard>true</standard>
            <visible>true</visible>
          </state>
          <state>
            <active>true</active>
            <integrationValue>Alaska</integrationValue>
            <isoCode>AK</isoCode>
            <label>Alaska</label>
            <standard>true</standard>
            <visible>true</visible>
          </state>
        </states>
        <visible>true</visible>
      </country>
      <country>
        <active>true</active>
        <integrationValue>Canada</integrationValue>
        <isoCode>CA</isoCode>
        <label>Canada</label>
        <orgDefault>false</orgDefault>
        <states>
          <state>
            <active>true</active>
            <integrationValue>Alberta</integrationValue>
            <isoCode>AB</isoCode>
            <label>Alberta</label>
             <standard>true</standard>
             <visible>true</visible>
          </state>
          <state>
            <active>true</active>
            <integrationValue>British Columbia</integrationValue>
            <isoCode>BC</isoCode>
            <label>British Columbia</label>
            <standard>true</standard>
            <visible>true</visible>
          </state>
        </states>
        <visible>true</visible>
      </country>
      <country>
        <active>true</active>
        <integrationValue>Greenland</integrationValue>
        <isoCode>GL</isoCode>
        <label>Greenland</label>
        <standard>true</standard>
        <visible>false</visible>
      </country>
    </countries>
  </countriesAndStates>
</AddressSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
