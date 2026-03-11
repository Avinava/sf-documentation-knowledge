---
title: "PostTemplate"
domain: metadata-api
topic: posttemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.009Z
keywords: [PostTemplate, Note, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# PostTemplate

# PostTemplate

Represents the metadata associated with an approval post template for Approvals in Chatter. With approval post templates, you can customize the information included in approval request posts that appear in Chatter feeds. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Review Chatter Post Templates for Approval Requests in the Salesforce Help before you create a post template.

## File Suffix and Directory Location

PostTemplate components have the suffix .postTemplate and are stored in the postTemplates folder.

## Version

PostTemplate components are available in API version 29.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| default | boolean | Required. Specifies whether this is the default post template for the given object.When set to true, this post template is used by approval processes that are associated with the same object and don’t specify a post template.When an object has no default post template, each of its approval processes uses the system default post template, unless the approval process specifies its own post template. |
| description | string | Optional description of the post template. |
| fields | string[] | Required. An array of up to four fields to include in approval request posts.If the approval object is a detail object in a master-detail relationship, Owner isn’t available for approval page layouts or approval post templates. |
| label | string | Required. Name of the post template. This non-unique label is different from the unique name of the post template. |

## Declarative Metadata Sample Definition

The following is an example of a PostTemplate component:

```

```

The following is an example package manifest that references the previous PostTemplate component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").