document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("commentForm");
  const display = document.getElementById("commentDisplay");

  // Load saved comments from localStorage
  let comments = JSON.parse(localStorage.getItem("comments") || "[]");

  function renderComments() {
    display.innerHTML = "";
    comments.forEach(({name, email, comment, date}) => {
      const commentBox = document.createElement("div");
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
      display.prepend(commentBox);
    });
  }

  renderComments();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const comment = document.getElementById("userComment").value.trim();
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    comments.push({ name, email, comment, date });
    localStorage.setItem("comments", JSON.stringify(comments));

    renderComments();
    form.reset();
  });
});
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
