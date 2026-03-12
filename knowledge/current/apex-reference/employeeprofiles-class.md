---
title: "EmployeeProfiles Class"
domain: apex-reference
topic: employeeprofiles-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.165Z
estimatedTokens: 3718
namespace: ConnectApi
keywords: [EmployeeProfiles, Get, set, crop, delete, employee, banner, photos, photos., deleteBannerPhoto, employeeId, API, Version, Requires, Chatter, deletePhoto, getBannerPhoto, getPhoto, Guest, Users]
---

# EmployeeProfiles Class

> Get, set and crop, and delete employee banner photos and photos.

**Namespace:** `ConnectApi`

# EmployeeProfiles Class

Get, set and crop, and delete employee banner photos and photos.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## EmployeeProfiles Methods

These methods are for EmployeeProfiles. All methods are static.

-   **[deleteBannerPhoto(employeeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_deleteBannerPhoto_1)**
    Delete an employee’s banner photo.
-   **[deletePhoto(employeeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_deletePhoto_1)**
    Delete an employee’s photo.
-   **[getBannerPhoto(employeeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_getBannerPhoto_2)**
    Get an employee’s banner photo.
-   **[getPhoto(employeeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_getPhoto_2)**
    Get an employee’s photo.
-   **[setBannerPhoto(employeeId, fileId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setBannerPhoto_3)**
    Set an uploaded file as an employee’s banner photo.
-   **[setBannerPhoto(employeeId, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setBannerPhoto_4)**
    Set a file that hasn’t been uploaded as an employee’s banner photo.
-   **[setBannerPhotoWithAttributes(employeeId, bannerPhoto)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setBannerPhotoWithAttributes_5)**
    Set and crop an uploaded file as an employee’s banner photo.
-   **[setBannerPhotoWithAttributes(employeeId, bannerPhoto, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setBannerPhotoWithAttributes_6)**
    Set and crop a file that hasn’t been uploaded as an employee’s banner photo.
-   **[setPhoto(employeeId, fileId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setPhoto_3)**
    Set an uploaded file as an employee’s photo.
-   **[setPhoto(employeeId, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setPhoto_4)**
    Set a file that hasn’t been uploaded as an employee’s photo.
-   **[setPhotoWithAttributes(employeeId, photo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setPhotoWithAttributes_5)**
    Set and crop an uploaded file as an employee’s photo.
-   **[setPhotoWithAttributes(employeeId, photo, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm#apex_ConnectAPI_EmployeeProfiles_setPhotoWithAttributes_6)**
    Set and crop a file that hasn’t been uploaded as an employee’s photo.

### deleteBannerPhoto(employeeId)

Delete an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static Void deleteBannerPhoto(String employeeId)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

#### Return Value

Type: Void

### deletePhoto(employeeId)

Delete an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static Void deletePhoto(String employeeId)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

#### Return Value

Type: Void

### getBannerPhoto(employeeId)

Get an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BannerPhoto getBannerPhoto(String employeeId)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")

### getPhoto(employeeId)

Get an employee’s photo.

#### API Version

51.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Photo getPhoto(String employeeId)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

### setBannerPhoto(employeeId, fileId, versionNumber)

Set an uploaded file as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BannerPhoto setBannerPhoto(String employeeId, String fileId, Integer versionNumber)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the uploaded file to use as the employee banner photo. The file must be an image and be smaller than 2 GB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the file. Specify an existing version number or, to get the latest version, specify null.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

### setBannerPhoto(employeeId, fileUpload)

Set a file that hasn’t been uploaded as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BannerPhoto setBannerPhoto(String employeeId, ConnectApi.BinaryInput fileUpload)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setBannerPhotoWithAttributes(employeeId, bannerPhoto)

Set and crop an uploaded file as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String employeeId, ConnectApi.BannerPhotoInput bannerPhoto)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

bannerPhoto

Type: [ConnectApi.BannerPhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_banner_photo.htm "A banner photo.")

A ConnectApi.BannerPhotoInput object that specifies the ID and version of the file, and how to crop the file.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setBannerPhotoWithAttributes(employeeId, bannerPhoto, fileUpload)

Set and crop a file that hasn’t been uploaded as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String employeeId, ConnectApi.BannerPhotoInput bannerPhoto, ConnectApi.BinaryInput fileUpload)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

bannerPhoto

Type: [ConnectApi.BannerPhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_banner_photo.htm "A banner photo.")

A ConnectApi.BannerPhotoInput object specifying the cropping parameters.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhoto(employeeId, fileId, versionNumber)

Set an uploaded file as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Photo setPhoto(String employeeId, String fileId, Integer versionNumber)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the uploaded file to use as the employee photo. The file must be an image and be smaller than 2 GB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the file. Specify an existing version number or, to get the latest version, specify null.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhoto(employeeId, fileUpload)

Set a file that hasn’t been uploaded as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Photo setPhoto(String employeeId, ConnectApi.BinaryInput fileUpload)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhotoWithAttributes(employeeId, photo)

Set and crop an uploaded file as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Photo setPhotoWithAttributes(String employeeId, ConnectApi.PhotoInput photo)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

photo

Type: [ConnectApi.PhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm "Specify how to crop a photo that has already been uploaded.")

A ConnectApi.PhotoInput object specifying the file ID, version number, and cropping parameters.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

### setPhotoWithAttributes(employeeId, photo, fileUpload)

Set and crop a file that hasn’t been uploaded as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Photo setPhotoWithAttributes(String employeeId, ConnectApi.PhotoInput photo, ConnectApi.BinaryInput fileUpload)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

photo

Type: [ConnectApi.PhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm "Specify how to crop a photo that has already been uploaded.")

A ConnectApi.PhotoInput object specifying the cropping parameters.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- deleteBannerPhoto(employeeId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm)
- deletePhoto(employeeId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm)
- getBannerPhoto(employeeId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm)
- getPhoto(employeeId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm)
- setBannerPhoto(employeeId, fileId, versionNumber) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm)
- setBannerPhoto(employeeId, fileUpload) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm)
- setBannerPhotoWithAttributes(employeeId, bannerPhoto) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm)
- setBannerPhotoWithAttributes(employeeId, bannerPhoto, fileUpload) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm)
- setPhoto(employeeId, fileId, versionNumber) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmployeeProfiles_static_methods.htm)
