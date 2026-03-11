---
title: "ExperienceBundle"
domain: metadata-api
topic: experiencebundle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:52.373Z
keywords: [ExperienceBundle, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ExperienceResources, ExperienceResource, Folders, Bundled, Definitions, brandingSets, Folder, config, Note, routes]
---

# ExperienceBundle

# ExperienceBundle

Represents a text-based code structure of the settings and site components, such as pages, branding sets, and themes that make up an Experience Builder site. Developers can quickly update and deploy Experience Builder sites *programmatically* using their preferred development tools. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExperienceBundle components have the suffix .json and are stored in the experiences folder when retrieved. Each Experience Builder site in your org has its own folder. Each of these folders contains [other folders for the supported properties](#experience_bundle_folders_section).

The ExperienceBundle can contain one or more site definitions under the experiences folder. Each site definition has resource folders for [brandingSets](#brandingSets_folder), [config](#config_folder), [routes](#routes_folder), [themes](#themes_folder), [variations](#variations_folder), and [views](#views_folder), each with additional, related configuration information in JSON files. Here’s an example site definition, showing the resource folders.

![Three-level folder structure](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Fmigrate_experiencebundle_structure.png&folder=api_meta)

## Version

ExperienceBundle components are available in API version 46.0 and later.

## Special Access Rules

To use the ExperienceBundle metadata type for Aura-based Experience Builder sites, from Setup, enter Digital Experiences in the Quick Find box, and then select **Settings**. Select **Enable ExperienceBundle Metadata API**, and save your changes. LWR sites use ExperienceBundle by default.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| experienceResources | ExperienceResources[] | The list of resources in this ExperienceBundle. Each resource represents an artifact of a site such as brandingSets, config, routes, themes, variations, and views. |
| label | string | Required. Represents the name of the ExperienceBundle. |
| type | SiteType (enumeration of type string) | Required. Identifies the kind of site. Only Experience Builder sites are supported, using the value ChatterNetworkPicasso. |
| urlPathPrefix | string | Specify a URL prefix for an Experience Builder site. For example, in the site URL SitesSubdomainName.force.com/customers, customers is the UrlPathPrefix.NoteFor authenticated LWR sites created before Winter ’23 and Aura sites, the URL path prefix ends in /s, and the part of the path without the /s must match the Network metadata type’s URL. For unauthenticated LWR sites and authenticated LWR sites created after Winter ’23 through Experience Builder or Connect API, this path doesn’t contain /s, and the path can be anything as long as there’s no conflict.Sample meta.xml file<?xml version="1.0" encoding="UTF-8"?> <ExperienceBundle xmlns="http://soap.sforce.com/2006/04/metadata"> <label>SampleStarterSite2</label> <type>ChatterNetworkPicasso</type> <urlPathPrefix>SampleStarterSite2/s</urlPathPrefix> </ExperienceBundle> |

## ExperienceResources

Represents a list of sites in the bundle.

| Field Name | Field Type | Description |
| --- | --- | --- |
| experienceResource | ExperienceResource[] | The list of resources in this ExperienceBundle. Each resource represents a property for the site, such as brandingSets, config, routes, themes, and views. |

## ExperienceResource

Represents specific site information included in the ExperienceBundle.

Each type has a folder in the structure. Each folder contains one or more files providing information about that type and the site. Each corresponds to a specific folder and file in the ExperienceBundle.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fileName | string | Required. Name of resource file. |
| format | string | Required. Only JSON is allowed. |
| source | base64 | The JSON content of each file. |
| type | string | Required. The type of the resource. Valid values are:brandingSetsconfigroutesthemesviews |

## Folders and Bundled Definitions

Each ExperienceBundle includes folders and associated data that is contained in JSON files.

## brandingSets Folder

This folder contains one JSON file per branding set, named brandingSets\_name.json. Each file has the same structure and properties.

**<brandingSets\_name>.json**

| Property | Type | Description |
| --- | --- | --- |
| brandingSetType | string | Required in LWR sites. Not applicable for Aura sites. Represents whether the color palette stored in the branding set is for the entire site or a specific section. You can’t change one branding set type to another. Available in API Version 52.0 and later.Valid values are:APP: The branding set applies to the entire site. There can be only one branding set of this type.SCOPED: The branding set applies to a specific section. |
| definitionName | string | Required. Represents the name for the branding set that is used in grouping branding sets under a theme. Defined as theme:branding-theme.For example, if the site theme is Stella, the definitionName would be stella:branding-stella.In addition, there are several standard templates that have unique naming:Customer Account Portal uses cpt:branding-cptCustomer Service uses service:branding-serviceHelp Center uses helpCenter:branding-helpCenterPartner Central uses prm:branding-prmBuild Your Own uses starter:branding-starterNoteThe combination of definitionName + label must be unique in your org. |
| id | UUID | Represents the component’s GUID. |
| label | string | Represents the name of the branding set.NoteThe combination of definitionName + label must be unique in your org. |
| type | string | Represents the component type. The only supported value is brandingSet. |
| values | map | Required. Represents a map of branding values that can be applied to a site. |

```

```

## config Folder

The config folder contains several JSON files.

-   sitename.json
-   languages.json
-   nativeConfig.json
-   page\_name.json
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)
    
    #### Note
    
    One for each single-page application in the site: loginAppPage.json and mainAppPage.json
    

**sitename.json File Properties**

| Property | Type | Description |
| --- | --- | --- |
| authenticationType | string | For LWR sites, indicates whether guest users have access to the site.NoteFor Aura sites, use isAvailableToGuests instead.Valid values are:AUTHENTICATED: The site isn’t public. Only authenticated users can access the site after logging in.AUTHENTICATED_WITH_PUBLIC_ACCESS_ENABLED: The site is an authenticated site, but the Public can access the site checkbox is enabled in Experience Builder in Settings \| General. Guest users can access the site.UNAUTHENTICATED: The unauthenticated site is publicly available to anyone on the web, and doesn’t support login or authentication. Guest users can access the site. UNAUTHENTICATED isn’t supported for LWR sites created after Winter ’23 through Experience Builder or Connect API. To allow guest user access, we recommend using AUTHENTICATED_WITH_PUBLIC_ACCESS_ENABLED.Available in API version 51.0 and later. |
| forgotPasswordRouteId | UUID | Represents the ID of the route to use when a user forgets their password.NoteUnsupported if the active Experience Builder template for the site doesn't support login (such as Help Center). |
| isAvailableToGuests | boolean | For Aura sites, indicates whether public users have access to the site (true) or not (false). The default value is false.NoteFor LWR sites, use authenticationType instead. |
| isFilteredComponentsView | boolean | Indicates whether the list of components is filtered based on the current page type (true) or not (false). Some components require specific parameters from the page and don't work unless you manually configure them. The default value is false. |
| isLockerServiceEnabled | boolean | Indicates whether Lightning Locker is enabled (true) or disabled (false). The default value is true.Available in API version 55.0 and later. |
| isProgressiveRenderingEnabled | boolean | Indicates whether the display order of page components is prioritized (true) or not (false). The default value is false. |
| loginAppPageId | UUID | Represents the ID of the login page.NoteUnsupported if the active Experience Builder template for the site doesn't support login (such as Help Center). |
| mainAppPageId | UUID | Required. Represents the ID of the main page. |
| preferredDomain | string | Represents the name of the domain to use for indexing a site’s pages. Improves search engine results.Available in API version 48.0 and later. |
| preferredDomainId | string | Represents the domain to use for indexing a site’s pages. Improves search engine results.Removed in API version 48.0. Use preferredDomain instead. |
| selfRegistrationRouteId | UUID | Represents the ID of the login route to use for self-registration.NoteUnsupported if the active Experience Builder template for the site doesn't support login (such as Help Center). |
| type | string | Represents the component type. The only supported value is site. |

**trustedSitesForScript container**

When implemented, there’s one trustedSitesForScript container in sitename.json.

| Property | Type | Description |
| --- | --- | --- |
| id | UUID | Represents the component's GUID. |
| isActive | boolean | Indicates if allowlisted item is active (true) and must be respected or inactive (false) and must not be treated as an allowlisted source. Default is false. |
| trustedSiteName | string | Name of the allowlisted source as it appears in the UI. |
| trustedSiteUrl | string | The fully qualified URL of the allowlisted source. |
| type | string | Represents the component type. The only supported value is trustedSitesForScripts. |

```

```

**languages.json File Properties**

| Property | Type | Description |
| --- | --- | --- |
| defaultCode | string | Required. Represents the base language code plus the country code where used. |
| defaultLabel | string | Required. Defines the display label for the language. |
| id | UUID | Represents the component's GUID. |
| type | string | Represents the component type. The only supported value is languageContainer. |

There’s one section per supported language as a container in languages.json

**language container**

| Property | Type | Description |
| --- | --- | --- |
| countryCode | string | Represents the country code of the selected language. This string can be empty. It applies only when the selected language has variations depending on the country, like Arabic (Algeria) and Arabic (Bahrain). In this case, use countryCode to distinguish between them.For example:{ languageCode" : "ar", "CountryCode" : "DZ", "Label" : "Arabic (Algeria) (DZ)",}, { "Code" : "ar", "CountryCode" : "BH", "Label" : "Arabic (Bahrain) (BH)",} |
| fallbackLanguageId | UUID | Represents the language to use when no content is available for the selected language. For example, if a site visitor chooses Japanese from the language selector, but there’s no content for that page in Japanese, then content is displayed in the fallback language.Only one level of fallback is allowed for LWR sites. Here are examples for an LWR site where English is the default language, and Spanish, French, and Finnish are available site languages.Not allowed: Spanish falls back to French, and French falls back to Finnish. This configuration includes two levels of fallback.Allowed: Spanish falls back to French, and French falls back to English. This configuration is allowed because English is the site’s default language.Allowed: Spanish falls back to French, and French has no fallback. This configuration includes only one level of fallback. |
| id | UUID | Represents the component's GUID. |
| isActive | boolean | Indicates whether a language is available to site visitors in the language selector (true) or not (false). The default value is true. |
| label | string | Defines the display label for a language. The display label appears in any language selector components that you add to your site and in the language selector in Experience Builder. |
| languageCode | string | Represents the language code for the selected language. |
| type | string | Represents the component type. The only supported value is language. |

```

```

The page file represents single-page applications in the site. One file per page, named page\_name.json.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Each Experience Builder site is actually a single-page application, which is a web app that loads a single HTML page. Single-page applications use multiple [views](#views_folder) to update the page dynamically as the user interacts with it.

**nativeConfig.json File Properties**

| Property | Type | Description |
| --- | --- | --- |
| showHamburgerMenu | boolean | Required. Controls whether the hamburger menu is shown. |
| mobilePublisherAppUpdateConfig | boolean | Required. Controls whether and which App Version Update message is shown. To avoid service disruptions, users must be on the app version that supports enhanced domains. |
| id | UUID | Represents the component's GUID. |
| type | string | Represents the component type. The only supported value is nativeConfig. |

```

```

**nativeMobileNavConfig container**

A required container for the configuration for the Native Navigation Bar component.

| Property | Type | Description |
| --- | --- | --- |
| showBackButton | boolean | Controls whether the Back button is shown on iOS devices. |
| showHamburgerMenuWithBackButton | boolean | Controls whether the hamburger menu is shown, in addition to the Back button, on iOS devices. |

**mobilePublisherAppUpdateConfig container**

A required container for the configuration of the App Version Update message.

| Property | Type | Description |
| --- | --- | --- |
| enableAppUpdate | boolean | Controls whether the App Version Update message is shown, to encourage users to update by giving them a choice of whether to do so.Set the properties to "enableAppUpdate" : true, and "forceAppUpdate" : false to show the message that encourages your users to update.If you don’t want to show an update message, for example if all your users are on the correct version or your site uses a custom domain, set the property to "enableAppUpdate" : false, and don’t use the forceAppUpdate property. |
| forceAppUpdate | boolean | Controls whether the App Version Update message to require users to update is shown.Set the properties to "enableAppUpdate" : true, and "forceAppUpdate" : true to show the message that requires your users to update. |
| minVersion | string | Controls the iOS and Android Minimum App Versions. These property values are currently hard coded to ensure that the app versions supporting enhanced domains are used. |

**nativeTabMenu container**

A required container for the configuration of the hamburger menu and Back button behavior.

| Property | Type | Description |
| --- | --- | --- |
| branding | map | Settings for the Native Navigation Bar component branding. Valid keys are:iconTintColorUnselectediconTintColorbarTintColorSupply a valid 6 digit hexadecimal as the value for all properties. |
| menuItems | list | Items which must be displayed in the Native Navigation Bar component. |

**menuItems container**

A container within the nativeTabMenu container that specifies the items displayed in the tab bar of the Native Navigation Bar component.

| Property | Type | Description |
| --- | --- | --- |
| name | string | Optional. The label of the tab bar menu item. |
| targetUrl | string | Required. The relative URL to which the tab bar menu item points. |
| iconAsset | string | Required. Name of the ContentAsset to use for the tab bar menu item. |

**page\_name.json File Properties**

| Property | Type | Description |
| --- | --- | --- |
| cmsSettings | map | Settings for the CMS Connect header and footer. Valid values are:headerNameheaderUrlheaderPersonalizationfooterNamefooterUrlfooterPersonalizationBoth source and target org must have the CMSConnect and CMSPersonalization org perms enabled for settings to be retrieved. |
| currentThemeId | UUID | Required. Represents the UUID of the site's current theme. This field is available for mainAppPage.json and loginAppPage.json (where applicable). |
| headMarkup | string | Required. Allows the addition of custom markup to the site's main page <head> tag. Similar to using Experience Builder \| Setting \| Advanced \| Head Markup See Salesforce Help for markup guidance. |
| id | UUID | Required. Represents the component's GUID. |
| isRelaxedCSPLevel | boolean | Controls the ability to run scripts and script access to third-party hosts. The default is false. This field is available for mainAppPage.json and loginAppPage.json (where applicable). |
| label | string | Required. Represents the name of the page. |
| templateName | string | Required. The unique developer name of the template. Allowed values include:CPT Community Template (which represents the Customer Account Portal template)Help Center Template (which represents the Help Center template)microsite-template-marketing (which represents the Microsite (LWR) templatePRM Community Template (which represents the Partner Central template)Service Community Template (which represents the Customer Service template)Starter Template (which represents the Build Your Own (Aura) template)talon-template-byo (which represents the Build Your Own (LWR) template)Custom_template_name (which is the name of a customized template that was exported as a Bolt Solution)Alternatively, you can retrieve a list of allowed template name values using Connect REST API. See Experience Builder Templates in the Connect REST API Developer Guide. |
| type | string | Required. Represents the component type. The only supported value is appPage. |

```

```

## routes Folder

The routes folder contains one JSON file per page, named <page\_name>.json.

**<page\_name>.json**

| Property | Type | Description |
| --- | --- | --- |
| activeViewId | UUID | Required. Represents the default view of the route. Used when there are no defined audiences or the user doesn’t match any audience.Available in API version 48.0 and later. |
| appPageId | UUID | Required. Represents the single page application (SPA) page for the route. It points to either main.json or login.json. |
| configurationTags | string[] | Required. Represents the configuration tags for the route. The only supported value is allow-in-static-site. Available in API Version 51.0 and later.NoteThis is an internal property and must not be edited. |
| devName | string[] | Required. Represents the unique API name that’s defined when creating a new route. Available in API version 59.0 and later. |
| id | UUID | Required. Represents the component GUID. Inherited from the component. |
| label | string | Required. Represents the name of the route. Inherited from the component. |
| objectApiName | string | Required. The name of the custom object API. (Not available for standard objects.) |
| pageAccess | string | Required. Identifies the status of a route as public or private. When set to the default value UseParent, the status of the site determines the status of the route. Not editable from the user interface for routes that are always private. Valid values are UseParent, Public, and RequiresLogin. |
| routeType | string | Required. Identifies the type of route. Value is unique among all routes that share the same SPA page. The value in viewType must match. |
| type | string | Required. Represents the component type. The only supported value is route. |
| urlPrefix | string | Required. Represents the base URL for the route. |

```

```

## themes Folder

The themes folder contains one JSON file per theme named theme\_name.json.

**theme\_name.json**

| Property | Type | Description |
| --- | --- | --- |
| activeBrandingSetId | UUID | The id of the branding set currently in use. The branding set's definitionName must match the theme's brandingSetReference. |
| customCSS | string | Custom CSS for pages created in the Experience Builder template. |
| developerName | string | Required. The unique developer name of the theme. Most themes derive their names directly, for example Jepson uses jespon for its developerName.Standard templates have unique values:cpt for Customer Account Portalservice for Customer ServicehelpCenter for Help Centerprm for Partner Centralstarter for Build Your Own |
| id | UUID | Required. Represents the component's GUID. |
| label | string | Represents the name of the theme. |
| layouts | map | Required. Maps ThemeLayoutType to UUID, and contains the definition of the ThemeLayout. Login and Inner theme layouts are always required. |
| type | string | Required. Represents the component type. The only supported value is theme. |

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Views can be children of a theme. These children are structured the same as [views](#views_folder) in the views folder.

## variations Folder

Experience variations let you change the default behavior of the Experience Builder site based on the audience. The variations folder contains one JSON file per experience variation. The file is named experienceVariation\_name.json.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

-   Experience variations are available in API version 47.0 and later.
-   The name of your JSON file must match the developerName of your variation to avoid issues when deploying a site more than one time.

Four distinct types of variations are supported: branding sets, page variations, component visibility, and component attributes. The different variations are indicated through the componentVariant container.

For example, you want the site to show a page variation for the home page when a user meets certain audience criteria. To achieve this, create an audience and then target that audience to your experience variation using targetId in the componentVariant container of the experience variation definition file.

**experienceVariation\_name.json**

| Property | Type | Description |
| --- | --- | --- |
| componentVariants | list | Required. A list of component variants that belong to this experience variation.NoteOnly one component variant per experience variation is allowed. |
| developerName | string | Required. The unique developer name of the experience variation. This name is used in the targetValue field of a Personalization API target and can’t be updated after it’s set.NoteFor more information, see Audience. |
| id | UUID | Required. Represents the GUID of the component. |
| type | string | Required. Represents the type of the component. The only supported value is experienceVariation. |

When implemented, there’s one container in each experienceVariation\_name.json file describing the variation.

**componentVariant container**

| Property | Type | Description |
| --- | --- | --- |
| id | UUID | Required. Represents the GUID of the component. |
| propertyOverrides | map | Required. Defines the property overrides for the given theme, route, or component targetId.For example, if the targetId is pointing to a theme, you can override the defaultBrandingSet property of the theme to use a different branding set for this experience variation.Supported property overrides:activeBrandingSetIdDefines which branding set to use when targetId is a theme. Uses the format:"activeBrandingSetId" : "ID_of_brandingset"activeViewIdDefines which page variation to use when targetId is a route. Uses the format:"activeViewId" : "ID_of_view"componentAttributesSupported only for CMS Collection components and navigation components, such as Navigation Menu or Tile Menu. Components can be placed in header and footer regions, and also in the view body.Defines which navigation linkset to display when targetId is a navigation component.The value of the property is a JSON container with a single key-value pair denoting the attribute and the value of the attribute.NavigationMenuEditorRefresh is the only supported attribute. Uses the format:"componentAttributes" : {    "NavigationMenuEditorRefresh" : "linkset_name" }Defines which content collection to display when targetId is a CMS Collection component.The value of the property is a JSON container with a single key-value pair denoting the path to the attribute and the value of the attribute. config/dataProviderDefinition/attributes/dataProviderInfo/apiName is the only supported attribute. Uses the format:"componentAttributes" : {    "config/dataProviderDefinition/attributes /dataProviderInfo/apiName":"collection_name" }isVisibleDefines whether a component is visible for the audience when targetId is a component. Unsupported for components in header or footer regions. Uses the format:"isVisible": booleanNoteOnly one entry in the map is allowed.For a component, you can vary either its visibility or attributes but not both together. |
| targetId | UUID | Required. The UUID of the item whose properties you’re overriding. Must be the ID of a theme, route, or component. |
| type | string | Required. Represents the type of the component. The only supported value is experienceVariation. |

**Example of an experience variation for a branding set**

```

```

**Example of an experience variation for a page variation**

```

```

**Example of an experience variation for component visibility**

```

```

**Example of a component variation for a CMS Collection component**

```

```

**Example of a component variation for Navigation Menu component**

```

```

## views Folder

The views folder contains several JSON files that each define a view. Each Experience Builder site is built from single-page applications, which are web apps that load a single HTML page. Single-page applications consist of multiple views that update the page dynamically as the user interacts with it.

A view is made up of regions that contain other regions or components in the rendered page for the user. Within the views folder there’s one file per view, named view\_name.json.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Single-page applications in your site are defined in the [page files](#page_file_configfolder) of the [config folder](#config_folder).

**view\_name.json**

| Property | Type | Description |
| --- | --- | --- |
| appPageId | UUID | Required. Single page application (SPA) page ID of the view. It points to either main.json or login.json. |
| componentName | string | Required. The FQN of the layout component. The component must implement forceCommunity:layout or, for theme layouts, forceCommunity:themeLayout |
| id | UUID | Required. Represents the GUID of the component. |
| label | string | Required. The name that appears in Experience Builder \| Settings \| Theme \| Configure. |
| themeLayoutType | string | Theme layout type of the view (exposed only for views). |
| type | string | Required. Represents the type of the component. The only supported value is view. |
| viewType | string | Required. Matches routeType for the route. |

There are one or more regions as a container in each <view\_name>.json

**region container**

| Property | Type | Description |
| --- | --- | --- |
| id | UUID | Required. Represents the component GUID. |
| regionLabel | string | Specifies region labels for tabs.NoteThis property is present only for tab regions that are children of a component. |
| regionName | string | Required. Matches the design attribute in the design file of the layout component. |
| type | string | Required. Represents the component type. The only supported value is region. |

Each <view\_name>.json file contains a hidden region called sfdcHiddenRegion. The hidden region contains a component that represents the SEO assistant component. In Aura sites, the component’s definition is forceCommunity:seoAssistant, and in LWR sites, the component’s definition is community\_builder:seoAssistant. This component corresponds to the SEO page properties that you can configure in Experience Builder and isn’t visible on your pages. To improve search engine results, use the SEO assistant component to set the customHeadTags, description, and pageTitle properties for your public and custom site pages. You can’t edit the other properties associated with the SEO assistant component. To learn more about what the title, description, and custom head tags properties represent and which head tags are allowed, see [SEO Page Properties in Experience Builder](https://help.salesforce.com/s/articleView?id=experience.networks_seo_tags.htm&type=5&language=en_US "HTML (New Window)").

There are one or more components as a container in the region section of each <view\_name>.json

**component container**

| Property | Type | Description |
| --- | --- | --- |
| componentAttributes | HashMap | Required. The design attribute values of the component. |
| componentName | string | Required. The FQN of the component. Only components that can be used in the component panel in Experience Builder can be used in this field. |
| id | UUID | Required. Represents the component GUID.NoteIf you add a component to ExperienceBundle, you can enter any value because the system automatically generates a UUID for the component when deployed. |
| renderPriority | enums.priority | Sets priority value for progressive rendering of the component. Possible Values: HIGHEST, HIGH, NEUTRALNoteOnly evaluated if the site has progressive rendering turned on in Experience Builder \| Settings \| Advanced. |
| renditionMap | HashMap | Map of different rendition keys to UUIDs of RenditionComponents. |
| scopedBrandingSetID | UUID | Required for LWR sites. Not applicable for Aura sites. Represents the ID of a branding set for a specific community_layout:section component. Available in API Version 52.0 and later. |
| type | string | Required. Represents the component type. The only supported value is component. |

Each component can have a rendition container in each <view\_name>.json

**rendition container**

| Property | Type | Description |
| --- | --- | --- |
| id | UUID | Required. Represents the component GUID. |
| renditionValue | map | Map of different variations of a component, such as different languages of text. |
| type | string | Required. Represents the component type. The only supported value is renditionComponent. |

```

```

## Declarative Metadata Sample Definition

Here’s an example of an ExperienceBundle declaration. For individual folder and file examples for the bundled code, see [brandingSets](#brandingSets_folder), [config](#config_folder), [routes](#routes_folder), [themes](#themes_folder), [variations](#variations_folder), and [views](#views_folder).

```

```

## Usage

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_meta)

#### Tip

Before you update the .json files of an Experience Builder site, we recommend making a copy of the site’s folder as a backup.

When you add a component to ExperienceBundle, you can enter any value for the id, because the system automatically generates a UUID for the component when deployed.

When deploying an Experience Builder site with ExperienceBundle, ensure that the SiteDotCom type isn’t included in the manifest file.

ExperienceBundle doesn’t support retrieving and deploying across different API versions. If you’re trying to upgrade ExperienceBundle metadata from an earlier API version to a later one—for example, from API version 48.0 to 49.0—take the following steps:

1.  Set the API version in the package.xml manifest file to 48.0 and deploy the package.
2.  Then, set the API version in package.xml to 49.0.
3.  To get the latest ExperienceBundle updates, retrieve the package.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [ExperienceBundleSettings](atlas.en-us.api_meta.meta/api_meta/meta_experiencebundlesettings.htm "Represents the org setting that enables the ExperienceBundle metadata type for Aura sites in Experience Cloud. The setting doesn’t affect LWR sites, which use ExperienceBundle by default. This type extends the Metadata metadata type and inherits its fullName field.")
    
-   [*Developer Guide:* ExperienceBundle for Experience Builder Sites](https://developer.salesforce.com/docs/atlas.en-us.260.0.communities_dev.meta/communities_dev/communities_dev_migrate_expbundle.htm "Developer Guide: ExperienceBundle for Experience
    Builder Sites - HTML (New Window)")