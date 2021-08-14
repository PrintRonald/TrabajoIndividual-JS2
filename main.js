function changeView(type) {
  const path = window.location.pathname;
  console.log(path);
  if (type === "home") {
    if (path === '/index.html') {
      document.body.style.backgroundColor = "red";
      return false;
    } else {
      window.location.href = "/index.html";
    }
  } else if (type === "register") {
    if (path === '/register.html') {
      document.body.style.backgroundColor = "green";
      return false;
    } else {
      window.location.href = "/register.html";
    }
  } else {
    window.location.href = "/routes.html";

  }
}