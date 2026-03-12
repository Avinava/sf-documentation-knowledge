---
title: "CRM Analytics Template SDK Aura Component"
domain: bi-dev-guide-sdk
topic: crm-analytics-template-sdk-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.912Z
estimatedTokens: 1260
keywords: [CRM, Analytics, Template, SDK, Aura, Component, Discover, templates, apps, created, Call]
---

# CRM Analytics Template SDK Aura Component

> Discover CRM Analytics templates and apps created from them. Create, update, and delete
  CRM Analytics apps created from templates.

# CRM Analytics Template SDK Aura Component

Discover CRM Analytics templates and apps created from them. Create, update, and delete CRM Analytics apps created from templates.

## Call the SDK

To call the SDK, declare the wave:sdk component in your component or app.

<wave:sdk aura:id="sdk"/>

Use sdk.invokeMethod to specify the method and any parameters.

sdk.invokeMethod(context, methodName, methodParameters, callback)

For example, here’s a call that uses listFolders as methodName.

```

```

Each method has its own set of parameters (methodParameters)—except listTemplates, which doesn’t need any.

## Methods and Parameters

listTemplates

Retrieves a list of all templates that the user has access to. Has no parameters.

getTemplate

Retrieves information for the specified template.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| templateId | ID of the template. | TRUE | String, in either the internal 'sfdc_internal__' or base platform object ID format |

getTemplateConfig

Retrieves variable and UI information for the template.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| templateId | ID of the template. | TRUE | String, in either the internal 'sfdc_internal__' or base platform object ID format |

validateWaveTemplate

Runs validation on a CRM Analytics template to check for org readiness.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| templateId | ID of the template. | TRUE | String, in either the internal 'sfdc_internal__' or base platform object ID format |
| validationInput | The input to use during the validation. | TRUE | A map of template variable values to validate the template with. These values override any template defaults. |

createFolder

Creates a folder from the specified template. Not used for apps that aren’t created from templates.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| name | Developer name of the folder. | TRUE | String |
| label | Display label of the folder. | TRUE | String |
| description | Description of the folder. | FALSE | String |
| dynamicOptions | Map of configuration options for folder creation. | FALSE | Object; map of name-value pairs, such as {'runtimeLogEntryLevel' : 'Warning'}. For supported names and values, see Template Options Input. |
| templateSourceId | ID of the template used to create the folder. | TRUE | String, in either the internal 'sfdc_internal__' or base platform object ID format |
| templateValues | Variable values for the template. | FALSE | Object; map of name-value pairs, such as {'Can_Continue' : true} |

listFolders

Retrieves a list of folders that the user has access to. Can be filtered by specifying parameters.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| templateSourceId | Limit the results to folders created from the specified template. | FALSE | String, in either the internal 'sfdc_internal__' or base platform object ID format |
| pageSize | Limit the results by page. | FALSE | Number |
| q | Limit the results by query string. | FALSE | String |
| sort | Sort the results alphabetically or by most recently used. | FALSE | Enum: 'alpha' or 'mru' |
| scope | Return only folders within the specified scope. | FALSE | Enum: 'createdByMe' or 'sharedWithMe' |
| page | Return the specified page of results. | FALSE | Number |
| isPinned | Limit the results to pinned or unpinned folders. | FALSE | Boolean |
| mobileOnly | Limit the results to mobileOnly folders. | FALSE | Boolean |

updateFolder

Updates a folder’s metadata. Can cancel an in-progress app.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| folderId | ID of the folder. | TRUE | String |
| label | New display label for the folder. | FALSE | String |
| description | New description for the folder. | FALSE | String |
| applicationStatus | When specified, cancels an app that is in progress. | FALSE | 'cancelledstatus' is the only value |

upgradeFolder

Resets or upgrades the specified folder. If the version of the template matches the version used to create the app, resets the app using the template. If the versions don’t match, upgrades the app using the new template version. Can specify dynamic options or template values that differ from the values used when the app was originally created.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| dynamicOptions | Map of configuration options for folder upgrade. | FALSE | Object; map of name-value pairs, such as {'runtimeLogEntryLevel' : 'Warning'}. For supported names and values, see Template Options Input. |
| folderId | ID of the folder. | TRUE | String |
| templateValues | Variable values for the template. | FALSE | Object; map of name-value pairs, such as {'Can_Continue' : true} |

deleteFolder

Deletes the specified folder.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| folderId | ID of the folder. | TRUE | String |

## Code Examples

```
var context = {};
var methodName = 'listFolders';
var methodParameters = {
    'templateSourceId' : templateSourceId,
    'pageSize' : pageSize,
    'q' : q,
    'sort' : sort,
    'scope' : scope,
    'page' : page,
    'isPinned' : isPinned,
    'mobileOnly' : false
};

sdk.invokeMethod(context, methodName, methodParameters,
                 $A.getCallback(function (err, data) {
    if (err !== null) {
        //DO THIS IF THE METHOD FAILS
        console.error("SDK error", err);
    } else {
        //DO THIS IF THE METHOD SUCCEEDS
        component.set('v.folders', data.folders);
    }
}))
```
