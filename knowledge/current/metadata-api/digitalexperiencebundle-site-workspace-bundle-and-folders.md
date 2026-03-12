---
title: "DigitalExperienceBundle: Site Workspace Bundle and
		Folders"
domain: metadata-api
topic: digitalexperiencebundle-site-workspace-bundle-and-folders
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:38.887Z
estimatedTokens: 8426
keywords: [DigitalExperienceBundle, Site, Workspace, Bundle, Folders, uses, site, workspace, organize, data, enhanced, LWR, sites, content-focused, text-based, code, structure., sfdc, _cms, _appPage]
---

# DigitalExperienceBundle: Site Workspace Bundle and
		Folders

> DigitalExperienceBundle uses the site workspace
		type to organize data for enhanced LWR sites in a content-focused, text-based code
		structure.

# DigitalExperienceBundle: Site Workspace Bundle and Folders

DigitalExperienceBundle uses the site workspace type to organize data for enhanced LWR sites in a content-focused, text-based code structure.

The site folder contains one or more workspace folders, each representing the workspace for an individual enhanced LWR site. Each workspace folder contains a collection of related content items, such as settings and site components, that form the site when combined with data from the [DigitalExperienceConfig](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperienceconfig.htm "Represents details for your organization’s workspaces, such as the site label, site URL path prefix, and workspace type.") metadata type.

The workspace folder for each site includes content type folders, content item subfolders, and associated data that's contained in content.json and \_meta.json files.

![Site workspace type folder structure](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2FDigitalExperienceBundle_site.png&folder=api_meta)

The following content type folders represent the content types that are supported in an enhanced LWR site. For example, all routes in an enhanced LWR site are stored under the sfdc\_cms\_\_route content type folder.

