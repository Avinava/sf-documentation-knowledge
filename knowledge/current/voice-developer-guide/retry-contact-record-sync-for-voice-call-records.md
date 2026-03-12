---
title: "Retry Contact Record Sync for Voice Call Records"
domain: voice-developer-guide
topic: retry-contact-record-sync-for-voice-call-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.516Z
estimatedTokens: 4230
keywords: [Retry, Contact, Record, Sync, Voice, Call, Records, Amazon, Connect, previously, trace, CTR, data, stored, automatically]
---

# Retry Contact Record Sync for Voice Call Records

> Amazon Connect contact record (previously called contact trace record or CTR) data is stored
            automatically in Voice Call records through data synchronization. Sometimes this sync
            doesn’t occur, and it isn’t always possible to access contact record data in Amazon Connect after
            the call. Back up contact record data to a separate Amazon S3 bucket, then check for Voice Call
            records that don’t have contact record data, and then resync the contact record data to your org using the
            backup data.

# Retry Contact Record Sync for Voice Call Records

Amazon Connect contact record (previously called contact trace record or CTR) data is stored automatically in Voice Call records through data synchronization. Sometimes this sync doesn’t occur, and it isn’t always possible to access contact record data in Amazon Connect after the call. Back up contact record data to a separate Amazon S3 bucket, then check for Voice Call records that don’t have contact record data, and then resync the contact record data to your org using the backup data.

| Ease of Implementation | Advanced |
| --- | --- |
| Estimated Time to Implement | 2–3 hours |

