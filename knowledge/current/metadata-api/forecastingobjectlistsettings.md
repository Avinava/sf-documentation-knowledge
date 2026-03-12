---
title: "ForecastingObjectListSettings"
domain: metadata-api
topic: forecastingobjectlistsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.087Z
estimatedTokens: 1230
keywords: [ForecastingObjectListSettings, Represents, org’s, forecasting, list, settings., settings, control, which, types, field, appear, details, forecasts, page., example, pipeline, Opportunity, specify, fields]
---

# ForecastingObjectListSettings

> Represents an org’s
			forecasting object list settings. Use these settings to control which object types and
			field types appear in the list of object details on the forecasts page. For
		example, pipeline forecasts use the Opportunity object, and the object list settings specify
		which fields from that object are available in the opportunity list section of the forecasts
		page. This type extends the Metadata metadata type and inherits its
                        fullName field.

# ForecastingObjectListSettings

Represents an org’s forecasting object list settings. Use these settings to control which object types and field types appear in the list of object details on the forecasts page. For example, pipeline forecasts use the Opportunity object, and the object list settings specify which fields from that object are available in the opportunity list section of the forecasts page. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

ForecastingObjectListSettings values are stored in the ForecastingObjectList.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

ForecastingObjectListSettings is available in API versions 52.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The information in this topic applies only to forecast types created in Summer ’21 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| forecastingTypeObjectListSettings | ForecastingTypeObjectListSettings | For each forecast type, specifies the information that is displayed in the list of object details that roll up into the forecasts. For example, the list of opportunities rolls up into opportunity-based forecasts. |

## ForecastingTypeObjectListSettings

Represents an org’s forecasting type object list settings.

| Field Name | Field Type | Description |
| --- | --- | --- |
| forecastingObjectListLabelMappings | ForecastingObjectListLabelMapping | Mapping of labels with each field displayed as a column in the object detail list on the forecasts page. |
| forecastingObjectListSelectedSettings | forecastingObjectListSelectedSettings | Specifies the object fields that are used as columns in the object detail list on the forecasts page. |
| forecastingObjectListUnselectedSettings | forecastingObjectListUnselectedSettings | Lists the object fields that are available but not currently used as columns in the object detail list on the forecasts page. Changes to forecastingObjectListSelectedSettings field are reflected in this field. |
| forecastingTypeDeveloperName | string | Developer name of the forecast type that these object list settings apply to. |

## ForecastingObjectListLabelMapping

Represents an org’s forecasting type object list label mapping.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Object field’s API name. |
| label | string | Object field’s name in the object detail list on the forecasts page. |

## forecastingObjectListSelectedSettings

Represents an org’s forecasting type object list selected settings.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Object field’s API name. |

## forecastingObjectListUnselectedSettings

Represents an org’s forecasting type object list unselected settings.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Object field’s API name. |

## Declarative Metadata Sample Definition

