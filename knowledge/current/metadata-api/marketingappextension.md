---
title: "MarketingAppExtension"
domain: metadata-api
topic: marketingappextension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:41.064Z
estimatedTokens: 1415
keywords: [MarketingAppExtension, Represents, integration, third-party, app, service, used, work, prospects., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields]
---

# MarketingAppExtension

> Represents an integration with a third-party app or service that is used to work with
		prospects.

# MarketingAppExtension

Represents an integration with a third-party app or service that is used to work with prospects.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") type and inherits its fullName field.

## File Suffix and Directory Location

MarketingAppExtension components have the suffix .marketingappextension and are stored in the marketingappextensions folder.

## Version

MarketingAppExtension components are available in API version 54.0 and later.

## Special Access Rules

The first Salesforce or designated marketing admin to access Marketing App Extensions in an org must have the Manage Public List Views user permission. Subsequent users don’t need the permission to work with the feature.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description of the extension for internal reference. Appears in the UI. |
| isActive | Field TypebooleanDescriptionThis field makes data for a Marketing App Extension available to use in Account Engagement automations. Label is Active in Automations.The default value is false. Appears in the UI. |
| isProtected | Field Typeboolean |
| marketingAppExtActions | Field TypeMarketingAppExtAction[]DescriptionThis field is a related list of associated external actions. |
| marketingAppExtActivities | Field TypeMarketingAppExtActivity[]DescriptionThis field is a related list of associated external prospect activities. |
| masterLabel | Field TypestringDescriptionRequired. Label for the MarketingAppExtension. In the UI, this field is Extension Name. |

## MarketingAppExtActivity

Represents an Activity Type, which is a prospect activity that occurs in a third-party app and can be used in Account Engagement automations.

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description of the activity for internal reference. Appears in the UI. |
| endpointUrl | Field TypestringDescriptionA sample endpoint that can be used to help connect the activity type to a third-party app. Appears in the UI. |
| isActive | Field TypebooleanDescriptionThis field makes data for the Activity Type available to use in Account Engagement automations. Label is Active in Automations.The default value is false. Appears in the UI. |
| isProtected | Field Typeboolean |
| marketingAppExtension | Field TypestringDescriptionRequired. The Marketing App Extension associated with the activity. |
| masterLabel | TypestringDescriptionRequired. Label for the MarketingAppExtActivity. In the UI, this field is Activity Name. |

## Declarative Metadata Sample Definition

This example retrieves all Activity Types associated with the MarketingAppExtension component.

```

```

This example package.xml references the previous definition.

```

```

This example retrieves a specific Activity Type from the associated MarketingAppExtension component.

```

```

This example package.xml references the previous definition.

```

```

## MarketingAppExtAction

Represents an Action Type, which is an action that executes in a third-party app and can be used in Engagement Studio programs.

| Field Name | Description |
| --- | --- |
| actionName | Field TypestringDescriptionThe name of the action for internal use. Appears in the UI. |
| actionParams | Field TypestringDescriptionThe parameters for the invocable action. Appears in the UI. |
| actionSchema | Field TypestringDescriptionThe JSON schema for the invocable action. Appears in the UI. |
| actionSelector | TypestringDescriptionInvocable action selector. Appears in the UI. |
| apiName | Field TypestringDescriptionThis name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. Appears in the UI. |
| Description | Field TypestringDescriptionThe description of the action for internal reference. Appears in the UI. |
| isActive | Field TypebooleanDescriptionThis field makes data for the Action Type available to use in Engagement Studio Label is Active in Automations.The default value is false. Appears in the UI. |
| isProtected | Field Typeboolean |
| marketingAppExtension | Field TypestringDescriptionRequired. The Marketing App Extension associated with the action. |

## Declarative Metadata Sample Definition

This example retrieves a specific action associated the MarketingAppExtension component.

```

```

This example package.xml references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<MarketingAppExtension xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>VidLand extension for US region</description>
    <isActive>true</isActive>
    <marketingAppExtActivities>
        <fullName>user_attended</fullName>
        <description>User attended activity capture for VidLand</description>
        <isActive>true</isActive>
        <marketingAppExtension>VidLand_US</marketingAppExtension>
        <masterLabel>user attended</masterLabel>
    </marketingAppExtActivities>
    <marketingAppExtActivities>
        <fullName>user_registered</fullName>
        <description>User registered activity capture for VidLand</description>
        <isActive>true</isActive>
        <marketingAppExtension>VidLand_US</marketingAppExtension>
        <masterLabel>user registered</masterLabel>
    </marketingAppExtActivities>
    <masterLabel>VidLand_US</masterLabel>
</MarketingAppExtension>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<!--
~ Copyright 2021 Salesforce, Inc.
~ All Rights Reserved
~ Company Confidential
-->
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>VidLand_US</members>
<name>MarketingAppExtension</name>
</types>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<MarketingAppExtension xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>VidLand extension for US region</description>
    <isActive>true</isActive>
    <marketingAppExtActivities>
        <fullName>user_attended</fullName>
        <description>User attended activity capture for VidLand</description>
        <isActive>true</isActive>
        <marketingAppExtension>VidLand_US</marketingAppExtension>
        <masterLabel>user attended</masterLabel>
    </marketingAppExtActivities>
    <masterLabel>VidLand_US</masterLabel>
</MarketingAppExtension>
```

```
<<?xml version="1.0" encoding="UTF-8"?>
<!--
~ Copyright 2021 salesforce.com, inc.
~ All Rights Reserved
~ Company Confidential
-->
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>VidLand_US.user_attended</members>
<name>MarketingAppExtActivity</name>
</types>
<types>
<members>VidLand_US</members>
<name>MarketingAppExtension</name>
</types>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<MarketingAppExtension xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>VidLand_US</fullName>
    <description>VidLand extension for US region</description>
    <isActive>true</isActive>
    <marketingAppExtActions>
        <marketingAppExtension>VidLand_US</marketingAppExtension>
        <apiName>register_user</apiName>
        <isActive>true</isActive>
        <description>Register User for VidLand</description>>
        <actionSelector>VidLand_Register_User</actionSelector>
        <actionSchema>
			<![CDATA[
   				{
	"properties": {
	  "UserId": {
		"type": "string",
		"title": ""
	  },
	  "WebinarId": {
		"type": "string",
		"value": "webinarIdXYZ"
	  }
	},
	"view": {
	  "components": [{
		"definition": "lightning/control",
		"scope": "#/properties/UserId"
	  }]
	},
	"required": [
	  "UserId",
	  "WebinarId",
	  "From",
	  "Body"
	]
  }
			]]>
        </actionSchema>
        <actionParams>
        <![CDATA[
   				{
	"isStandard": false,
    "type": "apex"
  }
			]]>
        </actionParams>
        <actionName>Register User</actionName>
    </marketingAppExtActions>
    <masterLabel>VidLand US</masterLabel>
</MarketingAppExtension>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
