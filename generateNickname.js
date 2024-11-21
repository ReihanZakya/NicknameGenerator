function generateNickname() {
    const fullNameInput = document.getElementById("fullNameInput").value.trim();
    const letterRecommendation = document.getElementById("letterRecommendation").value.trim().toLowerCase();
    const nicknameInput = document.getElementById("nicknameInput");

    if (!fullNameInput) {
      alert("Please enter your full name.");
      return;
    }

    // Convert full name to lowercase and remove spaces
    const fullName = fullNameInput.toLowerCase().replace(/\s+/g, '');

    // Count the occurrences of each character in full name
    const charCount = {};
    for (const char of fullName) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    // Initialize the nickname
    let nickname = '';

    // Handle optional first letter recommendation
    if (letterRecommendation) {
      if (!charCount[letterRecommendation]) {
        alert(`The letter "${letterRecommendation}" is not present in the full name.`);
        return;
      }
      nickname += letterRecommendation;
      charCount[letterRecommendation]--;
    }

    // Generate the rest of the nickname (length 4-8)
    const length = Math.floor(Math.random() * 5) + 4; // Random length between 4 and 8

    while (nickname.length < length) {
      const randomChar = fullName[Math.floor(Math.random() * fullName.length)];

      // Ensure no character is used more than it appears in the full name
      const usedCount = nickname.split(randomChar).length - 1;
      if (usedCount < charCount[randomChar]) {
        nickname += randomChar;
      }
    }

    nicknameInput.value = nickname;
  }