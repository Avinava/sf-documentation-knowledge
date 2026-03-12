---
title: "Verifying and Decoding a Signed Request"
domain: platform-connect
topic: verifying-and-decoding-a-signed-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.314Z
estimatedTokens: 920
keywords: [Verifying, Decoding, Signed, two, know, consumer, secret, trusted, there, Base64, decode, encoded, context, parse, any]
---

# Verifying and Decoding a Signed Request

> If the two values are the same, then you know that the signed request was signed
                using your consumer secret and can be trusted. From there, you can Base64 decode the
                encoded context and parse out any values you need. For more information on those
                value

# Verifying and Decoding a Signed Request

When using a signed request, Salesforce delivers the user context and authentication information to your canvas app URL. To ensure that the signed request is valid, you must verify that the signed request was signed using your specific canvas app consumer secret. If the correct consumer secret was used, then you can trust the context; otherwise, you can assume that the request was not initiated by Salesforce. To verify and decode the signed request, your application should:

1.  Receive the POST message that contains the initial signed request from Salesforce.
2.  Split the signed request on the first period. The result is two strings: the hashed Based64 context signed with the consumer secret and the Base64 encoded context itself.
3.  Use the HMAC SHA-256 algorithm to hash the Base64 encoded context and sign it using your consumer secret.
4.  Base64 encode the string created in the previous step.
5.  Compare the Base64 encoded string with the hashed Base64 context signed with the consumer secret you received in step 2.

If the two values are the same, then you know that the signed request was signed using your consumer secret and can be trusted. From there, you can Base64 decode the encoded context and parse out any values you need. For more information on those values, see [CanvasRequest](atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm). If the two strings are different, then the request was not hashed and signed using your consumer secret, and you should return the appropriate message to the user.

## Functions for Verifying and Decoding

To verify the signed request, you can call the one the following functions found in the Canvas SDK (in SalesforceCanvasFrameworkSDK\\src\\main\\java\\canvas\\SignedRequest.java):

-   verifyAndDecode—Returns a verified and decoded version of the signed request as a Java object.
-   verifyAndDecodeAsJson—Returns a verified and decoded version of the signed request as a JSON-formatted string.

The following code example shows you how to verify and decode a signed request using the functions in the SDK. This code splits the signed request string at the period to parse out the signed secret and the Base64 JSON string. It then encrypts the canvas app consumer secret signed with the HMAC SHA-256 algorithm and compares the encrypted value with the encrypted value sent to you by Salesforce.

If the two values are the same, you know that the context is valid and came from Salesforce. If the two values are different, then the request didn’t come from Salesforce.

```

```

## Calling the verifyAndDecode Function

The following code shows an example of getting the signed request, and then verifying and decoding the request by using the verifyAndDecode function.

```

```

## Calling the verifyAndDecodeAsJson Function

The following code shows an example of getting the signed request, verifying and decoding the request by using the verifyAndDecodeAsJson function, and parsing the returned JSON result.

```

```

#### See Also

-   [Signed Request Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm "Signed request is the default authorization method for Canvas apps. The signed request authorization flow varies depending on whether the administrator gives users access to the Canvas app or if users can self-authorize. You can verify signed request information with a client secret, then use signed requests to customize the app and make subsequent calls to Salesforce.")

-   [SignedRequest](atlas.en-us.platform_connect.meta/platform_connect/signed_request_object.htm)

## Code Examples

