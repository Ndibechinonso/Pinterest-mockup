// Arrays of images, each array represents images to display on a slide

let slide1 = document.querySelector(".slide1");
let slide1arr = [
  "https://i.pinimg.com/236x/20/aa/e1/20aae1471f8c8165046ce9aa0a3baadd.jpg",
  "https://i.pinimg.com/236x/1d/df/ff/1ddfffdac04c97957170d153582d63d1.jpg",
  "https://i.pinimg.com/236x/ec/34/84/ec34845d8a3ef02b998c06ddadc8aa51.jpg",
  "https://i.pinimg.com/236x/fd/78/4b/fd784b1cd1c23dc0391c4cbfd7b14df4.jpg",
  "https://i.pinimg.com/236x/53/84/af/5384afa574227b23ceed471c7d9c638f.jpg",
  "https://i.pinimg.com/236x/80/00/ff/8000ff1a40562aa1f97e8301e9694a93.jpg",
  "https://i.pinimg.com/236x/b0/9d/ba/b09dbaf6c8a2d1fe0ee3addd6caf8ce1.jpg",
  "https://i.pinimg.com/236x/59/cd/f3/59cdf3ad3011ad18404b549c64e3cd0d.jpg",
  "https://i.pinimg.com/236x/c7/23/f6/c723f6d955ff96bba1c030a93f6ad9c6.jpg",
  "https://i.pinimg.com/236x/4d/7b/b7/4d7bb79f759ecab65a86aff5404400ba.jpg",
  "https://i.pinimg.com/236x/31/cf/fb/31cffb044b2de245d78d6147513236cb.jpg",
];

for (let i = 0; i < slide1arr.length; i++) {
  var card = document.createElement("div")
  card.classList.add("pinCard")
  var saveBtn = document.createElement("div")
  saveBtn.classList.add("saveBtn")
  saveBtn.innerHTML = `<button type="button" class="btn btn-secondary save">Save</button>`
  var imgCard = document.createElement("img");
  imgCard.setAttribute("src", slide1arr[i]);
  var pinsContainer = document.createElement("div");
  pinsContainer.classList.add("pinsContainer")
  pinsContainer.innerHTML = '<i class="fas fa-upload icon-b"></i> <i class="fas fa-external-link-square-alt icon-a"></i> <i class="fas fa-ellipsis-h icon-c"></i>'
  card.append(saveBtn);
  card.append(pinsContainer);
  card.append(imgCard)
  slide1.append(card);
}

let slide2Arr = [
  "https://i.pinimg.com/236x/d6/f0/6a/d6f06aa04f1ff9bb5af3af83b7a01802.jpg",
  "https://i.pinimg.com/236x/43/35/b0/4335b0e85a6dec1bde61bf5b050d102d.jpg",
  "https://i.pinimg.com/236x/18/32/e5/1832e5cc7cef16aabf8e68d66e6b0597.jpg",
  "https://i.pinimg.com/236x/3a/4e/59/3a4e591e012526014cb8a8a0a8e04b0f.jpg",
  "https://i.pinimg.com/236x/db/86/ba/db86bafec2b7aad52a153a8ce8f4b0ba.jpg",
  "https://i.pinimg.com/236x/2f/dc/fe/2fdcfe7700cc9f86a68dd5ffc8352511.jpg",
  "https://i.pinimg.com/236x/f1/e8/f7/f1e8f7a9a4e8bb2b447aa34b1fd5f395.jpg",
  "https://i.pinimg.com/236x/e6/e9/04/e6e90408a8ebb92e8a24cd3dcefb4210.jpg",
  "https://i.pinimg.com/236x/ba/37/0a/ba370af5c76bde847ced11f59041402e.jpg",
  "https://i.pinimg.com/236x/03/0c/4c/030c4c19a19d2eac7fbc3cb77be83678.jpg",
  "https://i.pinimg.com/236x/0d/1b/f6/0d1bf66967f91a8dad84d95a61196306.jpg",
  "https://i.pinimg.com/236x/ba/c8/43/bac843ed476bf0cac7edf7b3e8ff9c31.jpg",
];

for (let i = 0; i < slide2Arr.length; i++) {
  var card = document.createElement("div")
  card.classList.add("pinCard")
  var saveBtn = document.createElement("div")
  saveBtn.classList.add("saveBtn")
  saveBtn.innerHTML = `<button type="button" class="btn btn-secondary save">Save</button>`
  let imgCard = document.createElement("img");
  imgCard.setAttribute("src", slide2Arr[i]);
  var pinsContainer = document.createElement("div");
  pinsContainer.classList.add("pinsContainer")
  pinsContainer.innerHTML = '<i class="fas fa-upload icon-b"></i> <i class="fas fa-external-link-square-alt icon-a"></i> <i class="fas fa-ellipsis-h icon-c"></i>'
  card.append(saveBtn);
  card.append(pinsContainer);
  card.append(imgCard)
  document.getElementById("slide2").append(card);
}

