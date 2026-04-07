---
title: "Create a Batch"
domain: mc-apis
topic: create-a-batch
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.078Z
estimatedTokens: 871
keywords: [Batch, API, resource, creates, privacy, setting, changes, call, batch_id, status, Endpoint, URL, JSON, Restrict, Right, Forgotten]
---

> This API resource creates a batch of privacy setting changes. The call returns a batch_id you then use to GET the status of the batch changes.

# Create a Batch

## Overview

This API resource creates a batch of privacy setting changes. The call returns a batch\_id you then use to GET the status of the batch changes.

## Method and Endpoint

`POST https://app.igodigital.com/api/v2/organization/{customer_mid}/privacy`

## URL Parameters

| Name | Type | Description |
| --- | --- | --- |
| customer_mid | string | ID for the account. |

## JSON Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| batch | array | Yes | Contains key value pairs where the key represents a profile ID and the value is an array of strings representing the intended state of the profile's privacy settings after the record is processed. To remove any existing privacy settings for a profile, pass an empty array, such as []. |

### Privacy Values to Restrict

To apply the privacy states to the profile, include one or more of these values in the array.

| Value | Description |
| --- | --- |
| do_not_track | Prevents data received via collect from being saved by Personalization Builder. |
| do_not_profile | Prevents using the profile in generating recommendations. |
| do_not_process | Prevents processing of the profile's data. |

### Privacy Values for Right to be Forgotten

These values represent exclusive actions for a single profile. Don't use them with any other processing strings in that profile's array.

| Value | Description |
| --- | --- |
| rtbf_delete | Immediately deletes the profile and its associated data. |
| rtbf_suppress | Deletes the profile and its associated data after a suppression period of up to 30 days. You can change the suppression period privacy setting in Marketing Cloud. Fourteen days is the default. |
| remove_rtbf_suppress | Stops a previously scheduled profile deletion. |

## Example Request

```
Host:  https://app.igodigital.com
POST /api/v2/organization/12345678/privacy
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
    "batch": {
        "hashed-id-01": ["do_not_track"], // Adds "do_not_track" privacy setting, removes "do_not_profile" or "do_not_process" if they were previously set
        "hashed-id-02": ["do_not_profile"], // Adds "do_not_profile" privacy setting, removes "do_not_track" or "do_not_process" if they were previously set
        "hashed-id-03": ["do_not_process"], // Adds "do_not_process" privacy setting, removes "do_not_profile" or "do_not_track" if they were previously set
        "hashed-id-04": ["do_not_track", "do_not_profile"], // Adds "do_not_track" and "do_not_profile" privacy settings, removes "do_not_process" if it was previously set
        "hashed-id-05": ["do_not_track", "do_not_process"], // Adds "do_not_track" and "do_not_process" privacy settings, removes "do_not_profile" if it was previously set
        "hashed-id-06": ["do_not_profile", "do_not_process"], // Adds "do_not_profile" and "do_not_process" privacy settings, removes "do_not_track" if it was previously set
        "hashed-id-07": ["do_not_track", "do_not_profile", "do_not_process"], // Adds "do_not_track", "do_not_profile" and "do_not_process" privacy settings
        "hashed-id-08": [], // Removes any existing privacy settings for profile
        "hashed-id-09": ["rtbf_delete"], // Deletes profile and associated data
        "hashed-id-10": ["rtbf_suppress"] // Deletes profile and associated data after suppression period
    }
}
```

## Example Response

```
{
    "batch_id": "af417962-c188-4110-adc2-7ea67590e254"
}
```
