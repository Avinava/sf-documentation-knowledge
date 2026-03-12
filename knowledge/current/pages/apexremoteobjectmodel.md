---
title: "apex:remoteObjectModel"
domain: pages
topic: apexremoteobjectmodel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.029Z
estimatedTokens: 646
keywords: [apex, remoteObjectModel, sObject, accessible, Visualforce, Remote, Objects, definition, include, shorthand, JavaScript, instead, full, API, especially]
---

# apex:remoteObjectModel

> Defines an sObject and its fields to make accessible using Visualforce Remote Objects. This definition can include a shorthand name for the object, which you can use in JavaScript instead of the full API name. This is especially useful if your organization has a namespace, and makes your code more m

# apex:remoteObjectModel

Defines an sObject and its fields to make accessible using Visualforce Remote Objects. This definition can include a shorthand name for the object, which you can use in JavaScript instead of the full API name. This is especially useful if your organization has a namespace, and makes your code more maintainable.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| create | String | $RemoteAction override for the create method. Applies to all remote object types. |  | 43.0 |  |
| delete | String | $RemoteAction override for the create method. Applies to all remote object types. |  | 43.0 |  |
| fields | String | A list of the object's fields to make accessible. Only these fields are available when existing objects are loaded from the server. The list is a comma-delimited string of the full API names of the fields. |  | 43.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| jsShorthand | String | A shorthand name, or 'nickname', that you can use in your JavaScript code, instead of the full object name. |  | 43.0 |  |
| name | String | The API name of the sObject to access. The full API name includes your organization's namespace, if you have one. | Yes | 43.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| retrieve | String | $RemoteAction override for the retrieve method. Applies to all remote object types. |  | 43.0 |  |
| update | String | $RemoteAction override for the create method. Applies to all remote object types. |  | 43.0 |  |

#### See Also

-   [apex:remoteObjectField](atlas.en-us.pages.meta/pages/pages_compref_remoteObjectField.htm)

-   [apex:remoteObjects](atlas.en-us.pages.meta/pages/pages_compref_remoteObjects.htm)

-   [Visualforce Remote Objects](atlas.en-us.pages.meta/pages/pages_remote_objects.htm "JavaScript remoting is a popular, powerful, and efficient method for building Web apps with Visualforce, especially for creating pages for use in the Salesforce mobile app or working with JavaScript libraries such as jQuery or AngularJS. Visualforce Remote Objects are proxy objects that enable basic DML operations on sObjects directly from JavaScript. Remote Objects remove some of the complexity from JavaScript remoting by reducing the need for @RemoteAction methods in an Apex controller or extension.")

## Related Topics

- apex:remoteObjectField (atlas.en-us.pages.meta/pages/pages_compref_remoteObjectField.htm)
- apex:remoteObjects (atlas.en-us.pages.meta/pages/pages_compref_remoteObjects.htm)
- Visualforce Remote Objects (atlas.en-us.pages.meta/pages/pages_remote_objects.htm)
