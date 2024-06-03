let StartFunc = () => {
  document.getElementById("container").innerHTML = "";
  console.log("container", document.getElementById("container"));
  let row = document.createElement("div");
  row.className = "row";
  document.getElementById("container").appendChild(row);
  console.log(row);
}

export { StartFunc };