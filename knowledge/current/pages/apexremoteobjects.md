---
title: "apex:remoteObjects"
domain: pages
topic: apexremoteobjects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.035Z
estimatedTokens: 542
namespace: String
keywords: [apex, remoteObjects, component, along, child, <apex, remoteObjectModel>, remoteObjectField>, components, specify, sObjects, access, Visualforce, Remote, Objects]
---

# apex:remoteObjects

> Use this component, along with child <apex:remoteObjectModel> and <apex:remoteObjectField> components, to specify the sObjects and fields to access using Visualforce Remote Objects. These components generate models in JavaScript that you can use for basic create, select, update, and delete operation

**Namespace:** `String`

# apex:remoteObjects

Use this component, along with child <apex:remoteObjectModel\> and <apex:remoteObjectField\> components, to specify the sObjects and fields to access using Visualforce Remote Objects. These components generate models in JavaScript that you can use for basic create, select, update, and delete operations in your client-side JavaScript code.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| create | String | $RemoteAction override for the create method. Applies to all remote object types. |  | 43.0 |  |
| delete | String | $RemoteAction override for the create method. Applies to all remote object types. |  | 43.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| jsNamespace | String | The JavaScript namespace for the generated models. |  | 43.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| retrieve | String | $RemoteAction override for the retrieve method. Applies to all remote object types. |  | 43.0 |  |
| update | String | $RemoteAction override for the create method. Applies to all remote object types. |  | 43.0 |  |

#### See Also

-   [apex:remoteObjectField](atlas.en-us.pages.meta/pages/pages_compref_remoteObjectField.htm)

-   [apex:remoteObjectModel](atlas.en-us.pages.meta/pages/pages_compref_remoteObjectModel.htm)

-   [Visualforce Remote Objects](atlas.en-us.pages.meta/pages/pages_remote_objects.htm "JavaScript remoting is a popular, powerful, and efficient method for building Web apps with Visualforce, especially for creating pages for use in the Salesforce mobile app or working with JavaScript libraries such as jQuery or AngularJS. Visualforce Remote Objects are proxy objects that enable basic DML operations on sObjects directly from JavaScript. Remote Objects remove some of the complexity from JavaScript remoting by reducing the need for @RemoteAction methods in an Apex controller or extension.")

## Related Topics

- apex:remoteObjectField (atlas.en-us.pages.meta/pages/pages_compref_remoteObjectField.htm)
- apex:remoteObjectModel (atlas.en-us.pages.meta/pages/pages_compref_remoteObjectModel.htm)
- Visualforce Remote Objects (atlas.en-us.pages.meta/pages/pages_remote_objects.htm)
