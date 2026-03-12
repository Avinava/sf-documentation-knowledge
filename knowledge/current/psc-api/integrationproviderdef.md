---
title: "IntegrationProviderDef"
domain: psc-api
topic: integrationproviderdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.216Z
estimatedTokens: 1484
keywords: [IntegrationProviderDef, integration, definition, associated, service, process, Stores, data, Industries, Send, Apex, Async, External, invocable, actions]
---

# IntegrationProviderDef

> Represents an integration definition associated with a service process. Stores data for
		the Industries: Send Apex Async Request and Industries: Send External Async Request
		invocable actions.

# IntegrationProviderDef

Represents an integration definition associated with a service process. Stores data for the Industries: Send Apex Async Request and Industries: Send External Async Request invocable actions.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

IntegrationProviderDef components have the suffix .integrationProviderDefinition and are stored in the .integrationProviderDefinition folder.

## Version

IntegrationProviderDef components are available in API version 57.0 and later.

## Special Access Rules

Access to the IntegrationProviderDef type requires the AccessToServiceProcess permission.

## Fields

| Field Name | Description |
| --- | --- |
| active | Field TypebooleanDescriptionSpecifies whether this Integration Definition is active. The default is false. |
| apexClass | Field TypestringDescriptionThe custom Apex class that the related Industries: Send Apex Async Request invocable action invokes. Specify either apexClass or fileBasedApexClass but not both. Applies only if the type is Apex. |
| description | Field TypestringDescriptionA meaningful explanation of the Integration Definition. |
| developerName | Field TypestringDescriptionRequired.A system name for the Integration Definition. |
| externalServiceOperationName | Field TypestringDescriptionThe external service operation that the related Industries: Send External Async Request invocable action invokes. Applies only if the type is LowCode. |
| externalServiceRegistration | Field TypestringDescriptionThe external service that the related Industries: Send External Async Request invocable action invokes. Applies only if the type is LowCode. |
| fileBasedApexClass | Field TypestringDescriptionThe Salesforce-provided Apex class that the related Industries: Send Apex Async Request invocable action invokes. Specify either apexClass or fileBasedApexClass but not both. Applies only if the type is Apex. |
| fileBasedExternalService | Field TypestringDescriptionThe Salesforce-provided external service that the Integration Definition invokes. This field is used for packaged or system-provided external service integrations. Applies only if the type is LowCode.Available in API version 64.0 and later. |
| fileBasedInputDataProcessor | Field TypestringDescriptionThe Salesforce-provided Integration Procedure that processes the specified data. This field references packaged or system-provided data processors. Applies only if the type is LowCode.Available in API version 64.0 and later. |
| fileBasedOmniUiCard | Field TypestringDescriptionThe Salesforce-provided OmniStudio UI Card that's associated with this Integration Definition. This enables packaged UI components for integration configuration.Available in API version 64.0 and later. |
| fileBasedOutputDataProcessor | Field TypestringDescriptionThe Salesforce-provided Integration Procedure that processes the returned data. This field references packaged or system-provided output processors. Applies only if the type is LowCode.Available in API version 64.0 and later. |
| inputDataProcessor | Field TypestringDescriptionThe optional Integration Procedure that processes the sent data. Applies only if the type is LowCode. |
| integrationProviderAttributes | Field TypeIntegrationProviderAttr[]DescriptionCustom attributes that store data associated with an Integration Definition. |
| javaClassName | Field TypestringDescriptionName of the Java class that the Integration Definition invokes. Applies only if the type is Java.Available in API version 59.0 and later. |
| outputDataProcessor | Field TypestringDescriptionThe optional Integration Procedure that processes the returned data. Applies only if the type is LowCode. |
| providerLabel | Field TypestringDescriptionRequired.A meaningful name for the Integration Definition. |
| type | Field TypeDefinitionType (enumeration of type string)DescriptionRequired.What the Integration Definition calls, either an Apex class or an external service.Values are:ApexJavaLowCode |

## IntegrationProviderAttr

A custom attribute that stores data associated with an Integration Definition.

| Field Name | Description |
| --- | --- |
| dataType | Field TypeAttrDataType (enumeration of type string)DescriptionRequired.The data type of the attribute.Values are:DateDateTimeDoubleIntegerPercentageStringBoolean |
| dateTimeValue | Field TypedateTimeDescriptionThe value of the attribute if the dataType is DateTime. |
| dateValue | Field TypedateDescriptionThe value of the attribute if the dataType is Date. |
| description | Field TypestringDescriptionA meaningful explanation of the attribute. |
| developerName | Field TypestringDescriptionRequired.A system name for the attribute. |
| doubleValue | Field TypedoubleDescriptionThe value of the attribute if the dataType is Double. |
| integerValue | Field TypeintDescriptionThe value of the attribute if the dataType is Integer. |
| label | Field TypestringDescriptionRequired.A meaningful name for the attribute. |
| percentageValue | Field TypedoubleDescriptionThe value of the attribute if the dataType is Percentage. |
| required | Field TypebooleanDescriptionRequired.Specifies whether the attribute is required. |
| stringValue | Field TypestringDescriptionThe value of the attribute if the dataType is String. |
| trueOrFalseValue | Field TypebooleanDescriptionThe value of the attribute if the dataType is Boolean. |

## Declarative Metadata Sample Definition

The following is an example of an IntegrationProviderDef component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IntegrationProviderDef xmlns="http://soap.sforce.com/2006/04/metadata">
   <developerName>EmailUpdate</developerName>
   <providerLabel>EmailUpdate</providerLabel>
   <type>Apex</type>
   <apexClass>SendEmailUpdate</apexClass>
   <integrationProviderAttributes>
      <developerName>EmailAddress</developerName>
      <label>EmailAddress</label>
      <dataType>String</dataType>
      <stringValue>person@example.com</stringValue>
      <required>true</required>
   </integrationProviderAttributes>
</IntegrationProviderDef>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>IntegrationProviderDef</name>
    </types>
    <version>57.0</version>
</Package>
```