Contact Trace Records are generated on Amazon for each call. This data contains details about the call, including caller and rep information, call statistics, and queue information. The [CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.") Lambda function automatically runs for each call to store this data in a Voice Call record. CTRs aren’t retained by Amazon, and if the CTR sync process fails for any reason, you can lose important information about the call.

This solution provides a way to reattempt a sync of the CTR data by first backing up CTR data in a separate Amazon S3 bucket, then checking for any sync failures, and then re-uploading CTR data whenever necessary.

## Prerequisites

To run this example:

1.  Have your AWS root user or AWS administrator credentials ready.
2.  Be familiar with Amazon S3 buckets. See Amazon’s documentation: [Creating and configuring an S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-configure-bucket.html).
3.  Be familiar with modifying Amazon Connect Lambda functions. See Amazon’s documentation: [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).
4.  Configure the [OAuth support for the InvokeSalesforceRestApiFunction Lambda](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_auth.htm "OAuth is required if you want to use the InvokeSalesforceRestApiFunction Lambda function. If you need to set up or modify the OAuth, refer to these instructions.") function. This step is required to support the getAccessToken function.

## Step 1: Create an Amazon S3 Bucket

Create an Amazon S3 bucket on the same instance as your contact center. This bucket must be accessible within the region where your Amazon instance is configured. When creating your S3 bucket, make sure that you set the right access control policies for the bucket so it's not accessible outside of your instance.

1.  Under **General Configuration > Bucket Type**, select **General Purpose**.
2.  Under **Object Ownership**, select **ACLs disabled (recommended)**.
3.  Under **Block Public Access settings for this bucket**, select **Block all public access**.
4.  Under **Bucket Versioning**, select **Enable**.
5.  Under **Default Encryption > Encryption Type**, select **Server-side encryption with Amazon S3 managed keys (SSE-S3)**.
6.  Under **Default Encryption > Bucket Key**, select **Enable**.

See Amazon’s documentation: [Creating and configuring an S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-configure-bucket.html).

When using the code provided by your S3 bucket service in AWS, replace the resource account ID and ARN with your account ID and S3 bucket ARN, respectively. Delete all code comments before you save your changes.

```

```

## Step 2: Set Data Expiration

After you store the CTR data in the S3 bucket, it’s a good idea to purge them periodically. To remove old data, specify the object expiration for the S3 bucket and define how long to wait before the files are deleted. See Amazon’s documentation: [Expiring Objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html) and [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html).

## Step 3: Save Contract Trace Records in S3

The [CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.") is configured to receive events from the Kinesis stream. These events are generated whenever a CTR is generated. Modify this Lambda function to read those events and write them to the S3 bucket as they’re generated. Update the handler.js file so that it contains a new function, writeCTRToS3, that writes data to the new bucket. Then, update the existing code to call this new function.

When modifying existing code, it's crucial to add code in the correct context. Inserting code snippets out of context or in the wrong order breaks the code.

In this example, the text in bold is where the new writeCTRToS3 function must be added to the handler.js file. Delete all code comments before you save your changes.

```

```

There’s one object in S3 for every CTR generated. The object is named with the ContactId of the CTR, so it’s easy to look up.

In the [CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.") associated with your contact center, create a new inline policy for the IAM role and delete any comments in the code before saving:

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_developer_guide)

#### Important

Creating a new inline policy for the IAM role is required for the [CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.") to run, but it is not the only required policy. The other required policies come incorporated out of the box, but it’s a good idea to confirm that they’re present. These policies are:

-   [AWSLambdaBasicExecutionRole](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AWSLambdaBasicExecutionRole.html)
-   [AWSLambdaKinesisExecutionRole](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AWSLambdaKinesisExecutionRole.html)
-   [InvokeSalesforceRestApiFunctionRolePolicy](https://help.salesforce.com/s/articleView?id=service.voice_amazon_reference_roles_policies.htm&language=en_US)

Depending on how your org is configured, out of the box policies can come with additional attributes.

## Step 4: Re-Sync Voice Calls That Aren’t Synced

Modify the [InvokeSalesforceRestApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm "This Lambda function calls the Salesforce REST API. You can place this Lambda function within a contact flow to create, update, or query Salesforce records.") Lambda to perform three key actions:

1.  Query for Voice Calls that aren’t synced. Query for all Voice Call records (over a given time period) that weren’t updated by the [CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream."). To identify Voice Calls that aren’t updated, you can filter by fields that are only updated during a CTR sync. In this example, we specify a condition based on CustomerHoldDuration.

    ```

    ```

2.  Fetch CTRs from S3. If there are results returned from the previous step, then read from the S3 bucket to fetch CTRs for the given Voice Call records. Look up this data with the VendorCallKey.
3.  Update Voice Call records in the org. Update Voice Call records based on the information returned from the previous step.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_developer_guide)

#### Important

This code calls the [InvokeTelephonyIntegrationApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm "The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.") Lambda function. You can call it in one of two ways:

-   Declare an environment variable for that Lambda and reference it from your code.
-   Hard-code the ARN of the [InvokeTelephonyIntegrationApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm "The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.") Lambda into your code.

This sample code assumes that there’s an environment variable named INVOKE\_TELEPHONY\_INTEGRATION\_API\_ARN (option a), but you can hard-code the ARN if you prefer.

This code updates to [InvokeSalesforceRestApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm "This Lambda function calls the Salesforce REST API. You can place this Lambda function within a contact flow to create, update, or query Salesforce records.") perform all these actions.

Updates to sfRestApi.js. In-context changes are in bold. Remove any comments in the code before saving.

```

```

Updates to QueryEngine.js. In-context changes are in bold. Remove any comments in the code before saving.

```

```

Updates to Handler.js. In-context changes are in bold:

```

```

Updates to utils.js. In-context changes are in bold. Remove any comments in the code before saving.

The transformCTR and getCallAttributes functions are copied over from the [CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.") utils.js file. (Alternatively, directly modify [CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.") to support taking a single CTR and updating the Voice Call record from there.) These functions must be inserted under the declaration of the getRealtimeAlertEventFieldValuesFromConnectLambdaParams function.

```

```

In [InvokeSalesforceRestApiFunction](# "Amazon Connect contact record (previously called contact trace record or CTR) data is stored automatically in Voice Call records through data synchronization. Sometimes this sync doesn’t occur, and it isn’t always possible to access contact record data in Amazon Connect after the call. Back up contact record data to a separate Amazon S3 bucket, then check for Voice Call records that don’t have contact record data, and then resync the contact record data to your org using the backup data."), add the AmazonS3FullAccess policy to the role:

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_developer_guide)

#### Important

Adding the AmazonS3FullAccess policy to the role is required for the [CTRDataSyncFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm "After the contact record (previously called contact trace record or CTR) is created in Amazon, this Lambda function automatically syncs contact record data to the VoiceCall object. It finalizes the values of multiple VoiceCall object fields. This function is available to Service Cloud Voice customers who are using an Amazon Connect instance and connecting to a Kinesis stream.") to run, but it’s not the only required policy. The other required policies come incorporated out of the box, but it’s a good idea to confirm that they’re present. These policies are:

-   [AWSLambdaBasicExecutionRole](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AWSLambdaBasicExecutionRole.html)
-   [InvokeSalesforceRestApiFunctionRolePolicy](https://help.salesforce.com/s/articleView?id=service.voice_amazon_reference_roles_policies.htm&language=en_US)

Depending on how your org is configured, out of the box policies can come with additional attributes.

Next, publish a new version of the Lambda functions. Make sure that you update this code in your Lambda functions to ensure compatibility after the contact center update.

## Step 6: Call the New Method on the InvokeSalesforceRestApiFunction Lambda

Call this new method in [InvokeSalesforceRestApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm "The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.") by specifying a methodName of retryCTRSync and a soql attribute of SELECT Id, VendorCallKey FROM VoiceCall WHERE CustomerHoldDuration = null. You can schedule this call to run periodically. See [Schedule AWS Lambda Functions Using CloudWatch Events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html) in the Amazon documentation.

## Test This Example

To test this example:

1.  Dial your phone number in order to create a Voice Call record. After the call is answered, hang up.
2.  In your org, find the newly created Voice Call record and remove some CTR fields, including CustomerHoldDuration.
3.  Call [InvokeSalesforceRestApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm "The invokeTelephonyIntegrationApi function contains actions which orchestrate voice call handling and routing. The function integrates telephony events with Salesforce, ensuring calls are properly processed and directed through the appropriate Omni-Channel logic.") with the information specified in the final step (step 6) of this example. However, instead of scheduling the function to run, you can programmatically call the Lambda from the console as shown in Amazon’s documentation ([Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html)). Use a payload similar to this:

    ```

    ```

4.  Check that the Voice Call record now has the CTR fields filled in.

## Code Examples

```
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "PutObjectAccess",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<your account id>:root"    // REPLACE THIS WITH YOUR ACCOUNT ID
            },
            "Action": "s3:*",
            "Resource": "<your S3 Bucket ARN>"    // REPLACE THIS WITH YOUR S3 BUCKET ARN
        },
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "transcribe.amazonaws.com"
            },
            "Action": "s3:*",
            "Resource": "<your S3 Bucket ARN>"     // REPLACE THIS WITH YOUR S3 BUCKET ARN
        }
    ]
}
```

```
const aws = require("aws-sdk");
const SCVLoggingUtil = require("./SCVLoggingUtil");
const s3 = new aws.S3();

const lambda = new aws.Lambda();
const utils = require("./utils");

function updateVoiceCallRecord(voiceCall) {
  SCVLoggingUtil.info({
    message: "CTR/updateVoiceCallRecord Request created",
    context: { contactId: voiceCall.contactId },
  });
  const payload = {
    Details: {
      Parameters: {
        methodName: "updateVoiceCall",
        fieldValues: voiceCall.fields,
        contactId: voiceCall.contactId,
      },
    },
  };

  const params = {
    FunctionName: process.env.INVOKE_TELEPHONY_INTEGRATION_API_ARN,
    Payload: JSON.stringify(payload),
  };

  return lambda.invoke(params).promise();
}

function shouldProcessCtr(ctrRecord) {
  return (
    ["INBOUND", "OUTBOUND", "TRANSFER", "CALLBACK", "API"].includes(
      ctrRecord.InitiationMethod
    ) &&
    ctrRecord.ContactId &&
    // if the call is a voicemail, no need to process it because the packager lambda updates the voicecall record
    !(
      ctrRecord.Attributes &&
      ctrRecord.Attributes.vm_flag &&
      ctrRecord.Recordings
    )
  );
}

exports.handler = async (event) => {
  const promises = [];
  SCVLoggingUtil.debug({
    message: "CTRDataSync event received",
    context: event,
  });
  event.Records.forEach((record) => {
    const ctr = utils.parseData(record.kinesis.data);
    if (shouldProcessCtr(ctr)) {
      const voiceCall = utils.transformCTR(ctr);
      SCVLoggingUtil.debug({
        category: "ctrDataSync.handler",
        message: "Transformed CTR to voice call",
        context: voiceCall,
      });
      const updatePromise = updateVoiceCallRecord(voiceCall);

      promises.push(updatePromise);

      updatePromise.then((response) => {
        SCVLoggingUtil.info({
          message: "updateVoiceCallRecord response",
          context: response,
        });
      });

      writeCTRToS3(ctr);

    } else {
      SCVLoggingUtil.error({
        message: "Encountered Non supported CTR Events: failing fast",
        context: {},
      });
    }
  });

  return Promise.all(promises);
};


function writeCTRToS3(ctr) {
    var params = {
        Bucket : "<your S3 bucket Name>",   // REPLACE THIS WITH YOUR S3 BUCKET NAME
        Key: ctr.ContactId,
        Body: Buffer.from(JSON.stringify(ctr)),
    }

    s3.putObject(params, function(err, data) {
        if (err) {
            console.log("Error uploading CTR to S3: " + JSON.stringify(err));
        } else {
            console.log("Successfully uploaded CTR to S3: " + JSON.stringify(data));
        }
    });
}


exports.shouldProcessCtr = shouldProcessCtr;
```

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:ListBucket",
                "s3:PutObjectAcl"
            ],
            "Resource": "<your S3 Bucket ARN>/*" // REPLACE THIS WITH YOUR S3 BUCKET ARN
        }
    ]
}
```

```
const utils = require("./utils");
const axiosWrapper = require("./axiosWrapper");
const SCVLoggingUtil = require("./SCVLoggingUtil");

