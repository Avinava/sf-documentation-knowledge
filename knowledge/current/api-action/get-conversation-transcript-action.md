---
title: "Get Conversation Transcript Action"
domain: api-action
topic: get-conversation-transcript-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.077Z
estimatedTokens: 573
keywords: [Conversation, Transcript, Action, voice, video, call, REST, HTTP, Inputs, Outputs, Usage]
---

# Get Conversation Transcript Action

> Gets a transcript for a voice or video call.

# Get Conversation Transcript Action

Gets a transcript for a voice or video call.

This action is available in API version 63.0 and later.

On invocation, this action gets the transcript for a voice or video call record.

Typical use cases include:

-   Ground a customer-defined prompt template with a conversation transcript
-   Automate updates to relevant records based on conversation data

Some considerations include:

-   The transcript must be available in order to retrieve it.
-   The user calling the action must have Read access to the voice or video call.
-   Video calls can retrieve the initial raw vendor transcript, but voice calls can retrieve the processed transcript only.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/getConversationTranscript

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| recordId | TypestringDescriptionRequired. The ID of the related voice or video call record to get the transcript for. |
| transcriptType | TypepicklistDescriptionThe type of transcript. The Raw type includes the plain text transcript, while the Processed type contains the full conversation transcript. The Raw transcript type is limited to video calls only. |

## Outputs

| output | Details |
| --- | --- |
| structuredTranscript | TypeApexDescriptionAn Apex ConversationTranscript record that contains the full conversation transcript. This is available for Processed transcript types only. |
| unformattedTextTranscript | TypestringDescriptionThe conversation transcript in plain text format. For Processed transcript types, the speaker and conversation content are shown. For Raw transcript types, whatever is present from the vendor is shown. |

## Usage

Sample Input

```

```

Sample Output

```

```

```

```

