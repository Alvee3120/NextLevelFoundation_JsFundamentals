function validateUsername(username) {
  if (username.length <4) {
    return "too short";
  } else if (username.includes(" ")) {
    return "No Space Allowed";
  } else if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }else{
    return "available"
  }
}


console.log(validateUsername("rahim123"));
console.log(validateUsername("asdb"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));







