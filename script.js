let listings = [
  {
    id: 1,
    name: "Kasarani Sunrise Bedsitter",
    location: "Nairobi",
    area: "Kasarani, 9 minutes from stage",
    type: "Bedsitter",
    rent: 8500,
    deposit: 8500,
    status: "available",
    landlord: "Mary Wanjiku",
    phone: "+254712345678",
    verified: true,
    water: "Water included",
    electricity: "Token meter",
    security: "Night guard",
    tags: ["verified", "near stage", "water included"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: 2,
    name: "Kiambu Road One Bedroom",
    location: "Kiambu",
    area: "Ridgeways, 4 minutes from main road",
    type: "1-bedroom",
    rent: 18000,
    deposit: 18000,
    status: "booked",
    landlord: "Kamau Properties",
    phone: "+254701234567",
    verified: true,
    water: "Borehole backup",
    electricity: "Prepaid meter",
    security: "CCTV and caretaker",
    tags: ["verified", "near stage"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: 3,
    name: "Rongai Single Room",
    location: "Rongai",
    area: "Maasai Lodge Road, 6 minutes from stage",
    type: "Single room",
    rent: 5500,
    deposit: 5500,
    status: "available",
    landlord: "Otieno Homes",
    phone: "+254733112233",
    verified: false,
    water: "Water shared",
    electricity: "Shared meter",
    security: "Gated compound",
    tags: ["near stage"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: 4,
    name: "Thika Modern Two Bedroom",
    location: "Thika",
    area: "Ngoingwa, 8 minutes from supermarket",
    type: "2-bedroom",
    rent: 26000,
    deposit: 26000,
    status: "available",
    landlord: "Mwangi Estates",
    phone: "+254722333444",
    verified: true,
    water: "County water and tank",
    electricity: "Token meter",
    security: "Caretaker and gate",
    tags: ["verified", "water included"],
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: 5,
    name: "Kisumu Lakeview Bedsitter",
    location: "Kisumu",
    area: "Milimani, near public transport",
    type: "Bedsitter",
    rent: 10000,
    deposit: 10000,
    status: "available",
    landlord: "Achieng Rentals",
    phone: "+254745678901",
    verified: true,
    water: "Water included",
    electricity: "Token meter",
    security: "Secure compound",
    tags: ["verified", "water included"],
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: 6,
    name: "Mombasa Bamburi One Bedroom",
    location: "Mombasa",
    area: "Bamburi, 5 minutes from stage",
    type: "1-bedroom",
    rent: 15000,
    deposit: 15000,
    status: "occupied",
    landlord: "Coast Homes",
    phone: "+254700998877",
    verified: true,
    water: "Water available",
    electricity: "Token meter",
    security: "Gated estate",
    tags: ["verified", "near stage"],
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1100&q=80",
  },
];

const plans = [
  {
    name: "Bronze",
    price: "KSh 6,000 / year",
    listingsLimit: "10 active listings",
    color: "#a97142",
    features: ["10 active listings", "Annual renewal", "M-Pesa, USDT, USDC, or RLUSD payment support"],
  },
  {
    name: "Silver",
    price: "KSh 10,000 / year",
    listingsLimit: "20 active listings",
    color: "#8794a6",
    features: ["20 active listings", "Annual renewal", "Listing analytics and faster admin approval"],
  },
  {
    name: "Gold",
    price: "KSh 15,000 / year",
    listingsLimit: "30 active listings",
    color: "#d49a18",
    featured: true,
    features: ["30 active listings", "Annual renewal", "Featured search placement and verified badge"],
  },
  {
    name: "Diamond",
    price: "KSh 20,000 / year",
    listingsLimit: "40 active listings",
    color: "#2f80ed",
    features: ["40 active listings", "Annual renewal", "Photo/video priority and lead export support"],
  },
  {
    name: "Platinum",
    price: "0.095 BTC / year",
    listingsLimit: "50 active listings",
    color: "#222f3e",
    features: ["50 active listings", "Annual renewal", "Top city placement and dedicated support"],
  },
];

const listingsGrid = document.querySelector("#listingsGrid");
const listingDetail = document.querySelector("#listingDetail");
const pricingGrid = document.querySelector("#pricingGrid");
const paymentPanel = document.querySelector("#paymentPanel");
const approvalList = document.querySelector("#approvalList");
const areaResults = document.querySelector("#areaResults");
let activeChip = "all";
let activeMapLocation = "Nairobi";
let loggedInLandlord = "";
let loggedInLandlordEmail = "";
let loggedInLandlordPlan = "Bronze";
let selectedListingId = listings[0].id;
let pendingListings = [
  {
    name: "Pipeline Bedsitter",
    location: "Nairobi",
    area: "Pipeline, near stage",
    rent: 9000,
    deposit: 9000,
    type: "Bedsitter",
    landlord: "Demo Landlord",
    phone: "+254704770170",
    amenities: "Water available, token meter, secure compound",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "Bamburi Single Room",
    location: "Mombasa",
    area: "Bamburi, close to main road",
    rent: 6500,
    deposit: 6500,
    type: "Single room",
    landlord: "Coast Agent",
    phone: "+254704770170",
    amenities: "Shared water, prepaid electricity, gated plot",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1100&q=80",
  },
];

const areaLocations = [
  { name: "Nairobi", note: "Kasarani, Pipeline, Roysambu, Embakasi, Rongai links" },
  { name: "Kiambu", note: "Kiambu Road, Ruaka, Ruiru, Kikuyu, Githurai" },
  { name: "Rongai", note: "Maasai Lodge, Kiserian Road, Tuskys stage areas" },
  { name: "Thika", note: "Ngoingwa, Makongeni, Section 9, town outskirts" },
  { name: "Kisumu", note: "Milimani, Mamboleo, Nyalenda, Polyview" },
  { name: "Mombasa", note: "Bamburi, Nyali, Likoni, Mtwapa, Tudor" },
];

const formatKsh = (amount) => `KSh ${amount.toLocaleString("en-KE")}`;

function normalizeKenyaPhone(phone) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("254")) return `+${digits}`;
  if (digits.startsWith("0")) return `+254${digits.slice(1)}`;
  if (digits.length === 9) return `+254${digits}`;
  return `+${digits}`;
}

function getWhatsAppNumber(phone) {
  return normalizeKenyaPhone(phone).replace("+", "");
}

function statusClass(status) {
  return status.toLowerCase();
}

function getFilteredListings() {
  const location = document.querySelector("#locationFilter").value;
  const type = document.querySelector("#typeFilter").value;
  const maxRent = Number(document.querySelector("#rentFilter").value);

  return listings.filter((listing) => {
    const locationMatch = location === "all" || listing.location === location;
    const typeMatch = type === "all" || listing.type === type;
    const rentMatch = listing.rent <= maxRent;
    const chipMatch =
      activeChip === "all" ||
      (activeChip === "verified" && listing.verified) ||
      listing.tags.includes(activeChip);

    return locationMatch && typeMatch && rentMatch && chipMatch;
  });
}

function renderListings() {
  const filteredListings = getFilteredListings();

  listingsGrid.innerHTML = filteredListings
    .map(
      (listing) => `
        <article class="listing-card">
          <img src="${listing.image}" alt="${listing.name}">
          <div class="card-body">
            <div class="tag-row">
              <span class="status-pill ${statusClass(listing.status)}">${listing.status}</span>
              ${listing.verified ? '<span class="tag">Verified</span>' : '<span class="tag">Pending check</span>'}
            </div>
            <div>
              <h3>${listing.name}</h3>
              <p>${listing.area}</p>
            </div>
            <div class="meta-row">
              <span class="tag">${listing.type}</span>
              <span class="tag">${listing.water}</span>
            </div>
            <strong class="rent">${formatKsh(listing.rent)} / month</strong>
            <div class="card-actions">
              <button class="secondary-button" data-detail="${listing.id}">View Details</button>
              <a class="contact-button whatsapp" href="https://wa.me/${getWhatsAppNumber(listing.phone)}?text=Hi%20${encodeURIComponent(listing.landlord)}%2C%20I%20saw%20${encodeURIComponent(listing.name)}%20on%20Hamiake.%20Is%20it%20still%20available%3F" target="_blank" rel="noreferrer">Chat Landlord</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  if (!filteredListings.length) {
    listingsGrid.innerHTML = '<p class="form-note">No listings match those filters yet. Try a wider rent range or another location.</p>';
  }
}

function renderDetail() {
  const listing = listings.find((item) => item.id === selectedListingId) || listings[0];

  listingDetail.innerHTML = `
    <img class="detail-image" src="${listing.image}" alt="${listing.name}">
    <div class="detail-body">
      <div class="tag-row">
        <span class="status-pill ${statusClass(listing.status)}">${listing.status}</span>
        ${listing.verified ? '<span class="tag">Verified landlord</span>' : '<span class="tag">Admin check pending</span>'}
      </div>
      <div>
        <h2>${listing.name}</h2>
        <p>${listing.area}</p>
      </div>
      <div class="detail-stats">
        <div><span>Rent</span><strong>${formatKsh(listing.rent)}</strong></div>
        <div><span>Deposit</span><strong>${formatKsh(listing.deposit)}</strong></div>
        <div><span>Type</span><strong>${listing.type}</strong></div>
        <div><span>Security</span><strong>${listing.security}</strong></div>
      </div>
      <p>${listing.water}. ${listing.electricity}. Contact ${listing.landlord} directly by WhatsApp, then report the listing if details do not match the house shown.</p>
      <div class="detail-actions">
        <a class="secondary-button" href="tel:${listing.phone}">Call Landlord</a>
        <a class="primary-button" href="https://wa.me/${getWhatsAppNumber(listing.phone)}?text=Hi%20${encodeURIComponent(listing.landlord)}%2C%20is%20${encodeURIComponent(listing.name)}%20still%20available%3F" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
    </div>
  `;
}

function renderPlans() {
  pricingGrid.innerHTML = plans
    .map(
      (plan) => `
        <article class="pricing-card ${plan.featured ? "featured" : ""}">
          <div class="plan-top">
            <div>
              <h3>${plan.name}</h3>
              <p>${plan.featured ? "Best for serious agents" : "Annual renewable plan"}</p>
            </div>
            <span class="plan-badge" style="background:${plan.color}">${plan.name.slice(0, 1)}</span>
          </div>
          <div class="plan-price">${plan.price}</div>
          <ul>
            ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <button class="primary-button" data-plan="${plan.name}" data-price="${plan.price}">Choose ${plan.name}</button>
        </article>
      `
    )
    .join("");
}

function renderPaymentInstructions(planName, planPrice) {
  const accountReference = `${planName.toUpperCase()}-740532`;
  const landlordText = loggedInLandlord ? ` for ${loggedInLandlord}` : "";
  const plan = plans.find((item) => item.name === planName);

  paymentPanel.innerHTML = `
    <p class="eyebrow">M-Pesa payment</p>
    <h2>${planName} plan selected${landlordText}.</h2>
    <div class="payment-steps">
      <div><span>PayBill</span><strong>247247</strong></div>
      <div><span>Account</span><strong>740532</strong></div>
      <div><span>Plan</span><strong>${planName}</strong></div>
      <div><span>Amount</span><strong>${planPrice}</strong></div>
      <div><span>Renewal</span><strong>Annual</strong></div>
      <div><span>Limit</span><strong>${plan?.listingsLimit || "Confirm limit"}</strong></div>
      <div><span>Stablecoins</span><strong>USDT / USDC / RLUSD</strong></div>
      <div><span>Approval</span><strong>After payment</strong></div>
    </div>
    <ol>
      <li>Open M-Pesa on your phone.</li>
      <li>Choose Lipa na M-Pesa, then PayBill.</li>
      <li>Enter business number 247247.</li>
      <li>Enter account number 740532.</li>
      <li>Pay ${planPrice} for the ${planName} plan.</li>
      <li>For USDT, USDC, or RLUSD, request wallet details from admin before sending crypto.</li>
      <li>Send the M-Pesa or crypto confirmation message to admin on WhatsApp for account approval.</li>
    </ol>
    <div class="detail-actions">
      <a class="primary-button" href="https://wa.me/254704770170?text=Hi%20Hamiake%20Admin%2C%20I%20want%20to%20activate%20the%20${encodeURIComponent(planName)}%20annual%20plan.%20Amount%3A%20${encodeURIComponent(planPrice)}.%20PayBill%3A%20247247.%20Account%3A%20740532.%20Reference%3A%20${encodeURIComponent(accountReference)}.%20I%20can%20also%20pay%20using%20USDT%2C%20USDC%2C%20or%20RLUSD." target="_blank" rel="noreferrer">Send Confirmation</a>
      <a class="secondary-button" href="tel:+254704770170">Call Admin</a>
    </div>
  `;
  paymentPanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function getPlanPrice(planName) {
  return plans.find((plan) => plan.name === planName)?.price || "Confirm with admin";
}

function renderApprovalList() {
  approvalList.innerHTML = pendingListings.length
    ? pendingListings
        .map(
          (listing, index) => `
            <article class="approval-item">
              <strong>${listing.name}</strong>
              <span>${listing.type} in ${listing.location} - ${formatKsh(Number(listing.rent))}</span>
              <span>Landlord: ${listing.landlord} - ${normalizeKenyaPhone(listing.phone)}</span>
              <span>Email: ${listing.email || "Not provided"}</span>
              <span>Plan: ${listing.plan || "Bronze"} - confirm payment before approval</span>
              <span>${listing.amenities}</span>
              <div class="approval-actions">
                <button data-approve="${index}">Approve</button>
                <button data-reject="${index}">Reject</button>
              </div>
            </article>
          `
        )
        .join("")
    : '<p class="form-note">No pending listings right now.</p>';
}

function renderAreaResults() {
  areaResults.innerHTML = areaLocations
    .map((area) => {
      const areaListings = listings.filter((listing) => listing.location === area.name);
      const lowestRent = areaListings.length ? Math.min(...areaListings.map((listing) => listing.rent)) : 0;

      return `
        <article class="area-card">
          <strong>${area.name}</strong>
          <span>${area.note}</span>
          <span class="tag">${areaListings.length} listings</span>
          <span class="rent">${areaListings.length ? `From ${formatKsh(lowestRent)}` : "Coming soon"}</span>
          <button class="secondary-button" data-area-search="${area.name}">Search ${area.name}</button>
        </article>
      `;
    })
    .join("");
}

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderListings();
  document.querySelector("#listings").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    activeChip = button.dataset.chip;
    renderListings();
  });
});

document.querySelectorAll(".map-pin").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".map-pin").forEach((pin) => pin.classList.remove("active"));
    button.classList.add("active");
    activeMapLocation = button.dataset.mapLocation;
    document.querySelector("#locationFilter").value = activeMapLocation;
    renderListings();
    document.querySelector("#listings").scrollIntoView({ behavior: "smooth" });
  });
});

areaResults.addEventListener("click", (event) => {
  const areaButton = event.target.closest("[data-area-search]");
  if (!areaButton) return;

  const area = areaButton.dataset.areaSearch;
  activeMapLocation = area;
  document.querySelector("#locationFilter").value = area;
  document.querySelectorAll(".map-pin").forEach((pin) => {
    pin.classList.toggle("active", pin.dataset.mapLocation === area);
  });
  renderListings();
  document.querySelector("#listings").scrollIntoView({ behavior: "smooth" });
});

listingsGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail]");
  if (!detailButton) return;

  selectedListingId = Number(detailButton.dataset.detail);
  renderDetail();
  document.querySelector("#details").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#reportForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const reason = document.querySelector("#reportReason").value;
  document.querySelector("#reportNote").textContent = `Report received: ${reason}. Admin will review this listing.`;
  event.target.reset();
});

document.querySelector("#houseForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const locationText = document.querySelector("#houseLocation").value.trim();
  const locationMatch = areaLocations.find((area) => locationText.toLowerCase().includes(area.name.toLowerCase()));
  const location = locationMatch?.name || locationText.split(",").pop().trim() || locationText;
  const amenities = document.querySelector("#houseAmenities").value.trim() || "Amenities to be confirmed";
  const newListing = {
    id: Date.now(),
    name: document.querySelector("#houseName").value,
    location,
    area: locationText,
    type: document.querySelector("#houseType").value,
    rent: Number(document.querySelector("#houseRent").value),
    deposit: Number(document.querySelector("#houseDeposit").value),
    status: "available",
    landlord: document.querySelector("#postLandlordName").value.trim(),
    email: loggedInLandlordEmail || "Not provided",
    plan: loggedInLandlordPlan,
    phone: normalizeKenyaPhone(document.querySelector("#postLandlordPhone").value),
    verified: false,
    water: amenities,
    electricity: "Confirm with landlord",
    security: "Confirm with landlord",
    amenities,
    tags: ["near stage"],
    image: document.querySelector("#housePhoto").value.trim() || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1100&q=80",
  };

  pendingListings = [newListing, ...pendingListings];
  renderApprovalList();
  document.querySelector("#houseNote").textContent = `Listing sent to admin approval under the ${loggedInLandlordPlan} plan. After approval, tenants can chat with you on WhatsApp.`;
  event.target.reset();
});

document.querySelector("#login").addEventListener("submit", (event) => {
  event.preventDefault();
  loggedInLandlord = document.querySelector("#loginName").value.trim();
  loggedInLandlordEmail = document.querySelector("#loginEmail").value.trim();
  loggedInLandlordPlan = document.querySelector("#loginPlan").value;
  document.querySelector("#loginNote").textContent = `Account created for ${loggedInLandlord}. Pay for the ${loggedInLandlordPlan} plan, then admin will approve your landlord account.`;
  document.querySelector("#postLandlordName").value = loggedInLandlord;
  event.target.classList.add("logged-in");
  renderPaymentInstructions(loggedInLandlordPlan, getPlanPrice(loggedInLandlordPlan));
});

approvalList.addEventListener("click", (event) => {
  const approveButton = event.target.closest("[data-approve]");
  const rejectButton = event.target.closest("[data-reject]");
  const index = approveButton?.dataset.approve ?? rejectButton?.dataset.reject;

  if (index === undefined) return;

  const listing = pendingListings.splice(Number(index), 1)[0];
  if (approveButton && listing) {
    const approvedListing = { ...listing, id: Date.now(), verified: true };
    listings = [approvedListing, ...listings];
    selectedListingId = approvedListing.id;
    renderListings();
    renderDetail();
    renderAreaResults();
  }
  renderApprovalList();
});

pricingGrid.addEventListener("click", (event) => {
  const planButton = event.target.closest("[data-plan]");
  if (!planButton) return;

  renderPaymentInstructions(planButton.dataset.plan, planButton.dataset.price);
});

renderListings();
renderDetail();
renderPlans();
renderApprovalList();
renderAreaResults();
