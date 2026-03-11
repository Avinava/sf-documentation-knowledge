---
title: "JWT Methods"
domain: apex-reference
topic: jwt-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.302Z
keywords: [JWT, Methods, Makes, duplicate, copy, object., clone, Signature, Return, Value, getAdditionalClaims, getAud, getIss, getNbfClockSkew, getSub, getValidityLength, setAdditionalClaims, additionalClaims, Parameters, Usage]
---

# JWT Methods

> Makes a duplicate copy of the JWT object.

## JWT Methods

The following are methods for JWT. All are instance methods.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_clone)**  
    Makes a duplicate copy of the JWT object.
-   **[getAdditionalClaims()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_getAdditionalClaims)**  
    Returns a map of additional claims in the JWT, where the key string contains the name of the claim, and the value contains the value of the claim.
-   **[getAud()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_getAud)**  
    Returns the audience (aud) claim that identifies the intended recipients of the JWT.
-   **[getIss()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_getIss)**  
    Returns the issuer (iss) claim that identifies the issuer of the JWT.
-   **[getNbfClockSkew()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_getNbfClockSkew)**  
    Returns the not before (nbf) claim that identifies the time before which the JWT must not be accepted for processing, while allowing some leeway for clock skew. This method returns a NoAccess exception for JWTs generated using methods in the Auth.JWTUtil class. To return the nbf claim for these JWTs, use the getAdditionalClaims method instead.
-   **[getSub()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_getSub)**  
    Returns the subject (sub) claim that identifies the current user of the JWT.
-   **[getValidityLength()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_getValidityLength)**  
    Returns the length of time (in seconds) that the JWT is valid, which affects the expiration (exp) claim. This method returns a NoAccess exception for JWTs generated using methods in the Auth.JWTUtil class. To return the validity length for these JWTs, use the getAdditionalClaims method instead.
-   **[setAdditionalClaims(additionalClaims)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_setAdditionalClaims)**  
    Sets the additional claims in the JWT. Returned by the getAdditionalClaims method.
-   **[setAud(aud)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_setAud)**  
    Sets the audience (aud) claim in the JWT. Returned by the getAud method.
-   **[setIss(iss)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_setIss)**  
    Sets the issuer (iss) claim in the JWT. Returned by the getIss method.
-   **[setNbfClockSkew(nbfClockSkew)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_setNbfClockSkew)**  
    Sets the not before (nbf) claim in the JWT. Returned by the getNbfClockSkew method. This method returns a NoAccess exception for JWTs generated using methods in the Auth.JWTUtil class. For these JWTs, the incoming JWT determines the nbf claim.
-   **[setSub(sub)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_setSub)**  
    Sets the subject (sub) claim in the JWT. Returned by the getSub method.
-   **[setValidityLength(validityLength)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_setValidityLength)**  
    Sets the length of time (in seconds) that the JWT is valid, which affects the expiration (exp) claim. Returned by the getValidityLength method. This method returns a NoAccess exception for JWTs generated using methods in the Auth.JWTUtil class. For these JWTs, the incoming JWT determines the validity length.
-   **[toJSONString()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWT.htm#apex_Auth_JWT_toJSONString)**  
    Generates the JSON object representation of the Claims Set as an encoded JWT payload.

### clone()

Makes a duplicate copy of the JWT object.

#### Signature

public Object clone()

#### Return Value

Type: [JWT](#apex_class_Auth_JWT "Generates the JSON Claims Set in a JSON Web Token (JWT). The resulting Base64-encoded payload can be passed as an argument to create an instance of the Auth.JWS class.")

### getAdditionalClaims()

Returns a map of additional claims in the JWT, where the key string contains the name of the claim, and the value contains the value of the claim.

#### Signature

public Map<String,Object\> getAdditionalClaims()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

The claims returned depend on how the JWT was generated.

If the JWT was generated using other methods in the Auth.JWT class, this method returns the claims that were set using the setAdditionalClaims method.

For JWTs generated using methods in the [Auth.JWTUtil](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWTUtil.htm) class, the getAdditionalClaims method returns all claims except for these three.

-   aud (audience)—Use the getAud method instead.
-   iss (issuer)—Use the getIss method instead.
-   sub (subject)—Use the getSub method instead.

For these JWTs, when the incoming JWT has a claim that stores an inner JSON list, the claim value is returned as a string.

### getAud()

Returns the audience (aud) claim that identifies the intended recipients of the JWT.

#### Signature

public String getAud()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getIss()

Returns the issuer (iss) claim that identifies the issuer of the JWT.

#### Signature

public String getIss()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNbfClockSkew()

Returns the not before (nbf) claim that identifies the time before which the JWT must not be accepted for processing, while allowing some leeway for clock skew. This method returns a NoAccess exception for JWTs generated using methods in the Auth.JWTUtil class. To return the nbf claim for these JWTs, use the getAdditionalClaims method instead.

#### Signature

public Integer getNbfClockSkew()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getSub()

Returns the subject (sub) claim that identifies the current user of the JWT.

#### Signature

public String getSub()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValidityLength()

Returns the length of time (in seconds) that the JWT is valid, which affects the expiration (exp) claim. This method returns a NoAccess exception for JWTs generated using methods in the Auth.JWTUtil class. To return the validity length for these JWTs, use the getAdditionalClaims method instead.

#### Signature

public Integer getValidityLength()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### setAdditionalClaims(additionalClaims)

Sets the additional claims in the JWT. Returned by the getAdditionalClaims method.

#### Signature

public void setAdditionalClaims(Map<String,Object\> additionalClaims)

#### Parameters

additionalClaims

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

#### Return Value

Type: void

#### Usage

Additional claims must not include any standard claims.

### setAud(aud)

Sets the audience (aud) claim in the JWT. Returned by the getAud method.

#### Signature

public void setAud(String aud)

#### Parameters

aud

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setIss(iss)

Sets the issuer (iss) claim in the JWT. Returned by the getIss method.

#### Signature

public void setIss(String iss)

#### Parameters

iss

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setNbfClockSkew(nbfClockSkew)

Sets the not before (nbf) claim in the JWT. Returned by the getNbfClockSkew method. This method returns a NoAccess exception for JWTs generated using methods in the Auth.JWTUtil class. For these JWTs, the incoming JWT determines the nbf claim.

#### Signature

public void setNbfClockSkew(Integer nbfClockSkew)

#### Parameters

nbfClockSkew

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: void

### setSub(sub)

Sets the subject (sub) claim in the JWT. Returned by the getSub method.

#### Signature

public void setSub(String sub)

#### Parameters

sub

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setValidityLength(validityLength)

Sets the length of time (in seconds) that the JWT is valid, which affects the expiration (exp) claim. Returned by the getValidityLength method. This method returns a NoAccess exception for JWTs generated using methods in the Auth.JWTUtil class. For these JWTs, the incoming JWT determines the validity length.

#### Signature

public void setValidityLength(Integer validityLength)

#### Parameters

validityLength

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: void

### toJSONString()

Generates the JSON object representation of the Claims Set as an encoded JWT payload.

#### Signature

public String toJSONString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")