document.querySelector(".addButton").addEventListener("click", function () {
  var task = document.querySelector(".int").value;
  var tekst = "    " + task + "    ";
  const li = document.createElement("li");

  const check = document.createElement("input");
  const remove = document.createElement("button");
  remove.className = "removeButton";

  check.type = "checkbox";
  check.addEventListener("click", function () {
    if (check.checked) {
      li.className = "done";
    } else {
      li.className = "";
    }
  });
  li.append(check);

  li.appendChild(document.createTextNode(tekst));
  li.appendChild(remove);
  document.querySelector(".todoList").appendChild(li);

  remove.addEventListener("click", function () {
    li.remove();
  });
});