The following is an example of the ForecastingObjectListSettings.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the ForecastingObjectListSettingsSettings settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ForecastingObjectListSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <forecastingTypeObjectListSettings>
        <forecastingObjectListLabelMappings>
            <field>CREATEDBY_USER.ALIAS</field>
            <label>Created By Alias</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.AMOUNT</field>
            <label>Amount</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.CLOSE_DATE</field>
            <label>Close Date</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.TYPE</field>
            <label>Type</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.CREATED_DATE</field>
            <label>Created Date</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.LAST_UPDATE</field>
            <label>Last Modified Date</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.LEAD_SOURCE</field>
            <label>Lead Source</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.EXP_AMOUNT</field>
            <label>Expected Revenue</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.CLOSED</field>
            <label>Closed</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.WON</field>
            <label>Won</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>00Nxx000001G2W0</field>
            <label>CustomOppCurr</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>CORE.USERS.ALIAS</field>
            <label>Opportunity Owner Alias</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.PROBABILITY</field>
            <label>Probability (%)</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.LAST_ACTIVITY</field>
            <label>Last Activity</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.FISCAL_QUARTER</field>
            <label>Fiscal Quarter</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>00Nxx000001G8GS</field>
            <label>TaraTestOppCurr</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>DESCRIPTION</field>
            <label>Description</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.FISCAL_PERIOD</field>
            <label>Fiscal Period</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>FULL_NAME</field>
            <label>Owner Full Name</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.NEXT_STEP</field>
            <label>Next Step</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>UPDATEDBY_USER.ALIAS</field>
            <label>Last Modified By Alias</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.STAGE_NAME</field>
            <label>Stage</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>CONTRACT.NAME</field>
            <label>Contract Name</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.QUANTITY</field>
            <label>Quantity</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>SPLITAMOUNT</field>
            <label>Forecasted Amount</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.NAME</field>
            <label>Opportunity Name</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>CORE.USERS.LAST_NAME</field>
            <label>Owner Last Name</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.FISCAL_YEAR</field>
            <label>Fiscal Year</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>TERR2_NAME</field>
            <label>Territory Name</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>CORE.USERS.FIRST_NAME</field>
            <label>Owner First Name</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>ACCOUNT.SITE</field>
            <label>Account Site</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>ACCOUNT.NAME</field>
            <label>Account Name</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>OPPORTUNITY.PRIVATE</field>
            <label>Private</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>TERR2_DESC</field>
            <label>Territory Description</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>CONTRACT.CONTRACT_NUMBER</field>
            <label>Contract Number</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListLabelMappings>
            <field>FORECAST_CATEGORY</field>
            <label>Forecast Category</label>
        </forecastingObjectListLabelMappings>
        <forecastingObjectListSelectedSettings>
            <field>OPPORTUNITY.NAME</field>
        </forecastingObjectListSelectedSettings>
        <forecastingObjectListUnselectedSettings>
            <field>ACCOUNT.NAME</field>
            <field>CONTRACT.CONTRACT_NUMBER</field>
            <field>CONTRACT.NAME</field>
            <field>OPPORTUNITY.STAGE_NAME</field>
            <field>FORECAST_CATEGORY</field>
            <field>OPPORTUNITY.CLOSE_DATE</field>
            <field>OPPORTUNITY.AMOUNT</field>
            <field>CORE.USERS.ALIAS</field>
            <field>CORE.USERS.FIRST_NAME</field>
            <field>CORE.USERS.LAST_NAME</field>
            <field>FULL_NAME</field>
            <field>OPPORTUNITY.PROBABILITY</field>
            <field>DESCRIPTION</field>
            <field>OPPORTUNITY.EXP_AMOUNT</field>
            <field>OPPORTUNITY.LEAD_SOURCE</field>
            <field>OPPORTUNITY.NEXT_STEP</field>
            <field>OPPORTUNITY.PRIVATE</field>
            <field>OPPORTUNITY.QUANTITY</field>
            <field>OPPORTUNITY.TYPE</field>
            <field>UPDATEDBY_USER.ALIAS</field>
            <field>CREATEDBY_USER.ALIAS</field>
            <field>OPPORTUNITY.CLOSED</field>
            <field>OPPORTUNITY.WON</field>
            <field>ACCOUNT.SITE</field>
            <field>OPPORTUNITY.FISCAL_YEAR</field>
            <field>OPPORTUNITY.FISCAL_QUARTER</field>
            <field>OPPORTUNITY.FISCAL_PERIOD</field>
            <field>OPPORTUNITY.LAST_ACTIVITY</field>
            <field>OPPORTUNITY.CREATED_DATE</field>
            <field>OPPORTUNITY.LAST_UPDATE</field>
            <field>SPLITAMOUNT</field>
            <field>00Nxx000001G2W0</field>
            <field>00Nxx000001G8GS</field>
            <field>TERR2_NAME</field>
            <field>TERR2_DESC</field>
        </forecastingObjectListUnselectedSettings>
        <forecastingTypeDeveloperName>OpportunityLineItemRevenue</forecastingTypeDeveloperName>
    </forecastingTypeObjectListSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>ForecastingObjectListSettings</members>
		<name>Settings</name>
	</types>
	<version>52.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
