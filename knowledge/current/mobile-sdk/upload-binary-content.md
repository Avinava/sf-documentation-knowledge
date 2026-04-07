---
title: "Upload Binary Content"
domain: mobile-sdk
topic: upload-binary-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.945Z
estimatedTokens: 171
keywords: [Upload, Binary, Content, any, force.com, endpoint, supports, feature]
---

# Upload Binary Content

> You can upload binary content to any force.com endpoint that
        supports the binary upload feature.

# Upload Binary Content

You can upload binary content to any force.com endpoint that supports the binary upload feature.

The sendRequest() method in react.force.net.js has a new optional parameter named fileParams.

```

```

This parameter expects the following form:

```

```

For example:

```

```

## Example

The [github.com/wmathurin/MyUserPicReactNative](https://github.com/wmathurin/MyUserPicReactNative) sample app demonstrates binary upload. This sample allows you to change your profile picture. Binary upload of the new pic happens in the uploadPhoto() function of the UserPic.js file.

Here’s the sample’s sendRequest() call in the getUserInfo() function:

```

```

## Code Examples

```
function sendRequest(endPoint, path, successCB, errorCB, method, payload, headerParams, fileParams)
```

```
{
    <fileParamNameInPost>: // value depends on the endpoint 
    {
        fileMimeType:<someMimeType>,  
        fileUrl:<fileUrl>, // url to file to upload
        fileName:<fileNameForPost>
    }
}
```

```
{
    fileUpload: 
    {
        fileMimeType:'image/jpeg', 
        fileUrl:localPhotoUrl, 
        fileName:'pic.jpg'
    }
}
```

```
getUserInfo(callback) {
    forceClient.sendRequest('/services/data', 
        '/v36.0/connect/user-profiles/' + this.state.userId + '/photo',            
        (response) => {                
            callback(response);            
        },            
        (error) => {                
            console.log('Failed to upload user photo:' + error);            
        },            
        'POST',            
        {},            
        {'X-Connect-Bearer-Urls': 'true'},            
        {fileUpload: 
            {
                fileUrl:localPhotoUrl, 
                fileMimeType:'image/jpeg', 
                fileName:'pic.jpg'
            }
        }       
    );
},
```
