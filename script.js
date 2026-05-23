const listings = [
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
    price: "KSh 499",
    color: "#a97142",
    features: ["3 active listings", "Call and WhatsApp leads", "Basic landlord profile"],
  },
  {
    name: "Silver",
    price: "KSh 999",
    color: "#8794a6",
    features: ["8 active listings", "Listing analytics", "Faster admin approval"],
  },
  {
    name: "Gold",
    price: "KSh 1,999",
    color: "#d49a18",
    featured: true,
    features: ["20 active listings", "Featured search placement", "Verified landlord badge"],
  },
  {
    name: "Diamond",
    price: "KSh 3,999",
    color: "#2f80ed",
    features: ["50 active listings", "Photo and video priority", "Lead export support"],
  },
  {
    name: "Platinum",
    price: "KSh 6,999",
    color: "#222f3e",
    features: ["Unlimited active listings", "Top city placement", "Dedicated account support"],
  },
  {
    name: "Bitcoin",
    price: "BTC / month",
    color: "#f7931a",
    features: ["Crypto-friendly billing", "Premium investor badge", "Early access to paid boosting"],
  },
];

const listingsGrid = document.querySelector("#listingsGrid");
const listingDetail = document.querySelector("#listingDetail");
const pricingGrid = document.querySelector("#pricingGrid");
const approvalList = document.querySelector("#approvalList");
let activeChip = "all";
let selectedListingId = listings[0].id;
let pendingListings = [
  { name: "Pipeline Bedsitter", location: "Nairobi", rent: 9000, type: "Bedsitter" },
  { name: "Bamburi Single Room", location: "Mombasa", rent: 6500, type: "Single room" },
];

const formatKsh = (amount) => `KSh ${amount.toLocaleString("en-KE")}`;

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
              <a class="contact-button whatsapp" href="https://wa.me/${listing.phone.replace("+", "")}?text=Hi%20${encodeURIComponent(listing.landlord)}%2C%20I%20saw%20${encodeURIComponent(listing.name)}%20on%20Hamiake." target="_blank" rel="noreferrer">WhatsApp</a>
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
      <p>${listing.water}. ${listing.electricity}. Contact ${listing.landlord} directly, then report the listing if details do not match the house shown.</p>
      <div class="detail-actions">
        <a class="secondary-button" href="tel:${listing.phone}">Call Landlord</a>
        <a class="primary-button" href="https://wa.me/${listing.phone.replace("+", "")}?text=Hi%2C%20is%20${encodeURIComponent(listing.name)}%20still%20available%3F" target="_blank" rel="noreferrer">WhatsApp Now</a>
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
              <p>${plan.featured ? "Best for serious agents" : "Monthly landlord plan"}</p>
            </div>
            <span class="plan-badge" style="background:${plan.color}">${plan.name.slice(0, 1)}</span>
          </div>
          <div class="plan-price">${plan.price}</div>
          <ul>
            ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <button class="primary-button" data-plan="${plan.name}">Choose ${plan.name}</button>
        </article>
      `
    )
    .join("");
}

function renderApprovalList() {
  approvalList.innerHTML = pendingListings.length
    ? pendingListings
        .map(
          (listing, index) => `
            <article class="approval-item">
              <strong>${listing.name}</strong>
              <span>${listing.type} in ${listing.location} - ${formatKsh(Number(listing.rent))}</span>
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
  const newListing = {
    name: document.querySelector("#houseName").value,
    location: document.querySelector("#houseLocation").value,
    type: document.querySelector("#houseType").value,
    rent: Number(document.querySelector("#houseRent").value),
  };

  pendingListings = [newListing, ...pendingListings];
  renderApprovalList();
  document.querySelector("#houseNote").textContent = "Listing sent to admin approval. Add photos and verification before publishing.";
  event.target.reset();
});

approvalList.addEventListener("click", (event) => {
  const approveButton = event.target.closest("[data-approve]");
  const rejectButton = event.target.closest("[data-reject]");
  const index = approveButton?.dataset.approve ?? rejectButton?.dataset.reject;

  if (index === undefined) return;

  pendingListings.splice(Number(index), 1);
  renderApprovalList();
});

pricingGrid.addEventListener("click", (event) => {
  const planButton = event.target.closest("[data-plan]");
  if (!planButton) return;

  planButton.textContent = `${planButton.dataset.plan} selected`;
  planButton.disabled = true;
});

renderListings();
renderDetail();
renderPlans();
renderApprovalList();