let slide3Arr = [
  "https://i.pinimg.com/236x/5d/7a/82/5d7a822745c1b293da6d87d57f0c82e5.jpg",
  "https://i.pinimg.com/236x/e2/4d/07/e24d07e79392c5d649af4fd17a4d2808.jpg",
  "https://i.pinimg.com/236x/0f/82/11/0f821192aa83b8010e3960da8ae88c7f.jpg",
  "https://i.pinimg.com/236x/07/e9/04/07e90451c177b91526eb489b99688426.jpg",
  "https://i.pinimg.com/236x/cc/df/79/ccdf790d167416414ed9f6debea225b4.jpg",
  "https://i.pinimg.com/236x/a4/ca/4c/a4ca4cedd3a98721d4986804b89fc5e5.jpg",
  "https://i.pinimg.com/236x/d2/8f/70/d28f7095ea7aab4ca9bb2c5ede9a25c2.jpg",
  "https://i.pinimg.com/236x/11/54/27/11542796c57563045803cf70bddaae24.jpg",
  "https://i.pinimg.com/236x/84/9d/36/849d36f256ee04857395fdaa17423a24.jpg",
  "https://i.pinimg.com/236x/27/e5/56/27e55617c56ba782fe2e63e0df14115d.jpg",
  "https://i.pinimg.com/236x/ae/db/df/aedbdfcb69360159028087ed22c23bcb.jpg",
  "https://i.pinimg.com/236x/ae/db/df/aedbdfcb69360159028087ed22c23bcb.jpg",
  "https://i.pinimg.com/236x/62/58/78/625878b4123e35c569204dbe3e113f23.jpg",
];
for (let i = 0; i < slide3Arr.length; i++) {
  var card = document.createElement("div")
  card.classList.add("pinCard")
  var saveBtn = document.createElement("div")
  saveBtn.classList.add("saveBtn")
  saveBtn.innerHTML = `<button type="button" class="btn btn-secondary save">Save</button>`
  let imgCard = document.createElement("img");
  imgCard.setAttribute("src", slide3Arr[i]);
  var pinsContainer = document.createElement("div");
  pinsContainer.classList.add("pinsContainer")
  pinsContainer.innerHTML = '<i class="fas fa-upload icon-b"></i> <i class="fas fa-external-link-square-alt icon-a"></i> <i class="fas fa-ellipsis-h icon-c"></i>'
  card.append(saveBtn);
  card.append(pinsContainer);
  card.append(imgCard)
  document.querySelector(".slide3").append(card);
}

let slide4Arr = [
  "https://i.pinimg.com/236x/a1/04/b4/a104b482574429ef3cd4b5a9086e16fa.jpg",
  "https://i.pinimg.com/236x/39/95/3c/39953c3bb2cabc2267f8633bb9aedc6d.jpg",
  "https://i.pinimg.com/236x/39/f0/5c/39f05ca843aaa97d143a5406bb37dc0c.jpg",
  "https://i.pinimg.com/236x/74/8c/d6/748cd67b71d07ae024f76821c86eb246.jpg",
  "https://i.pinimg.com/236x/17/ff/67/17ff679e9d844c7c54f03bd56640a8a2.jpg",
  "https://i.pinimg.com/236x/94/49/2f/94492fab081fba8344df6d7a0ac45d92.jpg",
  "https://i.pinimg.com/236x/76/57/33/7657338e163aa22cbfd85d14455f4b6e.jpg",
  "https://i.pinimg.com/236x/16/0f/d5/160fd585e503639f0082fa20d5700bd6.jpg",
  "https://i.pinimg.com/236x/8f/21/98/8f21982a2cb87f00a2adbe160815bb4f.jpg",
  "https://i.pinimg.com/236x/a9/98/73/a99873830b5eb64ef712013e022129af.jpg",
];
for (let i = 0; i < slide4Arr.length; i++) {
  var card = document.createElement("div")
  card.classList.add("pinCard")
  var saveBtn = document.createElement("div")
  saveBtn.classList.add("saveBtn")
  saveBtn.innerHTML = `<button type="button" class="btn btn-secondary save">Save</button>`
  let imgCard = document.createElement("img");
  imgCard.setAttribute("src", slide4Arr[i]);
  var pinsContainer = document.createElement("div");
  pinsContainer.classList.add("pinsContainer")
  pinsContainer.innerHTML = '<i class="fas fa-upload icon-b"></i> <i class="fas fa-external-link-square-alt icon-a"></i> <i class="fas fa-ellipsis-h icon-c"></i>'
  card.append(saveBtn);
  card.append(pinsContainer);
  card.append(imgCard)
  document.querySelector(".slide4").append(card);
}

