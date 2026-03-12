---
title: "Migrate Platform Event Definitions with Metadata API"
domain: platform-events
topic: migrate-platform-event-definitions-with-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.867Z
estimatedTokens: 346
keywords: [Migrate, Platform, Event, Definitions, Metadata, API, Deploy, retrieve, sandbox, production, org, part, app’s, development, life]
---

# Migrate Platform Event Definitions with Metadata API

> Deploy and retrieve platform event definitions from your sandbox and production org
        as part of your app’s development life cycle.

# Migrate Platform Event Definitions with Metadata API

Deploy and retrieve platform event definitions from your sandbox and production org as part of your app’s development life cycle.

The CustomObject metadata type represents a platform event.

Platform event names are appended with \_\_e. The file that contains the platform event definition has the suffix .object. Platform events are stored in the objects folder.

## Example

Here is a definition of a platform event with a number field and two text fields.

```

```

The eventType field specifies the platform event volume. Only the HighVolume value is supported. The StandardVolume value is deprecated. If you create a platform event with the StandardVolume event type, you get an error.

This package.xml manifest file references the previous event definition. The name of the referenced event is Low\_Ink\_\_e.

```

```

## Retrieve Platform Events

To retrieve all platform events, in addition to custom objects defined in your org, use the wildcard character (\*) for the <members> element, as follows.

```

```

To retrieve or deploy triggers associated to a platform event, use the ApexTrigger metadata type. For more information about how to use Metadata API and its types, see the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <deploymentStatus>Deployed</deploymentStatus>
    <eventType>HighVolume</eventType>
    <publishBehavior>PublishAfterCommit</publishBehavior>
    <fields>
        <fullName>Ink_Percentage__c</fullName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Ink Percentage</label>
        <precision>18</precision>
        <required>false</required>
        <scale>2</scale>
        <type>Number</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>Printer_Model__c</fullName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Printer Model</label>
        <length>20</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>Serial_Number__c</fullName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Serial Number</label>
        <length>20</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    <label>Low Ink</label>
    <pluralLabel>Low Ink</pluralLabel>
</CustomObject>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Low_Ink__e</members>
        <name>CustomObject</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>CustomObject</name>
    </types>
    <version>66.0</version>
</Package>
```