-   [sfdc\_cms\_\_appPage Folder](#apppage_folder_section)
-   [sfdc\_cms\_\_brandingSet Folder](#brandingset_folder_section)
-   [sfdc\_cms\_\_languageSettings Folder](#languagesettings_folder_section)
-   [sfdc\_cms\_\_route Folder](#route_folder_section)
-   [sfdc\_cms\_\_site Folder](#site_folder_section)
-   [sfdc\_cms\_\_theme Folder](#theme_folder_section)
-   [sfdc\_cms\_\_themeLayout Folder](#themelayout_folder_section)
-   [sfdc\_cms\_\_view Folder](#view_folder_section)

## sfdc\_cms\_\_appPage Folder

This content type folder exists at the root level and contains one content subfolder that represents the site’s single-page application. Only one sfdc\_cms\_\_appPage content item is allowed per site.

The content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

| Property | Description |
| --- | --- |
| currentThemeId | Field Typecontent linkDescriptionRepresents the apiName of the site’s active theme. |
| headMarkup | Field TypestringDescriptionAllows the addition of custom markup to the site's main page <head> tag. Similar to using Experience Builder \| Setting \| Advanced \| Head Markup.See Salesforce Help for markup guidance. |
| isLockerServiceEnabled | Field TypebooleanDescriptionIndicates whether Lightning Locker is enabled (true) or not (false). The default value is true. |
| isRelaxedCSPLevel | Field TypebooleanDescriptionControls the ability to run scripts and controls script access to third-party hosts. The default is false.A false value sets a strict CSP security level, and blocks access to inline scripts and all hosts. A true value sets a relaxed CSP security level, and permits access to inline scripts and allowed hosts. To learn more, see Select a Security Level in Experience Builder Sites. |
| templateName | Field TypestringDescriptionRequired.The unique developer name of the template. Valid values are:talon-template-byo—Represents the Build Your Own (LWR) templatemicrosite-template-marketing—Represents the Microsite template |
| title | Field TypestringDescriptionRequired.Represents the label of the appPage. |
| type | Field TypestringDescriptionRequired.Represents the content type. The only allowed value is sfdc_cms__appPage. |

```

```

## sfdc\_cms\_\_brandingSet Folder

This content type folder contains one content subfolder per branding set. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

| Property | Description |
| --- | --- |
| brandingSetType | Field Typeenumeration of type stringDescriptionRepresents whether the color palette stored in the branding set is for the entire site or a specific section. You can’t change one branding set type to another.Valid values are:APP—The branding set applies to the entire site. There can be only one branding set of this type.SCOPED—A SCOPED branding set can be applied only to a section component. |
| definitionName | Field TypestringDescriptionRequired. Represents the name for the branding set used in the site or template’s theme.There are two standard templates that have unique naming:Build Your Own (LWR) uses talon-template-byo:brandingMicrosite uses microsite-template-marketing:branding |
| title | Field TypestringDescriptionRequired.Represents the label of the brandingSet content item.The maximum length is 100 characters. The title must be unique within the space’s brandingSet content items. |
| type | Field TypestringDescriptionRequired.Represents the content type. The only supported value is sfdc_cms__brandingSet. |
| values | Field Typeobject (map)DescriptionRequired.Represents a map of branding values that can be applied to a site. |

```

```

## sfdc\_cms\_\_languageSettings Folder

This content type folder contains one content subfolder called languages. The languages content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

| Property | Description |
| --- | --- |
| defaultLocale | Field TypestringDescriptionRepresents the default locale for a workspace. The language listed here is the default fallback language for all of the workspace’s languageTypes. |
| languages | Field TypelanguageType[]DescriptionRequired.Represents the languages available in the space. Each languageType contains values related to that particular language. |
| languageType.fallbacklocale | Field TypestringDescriptionRepresents the locale to use when no content is available for the selected locale. For example, if a site visitor chooses Japanese from the language selector but there’s no content for that page in Japanese, content is displayed in the fallback locale.The fallbackLocale's isAuthoringOnly value must be false.Only one level of fallback is allowed. Here are examples for a workspace with a locale of en_US, and with Spanish, French, and Finnish as supported locales.Not allowed: Spanish falls back to French, and French falls back to Finnish. This configuration includes two levels of fallback.Allowed: Spanish falls back to French, and French falls back to English. en_US is the workspace’s default.Allowed: Spanish falls back to French, and French has no fallback.This property is displayed only if the languageType.fallbackLocale is different from the workspace’s default locale. |
| languageType.isActive | Field TypebooleanDescriptionIndicates whether the language is active (true) or inactive (false). The only supported value is true. |
| languageType.isAuthoringOnly | Field TypebooleanDescriptionIndicates whether the language is scoped only to authoring workspace (true) or not (false). The default value is false.When set to true, the languageType and its associated translations aren’t visible to site visitors. When set to false, site visitors can see the languageType and its associated translations. |
| languageType.label | Field TypestringDescriptionRequired. Defines the display label for a language. The display label appears in any language selector components that you add to your site and in the language selector in Experience Builder.The default value is the locale name. For example, if languageType.locale=fr, then languageType.label=French. |
| languageType.locale | Field TypestringDescriptionRequired. Represents the languageCode appended with the countryCode, separated by an underscore. For example, en_US indicates a languageCode of English, and a countryCode of United States.Defines the locale, or geographic region, of a language. Locales determine the display format for date and time, user names, address, and commas and periods in numbers.Each languageType.locale and languageType.label combination can be used only one time per workspace. |
| title | Field TypestringDescriptionRequired.Represents the label of the content item. |
| type | Field TypestringDescriptionRequired.Represents the content type. The only allowed value is sfdc_cms__languageSettings. |

```

```

## sfdc\_cms\_\_route Folder

This content type folder contains one content subfolder for each of the site’s routes. Each route content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

| Property | Description |
| --- | --- |
| activeViewId | Field Typecontent linkDescriptionRequired.Represents the apiName of the route’s active view.Must reference an existing view in the same workspace. |
| configurationTags | Field Typestring[]DescriptionRepresents the configuration tags for the route. The only allowed value is all-in-static-site.NoteDon’t edit this property, because it’s an internal property. |
| pageAccess | Field Typeenumeration of type stringDescriptionIdentifies the status of a route as public or private.When set to the default value UseParent, the status of the site determines the status of the route. This value isn’t editable from the user interface for routes that are always private.Valid values are:UseParentPublicRequiresLoginNoteYou can change the pageAccess value only if the site is authenticated. |
| routeType | Field TypestringDescriptionRequired.Identifies the type of route. The routeType value must be unique within a workspace. This value must match the viewType value in the corresponding view content item. |
| title | Field TypestringDescriptionRequired.Represents the label of the route. |
| type | Field TypestringDescriptionRequired.Represents the content type. The only supported value is sfdc_cms__route. |
| urlPrefix | Field TypestringDescriptionRequired.Represents the base URL for the route. |

```

```

## sfdc\_cms\_\_site Folder

This content type folder exists at the root level and contains one content subfolder. The content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

| Property | Description |
| --- | --- |
| authenticationType | Field Typeenumeration of type stringDescriptionRequired.Indicates whether guest users have access to the site.Valid values are:AUTHENTICATED—The site isn’t public. Only authenticated users can access the site after logging in.AUTHENTICATED_WITH_PUBLIC_ACCESS_ENABLED—The site is an authenticated site, but the Public can access the site checkbox is enabled in Experience Builder in Settings \| General. Guest users can access the site.UNAUTHENTICATED—The unauthenticated site is publicly available to anyone on the web, and doesn’t support login or authentication. UNAUTHENTICATED is a legacy value. We recommend using AUTHENTICATED_WITH_PUBLIC_ACCESS_ENABLED access to allow guest user access. |
| title | Field TypestringDescriptionRequired.Represents the label of the content item. |
| type | Field TypestringDescriptionRequired.Represents the content type. The only allowed value is sfdc_cms__site. |

```

```

## sfdc\_cms\_\_theme Folder

This content type folder contains one content subfolder, representing the site’s theme. The content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

| Property | Description |
| --- | --- |
| activeBrandingSetId | Field Typecontent linkDescriptionRequired.Represents the apiName of the site’s active branding set.Must reference an existing brandingSet with a type of APP in the same workspace. |
| definitionName | Field TypestringDescriptionRequired.Represents the definition name of a theme.Must match the template’s theme definition name. |
| layouts | Field Typelayout[]DescriptionRequired.Represents an array of the theme layouts available in the workspace and provides details about each theme layout.The template and features used in the workspace determine which layouts are required. For example, the ServiceNotAvailable layout is required if the site includes a Service Not Available page. |
| layouts.layoutId | Field Typecontent linkDescriptionRequired.Represents the apiName of an available theme layout. Must refer to an existing theme layout in the same workspace. |
| layouts.layoutType | Field TypestringDescriptionRepresents the name of the theme layout specified in Experience Builder.An inner theme layout is required. The inner theme layout is applied by default to all of a site’s pages except for login pages. |
| title | Field TypestringDescriptionRequired.Represents the name of the theme. |
| type | Field TypestringDescriptionRequired.Represents the content type. The only allowed value is sfdc_cms__theme. |

```

```

## sfdc\_cms\_\_themeLayout Folder

This content type folder contains one content subfolder for each theme layout in the site. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

We recommend that you don’t add, reorder, or delete a component within a locked region using the DigitalExperienceBundle. To find out which regions are locked, in Experience Builder, view the Page Structure tab for the page that you’re working on. If the region that you’re modifying has a lock icon next to it, it’s a locked region.

<apiName>/content.json

| Property | Description |
| --- | --- |
| children | Field TyperegionType[]DescriptionRepresents individual regions within a layout. |
| component | Field TypecomponentTypeDescriptionRequired.Contains the layout details for this theme layout in regions and components. |
| componentType.attributes | Field TypemapDescriptionA map of design attribute values used by the component definition to render the definition. |
| componentType.attributes.dxpStyle | Field TypemapDescriptionLets you define visibility, padding, and margin values for a component.Visibility controls whether the component is visible on desktop, tablet, and mobile versions of your site.Margin and padding are map types that contain string properties for top, right, bottom, and left spacing. Padding controls space within a component. Margin controls space around the outside of a component. Units for margin and padding can be px, rem, or %, and all four spacing values must use the same unit. This field is available in API version 57.0 and later. |
| componentType.children | Field TyperegionType[]DescriptionRepresents regions within a component. |
| componentType.definition | Field TypestringDescriptionRequired.Represents the name of the Lightning Web Component (LWC) using the format namespace:componentName.Must be one of the theme layouts defined as part of the default theme, or use the target lightningCommunity__Theme_Layout. The default theme layouts differ per theme. For example, the Build Your Own (BYO) template uses the BYO theme, with the allowed theme layouts community_byo:scopedHeaderandFooter and community_layout:simpleThemeLayout. |
| componentType.id | Field TypeUUIDDescriptionRequired.Represents the UUID of a component. |
| componentType.scopedBrandingSetId | Field Typecontent linkDescriptionRepresents the brandingSet that applies to this component. The brandingSet must be of type SCOPED.This property is applicable only if the component’s definitionName is community_layout:section. |
| componentType.customCssClasses | Field TypestringDescriptionRepresents the custom CSS classes applied to the host element of the component. Must be a space-delimited list of valid CSS classes. This field is available in API version 59.0 and later. |
| componentType.title | Field TypestringDescriptionRepresents a component variation name. Available in API version 59.0 and later. |
| componentType.type | Field TypestringDescriptionRequired.Allowed values are:componentmutationComponent |
| componentType.variations | Field TypecomponentType[]DescriptionRepresents a component variation within a component. Available in API version 59.0 and later. |
| componentVariationType.rule | Field Typerule typeDescriptionA visibility rule associated with a component variation. Available in API version 59.0 and later. |
| componentVariationType.variationId | Field TypestringDescriptionThe unique ID of a component variation. Available in API version 59.0 and later. |
| contentOperations | Field TypecontentOperationTypeDescriptionA content operation of the variation or visibility type. |
| contentOperationsType.operations | Field TypeoperationsType[]DescriptionComponent visibility operation. |
| expressionCriteriaType.criterionNumber | Field TypeintegerDescriptionThe sequence number of an expression criteria. Available in API version 59.0 and later. |
| expressionCriteriaType.operator | Field TypestringDescriptionOperator of the criteria or condition in a visibility rule.Supported operators are:EQUALNE: Does not equalCONTAINSNC: Does not containLT: Less thanGT: Greater thanLE: Less than or equal toGE: Greater than or equal toStartsWith |
| expressionCriteriaType.resource | Field TypestringDescriptionThe resource of the criteria or condition in a visibility rule. |
| expressionCriteriaType.value | Field TypeobjectDescriptionThe value of the criteria or condition in a visibility rule. The value can be number, boolean, or string. |
| operationsType.isActive | Field TypebooleanDescriptionWhen true, the visibility operation is active. |
| operationsType.isHiddenOnOperationSuccess | Field TypebooleanDescriptionWhen true, the component is hidden when the operation is successful. |
| operationsType.rule | Field TypeRuleTypeDescriptionThe component visibility rule. |
| operationsType.ruleToVariationList | Field TypecomponentVariationType[]DescriptionVariation rules associated with a specific component ID. Only 15 variations are allowed in one ruleToVariationList, which means only 15 variations can correspond to a specific targetId. Available in API version 59.0 and later. |
| operationsType.targetId | Field TypestringDescriptionThe component ID where the visibility rule is applied. |
| regionType.children | Field TypecomponentType[]DescriptionRepresents individual components within the region. |
| regionType.id | Field TypeUUIDDescriptionRequired.Represents the UUID of a region. |
| regionType.name | Field TypestringDescriptionRequired.Represents the name of the region. |
| regionType.title | Field TypestringDescriptionRepresents the label for a region. |
| regionType.type | Field TypestringDescriptionRequired.region is the only allowed value. |
| regionType.variations | Field TypecomponentType[]DescriptionRepresents a component variation within a region. Available in API version 59.0 and later. |
| ruleType.criteriaType | Field TypestringDescriptionThe condition or criteria type of the rule. Allowed values include AllCriteriaMatch and AnyCriterionMatches. |
| ruleType.customFormula | Field TypestringDescriptionA custom formula created from expression criteria for a visibility rule. Available in API version 59.0 and later. |
| ruleType.description | Field TypestringDescriptionThe description of a visibility rule. |
| ruleType.expressionCriteria | Field TypeexpressionCriteriaType[]DescriptionThe expression criteria of a visibility rule. |
| ruleType.name | Field TypestringDescriptionThe name of a visibility rule. |
| title | Field TypestringDescriptionRequired.Represents the label of the content item. |
| type | Field TypestringDescriptionRequired.Represents the content type. The only allowed value is sfdc_cms__themeLayout. |

```

```

## sfdc\_cms\_\_view Folder

This content type folder contains one content subfolder per view. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

Each Experience Builder site is built from single-page applications, which are web apps that load a single HTML page. Single-page applications consist of multiple views that update the page dynamically as the user interacts with it. A view is made up of regions that contain other regions or components in the rendered page for the user. Single-page applications in your site are defined in the sfdc\_cms\_\_appPage folder.

Each content.json file in the sfdc\_cms\_\_view folder contains a hidden region named sfdcHiddenRegion. The hidden region contains a component with a definition of community\_builder:seoAssistant that represents the SEO assistant component. This component corresponds to the SEO page properties that you can configure in Experience Builder and isn't visible on your pages. To improve search engine results, use the SEO assistant component to set the customHeadTags, description, and pageTitle properties for your public and custom site pages. You can’t edit the other properties associated with the SEO assistant component. To learn more about what the title, description, and custom head tags properties represent and which head tags are allowed, see [SEO Page Properties in Experience Builder](https://help.salesforce.com/s/articleView?id=experience.networks_seo_tags.htm&type=5&language=en_US "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

We recommend that you don’t add, reorder, or delete a component within a locked region using the DigitalExperienceBundle. To find out which regions are locked, in Experience Builder, view the Page Structure tab for the page that you’re working on. If the region that you’re modifying has a lock icon next to it, it’s a locked region.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If there are specific style overrides for mobile or tablet views in the target org, make sure that these overrides are also present in the source org. If the target org contains mobile or tablet JSON files within the mobile or tablet folders that aren’t present in the source org, deploying the DigitalExperienceBundle fails.

<apiName>/content.json

| Property | Description |
| --- | --- |
| children | Field TyperegionType[]DescriptionRepresents individual regions within a view. |
| component | Field TypecomponentTypeDescriptionRequired.Represents the view layout and contains regions and components that help render a view. |
| componentType.attributes | Field TypemapDescriptionA map of design attribute values used by the component definition to render the definition. |
| componentType.attributes.dxpStyle | Field TypemapDescriptionLets you define visibility, padding, and margin values for a component.Visibility controls whether the component is visible on desktop, tablet, and mobile versions of your site.Margin and padding are map types that contain string properties for top, right, bottom, and left spacing. Padding controls space within a component. Margin controls space around the outside of a component. Units for margin and padding can be px, rem, or %, and all four spacing values must use the same unit. This field is available in API version 57.0 and later. |
| componentType.children | Field TyperegionType[]DescriptionRepresents regions within a component. |
| componentType.definition | Field TypestringDescriptionRequired.Represents the name of the Lightning Web Component (LWC) in the format namespace:componentName. |
| componentType.id | Field TypeUUIDDescriptionRequired.Represents the UUID of a component. |
| componentType.scopedBrandingSetId | Field Typecontent linkDescriptionRepresents the brandingSet that applies to this component. The brandingSet must be of type SCOPED.This property is applicable only if the component’s definitionName is community_layout:section. |
| componentType.customCssClasses | Field TypestringDescriptionRepresents the custom CSS classes applied to the host element of the component. Must be a space-delimited list of valid CSS classes. This field is available in API version 59.0 and later. |
| componentType.title | Field TypestringDescriptionRepresents a component variation name. Available in API version 59.0 and later. |
| componentType.type | Field TypestringDescriptionRequired.Allowed values are:componentmutationComponent |
| componentType.variations | Field TypecomponentType[]DescriptionRepresents a component variation within a component. Available in API version 59.0 and later. |
| componentVariationType.rule | Field Typerule typeDescriptionA visibility rule associated with a component variation. Available in API version 59.0 and later. |
| componentVariationType.variationId | Field TypestringDescriptionThe unique ID of a component variation. Available in API version 59.0 and later. |
| contentOperations | Field TypecontentOperationTypeDescriptionA content operation of the variation or visibility type. |
| expressionCriteriaType.criterionNumber | Field TypeintegerDescriptionThe sequence number of an expression criteria. Available in API version 59.0 and later. |
| contentOperationsType.operations | Field TypeoperationsType[]DescriptionComponent visibility operation. |
| expressionCriteriaType.operator | Field TypestringDescriptionOperator of the criteria or condition in a visibility rule.Supported operators are:EQUALNE: Does not equalCONTAINSNC: Does not containLT: Less thanGT: Greater thanLE: Less than or equal toGE: Greater than or equal toStartsWith |
| expressionCriteriaType.resource | Field TypestringDescriptionThe resource of the criteria or condition in a visibility rule. |
| expressionCriteriaType.value | Field TypeobjectDescriptionThe value of the criteria or condition in a visibility rule. The value can be number, boolean, or string. |
| operationsType.isActive | Field TypebooleanDescriptionWhen true, the visibility operation is active. |
| operationsType.isHiddenOnOperationSuccess | Field TypebooleanDescriptionWhen true, the component is hidden when the operation is successful. |
| operationsType.rule | Field TypeRuleTypeDescriptionThe component visibility rule. |
| operationsType.ruleToVariationList | Field TypecomponentVariationType[]DescriptionVariation rules associated with a specific component ID. Only 15 variations are allowed in one ruleToVariationList, which means only 15 variations can correspond to a specific targetId. Available in API version 59.0 and later. |
| operationsType.targetId | Field TypestringDescriptionThe component ID where the visibility rule is applied. |
| regionType.children | Field TypecomponentType[]DescriptionRepresents individual components within the region. |
| regionType.id | Field TypeUUIDDescriptionRequired.Represents the UUID of a region. |
| regionType.name | Field TypestringDescriptionRequired.Represents the name of the region. |
| regionType.title | Field TypestringDescriptionRepresents the label for a region. |
| regionType.type | Field TypestringDescriptionRequired.region is the only allowed value. |
| regionType.variations | Field TypecomponentType[]DescriptionRepresents a component variation within a region. Available in API version 59.0 and later. |
| ruleType.criteriaType | Field TypestringDescriptionThe condition or criteria type of the rule. Allowed values include AllCriteriaMatch and AnyCriterionMatches. |
| ruleType.customFormula | Field TypestringDescriptionA custom formula created from expression criteria for a visibility rule. Available in API version 59.0 and later. |
| ruleType.description | Field TypestringDescriptionThe description of a visibility rule. |
| ruleType.expressionCriteria | Field TypeexpressionCriteriaType[]DescriptionThe expression criteria of a visibility rule. |
| ruleType.name | Field TypestringDescriptionThe name of a visibility rule. |
| themeLayoutType | Field TypestringDescriptionRequired.Represents the apiName of the view’s active theme layout.Must reference an existing theme layout in the same workspace. |
| title | Field TypestringDescriptionRepresents the name of the view. Limited to 80 characters.NoteWe recommend keeping the title value and the pageTitle value in sync. If you update either value for a view, ensure that you manually update the other value in the same content.json file to match. |
| type | Field TypestringDescriptionRequired.Represents the content type. The only allowed value is sfdc_cms__view. |
| viewType | Field TypestringDescriptionRequired.Identifies the type of view. The viewType value must be unique within a workspace. This value must match the routeType value in the corresponding route content item. |

{ "type" : "sfdc\_cms\_\_view", "title" : "Home", "contentBody" : { "themeLayoutType" : "Inner", "viewType" : "home", "component" : { "id" : "40c14c97-1846-4872-8e9e-cdf3d11beb34", "type" : "component", "children" : \[ { "title" : "Content", "id" : "c507f23d-6e2a-457a-9656-2377846dd639", "type" : "region", "children" : \[ { "id" : "21f99012-3a2f-488e-bf48-f782dc7b4300", "type" : "component", "children" : \[ { "title" : "Column 1", "id": "05224a3a-8044-4bfb-9187-b3f43155344d", "type" : "region", "children" : \[ { "id" : "05224a3a-8044-4bfb-9187-b3f43155344d", "type" : "component", "definition" : "community\_builder:htmlEditor", "attributes" : { "dxpStyle" : { "isVisible" : false, "margin" : { "bottom" : "20px", "left" : "20px", "right" : "20px", "top" : "20px" }, "padding" : { "bottom" : "20px", "left" : "20px", "right" : "20px", "top" : "20px" } }, "richTextValue" : "<div style="display: flex; justify-content: center; align-items: center; margin: 50px 0; flex-direction: column; text-align: center;"><div style="background-image: url(assets/img/desert.svg); background-size: cover; background-position: center; height: 300px; width: 100%; max-width: 600px; min-width: 300px;"></div><h1 class="slds-text-heading\_medium slds-p-bottom\_x-small">Start Building Your Page</h1> <div>Drag and drop a component into the content slots.</div></div>" }, "variations": \[ { "id": "5d700461-4c2a-4930-98e5-366ec2a4d41e", "title": "Variation Country USA", "type": "mutationComponent", "definition": "community\_builder:htmlEditor", "attributes": { "richTextValue": "<div style="display: flex; justify-content: center; align-items: center; margin: 50px 0; flex-direction: column; text-align: center;"><div style="background-image: url(assets/img/desert.svg); background-size: cover; background-position: center; height: 300px; width: 100%; max-width: 600px; min-width: 300px;"></div><h1 class="slds-text-heading\_medium slds-p-bottom\_x-small">Start Building Your Page</h1> <div>Drag and drop a component into the content slots.</div></div>" } } \] "customCssClasses": "myClass" } \], "name" : "col1" } \], "definition" : "community\_layout:section", "attributes" : { "backgroundImageConfig" : "", "backgroundImageOverlay" : "rgba(0,0,0,0)", "sectionConfig" : "{"UUID":"21f99012-3a2f-488e-bf48-f782dc7b4300","columns":\[{"UUID":"5019aeeb-6437-4194-8369-22c19aa45dc9","columnName":"Column 1","columnKey":"col1","columnWidth":"12","seedComponents":null}\]}" } } \], "name" : "content" }, { "title" : "sfdcHiddenRegion", "id" : "8157e041-9c41-460a-b596-c45babbbd53b", "type" : "region", "children" : \[ { "id" : "2d536aae-a859-4264-ba9e-9a569daf7213", "type" : "component", "definition" : "community\_builder:seoAssistant", "attributes" : { "customHeadTags" : "", "description" : "", "pageTitle" : "Home", "recordId" : "{!recordId}" } } \], "name" : "sfdcHiddenRegion" } \], "definition": "community\_layout:sldsFlexibleLayout" }, "contentOperations": { "operations": \[ { "targetId": "05224a3a-8044-4bfb-9187-b3f43155344d", "isHiddenOnOperationSuccess": false, "isActive": true, "rule": { "name": "a53bb452-003f-4015-a751-0403c70731a1", "description": "", "criteriaType": "AllCriteriaMatch", "expressionCriteria": \[ { "resource": "User.isGuest", "operator": "Equal", "value": false } \] } }, { "targetId": "05224a3a-8044-9h2h-9187-b3f43155344d", "ruleToVariationList": \[ { "variationId": "5d700461-4c2a-4930-98e5-366ec2a4d41e", "rule": { "name": "6e1ea488-13d8-477a-a9d7-93f442cc7936", "description": "", "criteriaType": "CustomLogicMatches", "customFormula": "(1 && 3) || 2", "expressionCriteria": \[ { "resource": "User.Record.Country", "operator": "Equal", "value": "USA", "criterionNumber": 1 }, { "resource": "User.Record.City", "operator": "Equal", "value": "Chicago", "criterionNumber": 2 }, { "resource": "User.Record.PostalCode", "operator": "Equal", "value": "60131", "criterionNumber": 3 } \] } } \] } \] } } }

## Code Examples

```
{
  "type" : "sfdc_cms__appPage",
  "title" : "main",
  "contentBody" : {
    "currentThemeId" : "Build_Your_Own_LWR",
    "headMarkup" : "<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Welcome to LWC Communities!</title>

<link rel="stylesheet" href="{ basePath }/assets/styles/styles.css?{ versionKey }" />


<!-- webruntime-branding-shared stylesheets -->
<link rel="stylesheet" href="{ basePath }/assets/styles/salesforce-lightning-design-system.min.css?{ versionKey }" />
<link rel="stylesheet" href="{ basePath }/assets/styles/dxp-site-spacing-styling-hooks.min.css?{ versionKey }" />
<link rel="stylesheet" href="{ basePath }/assets/styles/dxp-styling-hooks.min.css?{ versionKey }" />
<link rel="stylesheet" href="{ basePath }/assets/styles/dxp-slds-extensions.min.css?{ versionKey }" />


<!-- webruntime-branding-shared stylesheets -->",
    "isLockerServiceEnabled" : true,
    "isRelaxedCSPLevel" : false,
    "templateName" : "talon-template-byo"
  }
}
```

```
{
  "type" : "sfdc_cms__brandingSet",
  "title" : "Build Your Own (LWR)",
  "contentBody" : {
    "brandingSetType" : "APP",
    "definitionName" : "talon-template-byo:branding",
    "values" : {
      "BackgroundColor" : "#ffffff",
      "BaseFontSize" : "1rem",
      "BodyFont" : "Salesforce Sans",
      "BodyFontSize" : "1rem",
      "BodyFontStyle" : "normal",
      "BodyFontWeight" : "400",
      "BodyLetterSpacing" : "0em",
      "BodyLineHeight" : "1.5",
      "BodySmallFont" : "Salesforce Sans",
      "BodySmallFontSize" : "0.75rem",
      "BodySmallFontStyle" : "normal",
      "BodySmallFontWeight" : "400",
      "BodySmallLetterSpacing" : "0em",
      "BodySmallLineHeight" : "1.25",
      "BodySmallTextColor" : "var(--dxp-g-root-contrast)",
      "BodySmallTextDecoration" : "none",
      "BodySmallTextTransform" : "none",
      "BodyTextColor" : "var(--dxp-g-root-contrast)",
      "BodyTextDecoration" : "none",
      "BodyTextTransform" : "none",
      "ButtonActiveColor" : "var(--dxp-s-button-color-1)",
      "ButtonBorderRadius" : "4px",
      "ButtonColor" : "var(--dxp-g-brand)",
      "ButtonFocusColor" : "var(--dxp-s-button-color-1)",
      "ButtonFont" : "Salesforce Sans",
      "ButtonFontSize" : "1rem",
      "ButtonFontStyle" : "normal",
      "ButtonFontWeight" : "400",
      "ButtonHoverColor" : "var(--dxp-s-button-color-1)",
      "ButtonLargeBorderRadius" : "4px",
      "ButtonLargeFontSize" : "1.25rem",
      "ButtonLargePadding" : "1.25rem",
      "ButtonLetterSpacing" : "0em",
      "ButtonLineHeight" : "2",
      "ButtonPadding" : "1rem",
      "ButtonSmallBorderRadius" : "4px",
      "ButtonSmallFontSize" : "0.75rem",
      "ButtonSmallPadding" : "0.75rem",
      "ButtonTextTransform" : "none",
      "ColumnSpacerSizeDesktop" : "1rem",
      "ColumnSpacerSizeMobile" : "0.75rem",
      "ComponentSpacerSizeDesktop" : "1.5rem",
      "ComponentSpacerSizeMobile" : "1.5rem",
      "DropdownBackgroundColor" : "var(--dxp-g-root)",
      "DropdownBackgroundHoverColor" : "var(--dxp-g-neutral)",
      "DropdownBorderColor" : "var(--dxp-g-neutral)",
      "DropdownTextColor" : "var(--dxp-g-root-contrast)",
      "DropdownTextHoverColor" : "var(--dxp-g-neutral-contrast)",
      "FormElementBackgroundColor" : "var(--dxp-g-root)",
      "FormElementBorderColor" : "var(--dxp-g-neutral-3)",
      "FormElementBorderRadius" : "4px",
      "FormElementBorderWidth" : "1px",
      "FormElementLabelColor" : "var(--dxp-g-root-contrast)",
      "FormElementTextColor" : "var(--dxp-g-root-contrast)",
      "HeadingExtraLargeColor" : "var(--dxp-g-root-contrast)",
      "HeadingExtraLargeFont" : "Salesforce Sans",
      "HeadingExtraLargeFontSize" : "2.5rem",
      "HeadingExtraLargeFontStyle" : "normal",
      "HeadingExtraLargeFontWeight" : "300",
      "HeadingExtraLargeLetterSpacing" : "0em",
      "HeadingExtraLargeLineHeight" : "1.25",
      "HeadingExtraLargeTextDecoration" : "none",
      "HeadingExtraLargeTextTransform" : "none",
      "HeadingLargeColor" : "var(--dxp-g-root-contrast)",
      "HeadingLargeFont" : "Salesforce Sans",
      "HeadingLargeFontSize" : "1.75rem",
      "HeadingLargeFontStyle" : "normal",
      "HeadingLargeFontWeight" : "300",
      "HeadingLargeLetterSpacing" : "0em",
      "HeadingLargeLineHeight" : "1.25",
      "HeadingLargeTextDecoration" : "none",
      "HeadingLargeTextTransform" : "none",
      "HeadingMediumColor" : "var(--dxp-g-root-contrast)",
      "HeadingMediumFont" : "Salesforce Sans",
      "HeadingMediumFontSize" : "1.25rem",
      "HeadingMediumFontStyle" : "normal",
      "HeadingMediumFontWeight" : "300",
      "HeadingMediumLetterSpacing" : "0em",
      "HeadingMediumLineHeight" : "1.25",
      "HeadingMediumTextDecoration" : "none",
      "HeadingMediumTextTransform" : "none",
      "HeadingSmallColor" : "var(--dxp-g-root-contrast)",
      "HeadingSmallFont" : "Salesforce Sans",
      "HeadingSmallFontSize" : "1.125rem",
      "HeadingSmallFontStyle" : "normal",
      "HeadingSmallFontWeight" : "300",
      "HeadingSmallLetterSpacing" : "0em",
      "HeadingSmallLineHeight" : "1.25",
      "HeadingSmallTextDecoration" : "none",
      "HeadingSmallTextTransform" : "none",
      "HorizontalRowPaddingDesktop" : "1rem",
      "HorizontalRowPaddingMobile" : "0.75rem",
      "LinkColor" : "var(--dxp-g-brand)",
      "LinkHoverColor" : "var(--dxp-s-link-text-color-1)",
      "LinkTextDecoration" : "none",
      "LinkTextDecorationFocus" : "underline",
      "LinkTextDecorationHover" : "underline",
      "MaxContentWidthDesktop" : "1800px",
      "MaxContentWidthMobile" : "none",
      "MobileBaseFontSize" : "1rem",
      "PrimaryAccentColor" : "#005fb2",
      "PrimaryAccentForegroundColor" : "#ffffff",
      "SiteLogo" : "",
      "TextColor" : "#1a1b1e",
      "VerticalRowPaddingDesktop" : "1rem",
      "VerticalRowPaddingMobile" : "0.75rem",
      "_BackgroundColor1" : "#ebebeb",
      "_BackgroundColor2" : "#c2c2c2",
      "_BackgroundColor3" : "#858585",
      "_ButtonActiveColorContrast" : "var(--dxp-g-brand-contrast-1)",
      "_ButtonColor1" : "var(--dxp-g-brand-1)",
      "_ButtonColorContrast" : "var(--dxp-g-brand-contrast)",
      "_ButtonFocusColorContrast" : "var(--dxp-g-brand-contrast-1)",
      "_ButtonHoverColorContrast" : "var(--dxp-g-brand-contrast-1)",
      "_DestructiveColor" : "#c23934",
      "_DestructiveColor1" : "#a2302b",
      "_DestructiveColor2" : "#611d1a",
      "_DestructiveColor3" : "#010000",
      "_DestructiveForegroundColor" : "#ffffff",
      "_DestructiveForegroundColor1" : "#ffffff",
      "_DestructiveForegroundColor2" : "#ffffff",
      "_DestructiveForegroundColor3" : "#ffffff",
      "_InfoColor" : "#16325c",
      "_InfoColor1" : "#0e203b",
      "_InfoColor2" : "#000000",
      "_InfoColor3" : "#000000",
      "_InfoForegroundColor" : "#ffffff",
      "_InfoForegroundColor1" : "#ffffff",
      "_InfoForegroundColor2" : "#ffffff",
      "_InfoForegroundColor3" : "#ffffff",
      "_LinkColor1" : "var(--dxp-g-brand-1)",
      "_NeutralColor" : "#ecebea",
      "_NeutralColor1" : "#d9d7d5",
      "_NeutralColor2" : "#b2aeaa",
      "_NeutralColor3" : "#76716b",
      "_NeutralForegroundColor" : "#000000",
      "_NeutralForegroundColor1" : "#000000",
      "_NeutralForegroundColor2" : "#000000",
      "_NeutralForegroundColor3" : "#ffffff",
      "_OfflineColor" : "#444444",
      "_OfflineColor1" : "#303030",
      "_OfflineColor2" : "#070707",
      "_OfflineColor3" : "#000000",
      "_OfflineForegroundColor" : "#ffffff",
      "_OfflineForegroundColor1" : "#ffffff",
      "_OfflineForegroundColor2" : "#ffffff",
      "_OfflineForegroundColor3" : "#ffffff",
      "_PrimaryAccentColor1" : "#004989",
      "_PrimaryAccentColor2" : "#001e38",
      "_PrimaryAccentColor3" : "#000000",
      "_PrimaryAccentForegroundColor1" : "#ffffff",
      "_PrimaryAccentForegroundColor2" : "#ffffff",
      "_PrimaryAccentForegroundColor3" : "#ffffff",
      "_SiteLogoUrl" : "",
      "_SuccessColor" : "#4bca81",
      "_SuccessColor1" : "#36b66c",
      "_SuccessColor2" : "#237747",
      "_SuccessColor3" : "#07190f",
      "_SuccessForegroundColor" : "#000000",
      "_SuccessForegroundColor1" : "#000000",
      "_SuccessForegroundColor2" : "#ffffff",
      "_SuccessForegroundColor3" : "#ffffff",
      "_TextColor1" : "#000000",
      "_TextColor2" : "#000000",
      "_TextColor3" : "#000000",
      "_WarningColor" : "#ffb75d",
      "_WarningColor1" : "#ffa534",
      "_WarningColor2" : "#e27d00",
      "_WarningColor3" : "#673900",
      "_WarningForegroundColor" : "#000000",
      "_WarningForegroundColor1" : "#000000",
      "_WarningForegroundColor2" : "#000000",
      "_WarningForegroundColor3" : "#ffffff"
    }
  }
}
```

```
{
  "type" : "sfdc_cms__languageSettings",
  "title" : "LanguageContent",
  "contentBody" : {
    "languages" : [ {
      "locale" : "en_US",
      "label" : "English (US)",
      "isActive" : true,
      "isAuthoringOnly" : false
    } ],
    "defaultLocale" : "en_US"
  }
}
```

```
{
  "type" : "sfdc_cms__route",
  "title" : "Error",
  "contentBody" : {
    "activeViewId" : "error",
    "configurationTags" : [ ],
    "pageAccess" : "UseParent",
    "routeType" : "error",
    "urlPrefix" : "error"
  }
}
```

```
{
  "type" : "sfdc_cms__site",
  "title" : "Capricorn_Coffee",
  "contentBody" : {
    "authenticationType" : "AUTHENTICATED"
  }
}
```

## Related Topics

- DigitalExperienceConfig (atlas.en-us.api_meta.meta/api_meta/meta_digitalexperienceconfig.htm)
- _meta.json (atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
