async function checkPassword() {
    var input = document.getElementById("passwordInput").value;
    
    // ▼▼▼ 這一大段是關鍵！必須要有這段，才能把 "adh" 轉成亂碼 ▼▼▼
    const msgBuffer = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    // ▲▲▲ 關鍵結束 ▲▲▲

    // 這是 "adh" 轉換後的 SHA-256 碼
    var correctHash = "cf38890765660682025170425310f845014389146162397775f042516462740e";

    // 這裡比對的是「您輸入轉換後的亂碼 (hashHex)」與「正確的亂碼 (correctHash)」
    if (hashHex === correctHash) {
        document.getElementById("login-area").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    } else {
        alert("密碼錯誤，請重試！");
        document.getElementById("passwordInput").value = "";
    }
}