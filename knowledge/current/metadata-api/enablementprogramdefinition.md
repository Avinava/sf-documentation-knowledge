---
title: "EnablementProgramDefinition"
domain: metadata-api
topic: enablementprogramdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.946Z
estimatedTokens: 3394
keywords: [EnablementProgramDefinition, Enablement, program, includes, exercises, measurable, milestones, help, users, sales, reps, achieve, specific, outcomes, company’s]
---

# EnablementProgramDefinition

> Represents an Enablement program, which includes
			exercises and measurable milestones to help users such as sales reps achieve specific
			outcomes related to your company’s revenue goals.

# EnablementProgramDefinition

Represents an Enablement program, which includes exercises and measurable milestones to help users such as sales reps achieve specific outcomes related to your company’s revenue goals.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

EnablementProgramDefinition components have the suffix .enablementProgramDefinition and are stored in the enablementProgramDefinitions folder.

## Version

EnablementProgramDefinition components are available in API version 61.0 and later.

## Special Access Rules

To access Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is available with the Enablement add-on license.

For partner programs in supported Experience Cloud sites, a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)") is also required.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionRequired. A summary of the program’s goals and content that’s visible to users. |
| developerName | Field TypestringDescriptionRequired. The unique programmatic name for the program record. |
| doesAllowSelfEnrollment | Field TypebooleanDescriptionIndicates whether users can self-enroll in programs that are shared with them (true) or take only assigned programs (false). The default value is false. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for the program, which is defined when the program is created. |
| name | Field TypestringDescriptionRequired. The name of the program that’s visible to users. |
| network | Field TypestringDescriptionThe Experience Cloud site where a program is published for partner users. |
| sections | Field TypeEnablementProgramSection[]DescriptionGroups of milestones and exercises within a program. |
| tasks | Field TypeEnablementProgramTask[]DescriptionThe outcome, milestones, and exercises in the program. |
| type | Field TypestringDescriptionRequired. Indicates whether the program is for sales users in Lightning Experience (Enablement) or partner users in supported Experience Cloud sites (PtnrEnablement). |

## EnablementProgramSection

Represents a logical, trackable group of milestones and exercises within an Enablement program. When users take programs, they can expand or collapse sections.

| Field Name | Description |
| --- | --- |
| developerName | Field TypestringDescriptionRequired. The unique programmatic name for the section. |
| name | Field TypestringDescriptionRequired. The title of the section that’s visible to users when they take the program. |
| sequenceNumber | Field TypeintDescriptionRequired. A number that specifies the order of the section, relative to other sections, starting at 0. |
| tasks | Field TypeEnablementProgramTask[]DescriptionThe milestones and exercises in the section. |

## EnablementProgramTask

Represents an outcome, milestone, or exercise in an Enablement program. A program task is also known as a program item.

| Field Name | Description |
| --- | --- |
| customSubCategoryName | Field TypestringDescriptionThe API name of custom exercise task subcategory. This value determines the type of the custom exercise and its associated content. Available in API version 63.0 and later. |
| day | Field TypeintDescriptionRequired. The day of the program when the item is due, relative to the program's start date. For example, if a user is expected to complete an exercise where they watch a product demo by day 2, this field’s value is 2. For an outcome, this field specifies the number of days the full program takes. For example, if your program lasts 60 days, the value of this field is 60 for the outcome. This field’s value contributes to the program’s due date that users see when they take the program. |
| description | Field TypestringDescriptionRequired. A summary of the outcome, milestone, or exercise that’s visible to users when they take the program. |
| developerName | Field TypestringDescriptionRequired. The unique programmatic name for the outcome, milestone, or exercise. |
| exercise | Field TypeEnablementProgramTaskExerciseDescriptionThe content used with an exercise.If taskSubCategory is ActionItem, this field isn’t included when retrieving metadata. |
| milestone | Field TypeEnablementProgramTaskMilestoneDescriptionThe definition of an outcome or milestone, including the Enablement measures used and the criteria for completing the goal. |
| name | Field TypestringDescriptionRequired. The title of the outcome, milestone, or exercise that’s visible to users when they take the program. |
| sequenceNumber | Field TypeintDescriptionRequired. A number that specifies the order of the milestone or exercise, relative to other milestones or exercises that have the same due date in the program or in the same section, starting at 0. This number determines the order of items that users see for that day in the program. |
| taskCategory | Field TypeProgramTaskDefCategory (enumeration of type string)DescriptionRequired. The type of the program item.Values are:ExerciseMilestoneMilestone is used for both the program’s outcome and incremental milestones. |
| taskSubCategory | Field TypestringDescriptionRequired. The type of exercise. This value determines the content associated with the exercise. For example, if the field value is Video, the exercise must reference video content from the Enablement workspace in the Digital Experiences app. Possible values are:ActionItemAudioRecordingCustomExercise—Available in API version 62.0 and later.DocumentFeedbackRequestOtherOtherExerciseScheduledEventTextLessonTrailheadVideoWhen taskCategory is Milestone, the value of taskSubCategory must be Other. |

