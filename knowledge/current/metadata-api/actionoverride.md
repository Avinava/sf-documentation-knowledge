---
title: "ActionOverride"
domain: metadata-api
topic: actionoverride
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.104Z
estimatedTokens: 1776
keywords: [ActionOverride, action, override, standard, custom, edit, overrides, access, accessing, encompassing, CustomObject, Declarative, Metadata, File, Suffix]
---

# ActionOverride

> Represents an action override on a standard or custom object. Use it
            to create, update, edit, or delete action overrides.
        You can access ActionOverride only by accessing its
            encompassing CustomObject.

# ActionOverride

Represents an action override on a standard or custom object. Use it to create, update, edit, or delete action overrides. You can access ActionOverride only by accessing its encompassing CustomObject.

## Declarative Metadata File Suffix and Directory Location

Action overrides are defined as part of a standard or custom object.

## Version

Action overrides are available in API version 18.0 and later. As of Summer ’13, action overrides can be applied to both standard and custom objects. Previously, action overrides only applied to custom objects.

## Fields

Unless otherwise noted, all fields are creatable, filterable, and nillable.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionName | string | Required. The possible values are the same as the actions you can override:acceptclonedeleteeditlistnewtabview |
| comment | string | Any comments you want associated with the override. |
| content | string | Set this field if type is set to flexipage, lightningcomponent, scontrol, or visualforce. It refers to the name of the Lightning page, Lightning component, s-control, or Visualforce page to use as the override. To reference installed components, use this format: Component_namespace__Component_name. |
| formFactor | FormFactor (enumeration of type string) | The size of the page being overridden.If the type field is set to flexipage, set this field to Large to override the View action with a Lightning page in Lightning Experience.The Large value represents the Lightning Experience desktop environment and is valid only for the flexipage and lightningcomponent types. The Small value represents the Salesforce mobile app on a phone or tablet. The Medium value is reserved for future use. The null value (which is the same as specifying no value) represents Salesforce Classic.This field is available in API version 37.0 and later and is part of the feature for creating and editing record pages in Lightning Experience.Lightning component overrides return different FormFactor values depending on the API version used.In API version 41.0 and earlier, Lightning component overrides return only the null value (no value), representing the Salesforce Classic environment.In API version 42.0, if you specify different Lightning component overrides for Lightning Experience and mobile, one component is selected randomly for both overrides and its FormFactor value is returned. If there’s a conflict between Lightning components, and a Visualforce page override is also specified for Salesforce Classic, the Visualforce page takes precedence.In API version 43.0 and later, a Lightning component override for Lightning Experience returns the Large value and a Lightning component override for mobile returns the Small value, as expected. |
| skipRecordTypeSelect | boolean | Set this field to true if you prefer that any new records created by this action override aren’t forwarded to the record type selection page. This field is only valid if the actionName is a “create” type (like new), and type is set to visualforce. This field is available in API version 21.0 and later. |
| type | ActionOverrideType (enumeration of type string) | Required. Represents the type of action override. Valid values are described in ActionOverrideType. |

## ActionOverrideType

[ActionOverrideType](#actionOverrideType_section) is an enumeration of type string that defines which kind of action override to use. The valid values are:

-   default—The override uses a custom override provided by an installed package. If there isn’t one available, the standard Salesforce behavior is used.
-   flexipage—The override uses behavior from a Lightning page, and is only valid for the View action in Lightning Experience.
-   lightningcomponent—The override uses behavior from a Lightning component.
-   scontrol—The override uses behavior from an s-control.
-   standard—The override uses regular Salesforce behavior.
-   visualforce—The override uses behavior from a Visualforce page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Existing s-controls can be used as overrides for Salesforce Classic under certain conditions. However, s-controls have been deprecated since the Spring ’09 release. We recommend using Visualforce pages instead.

## Usage

You can't delete ActionOverrides by deploying with destructiveChange.xml. To delete an ActionOverride, retrieve the CustomObject. In the definition file, find the <ActionOverrides> section, and remove the <content> row. Then, change the <type> value in that same section to Default. Do this for every override you want to reset. After making the changes, rezip the folder and deploy.

You can remove one override at a time each with its own deploy, or you can remove multiple overrides in a single deploy. However, we recommend that you do a fresh retrieve every time you want to delete a new override. Don’t use a previously retrieved file.

Org default flexipage override assignment metadata can’t be retrieved from a managed package.

## Declarative Metadata Sample Definitions

You can define action overrides, as in these examples for the Edit action.

A Visualforce page override for Salesforce Classic:

```

```

This example includes no value for FormFactor. Using no value is the same as using the null value, which represents Salesforce Classic.

A Lightning component override for Lightning Experience:

```

```

A Lightning component override for the Salesforce mobile app:

```

```

When overrides are included in a managed package, the overrides are represented as default type in the metadata. Calling [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm#meta_retrieve "The retrieve() call retrieves XML file representations of components in an organization.") presents the following:

```

```

If you subscribe to a managed package with default overrides, you can replace the default override behavior by editing the XML. For example, to replace the Visualforce page override with the Salesforce standard page for Salesforce Classic, use:

```

```

To set a Lightning page action override on the View standard button in Lightning Experience, use:

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_businessprocess.htm "BusinessProcess")

#### See Also

-   [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.")

## Code Examples

```
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>edit</actionName>
        <type>visualforce</type>
        <content>myEditVFPage</content>
        <comment>This edit action is a lot safer.</comment>
     </actionOverrides>
</CustomObject
```

```
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>edit</actionName>
        <type>lightningcomponent</type>
        <content>myEditLightningComponent</content>
        <formFactor>Large</formFactor>
        <comment>This edit action is a lot safer.</comment>
     </actionOverrides>
</CustomObject>
```

```
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>edit</actionName>
        <type>lightningcomponent</type>
        <content>myEditLightningComponent</content>
        <formFactor>Small</formFactor>
        <comment>This edit action is a lot safer.</comment>
     </actionOverrides>
</CustomObject>
```

```
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>edit</actionName>
        <type>default</type>
     </actionOverrides>
</CustomObject>
```

```
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>edit</actionName>
        <type>standard</type>
     </actionOverrides>
</CustomObject>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_businessprocess.htm)
- CustomObject (atlas.en-us.api_meta.meta/api_meta/customobject.htm)
