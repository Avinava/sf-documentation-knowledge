---
title: "Validating the Signature"
domain: data-cloud
topic: validating-the-signature
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.538Z
estimatedTokens: 67
keywords: [Validating, validate, sample, Java, code, something, similar, includes, payload, received, secret, key]
---

# Validating the Signature

> To validate the signature, you can use this sample Java code or something similar. This
                code includes the payload, signature received, and secret key.

# Validating the Signature

To validate the signature, you can use this sample Java code or something similar. This code includes the payload, signature received, and secret key.

You can have analogous code in your respective programming language.

```

```

```

```

## Code Examples

```apex
public static final String SIGNING_KEY_ALGO = "HMACSHA256";
public static boolean isSignatureValid(String payload, String receivedSignature, String signingKey) throws NoSuchAlgorithmException, InvalidKeyException, UnsupportedEncodingException {
     Mac mac = Mac.getInstance(SIGNING_KEY_ALGO);
     SecretKeySpec secretKeySpec =
             new SecretKeySpec(
                     signingKey.getBytes(StandardCharsets.UTF_8), SIGNING_KEY_ALGO);
     mac.init(secretKeySpec);

     String signature =
             org.apache.commons.codec.binary.Base64.encodeBase64String(mac.doFinal(payload.getBytes(StandardCharsets.UTF_8)));
     if(signature.equals(receivedSignature))
     {
         return true;
     }
     return false;
}
```

```
import hmac
import hashlib
import base64

def is_signature_valid(payload, received_signature, signing_key):
    mac = hmac.new(signing_key.encode('latin-1'), digestmod=hashlib.sha256)
    mac.update(payload.encode('latin-1'))
    signature = base64.b64encode(mac.digest()).decode('utf-8')

    return signature == received_signature
```
