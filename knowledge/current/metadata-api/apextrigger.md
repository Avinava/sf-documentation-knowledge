---
title: "ApexTrigger"
domain: metadata-api
topic: apextrigger
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:42.619Z
estimatedTokens: 952
keywords: [ApexTrigger, Apex, trigger, code, executes, specific, data, manipulation, language, DML, events, occur, records, inserted, database]
---

# ApexTrigger

> Represents an Apex trigger. A trigger is Apex code that
      executes before or after specific data manipulation language (DML) events occur, such as
      before object records are inserted into the database, or after records have been
    deleted.

# ApexTrigger

Represents an Apex trigger. A trigger is Apex code that executes before or after specific data manipulation language (DML) events occur, such as before object records are inserted into the database, or after records have been deleted.

For more information, see “Manage Apex Triggers” in Salesforce Help. This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

## Supported Calls

All Metadata API calls except [CRUD-Based Calls](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects."), which prevents deployment outside of proper deployment lifecycle and test-execution constraints.

## Declarative Metadata File Suffix and Directory Location

The file suffix is .trigger for the trigger file. The accompanying metadata file is named TriggerName\-meta.xml.

Apex triggers are stored in the triggers folder in the corresponding package directory.

## Version

Triggers are available in API version 10.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| apiVersion | double | Required. The API version for this trigger. Every trigger has an API version specified at creation. |
| content | base64 | The Apex trigger definition. This field is inherited from the MetadataWithContent component. |
| fullName | string | The Apex trigger name. The name can only contain characters, letters, and the underscore (_) character, must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters. This field is inherited from the Metadata component. |
| packageVersions | PackageVersion[] | The list of installed managed package versions that are referenced by this Apex trigger.For more information about managed packages, see the Second-Generation Managed Packaging Developer Guide. This field is available in API version 16.0 and later. |
| status | ApexCodeUnitStatus (enumeration of type string) | Required. The status of the Apex trigger. The following string values are valid:Active - The trigger is active.Inactive - The trigger is inactive, but not deleted.Deleted - The trigger is marked for deletion. Useful for managed packages, because it allows a trigger to be deleted when a managed package is updated. |

## Declarative Metadata Sample Definition

The following sample creates the MyhelloWorld.trigger trigger, and the corresponding MyHelloWorld.trigger-meta.xml metadata file.

MyHelloWorld.trigger file:

```

```

MyHelloWorld.trigger-meta.xml:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [ApexClass](atlas.en-us.api_meta.meta/api_meta/meta_classes.htm "Represents an Apex class. An Apex class is a template or blueprint from which Apex objects are created. Classes consist of other classes, user-defined methods, variables, exception types, and static initialization code.")

## Code Examples

```
trigger helloWorldAccountTrigger on Account (before insert) {

  Account[] accs = Trigger.new;

   MyHelloWorld.addHelloWorld(accs);
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ApexTrigger xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>66.0</apiVersion>
</ApexTrigger>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
- CRUD-Based Calls (atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- PackageVersion (atlas.en-us.api_meta.meta/api_meta/meta_classes.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ApexClass (atlas.en-us.api_meta.meta/api_meta/meta_classes.htm)
