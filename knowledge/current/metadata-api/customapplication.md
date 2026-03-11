---
title: "CustomApplication"
domain: metadata-api
topic: customapplication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:51.491Z
keywords: [CustomApplication, File, Suffix, Directory, Location, Note, Version, Fields, AppActionOverride, AppBrand, AppComponentList, AppPreferences, AppProfileActionOverride, AppWorkspaceConfig, WorkspaceMapping, CustomShortcut, DefaultShortcut, KeyboardShortcuts, ListPlacement, LiveAgentConfig]
---

# CustomApplication

# CustomApplication

CustomApplication represents a custom or standard application. In API version 29.0 and earlier, CustomApplication represents only a custom application. An application is a list of tab references, with a description and a logo. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

Custom and standard applications have the suffix .app and are stored in the applications folder.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Retrieving a component of this metadata type in a project makes the component appear in any Profile and PermissionSet components that are retrieved in the same package.

## Version

Custom applications are available in API version 10.0 and later. Standard applications are available in API version 30.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionOverrides | AppActionOverride[] | Represents an action override for an application. Use it to create, update, edit, or delete action overrides.This field is available for Lightning Experience in API version 38.0 and later. |
| brand | AppBrand | The color scheme and logo used for the app.This field is available for Lightning Experience in API version 38.0 and later. |
| consoleConfig | ServiceCloudConsoleConfig | Represents configuration settings for a Salesforce console app.This field is available in API version 42.0 and later. |
| defaultLandingTab | string | The fullName of a standard tab or custom tab that opens when this application is selected. |
| description | string | The optional description text of the application. |
| formFactors | FormFactor (enumeration of type string) | Indicates the form factors for which the app is visible for Lightning Experience. Valid values are:Null (no value)—For a desktop using Salesforce ClassicSmall—For a mobile device using the Salesforce mobile appMedium—Reserved for future useLarge—For a desktop using Lightning ExperienceThis field is available in API version 38.0 and later.As of API version 38.0, formFactors is set to Large for existing Salesforce Classic apps, except for Salesforce Classic consoles. Salesforce Classic apps installed from packages created before API version 38.0 also have formFactors set to Large. For Salesforce Classic apps in packages created with API 38.0 or later, you must set formFactors to Large for Salesforce Classic apps to appear in the Lightning Experience desktop.As of API version 47.0, the Small value is supported for Lightning apps. The formFactors field can be set to Small or Large for Lightning apps, and it can be set to Null or Large for Salesforce Classic apps. |
| isNavAutoTempTabsDisabled | boolean | Indicates whether the navigation automatically creates temporary tabs settings. Applies only to Lightning apps with standard navigation. Available in API version 43.0 and later. |
| isNavPersonalizationDisabled | boolean | Indicates whether navigation personalization is disabled. Applies only to Lightning apps. Available in API version 43.0 and later. |
| isNavTabPersistenceDisabled | boolean | Indicates whether workspace tabs are cleared for each new console session (true) or not (false). Applies only to Lightning apps with console navigation. Available in API version 54.0 and later. |
| isServiceCloudConsole | boolean | Indicates if the application is a Salesforce Classic console app. For Lightning Experience console apps, this field is null and the navType field is set to Console. |
| label | string | The name of the application. |
| logo | string | The optional reference to the image document for a Salesforce app or Salesforce console app. |
| navType | NavType (enumeration of type string) | Not updateable. Indicates the type of navigation the app uses. The value Standard is for a Lightning app with standard navigation. The value Console is for a Lightning app with console navigation.This field is available in API version 38.0 and later. |
| preferences | AppPreferences | Represents the preferences for a Salesforce Classic console app. All of the AppPreferences fields are required.This field is available in API version 42.0 and later. |
| profileActionOverrides | AppProfileActionOverride[] | A list of the Lightning Experience record page ProfileActionOverrides that are assigned to this custom app. When a user invokes the custom app, a matching ProfileActionOverride assignment takes precedence over existing overrides for the record page specified in ActionOverride. You can override a record page for the custom app by record type and profile.In API version 45.0 and later, you can override a home page for the custom app by profile. |
| setupExperience | string | The type of Setup experience associated with the app. Valid values are:all—Represents the full Setup tree.essentials—Represents the Essentials Setup tree, which contains a subset of Setup items configured for Essentials edition.service—Represents the Service Setup tree, which contains a subset of Setup items configured for Service Console.A null value is equivalent to all.Previous valid values AllSetup, ServiceSetup, and EssentialsSetup have been deprecated.This field is available in API version 39.0 and later. |
| subscriberTabs | string[] | Represents the list of tabs appended by a subscriber to a Lightning app installed from a managed package. Records in a subscriber tab always open as primary tabs.This field is available in API version 41.0 and later. |
| tabs | string[] | The list of tabs included in this application. In API version 12.0, the fullName for built-in tabs like Home, Account, and Reports, is the name of the tab (Home, for example). In API version 13.0 and later, built-in tabs are prefixed with standard-. For example, to reference the Account tab you would use standard-Account.In API version 42.0, this field was renamed from tab to tabs. |
| uiType | UiType (enumeration of type string) | Not updateable. Identifies the type of custom app. The value is:Aloha for Salesforce ClassicLightning for Lightning ExperienceThis field is available in API version 38.0 and later. |
| utilityBar | string | The developer name of the utility bar associated with this app.We recommend assigning a utility bar to only one Lightning App, because utility bars are shared. Sharing means that if you change the utility bar in one app, it automatically changes in all apps associated with it.This field is available in API version 38.0 and later. |
| workspaceConfig | AppWorkspaceConfig | Represents how records open in a Salesforce console app. Required if isServiceCloudConsole is true. In API version 42.0, this field was renamed to workspaceConfig from workspaceMappings. |

