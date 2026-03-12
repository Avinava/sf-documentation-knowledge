---
title: "pageReference Types Types"
domain: lightning
topic: pagereference-types-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.385Z
estimatedTokens: 3483
keywords: [pageReference, navigate, Lightning, Experience, Builder, sites, Salesforce, mobile, app, define, generates, unique, URL, attributes, apply]
---

# pageReference Types Types

> To navigate in Lightning Experience, Experience Builder sites, or the Salesforce mobile
  app, define a PageReference object. The pageReference type generates a unique URL format and defines
  attributes that apply to all pages of that type. For Experience Builder sites, depending on the
  page type, the pageReference property requirements can differ
  between LWR sites and Aura sites.

# pageReference Types Types

To navigate in Lightning Experience, Experience Builder sites, or the Salesforce mobile app, define a PageReference object. The pageReference type generates a unique URL format and defines attributes that apply to all pages of that type. For Experience Builder sites, depending on the page type, the pageReference property requirements can differ between LWR sites and Aura sites.

The following types are supported.

-   App
-   External Record Page
-   External Record Relationship Page
-   Knowledge Article
-   Lightning Component (must implement lightning:isUrlAddressable)
-   Login Page
-   Managed Content Page (Salesforce CMS)
-   Named Page (Experience Cloud)
-   Named Page (Standard)
-   Navigation Item Page
-   Object Page
-   Record Page
-   Record Relationship Page
-   Standard Flow
-   Web Page

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

PageReference objects are supported on a limited basis for Experience Builder sites, as noted for each type.

## App Type

A standard or custom app available from the App Launcher in an org. Use this pageReference type to create custom navigation components that take users to a specific app or page within the app. Connected apps aren’t supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

If you’re navigating users to a different app using a pageRef, the app opens in the same window by default. To open a link in a new tab, see the [navigation service documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:navigation/documentation "HTML (New Window)").

Type

```

```

Experience

Lightning Experience

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| appTarget | String | App that you’re navigating to. Pass either the appId or appDeveloperName to the appTarget.The appId is the DurableId field on the AppDefinition sObject.The appDeveloperName value is formed by concatenating the app’s namespace with the developer name. To find the app’s developer name, navigate to the App Manager in Setup and look in the Developer Name column.For standard apps, the namespace is standard__. For custom apps, it’s c__. For managed packages, it’s the namespace registered for the package. | Yes |
| pageRef | PageReference | Identifies a specific location in the app you’re navigating to. Pass in the pageRef and applicable attributes for that pageRef type. | No |

Example Navigating to an App

```

```

Example Navigating to a Record in an App

```

```

URL Format

```

```

URL Format Examples

Navigate to the app’s homepage using the appId

```

```

Navigate to an object record’s page in the app using the appId

```

```

Navigate to the app’s homepage using the appDeveloperName

```

```

Navigate to an object record’s page in the app using the appDeveloperName

```

```

## External Record Page

A page that interacts with an external record. Currently supports CMS Connect pages.

Type

```

```

Experience

Experience Builder Aura Sites

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| recordId | String | External record ID. |  |
| objectType | String | External record type. Currently only supports cms for CMS Connect. |  |
| objectInfo | Object | Additional information used to identify the record for the objectType. |  |

Example

```

```

URL Format

```

```

## External Record Relationship Page

A page that interacts with an external relationship on a particular record in the org. Currently only supports Quip Related List page.

Type

```

```

Experience

Experience Builder Aura Sites

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| recordId | String | The 18 character record ID. |  |
| objectType | String | External record type. Currently only supports quip for Quip docs. |  |

Example

```

```

URL Format

```

```

## Lightning Component Type

A Lightning component that implements the lightning:isUrlAddressable interface, which enables the component to be navigated directly via URL.

Type

```

```

Experience

Lightning Experience, Salesforce Mobile App

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| componentName | String | The Lightning component name in the format namespace__componentName. | Yes |

Example

```

```

You can pass any key and value in the state object. The key must include a namespace, and the value must be a string. If you don’t have a registered namespace, add the default namespace of c\_\_.

URL Format

```

```

## Login Page Type

An authentication for an Experience Builder site.

Type

```

```

Experience

Experience Builder sites

Type Attributes

| Property | Type | Description | Required |
| --- | --- | --- | --- |
| actionName | String | A login-related action to be performed. Possible values are:loginlogout | Yes |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You can only navigate to the following

```

```

when you're calling navigate from them: Login, Check Password, Forgot Password, Login Error, and Register. Other page references don't work from these pages.

Example

```

```

## Knowledge Article Page Type

A page that interacts with a Knowledge Article record.

Type

```

```

Experience

Lightning Experience, Experience Builder sites, Salesforce Mobile App

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| articleType | String | The ArticleType API name of the Knowledge Article record.In Experience Builder sites, articleType is ignored. | Yes |
| urlName | String | The value of the urlName field on the target KnowledgeArticleVersion record. The urlName is the article's URL. | Yes |

Example

```

```

URL Format

```

```

URL Format (Experience Cloud)

```

```

## Managed Content Page (Salesforce CMS)

A CMS content page in an Experience Builder site with a unique name.

Type

```

```

Experience

Experience Builder sites

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| contentTypeName | String | The name of the Salesforce CMS content type. | Yes |
| contentKey |  | The unique content key that identifies CMS content. | Yes |

Example

```

```

URL Format

```

```

## Named Page Type (Experience Cloud)

A standard page in an Experience Builder site with a unique name. If an error occurs, the error view loads and the URL isn’t updated.

Type

```

```

Experience

