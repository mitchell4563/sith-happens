const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to claim bounty");
    }
  }
};

let deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach(() => {
  addEventListener('click', delButtonHandler)
})

