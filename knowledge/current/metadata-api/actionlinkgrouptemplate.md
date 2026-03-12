---
title: "ActionLinkGroupTemplate"
domain: metadata-api
topic: actionlinkgrouptemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:36.377Z
estimatedTokens: 2027
keywords: [ActionLinkGroupTemplate, action, link, group, template, templates, let, reuse, definitions, package, distribute, links, button, feed, element]
---

# ActionLinkGroupTemplate

> Represents the action link group template.
      Action link templates let you reuse action link definitions and package and distribute action
      links. An action link is a button on a feed element. Clicking on an action link can take a
      user to another Web page, initiate a file download, or invoke an API call to an external
      server or Salesforce. Use action links to integrate Salesforce and third-party services into
      the feed. Every action link belongs to an action link group and action links within the group
      are mutually exclusive.

# ActionLinkGroupTemplate

Represents the action link group template. Action link templates let you reuse action link definitions and package and distribute action links. An action link is a button on a feed element. Clicking on an action link can take a user to another Web page, initiate a file download, or invoke an API call to an external server or Salesforce. Use action links to integrate Salesforce and third-party services into the feed. Every action link belongs to an action link group and action links within the group are mutually exclusive.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActionLinkGroupTemplate components have the suffix .actionLinkGroupTemplate and are stored in the actionLinkGroupTemplates folder.

## Version

ActionLinkGroupTemplate components are available in API version 33.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionLinkTemplates | ActionLinkTemplate[] | Action link templates that are associated with the action link group template. |
| category | PlatformAction​GroupCategory (enumeration of type string) | Required. The location of the action link group within the feed element. Values are:Primary—The action link group is displayed in the body of the feed element.Overflow—The action link group is displayed in the overflow menu of the feed element. |
| executionsAllowed | ActionLink​ExecutionsAllowed (enumeration of type string) | Required. The number of times an action link can be executed. Values are:Once—An action link can be executed only once across all users.OncePerUser—An action link can be executed only once for each user.Unlimited—An action link can be executed an unlimited number of times by each user. If the action link’s actionType is Api or ApiAsync, you can’t use this value. |
| hoursUntilExpiration | int | Required. The number of hours from when the action link group is created until it's removed from associated feed elements and can no longer be executed. The maximum value is 8,760. |
| isPublished | boolean | Required. If true, the action link group template is published. Action link group templates shouldn’t be published until at least one action link template is associated with it. |
| name | string | Required. The name of the action link group template to use in code. |

## ActionLinkTemplate

ActionLinkTemplate components are used to create multiple action links that share properties.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionUrl | string | Required. The action link URL. For example, a Ui action link URL is a Web page. A Download action link URL is a link to the file to download. Ui and Download action link URLs are provided to clients. An Api or ApiAsync action link URL is a REST resource. Api and ApiAsync action link URLs aren’t provided to clients. Links to Salesforce can be relative. All other links must be absolute and start with https://. |
| headers | string | Template for the HTTP headers sent when corresponding action links are invoked. This field can be used only for Api and ApiAsync action links. This field can contain context variables and binding variables in the form {!Bindings.key}. |
| isConfirmationRequired | boolean | Required. If true, a confirmation dialog appears before the action is executed. |
| isGroupDefault | boolean | Required. If true, action links derived from this template are the default or primary action in their action groups. There can be only one default action per action group. |
| label | string | A custom label to display on the action link button. If none of the LabelKey values make sense for an action link, use a custom label. Set the LabelKey field to None and enter a label name in the Label field. |
| labelKey | string | Required. Key for the set of labels to display for these action link states: new, pending, success, failed. For example, the Approve set contains these labels: Approve, Pending, Approved, Failed. For a complete list of keys and labels, see Action Link Labels in the Connect REST API Developer Guide. |
| linkType | ActionLinkType (enumeration of type string) | Required. The type of action link. One of these values:Api—The action link calls a synchronous API at the action URL. Salesforce sets the status to SuccessfulStatus or FailedStatus based on the HTTP status code returned by your server.ApiAsync—The action link calls an asynchronous API at the action URL. The action remains in a PendingStatus state until a third party makes a request to /connect/action-links/actionLinkId to set the status to SuccessfulStatus or FailedStatus when the asynchronous operation is complete.Download—The action link downloads a file from the action URL.Ui—The action link takes the user to a web page at the action URL. |
| method | ActionLink​HttpMethod (enumeration of type string) | Required. HTTP method for the action URL. One of these values:HttpDelete—Returns HTTP 204 on success. Response body or output class is empty.HttpGet—Returns HTTP 200 on success.HttpHead—Returns HTTP 200 on success. Response body or output class is empty.HttpPatch—Returns HTTP 200 on success or HTTP 204 if the response body or output class is empty.HttpPost—Returns HTTP 201 on success or HTTP 204 if the response body or output class is empty. Exceptions are the batch posting resources and methods, which return HTTP 200 on success.HttpPut—Return HTTP 200 on success or HTTP 204 if the response body or output class is empty.Ui and Download action links must use HttpGet. |
| position | int | Required. An integer specifying the position of the action link template relative to other action links in the group. 0 is the first position. |
| requestBody | string | Template for the HTTP request body sent when corresponding action links are invoked. This field can be used only for Api and ApiAsync action links. This field can contain context variables and binding variables in the form {!Bindings.key}. |
| userAlias | string | If you selected CustomUser or CustomExcludedUser for UserVisibility, this field is the alias for the custom user. Use the alias in a template binding to specify the custom user when an action link group is created using the template. |
| userVisibility | ActionLink​UserVisibility (enumeration of type string) | Required. Who can see the action link. This value is set per action link, not per action link group. Values are:Creator—Only the creator of the action link can see the action link.Everyone—Everyone can see the action link.EveryoneButCreator—Everyone but the creator of the action link can see the action link.Manager—Only the manager of the creator of the action link can see the action link.CustomUser—Only the custom user can see the action link.CustomExcludedUser—Everyone but the custom user can see the action link. |

## Declarative Metadata Sample Definition

The following is an example of an ActionLinkGroupTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

If you modify action link group templates, you overwrite the related action link templates.

If you delete a published action link group template, you delete all related action link information which includes deleting all action links that were instantiated using the template from feed items.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ActionLinkGroupTemplate xmlns="http://soap.sforce.com/2006/04/metadata">
   <actionLinkTemplates>
      <actionUrl>/services/data/{!Bindings.word}/chatter/feed-elements</actionUrl>
      <headers>Content-Type:{!Bindings.word3}</headers>
      <isConfirmationRequired>true</isConfirmationRequired>
      <isGroupDefault>true</isGroupDefault>
      <labelKey>Add</labelKey>
      <linkType>API</linkType>
      <method>httpPost</method>
      <position>0</position>
      <requestBody>{"body":{"messageSegments":[{"type": "Text",
      "text": "{!Bindings.word1}"}]},"subjectId": "{!Bindings.word2}",
      "feedElementType": "feedItem"}</requestBody>
      <userAlias>customExcludedUser</userAlias>
      <userVisibility>CustomExcludedUser</userVisibility>
   </actionLinkTemplates>
   <category>Primary</category>
   <executionsAllowed>OncePerUser</executionsAllowed>
   <hoursUntilExpiration>10</hoursUntilExpiration>
   <isPublished>true</isPublished>
   <name>MyPackage</name>
</ActionLinkGroupTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ActionLinkGroupTemplate</name>
    </types>
    <version>33.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