```apex
/**
*
* The utility method can be used to validate/verify the signed request. 
* In this case, the signed request is verified that it's from Salesforce and that 
* it has not been tampered with.
* 
* This utility class has two methods. One verifies and decodes the request
* as a Java object, the other as a JSON String.
*
*/
public class SignedRequest {
    public static CanvasRequest verifyAndDecode(String input, String secret) 
        throws SecurityException {
        String[] split = getParts(input);
        String encodedSig = split[0];
        String encodedEnvelope = split[1];

        // Deserialize the JSON body.
        String json_envelope = new String(new Base64(true).decode(encodedEnvelope));
        ObjectMapper mapper = new ObjectMapper();
        ObjectReader reader = mapper.reader(CanvasRequest.class);
        CanvasRequest canvasRequest;
        String algorithm;
        try {
            canvasRequest = reader.readValue(json_envelope);
            algorithm = canvasRequest.getAlgorithm() == null ? 
                "HMACSHA256" : canvasRequest.getAlgorithm();
        } catch (IOException e) {
            throw new SecurityException(String.format("Error [%s] deserializing JSON to 
                Object [%s]", e.getMessage(), CanvasRequest.class.getName()), e);
        }
        verify(secret, algorithm, encodedEnvelope, encodedSig);
        // If we got this far, then the request was not tampered with.
        // Return the request as a Java object.
        return canvasRequest;
    }
    public static String verifyAndDecodeAsJson(String input, String secret) 
        throws SecurityException {
        String[] split = getParts(input);
        String encodedSig = split[0];
        String encodedEnvelope = split[1];
        String json_envelope = new String(new Base64(true).decode(encodedEnvelope));
        ObjectMapper mapper = new ObjectMapper();
        String algorithm;
        StringWriter writer;
        TypeReference<HashMap<String,Object>> typeRef
                = new TypeReference<HashMap<String, Object>>() { };
        try {
            HashMap<String,Object> o = mapper.readValue(json_envelope, typeRef);
            writer = new StringWriter();
            mapper.writeValue(writer, o);
            algorithm = (String)o.get("algorithm");
        } catch (IOException e) {
            throw new SecurityException(String.format("Error [%s] deserializing 
                JSON to Object [%s]", e.getMessage(),
                    typeRef.getClass().getName()), e);
        }
        verify(secret, algorithm, encodedEnvelope, encodedSig);
        // If we got this far, then the request was not tampered with.
        // Return the request as a JSON string.
        return writer.toString();
    }

    private static String[] getParts(String input) {
        if (input == null || input.indexOf(".") <= 0) {
            throw new SecurityException(String.format("Input [%s] doesn't 
                look like a signed request", input));
        }
        String[] split = input.split("[.]", 2);
        return split;
    }

    private static void verify(String secret, String algorithm, 
        String encodedEnvelope, String encodedSig ) 
        throws SecurityException
    {
    if (secret == null || secret.trim().length() == 0) {
            throw new IllegalArgumentException("secret is null, did you 
                set your environment variable CANVAS_CONSUMER_SECRET?");
        }
        SecretKey hmacKey = null;
        try {
            byte[] key = secret.getBytes();
            hmacKey = new SecretKeySpec(key, algorithm);
            Mac mac = Mac.getInstance(algorithm);
            mac.init(hmacKey);
            // Check to see if the body was tampered with.
            byte[] digest = mac.doFinal(encodedEnvelope.getBytes());
            byte[] decode_sig = new Base64(true).decode(encodedSig);
            if (! Arrays.equals(digest, decode_sig)) {
                String label = "Warning: Request was tampered with";
                throw new SecurityException(label);
            }
        } catch (NoSuchAlgorithmException e) {
            throw new SecurityException(String.format("Problem with algorithm [%s] 
                Error [%s]", algorithm, e.getMessage()), e);
        } catch (InvalidKeyException e) {
            throw new SecurityException(String.format("Problem with key [%s] 
            Error [%s]", hmacKey, e.getMessage()), e);
        }
        // If we got here and didn't throw a SecurityException then all is good.
    }
}
```

```apex
// From a JSP or servlet.
<%@ page import="canvas.SignedRequest" %>
<%@ page import="java.util.Map" %>
<%
    // Pull the signed request out of the request body and verify/decode it.
    Map<String, String[]> parameters = request.getParameterMap();
    String[] signedRequest = parameters.get("signed_request");
    if (signedRequest == null) {%>
        This app must be invoked via a signed request!<%
        return;
    }
    String yourConsumerSecret=System.getenv("CANVAS_CONSUMER_SECRET");
    String signedRequest = SignedRequest.verifyAndDecode(signedRequest[0], yourConsumerSecret);
%>
...
// From JavaScript, you can handle the signed request as needed.
var signedRequest = '<%=signedRequestJson%>';
```

```apex
// From a JSP or servlet.
<%@ page import="canvas.SignedRequest" %>
<%@ page import="java.util.Map" %>
<%
    // Pull the signed request out of the request body and verify/decode it.
    Map<String, String[]> parameters = request.getParameterMap();
    String[] signedRequest = parameters.get("signed_request");
    if (signedRequest == null) {%>
        This App must be invoked via a signed request!<%
        return;
    }
    String yourConsumerSecret=System.getenv("CANVAS_CONSUMER_SECRET");
    String signedRequestJson = SignedRequest.verifyAndDecodeAsJson(signedRequest[0], yourConsumerSecret);
%>
...
// From JavaScript, you can parse with your favorite JSON library.
var signedRequest = JSON.parse('<%=signedRequestJson%>');
```

## Related Topics

- CanvasRequest (atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm)
- Signed Request Authentication (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm)
- SignedRequest (atlas.en-us.platform_connect.meta/platform_connect/signed_request_object.htm)
