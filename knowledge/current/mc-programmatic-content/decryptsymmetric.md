---
title: "DecryptSymmetric"
domain: mc-programmatic-content
topic: decryptsymmetric
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.316Z
estimatedTokens: 784
keywords: [DecryptSymmetric, Function, Ordinal, Encrypted, data, passed, Algorithm, encrypt, **Overview**, **Syntax**, Usage, Mode, Padding]
---

# DecryptSymmetric

> DecryptSymmetric(1, 2, 3, 4, 5, 6, 7, 8)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Encrypted data passed to function



    2
    string
    Required
    Algorithm used to encrypt the data. Valid values 

# DecryptSymmetric

## **Overview**

This function decrypts encrypted data using the supplied algorithm and encryption values. Supply either a value or a valid external key for the password, initialization vector (IV), and salt. You can also use the external keys if you previously created keys in the Key Management section of the Marketing Cloud app. Otherwise, the function generates a password using the password parameter or stored value, the salt parameter or stored value, and the IV parameter or stored value. If you don't pass or reference an initialization vector, the function uses the password parameter or stored value as the initialization vector. This function treats Salt and IV values either directly provided or looked up by key as hex strings, with each pair of characters representing a single byte in the larger strings. Don't attempt to use these values as a cipher string, as you cannot successfully decrypt those strings using this function. You can wrap the EncryptSymmetric() and DecryptSymmetric() functions in Base64Encode() and Base64Decode() functions to view the final string in plain text. You can only use the EncryptSymmetric() and DecryptSymmetric() AMPscript function on data contained within Marketing Cloud. Marketing Cloud does not support the use of these functions in conjunction with outside or third-party encryption and decryption functionality.

### **Syntax**

DecryptSymmetric(1, 2, 3, 4, 5, 6, 7, 8)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Encrypted data passed to function |
| 2 | string | Required | Algorithm used to encrypt the data. Valid values include aes, des, and tripledes. |
| 3 | string | Required | Password external key |
| 4 | string | Required | Password |
| 5 | string | Required | Salt external key |
| 6 | string | Required | Salt value |
| 7 | string | Required | Initialization vector external key |
| 8 | string | Required | Initialization vector value |

### Usage

You can set optional mode or padding values for DES or TripleDES algorithms:

#### Mode

-   cbc - default
-   ecb
-   ofb
-   cfb
-   cts

#### Padding

-   none
-   pkcs7 - default
-   zeros
-   ansix923
-   iso10126

The example below sets the @clearData variable to the value of the @endData once the function decrypts that data. This example uses provided values for the password, salt, and IV, and it sets any external key values to the undeclared variable @null. Note that the Salt and IV values provided in the example below represent hex string values - the Salt value includes 8 bytes of information, and the IV value provides 16 bytes.

```
SET @clearData=DecryptSymmetric(@encData, 'AES', @null, 'aardvark', @null, '0000000000000000', @null, '00000000000000000000000000000000')
```

The example below uses external keys instead of provided values:

```
SET @clearData=DecryptSymmetric(@encData, 'AES', @passwordExternalKey, @null, @saltExternalKey, @null, @IVExternalKey, @null)
SET @clearData=DecryptSymmetric(@encData, 'AES', 'passwordExternalKey', @null, 'saltExternalKey', @null, 'IVExternalKey', @null)
```

Last Updated: Jun 8, 2021
