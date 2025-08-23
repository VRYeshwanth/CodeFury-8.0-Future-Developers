const prompts = [
    {
        text: "URGENT: Your KYC expires today. Verify immediately at bit.ly/kyc-update-bank",
        answer: "scam",
        explanation: "Red flags: Creates false urgency, uses shortlink, KYC verification bait",
        simple: "Banks never ask for KYC via links - this is a scam"
    },
    {
        text: "UPI Collect request from 'BANK REFUND' for ₹2,500. Note: Verification fee",
        answer: "scam",
        explanation: "Red flags: Refunds don't use collect requests, never pay for refunds",
        simple: "Real refunds come to you, never ask you to pay"
    },
    {
        text: "Your Amazon package #AMZ9845 is out for delivery. Track in your orders.",
        answer: "safe",
        explanation: "Safe: Specific order reference, no external links, instructs to use official app",
        simple: "This looks like a normal delivery update"
    },
    {
        text: "Scan this QR code to receive your income tax refund instantly",
        answer: "scam",
        explanation: "Red flags: Refunds are processed automatically, never require QR scanning",
        simple: "Government refunds don't need QR codes - scam"
    },
    {
        text: "Bank Alert: We will NEVER call to ask for OTP or PIN. Stay safe!",
        answer: "safe",
        explanation: "Safe: Educational message, no action required, raises awareness",
        simple: "This is a safety reminder from your bank"
    },
    {
        text: "TCS Recruitment: Pay ₹499 registration fee to confirm interview slot",
        answer: "scam",
        explanation: "Red flags: Reputed companies never charge for interviews, payment demand",
        simple: "Real companies don't charge for job interviews"
    },
    {
        text: "Income Tax Dept: Refund pending. Update account at income-tax-gov.in/refund",
        answer: "scam",
        explanation: "Red flags: Lookalike domain (.in vs .gov.in), refund urgency tactic",
        simple: "Check the website address carefully - this looks fake"
    },
    {
        text: "Courier: Customs fee ₹248 due. Pay via link in our official app only",
        answer: "verify",
        explanation: "Verify: Could be legitimate but needs confirmation through official app",
        simple: "Check your tracking in the real app first"
    },
    {
        text: "UPI: ₹1 test credit received from 'PAYTM-TEST'. Please confirm receipt",
        answer: "verify",
        explanation: "Verify: Unexpected test transactions need verification with bank",
        simple: "Call your bank to check about test transactions"
    },
    {
        text: "Security Alert: If unsure about any message, call the number on our website",
        answer: "safe",
        explanation: "Safe: Correct security advice, promotes verification through official channels",
        simple: "This is good advice from your bank"
    }
];
