// Selecting Required Elements
const ulTag = document.querySelector("ul");
let totalPages = 6;
function element(totalPages, page) {
  let liTag = "";
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;

  if (page > 1) {
    // if page value is greater than one then show previous button
    liTag += `<li class="btn prev" onClick="element(totalPages, ${page - 1})">
        <span><i class="fas fa-angle-left"></i> Prev</span>
      </li>`;
  }

  if (page > 2) {
    liTag += `<li class="numb" onClick="element(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  // how many pages or li show in the current li
  if (page == totalPages) {
    beforePages = beforePages - 2;
  } else if (page == totalPages - 1) {
    beforePages = beforePages - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPages = afterPages + 2;
  } else if (page == 2) {
    afterPages = afterPages + 1;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" onClick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
  }
  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb" onClick="element(totalPages,${totalPages})"><span>${totalPages}</span></li>`;
  }
  if (page < totalPages) {
    // if page value is less than total pages value then add new li which is next button
    liTag += `<li class="btn next" onClick="element(totalPages, ${page + 1})">
    <span>Next <i class="fas fa-angle-right"></i></span>
  </li>`;
  }
  ulTag.innerHTML = liTag;
}

element(totalPages, 1);
