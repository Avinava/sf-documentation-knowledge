---
title: "12000-12099 Subscriber Object"
domain: mc-apis
topic: 12000-12099-subscriber-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:19.614Z
estimatedTokens: 863
keywords: [12000-12099, Subscriber]
---

# 12000-12099 Subscriber Object

# 12000-12099 Subscriber Object

| Error | Message | Resolution |
| --- | --- | --- |
| 12000 | InvalidEmailAddress | This error occurs when you import an email address that does not use the correct syntax: username@domain.extension. Correct or discard the email address before importing the list. |
| 12001 | SubscriberNotFound | This error occurs when the call attempts to act on a subscriber that does not exist in Marketing Cloud. This may occur because the subscriber has not yet been imported or because the call is attempted to act on the wrong subscriber. Import the subscriber if the call is attempting to act on the correct subscriber. Correct the subscriber that the call is attempting to act on if the call is attempting to act on the wrong subscriber. |
| 12002 | TriggeredSpamFilter | This error occurs when you attempt to import an email address that is a known spam trap. Discard the email address before importing the list. |
| 12003 | OnGlobalUnsubList | This error occurs when you attempt to import an email address that appears on the global unsubscribe list. Discard the email address before importing the list. |
| 12004 | InvalidDPV | This error occurs when you attempt to update a subscriber attribute with an invalid value, for example, when attempting to update a subscriber date of birth attribute with their street address. Consult the valid entries for the attribute to determine what values you can enter. |
| 12005 | InvalidChannelMemberID |  |
| 12006 | MissingRequiredDPV | This error occurs when you attempt to create or import a subscriber without a value for a required attribute. For example, if you require the first name of every subscriber, you receive this error when attempting to create or import a subscriber without providing the first name value. Include the required values in the subscriber record before importing. Alternatively, you can change the attribute on the subscriber to be optional. |
| 12007 | EmailAddressAlreadyExists | This error occurs when you attempt to create or import a subscriber using an email address that already exists. This error occurs only if you don't use Subscriber Key values to identify subscribers. Discard the duplicate address before importing. Alternatively, you can change the call to update existing subscribers with the new information rather than attempting to create new subscribers. |
| 12008 | MasterUnsubFailed |  |
| 12009 | UnsubscribeError | This error occurs when you attempt to unsubscribe a subscriber from a list that does not contain the subscriber. Check the validity of the email address and ensure that you are attempting to unsubscribe from the correct list. |
| 12010 | SubscribeError |  |
| 12011 | InvalidDPVs |  |
| 12012 | The subscriber has already been master unsubscribed from the system |  |
| 12013 | MissingMasterUnsubInfo |  |
| 12014 | SubscriberAlreadyExists |  |
| 12015 | Subscriber Key Not Found |  |
| 12016 | Subscriber.Status: when creating a subscriber the status cannot be "Bounced"Subscriber.Status: when creating a subscriber the status cannot be "Deleted" |  |
| 12017 | Invalid Subscriber Type |  |
| 12018 | Resubscribe Failed |  |
| 12019 | Invalid OYB Account |  |
| 12020 | OYB Access Error |  |
| 12021 | Subscriber Key Does Not Match Customer Key |  |
| 12022 | Subscriber Address Does Not Match Error |  |
| 12023 | Invalid Phone Number |  |
| 12024 | Invalid Subscriber Address |  |
| 12025 | SMS Unsupported |  |
