---
title: "FlexiPage"
domain: tooling-api
topic: flexipage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.993Z
keywords: [FlexiPage, Note, Supported, SOAP, Calls, REST, HTTP, Methods, Fields, Sample, Code]
---

# FlexiPage

# FlexiPage

Represents a Lightning page. A Lightning page is a customizable page composed of regions containing Lightning components.

Includes access to the associated FlexiPage object in the Metadata API. Available from API version 31.0 or later.

Lightning pages are used in several places.

-   In the Salesforce mobile app, a Lightning page is the home page for an app that appears in the navigation menu.
-   In Lightning Experience, Lightning pages can be used:
    -   To customize the layout of record pages, the Salesforce Home page, and the Email Application pane in the Outlook and Gmail integrations.
    -   As the home page for an app.
    -   As the utility bar for a Lightning app.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

These pages are known as FlexiPages in the API, but are referred to as Lightning pages in the rest of the Salesforce documentation and UI.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

In API version 49.0 and later, arrays in a FlexiPage are represented as valueList. Each array element is represented as valueListItem, and the element name is represented as value. In API version 48.0 and earlier, arrays are represented as value and array elements are formatted as a comma-separated list. Any FlexiPage retrieved using API version 49.0 or later uses valueList to represent component property array values, regardless of which API version was used to create the FlexiPage.

## Supported SOAP Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE,GET, HEAD,PATCH,POST

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe page description. This field can be useful to describe the reason for creating the page or its intended use. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe API name of the Lightning page.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the standard object or ID of the custom object that the Lightning page is associated with. For Lightning pages of type AppPage or HomePage, this field is null.This field is available in API version 39.0 and later. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated FlexiPage object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe page’s label. |
| Metadata | TypeFlexiPageMetadataPropertiesCreate, Nillable, UpdateDescriptionLightning page metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package of which the FlexiPage is a part. |
| ParentFlexiPage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the FlexiPage that this page inherits behavior from. Available in API version 37.0 or later. |
| SobjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe object the Lightning page is associated with. For Lightning pages of type AppPage or HomePage, this field is null.Available in API version 37.0 and 38.0. Deprecated as of API version 39.0. Use EntityDefinitionId instead. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklistSortDescriptionRequired. The type of the Lightning page. Valid values are:CdpRecordPage—A Lightning page that is used to override a CDPNearCoreObject record page in Lightning Experience. This value is available in API version 54.0 and later for orgs that have Data 360 enabled.AppPage—A Lightning page that is used as the home page for a custom app.CommAppPage—A Lightning page that is used to represent a custom page, as created in the Experience Builder. This value is available in API version 37.0 and later.CommContractDetailViewPage—This value is available in API version 64.0 and later.CommCheckoutPage—A Lightning page that is used to create a B2B Commerce checkout, as created in the Experience Builder. This value is available in API version 46.0 and later.CommFlowPage A Lightning page used to override a flow page, as created in the Experience Builder. This value is available in API version 45.0 and later.CommForgotPasswordPage—A Lightning page that’s used to override a forgot-password page, as created in Experience Builder. This value is available in API version 39.0 and later.CommFlowPage—An out-of-the-box flow page, as created in Experience Builder. This value is available in API version 45.0 and later.CommGlobalSearchResultPage A Lightning page used to override the global search result page, as created in Experience Builder. This value is available in API version 41.0 and later.CommLoginPage—A Lightning page that’s used to override the login page, as created in Experience Builder. This value is available in API version 39.0 and later.CommNoSearchResultsPage—An Experience Builder site page for B2B searches that return no results. The URL for this page is no-results/:term. The page starts out empty. You can add any component to it that accepts parameters to achieve the desired “no results” experience. For example, you can place an HTML Editor component or CMS components for recommendations, banners, help, and support. This value is available in API version 48.0 and later.CommObjectPage—A Lightning page used to override an object page, as created in Experience Builder. This value is available in API version 38.0 and later.CommOrderComfirmationPage—A Lightning page that is used to create a B2B Commerce order confirmation page in checkout, as created in the Experience Builder. This value is available in API version 46.0 and later.CommQuickActionCreatePage—A Lightning page used to override the create record page, as created in Experience Builder. This value is available in API version 38.0 and later.CommRecordPage—A Lightning page used to override a record page, as created in the Experience Builder. This value is available in API version 38.0 and later.CommRelatedListPage—A Lightning page used to override a related list page, as created in the Experience Builder. This value is available in API version 38.0 and later.CommSearchResultPage—A Lightning page used to override the search result page, as created in Experience Builder. This value is available in API version 38.0 and later.CommSelfRegisterPage—A Lightning page used to override the self-registration page, as created in Experience Builder. This value is available in API version 39.0 and later.CommThemeLayoutPage—A Lightning page used to override a theme layout page, as created in the Experience Builder. This value is available in API version 38.0 and later.EmbeddedServicePage This value is available in API version 45.0 and later.EmailContentPage — A page that contains the builder markup for your email content. When you edit email content in the builder, the FlexiPage object remembers where you put the components.Because they include builder markup, you can't retrieve or deploy FlexiPages when type is EmailContentPage.EmailTemplatePage — A page that contains the builder markup for your email template. When you edit an email template in the builder, the FlexiPage object remembers where you put the components.Because they include builder markup, you can't retrieve or deploy FlexiPages when type is EmailTemplatePage or EmailContentPage.ForecastingPage —A Lightning page that is used to override the default forecasts page in Lightning Experience. This value is available in API version 57.0 and later.HomePage—A Lightning page that is used to override the Home page in Lightning Experience. This value is available in API version 37.0 and later.MailAppAppPage—An email application pane used to override the default layout in the Outlook and Gmail integrations. This value is available in API version 38.0 and later.OmniSupervisorPageType—A Lightning page used to customize the user interface on the Omni-Channel Supervisor page. This value is available in API version 60.0 and later.RecordPage—A Lightning page used to override an object record page in Lightning Experience. This value is available in API version 37.0 and later.RecordPreview A Lightning page used to override standard lookup previews when hovering over previewable records in Lightning Experience.This value is available in API version 45.0 and later.UtilityBar—A Lightning page used as the utility bar in Lightning Experience apps. This value is available in API version 38.0 and later.VoiceExtension—A Lightning page used to customize user interfaces and agent actions in the Omni-Channel widget for Service Cloud Voice. This value is available in API version 57.0 and later.Available in API version 32.0 or later. In API versions 32.0 through 36.0, this field can only have a value of AppPage. |

## Sample Code

This code sample creates a Lightning page with a single Recent Items component, that shows recently used Accounts and MyCustomObject\_\_cs

```

```