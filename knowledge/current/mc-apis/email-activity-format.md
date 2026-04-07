---
title: "Email Activity Format"
domain: mc-apis
topic: email-activity-format
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:20.123Z
estimatedTokens: 1430
keywords: [Email, Activity, known, send, messages, journeys, cannot, #journey-specification-format, Journey, Specification, Helpful, Hints, Sample, Items]
---

> The version 2 email activity, also known as send email activity, allows you to send email messages from within your journeys. This activity type cannot be used in a custom activity.

# Email Activity Format

The version 2 email activity, also known as send email activity, allows you to send email messages from within your journeys. This activity type cannot be used in a custom activity.

Existing version 1 email activities remain in the legacy format and function as normal until they are edited. When a marketer edits and saves a send email activity, Journey Builder automatically upgrades the activity by mapping the data to the version 2 format.

## [](#journey-specification-format)Journey Specification Format

The activity must be formatted as specified below. The following JSON object is included in the activities array of a journey, as defined in the Journey Specification.

## Helpful Hints

-   The email activity creates a triggered send which it uses during runtime to deliver the email message.
    -   When a journey is unpublished, the triggered send is set to inactive.
    -   If the activity is republished, the triggered send is reactivated to keep reporting numbers for accurate versions.
-   You can obtain the sender profile ID and delivery profile ID by going to Email Studio > Admin > Delivery Settings.
-   The email you configure for use with this activity must meet the following Marketing Cloud delivery standards:
    -   Contain a Profile Center link
    -   Pass validations
    -   Contain only valid AmpScript and SSJS
    -   Must not contain any errors
-   If an exception occurs while publishing the journey containing an invalid email, the errors will display in the Journey Builder UI.

## Sample Request

```js
{
    "type": "EMAILV2",
    "key": "<activity key>",
    "name": "<activity name>",
    "applicationId": "<Marketing Cloud provided GUID>",
    "outcomes": [
        {
            "key": "<outcome key>",
            "next": "<key of next activity>"
        }
    ],
    "metaData":{
        "icon":"/img/email-icon.svg",
        "iconSmall":"/img/email-icon.svg",
        "category":"message",
        "version":"1.0",
        "isConfigured":true
    },
    "configurationArguments":{
        "triggeredSend":{
            "emailId":"<email id>",
            "emailSubject": "<subject>",
            "preHeader":"<preheader>",
            "description":"<description>",
            "campaigns":[
                {
                    "id":"<campaign id>",
                    "name":"<campaign name>",
                    "color":"<campaign color>"
                }
            ],
            "sendClassificationId":"<send classification id>",
            "senderProfileId":"<sender profile id>",
            "deliveryProfileId":"<delivery profile id>",
            "publicationListId":"<publication list id>",
            "suppressionLists":[
                {
                    "name":"<suppression list name>",
                    "id":"<suppression list id>"
                }
            ],
            "domainExclusions":[
                {
                    "name":"<domain exclusion name>",
                    "id":"<domain exclusion id>"
                }
            ],
            "exclusionFilter":"<exclusion script>",
            "isTrackingClicks":true,
            "isMultipart":true,
            "isSendLogging":true,
            "suppressTracking":true,
            "ccEmail":"<cc email>",
            "bccEmail":"<bcc email>",
            "keyword":"<keyword>",
            "throttleLimit":500,
            "throttleOpens":"12:00",
            "throttleCloses":"12:30",
            "isSalesforceTracking":true
        }
    }
}
```

## Sample Response

```js
{
     "id": "<Marketing Cloud provided GUID>",
     "key":"<activity key>",
     "name":"<activity name>",
     "type":"EMAILV2",
     "outcomes":[
         {
             "next": "<key of next activity>"
             "arguments":{},
             "metaData":{}
         }
     ],
     "arguments":{

     },
     "configurationArguments":{
         "triggeredSend":{
             "emailId":"<email id>",
             "emailSubject": "<subject>",
             "preHeader":"<preheader>",
             "description":"<description>",
             "campaigns":[
                 {
                     "id":"<campaign id>",
                     "name":"<campaign name>",
                     "color":"<campaign color>"
                 }
             ],
             "sendClassificationId":"<send classification id>",
             "senderProfileId":"<sender profile id>",
             "deliveryProfileId":"<delivery profile id>",
             "publicationListId":"<publication list id>",
             "suppressionLists":[
                 {
                     "name":"<suppression list name>",
                     "id":"<suppression list id>"
                 }
             ],
             "domainExclusions":[
                 {
                     "name":"<domain exclusion name>",
                     "id":"<domain exclusion id>"
                 }
             ],
             "exclusionFilter":"<exclusion script>",
             "isTrackingClicks":true,
             "isMultipart":true,
             "isSendLogging":true,
             "suppressTracking":true,
             "ccEmail":"<cc email>",
             "bccEmail":"<bcc email>",
             "keyword":"<keyword>",
             "throttleLimit":500,
             "throttleOpens":"12:00",
             "throttleCloses":"12:30",
             "isSalesforceTracking":true
         }
     },
     "metaData":{
         "icon":"/img/email-icon.svg",
         "iconSmall":"/img/email-icon.svg",
         "category":"message",
         "version":"1.0",
         "isConfigured":true
     }
}
```

## Related Items

[Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)

## Related Topics

- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
