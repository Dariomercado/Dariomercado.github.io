const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#mailto");

// -----------
// Tracking click mailto
// -----------
if ($buttonMailto) {
  $buttonMailto.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "click_email", {
        event_category: "contacto",
        event_label: "mailto_portfolio",
      });
    }
  });
}

// -----------
// Submit formulario
// -----------
if ($form) {
  $form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  // Evento GA4 — lead generado
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", {
      event_category: "contacto",
      event_label: "formulario_portfolio",
    });
  }

  if ($buttonMailto) {
    $buttonMailto.setAttribute(
      "href",
      `mailto:darioezequielm11@gmail.com?subject=${form.get("name")} ${form.get("email")}&body=${form.get("message")}`,
    );

    $buttonMailto.click();
  }
}

// const $form =document.querySelector('#form');
// const $buttonMailto= document.querySelector('#mailto')

// $form.addEventListener('submit',handleSubmit)

// function handleSubmit(event){
//     event.preventDefault()
//     const form= new FormData(this)
//     $buttonMailto.setAttribute('href',`mailto:darioezequielm11@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
//     $buttonMailto.click();
// }
