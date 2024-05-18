const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const sendSMS = async (phoneNumber, message) => {
  // Create SNS client
  const snsClient = new SNSClient({ region: "ap-south-1" });

  // Set the parameters
  const params = {
    PhoneNumber: phoneNumber,
    Message: message,
  };

  // Send the SMS message
  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log("Message sent successfully:", data);
  } catch (err) {
    console.error("Error sending message:", err);
  }
};

// Example usage
const phoneNumber = "+918799805348"; // Replace with the actual phone number
const message = "Hello, this is a test message from AWS SNS.";
sendSMS(phoneNumber, message);
