---
title: "OauthCustomScope"
domain: metadata-api
topic: oauthcustomscope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.749Z
keywords: [OauthCustomScope, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Usage, Wildcard, Support, Manifest]
---

# OauthCustomScope

# OauthCustomScope

Represents a permission defining the protected data that a connected app can access from an external entity when Salesforce is the OAuth authorization provider. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

OauthCustomScope components have the suffix .oauthcustomscope and are stored in the oauthcustomscopes directory.

## Version

OAuth custom scopes are available in API version 46.0 and later.

## Special Access Rules

You must have the “Manage Connected Apps” permission to access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| assignedTo | OauthCustomScopeApp (enumeration of type string) | Represents the name of the connected app to which the custom scope is assigned. Available in API version 49.0 and later.If the connected app is part of a package, include the package’s namespace prefix with the connected app’s name. Use the following format: <namespace_prefix>__<connected_app>. Use two underscores (_) between the namespace prefix and connected app’s name. |
| description | string | Required. The description of the permission provided to the connected app by the scope. The custom scope’s description must be unique, can only include alphanumeric characters, and can be up to 60 characters long.You can enter a custom label in place of a description. An advantage of using a custom label is that you can maintain reusable text in a single location and translate the text into multiple languages. See Custom Labels.NoteThe description formatting requirements that apply to custom scopes also apply to custom labels. |
| developerName | string | Required. Use when referring to the OAuth custom scope from a program. |
| isProtected | boolean | Required. Indicates whether this component is protected () or not (false). Protected components cannot be linked to or referenced by components created in the installing org. |
| isPublic | boolean | Indicates whether the object is included in the connected app’s OpenID Connect discovery endpoint. The default setting is false. For more information, see OpenID Connect Discovery Endpoint. |
| masterLabel | string | Required. The primary label for the custom scope record. This label must be unique and begin with a letter. It can include only alphanumeric characters and underscores. It can’t contain spaces. |

## Declarative Metadata Sample Definition

The following is an example of an OAuthCustomScope component. In this example, basicScope is the name of custom scope entity being retrieved.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

An OAuth custom scope tells an external entity about a connected app’s permissions to access protected data. The OAuth custom scope you create in your Salesforce org corresponds to the same custom scope defined in your external entity and assigned to the resource.

For example, you define an Order Status custom scope in your external entity that allows access to customer order status data in your order system’s API. In Salesforce, you create an OAuth custom scope that you also name Order Status. You assign this custom scope to the connected app requesting access to the order status API. When the external entity receives the connected app’s request to access a customer’s order status, it validates the connected app’s access token and Order Status scope. With a successful validation, the app can access the customer order status information in the order system’s API.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").