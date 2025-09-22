const fetchIpInfo = (ip) => {
  return fetch(`https://free.freeipapi.com/api/json/${ip}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const $ = (selector) => document.querySelector(selector);

const $form = $("#form");
const $input = $("#input");
const $submit = $("#submit");
const $results = $("#results");

$form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { value } = $input;
  if (!value) return;

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    $results.textContent = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute("disabled");
  $submit.removeAttribute("aria-busy");
});