## AppActionOverride

Represents an action override for an application. Use it to create, update, edit, or delete action overrides. AppActionOverride inherits from [ActionOverride](atlas.en-us.api_meta.meta/api_meta/actionoverride.htm#actionoverride "Represents an action override on a standard or custom object. Use it to create, update, edit, or delete action overrides. You can access ActionOverride only by accessing its encompassing CustomObject.") and extends it by one field, pageOrSobjectType. Available for Lightning Experience in API version 38.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionName | string | The only valid value is view for API version 43.0 and earlier. The value tab is supported for API version 44.0 and later. |
| comment | string | Any comments you want associated with the override. |
| content | string | Set this field if type is set to flexipage. It refers to the name of the page to use as the override. To reference installed components, use the format of Component_namespace__Component_name. |
| formFactor | FormFactor(enumeration of type string) | The size of the page being overridden.If the type field is set to flexipage, set this field to Large to override the View action with a Lightning page in Lightning Experience.The Large value represents the Lightning Experience desktop environment and is valid only for the flexipage and lightningcomponent types. The Small value represents the Salesforce mobile app on a phone or tablet. The Medium value is reserved for future use. The null value (which is the same as specifying no value) represents Salesforce Classic.This field is available in API version 37.0 and later and is part of the feature for creating and editing record pages in Lightning Experience.Lightning component overrides return different FormFactor values depending on the API version used.In API version 41.0 and earlier, Lightning component overrides return only the null value (no value), representing the Salesforce Classic environment.In API version 42.0, if you specify different Lightning component overrides for Lightning Experience and mobile, one component is selected randomly for both overrides and its FormFactor value is returned. If there’s a conflict between Lightning components, and a Visualforce page override is also specified for Salesforce Classic, the Visualforce page takes precedence.In API version 43.0 and later, a Lightning component override for Lightning Experience returns the Large value and a Lightning component override for mobile returns the Small value, as expected. |
| pageOrSobjectType | string | The name of the sObject type being overridden. Valid values are standard and custom.This value must be standard-home when actionName is tab. |
| skipRecordTypeSelect | boolean | Set this field to true if you prefer that any new records created by this action override aren’t forwarded to the record type selection page. This field is only valid if the actionName is a “create” type (like new), and type is set to visualforce. |
| type | ActionOverrideType (enumeration of type string) | Required. Represents the type of action override. The valid values are Flexipage and Default.A Flexipage AppActionOverride set to App Default can’t be deleted via Metadata API. Instead, remove the override using the page assignment wizard in the Lightning App Builder UI. |

## AppBrand

The color scheme and logo used for the app. Available for Lightning apps in API version 38.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| footerColor | string | Optional. Determines the footer color in the app. Specify the color with a hexadecimal code, such as #0000FF for blue. |
| headerColor | string | Optional. Determines the header color in the app. Specify the color with a hexadecimal code, such as #0000FF for blue. |
| logo | string | The optional reference to the image document for the application. |
| logoVersion | int | An optional version number for the logo. |
| shouldOverrideOrgTheme | boolean | Indicates whether to override the global theme for the org. When true, the color scheme and logo that the user has set are used. When false, the global theme for the org is used, even if the user has set a color scheme and logo. |

## AppComponentList

Represents custom console components (Visualforce pages) assigned to a Salesforce console app. In API version 42.0, this type was renamed from CustomApplicationComponents to AppComponentList.

| Field Name | Field Type | Description |
| --- | --- | --- |
| alignment | string | Required. Determines how custom console components are aligned in the footer of a Salesforce console app. |
| components | string[] | The name of a custom console component assigned to a Salesforce console app. In API version 42.0, this field was renamed from customApplicationComponent to components. |

## AppPreferences

Represents the preferences for a Salesforce Classic console app. All of the AppPreferences fields are required. Available in API version 42.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCustomizeMyTabs | boolean | Indicates if a Salesforce Classic console app has Customize My Tabs enabled. If enabled, users can hide, display, and organize items in the navigation tab. |
| enableKeyboardShortcuts | boolean | Indicates if a Salesforce Classic console app has keyboard shortcuts enabled. Shortcuts let users perform actions by pressing a combination of keys instead of having to use a mouse. After keyboard shortcuts are enabled, several default shortcuts are available for customization. Before you can create custom shortcuts, a developer must define the shortcut’s action with the addEventListener() method in the Salesforce Console Integration Toolkit. You can’t create keyboard shortcuts for actions performed outside of the console. This field is required if isServiceCloudConsole is true. |
| enableListViewHover | boolean | Indicates if a Salesforce Classic console app has list view hovers enabled. If set to true, summary information is displayed about a record in a responsive list when the user hovers over a record name. For cases, hover over the subject field. |
| enableListViewReskin | boolean | Indicates if Salesforce Classic console apps use responsive list views instead of Salesforce Classic lists views. |
| enableMultiMonitorComponents | boolean | Indicates if a Salesforce Classic console app has multi-monitor components enabled, which lets users move portions of a console from their browsers to locations on their screens. This field is required if isServiceCloudConsole is true. |
| enablePinTabs | boolean | Indicates if a Salesforce Classic console app has pinned tabs enabled, which lets users pin primary tabs to the tab bar for quick access. |
| enableTabHover | boolean | Indicates if a Salesforce Classic console app has tab hover enabled. If enabled, summary information is displayed about a record in an overlay when the user hovers over a tab. |
| enableTabLimits | boolean | Indicates whether limits are enabled on the number of primary tabs and subtabs that can be opened in a Salesforce Classic console session. When true, values for tabLimitConfig are required |
| saveUserSessions | boolean | Indicates if a Salesforce Classic console app saves user sessions automatically. If enabled, when console users close their browsers or log out of Salesforce, any previously open tabs display when users log in again. Required if isServiceCloudConsole is true. |

## AppProfileActionOverride

Represents a ProfileActionOverride for a custom app. This type inherits from [ProfileActionOverride](atlas.en-us.api_meta.meta/api_meta/meta_profileactionoverride.htm#meta_profileactionoverride "Represents an override of an ActionOverride by a user profile. You can use it to override an ActionOverride on a standard Home tab or object record page in Lightning Experience. When a user logs in with a profile, a matching ProfileActionOverride assignment takes precedence over existing overrides for the Home tab or record page specified in ActionOverride. In API versions 39.0 to 44.0, you can access ProfileActionOverride by accessing its encompassing CustomApplication or Profile metadata types. In API version 45.0 and later, you can access ProfileActionOverride only by accessing its encompassing CustomApplication.") and extends it by one field, profile. Available for Lightning Experience in API version 39.0 and later. In API version 45.0 and later, you can override a home page for the custom app by profile.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionName | string | Required. The name of the action. The only valid values are Tab and View.If pageOrSobjectType is record-home, this field must be View. The View action is supported only when ProfileActionOverride is being specified as part of a CustomApplication.In API version 45.0 and later, this action is supported only when ProfileActionOverride is being specified as part of a CustomApplication, pageOrSobjectType is standard-home, and this field is Tab. |
| content | string | Read-only. Represents the name of the Lightning page being used as the override. |
| formFactor | FormFactor (enumeration of type string) | Required. The size of the page being overridden. The Large value represents the Lightning Experience desktop environment. |
| pageOrSobjectType | string | Required. The name of the page being overridden. The only valid values are record-home and standard-home. If the actionName is Tab, this field must be standard-home |
| profile | string | The profile associated with the ProfileActionOverride. |
| recordType | string | The record type associated with the override. If pageOrSobjectType is standard-home, this field must be null. This field is required when actionName is set to View. |
| type | ActionOverrideType (enumeration of type string) | Required. Read-only. The type of action override. The only valid value is flexipage. |

## AppWorkspaceConfig

Represents how records open in a Salesforce console app. Required if isServiceCloudConsole is true. Available for Salesforce Classic console apps in API version 25.0 and later. Available for Lightning console apps in API version 41.0 and later. In API version 42.0, this type was renamed from WorkspaceMappings to AppWorkspaceConfig.

| Field Name | Field Type | Description |
| --- | --- | --- |
| mappings | WorkspaceMappingSingle[] | Represents how records for a specific tab open in a Salesforce console app. Required for each tab specified in the CustomApplication. In API version 42.0, this field was renamed from workspaceMapping to mappings. |

## WorkspaceMapping

Represents how records for a specific tab open in a Salesforce console app. Required for each tab specified in the CustomApplication. Available in API version 25.0 and later for Salesforce Classic console apps. Available in API version 41.0 and later for Lightning console apps.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fieldName | string | The name of the field that specifies the primary tab in which to display tab as a subtab. If not specified, tab opens as a primary tab. |
| tab | string | Required. Name of the tab. |

## CustomShortcut

Represents custom keyboard shortcuts assigned to a Salesforce console app in Salesforce Classic. Before you can create custom shortcuts, a developer must define the shortcut’s action with the addEventListener() method in the Salesforce Console Integration Toolkit. You can’t create keyboard shortcuts for actions performed outside of the console. Available in API version 28.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| action | string | Required. The action performed in the console when a user presses the keyboard shortcut. |
| active | boolean | Required. Indicates whether the keyboard shortcut is active (true) or not (false). |
| keyCommand | string | Required. The combination of keys a user presses to trigger the keyboard shortcut. Keyboard shortcuts aren’t case-sensitive, but they display as uppercase on setup pages in the Salesforce user interface so that they’re easier to read.Each key command can include up to four modifier keys followed by one non-modifier key. Modifier and non-modifier keys are separated by the + key. Modifier keys can occur in any order, but you must place non-modifier keys at the end of the key command sequence. For example, SHIFT+CTRL+ALT+META +A.Valid modifier keys are:SHIFTCTRLALTMETA (represents the COMMAND key on Macs)Valid non-modifier keys are letters A through Z and numbers 0 through 9. Other valid keys are:TABENTERPAUSE/BREAKCAPS LOCKESCSPACEPAGE UPPAGE DOWNENDHOMELEFT ARROWUP ARROWRIGHT ARROWDOWN ARROWPRINT SCREENINSERTDELETERIGHT WINDOWNUMPAD 0NUMPAD 1NUMPAD 2NUMPAD 3NUMPAD 4NUMPAD 5NUMPAD 6NUMPAD 7NUMPAD 8NUMPAD 9MULTIPLYADDSUBTRACTDECIMAL POINTDIVIDEF1F2F3F4F5F6F7F8F9F10F11F12NUM LOCKSCROLL LOCK;=,—./‘[]\' |
| description | string | The optional description text for the keyboard shortcut. |
| eventName | string | Required. Code available to developers who want to add custom shortcut functions to the console via the Salesforce Console Integration Toolkit. |

## DefaultShortcut

Represents default keyboard shortcuts assigned to a Salesforce console app. After you enable keyboard shortcuts for a console, several default shortcuts are available for customization. These include opening and closing tabs, moving between tabs, and saving records. Available in API version 28.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| action | string | Required. The action performed in the console when a user presses the keyboard shortcut. Valid values are:FOCUS_CONSOLEFOCUS_NAVIGATOR_TABFOCUS_DETAIL_VIEWFOCUS_PRIMARY_TAB_PANELFOCUS_SUBTAB_PANELFOCUS_LIST_VIEWFOCUS_FIRST_LIST_VIEWFOCUS_SEARCH_INPUTMOVE_LEFTMOVE_RIGHTUP_ARROWDOWN_ARROWOPEN_TAB_SCROLLER_MENUOPEN_TABCLOSE_TABENTEREDITSAVE |
| active | boolean | Required. Indicates whether the keyboard shortcut is active (true) or not (false). |
| keyCommand | string | Required. The combination of keys a user presses to trigger the keyboard shortcut. Keyboard shortcuts aren’t case-sensitive, but they display as uppercase on setup pages in the Salesforce user interface so that they’re easier to read.Each key command can include up to four modifier keys followed by one non-modifier key. Modifier and non-modifier keys are separated by the + key. Modifier keys can occur in any order, but you must place non-modifier keys at the end of the key command sequence. For example, SHIFT+CTRL+ALT+META +A.Valid modifier keys are:Valid non-modifier keys are letters A through Z and numbers 0 through 9. Other valid keys are: |

## KeyboardShortcuts

Represents keyboard shortcuts assigned to a Salesforce console app. Required if isServiceCloudConsole is true. Available in API version 28.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customShortcuts | CustomShortcut[] | Represents custom keyboard shortcuts assigned to a Salesforce console app in Salesforce Classic. Before you can create custom shortcuts, a developer must define the shortcut’s action with the addEventListener() method in the Salesforce Console Integration Toolkit. You can’t create keyboard shortcuts for actions performed outside of the console.In API version 42.0, this field was renamed from customShortcut to customShortcuts. |
| defaultShortcuts | DefaultShortcut[] | Represents default keyboard shortcuts assigned to a Salesforce console app. After you enable keyboard shortcuts for a console, several default shortcuts are available for customization. These include opening and closing tabs, moving between tabs, and saving records.In API version 42.0, this field was renamed from defaultShortcut to defaultShortcuts. |

## ListPlacement

Represents how lists display in a Salesforce console app. Required if isServiceCloudConsole is true. Available in API version 25.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| height | int | Height of the list in pixels or percentage. Required if location is top. |
| location | string | Required. Location of the list on the screen. Valid values are:fulltopleft |
| units | string | Required. Represents if height or width is in pixels or percentage. |
| width | int | Width of the list in pixels or percentage. Required if location is left. |

## LiveAgentConfig

Represents your organization's settings for using Chat in the Salesforce Console.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableLiveChat | boolean | Specifies whether Chat is enabled in your organization (true) or not (false). |
| openNewAccountSubtab | boolean | Specifies whether to open a new Account subtab in a Salesforce console app automatically (true) or not (false) when an agent accepts a chat. |
| openNewCaseSubtab | boolean | Specifies whether to open a new Case subtab in a Salesforce console app automatically (true) or not (false) when an agent accepts a chat. |
| openNewContactSubtab | boolean | Specifies whether to open a new Contact subtab in a Salesforce console app automatically (true) or not (false) when an agent accepts a chat. |
| openNewLeadSubtab | boolean | Specifies whether to open a new Lead subtab in a Salesforce console app automatically (true) or not (false) when an agent accepts a chat. |
| openNewVFPageSubtab | boolean | Specifies whether to open a new Visualforce page as a subtab in a Salesforce console app automatically (true) or not (false) when an agent accepts a chat. |
| pageNamesToOpen | string [array of strings] | Specifies the Visualforce pages to open in subtabs when an agent accepts a chat in a Salesforce console app.This field is available in API version 42.0 and later. |
| showKnowledgeArticles | boolean | Specifies whether to display the Knowledge component while using Chat in a Salesforce console app (true) or not (false). |

## PushNotification

Represents a set of push notifications, which are visual indicators on lists and detail pages that show when a record or field has changed during a user’s session. Available for use if isServiceCloudConsole is true. Available in API version 28.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fieldNames | string] | The name of the field or fields that trigger push notifications for the selected object. |
| objectName | string | Required. Name of the object that triggers push notifications. |

## ServiceCloudConsoleConfig

Represents configuration settings for a Salesforce console app. Available in API version 42.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| componentList | AppComponentList | Represents custom console components (Visualforce pages) assigned to a Salesforce console app. |
| detailPageRefreshMethod | string | Determines how detail pages refresh in a Salesforce console app. Required if isServiceCloudConsole is true. The valid values are:noneautoRefreshflag |
| footerColor | string | Determines the footer color in a Salesforce console app. Specify the color with a hexadecimal code, such as #0000FF for blue. |
| headerColor | string | Determines the header color in a Salesforce console app. Specify the color with a hexadecimal code, such as #0000FF for blue. |
| keyboardShortcuts | KeyboardShortcuts | Represents the keyboard shortcuts for a Salesforce console app. Keyboard shortcuts let users perform actions by pressing a combination of keys instead of having to use a mouse. |
| listPlacement | ListPlacement | Represents how lists display in a Salesforce console app. Required if isServiceCloudConsole is true. |
| listRefreshMethod | string | Determines how lists refresh in a Salesforce console app. Required if isServiceCloudConsole is true. The valid values are:nonerefreshListrefreshListRows |
| liveAgentConfig | LiveAgentConfig | Represents the configurations for using Chat in the Salesforce Console. |
| primaryTabColor | string | Determines the primary tab color in a Salesforce console app. Specify the color with a hexadecimal code, such as #0000FF for blue. |
| pushNotifications | PushNotification[] | Represents push notifications for a Salesforce console app. Push notifications are visual indicators on lists and detail pages that show when a record or field has changed during a user’s session. For example, assume that two support agents are working on the same case. If one agent changes the Priority, a push notification displays to the other agent so the agent notices the change and doesn’t duplicate the effort. |
| tabLimitConfig | TabLimitConfig | Represents the maximum number of primary tabs and subtabs allowed in one Salesforce console session. Required if enableTabLimits is true. |
| whiteListedDomains | string[] | Any external domains that users can access from within a Salesforce console app. For example, www.yourdomain.com. |

## TabLimitConfig

Represents the maximum number of primary tabs and subtabs allowed in one Salesforce console session. Required if enableTabLimits is true. Available in API version 36.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| maxNumberOfPrimaryTabs | string | The maximum number of primary tabs allowed in one console session. Valid values are:5102030 |
| maxNumberOfSubTabs | string | The maximum number of subtabs allowed in one console session. Valid values are:51015 |

## Usage

You can't delete custom app ProfileActionOverrides by deploying with destructiveChange.xml. To delete a ProfileActionOverride, retrieve the app. In the app definition file, find the <profileActionOverrides> section, and remove the <content> row. Then, change the <type> value in that same section to default instead of flexipage. Do this for every override you want to reset. After making the changes, rezip the folder and deploy.

You can remove one override at a time each with its own deploy, or you can remove multiple overrides in a single deploy. However, we recommend that you do a fresh retrieve every time you want to delete a new override. Don’t use a previously retrieved file.

## Retrieving Apps

To retrieve apps in your organization, use the CustomApplication type name in the package.xml manifest file. You can either retrieve all apps or specify which apps to retrieve in the types section of package.xml.

To retrieve all apps in your organization—custom and standard apps, specify the wildcard character (\*), as follows.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

In API version 29.0 and earlier, use of the wildcard returns only all custom applications but not standard applications.

To retrieve a custom app, specify the app name.

```

```

To retrieve a standard app, add the standard\_\_ prefix to the app name. For example, to retrieve the Chatter standard app, specify standard\_\_Chatter.

```

```

To retrieve an app that is part of an installed package, add the package namespace prefix followed by two underscores and the app name. For example, if the package namespace is myInstalledPackageNS and the app name is PackageApp, specify myInstalledPackageNS\_\_PackageApp, as follows.

```

```

## Declarative Metadata Sample Definition

Here’s the definition of a custom Lightning Experience app:

```

```

The following is a definition of a standard app (Chatter):

```

```

## Declarative Metadata Sample Definition—Salesforce Console

The following is the definition of a custom app where isServiceCloudConsole is true:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [CustomTab](atlas.en-us.api_meta.meta/api_meta/meta_tab.htm "Represents a custom tab. Custom tabs let you display custom object data or other web content in Salesforce. When you add a custom tab to an app in Salesforce Classic, it appears as a tab. When you add a custom tab to an app in Lightning Experience, it appears as an item in the app’s navigation bar and in the App Launcher. When a tab displays a custom object, the tab name is the same as the custom object name. For page, s-control, or URL tabs, the name is arbitrary.")