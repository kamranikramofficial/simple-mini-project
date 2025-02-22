
function toggleFriend(id) {
    const status = document.getElementById(`str${id}`);
    const btn = document.getElementById(`btn${id}`);

    if (status.innerText === "Stranger") {
        status.innerText = "Friend";
        btn.innerText = "Remove friend";
        btn.classList.add("remove");
    } else {
        status.innerText = "Stranger";
        btn.innerText = "Add friend";
        btn.classList.remove("remove");
    }
}