Experience Builder sites

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| name | String | The unique name of the Experience Builder site page. The value for name is the API Name value for a supported page. The API Name field can only be defined when a new page is being created, and must be unique. If the API Name isn’t defined upon page creation, it’s automatically generated. The value of home is reserved for the landing page of any Experience Builder site in your org.Supported pages are:HomeAccount ManagementContact SupportErrorLoginMy AccountTop ArticlesTopic CatalogCustom pages | Yes |

Example

```

```

URL Format

```

```

## Named Page Type (Standard)

A standard page with a unique name. If an error occurs, the error view loads and the URL isn’t updated.

Type

```

```

Experience

Lightning Experience, Salesforce Mobile App

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| pageName | String | The unique name of the page.Possible values are:homechattertodaydataAssessmentfilePreview | Yes |

Example

```

```

URL Format

```

```

## Navigation Item Page Type

A page that displays the content mapped to a CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs are supported.

Type

```

```

Experience

Lightning Experience, Salesforce Mobile App

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| apiName | String | The unique name of the CustomTab. | Yes |

Example

```

```

URL Format

```

```

## Object Page Type

A page that interacts with a standard or custom object in the org and supports standard actions for that object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The standard\_\_objectPage type replaces the force:navigateToObjectHome and the force:navigateToList events.

Type

```

```

Experience

Lightning Experience, Experience Builder sites, Salesforce Mobile App

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| actionName | String | The action name to invoke. Valid values include home, list, and new.In Experience Builder sites, list and home are the same. | Yes |
| objectApiName | String | The API name of the standard or custom object. For custom objects that are part of a managed package, prefix the custom object with ns__. | Yes |

State

| Property | Type | Description | Supported Actions | Required? |
| --- | --- | --- | --- | --- |
| filterName | String | ID or developer name of the object page. Default is Recent. | list | No |
| defaultFieldValues | String | List of key-value pairs for the default field values that you’re passing. This list is generated by the lightning:pageReferenceUtils component. See lightning:pageReferenceUtils for details. | new | No |
| nooverride | String | To use a standard action, assign this property any value, such as 1. To use an override action, don’t include this property at all. | home, list, new | No |

Standard Object Example

```

```

Navigate to a Specific List View Example

```

```

Navigate to a Record Create Page with Default Field Values

```

```

URL Format

```

```

URL Format (Experience Cloud)

```

```

## Record Page Type

A page that interacts with a record in the org and supports standard actions for that record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The standard\_\_recordPage type replaces the force:navigateToSObject event.

Type

```

```

Experience

Lightning Experience, Experience Builder sites, Salesforce Mobile App

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| actionName | String | The action name to invoke. Valid values include clone, edit, and view.Experience Builder sites don’t support the values clone or edit. | Yes |
| objectApiName | String | The API name of the record’s object. Optional for lookups. | Yes, for Experience Builder LWR sites onlyNo, for all other experiences |
| recordId | String | The 18 character record ID. | Yes |

State

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| nooverride | String | To use a standard action, assign this property any value, such as 1. To use an override action, don’t include this property at all. | No |

Example

```

```

URL Format

```

```

URL Format (Experience Cloud)

```

```

## Record Relationship Page Type

A page that interacts with a relationship on a particular record in the org. Only related lists are supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The standard\_\_recordRelationshipPage type replaces the force:navigateToRelatedList event.

Type

```

```

Experience

Lightning Experience, Experience Builder sites, Salesforce Mobile App

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| actionName | String | The action name to invoke. Only view is supported. | Yes |
| objectApiName | String | The API name of the object that defines the relationship. Optional for lookups. | Yes, for Experience Builder LWR sites onlyNo, for all other experiences |
| recordId | String | The 18 character record ID of the record that defines the relationship. | Yes |
| relationshipApiName | String | The API name of the object’s relationship field. | Yes |

Example

```

```

URL Format

```

```

URL Format (Experience Cloud)

```

```

## Standard Flow Type

A page that runs an active screen or autolaunched flow.

Type

```

```

Experience

Lightning Experience

Type Attributes

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| devName | String | The flow name (flowName or namespace__flowName). | Yes |
| retURL | String | The relative URL to redirect users to when the flow finishes. | No |

Example

You can pass input variable values to the flow in the state object. The key must be prefixed by flow\_\_. Record variables, Apex-Defined variables, and collection variables are not supported.

```

```

URL Format

```

```

## Web Page

An external URL. Navigate to web pages using the lightning:navigate component with the standard\_\_webPage page type instead of using force:navigateToURL. In Aura sites, certain internal Salesforce URLs have site-specific processing. For example, /apex/ URLs are translated to /sfdcpage/. The Visualforce page is embedded within the site in an iFrame, which is the same behavior as with force:navigateToURL. Use window.open if you want to go straight to the URL, such as opening /apex/ directly in a new tab.

Type

```

```

Experience

Lightning Experience, Salesforce Mobile App

Attributes

| Property | Type | Description | Required |
| --- | --- | --- | --- |
| url | String | The URL of the page you’re navigating to. | Yes |

Example

```

```

URL Format

A web page opens as is in a new tab, so it doesn’t have a URL format.

#### See Also

-   [*LWR Sites for Experience Cloud:* Lightning Navigation](https://developer.salesforce.com/docs/atlas.en-us.260.0.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_navigation.htm "LWR Sites for Experience Cloud: Lightning Navigation - HTML (New Window)")

## Code Examples

```
standard__app
```

```
{
    type: "standard__app",
    attributes: {
        appTarget: "standard__Sales",
    }
}
```

```
{
    type: "standard__app",
    attributes: {
        appTarget: "standard__LightningSales",
        pageRef: {
            type: "standard__recordPage",
            attributes: {
                recordId: "001xx000003DGg0AAG",
                objectApiName: "Account",
                actionName: "view"
            }
        }
    }
}
```

```
/lightning/app/{appTarget}{...pageRef}
```

```
/lightning/app/06mRM0000008dNrYAI
```
