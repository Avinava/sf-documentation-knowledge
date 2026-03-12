---
title: "apex:page"
domain: pages
topic: apexpage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.876Z
estimatedTokens: 3530
keywords: [apex, Visualforce, pages, wrapped, inside, <apex, page>, component, tag, Attributes]
---

# apex:page

> A single Visualforce page. All pages must be wrapped inside a single <apex:page> component tag.

# apex:page

A single Visualforce page. All pages must be wrapped inside a single <apex:page> component tag.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <html\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| action | ApexPages.Action | The action method invoked when this page is requested by the server. Use expression language to reference an action method. For example, action="{!doAction}" references the doAction() method in the controller.If an action isn’t specified, the page loads as usual. If the action method returns null, the page simply refreshes.This method is called before the page is rendered, and allows you to optionally redirect the user to another page.Important: Don’t use this action for initialization or DML. |  | 10.0 | global |
| apiVersion | double | The version of the API used to render and execute the page. |  | 10.0 | global |
| applyBodyTag | Boolean | A boolean value that specifies whether Visualforce automatically adds a <body> tag to the generated HTML output. Set to false to disable adding the <body> tag to the response, for example, when the <body> tag is statically set in your markup. If not specified, this value defaults to the value of the applyHtmlTag attribute if it's set, or true, if applyHtmlTag isn't set. |  | 27.0 |  |
| applyHtmlTag | Boolean | A boolean value that specifies whether Visualforce automatically adds an <html> tag to the generated HTML output. Set to false to disable adding the <html> tag to the response, for example, when the <html> tag is statically set in your markup. If not specified, this value defaults to true. |  | 27.0 |  |
| cache | Boolean | A boolean value that specifies whether the browser caches this page. If set to true, the browser caches the page. If not specified, this value defaults to false.For Salesforce Sites pages, this value defaults to true. See Configure Site Caching.For Hyperforce customers, setting this value to true allows you to use Salesforce Edge-enabled global caching. |  | 10.0 | global |
| contentType | String | The MIME content type used to format the rendered page. Possible values for this attribute include text/html, text/csv, image/png, image/gif, video/mpeg, text/css, and audio/basic. For more information, including a complete list of possible values, see the W3C specifications.You can set the filename of the rendered page by appending a # to the MIME type, followed by the file name. For example, application/vnd.ms-excel#contacts.xls.ImportantDynamically switching the content type from an HTML to a non-HTML type such as text/csv or image/png isn’t supported. |  | 10.0 | global |
| controller | String | The name of the custom controller class written in Apex used to control the behavior of this page. This attribute can’t be specified if the standardController attribute is also present. |  | 10.0 | global |
| cspHeader | Boolean | Indicates whether this Visualforce page uses your Content Security Policy (CSP) (true) to impose restrictions on content or not (false).If true, browsers only make requests from this Visualforce page to an external server if the server is defined as a CSPTrustedSite with a context of Visualforce or All. Additionally, the CSP script-src directive is added and set to self, so script resources must have the same origin as the Visualforce page. You can't modify or configure this directive with CSPTrustedSite. |  | 55.0 |  |
| deferLastCommandUntilReady | Boolean | A boolean value that specifies whether to prevent premature clicking command buttons and links. If true, the last click on a button or link is enqueued and processed when page is ready. This value defaults to false. |  | 26.0 |  |
| docType | String | The HTML document type definition (DTD), or doc type, that describes the structure of the rendered page. Possible values for this attribute include html-4.01-strict, xhtml-1.0-transitional, xhtml-1.1-basic, and html-5.0If not specified, this value defaults to html-4.01-transitional, which results in a doc type of <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">.For more information about HTML doc type declarations, see the W3C specifications. |  | 23.0 |  |
| expires | Integer | The expiration period for the cache attribute in seconds. If the cache attribute is set to true, but this attribute isn’t specified, this value defaults to 0.For Salesforce Sites pages, if the cache attribute isn’t set to false, this value defaults to 600 seconds. |  | 14.0 |  |
| extensions | String | The name of one or more custom controller extensions written in Apex that add additional logic to this page. |  | 11.0 | global |
| id | String | An identifier for the page that allows it to be referenced by other components in the page. |  | 10.0 | global |
| label | String | The label used to reference the page in Salesforce setup tools. |  | 10.0 | global |
| language | String | The language used to display labels that have associated translations in Salesforce. This value overrides the language of the user viewing the page. Possible values for this attribute include any language keys for languages supported by Salesforce, for example, en or en-US. |  | 10.0 | global |
| lightningStylesheets | Boolean | A boolean value that controls whether some standard Visualforce components are styled similar to Lightning Experience when the page is viewed in Lightning Experience. Not all standard Visualforce components support this attribute.If set to true, Lightning Experience style sheets are applied to the page when displayed in Lightning Experience, while Classic style sheets are applied in Salesforce Classic.If not specified or set to false, the Classic style sheets are always used.Note: The lightningStylesheets attribute, when true, overrides the standardStylesheets attribute. |  | 10.0 | global |
| manifest | String | Adds a manifest attribute to the generated <html> tag, which references a cache manifest file for offline use. Setting a manifest attribute requires also setting docType="html-5.0", and applyHtmlTag to not be set to false. |  | 27.0 |  |
| name | String | The unique name that is used to reference the page in the Lightning Platform API. |  | 10.0 | global |
| pageStyle | String | The pageStyle attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| readOnly | Boolean | A boolean value that enables read-only mode for a Visualforce page. In read-only mode, a page can’t execute any DML operations, but the limit on the number of records retrieved is relaxed from 50,000 to 1 million rows. It also increases the number of items in a collection that can be handled by iteration components, from 1,000 to 10,000. If not specified, this value defaults to false. |  | 23.0 |  |
| recordSetName | String | The recordSetName attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. Use recordSetVar instead. |  | 14.0 |  |
| recordSetVar | String | This attribute indicates that the page uses a set-oriented standard controller. The value of the attribute indicates the name of the set of records passed to the page. This record set can be used in expressions to return values for display on the page or to perform actions on the set of records.For example, if your page is using the standard accounts controller, and recordSetVar is set to accounts, you can create a simple pageBlockTable of account records with the following code:<apex:pageBlockTable value="{!accounts}" var="a"><apex:column value="{!a.name}"/></apex:pageBlockTable> |  | 14.0 |  |
| renderAs | String | The name of any supported content converter. Currently PDF is the only supported content converter. Setting this attribute to pdf renders the page as a PDF.Rendering a Visualforce page as a PDF is intended for pages that are designed and optimized for print. Don’t use standard components that aren't easily formatted for print or contain form elements such as inputs, buttons, and any component that requires formatted JavaScript. Verify the format of your rendered page before deploying it.If the PDF fails to display all the characters, adjust the fonts in your CSS to use a font that supports your needs. For example, add the following style definition to your page's styles:body { font-family: 'Arial Unicode MS'; }Note that the pageBlock and sectionHeader components don't support double-byte fonts when rendered as a PDF. |  | 13.0 | global |
| rendered | Boolean | A boolean value that specifies whether the page is rendered. If not specified, this value defaults to true. |  | 10.0 | global |
| setup | Boolean | A boolean value that specifies whether the page uses the style of a standard Salesforce Setup page. If true, Setup styling is used. If not specified, this value defaults to false. |  | 10.0 | global |
| shouldAlwaysEscapeExpressionLanguage | Boolean | The attribute shouldAlwaysEscapeExpressionLanguage was deprecated in Salesforce API version 57.0 and has no effect on the page. If you already added this attribute to Visualforce code in response to the Escape Expression Language Evaluations release update, remove the shouldAlwaysEscapeExpressionLanguage attribute.To ensure the security of your Visualforce pages and components, complete the following steps.Reintroduce any manual escaping that you removed from your Visualforce pages and components’ code for this release update.Delete the attribute shouldAlwaysEscapeExpressionLanguage from your Visualforce pages or components. | No | 57.0 |  |
| showChat | Boolean | A boolean value that specifies whether the Chatter Messenger chat widget is included in the page. If true, the chat widget is displayed. If not specified, the value defaults to the Visualforce Settings selected from Setup in Customize \| Chatter \| Chat Settings. |  | 10.0 | global |
| showHeader | Boolean | A boolean value that specifies whether the Salesforce tab header is included in the page. If true, the tab header is displayed. If not specified, this value defaults to true.Note: In Lightning Experience and the Salesforce mobile app, the value of this attribute is overridden, and is always false. |  | 10.0 | global |
| showQuickActionVfHeader | Boolean | A boolean value that specifies whether to display the header of the quick action that calls this page. If true, the action header is displayed. If not specified, this value defaults to true. This attribute isn’t supported in Experience Cloud sites. |  | 34.0 |  |
| sidebar | Boolean | A boolean value that specifies whether the standard Salesforce sidebar is included in the page. If true, the sidebar is displayed. If not specified, this value defaults to true.Note: In Lightning Experience and the Salesforce mobile app, the value of this attribute is overridden, and is always false. |  | 10.0 | global |
| standardController | String | The name of the Salesforce object that’s used to control the behavior of this page. This attribute can’t be specified if the controller attribute is also present. |  | 10.0 | global |
| standardStylesheets | Boolean | A boolean value that specifies whether the standard Salesforce style sheets are added to the generated page header if the showHeader attribute is set to false. If set to true, the standard style sheets are added to the generated page header. If not specified, this value defaults to true. By setting this value to false, components that require Salesforce.com CSS can display incorrectly, and their styling can change between releases. |  | 11.0 | global |
| tabStyle | String | The Salesforce object or custom Visualforce tab that controls the color, styling, and selected tab for this page. If using a custom object, the attribute must be specified with the developer name for the object. For example, to use the styling associated with MyCustomObject, use tabStyle="MyCustomObject__c". If the page uses a standard controller, the tabStyle defaults to the style of the associated controller. If the page uses a custom controller, the tabStyle defaults to the Home tab.To use a custom Visualforce tab, set the attribute to the name (not label) of the tab followed by a double-underscore and the word tab. For example, to use the styling of a Visualforce tab with the name Source and a label Sources, use tabStyle="Source__tab". |  | 10.0 | global |
| title | String | A string value that specifies the contents of the HTML <title> element added to the page by Visualforce. Use it to set the window or tab title for the page.In pages set to API 30.0 or later, the <apex:page> title attribute generates an HTML <title> element inside the Visualforce-generated <head> element, if there is one. Visualforce generates an HTML <head> element unless other attributes of <apex:page> are set in such a way that one isn’t generated. For example, if either applyHtmlTag or applyBodyTag is false, the value of the title attribute is ignored. These tags are used to take full control of the HTML generated by the page, and it's assumed that your page contains full and complete HTML markup, including your desired <title> element.In pages set to API 29.0 or lower, if the showHeader attribute of <apex:page> is set to false, no <title> element is generated.Note: When you’re editing a page in Developer Mode, the page title isn’t displayed. |  | 10.0 | global |
| wizard | Boolean | A boolean value that specifies whether the page uses the style of a standard Salesforce wizard page. If true, wizard styling is used. If not specified, this value defaults to false. |  | 10.0 | global |

## Code Examples

```
<!-- Page: -->
<apex:page renderAs="pdf">
    <style> body { font-family: 'Arial Unicode MS'; } </style>
    <h1>Congratulations</h1>
    <p>This is your new PDF</p>
</apex:page>
```
