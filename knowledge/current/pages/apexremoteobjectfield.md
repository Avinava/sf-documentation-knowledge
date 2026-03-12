---
title: "apex:remoteObjectField"
domain: pages
topic: apexremoteobjectfield
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.025Z
estimatedTokens: 448
keywords: [apex, remoteObjectField, load, sObject, defined, component, instead, attribute, <apex, remoteObjectModel>, shorthand, nickname, client-side, JavaScript, code]
---

# apex:remoteObjectField

> Defines the fields to load for an sObject. Fields defined using this component, instead of the fields attribute of <apex:remoteObjectModel>, can have a shorthand name, which allows the use of a "nickname" for the field in client-side JavaScript code, instead of the full API name. Use as child of <ap

# apex:remoteObjectField

Defines the fields to load for an sObject. Fields defined using this component, instead of the fields attribute of <apex:remoteObjectModel\>, can have a shorthand name, which allows the use of a "nickname" for the field in client-side JavaScript code, instead of the full API name. Use as child of <apex:remoteObjectModel\>.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| jsShorthand | String | The shorthand, or nickname, that can be used instead of the full field name in JavaScript code. |  | 43.0 |  |
| name | String | The API name of the sObject field. | Yes | 43.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [apex:remoteObjectModel](atlas.en-us.pages.meta/pages/pages_compref_remoteObjectModel.htm)

-   [apex:remoteObjects](atlas.en-us.pages.meta/pages/pages_compref_remoteObjects.htm)

-   [Visualforce Remote Objects](atlas.en-us.pages.meta/pages/pages_remote_objects.htm "JavaScript remoting is a popular, powerful, and efficient method for building Web apps with Visualforce, especially for creating pages for use in the Salesforce mobile app or working with JavaScript libraries such as jQuery or AngularJS. Visualforce Remote Objects are proxy objects that enable basic DML operations on sObjects directly from JavaScript. Remote Objects remove some of the complexity from JavaScript remoting by reducing the need for @RemoteAction methods in an Apex controller or extension.")

## Related Topics

- apex:remoteObjectModel (atlas.en-us.pages.meta/pages/pages_compref_remoteObjectModel.htm)
- apex:remoteObjects (atlas.en-us.pages.meta/pages/pages_compref_remoteObjects.htm)
- Visualforce Remote Objects (atlas.en-us.pages.meta/pages/pages_remote_objects.htm)
