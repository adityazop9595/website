import badWords from "../../js/AbuseWordList";

const abusiveWords = badWords;

// Helper: Check if text contains abusive language
export const isAbusive = (text) => {
  const value = text.toLowerCase();
  return abusiveWords.some((word) => value.includes(word));
};

// Validate Name
export const validateName = (name) => {
  if(!name){
    return "name is Required!" 
  }else if(name.length <=2){
    return "name must be 3 char long"
  }else if(isAbusive(name)){
    return "Inappropriate language detected."
  }
  return "";
};

export const validateEmail = (email) => {
  if (!email.trim()) return "Email is required.";

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) return "Invalid email address.";
  return "";
};


// Validate Phone
export const validatePhoneNo = (phone) => {
  const pattern = /^[0-9]{10}$/;
  if (!phone.trim()) return "Phone number is required.";
  if (!pattern.test(phone)) return "Enter a 10-digit phone number.";
  return "";
};

// Validate Message
export const validateMessage = (message) => {
  if (!message.trim()) return "Message is required.";
  if (message.length < 10) return "Message must be at least 10 characters.";
  if (isAbusive(message)) return "Inappropriate language detected.";
  return "";
};