For more information about this action, see [Flow Core Actions: Get Conversation Transcript](https://help.salesforce.com/s/articleView?id=platform.flow_ref_elements_actions_get_conversation_transcript.htm&language=en_US "HTML (New Window)") and [Get Conversation Transcript Invocable Action](https://help.salesforce.com/s/articleView?id=sales.ci_ia_get_conv_transcript.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Code Examples

```
{
    "inputs": [
        {
            "recordId": "6qrAAC000000BGPYB2",
            "transcriptType": "PROCESSED".  // Values: RAW, PROCESSED. Optional
        }
    ]
}
```

```
{"structuredTranscript":{"entries":[{"endDateTime":"2025-02-20T00:01:13.426Z","entry":"Hey, good morning, hi, nice to meet you and thanks for jumping on me, how&#39;re you doing today.","sequence":0,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:01:07.546Z"},{"endDateTime":"2025-02-20T00:01:43.906Z","entry":"Good morning, Sam, Yeah, thanks so much for getting back to me and for setting this up I didn&#39;t think I did hear back from someone so quickly I&#39;m doing well and yourself, I&#39;m doing great, I&#39;m, and I&#39;m glad we able to find the time that works so quickly and your you&#39;re just said that you want to hear a bit more about your are you guys and company was currently are you looking to get started with the service like ours so we are currently using Genius Solutions, But we&#39;re looking to switch over to something else","sequence":1,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:01:14.236Z"},{"endDateTime":"2025-02-20T00:01:48.346Z","entry":"Alright, then, how long you been with Genius Solutions?","sequence":2,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:01:45.046Z"},{"endDateTime":"2025-02-20T00:02:17.086Z","entry":"We&#39;ve been using Genius Solutions for 2 years now it works, but I feel like we&#39;re still missing some key features, the, the other companies have at least I&#39;ve been doing a bit of research and I&#39;m also taking a look at total tax, I haven&#39;t had a call with Total Attack or anything, but, from, what I see on their website they look like they&#39;re similar to you guys gotcha, okay, 2 years with Genius Solutions.","sequence":3,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:01:49.156Z"},{"endDateTime":"2025-02-20T00:02:19.936Z","entry":"Have you had a chance to go through our website as well?","sequence":4,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:02:17.746Z"},{"endDateTime":"2025-02-20T00:02:33.256Z","entry":"Yes, extensively, the one thing I am missing is the pricing, I need to be able to tell my boss, how much is going to Cost us, you know, we can&#39;t go outside the Budget.","sequence":5,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:02:20.716Z"},{"endDateTime":"2025-02-20T00:02:47.956Z","entry":"Completely understand and we&#39;ll work to make sure to stay within a Budget, so the reason we don&#39;t have any pricing listed on the website is because, we customize each package based on which features functionality is the number of the user licenses that you would need","sequence":6,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:02:33.946Z"},{"endDateTime":"2025-02-20T00:02:49.876Z","entry":"Okay that makes sense","sequence":7,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:02:48.826Z"},{"endDateTime":"2025-02-20T00:02:59.356Z","entry":"So, how many licenses would you be looking at in which I&#39;ve visited group and Wisdom does subscriptions, years Ah, seems interesting or a good to you.","sequence":8,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:02:50.836Z"},{"endDateTime":"2025-02-20T00:03:22.186Z","entry":"So we wouldn&#39;t need 16 user licenses right now, but if we need more can be added to it at any time, you can always adjust the number of licenses based on a higher teeny grows that it&#39;s not a problem. Okay that&#39;s good to know, Genius Solutions is not making it as smooth processed purchase more user licenses, which is also one of the reasons that we are looking to switch","sequence":9,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:03:00.526Z"},{"endDateTime":"2025-02-20T00:03:35.596Z","entry":"No that&#39;s an easy, which, even if you want to move a few licenses we can do that just didn&#39;t really it just takes 24 hours for the account reset and then you&#39;ll be good to go","sequence":10,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:03:23.596Z"},{"endDateTime":"2025-02-20T00:03:56.826Z","entry":"Okay, that&#39;s great, it&#39;s not something we&#39;d be changing often But, ah good to know that it&#39;s not an issue if and, when it is I did exactly, and which subscription here were you interested in I was taking a look at Intermediate and potentially the Premium Add On as well.","sequence":11,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:03:36.806Z"},{"endDateTime":"2025-02-20T00:04:02.616Z","entry":"Alright gotcha, I dive right in and, and he said, you need a 16 years or licenses, right","sequence":12,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:03:57.596Z"},{"endDateTime":"2025-02-20T00:04:07.806Z","entry":"Correct, and, how do we pay is this a monthly Cost or annual","sequence":13,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:04:03.216Z"},{"endDateTime":"2025-02-20T00:04:28.496Z","entry":"Monthly and via our portal app so for 16 user licenses with the Intermediate Subscription that would Cost to a total of $1200 a month the Premium Add On it and it is an additional $55 per license. So if you wanted to include that as well, you&#39;d be looking at $2080 monthly.","sequence":14,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:04:08.966Z"},{"endDateTime":"2025-02-20T00:04:45.876Z","entry":"Alright it looks like the Premium Add On is outside our Budget can&#39;t go any higher than 1600 monthly, but just the Intermediate Subscription, fits and we can also request more from corporate in the future hopefully.","sequence":15,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:04:29.456Z"},{"endDateTime":"2025-02-20T00:05:02.676Z","entry":"I can do all this together in a price quote, and email it over to you that would be great could you add my partner John too distance wall chirping I have your email from their request, confirming it work, you know, at Gmail Dot Com and can you get any junk?","sequence":16,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:04:46.896Z"},{"endDateTime":"2025-02-20T00:05:09.116Z","entry":"Yeah that&#39;s my email, and John&#39;s email is John email at gmail dot Com.","sequence":17,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:05:03.426Z"},{"endDateTime":"2025-02-20T00:05:14.366Z","entry":"Okay great, so once we get off this call I&#39;ll put all that together and send it over.","sequence":18,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:05:09.866Z"},{"endDateTime":"2025-02-20T00:05:22.586Z","entry":"Perfect once we have that we can bring into corporate for discussion they have the authority to approve the final purchase request.","sequence":19,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:05:15.086Z"},{"endDateTime":"2025-02-20T00:05:28.956Z","entry":"Would you like to run through a full demo of the Intermediate Subscription I am available at the end of next week?","sequence":20,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:05:23.996Z"},{"endDateTime":"2025-02-20T00:05:37.266Z","entry":"Actually that would be great, let me can solve that, with my boss Linda, she will want to be on this call his wall","sequence":21,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:05:30.656Z"},{"endDateTime":"2025-02-20T00:05:45.456Z","entry":"Okay, awesome so in the meantime also send over a few potential time slots for demos next week and you can let me know which works best for you guys","sequence":22,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:05:37.976Z"},{"endDateTime":"2025-02-20T00:05:49.926Z","entry":"Wonderful thank you so much and I look forward to speaking more soon.","sequence":23,"speakerId":"1afSG000000yOttYAE","startDateTime":"2025-02-20T00:05:46.176Z"},{"endDateTime":"2025-02-20T00:05:54.146Z","entry":"Great, we&#39;ll talk soon, thanks so much bye bye.","sequence":24,"speakerId":"1afSG000000yOsHYAU","startDateTime":"2025-02-20T00:05:50.606Z"}],"participants":[{"relatedWhoId":"005SG00000DuJJqYAN","speakerId":"1afSG000000yOsHYAU","speakerName":"Sam Rhodes","speakerRole":"Agent"},{"relatedWhoId":"003SG00000Ay9h1YAB","speakerId":"1afSG000000yOttYAE","speakerName":"Jon Amos","speakerRole":"EndUser"}],"transcribedLanguage":"en","transcriptionDateTime":"2025-02-21T00:06:06.131Z"},
```

```
"unformattedTextTranscript":"Sam Rhodes: Hey, good morning, hi, nice to meet you and thanks for jumping on me, how're you doing today.
Jon Amos: Good morning, Sam, Yeah, thanks so much for getting back to me and for setting this up I didn't think I did hear back from someone so quickly I'm doing well and yourself, I'm doing great, I'm, and I'm glad we able to find the time that works so quickly and your you're just said that you want to hear a bit more about your are you guys and company was currently are you looking to get started with the service like ours so we are currently using Genius Solutions, But we're looking to switch over to something else
Sam Rhodes: Alright, then, how long you been with Genius Solutions?
Jon Amos: We've been using Genius Solutions for 2 years now it works, but I feel like we're still missing some key features, the, the other companies have at least I've been doing a bit of research and I'm also taking a look at total tax, I haven't had a call with Total Attack or anything, but, from, what I see on their website they look like they're similar to you guys gotcha, okay, 2 years with Genius Solutions.
Sam Rhodes: Have you had a chance to go through our website as well?
Jon Amos: Yes, extensively, the one thing I am missing is the pricing, I need to be able to tell my boss, how much is going to Cost us, you know, we can't go outside the Budget.
Sam Rhodes: Completely understand and we'll work to make sure to stay within a Budget, so the reason we don't have any pricing listed on the website is because, we customize each package based on which features functionality is the number of the user licenses that you would need
Jon Amos: Okay that makes sense
Sam Rhodes: So, how many licenses would you be looking at in which I've visited group and Wisdom does subscriptions, years Ah, seems interesting or a good to you.
Jon Amos: So we wouldn't need 16 user licenses right now, but if we need more can be added to it at any time, you can always adjust the number of licenses based on a higher teeny grows that it's not a problem. Okay that's good to know, Genius Solutions is not making it as smooth processed purchase more user licenses, which is also one of the reasons that we are looking to switch
Sam Rhodes: No that's an easy, which, even if you want to move a few licenses we can do that just didn't really it just takes 24 hours for the account reset and then you'll be good to go
Jon Amos: Okay, that's great, it's not something we'd be changing often But, ah good to know that it's not an issue if and, when it is I did exactly, and which subscription here were you interested in I was taking a look at Intermediate and potentially the Premium Add On as well.
Sam Rhodes: Alright gotcha, I dive right in and, and he said, you need a 16 years or licenses, right
Jon Amos: Correct, and, how do we pay is this a monthly Cost or annual
Sam Rhodes: Monthly and via our portal app so for 16 user licenses with the Intermediate Subscription that would Cost to a total of $1200 a month the Premium Add On it and it is an additional $55 per license. So if you wanted to include that as well, you'd be looking at $2080 monthly.
Jon Amos: Alright it looks like the Premium Add On is outside our Budget can't go any higher than 1600 monthly, but just the Intermediate Subscription, fits and we can also request more from corporate in the future hopefully.
Sam Rhodes: I can do all this together in a price quote, and email it over to you that would be great could you add my partner John too distance wall chirping I have your email from their request, confirming it work, you know, at Gmail Dot Com and can you get any junk?
Jon Amos: Yeah that's my email, and John's email is John email at gmail dot Com.
Sam Rhodes: Okay great, so once we get off this call I'll put all that together and send it over.
Jon Amos: Perfect once we have that we can bring into corporate for discussion they have the authority to approve the final purchase request.
Sam Rhodes: Would you like to run through a full demo of the Intermediate Subscription I am available at the end of next week?
Jon Amos: Actually that would be great, let me can solve that, with my boss Linda, she will want to be on this call his wall
Sam Rhodes: Okay, awesome so in the meantime also send over a few potential time slots for demos next week and you can let me know which works best for you guys
Jon Amos: Wonderful thank you so much and I look forward to speaking more soon.
Sam Rhodes: Great, we'll talk soon, thanks so much bye bye."}
```