## EnablementProgramTaskExercise

Represents the content used with an exercise in an Enablement program.

| Field Name | Description |
| --- | --- |
| cmsContent | Field TypeEnablementProgramTaskCmsContentDescriptionThe definition of content managed in the Enablement workspace in the Digital Experiences app when taskSubCategory on EnablementProgramTask is AudioRecording, Document, OtherExercise, ScheduledEvent, TextLesson, or Video. |
| customContent | Field TypeEnablementProgramTaskCustomContentDescriptionThe definition of content used with a custom exercise type when taskSubCategory on EnablementProgramTask is CustomExercise. |
| externalContent | Field TypeEnablementProgramTaskExternalContentDescriptionThe definition of Trailhead content when taskSubCategory on EnablementProgramTask is Trailhead. |
| feedbackContent | Field TypeEnablementProgramTaskFeedbackContentDescriptionThe definition of an assessment survey or Einstein prompt template when taskSubCategory on EnablementProgramTask is FeedbackRequest. |

## EnablementProgramTaskCmsContent

Defines content managed in the Enablement workspace in the Digital Experiences app for the Audio Recording, Document, Other, Scheduled Event, Text Lesson, or Video exercise types.

| Field Name | Description |
| --- | --- |
| apiName | Field TypestringDescriptionRequired in API version 62.0. The unique programmatic ID of the Digital Experiences content for the exercise. This string’s format is workspaceType/workspaceApiName.contentFQN/contentApiName, which matches the fullName field value on the corresponding DigitalExperience metadata type.For example, a Link content record from the Enablement workspace has this API name: enablement/sfdcEnablement_EnablementWorkspace.sfdc_enablement__link/link_API_name. |
| contentKey | Field TypestringDescriptionRequired in API version 61.0 only. |

## EnablementProgramTaskCustomContent

Defines content used with a custom exercise type.

| Field Name | Description |
| --- | --- |
| content | Field TypestringDescriptionA serialized string returned by the Apex class that’s specified in the corresponding LearningItemType metadata type’s apexSerializerDeserializer field. This string identifies the content used with the custom exercise type so the custom exercise can be recreated in the destination org. This string:Can’t exceed 250 charactersMust contain only alphanumeric charactersFor details, see Implement Custom Exercise Types for Enablement Programs in the Sales Programs and Partner Tracks with Enablement Developer Guide. |

## EnablementProgramTaskExternalContent

Defines Trailhead content for the Trailhead exercise type.

| Field Name | Description |
| --- | --- |
| externalId | Field TypestringDescriptionRequired. The API name of the Trailhead module used with the exercise. |
| providerType | Field TypeProgramExtContentDefProvider (enumeration of type string)DescriptionRequired. The supported external content platform or system.Values are:Trailhead |

## EnablementProgramTaskFeedbackContent

Defines the assessment survey or Einstein prompt template for the Feedback Request exercise type.