const aws = require('aws-sdk');
const lambda = new aws.Lambda();
const s3 = new aws.S3();

….
async function searchRecord(sosl) {
  try {
    const response = await sendRequest(
      "get",
      `/search/?q=${encodeURIComponent(sosl)}`
    );
    SCVLoggingUtil.debug({
      category: "sfRestApi.searchRecord",
      message: "search Record response",
      context: response,
    });
    if (response.data.searchRecords.length === 0) {
      return {};
    }
    return response.data.searchRecords[0];
  } catch (e) {
    return buildError(e);
  }
}

// NEW function that performs CTR sync retry
async function retryCtrSync(soql) {
    // Query For VoiceCalls that are missing CTR Sync
    const response = await sendRequest(
      "get",
      `/query/?q=${encodeURIComponent(soql)}`
    );
    console.log("Querying for VoiceCalls that were not updated");
    
    if (response.data.errorType) {
        console.log("Error querying VoiceCalls: " + response.data.errorMessage);
    
        return {
            success: false,
            errorMessage: response.data.errorMessage
        };
    } else if (response.data.totalSize === 0) {
        console.log("No VoiceCalls were found that were missing CTR update");
        return {};
    } else {
        console.log("Successfully queried for VoiceCalls");
        const result = response.data.records;
        
        // Fetch CTRs from S3
        var ctrRecords = await getCtrsFromS3(result);
        
        // Update VoiceCalls with the CTRs fetched from S3
        var results = await updateVoiceCallRecords(ctrRecords);
        return results;
    }
} 


