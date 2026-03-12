---
title: "Telephony Integration REST API Sample Code"
domain: voice-developer-guide
topic: telephony-integration-rest-api-sample-code
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.809Z
estimatedTokens: 103
keywords: [Telephony, Integration, REST, API, Sample, Code, JavaScript, performs, authorization, process, invokes, Voice]
---

# Telephony Integration REST API Sample Code

> The following JavaScript code sample performs the authorization process and then invokes
        the Voice API.

# Telephony Integration REST API Sample Code

The following JavaScript code sample performs the authorization process and then invokes the Voice API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

If enhanced domains aren’t enabled in your org, your URL format is different. For details, see My Domain URL Formats in Salesforce Help.

```

```

## Code Examples

```apex
const jwt = require('jsonwebtoken');
const SSM = require('aws-sdk/clients/ssm');
const uuid = require('uuid/v1');

// SCRT EndPoint Base example: https://MyDomainName.my.salesforce-scrt.com/telephony/v1 
// Contact your admin to get the exact URL. This should have been configured as part 
// of the Service Cloud Voice Setup.

const axios = require('axios').create({
    baseURL: "ScrtEndpointBase"
});

// Example function to retrieve privateKey parameter using Amazon Systems Manager 
async function getSSMParameterValue(paramName, withDecryption) {
    return await new Promise(resolve => {
        const ssm = new SSM();
        const query = {
            Names:  [paramName],
            WithDecryption: withDecryption
        };
        
        ssm.getParameters(query, (err, data) => {
            let paramValue = null;
            
            if (!err && data && data.Parameters && data.Parameters.length) {
                paramValue = data.Parameters[0].Value;
            }
            
            resolve(paramValue);
        });
    });
}

// Generate a JWT based on the specified parameters.
async function generateJWT(params) {
    const { privateKeyParamName, orgId, callCenterApiName, expiresIn } = params;
    // Retrieve privateKey from the param store
    const privateKey = await getSSMParameterValue(privateKeyParamName, true);
    const signOptions = {
        issuer: orgId,
        subject:  callCenterApiName,
        expiresIn:  expiresIn,
        algorithm:  'RS256',
        jwtid: uuid()
    };

    return jwt.sign({}, privateKey, signOptions);
}

// Function to Create VoiceCall 
async function createVoiceCall(fieldValues) {
    const generateJWTParams = {
        privateKeyParamName   : "YourPrivateKeyParamName",
        orgId                 : "YourSalesforceOrganizationId",
        callCenterApiName     : "YourSalesforceCallCenterAPIName",
        expiresIn             : "TokenExpiryTime"
    };
    
    const jwt = await generateJWT(generateJWTParams);
    
    var fieldValues = {
        "vendorCallKey":"5324881f-1e84-4367-8930-f69a74b30ca6",
        "callCenterApiName":"HVCC",
        "to":"8002345678",
        "from":"4081456688",
        "initiationMethod":"Inbound",
        "startTime":"2020-07-13T11:43:01Z",
        "participants":
            [{"participantKey":"+18033568299",
            "type": "END_USER"
            }]
    };
    
    const response = await axios.post('/voiceCalls', fieldValues, {
        headers: {
            'Authorization': 'Bearer ${jwt}',
            'Content-Type': 'application/json',
            'Telephony-Provider-Name': 'Amazon Connect'
        }
    })
    .then(response => { 
        return response;
    })
    .catch(error => {
        let context = {};
        if (error.response) {
            // The request was made and the server responded with 
            // a status code that falls out of the range of 2xx
            context = error.response.data;
        } else if (error.request) {
            // The request was made but no response was received
            context = error.request;
        } else {
            // Something happened in setting up the request that triggered an error
            context = error.message;
        }
         throw new Error('Error creating VoiceCall record');
    });

    return response.data;
}
```