| Field Name | Description |
| --- | --- |
| inviteeCount | Field TypeintDescriptionThe number of peers or managers that the user is required to invite for giving feedback when type is PeerFeedback. Each peer or manager receives an invitation to the assessment survey associated with the Feedback Request exercise.When type is AIFeedback, this value is always 1. |
| promptTemplate | Field TypestringDescriptionThe prompt template to use with this exercise when type is AIFeedback. |
| surveyDeveloperName | Field TypestringDescriptionThe unique programmatic name for the assessment survey that’s sent to peers and managers when type is PeerFeedback. |
| type | Field TypestringDescriptionRequired. The type of feedback used with the exercise.Values are:AIFeedback—Users submit a video call, and Einstein generates feedback from the call’s transcription. With this type, promptTemplate is required.PeerFeedback—Users submit a URL to a sample of their work, and select peers and managers to review their work. Selected peers and managers complete an assessment survey. With this type, surveyId is required. |

## EnablementProgramTaskMilestone

Defines the requirements for an outcome or milestone, including the Enablement measures used for tracking activity and the criteria for completing the outcome or milestone.

| Field Name | Description |
| --- | --- |
| compositeMilestoneType | Field TypeEnblCompositeMilestoneType (enumeration of type string)DescriptionThe type of logic to use for evaluating the activity from two Enablement measures in a composite milestone.Values are:AdditionDivisionPercentage |
| isMilestoneAnOutcome | Field TypebooleanDescriptionRequired. Indicates whether the program item is the program’s outcome (true) or an incremental milestone (false). |
| milestoneMeasures | Field TypeEnablementProgramTaskMilestoneMeasure[]DescriptionThe Enablement measures used with the outcome or milestone. |
| milestoneTarget | Field TypedoubleDescriptionThe target value for a user to achieve to get credit for completing the outcome or milestone. The unit depends on the specific measure used with the outcome or milestone. For example, if the measure is the dollar amount of all closed opportunities, then the field value is measured in dollars. |
| minimumSampleSize | Field TypeintDescriptionThe number of records to evaluate when calculating progress for an outcome or milestone that uses an average-based measure. Use this field with milestoneTarget. For example, if you want users to achieve an average deal size of $50,000 after closing 4 deals, then this field’s value is 4 and milestoneTarget is 50000. |

## EnablementProgramTaskMilestoneMeasure

Defines the Enablement measure used with an outcome or milestone.

| Field Name | Description |
| --- | --- |
| measureDefinitionDeveloperName | Field TypestringDescriptionThe unique programmatic name of the Enablement measure used with the outcome or milestone. |
| sequenceNumber | Field TypeintDescriptionA number that specifies the order of the Enablement measure when multiple measures are used with one outcome or milestone, starting at 0. For example, in a composite milestone that uses the Percentage function, the measure that provides the numerator value is sequence 0 and the measure that provides the denominator value is sequence 1. |

## Declarative Metadata Sample Definition

