---
title: "Prompt"
domain: metadata-api
topic: prompt
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.993Z
estimatedTokens: 3758
keywords: [Prompt, Represents, metadata, related, in-app, guidance, which, includes, prompts, walkthroughs., Help, users, discover, products, services, adopt, processes, how, new, feature.]
---

# Prompt

> Represents the metadata related to in-app guidance, which includes prompts and walkthroughs. Help users discover your products and services, adopt your processes, or learn how to use a new feature. Write the content, select the target audience, and specify where and when the in-app guidance appears.

# Prompt

Represents the metadata related to in-app guidance, which includes prompts and walkthroughs. Help users discover your products and services, adopt your processes, or learn how to use a new feature. Write the content, select the target audience, and specify where and when the in-app guidance appears.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

Prompt components have the suffix prompt and are stored in the prompts folder.

## Version

Prompt components are available in API version 46.0 and later.

## Special Access Rules

To add, edit, manage, and view prompts and walkthroughs in Lightning Experience or in Experience Cloud sites, see [Considerations for Creating In-App Guidance](https://help.salesforce.com/s/articleView?id=sales.customhelp_lex_prompt_consider.htm&type=5&language=en_US "HTML (New Window)") and [Permissions for Creating and Accessing In-App Guidance](https://help.salesforce.com/s/articleView?id=sales.customhelp_lex_wt_license.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help for permissions.

## Prompts and Walkthroughs in Managed Packages

For considerations about including in-app guidance in a managed package, see [Guidelines for In-App Guidance in Managed Packages](https://help.salesforce.com/articleView?id=customhelp_iag_packages.htm&language=en_US) in Salesforce Help.

For more information about creating managed packages, see [Create a First-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/creating_packages.htm).

Unmanaged packages must contain a namespace prefix. For more information, see [Register a Namespace for a First-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/register_namespace_prefix.htm) and [What happens to my namespace prefix when I install a package?](https://help.salesforce.com/articleView?id=faq_distribution_installing_what_happens_to_my.htm&language=en_US).

## Fields

| Field Name | Description |
| --- | --- |
| masterLabel | Field TypestringDescriptionRequired. The label. Maximum of 80 characters. |
| promptVersions | Field TypePromptVersion[]DescriptionA list of in-app guidance entries. Each entry represents a different prompt or walkthrough. |

## PromptVersion

A list of in-app guidance entries. Each entry represents a different prompt or walkthrough.

| Field Name | Description |
| --- | --- |
| actionButtonLabel | Field TypestringDescriptionLabel for the action button or link. Maximum of 25 characters. For a walkthrough, specify this value on the last step. |
| actionButtonLink | Field TypestringDescriptionURL for the action button or link. Maximum of 1,000 characters. You can’t use the GROUP BY option in a SOQL query for this field. For a walkthrough, specify this value on the last step. |
| body | Field TypestringDescriptionRequired. Body content.In API version 60.0 and later, enter up to 4,000 characters for all prompt types.In earlier API versions, enter up to 240 characters for floating prompts and targeted prompts. Enter up to 4,000 characters for docked prompts.For docked prompts, the maximum characters include HTML markup, not just readable text. |
| customApplication | Field TypestringDescriptionInternal use only. No data is populated for this field. |
| delayDays | Field TypeintDescriptionRequired if recurrences are scheduled. Number of days in between occurrences. For a walkthrough, specify this value on the first step. |
| description | Field TypestringDescriptionDescription. Maximum of 255 characters. |
| dismissButtonLabel | Field TypestringDescriptionLabel for the dismiss button of a floating or targeted prompt. Maximum of 15 characters. |
| displayPosition | Field TypePromptDisplayPosition (enumeration of type string)DescriptionThe position of a floating prompt on the page. Valid values are:BottomCenterBottomLeftBottomRightTopCenterTopLeftTopRight |
| displayType | Field TypePromptDisplayType (enumeration of type string)DescriptionRequired. The type of prompt. Valid values are:DockedComposer—A docked promptFloatingPanel—A floating promptTargeted—A targeted prompt. Available in API version 52.0 and later. |
| elementRelativePosition | Field TypePromptElementRelativePosition (enumeration of type string)DescriptionIndicates the location of a targeted prompt relative to the element. Available in API version 52.0 and later. Valid values are:BottomCenterBottomLeftBottomRightLeftBottomLeftCenterLeftTopRightBottomRightCenterRightTopTopCenterTopLeftTopRight |
| endDate | Field TypedateDescriptionThe date to stop showing the in-app guidance. For a walkthrough, specify this value on the first step. |
| header | Field TypestringDescriptionLabel for the header of a docked prompt. This value is the label contained in the window’s browser bar. Maximum of 36 characters. |
| image | Field TypestringDescriptionThe developer name of the contentAsset that holds the image. You can specify this field or the imageLink field, but not both. |
| imageAltText | Field TypestringDescriptionIndicates the alt text of an image. Required if imageLocation, imageLink, or image is specified. |
| imageLink | Field TypestringDescriptionThe URL for a prompt’s image. You can specify this field or the image field, but not both. Available in API version 53.0 and later. |
| imageLocation | Field TypepicklistDescriptionIndicates the location of the image in relation to the body text. Required if image, imageLink, or imageAltText is specified. Valid values are:TopBottomRight, which is for floating or targeted prompts onlyLeft, which is for floating or targeted prompts only |
| indexWithIsPublished | Field TypestringDescriptionUsed by Salesforce for efficient querying. |
| indexWithoutIsPublished | Field TypestringDescriptionUsed by Salesforce for efficient querying. |
| isPublished | Field TypebooleanDescriptionIndicates whether the in-app guidance is active (true) or not (false). |
| masterLabel | Field TypestringDescriptionRequired. The label. |
| publishedByUser | Field TypestringDescriptionInternal use only. No data is populated for this field. |
| publishedDate | Field TypedateDescriptionIndicates the date the in-app guidance was activated. If installed from a package, this value is the date when the package was installed. For walkthroughs, this field can only be specified on the first step. |
| referenceElementContext | Field TypetextareaDescriptionUsed by Salesforce to identify the element that the targeted prompt is associated with. Available in API version 52.0 and later. |
| shouldDisplayActionButton | Field TypebooleanDescriptionIndicates whether an action button or link is included (true) or not (false). |
| shouldIgnoreGlobalDelay | Field TypebooleanDescriptionIndicates whether the in-app guidance ignores the global time delay and instead shows on page load (true) or not (false). This field is available in API version 48.0 and later. |
| startDate | Field TypedateDescriptionIndicates the date to start showing the in-app guidance. For a walkthrough, specify this value on the first step.In API version 48.0 and earlier, this field is required. |
| stepNumber | Field TypeintDescriptionRequired for walkthroughs only. Indicates the number of the last step the user viewed or interacted with in a walkthrough. Include up to 10 steps. Numbers must be consecutive without repeated or skipped numbers. Available in API version 49.0 and later. |
| targetAppDeveloperName | Field TypestringDescriptionThe app’s developer name where the in-app guidance appears. Deprecated in API version 51.0 and later. |
| targetAppNamespacePrefix | Field TypestringDescriptionThe app’s namespace prefix where the in-app guidance appears. This value must match the target app’s NamespacePrefix in the org that the package is being installed into. Maximum of 15 characters. Deprecated in API version 51.0 and later. |
| targetPageKey1 | Field TypestringDescriptionRequired. Used by Salesforce to identity the prompt’s page location along with targetPageKey2, targetPageKey3, targetPageKey4, and targetPageType. |
| targetPageKey2 | Field TypestringDescriptionUsed by Salesforce to identity the prompt’s page location along with targetPageKey1, targetPageKey3, targetPageKey4, and targetPageType. |
| targetPageKey3 | Field TypestringDescriptionUsed by Salesforce to identify the prompt’s page location along with targetPageKey1, targetPageKey2, targetPageKey4, and targetPageType. |
| targetPageKey4 | Field TypestringDescriptionUsed by Salesforce to identify the prompt’s page location along with targetPageKey1, targetPageKey2, targetPageKey3, and targetPageType. This field is available in API version 53.0 and later. |
| targetPageType | Field TypestringDescriptionRequired. Used by Salesforce to identity the page location along with targetPageKey1, targetPageKey2, targetPageKey3, and targetPageKey4. |
| targetRecordType | Field TypestringDescriptionUsed by Salesforce to determine if in-app guidance is specific to a record type. This field is available in API version 53.0 and later. |
| themeColor | Field TypePromptThemeColor (enumeration of type string)DescriptionIndicates which custom theme color is applied to the in-app guidance. Required if themeSaturation is specified. For a walkthrough, specify this value on the first step. Valid values are:Theme1, which is derived from the current brand colorTheme2, which is derived from the current page background colorTheme3, which is derived from the current global header colorTheme4, which is derived from the current app theme color |
| themeSaturation | Field TypePromptThemeSaturation (enumeration of type string)DescriptionIndicates which color value, or saturation, is applied to the in-app guidance that has a custom theme color. Required if themeColor is specified. For a walkthrough, specify this value on the first step. Valid values are:DarkLight |
| timesToDisplay | Field TypeintDescriptionRequired if recurrences are scheduled. The maximum number of times to show the in-app guidance. Salesforce detects whether the user interacts with the in-app guidance, then determines whether to show the in-app guidance again or cancel scheduled recurrences. Maximum value of 30. For a walkthrough, specify this value on the first step. |
| title | Field TypestringDescriptionRequired. The label for the title. Maximum of 36 characters. |
| uiFormulaRule | Field TypeUiFormulaRule[]DescriptionA set of one or more permission filters that define the conditions under which the in-app guidance displays on the page.If the rule evaluates to true, the in-app guidance displays on the page. If false, it doesn't display. If this field is null, the in-app guidance displays by default. |
| userAccess | Field TypePromptUserAccess (enumeration of type string)DescriptionIndicates which permissions can see the in-app guidance. Valid values are:Everyone, which indicates that there’s no permission restrictionsSpecificPermissions, which indicates that only users with all the specific user permissions specified can see the in-app guidanceIn API version 48.0 and earlier, this field is required. |
| userProfileAccess | Field TypePromptUserProfileAccess (enumeration of type string)DescriptionIndicates which profiles can see the in-app guidance. This field is available in API version 48.0 and later. Valid values are:Everyone, which indicates that there are no profile restrictionsSpecificProfiles, which indicates that users with any of the specified user profiles can see the in-app guidance |
| versionNumber | Field TypeintDescriptionRequired. The number remains 1 since multiple versions aren’t saved in the org. |
| videoLink | Field TypestringDescriptionThe embed URL for a video in a docked prompt. Maximum of 1,000 characters. You can specify this field or the image field, but not both. This field is available in API version 48.0 and later. See Considerations for Creating In-App Guidance. |

## UiFormulaRule

A set of one or more filters that define the conditions under which a prompt displays on a Lightning Experience page.

| Field Name | Description |
| --- | --- |
| booleanFilter | Field TypestringDescriptionSpecifies the AND filter condition. |
| criteria | Field TypeUiFormulaCriterion[]DescriptionList of one or more filters that, when evaluated, determine visibility. |

## UiFormulaCriterion

A single filter that, when evaluated, helps define visibility on a Lightning Experience page.

| Field Name | Description |
| --- | --- |
| leftValue | Field TypestringDescriptionRequired. The field used for filtering. Only standard and custom permissions can be included. You can use these expressions in the leftValue field when setting filters for visibility.{!$Permission.CustomPermission.permissionName}—Use this expression to control visibility based on the custom permissions of the user viewing the Lightning page. Supported for app, Home, and record pages only.{!$Permission.StandardPermission.permissionName}—Use this expression to control visibility based on the standard permissions of the user viewing the Lightning page. Supported for app, Home, and record pages only.{!ENCODED:{!ID:$User.Profile.Key}}—Use this expression to control visibility based on the custom or standard profile of the user viewing the Lightning page. Available in API Version 48.0 and later. |
| operator | Field TypestringDescriptionRequired. Defines the operator used to filter the data. Valid value is EQUAL. |
| rightValue | Field TypestringDescriptionSpecifies if you want to evaluate the visibility for permissions or the name of the profile.For permissions, use true.For profiles, use the name of the profile. Available in API Version 48.0 and later. For example, Standardor custom_regionalsales. |

## Declarative Metadata Sample Definition

The following is an example of a Prompt component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Prompt xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>Prompt Label</masterLabel>
    <promptVersions>
        <actionButtonLabel>Learn How</actionButtonLabel>
        <actionButtonLink>https://trailhead.salesforce.com/en/content/learn/modules/scrum-and-kanban-at-salesforce/learn-about-kanban</actionButtonLink>
        <body>Explore how the Path and the Kanban view can help you track, manage, and update your records.</body>
        <delayDays>1</delayDays>
        <description>Kanban floating prompt</description>
        <dismissButtonLabel>OK</dismissButtonLabel>
        <displayPosition>TopLeft</displayPosition>
        <displayType>FloatingPanel</displayType>
        <endDate>2019-03-11</endDate>
        <isPublished>true</isPublished>
        <masterLabel>Prompt Label</masterLabel>
        <publishedDate>2019-03-11</publishedDate>
        <shouldDisplayActionButton>false</shouldDisplayActionButton>
        <shouldIgnoreGlobalDelay>false</shouldIgnoreGlobalDelay>
        <startDate>2019-03-11</startDate>
        <targetAppDeveloperName>LightningSales</targetAppDeveloperName>
        <targetAppNamespacePrefix>standard</targetAppNamespacePrefix>
        <timesToDisplay>3</timesToDisplay>
        <title>Get on the Path to Success</title>
        <userAccess>SpecificPermissions</userAccess>
        <userProfileAccess>SpecificProfiles</userProfileAccess>
        <versionNumber>1</versionNumber>
        <videolink>https://www.youtube.com/embed/Ko-gcObzTVo</videolink>
        <uiFormulaRule>
            <booleanFilter>(1 AND 2 AND 3) AND (4 OR 5)</booleanFilter>
            <criteria>
                <leftValue>{!$Permission.StandardPermission.ActivitiesAccess}</leftValue>
                <operator>EQUAL</operator>
                <rightValue>TRUE</rightValue>
            </criteria>
            <criteria>
                <leftValue>{!$Permission.StandardPermission.ContentWorkspaces}</leftValue>
                <operator>EQUAL</operator>
                <rightValue>TRUE</rightValue>
            </criteria>
            <criteria>
                <leftValue>{!$Permission.CustomPermission.MyCustomPerm}</leftValue>
                <operator>EQUAL</operator>
                <rightValue>TRUE</rightValue>
            </criteria>
            <criteria>
                <leftValue>{!ENCODED:{!ID:$User.Profile.Key}}</leftValue>
                <operator>EQUAL</operator>
                <rightValue>Standard</rightValue>
            </criteria>
            <criteria>
                <leftValue>{!ENCODED:{!ID:$User.Profile.Key}}</leftValue>
                <operator>EQUAL</operator>
                <rightValue>custom_mysysadmin</rightValue>
            </criteria>
        </uiFormulaRule>
    </promptVersions>
</Prompt>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>Prompt</name>
    </types>
    <version>46.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the
          Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