let slide5Arr = [
  "https://i.pinimg.com/236x/cc/59/52/cc5952f5e2fd36d3f72c0596175c318b.jpg",
  "https://i.pinimg.com/236x/b8/2f/26/b82f26f1393fa0b1f0ec5c50b687da09.jpg",
  "https://i.pinimg.com/236x/73/33/f7/7333f7ba06d1288906e765b27fbc0661.jpg",
  "https://i.pinimg.com/236x/a1/04/b4/a104b482574429ef3cd4b5a9086e16fa.jpg",
  "https://i.pinimg.com/236x/f9/f8/a8/f9f8a8850dc01efac0edda6bb32691de.jpg",
  "https://i.pinimg.com/236x/63/de/58/63de58ab1492c5f64a5ef3790a9b924c.jpg",
  "https://i.pinimg.com/236x/73/09/c0/7309c0b9aa25737f59ec7cec46ad45db.jpg",
  "https://i.pinimg.com/236x/91/05/b2/9105b2dad295b0d7b0bb1b557bd5a9ff.jpg",
  "https://i.pinimg.com/236x/f2/c4/03/f2c403e9c6c0e4ab98f8bf26a6c5a223.jpg",
  "https://i.pinimg.com/236x/20/78/5e/20785e69f3620949172081526d18a2e1.jpg",
  "https://i.pinimg.com/236x/5f/b1/b8/5fb1b856ffdc3af9fd223fea0ee90647.jpg",
];
for (let i = 0; i < slide5Arr.length; i++) {
  var card = document.createElement("div")
  card.classList.add("pinCard")
  var saveBtn = document.createElement("div")
  saveBtn.classList.add("saveBtn")
  saveBtn.innerHTML = `<button type="button" class="btn btn-secondary save">Save</button>`
  let imgCard = document.createElement("img");
  imgCard.setAttribute("src", slide5Arr[i]);
  var pinsContainer = document.createElement("div");
  pinsContainer.classList.add("pinsContainer")
  pinsContainer.innerHTML = '<i class="fas fa-upload icon-b"></i> <i class="fas fa-external-link-square-alt icon-a"></i> <i class="fas fa-ellipsis-h icon-c"></i>'
  card.append(saveBtn);
  card.append(pinsContainer);
  card.append(imgCard)
  document.querySelector(".slide5").append(card);
}

let slide6Arr = [
  "https://i.pinimg.com/236x/84/ec/36/84ec3601c0a9dc7e90952ac9d720e772.jpg",
  "https://i.pinimg.com/236x/94/98/ba/9498baa134f6acead108ac81f5e49cb2.jpg",
  "https://i.pinimg.com/236x/df/02/98/df0298f7aa41403f1469b6f4296596c9.jpg",
  "https://i.pinimg.com/236x/b4/bd/5d/b4bd5d3a0c0b1509fb3d1148dfd73f2f.jpg",
  "https://i.pinimg.com/236x/a6/3d/53/a63d537030e2ccd3d47d95c20797aff0.jpg",
  "https://i.pinimg.com/236x/61/ba/8a/61ba8ae3cb4fc7b77c1219c7a694874f.jpg",
  "https://i.pinimg.com/236x/e0/6c/6f/e06c6feec76ca22f819a79eaad8d7273.jpg",
  "https://i.pinimg.com/236x/a2/51/83/a2518396346afc1c980c0903dedd60b0.jpg",
  "https://i.pinimg.com/236x/43/b1/3d/43b13d9767467627eb775d97f9388952.jpg",
  "https://i.pinimg.com/236x/59/07/f5/5907f50bf8224e4ba9a59b62475dc0c6.jpg",
  "https://i.pinimg.com/236x/5f/c6/a2/5fc6a223c0b7fdfda5e005cd18dad160.jpg",
];
for (let i = 0; i < slide6Arr.length; i++) {
  var card = document.createElement("div")
  card.classList.add("pinCard")
  var saveBtn = document.createElement("div")
  saveBtn.classList.add("saveBtn")
  saveBtn.innerHTML = `<button type="button" class="btn btn-secondary save">Save</button>`
  let imgCard = document.createElement("img");
  imgCard.setAttribute("src", slide6Arr[i]);
  var pinsContainer = document.createElement("div");
  pinsContainer.classList.add("pinsContainer")
  pinsContainer.innerHTML = '<i class="fas fa-upload icon-b"></i> <i class="fas fa-external-link-square-alt icon-a"></i> <i class="fas fa-ellipsis-h icon-c"></i>'
  card.append(saveBtn);
  card.append(pinsContainer);
  card.append(imgCard)
  document.querySelector(".slide6").append(card);
}

// fxn to make mini-navbar disappear on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("minion-navbar").style.bottom = "20px";
} else {
  document.getElementById("minion-navbar").style.bottom = "-100px";
}
prevScrollpos = currentScrollPos;
}
