window.onload = function () {
    var audio = document.getElementById('welcome-sound');
    audio.play();

    // Xóa dữ liệu tài khoản và mật khẩu khi tải lại trang
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Xóa thuộc tính tự động điền nếu trình duyệt lưu lại
    document.getElementById("username").setAttribute("autocomplete", "off");
    document.getElementById("password").setAttribute("autocomplete", "off");
};

// Hàm đăng nhập với Google
function loginWithGoogle() {
    // Chuyển hướng đến Google OAuth
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_GOOGLE_REDIRECT_URI&response_type=code&scope=openid%20profile%20email';
    // Ẩn trường Account và Password
    document.getElementById('account-fields').style.display = 'none';
}

// Hàm đăng nhập với Facebook
function loginWithFacebook() {
    // Chuyển hướng đến Facebook OAuth
    window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_FACEBOOK_REDIRECT_URI&scope=email,public_profile';
    // Ẩn trường Account và Password
    document.getElementById('account-fields').style.display = 'none';
}

// Hàm đăng nhập với Apple
function loginWithApple() {
    // Chuyển hướng đến Apple OAuth
    window.location.href = 'https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=YOUR_APPLE_REDIRECT_URI&response_type=code id_token&scope=email';
    // Ẩn trường Account và Password
    document.getElementById('account-fields').style.display = 'none';
}

// Xử lý form đăng nhập
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn gửi form mặc định

    // Lấy dữ liệu từ form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra tài khoản
    if (username === "admin" && password === "123456") {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html"; // Chuyển hướng sau khi đăng nhập thành công
    } else {
        alert("Sai tài khoản hoặc mật khẩu. Vui lòng thử lại.");
    }
});

document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Thay đổi biểu tượng
    this.textContent = type === "password" ? "👁️" : "🙈";
});

// Đảm bảo âm thanh phát lại liên tục
var audio = document.getElementById('welcome-sound');
audio.loop = true;  // Thiết lập âm thanh tự động phát lại khi kết thúc
audio.play();  // Bắt đầu phát âm thanh

