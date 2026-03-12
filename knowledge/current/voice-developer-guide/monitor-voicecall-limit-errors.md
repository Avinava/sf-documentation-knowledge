---
title: "Monitor VoiceCall Limit Errors"
domain: voice-developer-guide
topic: monitor-voicecall-limit-errors
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.783Z
estimatedTokens: 814
keywords: [Monitor, VoiceCall, Limit, Errors, org, exceeds, maximum, number, concurrent, calls, system, can’t, records, Track, hits]
---

# Monitor VoiceCall Limit Errors

> When your org exceeds the limit for the maximum number of concurrent calls, the system
  can’t create VoiceCall records. Track when your org hits the concurrent call limit or the phone
  calls initiated per second limit by checking output of the InvokeTelephonyIntegrationApi Lambda
  function.

# Monitor VoiceCall Limit Errors

When your org exceeds the limit for the maximum number of concurrent calls, the system can’t create VoiceCall records. Track when your org hits the concurrent call limit or the phone calls initiated per second limit by checking output of the InvokeTelephonyIntegrationApi Lambda function.

The output of the InvokeTelephonyIntegrationApi Lambda function is stored in a contact attribute. If the contact attribute’s value is set to 429, it means that an error occurred. Go to AWS Cloudwatch to view the logs and search for error messages that contain the prefix SCV\_LIMITS\_ERROR. This prefix indicates a VoiceCall limit error.

You can address these errors in two ways. One way creates a fallback mechanism that times out after a certain number of attempts. The other way writes a value to a contact attribute so you can see when errors occur.

**OPTION 1: Use a fallback mechanism that times out**

This approach creates a fallback mechanism that you can add to the contact flow. In this approach, the system attempts to create the VoiceCall record for a certain number of times and then times out.

1.  From the inbound contact flow, set the contact attribute, name it, and set its value to FALSE. For this use case, we name it "sf\_voicecall\_limit\_error". To learn more about contact attributes, see the [Amazon Connect Administrator Guide on setting contact attributes](https://docs.aws.amazon.com/connect/latest/adminguide/set-contact-attributes.html).
2.  Modify the InvokeTelephonyIntegrationApi Lambda function to catch any 429 API response codes returned from the CreateVoiceCall API. This 429 error code is returned by the API when it hits any limit errors. Once you catch the error, update the contact attribute you previously created by setting the value to TRUE.
3.  From within the contact flow, the Lambda errors out, so as part of the error branch of the Lambda block, place a check contact attribute block and verify if the attribute is TRUE. If so, you can put a loop block in the contact flow and play a prompt before trying to create a VoiceCall record. Track of the number of retries using another contact attribute. You can put a limit on the number of times the system tries to create the VoiceCall record. To learn more about contact attributes, see the [Amazon Connect Administrator Guide on checking contact attributes](https://docs.aws.amazon.com/connect/latest/adminguide/check-contact-attributes.html).

![Check contact attributes](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_check_contact_attributes.png&folder=voice_developer_guide)

![Contact flow](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_contact_flow.png&folder=voice_developer_guide)

This approach uses a fallback mechanism when the per second limit is hit.

**OPTION 2: See the number of failed calls**

This approach shows you how many calls failed because of the limit error.

1.  Write the error to a contact attribute such as Voice\_Call\_Creation\_Status.
2.  To identify how many calls failed as a result of the limit error, do a contact search using the contact attribute. Use a filter to search based on contract attributes. Update the Lambda function to check a condition on the contact attribute.
