---
title: "LoyaltyAPIInterface"
domain: loyalty
topic: loyaltyapiinterface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.542Z
estimatedTokens: 1070
keywords: [LoyaltyAPIInterface, creating, formatting, sending, REST, requests, Salesforce, service, stores, API, call, definitions, Loyalty, Summary]
---

# LoyaltyAPIInterface

> The LoyaltyApiInterface class defines
    the interface for creating, formatting, and sending REST requests to the Salesforce service.
    This class stores REST API call definitions for all Loyalty API.

# LoyaltyAPIInterface

The LoyaltyApiInterface class defines the interface for creating, formatting, and sending REST requests to the Salesforce service. This class stores REST API call definitions for all Loyalty API.

Use this signature to define the LoyaltyAPIInterface class.

public interface LoyaltyApiInterface

## Method Summary

| Modifier and Type | Method | Method Detail | Description |
| --- | --- | --- | --- |
| abstract Result<EnrollmentResponse> | postEnrollment(@Url() String url, @Body() EnrollmentRequest json) | postEnrollment@POST() abstract Result<EnrollmentResponse> postEnrollment(@Url() String url, @Body() EnrollmentRequest json) | Creates a POST request for an individual enrollment for the loyalty program. |
| abstract Result<MemberProfileResponse> | getMemberProfile(@Url() String url, @Query(value = "memberId") String memberId, @Query(value = "membershipNumber") String membershipNumber, @Query(value = "programCurrencyName") String programCurrencyName) | getMemberProfile@GET() abstract Result<MemberProfileResponse> getMemberProfile(@Url() String url, @Query(value = "memberId") String memberId, @Query(value = "membershipNumber") String membershipNumber, @Query(value = "programCurrencyName") String programCurrencyName) | Retrieves profile details related to the member ID. |
| abstract Result<MemberBenefitsResponse> | getMemberBenefits(@Url() String url, @Query(value = "membershipNumber") String membershipNumber) | getMemberBenefits@GET() abstract Result<MemberBenefitsResponse> getMemberBenefits(@Url() String url, @Query(value = "membershipNumber") String membershipNumber) | Retrieves benefits related to the member ID. |
| abstract Result<TransactionsResponse> | getTransactions(@Url() String url, @Query(value = "pageNumber") Integer pageNumber, @Query(value = "journalTypeName") String journalTypeName, @Query(value = "journalSubTypeName") String journalSubTypeName, @Query(value = "periodStartDate") String periodStartDate, @Query(value = "periodEndDate") String periodEndDate) | getTransactions@GET() abstract Result<TransactionsResponse> getTransactions(@Url() String url, @Query(value = "pageNumber") Integer pageNumber, @Query(value = "journalTypeName") String journalTypeName, @Query(value = "journalSubTypeName") String journalSubTypeName, @Query(value = "periodStartDate") String periodStartDate, @Query(value = "periodEndDate") String periodEndDate) | Retrieves transactions related to the member. |
| abstract Result<PromotionsResponse> | getEligiblePromotions(@Url() String url, @Body() PromotionsRequest requestBody) | getEligiblePromotions@POST() abstract Result<PromotionsResponse> getEligiblePromotions(@Url() String url, @Body() PromotionsRequest requestBody) | Retrieves promotions that a promotion is eligible to enroll for. |
| abstract Result<EnrollPromotionsResponse> | enrollInPromotion(@Url() String url, @Body() PromotionsRequest requestBody) | enrollInPromotion@POST() abstract Result<EnrollPromotionsResponse> enrollInPromotion(@Url() String url, @Body() PromotionsRequest requestBody) | Enrolls member in a promotion. |
| abstract Result<UnenrollPromotionResponse> | unenrollPromotion(@Url() String url, @Body() PromotionsRequest requestBody) | unenrollPromotion@POST() abstract Result<UnenrollPromotionResponse> unenrollPromotion(@Url() String url, @Body() PromotionsRequest requestBody) | Opts out a member from an available promotion. |
| abstract Result<VoucherResult> | getVouchers(@Url() String url, @Query(value = "voucherStatus") String voucherStatus, @Query(value = "pageNumber") Integer pageNumber, @Query(value = "productId") String productId, @Query(value = "productCategoryId") String productCategoryId, @Query(value = "productName") String productName, @Query(value = "productCategoryName") String productCategoryName) | getVouchers@GET() abstract Result<VoucherResult> getVouchers(@Url() String url, @Query(value = "voucherStatus") String voucherStatus, @Query(value = "pageNumber") Integer pageNumber, @Query(value = "productId") String productId, @Query(value = "productCategoryId") String productCategoryId, @Query(value = "productName") String productName, @Query(value = "productCategoryName") String productCategoryName) | Retrieves vouchers that are available to the program member. |
