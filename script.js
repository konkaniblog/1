document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("commentForm");
  const display = document.getElementById("commentDisplay");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const comment = document.getElementById("userComment").value.trim();

    if (name && comment) {
      const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });

      const commentBox = document.createElement("div");
      commentBox.style.borderBottom = "1px solid #eee";
      commentBox.style.padding = "20px 0";

      commentBox.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 40px; height: 40px; background-color: #ddd; border-radius: 50%;"></div>
          <div>
            <strong style="font-size: 16px;">${name}</strong><br>
            <small style="color: gray;">${date}</small>
          </div>
        </div>
        <p style="margin: 15px 0; font-size: 15px; line-height: 1.6;">${comment}</p>
        ${email ? `<p style="font-size: 13px; color: #666;"><strong>Email:</strong> ${email}</p>` : ''}
        <a href="#" style="color: #6c63ff; font-weight: 600; font-size: 14px;">REPLY</a>
      `;

      display.prepend(commentBox); // Newest comments first
      form.reset();
    }
  });
});
