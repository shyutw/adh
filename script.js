function checkPassword() {
    // 取得輸入框的值
    var input = document.getElementById("passwordInput").value;
    
    // 設定密碼
    var correctPassword = "cf38890765660682025170425310f845014389146162397775f042516462740e"; //adh

    if (input === correctPassword) {
        // 密碼正確：隱藏登入框，顯示內容
        document.getElementById("login-area").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    } else {
        // 密碼錯誤
        alert("密碼錯誤，請重試！");
        document.getElementById("passwordInput").value = ""; // 清空輸入框
    }
}