The following is an example of an EnablementProgramDefinition component.

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
<EnablementProgramDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Get started with sales at Cloud Kicks and close your first deal!</description>
    <developerName>Get_Started_Close_First_Deal_Program</developerName>
    <doesAllowSelfEnrollment>false</doesAllowSelfEnrollment>
    <masterLabel>Welcome to Sales at Cloud Kicks</masterLabel>
    <name>Welcome to Sales at Cloud Kicks</name>
    <sections>
        <developerName>section_0</developerName>
        <name>Learn the Ropes in Your First Week</name>
        <sequenceNumber>0</sequenceNumber>
        <tasks>
            <day>1</day>
            <description>Learn the basics of sales at Cloud Kicks.</description>
            <developerName>task_0</developerName>
            <exercise>
                <externalContent>
                    <externalId>sales-rep-training</externalId>
                    <providerType>Trailhead</providerType>
                </externalContent>
            </exercise>
            <name>Sales Rep Training</name>
            <sequenceNumber>0</sequenceNumber>
            <taskCategory>Exercise</taskCategory>
            <taskSubCategory>Trailhead</taskSubCategory>
        </tasks>
        <tasks>
            <day>2</day>
            <description>Watch our CEO explain the company vision.</description>
            <developerName>task_1</developerName>
            <exercise>
                <cmsContent>
                    <apiName>enablement/sfdcEnablement_EnablementWorkspace.sfdc_enablement__link/company_vision_video</apiName>
                </cmsContent>
            </exercise>
            <name>See Our Company Vision</name>
            <sequenceNumber>1</sequenceNumber>
            <taskCategory>Exercise</taskCategory>
            <taskSubCategory>Video</taskSubCategory>
        </tasks>
        <tasks>
            <day>3</day>
            <description>Action Item</description>
            <developerName>task_2</developerName>
            <name>Action Item</name>
            <sequenceNumber>2</sequenceNumber>
            <taskCategory>Exercise</taskCategory>
            <taskSubCategory>ActionItem</taskSubCategory>
        </tasks>
        <tasks>
            <day>4</day>
            <description>Try out your first sales patch at Cloud Kicks and get feedback from our in-house experts.</description>
            <developerName>task_3</developerName>
            <exercise>
                <feedbackContent>
                <inviteeCount>1</inviteeCount>
                <surveyDeveloperName>discovery_call_assessment</surveyDeveloperName>
            </feedbackContent>
            </exercise>
            <name>Feedback from Peers and Managers</name>
            <sequenceNumber>3</sequenceNumber>
            <taskCategory>Exercise</taskCategory>
            <taskSubCategory>FeedbackRequest</taskSubCategory>
        </tasks>
        <tasks>
            <day>5</day>
            <description>Complete a discovery calls by day 5.</description>
            <developerName>task_4</developerName>
            <isMilestoneAnOutcome>false</isMilestoneAnOutcome>
            <milestone>
                <milestoneMeasures>
                    <measureDefinitionDeveloperName>salesforceTemplate_CallsEmails</measureDefinitionDeveloperName>
                </milestoneMeasures>
                <milestoneTarget>1.0</milestoneTarget>
            </milestone>
            <name>Log a Discovery Call by Day 5</name>
            <sequenceNumber>4</sequenceNumber>
            <taskCategory>Milestone</taskCategory>
            <taskSubCategory>Other</taskSubCategory>
        </tasks>
        <tasks>
            <day>6</day>
            <description>Browse our sales leaders blog for more insights.</description>
            <developerName>task_5</developerName>
            <exercise>
                <cmsContent>
                    <apiName>enablement/sfdcEnablement_EnablementWorkspace.sfdc_enablement__link/sales_blog</apiName>
                </cmsContent>
            </exercise>
            <name>Review Tips from Sales Leaders</name>
            <sequenceNumber>5</sequenceNumber>
            <taskCategory>Exercise</taskCategory>
            <taskSubCategory>OtherExercise</taskSubCategory>
        </tasks>
        <tasks>
            <day>7</day>
            <description>Follow a screen flow for onboarding to the sales team.</description>
            <developerName>task_6</developerName>
            <exercise>
                <customContent>
                    <content>flowDeveloperName=OnboardingFlow</content>
                </customContent>
            </exercise>
            <name>Onboarding Flow</name>
            <sequenceNumber>6</sequenceNumber>
            <taskCategory>Exercise</taskCategory>
            <taskSubCategory>CustomExercise</taskSubCategory>
            <customSubCategoryName>ScreenFlowTaskSubCategory</customSubCategoryName>
        </tasks>
    </sections>
    <tasks>
        <day>30</day>
        <description>Close your first opportunity. To make sure it's counted, set the opportunity Stage field to Closed Won.</description>
        <developerName>task_enablementProgramOutcomeCard</developerName>
        <isMilestoneAnOutcome>true</isMilestoneAnOutcome>
        <milestone>
            <milestoneMeasures>
                <measureDefinitionDeveloperName>measure_CloseFirstDeal</measureDefinitionDeveloperName>
            </milestoneMeasures>
            <milestoneTarget>1.0</milestoneTarget>
        </milestone>
        <name>outcome</name>
        <sequenceNumber>0</sequenceNumber>
        <taskCategory>Milestone</taskCategory>
        <taskSubCategory>Other</taskSubCategory>
    </tasks>        
    <type>Enablement</type>
</EnablementProgramDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Get_Started_Close_First_Deal_Program</members>
        <name>EnablementProgramDefinition</name>
    </types>
    <version>61.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- LearningItemType (atlas.en-us.api_meta.meta/api_meta/meta_learningitemtype.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
