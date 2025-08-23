const prompts = [
    {
        text: "TRAI: Your number linked to crimes. SIM will be blocked unless you verify now.",
        answer: "scam",
        explanation: "Red flags: Only telecom operators can block SIMs, not TRAI. Creates false urgency and pressure.",
        simple: "Only telecom operators can block SIMs. Unsolicited calls threatening action over the phone are a scam. Don't share personal info or pay under pressure."
    },
    {
        text: "FedEx: Your parcel from UK needs customs clearance. Pay ₹150 using this QR now.",
        answer: "scam",
        explanation: "Red flags: Courier companies never ask for payment via QR code through calls or messages.",
        simple: "Courier companies never ask for payment via QR code on calls or messages. Check with official app if unsure."
    },
    {
        text: "UPI: Credit of ₹25,000 received. For security, reply with PAN number.",
        answer: "scam",
        explanation: "Red flags: Banks or payment apps never ask for personal ID details after random credits.",
        simple: "Banks or payment apps never ask for personal ID details after a random credit. Sharing personal info could lead to identity theft."
    },
    {
        text: "Congratulations! You won a ₹5 lakh lottery. Pay ₹750 processing fee to claim.",
        answer: "scam",
        explanation: "Red flags: Genuine lotteries never require paying upfront fees to claim winnings.",
        simple: "Genuine lotteries never require paying upfront fees. This is a classic bait to steal money."
    },
    {
        text: "URGENT: KYC expires today. Verify at bit.ly/kyc-update",
        answer: "scam",
        explanation: "Red flags: Creates false urgency, uses shortlink, KYC verification bait",
        simple: "Scammers use urgency and fake links to steal personal info. Legitimate KYC requests don't use shortlinks or pressure immediate action."
    },
    {
        text: "Income tax refund pending. Update account details here: income-tax.in.gov.",
        answer: "verify",
        explanation: "Verify: Some tax department links look similar but might be fake domains (.in.gov vs .gov.in)",
        simple: "Some tax department links look similar but might be fake. Always confirm via official tax portals."
    },
    {
        text: "Update your Aadhaar details on the government portal today.",
        answer: "verify",
        explanation: "Verify: Government messages should be confirmed through official portals before taking action.",
        simple: "Always verify government messages via official portals before acting."
    },
    {
        text: "Courier customs fee ₹100: Pay via FedEx app in the official store.",
        answer: "safe",
        explanation: "Safe: Directing to pay through official courier apps from legitimate app stores is secure.",
        simple: "Paying customs fees only through official courier apps or websites is safe."
    },
    {
        text: "Call your bank's official helpline if you receive suspicious messages.",
        answer: "safe",
        explanation: "Safe: Educational message promoting verification through official channels - correct security advice.",
        simple: "Encouraging checking with official sources is safe advice."
    },
    {
        text: "Your Amazon package is out for delivery. Track in the official app.",
        answer: "safe",
        explanation: "Safe: Neutral delivery message without suspicious links, directs to official app for tracking.",
        simple: "This message is neutral and doesn't include suspicious links. Tracking via the official app is the correct and safe way to check deliveries."
    }
];
