---
title: "ForecastingObjectListSettings"
domain: metadata-api
topic: forecastingobjectlistsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.788Z
keywords: [ForecastingObjectListSettings, File, Suffix, Directory, Location, Version, Note, Fields, ForecastingTypeObjectListSettings, ForecastingObjectListLabelMapping, forecastingObjectListSelectedSettings, forecastingObjectListUnselectedSettings, Declarative, Metadata, Sample, Definition, Example, Package, Manifest, Wildcard]
---

# ForecastingObjectListSettings

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