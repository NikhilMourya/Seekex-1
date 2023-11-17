<template>
  <div class="sidebar">
    <h2>Filters</h2>
    <label for="category">Category:</label>
    <select id="category">
      <!-- <option value="all">All</option> -->
      <option value="clothing">Clothing</option>
      <option value="electronics">Electronics</option>
      <option value="books">Books</option>
    </select>

    <div class="filter-section">
      <label for="priceRange">Price Range</label>
      <select id="priceRange" name="priceRange">
        <option value="all">All</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
      </select>
    </div>
    <div class="filter-section">
      <label for="gender">Gender</label>
      <select id="gender" name="gender">
        <option value="0-50">Male</option>
        <option value="50-100">Female</option>
      </select>
    </div>
    <div class="filter-section">
      <label for="size">Size</label>
      <select id="size" name="size">
        <option value="all">All</option>
        <option value="0-50">XS</option>
        <option value="0-50">SM</option>
        <option value="0-50">M</option>
        <option value="50-100">XL</option>
        <option value="50-100">XXL</option>
        <option value="50-100">XXXL</option>
      </select>
    </div>
    <div class="filter-section">
      <label for="color">Color</label>
      <select id="color" name="color">
        <option value="all">All</option>
        <option value="0-50">Red</option>
        <option value="0-50">Pink</option>
        <option value="0-50">Green</option>
        <option value="50-100">White</option>
        <option value="50-100">Black</option>
        <option value="50-100">Lavender</option>
      </select>
    </div>

    <button onclick="applyFilters">Apply Filters</button>
  </div>
</template>
  
  <script>
import { Component, Prop, Vue } from "vue-property-decorator";
export default {
  name: "FilterView",
  data() {
    return {
      // name:'nasda'
    };
  },
  props: ["src", "title"],
  methods: {
    applyFilters() {
      // Get selected category and price range
      var selectedCategory = document.getElementById("category").value;
      var selectedPrice = document.getElementById("price").value;

      // Filter products based on selected category and price
      var products = document.querySelectorAll(".main-content .product");
      products.forEach(function (product) {
        var category = product.getAttribute("data-category");
        var price = parseFloat(product.getAttribute("data-price"));

        // Check if the product meets the filter criteria
        var categoryFilter =
          selectedCategory === "all" || category === selectedCategory;
        var priceFilter = price <= selectedPrice;

        // Show or hide the product based on filters
        if (categoryFilter && priceFilter) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    },
  },
  // created() {
  //   console.log("created", this.$props.src);
  // },
  mounted() {
    document.getElementById("price").addEventListener("input", function () {
      document.getElementById("price-value").textContent = this.value;
    });
  },
};
</script>


  
<style scoped lang="scss">
h2,
p,
li,
label,option {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
.sidebar {
  width: 100%;
  padding: 20px;
  background-color: #f4f4f4;
  text-align: left;
  border-radius: 0px 20px 20px 0px;

  h2 {
    margin: 5px;
    border-bottom: 1px solid grey;
  }
  .filter-section {
    margin-bottom: 20px;
  }
}
button {
  display: block;
  margin-top: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

select {
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  background-color: #2874f0;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1e5aa7;
}
</style>
  