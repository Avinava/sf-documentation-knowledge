---
title: "Community (Zone)"
domain: metadata-api
topic: community-zone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.795Z
estimatedTokens: 1476
keywords: [Community, Zone, Represents, zone, contains, Ideas, Chatter, Answers, objects., Zones, shared, features, allowing, view, create, zones, those, locations.This, extends, Metadata]
---

# Community (Zone)

> Represents a zone that contains Ideas or Chatter Answers
            objects. Zones are shared by the Ideas, Answers, and Chatter Answers features, allowing
            you to view and create zones from those locations.This type extends the Metadata metadata type and inherits its
                        fullName field.

# Community (Zone)

Represents a zone that contains Ideas or Chatter Answers objects. Zones are shared by the Ideas, Answers, and Chatter Answers features, allowing you to view and create zones from those locations.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Starting with the Summer ’13 release, Chatter Answers and Ideas “communities” have been renamed to “zones.” In API version 28, the API object label has changed to Zone, but the API type is still Community.

## File Suffix and Directory Location

Zones have the suffix community and are stored in the communities folder.

## Version

Community (Zone) components are available in API version 27.0 and later.

## Fields

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

When enableChatterAnswers is set to false, values specified for the following fields are ignored and not saved: communityFeedPage, emailFooterDocument, emailHeaderDocument, enablePrivateQuestions, emailNotificationUrl, and site.

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the zone is active (true) or not (false). |
| chatterAnswersFacebookSsoUrl | string | (Read only) The Facebook sign-on URL, which is based on the Facebook authentication provider selected in your Chatter Answers settings. This field is available only if Chatter Answers and Facebook Single Sign-On for Chatter Answers are enabled. |
| communityFeedPage | string | The Visualforce page that hosts the zone’s feeds. This field is available when Chatter Answers is enabled in the organization. |
| description | string | The description of the zone. |
| emailFooterDocument | string | The text or HTML file that incorporates your organization’s branding into the footer of email notifications. This field is available when Chatter Answers is enabled in the organization. |
| emailHeaderDocument | string | The text or HTML file that incorporates your organization’s branding into the header of email notifications. This field is available when Chatter Answers is enabled in the organization. |
| emailNotificationUrl | string | The URL that’s included in email notifications. This field is available when Chatter Answers is enabled in the organization. This field replaces portalEmailNotificationUrl in API version 28.0 and later. |
| enableChatterAnswers | boolean | Indicates whether the zone has Chatter Answers enabled (true) or not (false). This field is available when Chatter Answers is enabled in the organization. |
| enablePrivateQuestions | boolean | Indicates whether Chatter Answers questions can be escalated to cases (true) or not (false). This field is available when Chatter Answers is enabled in the organization. |
| expertsGroup | string | The name of the public group that act as experts in the zone. This field is available when eitherIdeas or Answers are enabled in the organization. |
| portal | string | The name of the portal in which to display the zone. |
| portalEmailNotificationUrl | string | The portal URL that’s included in email notifications. This field is available when Chatter Answers is enabled in the organization. This field has been replaced by emailNotificationUrl in API version 28.0 and later. |
| reputationLevels | ReputationLevels | The fields that define the points and name of each reputation level you define. You can create up to 25 reputation levels per zone. |
| showInPortal | boolean | Indicates whether the zone is available to all portals (true) or not available to any portals (false). |
| site | string | The name of the site for the zone. This field is available when Chatter Answers is enabled in the organization. |

## ReputationLevels

Represents the points and reputation label that displays on hover over a user’s photo in the feed.

| Field Name | Field Type | Description |
| --- | --- | --- |
| chatterAnswersReputationLevels | ChatterAnswersReputationLevel [] | Contains the name and value pair that describes the reputation level for Chatter Answers. Available in API version 28.0 and later. |
| ideaReputationLevels | IdeaReputationLevel | Contains the name and value pair that describes the reputation for Ideas. Available in API version 28.0 and later. |

## ChatterAnswersReputationLevel

Represents the reputation name and the number of points for that level for Chatter Answers.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | The name of the reputation level, for example, “Expert.” |
| value | int | The minimum number of points for the reputation level. |

## IdeaReputationLevel

Represents the reputation name and the number of points for that level for Ideas. Available in API version 28.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | The name of the reputation level, for example, “Expert.” |
| value | int | The minimum number of points for the reputation level. |

## Declarative Metadata Sample Definition

The following is the definition of a community (zone) component:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Community xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <communityFeedPage>communityWithHeaderAndFooter_main</communityFeedPage>
    <description>Metadata Test</description>
    <emailFooterDocument>sampleFolder/emailFooter.html</emailFooterDocument>
    <emailHeaderDocument>sampleFolder/emailHeader.html</emailHeaderDocument>
    <enableChatterAnswers>true</enableChatterAnswers>
    <enablePrivateQuestions>true</enablePrivateQuestions>
    <expertsGroup>CommunityExperts</expertsGroup>
    <portal>Customer Portal</portal>
    <emailNotificationUrl>http://yourURL</emailNotificationUrl>
<reputationLevels>
        <chatterAnswersReputationLevels>
            <name>Newbie</name>
            <value>0</value>
        </chatterAnswersReputationLevels>
        <chatterAnswersReputationLevels>
            <name>Smartie</name>
            <value>500</value>
        </chatterAnswersReputationLevels>
        <chatterAnswersReputationLevels>
            <name>Pro</name>
            <value>2000</value>
        </chatterAnswersReputationLevels>
        <chatterAnswersReputationLevels>
            <name>All Star</name>
            <value>5000</value>
        </chatterAnswersReputationLevels>
        <ideaReputationLevels>
            <name>Observer</name>
            <value>0</value>
        </ideaReputationLevels>
        <ideaReputationLevels>
            <name>Contributor</name>
            <value>100</value>
        </ideaReputationLevels>
        <ideaReputationLevels>
            <name>Influencer</name>
            <value>400</value>
        </ideaReputationLevels>
        <ideaReputationLevels>
            <name>Thought Leader</name>
            <value>1500</value>
        </ideaReputationLevels>
    </reputationLevels>
    <showInPortal>true</showInPortal>
    <site>ChatterAnswersSite</site>
</Community>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