// NEW Function to fetch CTRs from S3
async function getCtrsFromS3(result) {
    var ctrData = [];
    for (var i=0; i<result.length; i++) {
        console.log("Vendor Call Key " + result[i].VendorCallKey);
        var getParams = {
            Bucket: '<your S3 bucket Name>',      // your bucket name,
            Key:  result[i].VendorCallKey // path to the object you're looking for
        }

        await s3.getObject(getParams, function(err, data1) {
            if (err) {
                console.log("ERROR in querying S3 " + err);
                return err;
            } else {
                var objectData = data1.Body.toString('utf-8'); // Use the encoding necessary
                var ctrObj = JSON.parse(objectData);
                console.log("CTR found for ContactId: " + ctrObj.ContactId);
                ctrData.push(ctrObj);
            }
        }).promise();
    }
    return ctrData;
}

// NEW function to update VoiceCall Records
async function updateVoiceCallRecords(ctrRecords) {
    let promises = [];
    ctrRecords.forEach((record) => {
        const ctr = record;
        
        if (ctr.ContactId) {
            const voiceCall = utils.transformCTR(ctr);
            promises.push(updateVoiceCallRecord(voiceCall));
        } else {
            console.log("No ContactId found in CTR");
        }
    });
    
    return await Promise.all(promises);
}

// UPDATED: Add environment variable
function updateVoiceCallRecord(voiceCall) {
    console.log("Updating VoiceCall");
    const payload = {
        Details: {
            Parameters: {
                methodName: 'updateVoiceCall',
                fieldValues: voiceCall.fields,
                contactId: voiceCall.contactId
            }
        }
    };
    
    const params = {
        // NEW: Create this as an environment variable 
        //      or hard-code the ARN of the Lambda
        FunctionName: process.env.INVOKE_TELEPHONY_INTEGRATION_API_ARN,
  
        Payload: JSON.stringify(payload)
    };
    return lambda.invoke(params).promise();
}


// UPDATED: Include the new function (retryCtrSync)
module.exports = {
    createRecord,
    updateRecord,
    queryRecord,
    searchRecord,
    sendRealtimeAlertEvent,
    retryCtrSync,
};
```

```
const api = require("./sfRestApi");
const SCVLoggingUtil = require("./SCVLoggingUtil");

function formatQuery(args, queryStr) {
  let query;
  Object.keys(args).forEach((key) => {
    const replacement = `{${key}}`;
    query = queryStr.replace(replacement, args[key]);
  });
  return query;
}

// invokes the query from sf rest api
// can take the query as a formatted string of sorts,
// replacing {key} with its value in the js object
async function invokeQuery(query, args) {
  const formattedQuery = formatQuery(args, query);
  SCVLoggingUtil.debug({
    message: "invoke query from SfRestApi",
    context: { payload: formattedQuery },
  });
  return api.queryRecord(formattedQuery);
}


// NEW function to that exposes the Retry CTR
async function retryCTRSync(query, args) {
    var formattedQuery = formatQuery(args, query);
    return await api.retryCtrSync(formattedQuery);
}


// UPDATED: Export the new function (retryCtrSync)
module.exports={
    invokeQuery,
    formatQuery,
    retryCTRSync
};
```

## Related Topics

- CTRDataSyncFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm)
- OAuth support for the
                        InvokeSalesforceRestApiFunction Lambda (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_auth.htm)
- InvokeSalesforceRestApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm)
- InvokeTelephonyIntegrationApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm)
- InvokeSalesforceRestApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm)
